"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: "airgap",
    title: "Air-Gapped Execution.",
    content:
      "Language models that run entirely inside your network. Fine-tuned on your code, not the internet. No public API dependencies. No tokens routed to OpenAI or Anthropic. Your proprietary code never crosses your network perimeter.",
  },
  {
    id: "dora",
    title: "DORA-Ready Traceability.",
    content:
      "Every spec we generate links back to the exact legacy source line it came from. Cryptographically signed. Immutable change logs and operational resilience documentation — built for European BFSI institutions operating under the Digital Operational Resilience Act.",
  },
  {
    id: "economics",
    title: "18× Cost Reduction.",
    content:
      "Running our models on your hardware costs a fraction of sending tokens to OpenAI. We've measured up to 18× lower cost compared to GPT-4 API pricing when analyzing a 2-million line COBOL codebase. Fixed infrastructure cost. Predictable budgets.",
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    y: direction > 0 ? 24 : -24,
    opacity: 0,
  }),
  center: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as const },
  },
  exit: (direction: number) => ({
    y: direction > 0 ? -24 : 24,
    opacity: 0,
    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const AUTOPLAY_MS = 6000;

export default function SovereigntyScroll() {
  const [[current, direction], setCurrent] = useState([0, 0]);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const paginate = useCallback((newDirection: number) => {
    setCurrent(([prev]) => {
      const next = prev + newDirection;
      if (next < 0) return [slides.length - 1, newDirection];
      if (next >= slides.length) return [0, newDirection];
      return [next, newDirection];
    });
  }, []);

  const goTo = useCallback((index: number) => {
    setCurrent(([prev]) => [index, index > prev ? 1 : -1]);
  }, []);

  useEffect(() => {
    if (isHovered) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(() => paginate(1), AUTOPLAY_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHovered, paginate, current]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowRight") paginate(1);
      else if (e.key === "ArrowLeft") paginate(-1);
    },
    [paginate]
  );

  const dragStartX = useRef(0);
  const slide = slides[current];

  return (
    <section
      id="sovereignty"
      className="relative bg-[#111111] text-white"
      aria-label="Platform architecture and economics"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16 py-24 md:py-32">

        {/* Two-column layout: content left, SVG right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-start">

          {/* Left column — heading + slides */}
          <div>
            {/* Header */}
            <div className="mb-16 md:mb-20">
              <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[1] mb-5 tracking-tighter">
                On-Premise. Air-Gapped. Yours.
              </h2>
              <p className="text-lg md:text-xl text-[#999999] leading-relaxed">
                Your code stays on your servers. Full stop.
              </p>
            </div>

            {/* Slide area */}
            <div
              className="relative min-h-[240px] md:min-h-[200px] flex items-start gap-12"
              onTouchStart={(e) => {
                dragStartX.current = e.touches[0].clientX;
              }}
              onTouchEnd={(e) => {
                const diff = dragStartX.current - e.changedTouches[0].clientX;
                if (Math.abs(diff) > 50) paginate(diff > 0 ? 1 : -1);
              }}
            >
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={slide.id}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="max-w-3xl"
                >
                  <h3 className="text-[clamp(1.75rem,4vw,3rem)] font-bold leading-[1.1] tracking-tight mb-6 text-[#2FCA54]">
                    {slide.title}
                  </h3>
                  <p className="text-lg md:text-xl text-[#AAAAAA] leading-[1.7]">
                    {slide.content}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Arrows */}
              <div className="hidden md:flex flex-col gap-3 shrink-0 pt-2">
                <button
                  onClick={() => paginate(-1)}
                  className="w-10 h-10 flex items-center justify-center border border-[#333] text-[#666] hover:text-white hover:border-[#2FCA54] transition-colors duration-200 cursor-pointer"
                  aria-label="Previous slide"
                >
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                    <path d="M12 4L6 10L12 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button
                  onClick={() => paginate(1)}
                  className="w-10 h-10 flex items-center justify-center border border-[#333] text-[#666] hover:text-white hover:border-[#2FCA54] transition-colors duration-200 cursor-pointer"
                  aria-label="Next slide"
                >
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                    <path d="M8 4L14 10L8 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Navigation — line indicators */}
            <div className="mt-12 flex items-center gap-3">
              {slides.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => goTo(i)}
                  className="group relative flex items-center cursor-pointer"
                  aria-label={`Slide ${i + 1}`}
                  aria-current={i === current ? "step" : undefined}
                >
                  <div
                    className={`h-[2px] rounded-full transition-all duration-500 ${
                      i === current
                        ? "w-12 bg-[#2FCA54]"
                        : "w-6 bg-[#333] group-hover:bg-[#555]"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right column — pixel art shield */}
          <div className="hidden lg:flex items-start justify-end pt-2 select-none pointer-events-none">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/SH.svg"
              alt="Apolast pixel art security shield representing on-premise air-gapped deployment"
              width={420}
              height={420}
              aria-hidden="true"
              style={{ imageRendering: "pixelated" }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
