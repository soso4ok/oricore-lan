"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const slides = [
  {
    id: "validation",
    title: "Human Validation.",
    content: "We map the code, but humans make the decisions. Every extracted business rule includes a confidence score and flags complex logic for engineering review."
  },
  {
    id: "dora",
    title: "Cryptographic Traceability.",
    content: "You always know the origin of a business rule. Every generated blueprint links directly back to the specific line of legacy code that produced it."
  },
  {
    id: "residency",
    title: "Data Residency.",
    content: "Your proprietary logic never leaves your infrastructure. We deploy isolated agent pools with absolute data sovereignty and zero cross-tenant contamination."
  }
];

export default function SovereigntyScroll() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // 3 slides, we want to move left by 2 slides worth of width.
  // We will map the vertical scroll progress [0, 1] to horizontal transform [0, -66.66%].
  // Actually, -66.66% moves it by exactly 2 screen widths if total width is 300vw.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.666%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-[#111111] text-white">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        
        {/* Static Header pinned at the top */}
        <div className="absolute top-16 md:top-32 left-8 md:left-32 z-30 max-w-4xl pointer-events-none">
          <h2 className="text-[clamp(3rem,6vw,5.5rem)] font-bold leading-[1] mb-6 tracking-tighter">
            Architectural Sovereignty.
          </h2>
          <p className="text-xl md:text-2xl text-white/50 max-w-2xl leading-relaxed">
            Enterprise-grade compliance requires absolute data control.
          </p>
        </div>

        {/* Left and Right Edge Fades (Pure Black to Transparent) */}
        <div className="absolute top-0 left-0 bottom-0 w-24 md:w-80 bg-gradient-to-r from-[#111111] to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-24 md:w-80 bg-gradient-to-l from-[#111111] to-transparent z-20 pointer-events-none" />

        {/* Horizontal Scrolling Track */}
        <motion.div style={{ x }} className="flex w-[300vw] h-full items-center pt-20 md:pt-28">
          
          {slides.map((slide, index) => (
            <SlideItem key={slide.id} slide={slide} index={index} progress={scrollYProgress} />
          ))}

        </motion.div>
        
        {/* Scroll Progress Bar at Bottom */}
        <div className="absolute bottom-12 left-8 md:left-32 right-8 md:right-32 h-1 bg-[#333333]">
           <motion.div 
             className="h-full bg-[#2FCA54]"
             style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
           />
        </div>

      </div>
    </section>
  );
}

function SlideItem({ slide, index, progress }: { slide: any; index: number; progress: any }) {
  // Animate background position to light up text when centered and dim when leaving:
  const titleBgPos = useTransform(
    progress,
    index === 0
      ? [0, 0.2, 0.35]
      : index === 1
      ? [0.35, 0.5, 0.65, 0.8]
      : [0.8, 0.95, 1],
    index === 0
      ? ["50% 0%", "50% 0%", "0% 0%"]
      : index === 1
      ? ["100% 0%", "50% 0%", "50% 0%", "0% 0%"]
      : ["100% 0%", "50% 0%", "50% 0%"]
  );

  const opacity = useTransform(
    progress,
    index === 0
      ? [0, 0.2, 0.35, 1]
      : index === 1
      ? [0, 0.35, 0.5, 0.65, 0.8, 1]
      : [0, 0.8, 0.95, 1],
    index === 0
      ? [1, 1, 0, 0]
      : index === 1
      ? [0, 0, 1, 1, 0, 0]
      : [0, 0, 1, 1]
  );

  const y = useTransform(
    progress,
    index === 0
      ? [0, 0.2, 0.35]
      : index === 1
      ? [0.35, 0.5, 0.65, 0.8]
      : [0.8, 0.95, 1],
    index === 0
      ? [0, 0, -30]
      : index === 1
      ? [30, 0, 0, -30]
      : [30, 0, 0]
  );

  return (
    <div className="w-[100vw] h-full flex items-center px-8 md:px-32 shrink-0">
      <motion.div style={{ opacity, y }} className="w-full max-w-5xl pt-8">
        <motion.h3 
          style={{ 
            backgroundImage: "linear-gradient(to right, #111111 0%, #111111 15%, #FAFAFA 25%, #2FCA54 40%, #2FCA54 60%, #FAFAFA 75%, #111111 85%, #111111 100%)",
            backgroundSize: "500% 100%",
            backgroundPosition: titleBgPos,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            color: "transparent"
          }}
          className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold mb-8 leading-[1.1] tracking-tight inline-block"
        >
          {slide.title}
        </motion.h3>
        <p className="text-2xl md:text-3xl text-[#999999] leading-relaxed max-w-3xl">
          {slide.content}
        </p>
      </motion.div>
    </div>
  );
}
