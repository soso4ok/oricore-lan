import PipelineCards from "./components/PipelineCards";
import IntegrationWorkflow from "./components/IntegrationWorkflow";
import LearnMoreButton from "./components/LearnMoreButton";
import HeroIllustration from "./components/HeroIllustration";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {
  DynamicSovereigntyScroll,
  DynamicDebtCalculator,
  DynamicComparisonMatrix,
  DynamicComplianceSection,
} from "./components/DynamicClientLoader";
import InteractiveLink from "./components/InteractiveLink";
import ScrollDepthGauge from "./components/ScrollDepthGauge";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      {/* ─── NAV ─── */}
      <Navbar />

      {/* ─── HERO ─── */}
      <section
        id="hero"
        className="relative pt-40 pb-20 md:pt-48 md:pb-32 border-b border-[#E0E0E0] overflow-hidden bg-[#FAFAFA]"
        aria-labelledby="hero-heading"
      >
        {/* Background Native Web Illustration */}
        <div className="absolute top-0 bottom-0 right-0 w-full md:w-[45%] lg:w-[42%] z-0 pointer-events-none opacity-15 md:opacity-80 select-none flex items-center justify-center">
          <HeroIllustration />
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
              <LearnMoreButton />
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

      {/* ─── AI SEARCH / DEFINITIONS (AEO) ─── */}
      <section
        id="definitions"
        className="py-24 md:py-32 border-b border-[#E0E0E0] bg-[#FAFAFA]"
      >
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8">
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold text-[#111111] leading-tight mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-[#111111] mb-4">What is Oricore?</h3>
              <p className="text-[#555555] leading-relaxed">
                Oricore is a continuous legacy modernization platform. It uses Advanced AST (Abstract Syntax Tree) logic extraction and on-premise Small Language Models (SLMs) to reverse-engineer and map legacy applications, separating pure business logic from outdated syntax (such as COBOL or Java monoliths).
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#111111] mb-4">How does Oricore ensure zero hallucinations?</h3>
              <p className="text-[#555555] leading-relaxed">
                Unlike general-purpose cloud LLMs that probabilistically guess code generation, Oricore relies on deterministic static analysis. It generates characterization tests alongside the extracted logic, verifying that the output matches the exact operational behavior of the original system.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#111111] mb-4">Is Oricore DORA and NIS2 compliant?</h3>
              <p className="text-[#555555] leading-relaxed">
                Yes. Oricore is designed for highly regulated industries like BFSI and Government. It operates entirely on-premise or in air-gapped environments, ensuring that sensitive IP and PII never leave the enterprise network, fully satisfying DORA and NIS2 compliance mandates.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#111111] mb-4">What are the outputs of the platform?</h3>
              <p className="text-[#555555] leading-relaxed">
                Oricore produces PR-ready software specifications, BDD acceptance criteria (Gherkin scenarios), dependency graphs (SBOM), and skeleton microservices architecture. It hooks directly into the CI/CD pipeline to act as a living, continuously updated graph of the system’s true behavior.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <Footer />

      {/* Dynamic Telemetric Scroll Gauge & Ascend Widget */}
      <ScrollDepthGauge />
    </main>
  );
}
