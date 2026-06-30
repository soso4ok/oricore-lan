import GridAnimation from "./components/GridAnimation";
import PipelineCards from "./components/PipelineCards";
import NeuronGrid from "./components/NeuronGrid";
import SovereigntyScroll from "./components/SovereigntyScroll";
import DebtCalculator from "./components/DebtCalculator";
import IntegrationWorkflow from "./components/IntegrationWorkflow";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      {/* ─── NAV ─── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAFAFA]/90 backdrop-blur-md border-b border-[#E0E0E0]">
        <div className="max-w-[1600px] mx-auto flex items-center justify-between px-8 py-6">
          <div className="flex items-center gap-4">
            <svg width="32" height="32" viewBox="0 0 148 148" fill="none" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.46929e-06 74C7.74879e-06 59.3642 4.34004 45.0571 12.4713 32.8878C20.6025 20.7186 32.1597 11.2338 45.6814 5.63295C59.2032 0.0320586 74.0821 -1.43338 88.4367 1.42192C102.791 4.27723 115.977 11.325 126.326 21.6741C136.675 32.0232 143.723 45.2088 146.578 59.5634C149.433 73.9179 147.968 88.7969 142.367 102.319C136.766 115.84 127.281 127.398 115.112 135.529C102.943 143.66 88.6358 148 74 148L74 74L6.46929e-06 74Z" fill="#333B42" />
              <path d="M74 3.49123e-05C83.7178 3.44876e-05 93.3405 1.9141 102.319 5.63295C111.297 9.3518 119.454 14.8026 126.326 21.6741C133.197 28.5457 138.648 36.7034 142.367 45.6815C146.086 54.6596 148 64.2822 148 74L74 74L74 3.49123e-05Z" fill="#24292E" />
              <rect x="74" y="148" width="18.5" height="18.5" transform="rotate(-180 74 148)" fill="#2FCA54" />
              <rect x="74" y="129.5" width="18.5" height="18.5" transform="rotate(-180 74 129.5)" fill="#2FCA54" />
              <rect x="74" y="111" width="18.5" height="18.5" transform="rotate(-180 74 111)" fill="#2FCA54" />
              <rect x="74" y="92.5" width="18.5" height="18.5" transform="rotate(-180 74 92.5)" fill="#2FCA54" />
              <rect x="55.5" y="92.5" width="18.5" height="18.5" transform="rotate(-180 55.5 92.5)" fill="#2FCA54" />
              <rect x="37" y="92.5" width="18.5" height="18.5" transform="rotate(-180 37 92.5)" fill="#2FCA54" />
              <rect x="18.5" y="92.5" width="18.5" height="18.5" transform="rotate(-180 18.5 92.5)" fill="#2FCA54" />
              <rect x="37" y="129.5" width="18.5" height="18.5" transform="rotate(-180 37 129.5)" fill="#2FCA54" />
            </svg>
            <span className="font-display font-bold text-xl tracking-tight">
              Oricore.
            </span>
          </div>

          <div className="hidden md:flex items-center gap-10">
            <a href="#pipeline" className="font-display font-medium text-lg text-ink-soft hover:text-ink transition-colors">
              Process
            </a>
            <a href="#clients" className="font-display font-medium text-lg text-ink-soft hover:text-ink transition-colors">
              Clients
            </a>
          </div>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section className="relative pt-40 pb-0 md:pt-48 md:pb-0 border-b border-[#E0E0E0] overflow-hidden bg-[#FAFAFA]">

        <div className="max-w-[1600px] mx-auto relative z-10 flex flex-col lg:flex-row items-stretch">

          {/* Left: Headline & CTA */}
          <div className="lg:w-7/12 px-8 lg:pr-16 pb-20 md:pb-32 flex flex-col justify-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#111111] leading-[1.02] tracking-tighter mb-12 max-w-3xl">
              Recover business logic from undocumented legacy systems without rewriting your code.
            </h1>
            <p className="text-2xl text-[#555555] leading-relaxed mb-12 max-w-2xl">
              Oricore analyzes undocumented enterprise codebases, maps dependencies, and recovers lost institutional knowledge. We generate deterministic architectural blueprints so your team can modernize safely.
            </p>
            
            <div className="mb-16">
              <a href="#demo" className="inline-block bg-[#111111] !text-white font-medium text-lg px-10 py-4 hover:bg-[#2FCA54] hover:!text-[#111111] transition-colors duration-300">
                Learn More
              </a>
            </div>

          </div>

          {/* Right: Neuron Grid Animation */}
          <div className="lg:w-5/12 min-h-[400px] lg:min-h-full">
            <NeuronGrid />
          </div>

        </div>
      </section>

      {/* ─── VALUE PROPOSITION / EXTRACTION ─── */}
      <section className="py-32 md:py-40 border-b border-[#E0E0E0] bg-white">
        <div className="max-w-[1600px] mx-auto px-8 mt-32 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter">
            Stop guessing how your legacy systems work.
          </h2>
          <p className="text-2xl text-black/50 mb-12">
            Recover your business logic and start modernizing with confidence.
          </p>
          <a href="#demo" className="inline-block bg-[#2FCA54] text-[#111111] font-bold text-lg px-12 py-5 hover:bg-black hover:text-white transition-colors duration-300">
            Request a Demo
          </a>
        </div>
      </section>

      {/* ─── THE MODERNIZATION PARADOX ─── */}
      <section className="py-32 md:py-40 border-b border-[#E0E0E0] bg-[#F5F5F5]">
        <div className="max-w-[1600px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-[clamp(3rem,5vw,4.5rem)] font-bold text-[#111111] leading-tight mb-8">
                The Modernization Paradox.
              </h2>
              <p className="text-2xl text-[#555555] leading-relaxed max-w-lg mb-8">
                Technical debt costs enterprises <strong className="text-[#111111]">$370 billion</strong> annually. Yet, attempting to manually untangle systems that have evolved for decades is a gamble.
              </p>
            </div>
            
            <div className="flex flex-col border-t-[8px] border-[#111111] pt-12 lg:pl-16 lg:border-t-0 lg:border-l-[8px] lg:pt-0 lg:pb-8">
              <div className="text-[clamp(6rem,10vw,10rem)] font-bold text-[#111111] leading-[0.8] tracking-tighter mb-8">
                80<span className="text-[#2FCA54]">%</span>
              </div>
              <p className="text-[1.75rem] font-bold text-[#111111] leading-tight mb-6">
                Of manual rewrites fail due to lost institutional knowledge.
              </p>
              <p className="text-xl text-[#555555] leading-relaxed">
                When dealing with million-line monoliths, the code itself isn't the primary issue—the undocumented business rules buried within it are. You cannot rewrite what your team no longer understands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PIPELINE ─── */}
      <section id="pipeline" className="py-32 md:py-40 bg-[#F0F0F0] border-b border-[#E0E0E0]">
        <div className="max-w-[1600px] mx-auto px-8">
          <div className="mb-20">
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold text-[#111111] leading-tight">
              Three autonomous phases.<br />
              One structured output.
            </h2>
          </div>
          <PipelineCards />
        </div>
      </section>

      {/* ─── ECOSYSTEM INTEGRATION ─── */}
      {/* ─── INTEGRATION WORKFLOW ─── */}
      <IntegrationWorkflow />

      {/* ─── ARCHITECTURAL SOVEREIGNTY ─── */}
      <SovereigntyScroll />

      {/* ─── ENGINEERING PRINCIPLES / TRUST ─── */}
      <section id="clients" className="py-32 md:py-40 border-b border-[#E0E0E0] bg-white">
        <div className="max-w-[1600px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold text-[#111111] leading-tight mb-10">
                Engineering Principles.
              </h2>
              <p className="text-2xl text-[#555555] leading-relaxed max-w-xl">
                We design for stability, predictability, and human oversight. Our platform serves Fortune 500 engineering teams who cannot afford abstraction layers to hallucinate.
              </p>
            </div>

            <div className="space-y-16">
              <div className="pl-8 border-l-4 border-[#2FCA54]">
                <p className="text-3xl text-[#111111] font-bold leading-relaxed mb-4">
                  Deterministic Output
                </p>
                <p className="text-xl text-[#555555] leading-relaxed">
                  We rely on static analysis and deterministic extraction. No stochastic guessing. We parse your system exactly as it executes.
                </p>
              </div>
              <div className="pl-8 border-l-4 border-[#2FCA54]">
                <p className="text-3xl text-[#111111] font-bold leading-relaxed mb-4">
                  Architecture-First
                </p>
                <p className="text-xl text-[#555555] leading-relaxed">
                  Generating code is trivial; understanding intent is hard. We focus on recovering the underlying architecture before a single line of modern code is written.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── DEBT CALCULATOR DEMO ─── */}
      <DebtCalculator />

      {/* ─── FOOTER ─── */}
      <footer className="py-20 bg-[#111111] text-white">
        <div className="max-w-[1600px] mx-auto px-8 flex flex-col md:flex-row justify-between items-start gap-12">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <svg width="32" height="32" viewBox="0 0 148 148" fill="none" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.46929e-06 74C7.74879e-06 59.3642 4.34004 45.0571 12.4713 32.8878C20.6025 20.7186 32.1597 11.2338 45.6814 5.63295C59.2032 0.0320586 74.0821 -1.43338 88.4367 1.42192C102.791 4.27723 115.977 11.325 126.326 21.6741C136.675 32.0232 143.723 45.2088 146.578 59.5634C149.433 73.9179 147.968 88.7969 142.367 102.319C136.766 115.84 127.281 127.398 115.112 135.529C102.943 143.66 88.6358 148 74 148L74 74L6.46929e-06 74Z" fill="#333B42" />
                <path d="M74 3.49123e-05C83.7178 3.44876e-05 93.3405 1.9141 102.319 5.63295C111.297 9.3518 119.454 14.8026 126.326 21.6741C133.197 28.5457 138.648 36.7034 142.367 45.6815C146.086 54.6596 148 64.2822 148 74L74 74L74 3.49123e-05Z" fill="#24292E" />
                <rect x="74" y="148" width="18.5" height="18.5" transform="rotate(-180 74 148)" fill="#2FCA54" />
                <rect x="74" y="129.5" width="18.5" height="18.5" transform="rotate(-180 74 129.5)" fill="#2FCA54" />
                <rect x="74" y="111" width="18.5" height="18.5" transform="rotate(-180 74 111)" fill="#2FCA54" />
                <rect x="74" y="92.5" width="18.5" height="18.5" transform="rotate(-180 74 92.5)" fill="#2FCA54" />
                <rect x="55.5" y="92.5" width="18.5" height="18.5" transform="rotate(-180 55.5 92.5)" fill="#2FCA54" />
                <rect x="37" y="92.5" width="18.5" height="18.5" transform="rotate(-180 37 92.5)" fill="#2FCA54" />
                <rect x="18.5" y="92.5" width="18.5" height="18.5" transform="rotate(-180 18.5 92.5)" fill="#2FCA54" />
                <rect x="37" y="129.5" width="18.5" height="18.5" transform="rotate(-180 37 129.5)" fill="#2FCA54" />
              </svg>
              <span className="font-display font-bold text-2xl tracking-tight">
                Oricore.
              </span>
            </div>
            <p className="text-xl text-white/60 max-w-sm">
              Digital Archaeology for enterprise legacy modernization.
            </p>
          </div>

          <div className="flex gap-16 text-lg">
            <a href="mailto:hello@cognitire.dev" className="hover:text-accent transition-colors">hello@cognitire.dev</a>
            <span className="text-white/40">© 2026</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
