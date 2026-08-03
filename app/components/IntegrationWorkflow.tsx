"use client";

const steps = [
  {
    title: "PR-Ready Specifications",
    description:
      "Structured domain models committed directly to your repositories as merge-ready pull requests with full context and rationale.",
  },
  {
    title: "Before/After Diffs",
    description:
      "Detailed change previews showing exactly how legacy logic maps to modernized equivalents — reviewable in any standard diff tool.",
  },
  {
    title: "Characterization Tests",
    description:
      "Automated test suites — including native Gherkin scenarios — generated to verify functional parity between legacy and modernized systems.",
  },
  {
    title: "CI/CD Integration",
    description:
      "CI-hooks keep the Living Graph synchronized on every commit. Documentation, risk maps, and dependency analysis update automatically.",
  },
];

export default function IntegrationWorkflow() {
  return (
    <section
      id="integration"
      className="py-24 md:py-32 bg-[var(--color-bg)] border-b border-[var(--color-border)] overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          {/* Text Column */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <h2 className="text-[clamp(2rem,5vw,4rem)] font-bold text-[var(--color-ink)] leading-tight mb-8 break-words">
              Concrete Outputs. Not Slide Decks.
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-[var(--color-ink-muted)] leading-relaxed break-words">
              Every extraction cycle produces artifacts that your engineering
              team can review, merge, and ship — not abstract consulting
              deliverables that expire on arrival.
            </p>
          </div>

          {/* Workflow Graphic Column */}
          <div className="lg:col-span-8 relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 relative z-10">
              {steps.map((step, i) => (
                <div
                  key={i}
                  className="relative flex bg-[var(--color-bg)] border-2 border-[var(--color-border)]"
                >
                  {/* Left Ticket Stub */}
                  <div className="w-14 md:w-18 border-r-2 border-dashed border-[var(--color-border)] flex flex-col items-center justify-center shrink-0">
                    <span className="font-mono text-sm text-[var(--color-ink-muted)] [writing-mode:vertical-rl] rotate-180">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Right Ticket Body */}
                  <div className="p-6 md:p-8 flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 text-[var(--color-ink)] break-words">
                      {step.title}
                    </h3>
                    <p className="text-base sm:text-lg leading-relaxed text-[var(--color-ink-muted)] break-words">
                      {step.description}
                    </p>
                  </div>

                  {/* Top Cutout */}
                  <div
                    className="absolute -top-3 left-[55px] md:left-[71px] -translate-x-1/2 w-6 h-6 bg-[var(--color-bg)] border-2 border-[var(--color-border)] rounded-full z-10"
                    style={{
                      clipPath: "polygon(0 50%, 100% 50%, 100% 100%, 0 100%)",
                    }}
                    aria-hidden="true"
                  />

                  {/* Bottom Cutout */}
                  <div
                    className="absolute -bottom-3 left-[55px] md:left-[71px] -translate-x-1/2 w-6 h-6 bg-[var(--color-bg)] border-2 border-[var(--color-border)] rounded-full z-10"
                    style={{
                      clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)",
                    }}
                    aria-hidden="true"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
