"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function ComplianceSection() {
  return (
    <section
      id="compliance"
      className="py-24 md:py-32 bg-[#F5F5F5] border-b border-[#E0E0E0]"
    >
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8">
        {/* ── Lead statement ── */}
        <motion.div
          className="max-w-3xl mb-20 md:mb-28"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <h2 className="text-[clamp(2rem,5vw,4rem)] font-bold text-[#111111] leading-tight mb-8 break-words">
            Built for Regulated Enterprises.
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-[#555555] leading-relaxed break-words">
            European banking, insurance, and critical infrastructure operators
            need more than a compliance checkbox. They need provable operational
            resilience — and a modernization tool that never sends proprietary
            code to a third-party API.
          </p>
        </motion.div>

        {/* ── Primary claim — large, dominant, editorial weight ── */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6 lg:gap-0 mb-1 border-t-[6px] border-[#111111]"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <div className="pt-8 lg:pt-12 lg:pr-16">
            <p className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold text-[#111111] leading-[1] tracking-tighter break-words">
              Your code
              <br />
              never leaves.
            </p>
          </div>
          <div className="pt-4 lg:pt-12 lg:pl-16 lg:border-l border-[#E0E0E0]">
            <p className="text-lg sm:text-xl md:text-2xl text-[#555555] leading-relaxed max-w-2xl break-words">
              Ensemble of fine-tuned, localized Small Language Models running
              inside your on-premise infrastructure. Zero public API
              dependencies. No OpenAI. No Anthropic. No data crosses your
              network perimeter. Every analysis runs air-gapped.
            </p>
          </div>
        </motion.div>

        {/* ── Supporting pillars — stacked, varying weight, not a grid of clones ── */}
        <div className="border-t border-[#E0E0E0]">
          {/* DORA / NIS2 — gets a bold lead sentence */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-4 lg:gap-0 py-10 md:py-14 border-b border-[#E0E0E0]"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <div className="lg:pr-16">
              <p className="text-2xl sm:text-3xl font-bold text-[#111111] leading-tight break-words">
                DORA &amp; NIS2 aligned.
              </p>
            </div>
            <div className="lg:pl-16 lg:border-l border-[#E0E0E0]">
              <p className="text-base sm:text-lg md:text-xl text-[#555555] leading-relaxed max-w-2xl break-words">
                Cryptographic audit trails link every generated specification
                back to its legacy source line. Immutable change logs and
                operational resilience documentation — generated automatically
                for institutions operating under the Digital Operational
                Resilience Act and NIS2 Directive.
              </p>
            </div>
          </motion.div>

          {/* SBOM */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-4 lg:gap-0 py-10 md:py-14 border-b border-[#E0E0E0]"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <div className="lg:pr-16">
              <p className="text-2xl sm:text-3xl font-bold text-[#111111] leading-tight break-words">
                SBOM on every cycle.
              </p>
            </div>
            <div className="lg:pl-16 lg:border-l border-[#E0E0E0]">
              <p className="text-base sm:text-lg md:text-xl text-[#555555] leading-relaxed max-w-2xl break-words">
                Every modernization cycle produces a complete Software Bill of
                Materials. Know exactly what goes into your new system, traced
                back to the legacy source line that produced it.
              </p>
            </div>
          </motion.div>

          {/* Zero lock-in */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-4 lg:gap-0 py-10 md:py-14"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <div className="lg:pr-16">
              <p className="text-2xl sm:text-3xl font-bold text-[#111111] leading-tight break-words">
                Zero vendor lock-in.
              </p>
            </div>
            <div className="lg:pl-16 lg:border-l border-[#E0E0E0]">
              <p className="text-base sm:text-lg md:text-xl text-[#555555] leading-relaxed max-w-2xl break-words">
                All outputs are standard open formats — OpenAPI specs, Gherkin
                scenarios, Git-native diffs. If you stop using Oricore tomorrow,
                your specifications and tests remain yours entirely.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
