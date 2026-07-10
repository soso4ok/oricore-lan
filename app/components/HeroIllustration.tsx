"use client";

import { useEffect, useRef, useState, useCallback } from "react";

/* ─────────────────────────────────────────────────────────
 *  HERO ILLUSTRATION — "Chaos → Order" extraction pipeline
 *
 *  Visual narrative (matches Oricore's product story):
 *    LEFT:   Chaotic grey squares = undocumented legacy codebase
 *    CENTER: Green extraction node = Oricore's AST analysis engine
 *    RIGHT:  Ordered green grid   = structured output (specs, tests, tasks)
 *
 *  Animation sequence:
 *    1. Chaotic squares scatter randomly (entropy)
 *    2. Center node pulses — extraction begins
 *    3. SVG paths draw from chaos → node → order
 *    4. Green particles flow along paths
 *    5. Right grid squares activate one-by-one (structured output forming)
 *    6. Continuous subtle floating + particle loop
 *
 *  Inspired by anime.js stagger grids & SVG line drawing patterns.
 *  Implemented with pure CSS animations + SVG SMIL (no runtime JS animation loop).
 * ──────────────────────────────────────────────────────── */

/* ── Grid configuration ── */
const CHAOS_COLS = 5;
const CHAOS_ROWS = 7;
const ORDER_COLS = 4;
const ORDER_ROWS = 6;
const CELL = 18;      // Square size in SVG units
const GAP = 6;        // Gap between squares

