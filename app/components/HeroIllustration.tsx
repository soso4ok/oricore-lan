"use client";

import { useEffect, useRef, useCallback } from "react";

/* ─────────────────────────────────────────────────────────
 *  HERO ILLUSTRATION — "The Extraction Canvas"
 *
 *  Concept: A grid of squares representing a codebase.
 *  Grey squares = unstructured legacy code.
 *  Green squares = extracted, structured logic.
 *
 *  Animation loop:
 *    1. Grid starts as scattered, rotated grey squares (chaos)
 *    2. A green "scan line" sweeps diagonally across
 *    3. As it passes each square, the square snaps to grid,
 *       turns green, and briefly pulses with a glow
 *    4. After the sweep completes, the grid holds for a beat,
 *       then softly resets back to chaos for the next cycle
 *
 *  Technique: Pure Canvas 2D for silky 60fps performance.
 *  Inspired by anime.js stagger grid patterns.
 * ──────────────────────────────────────────────────────── */

// ── Configuration ──
const COLS = 18;
const ROWS = 14;
const SQUARE_SIZE = 10;
const GAP = 28;
const CHAOS_RANGE = 12;       // Max random offset in chaos state
const CHAOS_ROTATION = 0.5;   // Max random rotation (radians)
const SWEEP_DURATION = 3200;  // ms for the scan sweep
const HOLD_DURATION = 2400;   // ms to hold the organized state
const RESET_DURATION = 1800;  // ms to fade back to chaos
const CYCLE_TOTAL = SWEEP_DURATION + HOLD_DURATION + RESET_DURATION;

// Colors
const COLOR_GREY = { r: 210, g: 210, b: 210 };
const COLOR_DARK = { r: 180, g: 180, b: 180 };
const COLOR_GREEN = { r: 47, g: 202, b: 84 };
const COLOR_BG = { r: 250, g: 250, b: 250 }; // matches #FAFAFA

// Easing: cubic-bezier approximation of "outExpo"
function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

