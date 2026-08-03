"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import LearnMoreButton from "./LearnMoreButton";
import ScrollReveal from "./ScrollReveal";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const wordVariants = {
  hidden: {
    y: "120%",
    rotate: 2,
    opacity: 0,
  },
  visible: {
    y: "0%",
    rotate: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeOut" as const,
    },
  },
};

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax effects tied to standard scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-[90vh] flex flex-col justify-center pt-32 pb-24 overflow-hidden bg-[var(--color-bg)] border-b border-[var(--color-border)]"
      aria-labelledby="hero-heading"
    >
      {/* Decorative large green abstract blur (asymmetric, minimal) */}
      <motion.div 
        style={{ y: y2, opacity }}
        className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-[var(--color-accent)] rounded-full mix-blend-screen opacity-[0.03] blur-[100px] pointer-events-none"
      />

      <div className="max-w-[1600px] w-full mx-auto px-6 sm:px-8 lg:px-16 flex-1 flex items-center">
        
        {/* Asymmetric Typography-First Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-end w-full">
          
          {/* Main Headline (Left, taking up 8 columns) */}
          <motion.div 
            style={{ y: y1, opacity }}
            className="lg:col-span-8 pointer-events-auto"
          >
            <motion.h1
              id="hero-heading"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-[clamp(4.5rem,10vw,11rem)] font-bold text-[var(--color-ink)] leading-[0.85] tracking-tighter"
            >
              <div className="overflow-hidden pb-2"><motion.div variants={wordVariants}>The</motion.div></div>
              <div className="overflow-hidden pb-2"><motion.div variants={wordVariants}>Operational</motion.div></div>
              <div className="overflow-hidden pb-2"><motion.div variants={wordVariants}>Context</motion.div></div>
              <div className="overflow-hidden pb-2"><motion.div variants={wordVariants} className="text-[var(--color-ink-muted)]">Model.</motion.div></div>
            </motion.h1>
          </motion.div>

          {/* Subtext and CTA (Right, anchored to the bottom, taking up 4 columns) */}
          <motion.div 
            style={{ y: y1, opacity }}
            className="lg:col-span-4 lg:pb-[1.5vw] flex flex-col items-start lg:items-end pointer-events-auto"
          >
            <ScrollReveal delay={600} duration={1200} variant="slide-up">
              <p className="text-xl sm:text-2xl md:text-[22px] text-[var(--color-ink-soft)] leading-[1.6] mb-10 max-w-sm lg:text-right">
                Enterprise transformation has blind spots. We give your teams the operational clarity they need to reason correctly, decide sensibly, and migrate safely.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={750} duration={1200} variant="slide-up">
              <LearnMoreButton />
            </ScrollReveal>
          </motion.div>
          
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-12 left-6 sm:left-8 lg:left-16 hidden md:flex items-center gap-4 text-[var(--color-ink-muted)] text-sm font-mono tracking-wide uppercase"
      >
        <div className="w-[1px] h-12 bg-[var(--color-border)] relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 w-full h-1/2 bg-[var(--color-accent)]"
            animate={{ top: ["-50%", "150%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </div>
        <span>Scroll</span>
      </motion.div>
    </section>
  );
}
