"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const slides = [
  {
    id: "airgap",
    title: "Air-Gapped Execution.",
    content:
      "Ensemble of fine-tuned, localized Small Language Models running inside your on-premise infrastructure. No public API dependencies. No tokens routed to OpenAI or Anthropic. Your proprietary code never crosses your network perimeter.",
  },
  {
    id: "dora",
    title: "DORA-Ready Traceability.",
    content:
      "Cryptographic audit trails link every generated specification back to the exact legacy source line that produced it. Immutable change logs and operational resilience documentation — built for European BFSI institutions operating under the Digital Operational Resilience Act.",
  },
  {
    id: "economics",
    title: "18× Cost Reduction.",
    content:
      "On-premise optimized SLMs run up to 18× cheaper than routing enterprise-scale tokens through public cloud LLMs. Fixed infrastructure cost. Predictable budgets. No per-token surprise invoices scaling with your codebase size.",
  },
];

export default function SovereigntyScroll() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 0.1, 0.45, 0.55, 0.9, 1.0],
    ["0%", "0%", "-33.333%", "-33.333%", "-66.666%", "-66.666%"]
  );

  return (
    <section
      id="sovereignty"
      ref={targetRef}
      className="relative h-[500vh] bg-[#111111] text-white"
      aria-label="Platform architecture and economics"
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        {/* ── Fixed Header Zone ── */}
        <div className="shrink-0 px-8 md:px-32 pt-0 pb-0 flex flex-col items-center text-center">
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[1] mb-4 tracking-tighter">
            On-Premise. Air-Gapped. Yours.
          </h2>
          <p className="text-lg md:text-xl text-[#CCCCCC] max-w-2xl leading-relaxed">
            Enterprise-grade data sovereignty with provable operational
            resilience.
          </p>
        </div>

        {/* ── Slide Zone (takes content height) ── */}
        <div className="relative h-[340px]">
          {/* Edge fades */}
          <div
            className="absolute top-0 left-0 bottom-0 w-16 md:w-48 bg-gradient-to-r from-[#111111] to-transparent z-20 pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute top-0 right-0 bottom-0 w-16 md:w-48 bg-gradient-to-l from-[#111111] to-transparent z-20 pointer-events-none"
            aria-hidden="true"
          />

          {/* Horizontal Track */}
          <motion.div
            style={{ x }}
            className="flex w-[300vw] h-full items-start pt-[25px]"
          >
            {slides.map((slide, index) => (
              <SlideItem
                key={slide.id}
                slide={slide}
                index={index}
                progress={scrollYProgress}
              />
            ))}
          </motion.div>
        </div>

        {/* Progress bar at bottom */}
        <ScrollProgressBar progress={scrollYProgress} />
      </div>
    </section>
  );
}

function SlideItem({
  slide,
  index,
  progress,
}: {
  slide: { id: string; title: string; content: string };
  index: number;
  progress: MotionValue<number>;
}) {
  const titleBgPos = useTransform(
    progress,
    index === 0
      ? [0, 0.1, 0.45]
      : index === 1
        ? [0.1, 0.45, 0.55, 0.9]
        : [0.55, 0.9, 1.0],
    index === 0
      ? ["50% 0%", "50% 0%", "0% 0%"]
      : index === 1
        ? ["100% 0%", "50% 0%", "50% 0%", "0% 0%"]
        : ["100% 0%", "50% 0%", "50% 0%"]
  );

  const opacity = useTransform(
    progress,
    index === 0
      ? [0, 0.1, 0.45, 1.0]
      : index === 1
        ? [0, 0.1, 0.45, 0.55, 0.9, 1.0]
        : [0, 0.55, 0.9, 1.0],
    index === 0
      ? [1, 1, 0, 0]
      : index === 1
        ? [0, 0, 1, 1, 0, 0]
        : [0, 0, 1, 1]
  );

  const y = useTransform(
    progress,
    index === 0
      ? [0, 0.1, 0.45]
      : index === 1
        ? [0.1, 0.45, 0.55, 0.9]
        : [0.55, 0.9, 1.0],
    index === 0
      ? [0, 0, -30]
      : index === 1
        ? [30, 0, 0, -30]
        : [30, 0, 0]
  );

  return (
    <div className="w-[100vw] h-full flex items-start justify-center px-8 md:px-32 shrink-0">
      <motion.div style={{ opacity, y }} className="w-full max-w-4xl flex flex-col items-center text-center">
        <motion.h3
          style={{
            backgroundImage:
              "linear-gradient(to right, #111111 0%, #111111 15%, #FAFAFA 25%, #2FCA54 40%, #2FCA54 60%, #FAFAFA 75%, #111111 85%, #111111 100%)",
            backgroundSize: "500% 100%",
            backgroundPosition: titleBgPos,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            color: "transparent",
          }}
          className="text-[clamp(2rem,5vw,4rem)] font-bold mb-6 leading-[1.1] tracking-tight inline-block"
        >
          {slide.title}
        </motion.h3>
        <p className="text-xl md:text-2xl text-[#CCCCCC] leading-relaxed max-w-3xl">
          {slide.content}
        </p>
      </motion.div>
    </div>
  );
}

function ScrollProgressBar({ progress }: { progress: MotionValue<number> }) {
  const total = 24;
  return (
    <div className="shrink-0 px-8 md:px-32 mt-[25px] w-full max-w-4xl mx-auto">
      <div className="relative flex items-center justify-between w-full h-4">
        {/* Background Line */}
        <div className="absolute left-0 right-0 h-[1px] bg-[#333333] z-0" />
        
        {/* Progress Line */}
        <motion.div
          className="absolute left-0 right-0 h-[1px] bg-[#2FCA54] z-0"
          style={{ scaleX: progress, transformOrigin: "0%" }}
        />

        {/* Audit Trail Nodes */}
        {Array.from({ length: total }).map((_, i) => (
          <ProgressSquare key={i} index={i} total={total - 1} progress={progress} />
        ))}
      </div>
    </div>
  );
}

function ProgressSquare({
  index,
  total,
  progress,
}: {
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const threshold = index / total;

  const backgroundColor = useTransform(
    progress,
    [threshold - 0.03, threshold],
    ["#333333", "#2FCA54"]
  );

  const scale = useTransform(
    progress,
    [threshold - 0.03, threshold, threshold + 0.03],
    [1, 1.4, 1]
  );

  const boxShadow = useTransform(
    progress,
    [threshold - 0.03, threshold, threshold + 0.03],
    [
      "0 0 0px rgba(47, 202, 84, 0)",
      "0 0 10px rgba(47, 202, 84, 0.7)",
      "0 0 2px rgba(47, 202, 84, 0.2)",
    ]
  );

  return (
    <motion.div
      style={{ backgroundColor, scale, boxShadow }}
      className="w-2 h-2 rounded-[1px] z-10"
    />
  );
}