// Seeded pseudo-random for deterministic chaos
function seededRandom(seed: number): () => number {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

interface Square {
  // Grid position (target / organized state)
  gx: number;
  gy: number;
  // Chaos state offsets
  chaosX: number;
  chaosY: number;
  chaosRot: number;
  chaosScale: number;
  // Diagonal distance for stagger (normalized 0..1)
  diagNorm: number;
}

export default function HeroIllustration() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const startRef = useRef<number>(0);
  const squaresRef = useRef<Square[]>([]);
  const initializedRef = useRef(false);

  const initSquares = useCallback(() => {
    const rand = seededRandom(42);
    const squares: Square[] = [];
    const maxDiag = COLS + ROWS - 2;

    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col < COLS; col++) {
        const gx = col * GAP;
        const gy = row * GAP;
        const diagDist = col + row;

        squares.push({
          gx,
          gy,
          chaosX: (rand() - 0.5) * 2 * CHAOS_RANGE,
          chaosY: (rand() - 0.5) * 2 * CHAOS_RANGE,
          chaosRot: (rand() - 0.5) * 2 * CHAOS_ROTATION,
          chaosScale: 0.6 + rand() * 0.6, // 0.6 .. 1.2
          diagNorm: diagDist / maxDiag,
        });
      }
    }
    squaresRef.current = squares;
  }, []);

  const draw = useCallback((timestamp: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    if (!startRef.current) startRef.current = timestamp;
    const elapsed = (timestamp - startRef.current) % CYCLE_TOTAL;

    // Determine phase
    let sweepProgress: number; // 0 = full chaos, 1 = full organized
    let phase: "sweep" | "hold" | "reset";

    if (elapsed < SWEEP_DURATION) {
      phase = "sweep";
      sweepProgress = elapsed / SWEEP_DURATION;
    } else if (elapsed < SWEEP_DURATION + HOLD_DURATION) {
      phase = "hold";
      sweepProgress = 1;
    } else {
      phase = "reset";
      const resetT = (elapsed - SWEEP_DURATION - HOLD_DURATION) / RESET_DURATION;
      sweepProgress = 1 - easeInOutCubic(resetT);
    }

    // Canvas dimensions (handle DPR)
    const dpr = window.devicePixelRatio || 1;
    const displayW = canvas.clientWidth;
    const displayH = canvas.clientHeight;

    if (canvas.width !== displayW * dpr || canvas.height !== displayH * dpr) {
      canvas.width = displayW * dpr;
      canvas.height = displayH * dpr;
      ctx.scale(dpr, dpr);
    }

    // Clear
    ctx.clearRect(0, 0, displayW, displayH);

    // Center the grid
    const gridW = (COLS - 1) * GAP + SQUARE_SIZE;
    const gridH = (ROWS - 1) * GAP + SQUARE_SIZE;
    const offsetX = (displayW - gridW) / 2;
    const offsetY = (displayH - gridH) / 2;

    ctx.save();
    ctx.translate(offsetX, offsetY);

    const squares = squaresRef.current;
    for (let i = 0; i < squares.length; i++) {
      const sq = squares[i];

      // Per-square progress: staggered by diagonal position
      // During sweep, squares activate in a diagonal wave
      let localProgress: number;
      if (phase === "hold") {
        localProgress = 1;
      } else {
        const staggerWindow = 0.45; // How spread out the stagger is
        const localStart = sq.diagNorm * (1 - staggerWindow);
        const localEnd = localStart + staggerWindow;
        const rawLocal = (sweepProgress - localStart) / (localEnd - localStart);
        localProgress = Math.max(0, Math.min(1, rawLocal));
        localProgress = easeOutExpo(localProgress);
      }

      // Interpolate position
      const x = sq.gx + sq.chaosX * (1 - localProgress);
      const y = sq.gy + sq.chaosY * (1 - localProgress);
      const rot = sq.chaosRot * (1 - localProgress);
      const scale = sq.chaosScale + (1 - sq.chaosScale) * localProgress;

      // Interpolate color (grey → green)
      const isActivating = localProgress > 0.1 && localProgress < 0.95;
      let r: number, g: number, b: number, alpha: number;

      if (localProgress < 0.5) {
        // Grey to dark grey
        const t = localProgress / 0.5;
        r = COLOR_GREY.r + (COLOR_DARK.r - COLOR_GREY.r) * t;
        g = COLOR_GREY.g + (COLOR_DARK.g - COLOR_GREY.g) * t;
        b = COLOR_GREY.b + (COLOR_DARK.b - COLOR_GREY.b) * t;
        alpha = 0.4 + 0.6 * localProgress;
      } else {
        // Dark to green
        const t = (localProgress - 0.5) / 0.5;
        r = COLOR_DARK.r + (COLOR_GREEN.r - COLOR_DARK.r) * t;
        g = COLOR_DARK.g + (COLOR_GREEN.g - COLOR_DARK.g) * t;
        b = COLOR_DARK.b + (COLOR_GREEN.b - COLOR_DARK.b) * t;
        alpha = 1;
      }

      // Draw
      ctx.save();
      ctx.translate(x + SQUARE_SIZE / 2, y + SQUARE_SIZE / 2);
      ctx.rotate(rot);
      ctx.scale(scale, scale);

      // Glow effect when the scan line is passing over this square
      if (isActivating && phase === "sweep") {
        const glowIntensity = Math.sin(localProgress * Math.PI) * 0.6;
        ctx.shadowColor = `rgba(47, 202, 84, ${glowIntensity})`;
        ctx.shadowBlur = 12;
      } else {
        ctx.shadowColor = "transparent";
        ctx.shadowBlur = 0;
      }

      ctx.fillStyle = `rgba(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)}, ${alpha})`;
      ctx.fillRect(-SQUARE_SIZE / 2, -SQUARE_SIZE / 2, SQUARE_SIZE, SQUARE_SIZE);
      ctx.restore();
    }

    // ── Scan line overlay (diagonal sweep) ──
    if (phase === "sweep") {
      const linePos = sweepProgress * (gridW + gridH);
      ctx.save();
      ctx.beginPath();
      // Diagonal line from top-left to bottom-right
      ctx.moveTo(linePos - gridH * 0.8, -20);
      ctx.lineTo(linePos + 30, gridH + 20);

      const gradient = ctx.createLinearGradient(
        linePos - gridH * 0.8, 0,
        linePos + 30, gridH
      );
      gradient.addColorStop(0, "rgba(47, 202, 84, 0)");
      gradient.addColorStop(0.4, "rgba(47, 202, 84, 0.15)");
      gradient.addColorStop(0.5, "rgba(47, 202, 84, 0.35)");
      gradient.addColorStop(0.6, "rgba(47, 202, 84, 0.15)");
      gradient.addColorStop(1, "rgba(47, 202, 84, 0)");

      ctx.strokeStyle = gradient;
      ctx.lineWidth = 60;
      ctx.stroke();
      ctx.restore();
    }

    ctx.restore();

    animRef.current = requestAnimationFrame(draw);
  }, []);

  useEffect(() => {
    if (!initializedRef.current) {
      initSquares();
      initializedRef.current = true;
    }
    animRef.current = requestAnimationFrame(draw);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [initSquares, draw]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ display: "block" }}
      aria-hidden="true"
    />
  );
}