/* ── Seeded pseudo-random for consistent scatter across renders ── */
function seededRandom(seed: number) {
  const x = Math.sin(seed * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
}

/* ── Chaos square positions (scattered from their grid origin) ── */
function getChaosSquares() {
  const squares = [];
  const baseX = 60;
  const baseY = 140;
  for (let row = 0; row < CHAOS_ROWS; row++) {
    for (let col = 0; col < CHAOS_COLS; col++) {
      const i = row * CHAOS_COLS + col;
      const seed = i + 42;
      // Grid position
      const gx = baseX + col * (CELL + GAP);
      const gy = baseY + row * (CELL + GAP);
      // Scatter offset (chaotic displacement)
      const dx = (seededRandom(seed) - 0.5) * 40;
      const dy = (seededRandom(seed + 1) - 0.5) * 30;
      const rot = (seededRandom(seed + 2) - 0.5) * 25;
      // Opacity varies — some squares are "dead code" (dimmer)
      const opacity = 0.25 + seededRandom(seed + 3) * 0.55;
      squares.push({ x: gx + dx, y: gy + dy, rot, opacity, i, gx, gy });
    }
  }
  return squares;
}

/* ── Order grid positions (perfect alignment) ── */
function getOrderSquares() {
  const squares = [];
  const baseX = 680;
  const baseY = 160;
  for (let row = 0; row < ORDER_ROWS; row++) {
    for (let col = 0; col < ORDER_COLS; col++) {
      const i = row * ORDER_COLS + col;
      squares.push({
        x: baseX + col * (CELL + GAP),
        y: baseY + row * (CELL + GAP),
        i,
        // Diagonal wave delay for activation animation
        delay: (col + row) * 0.18,
      });
    }
  }
  return squares;
}

const chaosSquares = getChaosSquares();
const orderSquares = getOrderSquares();

/* ── Center node position ── */
const NODE_CX = 440;
const NODE_CY = 310;
const NODE_SIZE = 32;

/* ── Connection paths: chaos squares → center → order squares ── */
// Pick specific chaos squares that "feed" into the extraction node
const feedIndices = [2, 8, 12, 17, 22, 28, 32];
// Pick specific order squares that receive structured output
const outputIndices = [0, 5, 9, 14, 19, 23];

function buildFeedPath(sq: typeof chaosSquares[0]) {
  const sx = sq.x + CELL / 2;
  const sy = sq.y + CELL / 2;
  const ex = NODE_CX - NODE_SIZE / 2 - 4;
  const ey = NODE_CY;
  const midX = sx + (ex - sx) * 0.6;
  return `M ${sx} ${sy} C ${midX} ${sy}, ${midX} ${ey}, ${ex} ${ey}`;
}

function buildOutputPath(sq: typeof orderSquares[0]) {
  const sx = NODE_CX + NODE_SIZE / 2 + 4;
  const sy = NODE_CY;
  const ex = sq.x;
  const ey = sq.y + CELL / 2;
  const midX = sx + (ex - sx) * 0.4;
  return `M ${sx} ${sy} C ${midX} ${sy}, ${midX} ${ey}, ${ex} ${ey}`;
}

export default function HeroIllustration() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <div className="relative w-full h-full min-h-[500px] md:min-h-[700px] flex items-center justify-center select-none overflow-hidden">
      {/* ── Keyframes ── */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* Chaos squares: slow drift */
        @keyframes chaos-drift {
          0%   { transform: translate(var(--dx), var(--dy)) rotate(var(--rot)); }
          25%  { transform: translate(calc(var(--dx) + 3px), calc(var(--dy) - 5px)) rotate(calc(var(--rot) + 1.5deg)); }
          50%  { transform: translate(calc(var(--dx) - 2px), calc(var(--dy) + 4px)) rotate(calc(var(--rot) - 1deg)); }
          75%  { transform: translate(calc(var(--dx) + 4px), calc(var(--dy) - 2px)) rotate(calc(var(--rot) + 0.5deg)); }
          100% { transform: translate(var(--dx), var(--dy)) rotate(var(--rot)); }
        }
        .chaos-sq {
          animation: chaos-drift var(--dur) cubic-bezier(0.37, 0, 0.63, 1) infinite;
          will-change: transform;
        }

        /* Center node pulse */
        @keyframes node-pulse {
          0%, 100% { transform: scale(1); filter: drop-shadow(0 0 8px rgba(47,202,84,0.3)); }
          50%      { transform: scale(1.06); filter: drop-shadow(0 0 20px rgba(47,202,84,0.6)); }
        }
        .node-pulse {
          animation: node-pulse 3s cubic-bezier(0.37, 0, 0.63, 1) infinite;
          transform-origin: center;
        }

        /* Order squares: activation sweep */
        @keyframes order-activate {
          0%   { fill: #333333; filter: none; }
          40%  { fill: #2FCA54; filter: drop-shadow(0 0 6px rgba(47,202,84,0.6)); }
          100% { fill: #2FCA54; filter: drop-shadow(0 0 2px rgba(47,202,84,0.3)); }
        }
        .order-sq {
          animation: order-activate 1.2s cubic-bezier(0.16, 1, 0.3, 1) var(--delay) both;
        }

        /* SVG path draw-in */
        @keyframes path-draw-in {
          to { stroke-dashoffset: 0; }
        }

        /* Subtle overall float */
        @keyframes illustration-breathe {
          0%, 100% { transform: translateY(0px); }
          50%      { transform: translateY(-8px); }
        }
        .illustration-float {
          animation: illustration-breathe 10s cubic-bezier(0.37, 0, 0.63, 1) infinite;
        }

        /* Node ring rotation */
        @keyframes ring-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}} />

      {/* ── Main SVG Canvas ── */}
      <div className="illustration-float">
        <svg
          width="880"
          height="620"
          viewBox="0 0 880 620"
          className="w-[660px] sm:w-[720px] md:w-[800px] lg:w-[880px] h-auto"
          aria-hidden="true"
        >
          <defs>
            {/* Glow filters */}
            <filter id="glow-green" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="glow-green-soft" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            {/* Path gradients */}
            <linearGradient id="feed-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#999999" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#2FCA54" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient id="output-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2FCA54" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#2FCA54" stopOpacity="0.3" />
            </linearGradient>
          </defs>

          {mounted && (
            <>
              {/* ───────── LEFT ZONE: Chaotic Legacy Squares ───────── */}
              {/* Label */}
              <text
                x="60"
                y="125"
                fill="#AAAAAA"
                fontSize="10"
                fontFamily="monospace"
                letterSpacing="2"
              >
                LEGACY SOURCE
              </text>

              {/* Chaos squares */}
              {chaosSquares.map((sq) => {
                const dur = 8 + seededRandom(sq.i + 100) * 12;
                return (
                  <rect
                    key={`chaos-${sq.i}`}
                    x={sq.gx}
                    y={sq.gy}
                    width={CELL}
                    height={CELL}
                    rx="2"
                    fill={feedIndices.includes(sq.i) ? "#888888" : "#C0C0C0"}
                    opacity={sq.opacity}
                    className="chaos-sq"
                    style={{
                      "--dx": `${sq.x - sq.gx}px`,
                      "--dy": `${sq.y - sq.gy}px`,
                      "--rot": `${sq.rot}deg`,
                      "--dur": `${dur}s`,
                    } as React.CSSProperties}
                  />
                );
              })}

              {/* Tangled dependency lines between chaos squares */}
              {[
                [0, 6], [1, 7], [3, 8], [5, 11], [6, 12],
                [7, 13], [10, 16], [12, 18], [14, 19],
                [17, 23], [20, 26], [22, 28], [25, 31], [27, 33],
              ].map(([a, b], i) => {
                if (a >= chaosSquares.length || b >= chaosSquares.length) return null;
                const sa = chaosSquares[a];
                const sb = chaosSquares[b];
                return (
                  <line
                    key={`dep-${i}`}
                    x1={sa.gx + CELL / 2}
                    y1={sa.gy + CELL / 2}
                    x2={sb.gx + CELL / 2}
                    y2={sb.gy + CELL / 2}
                    stroke="#D0D0D0"
                    strokeWidth="0.8"
                    opacity="0.3"
                    strokeDasharray="2 3"
                  />
                );
              })}

              {/* ───────── FEED PATHS: Chaos → Center Node ───────── */}
              {feedIndices.map((idx, i) => {
                const sq = chaosSquares[idx];
                if (!sq) return null;
                const pathId = `feed-${i}`;
                const d = buildFeedPath(sq);
                const pathLen = 350;
                const drawDelay = 1.0 + i * 0.2;
                const particleDelay = drawDelay + 1.8;
                const particleDur = 3 + seededRandom(i + 50) * 2;
                return (
                  <g key={pathId}>
                    <path
                      id={pathId}
                      d={d}
                      fill="none"
                      stroke="url(#feed-grad)"
                      strokeWidth="1.2"
                      style={{
                        strokeDasharray: pathLen,
                        strokeDashoffset: pathLen,
                        animation: `path-draw-in 2s cubic-bezier(0.65, 0, 0.35, 1) ${drawDelay}s forwards`,
                      }}
                    />
                    {/* Flowing particle */}
                    <circle r="2.5" fill="#2FCA54" filter="url(#glow-green-soft)" opacity="0">
                      <animate attributeName="opacity" values="0;0.8" dur="0.3s" begin={`${particleDelay}s`} fill="freeze" />
                      <animateMotion
                        dur={`${particleDur}s`}
                        repeatCount="indefinite"
                        begin={`${particleDelay}s`}
                        calcMode="spline"
                        keySplines="0.45 0 0.55 1"
                      >
                        <mpath href={`#${pathId}`} />
                      </animateMotion>
                    </circle>
                  </g>
                );
              })}

              {/* ───────── CENTER: Extraction Engine Node ───────── */}
              {/* Outer rotating ring */}
              <g style={{
                transformOrigin: `${NODE_CX}px ${NODE_CY}px`,
                animation: "ring-spin 30s linear infinite",
              }}>
                <circle
                  cx={NODE_CX}
                  cy={NODE_CY}
                  r={NODE_SIZE + 14}
                  fill="none"
                  stroke="#2FCA54"
                  strokeWidth="0.5"
                  strokeDasharray="6 10"
                  opacity="0.4"
                />
              </g>
              {/* Middle ring */}
              <circle
                cx={NODE_CX}
                cy={NODE_CY}
                r={NODE_SIZE + 6}
                fill="none"
                stroke="#2FCA54"
                strokeWidth="0.8"
                opacity="0.2"
              />
              {/* Core green square (Oricore motif) */}
              <g className="node-pulse">
                <rect
                  x={NODE_CX - NODE_SIZE / 2}
                  y={NODE_CY - NODE_SIZE / 2}
                  width={NODE_SIZE}
                  height={NODE_SIZE}
                  rx="3"
                  fill="#2FCA54"
                  filter="url(#glow-green)"
                />
                {/* Inner structure — 2×2 grid like the Oricore logo */}
                <rect x={NODE_CX - 10} y={NODE_CY - 10} width="8" height="8" rx="1" fill="#111111" opacity="0.3" />
                <rect x={NODE_CX + 2} y={NODE_CY - 10} width="8" height="8" rx="1" fill="#111111" opacity="0.3" />
                <rect x={NODE_CX - 10} y={NODE_CY + 2} width="8" height="8" rx="1" fill="#111111" opacity="0.3" />
                <rect x={NODE_CX + 2} y={NODE_CY + 2} width="8" height="8" rx="1" fill="#FFFFFF" opacity="0.4" />
              </g>
              {/* Label */}
              <text
                x={NODE_CX}
                y={NODE_CY + NODE_SIZE + 24}
                fill="#2FCA54"
                fontSize="9"
                fontFamily="monospace"
                letterSpacing="2.5"
                textAnchor="middle"
                opacity="0.7"
              >
                EXTRACT
              </text>

              {/* ───────── OUTPUT PATHS: Center Node → Order Grid ───────── */}
              {outputIndices.map((idx, i) => {
                const sq = orderSquares[idx];
                if (!sq) return null;
                const pathId = `output-${i}`;
                const d = buildOutputPath(sq);
                const pathLen = 350;
                const drawDelay = 2.0 + i * 0.15;
                const particleDelay = drawDelay + 1.5;
                const particleDur = 3.5 + seededRandom(i + 80) * 2;
                return (
                  <g key={pathId}>
                    <path
                      id={pathId}
                      d={d}
                      fill="none"
                      stroke="url(#output-grad)"
                      strokeWidth="1.2"
                      style={{
                        strokeDasharray: pathLen,
                        strokeDashoffset: pathLen,
                        animation: `path-draw-in 2s cubic-bezier(0.65, 0, 0.35, 1) ${drawDelay}s forwards`,
                      }}
                    />
                    {/* Flowing particle */}
                    <circle r="2.5" fill="#2FCA54" filter="url(#glow-green)" opacity="0">
                      <animate attributeName="opacity" values="0;1" dur="0.3s" begin={`${particleDelay}s`} fill="freeze" />
                      <animateMotion
                        dur={`${particleDur}s`}
                        repeatCount="indefinite"
                        begin={`${particleDelay}s`}
                        calcMode="spline"
                        keySplines="0.45 0 0.55 1"
                      >
                        <mpath href={`#${pathId}`} />
                      </animateMotion>
                    </circle>
                  </g>
                );
              })}

              {/* ───────── RIGHT ZONE: Structured Output Grid ───────── */}
              {/* Label */}
              <text
                x="680"
                y="148"
                fill="#AAAAAA"
                fontSize="10"
                fontFamily="monospace"
                letterSpacing="2"
              >
                STRUCTURED OUTPUT
              </text>

              {/* Order squares — activate in diagonal wave */}
              {orderSquares.map((sq) => (
                <rect
                  key={`order-${sq.i}`}
                  x={sq.x}
                  y={sq.y}
                  width={CELL}
                  height={CELL}
                  rx="2"
                  fill="#333333"
                  className="order-sq"
                  style={{
                    "--delay": `${2.2 + sq.delay}s`,
                  } as React.CSSProperties}
                />
              ))}

              {/* ───────── BOTTOM: Phase labels ───────── */}
              <line x1="60" y1="540" x2="820" y2="540" stroke="#E0E0E0" strokeWidth="0.5" opacity="0.4" />
              {["TRACE", "EXTRACT", "GENERATE", "SYNC"].map((label, i) => (
                <text
                  key={label}
                  x={60 + i * 200 + 80}
                  y="565"
                  fill={i === 1 ? "#2FCA54" : "#BBBBBB"}
                  fontSize="9"
                  fontFamily="monospace"
                  letterSpacing="3"
                  textAnchor="middle"
                  opacity={i === 1 ? 0.8 : 0.5}
                >
                  {label}
                </text>
              ))}
            </>
          )}
        </svg>
      </div>
    </div>
  );
}
