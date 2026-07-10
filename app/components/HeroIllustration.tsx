"use client";

import { useEffect, useState } from "react";

/* ─────────────────────────────────────────────────────────
 *  HERO ILLUSTRATION — Vertical "Chaos → Order" flow
 *
 *  Visual concept:
 *    TOP:     Scattered, misaligned grey squares (entropy)
 *    MIDDLE:  Extraction node — green square with orbital ring
 *    BOTTOM:  Clean, aligned green grid (structured output)
 *
 *  Flow reads top-to-bottom. No labels. No text.
 *  The illustration communicates through form alone:
 *  disorder dissolves into order through a single focal point.
 *
 *  Design rules applied from research:
 *    — No 10px uppercase labels (AI tell #2)
 *    — No decorative badges or filler
 *    — Visual effect serves communicative role only
 *    — Asymmetric tension in chaos zone, precision in output zone
 *    — Generous spacing, restraint over density
 * ──────────────────────────────────────────────────────── */

const CELL = 22;
const GAP = 10;

/* Seeded pseudo-random for consistent layout across renders */
function sr(seed: number) {
  const x = Math.sin(seed * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
}

/* ── Chaos squares (scattered, top zone) ── */
function getChaosSquares() {
  const cols = 6;
  const rows = 5;
  const baseX = 95;
  const baseY = 50;
  const squares = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const i = r * cols + c;
      const gx = baseX + c * (CELL + GAP);
      const gy = baseY + r * (CELL + GAP);
      const dx = (sr(i + 10) - 0.5) * 44;
      const dy = (sr(i + 20) - 0.5) * 34;
      const rot = (sr(i + 30) - 0.5) * 20;
      const opacity = 0.2 + sr(i + 40) * 0.5;
      squares.push({ gx, gy, dx, dy, rot, opacity, i });
    }
  }
  return squares;
}

/* ── Order squares (aligned, bottom zone) ── */
function getOrderSquares() {
  const cols = 5;
  const rows = 4;
  const baseX = 110;
  const baseY = 660;
  const squares = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const i = r * cols + c;
      const delay = (c + r) * 0.16;
      squares.push({ x: baseX + c * (CELL + GAP), y: baseY + r * (CELL + GAP), i, delay });
    }
  }
  return squares;
}

const chaosSquares = getChaosSquares();
const orderSquares = getOrderSquares();

/* Center extraction node */
const NODE_CX = 240;
const NODE_CY = 460;
const NODE_R = 26;

/* Which chaos squares feed into the node */
const feedIdx = [3, 7, 11, 16, 22, 27];
/* Which order squares receive output */
const outIdx = [0, 4, 10, 14, 17, 19];

function feedPath(sq: typeof chaosSquares[0]) {
  const sx = sq.gx + CELL / 2;
  const sy = sq.gy + CELL / 2;
  const ey = NODE_CY - NODE_R - 6;
  const midY = sy + (ey - sy) * 0.55;
  return `M ${sx} ${sy} C ${sx} ${midY}, ${NODE_CX} ${midY}, ${NODE_CX} ${ey}`;
}

function outputPath(sq: typeof orderSquares[0]) {
  const sy = NODE_CY + NODE_R + 6;
  const ey = sq.y + CELL / 2;
  const ex = sq.x + CELL / 2;
  const midY = sy + (ey - sy) * 0.45;
  return `M ${NODE_CX} ${sy} C ${NODE_CX} ${midY}, ${ex} ${midY}, ${ex} ${ey}`;
}

