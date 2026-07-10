"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useReducedMotion } from "framer-motion";

/* ─────────────────────────────────────────────────────────
 *  HERO ILLUSTRATION
 *  A native-web recreation of the original Catalyst video:
 *  three floating columns of abstract cards/pills connected
 *  by SVG bezier paths with glowing particles flowing along them.
 *
 *  Animation hierarchy (orchestrated entrance):
 *    1. Columns fade-slide in (staggered L→R, 0.15s offset)
 *    2. SVG paths draw themselves in (stroke-dashoffset)
 *    3. Particles begin flowing after paths finish drawing
 *    4. Dot grid begins its cycling pulse
 *    5. Skeleton bars begin shimmer
 *    6. Columns enter a slow, organic float loop
 * ──────────────────────────────────────────────────────── */

/* ── Shared easing ── */
const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

/* ── Column entrance variants ── */
const columnVariants = {
  hidden: (custom: { x: number; y: number }) => ({
    opacity: 0,
    x: custom.x,
    y: custom.y,
    scale: 0.92,
    filter: "blur(6px)",
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.4,
      ease: EASE_OUT_EXPO,
    },
  },
};

/* ── Card entrance (children stagger inside each column) ── */
const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: EASE_OUT_EXPO },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export default function HeroIllustration() {
  const prefersReduced = useReducedMotion();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <div className="relative w-full h-full min-h-[500px] md:min-h-[700px] flex items-center justify-center select-none overflow-hidden">
      {/* ── Keyframes injected once ── */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* Organic float loops — each column has unique amplitude, period, and slight X sway */
        @keyframes hero-float-1 {
          0%   { transform: translate(0px, 0px) rotate(0deg); }
          25%  { transform: translate(3px, -12px) rotate(0.3deg); }
          50%  { transform: translate(-2px, -22px) rotate(-0.2deg); }
          75%  { transform: translate(4px, -8px) rotate(0.15deg); }
          100% { transform: translate(0px, 0px) rotate(0deg); }
        }
        @keyframes hero-float-2 {
          0%   { transform: translate(0px, 0px) rotate(0deg); }
          33%  { transform: translate(-4px, -30px) rotate(-0.4deg); }
          66%  { transform: translate(3px, -14px) rotate(0.25deg); }
          100% { transform: translate(0px, 0px) rotate(0deg); }
        }
        @keyframes hero-float-3 {
          0%   { transform: translate(0px, 0px) rotate(0deg); }
          20%  { transform: translate(2px, -8px) rotate(0.2deg); }
          50%  { transform: translate(-3px, -18px) rotate(-0.35deg); }
          80%  { transform: translate(1px, -6px) rotate(0.1deg); }
          100% { transform: translate(0px, 0px) rotate(0deg); }
        }
        .hero-float-1 { animation: hero-float-1 14s cubic-bezier(0.37, 0, 0.63, 1) infinite; }
        .hero-float-2 { animation: hero-float-2 18s cubic-bezier(0.37, 0, 0.63, 1) infinite; }
        .hero-float-3 { animation: hero-float-3 12s cubic-bezier(0.37, 0, 0.63, 1) infinite; }

        /* Skeleton shimmer */
        @keyframes skel-shimmer {
          0%   { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .skel-bar {
          background: linear-gradient(90deg, #E5E5E5 25%, #F0F0F0 50%, #E5E5E5 75%);
          background-size: 200% 100%;
          animation: skel-shimmer 2.4s ease-in-out infinite;
        }

        /* Dot grid cycling pulse */
        @keyframes dot-pulse {
          0%, 100% { opacity: 0.35; transform: scale(0.8); }
          50%      { opacity: 1; transform: scale(1.15); }
        }

        /* SVG glow filter fallback */
        .particle-glow {
          filter: drop-shadow(0 0 6px rgba(47, 202, 84, 0.8)) drop-shadow(0 0 12px rgba(47, 202, 84, 0.4));
        }

        /* Path draw-in */
        @keyframes path-draw {
          to { stroke-dashoffset: 0; }
        }
      `}} />

      {/* ── Main Coordinate System (1000×800 internal) ── */}
      <div className="relative w-[1000px] h-[800px] scale-[0.55] sm:scale-[0.65] md:scale-[0.75] lg:scale-[0.95] transition-transform duration-500 origin-center">

        {/* ── SVG Layer: Connection paths + particles ── */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-0"
          viewBox="0 0 1000 800"
          aria-hidden="true"
        >
          <defs>
            {/* Gradient: grey → green */}
            <linearGradient id="lg-grey-green" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#CCCCCC" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#2FCA54" stopOpacity="0.7" />
            </linearGradient>
            {/* Gradient: subtle grey */}
            <linearGradient id="lg-grey" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D0D0D0" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#D0D0D0" stopOpacity="0.35" />
            </linearGradient>
            {/* Particle glow filter (proper SVG glow, not CSS box-shadow) */}
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="glow-soft" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* ── Connection Paths (draw-in on mount) ── */}
          {hasMounted && (
            <>
              {/* Path A: Col2 gradient pill → Col3 dot grid (dashed, subtle) */}
              <path
                id="pathA"
                d="M 490 200 C 620 200, 660 360, 790 360"
                fill="none"
                stroke="url(#lg-grey)"
                strokeWidth="1.2"
                strokeDasharray="5 5"
                style={{
                  strokeDashoffset: prefersReduced ? 0 : 600,
                  animation: prefersReduced ? "none" : "path-draw 2.5s cubic-bezier(0.65, 0, 0.35, 1) 1.2s forwards",
                }}
              />
              {/* Path B: Col2 center face → Col3 top face (solid, primary) */}
              <path
                id="pathB"
                d="M 490 380 C 600 380, 680 160, 790 155"
                fill="none"
                stroke="url(#lg-grey-green)"
                strokeWidth="1.5"
                style={{
                  strokeDasharray: 500,
                  strokeDashoffset: prefersReduced ? 0 : 500,
                  animation: prefersReduced ? "none" : "path-draw 2s cubic-bezier(0.65, 0, 0.35, 1) 1.4s forwards",
                }}
              />
              {/* Path C: Col2 center face → Col3 dot grid (solid) */}
              <path
                id="pathC"
                d="M 490 380 C 620 380, 660 360, 790 360"
                fill="none"
                stroke="url(#lg-grey-green)"
                strokeWidth="1.5"
                style={{
                  strokeDasharray: 400,
                  strokeDashoffset: prefersReduced ? 0 : 400,
                  animation: prefersReduced ? "none" : "path-draw 1.8s cubic-bezier(0.65, 0, 0.35, 1) 1.6s forwards",
                }}
              />
              {/* Path D: Col2 center face → Col3 green pill (solid, sweeping) */}
              <path
                id="pathD"
                d="M 490 380 C 600 380, 680 600, 790 595"
                fill="none"
                stroke="url(#lg-grey-green)"
                strokeWidth="1.5"
                style={{
                  strokeDasharray: 500,
                  strokeDashoffset: prefersReduced ? 0 : 500,
                  animation: prefersReduced ? "none" : "path-draw 2.2s cubic-bezier(0.65, 0, 0.35, 1) 1.5s forwards",
                }}
              />
              {/* Path E: Col2 bottom face → Col3 green pill (dashed, subtle) */}
              <path
                id="pathE"
                d="M 490 710 C 620 710, 660 595, 790 595"
                fill="none"
                stroke="url(#lg-grey)"
                strokeWidth="1.2"
                strokeDasharray="5 5"
                style={{
                  strokeDashoffset: prefersReduced ? 0 : 600,
                  animation: prefersReduced ? "none" : "path-draw 2.5s cubic-bezier(0.65, 0, 0.35, 1) 1.8s forwards",
                }}
              />

              {/* ── Flowing Particles ── */}
              {/* They start with a delay so paths finish drawing first */}
              {!prefersReduced && (
                <>
                  {/* Path B particles (primary flow: face → top face) */}
                  <circle r="3" fill="#2FCA54" filter="url(#glow)" opacity="0">
                    <animate attributeName="opacity" values="0;1" dur="0.3s" begin="3.4s" fill="freeze" />
                    <animateMotion dur="5s" repeatCount="indefinite" begin="3.4s" calcMode="spline" keySplines="0.45 0 0.55 1">
                      <mpath href="#pathB" />
                    </animateMotion>
                  </circle>
                  <circle r="2.5" fill="#2FCA54" filter="url(#glow-soft)" opacity="0">
                    <animate attributeName="opacity" values="0;0.7" dur="0.3s" begin="5.9s" fill="freeze" />
                    <animateMotion dur="5s" repeatCount="indefinite" begin="5.9s" calcMode="spline" keySplines="0.45 0 0.55 1">
                      <mpath href="#pathB" />
                    </animateMotion>
                  </circle>

                  {/* Path C particle (face → dot grid) */}
                  <circle r="2.5" fill="#2FCA54" filter="url(#glow-soft)" opacity="0">
                    <animate attributeName="opacity" values="0;1" dur="0.3s" begin="4s" fill="freeze" />
                    <animateMotion dur="4.5s" repeatCount="indefinite" begin="4s" calcMode="spline" keySplines="0.45 0 0.55 1">
                      <mpath href="#pathC" />
                    </animateMotion>
                  </circle>

                  {/* Path D particles (face → green pill, slower) */}
                  <circle r="3" fill="#2FCA54" filter="url(#glow)" opacity="0">
                    <animate attributeName="opacity" values="0;1" dur="0.3s" begin="3.8s" fill="freeze" />
                    <animateMotion dur="6s" repeatCount="indefinite" begin="3.8s" calcMode="spline" keySplines="0.45 0 0.55 1">
                      <mpath href="#pathD" />
                    </animateMotion>
                  </circle>
                  <circle r="2" fill="#2FCA54" filter="url(#glow-soft)" opacity="0">
                    <animate attributeName="opacity" values="0;0.6" dur="0.3s" begin="6.8s" fill="freeze" />
                    <animateMotion dur="6s" repeatCount="indefinite" begin="6.8s" calcMode="spline" keySplines="0.45 0 0.55 1">
                      <mpath href="#pathD" />
                    </animateMotion>
                  </circle>

                  {/* Path A particle (grey, slow, subtle) */}
                  <circle r="2" fill="#CCCCCC" filter="url(#glow-soft)" opacity="0">
                    <animate attributeName="opacity" values="0;0.5" dur="0.3s" begin="4.5s" fill="freeze" />
                    <animateMotion dur="7s" repeatCount="indefinite" begin="4.5s" calcMode="spline" keySplines="0.45 0 0.55 1">
                      <mpath href="#pathA" />
                    </animateMotion>
                  </circle>

                  {/* Path E particle (grey, slow) */}
                  <circle r="2" fill="#CCCCCC" filter="url(#glow-soft)" opacity="0">
                    <animate attributeName="opacity" values="0;0.5" dur="0.3s" begin="5s" fill="freeze" />
                    <animateMotion dur="8s" repeatCount="indefinite" begin="5s" calcMode="spline" keySplines="0.45 0 0.55 1">
                      <mpath href="#pathE" />
                    </animateMotion>
                  </circle>
                </>
              )}
            </>
          )}
        </svg>

        {/* ── Column 1 (Left) ── */}
        <motion.div
          className="absolute left-[150px] top-[120px] w-[140px] z-10 hero-float-1"
          custom={{ x: -60, y: 40 }}
          initial="hidden"
          animate="visible"
          variants={columnVariants}
          transition={{ delay: 0.1 }}
        >
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="flex flex-col gap-8">
            {/* Portrait Card */}
            <motion.div variants={cardVariants} className="w-[120px] h-[120px] bg-white p-2.5 rounded-[24px] shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-[#EBEBEB] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80"
                alt=""
                className="w-full h-full rounded-[18px] object-cover grayscale opacity-85"
                loading="lazy"
              />
            </motion.div>

            {/* Solid Black Capsule */}
            <motion.div variants={cardVariants} className="w-[80px] h-[180px] bg-[#111111] rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.15)] ml-5" />

            {/* Skeleton Pill Card */}
            <motion.div variants={cardVariants} className="w-[90px] h-[130px] border border-[#E0E0E0] bg-white/80 backdrop-blur-sm rounded-[30px] p-4 flex flex-col gap-2.5 justify-center ml-4">
              <div className="h-2 w-10 skel-bar rounded-full" />
              <div className="h-2 w-6 skel-bar rounded-full" style={{ animationDelay: "0.3s" }} />
              <div className="h-2 w-8 skel-bar rounded-full" style={{ animationDelay: "0.6s" }} />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ── Column 2 (Middle — connection hub) ── */}
        <motion.div
          className="absolute left-[420px] top-[80px] w-[140px] z-10 hero-float-2"
          custom={{ x: 0, y: 60 }}
          initial="hidden"
          animate="visible"
          variants={columnVariants}
          transition={{ delay: 0.25 }}
        >
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="flex flex-col gap-7">
            {/* Vertical Abstract Gradient Capsule */}
            <motion.div variants={cardVariants} className="w-[64px] h-[180px] bg-gradient-to-b from-[#DEC3B2] via-[#BACDB0] to-[#7FA99B] rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.06)] mx-auto" />

            {/* Small Gradient Square */}
            <motion.div variants={cardVariants} className="w-[60px] h-[60px] bg-gradient-to-br from-[#BACDB0] to-[#7FA99B] rounded-[18px] shadow-sm mx-auto" />

            {/* Middle Portrait Card (Main connection node) */}
            <motion.div variants={cardVariants} className="w-[96px] h-[96px] bg-white p-2 rounded-[20px] shadow-[0_4px_24px_rgba(0,0,0,0.08)] border border-[#EBEBEB] overflow-hidden mx-auto">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80"
                alt=""
                className="w-full h-full rounded-[14px] object-cover grayscale opacity-85"
                loading="lazy"
              />
            </motion.div>

            {/* Skeleton Pill Card */}
            <motion.div variants={cardVariants} className="w-[96px] h-[120px] border border-[#E0E0E0] bg-white/80 backdrop-blur-sm rounded-[24px] p-4 flex flex-col gap-2.5 justify-center mx-auto">
              <div className="h-2 w-full skel-bar rounded-full" />
              <div className="h-2 w-2/3 skel-bar rounded-full" style={{ animationDelay: "0.2s" }} />
              <div className="h-2 w-4/5 skel-bar rounded-full" style={{ animationDelay: "0.4s" }} />
            </motion.div>

            {/* Black / White Gradient Capsule */}
            <motion.div variants={cardVariants} className="w-[64px] h-[140px] bg-gradient-to-b from-[#111111] to-[#FAFAFA] border border-[#E5E5E5] rounded-full shadow-sm mx-auto" />

            {/* Bottom Portrait Card */}
            <motion.div variants={cardVariants} className="w-[84px] h-[84px] bg-white p-1.5 rounded-[18px] shadow-[0_4px_24px_rgba(0,0,0,0.08)] border border-[#EBEBEB] overflow-hidden mx-auto">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
                alt=""
                className="w-full h-full rounded-[12px] object-cover grayscale opacity-85"
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ── Column 3 (Right — output targets) ── */}
        <motion.div
          className="absolute left-[730px] top-[100px] w-[140px] z-10 hero-float-3"
          custom={{ x: 60, y: 30 }}
          initial="hidden"
          animate="visible"
          variants={columnVariants}
          transition={{ delay: 0.4 }}
        >
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="flex flex-col gap-8">
            {/* Top Portrait Card */}
            <motion.div variants={cardVariants} className="w-[84px] h-[84px] bg-white p-1.5 rounded-[18px] shadow-[0_4px_24px_rgba(0,0,0,0.08)] border border-[#EBEBEB] overflow-hidden mx-auto">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80"
                alt=""
                className="w-full h-full rounded-[12px] object-cover grayscale opacity-85"
                loading="lazy"
              />
            </motion.div>

            {/* Dot Grid Card (Animated cycling pulse) */}
            <motion.div variants={cardVariants} className="w-[96px] h-[140px] bg-white border border-[#EBEBEB] rounded-[24px] shadow-[0_4px_24px_rgba(0,0,0,0.06)] p-4 flex flex-col justify-center items-center mx-auto">
              <DotGrid />
            </motion.div>

            {/* Skeletal Pill Card (Large, with shimmer) */}
            <motion.div variants={cardVariants} className="w-[110px] h-[190px] border border-[#E0E0E0] bg-white/80 backdrop-blur-sm rounded-[28px] p-5 flex flex-col gap-3 justify-center mx-auto">
              <div className="h-2.5 w-full skel-bar rounded-full" />
              <div className="h-2.5 w-2/3 skel-bar rounded-full" style={{ animationDelay: "0.15s" }} />
              <div className="flex gap-1.5 items-center my-1">
                <div className="h-2 w-2 rounded-[1px] bg-[#2FCA54] shadow-[0_0_4px_rgba(47,202,84,0.5)]" />
                <div className="h-2.5 w-1/2 skel-bar rounded-full" style={{ animationDelay: "0.3s" }} />
              </div>
              <div className="h-2.5 w-3/4 skel-bar rounded-full" style={{ animationDelay: "0.45s" }} />
              <div className="h-2.5 w-1/2 skel-bar rounded-full" style={{ animationDelay: "0.6s" }} />
            </motion.div>

            {/* Green Gradient Pill */}
            <motion.div variants={cardVariants} className="w-[64px] h-[165px] bg-gradient-to-b from-[#2FCA54] via-[#7FA99B] to-[#111111] rounded-full shadow-[0_4px_20px_rgba(47,202,84,0.12)] mx-auto" />
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
 *  DOT GRID — Animated cycling data pulse
 *  Each dot has a unique delay based on a diagonal wave pattern.
 *  Green dots "activate" in a sweep, creating a data-flow effect.
 * ──────────────────────────────────────────────────────── */
function DotGrid() {
  const cols = 3;
  const rows = 5;
  const total = cols * rows;

  return (
    <div className="grid grid-cols-3 gap-[6px]">
      {Array.from({ length: total }).map((_, i) => {
        const col = i % cols;
        const row = Math.floor(i / cols);
        // Diagonal wave delay: creates sweep from top-left to bottom-right
        const waveDelay = (col + row) * 0.35;
        // Cycle duration varies per dot for organic feel
        const dur = 2.8 + (i % 3) * 0.4;

        return (
          <div
            key={i}
            className="w-2 h-2 rounded-[1px] bg-[#2FCA54]"
            style={{
              animation: `dot-pulse ${dur}s cubic-bezier(0.37, 0, 0.63, 1) ${waveDelay}s infinite`,
              boxShadow: "0 0 4px rgba(47, 202, 84, 0.4)",
            }}
          />
        );
      })}
    </div>
  );
}
