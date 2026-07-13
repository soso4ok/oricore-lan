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
              We read your legacy code (COBOL, Java, mainframe) and extract the business rules buried inside it. Everything runs on your infrastructure. Nothing touches a cloud API. You get PR-ready specs, characterization tests, and DORA-compliant audit trails — without hallucinated code.
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
                We don&apos;t translate syntax. We extract intent. The business
                logic comes out clean, separated from the language it was
                trapped in — before any new code gets written.
              </p>
            </div>

            <div className="flex flex-col border-t-[8px] border-[#111111] pt-12 lg:pl-16 lg:border-t-0 lg:border-l-[8px] lg:pt-0 lg:pb-8">
              <div className="text-[clamp(4.5rem,10vw,10rem)] font-bold text-[#111111] leading-[0.8] tracking-tighter mb-8">
                80<span className="text-[#2FCA54]">%</span>
              </div>
              <p className="text-xl sm:text-2xl md:text-[1.75rem] font-bold text-[#111111] leading-tight mb-6 break-words">
                Of legacy modernization rewrites fail to meet original goals (Standish Group).
              </p>
              <p className="text-base sm:text-lg md:text-xl text-[#555555] leading-relaxed break-words">
                Long-running databases from the Standish Group show that 80% of legacy modernization projects run over budget or fail entirely. The core issue is lost institutional knowledge — you cannot safely rewrite what your team no longer understands.
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
              Four phases.
              <br />
              One system graph that stays current.
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
                Enterprise teams can&apos;t afford tools that guess. Our
                platform doesn&apos;t guess. Every output is deterministic,
                traceable, and verifiable against the source system.
              </p>
            </div>

            <div className="space-y-16">
              <div className="pl-6 md:pl-8 border-l-4 border-[#2FCA54]">
                <p className="text-2xl sm:text-3xl text-[#111111] font-bold leading-relaxed mb-4 break-words">
                  Deterministic Output
                </p>
                <p className="text-base sm:text-lg md:text-xl text-[#555555] leading-relaxed break-words">
                  Static analysis. Deterministic extraction. We parse your
                  system exactly as it executes — every business rule traces
                  back to its source line. No probabilistic guessing.
                </p>
              </div>
              <div className="pl-6 md:pl-8 border-l-4 border-[#2FCA54]">
                <p className="text-2xl sm:text-3xl text-[#111111] font-bold leading-relaxed mb-4 break-words">
                  Architecture-First
                </p>
                <p className="text-base sm:text-lg md:text-xl text-[#555555] leading-relaxed break-words">
                  Generating code is trivial. Understanding intent is hard.
                  We recover the underlying architecture before a single line
                  of modern code gets written.
                </p>
              </div>
              <div className="pl-6 md:pl-8 border-l-4 border-[#111111]">
                <p className="text-2xl sm:text-3xl text-[#111111] font-bold leading-relaxed mb-4 break-words">
                  Zero Hallucination Guarantee
                </p>
                <p className="text-base sm:text-lg md:text-xl text-[#555555] leading-relaxed break-words">
                  Language models fine-tuned on your codebase, running on your
                  hardware — not cloud LLMs predicting what code &ldquo;might
                  look like.&rdquo; Every output gets verified against the
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
              <h3 className="text-xl font-bold text-[#111111] mb-4">What is Apolast?</h3>
              <p className="text-[#555555] leading-relaxed">
                A platform that reads legacy code, extracts the business rules, and produces specs your team can actually ship. Runs on your servers. No cloud dependencies.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#111111] mb-4">How does it avoid hallucinating code?</h3>
              <p className="text-[#555555] leading-relaxed">
                We don&apos;t use general-purpose cloud LLMs to guess what your code does. Apolast uses deterministic static analysis — AST parsing, control-flow graphs, data-flow tracking. Then it generates characterization tests to verify the output matches the original system&apos;s exact behavior. If it can&apos;t verify it, it doesn&apos;t ship it.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#111111] mb-4">Does it work in air-gapped environments?</h3>
              <p className="text-[#555555] leading-relaxed">
                Yes. Everything runs on-premise. No external API calls, no data leaving your network. Built for DORA and NIS2 regulated industries.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#111111] mb-4">What do I actually get out of it?</h3>
              <p className="text-[#555555] leading-relaxed">
                PR-ready specifications, Gherkin test scenarios, dependency graphs (SBOM), and architecture blueprints — committed to your repo as merge-ready pull requests. The system graph hooks into your CI/CD pipeline and updates on every commit, so documentation never goes stale.
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