export default function HeroIllustration() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center select-none overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes chaos-drift {
          0%   { transform: translate(var(--dx), var(--dy)) rotate(var(--rot)); }
          33%  { transform: translate(calc(var(--dx) + 2px), calc(var(--dy) - 4px)) rotate(calc(var(--rot) + 1deg)); }
          66%  { transform: translate(calc(var(--dx) - 3px), calc(var(--dy) + 3px)) rotate(calc(var(--rot) - 0.8deg)); }
          100% { transform: translate(var(--dx), var(--dy)) rotate(var(--rot)); }
        }
        .c-sq { animation: chaos-drift var(--dur) cubic-bezier(0.37,0,0.63,1) infinite; will-change: transform; }

        @keyframes node-breathe {
          0%, 100% { transform: scale(1); opacity: 1; }
          50%      { transform: scale(1.08); opacity: 0.9; }
        }
        .node-core { animation: node-breathe 4s cubic-bezier(0.37,0,0.63,1) infinite; transform-origin: center; }

        @keyframes ring-rotate { to { transform: rotate(360deg); } }

        @keyframes order-on {
          0%   { fill: #E0E0E0; }
          60%  { fill: #2FCA54; }
          100% { fill: #2FCA54; }
        }
        .o-sq { animation: order-on 0.9s cubic-bezier(0.16,1,0.3,1) var(--d) both; }

        @keyframes draw-in { to { stroke-dashoffset: 0; } }

        @keyframes float-all {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-6px); }
        }
        .ill-float { animation: float-all 12s cubic-bezier(0.37,0,0.63,1) infinite; }
      `}} />

      <div className="ill-float">
        <svg
          width="480"
          height="900"
          viewBox="0 0 480 900"
          className="w-[340px] sm:w-[400px] md:w-[440px] lg:w-[480px] h-auto"
          aria-hidden="true"
        >
          <defs>
            <filter id="gl" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="b" />
              <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <filter id="gls" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="b" />
              <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <linearGradient id="fg" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#BBBBBB" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#2FCA54" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient id="og" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2FCA54" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#2FCA54" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          {mounted && (
            <>
              {/* ── TOP: Chaos squares ── */}
              {chaosSquares.map((sq) => (
                <rect
                  key={`c${sq.i}`}
                  x={sq.gx}
                  y={sq.gy}
                  width={CELL}
                  height={CELL}
                  rx="1.5"
                  fill={feedIdx.includes(sq.i) ? "#999" : "#CCCCCC"}
                  opacity={sq.opacity}
                  className="c-sq"
                  style={{
                    "--dx": `${sq.dx}px`,
                    "--dy": `${sq.dy}px`,
                    "--rot": `${sq.rot}deg`,
                    "--dur": `${9 + sr(sq.i + 99) * 10}s`,
                  } as React.CSSProperties}
                />
              ))}

              {/* ── FEED PATHS: Chaos → Node ── */}
              {feedIdx.map((idx, i) => {
                const sq = chaosSquares[idx];
                if (!sq) return null;
                const pid = `f${i}`;
                const d = feedPath(sq);
                const dd = 0.8 + i * 0.25;
                const pd = dd + 1.6;
                const dur = 3.5 + sr(i + 60) * 2;
                return (
                  <g key={pid}>
                    <path
                      id={pid}
                      d={d}
                      fill="none"
                      stroke="url(#fg)"
                      strokeWidth="1"
                      style={{
                        strokeDasharray: 300,
                        strokeDashoffset: 300,
                        animation: `draw-in 1.8s cubic-bezier(0.65,0,0.35,1) ${dd}s forwards`,
                      }}
                    />
                    <circle r="2" fill="#2FCA54" filter="url(#gls)" opacity="0">
                      <animate attributeName="opacity" values="0;0.7" dur="0.3s" begin={`${pd}s`} fill="freeze" />
                      <animateMotion dur={`${dur}s`} repeatCount="indefinite" begin={`${pd}s`} calcMode="spline" keySplines="0.45 0 0.55 1">
                        <mpath href={`#${pid}`} />
                      </animateMotion>
                    </circle>
                  </g>
                );
              })}

              {/* ── CENTER: Extraction node ── */}
              {/* Outer orbital ring */}
              <g style={{ transformOrigin: `${NODE_CX}px ${NODE_CY}px`, animation: "ring-rotate 28s linear infinite" }}>
                <circle cx={NODE_CX} cy={NODE_CY} r={NODE_R + 12} fill="none" stroke="#2FCA54" strokeWidth="0.5" strokeDasharray="4 8" opacity="0.35" />
              </g>
              {/* Inner ring */}
              <circle cx={NODE_CX} cy={NODE_CY} r={NODE_R + 4} fill="none" stroke="#2FCA54" strokeWidth="0.6" opacity="0.15" />
              {/* Core square */}
              <g className="node-core">
                <rect
                  x={NODE_CX - NODE_R}
                  y={NODE_CY - NODE_R}
                  width={NODE_R * 2}
                  height={NODE_R * 2}
                  rx="3"
                  fill="#2FCA54"
                  filter="url(#gl)"
                />
                {/* 2×2 inner grid (Oricore logo motif) */}
                <rect x={NODE_CX - 10} y={NODE_CY - 10} width="8" height="8" rx="1" fill="#111" opacity="0.25" />
                <rect x={NODE_CX + 2}  y={NODE_CY - 10} width="8" height="8" rx="1" fill="#111" opacity="0.25" />
                <rect x={NODE_CX - 10} y={NODE_CY + 2}  width="8" height="8" rx="1" fill="#111" opacity="0.25" />
                <rect x={NODE_CX + 2}  y={NODE_CY + 2}  width="8" height="8" rx="1" fill="#FFF" opacity="0.35" />
              </g>

              {/* ── OUTPUT PATHS: Node → Order grid ── */}
              {outIdx.map((idx, i) => {
                const sq = orderSquares[idx];
                if (!sq) return null;
                const pid = `o${i}`;
                const d = outputPath(sq);
                const dd = 1.8 + i * 0.18;
                const pd = dd + 1.4;
                const dur = 3.8 + sr(i + 70) * 2;
                return (
                  <g key={pid}>
                    <path
                      id={pid}
                      d={d}
                      fill="none"
                      stroke="url(#og)"
                      strokeWidth="1"
                      style={{
                        strokeDasharray: 300,
                        strokeDashoffset: 300,
                        animation: `draw-in 1.8s cubic-bezier(0.65,0,0.35,1) ${dd}s forwards`,
                      }}
                    />
                    <circle r="2" fill="#2FCA54" filter="url(#gl)" opacity="0">
                      <animate attributeName="opacity" values="0;0.9" dur="0.3s" begin={`${pd}s`} fill="freeze" />
                      <animateMotion dur={`${dur}s`} repeatCount="indefinite" begin={`${pd}s`} calcMode="spline" keySplines="0.45 0 0.55 1">
                        <mpath href={`#${pid}`} />
                      </animateMotion>
                    </circle>
                  </g>
                );
              })}

              {/* ── BOTTOM: Ordered output grid ── */}
              {orderSquares.map((sq) => (
                <rect
                  key={`o${sq.i}`}
                  x={sq.x}
                  y={sq.y}
                  width={CELL}
                  height={CELL}
                  rx="1.5"
                  fill="#E0E0E0"
                  className="o-sq"
                  style={{ "--d": `${2.4 + sq.delay}s` } as React.CSSProperties}
                />
              ))}
            </>
          )}
        </svg>
      </div>
    </div>
  );
}
