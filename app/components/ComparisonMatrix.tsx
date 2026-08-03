"use client";

import { motion } from "framer-motion";

interface RowData {
  criterion: string;
  legacy: string;
  apolast: string;
}

const ROWS: RowData[] = [
  {
    criterion: "Analysis & Mapping",
    legacy: "Superficial scanning and manual documentation",
    apolast: "Continuous system mapping and deep dependency analysis",
  },
  {
    criterion: "Output Quality",
    legacy:
      'Technical debt — operational context lost in manual migrations. Unmaintainable from day one',
    apolast:
      "Clean, structured operational specifications decoupled from legacy debt",
  },
  {
    criterion: "Verification",
    legacy: "Manual QA. Hope-based testing",
    apolast:
      "Automated Characterization Tests and Gherkin scenarios for functional parity",
  },
  {
    criterion: "Documentation",
    legacy: "Static PDF report delivered once, outdated within weeks",
    apolast:
      'Living Graph synced to your CI/CD pipeline — updated on every commit',
  },
  {
    criterion: "Data Residency",
    legacy:
      "Code sent to public cloud LLMs (OpenAI, Anthropic). Data crosses borders",
    apolast:
      "100% on-premise execution with air-gapped SLM ensembles. Zero external API calls",
  },
  {
    criterion: "Cost Model",
    legacy:
      "Per-token pricing through cloud LLM APIs. Costs scale unpredictably",
    apolast:
      "Fixed on-premise SLMs — up to 18× cheaper than routing enterprise tokens through public cloud",
  },
  {
    criterion: "Continuity",
    legacy: "One-time consulting engagement. Knowledge leaves with the team",
    apolast:
      "Continuous SaaS platform with CI-hooks. System graph persists and evolves",
  },
];

const rowVariants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.06,
      duration: 0.5,
    },
  }),
};

export default function ComparisonMatrix() {
  return (
    <section
      id="comparison"
      className="py-24 md:py-32 bg-[var(--color-bg)] border-b border-[var(--color-border)]"
    >
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8">
        <div className="mb-12 md:mb-20 max-w-3xl">
          <h2 className="text-[clamp(2rem,5vw,4rem)] font-bold text-[var(--color-ink)] leading-tight mb-8 break-words">
            Vs. The Status Quo.
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-[var(--color-ink-muted)] leading-relaxed break-words">
            Most legacy migration tools perform superficial lift-and-shift
            operations without understanding operational context. The result compiles but cannot be
            maintained, extended, or reasoned about. We take a fundamentally
            different approach.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b-2 border-[var(--color-ink)]">
                <th className="py-5 pr-8 text-lg font-bold text-[var(--color-ink)] w-[22%]">
                  Criterion
                </th>
                <th className="py-5 pr-8 text-lg font-bold text-[var(--color-ink-muted)] w-[39%]">
                  Traditional Legacy Migration
                </th>
                <th className="py-5 text-lg font-bold text-[var(--color-ink)] w-[39%]">
                  Apolast — Operational Intelligence
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, i) => (
                <motion.tr
                  key={row.criterion}
                  className="border-b border-[var(--color-border)] group"
                  variants={rowVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  custom={i}
                >
                  <td className="py-6 pr-8 text-base font-bold text-[var(--color-ink)] align-top">
                    {row.criterion}
                  </td>
                  <td className="py-6 pr-8 text-base text-[var(--color-ink-muted)] leading-relaxed align-top">
                    {row.legacy}
                  </td>
                  <td className="py-6 text-base text-[var(--color-ink-muted)] leading-relaxed align-top group-hover:text-[var(--color-ink)] transition-colors duration-200">
                    {row.apolast}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-6">
          {ROWS.map((row, i) => (
            <motion.div
              key={row.criterion}
              className="border border-[var(--color-border)] bg-[var(--color-bg)] p-6"
              variants={rowVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              custom={i}
            >
              <p className="font-bold text-lg text-[var(--color-ink)] mb-4">
                {row.criterion}
              </p>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-bold text-[var(--color-ink-muted)] mb-1">
                    Traditional Approach
                  </p>
                  <p className="text-base text-[var(--color-ink-muted)] leading-relaxed">
                    {row.legacy}
                  </p>
                </div>
                <div className="border-t border-[var(--color-border)] pt-3">
                  <p className="text-sm font-bold text-[var(--color-accent)] mb-1">
                    Apolast
                  </p>
                  <p className="text-base text-[var(--color-ink-muted)] leading-relaxed">
                    {row.apolast}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
