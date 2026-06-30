"use client";

import { motion } from "framer-motion";

const PHASES = [
  {
    phase: "Phase 01",
    title: "Trace",
    description: "We map execution paths across your entire codebase. This reveals hidden dependencies, dead code, and critical risk nodes before modernization begins.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="4" y="4" width="14" height="14" fill="#D8D8D8" />
        <rect x="22" y="4" width="14" height="14" fill="#D8D8D8" />
        <rect x="4" y="22" width="14" height="14" fill="#D8D8D8" />
        <rect x="22" y="22" width="14" height="14" fill="#2FCA54" />
      </svg>
    ),
  },
  {
    phase: "Phase 02",
    title: "Extract",
    description: "We isolate embedded business rules and translate them into readable, version-controlled domain models.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="4" y="4" width="14" height="14" fill="#D8D8D8" />
        <rect x="22" y="4" width="14" height="14" fill="#2FCA54" />
        <rect x="4" y="22" width="14" height="14" fill="#2FCA54" />
        <rect x="22" y="22" width="14" height="14" fill="#2FCA54" />
      </svg>
    ),
  },
  {
    phase: "Phase 03",
    title: "Generate",
    description: "We produce actionable engineering artifacts: OpenAPI specifications, Gherkin scenarios, and structured Jira epics ready for implementation.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="4" y="4" width="14" height="14" fill="#2FCA54" />
        <rect x="22" y="4" width="14" height="14" fill="#2FCA54" />
        <rect x="4" y="22" width="14" height="14" fill="#2FCA54" />
        <rect x="22" y="22" width="14" height="14" fill="#2FCA54" />
      </svg>
    ),
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export default function PipelineCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {PHASES.map((phase, i) => (
        <motion.div
          key={phase.phase}
          className="group relative bg-white border border-[#E0E0E0] p-10 hover:border-[#2FCA54] hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          custom={i}
        >
          <div className="mb-12 transition-transform duration-500 group-hover:scale-105 origin-left">
            {phase.icon}
          </div>
          <div className="pt-8">
            <h3 className="text-3xl font-bold text-[#111111] mb-4">
              {phase.title}
            </h3>
            <p className="text-xl text-[#555555] leading-relaxed">
              {phase.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
