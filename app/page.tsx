// Force rebuild to resolve HMR caching issue
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";
import HeroSection from "./components/HeroSection";
import {
  DynamicSovereigntyScroll,
  DynamicDebtCalculator,
  DynamicComparisonMatrix,
  DynamicComplianceSection,
} from "./components/DynamicClientLoader";
import ScrollDepthGauge from "./components/ScrollDepthGauge";

const PIPELINE_PHASES = [
  {
    num: "01",
    title: "Trace",
    body: "We map system architectures and workflows across your enterprise. This reveals hidden dependencies, operational risks, and critical nodes before modernization begins.",
  },
  {
    num: "02",
    title: "Extract",
    body: "We isolate core operational models and functional requirements. The result is a clean, framework-agnostic system architecture decoupled from legacy technical debt.",
  },
  {
    num: "03",
    title: "Generate",
    body: "PR-ready specifications, detailed Before/After Diffs, and automated Characterization Tests — including native Gherkin scenarios — to verify functional parity before a single line ships.",
  },
  {
    num: "04",
    title: "Sync",
    body: "CI-hooks update the system graph on every commit. Documentation, dependency maps, and risk assessments stay current — not stale artifacts from a one-time consulting run.",
  },
] as const;

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-bg)]">
      <Navbar />

      {/* ─── HERO ─── */}
      <HeroSection />

      {/* ─── NARRATIVE BREAK ─── */}
      <section className="py-32 md:py-44 border-b border-[var(--color-border)]">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-28 items-start">
            <ScrollReveal delay={0}>
              <h2 className="text-[clamp(2.5rem,5.5vw,5.5rem)] font-bold text-[var(--color-ink)] leading-[0.92] tracking-tighter">
                The real cost of
                <br />
                modernization is
                <br />
                <span className="text-[var(--color-accent)]">lost context.</span>
              </h2>
            </ScrollReveal>

            <div className="lg:pt-6">
              <ScrollReveal delay={200}>
                <p className="text-xl md:text-2xl text-[var(--color-ink-soft)] leading-[1.6] mb-10">
                  Superficial migration creates technical debt. It compiles, but
                  it cannot be maintained. The operational logic your business
                  depends on gets buried — or worse, silently lost.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={350}>
                <p className="text-xl md:text-2xl text-[var(--color-ink-muted)] leading-[1.6]">
                  We separate true differentiation from technical debt. The
                  operational logic is extracted cleanly, reducing migration risk
                  while sustaining value beyond go-live.
                </p>
              </ScrollReveal>
            </div>
          </div>

          {/* Single stat — editorial, not a bento grid */}
          <ScrollReveal delay={100} className="mt-24 md:mt-32 pt-16 border-t border-[var(--color-border)]">
            <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 lg:gap-20 items-end">
              <div className="text-[clamp(6rem,14vw,14rem)] font-bold text-[var(--color-ink)] leading-[0.75] tracking-tighter">
                80<span className="text-[var(--color-accent)]">%</span>
              </div>
              <div className="pb-4 max-w-xl">
                <p className="text-xl md:text-2xl font-bold text-[var(--color-ink)] leading-tight mb-4">
                  Of enterprise migrations fail to meet original business
                  objectives.
                </p>
                <p className="text-lg text-[var(--color-ink-muted)] leading-relaxed">
                  The core issue is lost institutional knowledge — you cannot
                  safely migrate what your organization no longer
                  understands.{" "}
                  <a
                    href="https://www.standishgroup.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-[var(--color-border)] hover:decoration-[var(--color-accent)] underline-offset-4 transition-colors"
                  >
                    Standish Group
                  </a>
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── HOW IT WORKS — Cinematic vertical reveal ─── */}
      <section
        id="pipeline"
        className="pipeline-section py-32 md:py-44 border-b border-[var(--color-border)] relative overflow-hidden"
        aria-labelledby="pipeline-heading"
      >
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16 relative">
          <h2
            id="pipeline-heading"
            className="pipeline-entrance pipeline-heading mb-20 md:mb-28 text-[clamp(2.5rem,5.5vw,5rem)] font-bold text-[var(--color-ink)] leading-[0.92] tracking-tighter max-w-4xl"
          >
            Four phases.
            <br />
            One living system graph.
          </h2>

          <div className="space-y-0">
            {PIPELINE_PHASES.map((phase) => (
              <article
                key={phase.num}
                className="pipeline-entrance pipeline-phase group grid grid-cols-1 lg:grid-cols-[120px_280px_1fr] gap-4 lg:gap-0 py-12 md:py-16 items-start border-t border-[var(--color-border)]"
              >
                <span className="font-mono text-[var(--color-accent)] text-lg lg:pt-1">
                  {phase.num}
                </span>
                <h3 className="text-3xl md:text-4xl font-bold text-[var(--color-ink)] tracking-tight lg:pt-0 group-hover:text-[var(--color-accent)] transition-colors duration-500">
                  {phase.title}
                </h3>
                <p className="text-lg md:text-xl text-[var(--color-ink-muted)] leading-[1.7] max-w-2xl lg:pl-12">
                  {phase.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONCRETE OUTPUTS ─── */}
      <section
        id="integration"
        className="py-32 md:py-44 border-b border-[var(--color-border)]"
      >
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-28">
            <div className="lg:col-span-5">
              <ScrollReveal>
                <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold text-[var(--color-ink)] leading-[0.92] tracking-tighter mb-8">
                  Concrete outputs.
                  <br />
                  Not slide decks.
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={150}>
                <p className="text-xl md:text-2xl text-[var(--color-ink-muted)] leading-[1.6]">
                  Every extraction cycle produces artifacts that your engineering
                  team can review, merge, and ship — not abstract consulting
                  deliverables that expire on arrival.
                </p>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "PR-Ready Specifications",
                    desc: "Structured domain models committed directly to your repositories as merge-ready pull requests.",
                  },
                  {
                    title: "Before/After Diffs",
                    desc: "Detailed change previews showing how legacy logic maps to modernized equivalents.",
                  },
                  {
                    title: "Characterization Tests",
                    desc: "Automated test suites — including Gherkin scenarios — to verify functional parity.",
                  },
                  {
                    title: "CI/CD Integration",
                    desc: "CI-hooks keep the Living Graph synchronized on every commit. Documentation updates automatically.",
                  },
                ].map((item, i) => (
                  <ScrollReveal key={item.title} delay={i * 100} variant="scale">
                    <div className="p-8 md:p-10 border border-[var(--color-border)] bg-[var(--color-bg-alt)] hover:border-[var(--color-accent)] transition-colors duration-500 h-full">
                      <h3 className="text-xl font-bold text-[var(--color-ink)] mb-4">
                        {item.title}
                      </h3>
                      <p className="text-[var(--color-ink-muted)] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── COMPARISON ─── */}
      <DynamicComparisonMatrix />

      {/* ─── ON-PREMISE ─── */}
      <DynamicSovereigntyScroll />

      {/* ─── COMPLIANCE ─── */}
      <DynamicComplianceSection />

      {/* ─── PRINCIPLES — Asymmetric editorial layout ─── */}
      <section
        id="principles"
        className="py-32 md:py-44 border-b border-[var(--color-border)]"
      >
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16">
          <ScrollReveal className="mb-20 md:mb-28 max-w-3xl">
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold text-[var(--color-ink)] leading-[0.92] tracking-tighter mb-8">
              Deploy strategically.
              <br />
              Integrate into operations.
            </h2>
            <p className="text-xl md:text-2xl text-[var(--color-ink-muted)] leading-[1.6]">
              Align, plan, and execute your strategy using objective information
              about the state of your enterprise.
            </p>
          </ScrollReveal>

          <div className="space-y-0">
            {[
              {
                title: "Actionable Intelligence",
                body: "Understand how your processes truly run. Identify the most impactful opportunities to implement improvements and deploy modernization safely.",
                accent: true,
              },
              {
                title: "Design for Operations",
                body: "Generating code is trivial. Understanding intent is hard. Redesign operations based on deep insight. Define workflows, outcomes, guardrails, and best practices.",
                accent: true,
              },
              {
                title: "Migrate with Confidence",
                body: "Power your operations with real-time context, deploy it where it drives measurable impact, and integrate it seamlessly into existing workflows.",
                accent: false,
              },
            ].map((item, i) => (
              <ScrollReveal
                key={item.title}
                delay={i * 120}
                className="border-t border-[var(--color-border)]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6 lg:gap-20 py-12 md:py-16">
                  <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-ink)] tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-lg md:text-xl text-[var(--color-ink-muted)] leading-[1.7] max-w-2xl">
                    {item.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DEBT CALCULATOR ─── */}
      <DynamicDebtCalculator />

      {/* ─── FAQ — Clean, minimal ─── */}
      <section
        id="definitions"
        className="py-32 md:py-44 border-b border-[var(--color-border)]"
      >
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16">
          <ScrollReveal>
            <h2 className="text-[clamp(2.5rem,4vw,3.5rem)] font-bold text-[var(--color-ink)] leading-tight mb-16 md:mb-20">
              Frequently asked questions
            </h2>
          </ScrollReveal>

          <div className="space-y-0">
            {[
              {
                q: "What is Apolast?",
                a: "A platform that gives your enterprise the operational context it needs to succeed. It provides system clarity and continuous insights so you can transform your operations. Runs on your servers.",
              },
              {
                q: "How does it ensure operational reliability?",
                a: "Apolast uses deterministic validation to verify system behavior and requirements. If it can\u2019t verify it, it doesn\u2019t ship it.",
              },
              {
                q: "Does it work in air-gapped environments?",
                a: "Yes. Everything runs on-premise. No external API calls, no data leaving your network. Built for DORA and NIS2 regulated industries.",
              },
              {
                q: "What do I actually get?",
                a: "PR-ready specifications, Gherkin test scenarios, and architecture blueprints \u2014 committed to your repo. The system provides the operational clarity you need to orchestrate people and legacy tech.",
              },
            ].map((faq, i) => (
              <ScrollReveal
                key={faq.q}
                delay={i * 80}
                variant="fade"
                className="border-t border-[var(--color-border)]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-4 lg:gap-20 py-10 md:py-14">
                  <h3 className="text-xl font-bold text-[var(--color-ink)]">
                    {faq.q}
                  </h3>
                  <p className="text-lg text-[var(--color-ink-muted)] leading-relaxed max-w-2xl">
                    {faq.a}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ScrollDepthGauge />
    </main>
  );
}
