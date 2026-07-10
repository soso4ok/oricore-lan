import PipelineCards from "./components/PipelineCards";
import IntegrationWorkflow from "./components/IntegrationWorkflow";
import {
  DynamicSovereigntyScroll,
  DynamicDebtCalculator,
  DynamicComparisonMatrix,
  DynamicComplianceSection,
} from "./components/DynamicClientLoader";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      {/* ─── NAV ─── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 bg-[#FAFAFA]/90 backdrop-blur-md border-b border-[#E0E0E0]"
        aria-label="Main navigation"
      >
        <div className="max-w-[1600px] mx-auto flex items-center justify-between px-6 sm:px-8 py-6">
          <div className="flex items-center gap-4">
            <svg
              width="32"
              height="32"
              viewBox="0 0 148 148"
              fill="none"
              className="w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M6.46929e-06 74C7.74879e-06 59.3642 4.34004 45.0571 12.4713 32.8878C20.6025 20.7186 32.1597 11.2338 45.6814 5.63295C59.2032 0.0320586 74.0821 -1.43338 88.4367 1.42192C102.791 4.27723 115.977 11.325 126.326 21.6741C136.675 32.0232 143.723 45.2088 146.578 59.5634C149.433 73.9179 147.968 88.7969 142.367 102.319C136.766 115.84 127.281 127.398 115.112 135.529C102.943 143.66 88.6358 148 74 148L74 74L6.46929e-06 74Z"
                fill="#333B42"
              />
              <path
                d="M74 3.49123e-05C83.7178 3.44876e-05 93.3405 1.9141 102.319 5.63295C111.297 9.3518 119.454 14.8026 126.326 21.6741C133.197 28.5457 138.648 36.7034 142.367 45.6815C146.086 54.6596 148 64.2822 148 74L74 74L74 3.49123e-05Z"
                fill="#24292E"
              />
              <rect
                x="74"
                y="148"
                width="18.5"
                height="18.5"
                transform="rotate(-180 74 148)"
                fill="#2FCA54"
              />
              <rect
                x="74"
                y="129.5"
                width="18.5"
                height="18.5"
                transform="rotate(-180 74 129.5)"
                fill="#2FCA54"
              />
              <rect
                x="74"
                y="111"
                width="18.5"
                height="18.5"
                transform="rotate(-180 74 111)"
                fill="#2FCA54"
              />
              <rect
                x="74"
                y="92.5"
                width="18.5"
                height="18.5"
                transform="rotate(-180 74 92.5)"
                fill="#2FCA54"
              />
              <rect
                x="55.5"
                y="92.5"
                width="18.5"
                height="18.5"
                transform="rotate(-180 55.5 92.5)"
                fill="#2FCA54"
              />
              <rect
                x="37"
                y="92.5"
                width="18.5"
                height="18.5"
                transform="rotate(-180 37 92.5)"
                fill="#2FCA54"
              />
              <rect
                x="18.5"
                y="92.5"
                width="18.5"
                height="18.5"
                transform="rotate(-180 18.5 92.5)"
                fill="#2FCA54"
              />
              <rect
                x="37"
                y="129.5"
                width="18.5"
                height="18.5"
                transform="rotate(-180 37 129.5)"
                fill="#2FCA54"
              />
            </svg>
            <span className="font-display font-bold text-xl tracking-tight">
              Oricore.
            </span>
          </div>

          <div className="hidden md:flex items-center gap-10">
            <a
              href="#pipeline"
              className="font-display font-medium text-lg text-ink-soft hover:text-ink transition-colors"
            >
              Process
            </a>
            <a
              href="#comparison"
              className="font-display font-medium text-lg text-ink-soft hover:text-ink transition-colors"
            >
              Comparison
            </a>
            <a
              href="#compliance"
              className="font-display font-medium text-lg text-ink-soft hover:text-ink transition-colors"
            >
              Compliance
            </a>
            <a
              href="#demo"
              className="font-display font-medium text-lg text-ink-soft hover:text-ink transition-colors"
            >
              Assess
            </a>
          </div>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section
        className="relative pt-40 pb-20 md:pt-48 md:pb-32 border-b border-[#E0E0E0] overflow-hidden bg-[#FAFAFA]"
        aria-labelledby="hero-heading"
      >
        {/* Background Videos (Catalyst Illustration) */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <video
            src="/videos/home-desktop.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover mix-blend-multiply hidden md:block"
            style={{ objectPosition: '70% center' }}
          />
          <video
            src="/videos/home-mobile.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-top mix-blend-multiply md:hidden"
          />
        </div>

        <div className="max-w-[1600px] mx-auto relative z-10 px-6 sm:px-8 lg:px-16 flex flex-col lg:flex-row gap-16 lg:gap-12 items-start pointer-events-none">
          <div className="w-full lg:w-3/5 pointer-events-auto mix-blend-multiply">
            <h1
              id="hero-heading"
              className="text-[clamp(3.5rem,6vw,6rem)] font-bold text-[#111111] leading-[0.95] tracking-tighter mb-8 break-words"
            >
              Digital Archaeology for enterprise legacy modernization.
            </h1>
            <div className="mb-10 w-24 h-[6px] bg-[#2FCA54]"></div>
            <p className="text-lg sm:text-xl md:text-[22px] text-[#333333] leading-[1.6] mb-12 max-w-2xl break-words">
              Oricore is a continuous legacy modernization platform. Using AST-based logic extraction and on-premise SLM ensembles, we map dependencies, recover lost institutional knowledge, and generate deterministic blueprints. Deliver PR-ready specifications, characterization tests, and DORA-compliant audit trails — without hallucinating code.
            </p>

            <div className="mb-0">
              <a
                href="#paradox"
                className="inline-flex items-center justify-center bg-[#111111] text-white font-medium text-lg px-10 py-5 transition-colors hover:bg-[#1C1C1C]"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── THE MODERNIZATION PARADOX ─── */}
      <section
        id="paradox"
        className="py-24 md:py-32 border-b border-[#E0E0E0] bg-[#F5F5F5]"
      >
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-[clamp(2rem,5vw,4.5rem)] font-bold text-[#111111] leading-tight mb-8 break-words">
                The Modernization Paradox.
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-[#555555] leading-relaxed max-w-lg mb-6 break-words">
                Superficial syntax translators produce what engineers
                call &ldquo;JOBOL&rdquo; — COBOL logic rewritten in Java
                syntax. It compiles. It cannot be maintained.
              </p>
              <p className="text-lg sm:text-xl md:text-2xl text-[#555555] leading-relaxed max-w-lg break-words">
                Oricore extracts clean, pure business logic directly through
                Advanced AST parsing — decoupling intent from implementation
                language before any code is generated.
              </p>
            </div>

            <div className="flex flex-col border-t-[8px] border-[#111111] pt-12 lg:pl-16 lg:border-t-0 lg:border-l-[8px] lg:pt-0 lg:pb-8">
              <div className="text-[clamp(4.5rem,10vw,10rem)] font-bold text-[#111111] leading-[0.8] tracking-tighter mb-8">
                80<span className="text-[#2FCA54]">%</span>
              </div>
              <p className="text-xl sm:text-2xl md:text-[1.75rem] font-bold text-[#111111] leading-tight mb-6 break-words">
                Of manual rewrites fail due to lost institutional knowledge.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-[#555555] leading-relaxed break-words">
                When dealing with million-line monoliths, the code itself is not
                the primary issue — the undocumented business rules are. You
                cannot rewrite what your team no longer understands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PIPELINE: 4-PHASE LIFECYCLE ─── */}
      <section
        id="pipeline"
        className="py-24 md:py-32 bg-[#F0F0F0] border-b border-[#E0E0E0]"
      >
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8">
          <div className="mb-12 md:mb-20 max-w-3xl">
            <h2 className="text-[clamp(2rem,5vw,4.5rem)] font-bold text-[#111111] leading-tight break-words">
              Four autonomous phases.
              <br />
              One Living Graph.
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-[#555555] leading-relaxed mt-6 break-words">
              Not a one-shot consulting report. A continuous SaaS platform that
              hooks into your repository and keeps your system documentation
              current on every commit.
            </p>
          </div>
          <PipelineCards />
        </div>
      </section>

      {/* ─── INTEGRATION WORKFLOW: PR-READY OUTPUTS ─── */}
      <IntegrationWorkflow />

      {/* ─── VS. THE STATUS QUO (COMPARISON MATRIX) ─── */}
      <DynamicComparisonMatrix />

      {/* ─── ON-PREMISE SOVEREIGNTY SCROLL ─── */}
      <DynamicSovereigntyScroll />

      {/* ─── BUILT FOR REGULATED ENTERPRISES ─── */}
      <DynamicComplianceSection />

      {/* ─── ENGINEERING PRINCIPLES / TRUST ─── */}
      <section
        id="principles"
        className="py-24 md:py-32 border-b border-[#E0E0E0] bg-white"
      >
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="text-[clamp(2rem,5vw,4.5rem)] font-bold text-[#111111] leading-tight mb-10 break-words">
                Engineering Principles.
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-[#555555] leading-relaxed max-w-xl break-words">
                We design for stability, predictability, and human oversight.
                Our platform serves enterprise engineering teams who cannot
                afford abstraction layers that hallucinate.
              </p>
            </div>

            <div className="space-y-16">
              <div className="pl-6 md:pl-8 border-l-4 border-[#2FCA54]">
                <p className="text-2xl sm:text-3xl text-[#111111] font-bold leading-relaxed mb-4 break-words">
                  Deterministic Output
                </p>
                <p className="text-base sm:text-lg md:text-xl text-[#555555] leading-relaxed break-words">
                  Static analysis and deterministic extraction. No random
                  guessing, no probabilistic completion. We parse your system
                  exactly as it executes — every business rule is traceable to
                  its source line.
                </p>
              </div>
              <div className="pl-6 md:pl-8 border-l-4 border-[#2FCA54]">
                <p className="text-2xl sm:text-3xl text-[#111111] font-bold leading-relaxed mb-4 break-words">
                  Architecture-First
                </p>
                <p className="text-base sm:text-lg md:text-xl text-[#555555] leading-relaxed break-words">
                  Generating code is trivial; understanding intent is hard. We
                  focus on recovering the underlying architecture before a
                  single line of modern code is written.
                </p>
              </div>
              <div className="pl-6 md:pl-8 border-l-4 border-[#111111]">
                <p className="text-2xl sm:text-3xl text-[#111111] font-bold leading-relaxed mb-4 break-words">
                  Zero Hallucination Guarantee
                </p>
                <p className="text-base sm:text-lg md:text-xl text-[#555555] leading-relaxed break-words">
                  On-premise SLM ensembles fine-tuned on your codebase, not
                  general-purpose cloud LLMs predicting what code &ldquo;might
                  look like.&rdquo; Every output is verified against the
                  source system through automated characterization tests.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TECHNICAL DEBT CALCULATOR ─── */}
      <DynamicDebtCalculator />

      {/* ─── FOOTER ─── */}
      <footer className="py-20 bg-[#111111] text-white">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 flex flex-col md:flex-row justify-between items-start gap-12">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <svg
                width="32"
                height="32"
                viewBox="0 0 148 148"
                fill="none"
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M6.46929e-06 74C7.74879e-06 59.3642 4.34004 45.0571 12.4713 32.8878C20.6025 20.7186 32.1597 11.2338 45.6814 5.63295C59.2032 0.0320586 74.0821 -1.43338 88.4367 1.42192C102.791 4.27723 115.977 11.325 126.326 21.6741C136.675 32.0232 143.723 45.2088 146.578 59.5634C149.433 73.9179 147.968 88.7969 142.367 102.319C136.766 115.84 127.281 127.398 115.112 135.529C102.943 143.66 88.6358 148 74 148L74 74L6.46929e-06 74Z"
                  fill="#333B42"
                />
                <path
                  d="M74 3.49123e-05C83.7178 3.44876e-05 93.3405 1.9141 102.319 5.63295C111.297 9.3518 119.454 14.8026 126.326 21.6741C133.197 28.5457 138.648 36.7034 142.367 45.6815C146.086 54.6596 148 64.2822 148 74L74 74L74 3.49123e-05Z"
                  fill="#24292E"
                />
                <rect
                  x="74"
                  y="148"
                  width="18.5"
                  height="18.5"
                  transform="rotate(-180 74 148)"
                  fill="#2FCA54"
                />
                <rect
                  x="74"
                  y="129.5"
                  width="18.5"
                  height="18.5"
                  transform="rotate(-180 74 129.5)"
                  fill="#2FCA54"
                />
                <rect
                  x="74"
                  y="111"
                  width="18.5"
                  height="18.5"
                  transform="rotate(-180 74 111)"
                  fill="#2FCA54"
                />
                <rect
                  x="74"
                  y="92.5"
                  width="18.5"
                  height="18.5"
                  transform="rotate(-180 74 92.5)"
                  fill="#2FCA54"
                />
                <rect
                  x="55.5"
                  y="92.5"
                  width="18.5"
                  height="18.5"
                  transform="rotate(-180 55.5 92.5)"
                  fill="#2FCA54"
                />
                <rect
                  x="37"
                  y="92.5"
                  width="18.5"
                  height="18.5"
                  transform="rotate(-180 37 92.5)"
                  fill="#2FCA54"
                />
                <rect
                  x="18.5"
                  y="92.5"
                  width="18.5"
                  height="18.5"
                  transform="rotate(-180 18.5 92.5)"
                  fill="#2FCA54"
                />
                <rect
                  x="37"
                  y="129.5"
                  width="18.5"
                  height="18.5"
                  transform="rotate(-180 37 129.5)"
                  fill="#2FCA54"
                />
              </svg>
              <span className="font-display font-bold text-2xl tracking-tight">
                Oricore.
              </span>
            </div>
            <p className="text-base sm:text-lg md:text-xl text-white/60 max-w-sm break-words">
              Continuous legacy modernization. On-premise. Air-gapped.
              Deterministic.
            </p>
          </div>

          <div className="flex gap-16 text-lg">
            <a
              href="mailto:hello@cognitire.dev"
              className="hover:text-accent transition-colors"
            >
              hello@cognitire.dev
            </a>
            <span className="text-white/40">© 2026</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
