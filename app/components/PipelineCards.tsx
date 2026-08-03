"use client";

import { motion } from "framer-motion";

const PHASES = [
  {
    title: "Trace",
    description:
      "We map system architectures and workflows across your enterprise. This reveals hidden dependencies, operational risks, and critical nodes before modernization begins.",
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
    title: "Extract",
    description:
      "We isolate core operational models and functional requirements. The result is a clean, framework-agnostic system architecture decoupled from legacy technical debt.",
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
    title: "Generate",
    description:
      "We produce PR-ready specifications, detailed Before/After Diffs, and automated Characterization Tests — including native Gherkin scenarios — to verify functional parity before a single line ships.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="4" y="4" width="14" height="14" fill="#2FCA54" />
        <rect x="22" y="4" width="14" height="14" fill="#2FCA54" />
        <rect x="4" y="22" width="14" height="14" fill="#2FCA54" />
        <rect x="22" y="22" width="14" height="14" fill="#2FCA54" />
      </svg>
    ),
  },
  {
    title: "Sync",
    description:
      "CI-hooks update the system graph on every commit. Documentation, dependency maps, and risk assessments stay current — not stale artifacts from a one-time consulting run.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="4" y="4" width="14" height="14" fill="#2FCA54" />
        <rect x="22" y="4" width="14" height="14" fill="#2FCA54" />
        <rect x="4" y="22" width="14" height="14" fill="#2FCA54" />
        <rect x="22" y="22" width="14" height="14" fill="var(--color-ink)" />
      </svg>
    ),
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

export default function PipelineCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {PHASES.map((phase, i) => (
        <motion.div
          key={phase.title}
          className="group relative bg-[var(--color-bg)] border border-[var(--color-border)] p-10 hover:border-[var(--color-accent)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          custom={i}
        >
          <div className="flex items-center justify-between mb-10">
            <div className="transition-transform duration-500 group-hover:scale-105 origin-left">
              {phase.icon}
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-[var(--color-ink)] mb-4">
              {phase.title}
            </h3>
            <p className="text-lg text-[var(--color-ink-muted)] leading-relaxed">
              {phase.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
