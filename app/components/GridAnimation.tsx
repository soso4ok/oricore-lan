"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const GRID_COLS = 12;
const GRID_ROWS = 6;
const TOTAL = GRID_COLS * GRID_ROWS;
const SQUARE_SIZE = 48;
const GAP = 8;

interface Sq {
  id: number;
  x: number;
  y: number;
  rot: number;
  scale: number;
  ordered: boolean;
}

function chaos(i: number, w: number, h: number): Sq {
  return {
    id: i,
    x: 30 + Math.random() * (w - SQUARE_SIZE - 60),
    y: 30 + Math.random() * (h - SQUARE_SIZE - 60),
    rot: Math.random() * 360 - 180,
    scale: 0.4 + Math.random() * 0.9,
    ordered: false,
  };
}

function grid(i: number, w: number, h: number): Partial<Sq> {
  const gw = GRID_COLS * (SQUARE_SIZE + GAP) - GAP;
  const gh = GRID_ROWS * (SQUARE_SIZE + GAP) - GAP;
  return {
    x: (w - gw) / 2 + (i % GRID_COLS) * (SQUARE_SIZE + GAP),
    y: (h - gh) / 2 + Math.floor(i / GRID_COLS) * (SQUARE_SIZE + GAP),
    rot: 0,
    scale: 1,
    ordered: true,
  };
}

export default function GridAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const [sqs, setSqs] = useState<Sq[]>([]);
  const [phase, setPhase] = useState<"chaos" | "sweep" | "done">("chaos");
  const [sweepX, setSweepX] = useState(-100);
  const [dim, setDim] = useState({ w: 800, h: 500 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) =>
      setDim({ w: e.contentRect.width, h: e.contentRect.height })
    );
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (dim.w < 100) return;
    setSqs(Array.from({ length: TOTAL }, (_, i) => chaos(i, dim.w, dim.h)));
    setPhase("chaos");
  }, [dim]);

  useEffect(() => {
    if (phase === "chaos") {
      const t = setTimeout(() => setPhase("sweep"), 2500);
      return () => clearTimeout(t);
    }
    if (phase === "sweep") {
      const dur = 2000;
      const start = performance.now();
      let raf: number;
      const tick = (now: number) => {
        const p = Math.min((now - start) / dur, 1);
        const cx = -100 + p * (dim.w + 200);
        setSweepX(cx);
        setSqs((prev) =>
          prev.map((sq) => {
            if (sq.ordered) return sq;
            const g = grid(sq.id, dim.w, dim.h);
            if (cx > (g.x ?? 0)) return { ...sq, ...g };
            return sq;
          })
        );
        if (p < 1) raf = requestAnimationFrame(tick);
        else setPhase("done");
      };
      raf = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(raf);
    }
    if (phase === "done") {
      const t = setTimeout(() => {
        setSqs((p) => p.map((sq) => chaos(sq.id, dim.w, dim.h)));
        setSweepX(-100);
        setPhase("chaos");
      }, 3500);
      return () => clearTimeout(t);
    }
  }, [phase, dim]);

  return (
    <div ref={ref} className="relative w-full h-full min-h-[420px] md:min-h-[500px] overflow-hidden">
      {/* subtle grid bg */}
      <div className="absolute inset-0 opacity-[0.035]">
        {Array.from({ length: 10 }, (_, i) => (
          <div key={`h${i}`} className="absolute left-0 right-0 h-px bg-[#111111]" style={{ top: `${(i + 1) * 10}%` }} />
        ))}
        {Array.from({ length: 14 }, (_, i) => (
          <div key={`v${i}`} className="absolute top-0 bottom-0 w-px bg-[#111111]" style={{ left: `${(i + 1) * 7.14}%` }} />
        ))}
      </div>

      {phase === "sweep" && (
        <div
          className="absolute top-0 bottom-0 w-[3px] z-10"
          style={{
            left: sweepX,
            background: "linear-gradient(to bottom, transparent, #2FCA54, transparent)",
            boxShadow: "0 0 40px 12px rgba(47,202,84,0.25)",
          }}
        />
      )}

      {sqs.map((sq) => (
        <motion.div
          key={sq.id}
          className="absolute"
          animate={{ x: sq.x, y: sq.y, rotate: sq.rot, scale: sq.scale }}
          transition={{
            type: "spring",
            stiffness: sq.ordered ? 100 : 25,
            damping: sq.ordered ? 16 : 10,
            mass: 0.7,
          }}
          style={{ width: SQUARE_SIZE, height: SQUARE_SIZE }}
        >
          <div
            className="w-full h-full rounded-[3px] transition-colors duration-500"
            style={{
              backgroundColor: sq.ordered ? "#2FCA54" : "#D8D8D8",
              boxShadow: sq.ordered ? "0 0 16px rgba(47,202,84,0.35)" : "0 2px 8px rgba(0,0,0,0.06)",
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}
