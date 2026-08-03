import { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PricingCoins from "../components/PricingCoins";
import PixelServer from "../components/PixelServer";

export const metadata: Metadata = {
  title: "Pricing | Apolast",
  description:
    "Predictable pricing for enterprise legacy modernization. Setup fee plus annual platform subscription. On-premise deployment, living documentation, automated tests, and pull request-ready specifications.",
  alternates: {
    canonical: "/pricing",
  },
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      <Navbar />

      {/* ─── HERO ─── */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 border-b border-[#E0E0E0] overflow-hidden">
        {/* Coin cluster — centered in the right half */}
        <div
          className="hidden md:flex absolute top-0 bottom-0 left-1/2 right-0 items-center justify-center pointer-events-none select-none z-0"
        >
          <PricingCoins />
        </div>

        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-[clamp(3rem,5vw,5rem)] font-bold text-[#111111] leading-[0.95] tracking-tighter mb-8 break-words">
              Predictable pricing for legacy modernization.
            </h1>
            <div className="mb-10 w-24 h-[6px] bg-[#2FCA54]"></div>
            <p className="text-lg sm:text-xl md:text-[22px] text-[#333333] leading-[1.6] mb-12 break-words">
              Apolast charges a one-time integration fee to deploy the platform and parse your codebase, followed by a flat annual subscription to keep your system graph, tests, and specifications up to date. Get a clear cost structure before the project begins.
            </p>
            <a
              href="mailto:contact@apolast.com"
              className="apolast-btn text-lg"
            >
              Request a custom quote
            </a>
          </div>
        </div>
      </section>

      {/* ─── HOW PRICING WORKS ─── */}
      <section className="py-24 md:py-32 border-b border-[#E0E0E0] bg-white">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16">
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold text-[#111111] leading-tight mb-6 break-words">
            Two-step pricing structure.
          </h2>
          <p className="text-lg md:text-xl text-[#555555] leading-relaxed max-w-2xl mb-16 break-words">
            We align pricing with typical software migration phases.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Step 1 */}
            <div className="border-2 border-[#111111] p-8 md:p-12">
              <p className="text-lg font-bold text-[#2FCA54] mb-4">
                01
              </p>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6 break-words">
                Audit &amp; Integration
              </h3>
              <p className="text-lg text-[#555555] leading-relaxed mb-8 break-words">
                A one-time fee to deploy Apolast on your infrastructure, parse your codebase, configure local models, and generate the initial dependency graph. The cost is calculated based on codebase lines of code, module count, and system complexity.
              </p>
              <div className="border-t border-[#E0E0E0] pt-6">
                <p className="text-base text-[#555555] leading-relaxed break-words">
                  Includes: On-premises deployment, abstract syntax tree (AST) parsing, local LLM configuration, baseline system graph, and initial characterization test suite.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="border-2 border-[#111111] border-t-0 lg:border-t-2 lg:border-l-0 p-8 md:p-12">
              <p className="text-lg font-bold text-[#2FCA54] mb-4">
                02
              </p>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6 break-words">
                Annual Subscription
              </h3>
              <p className="text-lg text-[#555555] leading-relaxed mb-8 break-words">
                An annual flat-rate license. The dependency graph updates automatically via CI/CD integrations on every commit. Engineering teams use the platform to generate pull request-ready specifications, automated tests, and Jira tasks.
              </p>
              <div className="border-t border-[#E0E0E0] pt-6">
                <p className="text-base text-[#555555] leading-relaxed break-words">
                  Includes: Automated graph updates, specification and test generation, Jira task creation, CI/CD pipelines, and seat-based or project-based platform access.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRICING BY CUSTOMER TYPE ─── */}
      <section className="py-24 md:py-32 border-b border-[#E0E0E0] bg-[#FAFAFA]">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16">
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold text-[#111111] leading-tight mb-6 break-words">
            Licensing Options
          </h2>
          <p className="text-lg md:text-xl text-[#555555] leading-relaxed max-w-2xl mb-20 break-words">
            Choose a plan based on your deployment requirements, codebase size, and team structure.
          </p>

          {/* Enterprise */}
          <div className="mb-20 pb-20 border-b border-[#E0E0E0]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
              <div className="lg:col-span-5">
                <h3 className="text-3xl sm:text-4xl font-bold text-[#111111] mb-4 break-words">
                  Enterprise
                </h3>
                <p className="text-lg text-[#2FCA54] font-bold">
                  $50,000 – $250,000+ / year
                </p>
              </div>
              <div className="lg:col-span-7">
                <p className="text-lg md:text-xl text-[#555555] leading-relaxed mb-6 break-words">
                  Fixed annual pricing based on codebase volume and team size. Includes on-premises deployment, unlimited specification and test generation, and dedicated technical support.
                </p>
                <p className="text-lg text-[#111111] font-medium break-words">
                  Designed for: Financial institutions, insurance companies, government agencies, critical infrastructure operators, and organizations with strict data-residency requirements.
                </p>
              </div>
            </div>
          </div>

          {/* SME */}
          <div className="mb-20 pb-20 border-b border-[#E0E0E0]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
              <div className="lg:col-span-5">
                <h3 className="text-3xl sm:text-4xl font-bold text-[#111111] mb-4 break-words">
                  SME &amp; Mid-Market
                </h3>
                <p className="text-lg text-[#2FCA54] font-bold">
                  $100 – $200 / developer / month
                </p>
              </div>
              <div className="lg:col-span-7">
                <p className="text-lg md:text-xl text-[#555555] leading-relaxed mb-6 break-words">
                  A one-time integration fee plus seat-based monthly subscriptions. Start with a single application and scale platform access as you add systems to your modernization scope.
                </p>
                <p className="text-lg text-[#111111] font-medium break-words">
                  Designed for: Engineering teams modernizing individual Java monoliths, legacy COBOL systems, or legacy ERP integrations.
                </p>
              </div>
            </div>
          </div>

          {/* System Integrators */}
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
              <div className="lg:col-span-5">
                <h3 className="text-3xl sm:text-4xl font-bold text-[#111111] mb-4 break-words">
                  System Integrators
                </h3>
                <p className="text-lg text-[#2FCA54] font-bold">
                  Project-based or white-label
                </p>
              </div>
              <div className="lg:col-span-7">
                <p className="text-lg md:text-xl text-[#555555] leading-relaxed mb-6 break-words">
                  Pricing structures based on project scope, lines of code, or revenue-share models. Apolast automates codebase discovery and analysis to reduce manual consulting hours during migration planning.
                </p>
                <p className="text-lg text-[#111111] font-medium break-words">
                  Designed for: Consulting firms, systems integrators, and technology partners executing modernization projects for enterprise clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHAT IS INCLUDED ─── */}
      <section className="py-24 md:py-32 border-b border-[#E0E0E0] bg-white">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-4">
              <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold text-[#111111] leading-tight mb-6 break-words">
                Core features.
              </h2>
              <p className="text-lg md:text-xl text-[#555555] leading-relaxed break-words">
                All plans include access to the core Apolast engine. Setup scopes and deployment models are tailored to your environment.
              </p>
            </div>
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
                <div>
                  <h4 className="text-xl font-bold text-[#111111] mb-3">Codebase Analysis</h4>
                  <p className="text-[#555555] leading-relaxed">
                    Abstract syntax tree (AST) parsing to map system control flow and architecture dependencies.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#111111] mb-3">Continuous Updates</h4>
                  <p className="text-[#555555] leading-relaxed">
                    Dependency graphs update automatically on every commit via CI/CD pipelines.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#111111] mb-3">Automated Test Generation</h4>
                  <p className="text-[#555555] leading-relaxed">
                    Characterization tests and Gherkin scenarios generated directly from system behavior.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#111111] mb-3">Pull Request Specifications</h4>
                  <p className="text-[#555555] leading-relaxed">
                    Merge-ready pull requests containing technical specifications and code changes for developer review.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#111111] mb-3">Task Export</h4>
                  <p className="text-[#555555] leading-relaxed">
                    Jira tasks linked to the dependency graph, containing defined technical scope and execution steps.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#111111] mb-3">On-Premises Deployment</h4>
                  <p className="text-[#555555] leading-relaxed">
                    Self-hosted installation on private infrastructure, requiring no external network calls or data egress.
                  </p>
                </div>
              </div>

              <div className="mt-16 pt-10 border-t border-[#E0E0E0]">
                <h4 className="text-xl font-bold text-[#111111] mb-4">Optional Add-ons</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4">
                  <p className="text-[#555555] leading-relaxed">
                    Technical support SLAs
                  </p>
                  <p className="text-[#555555] leading-relaxed">
                    Custom integrations for proprietary build tools
                  </p>
                  <p className="text-[#555555] leading-relaxed">
                    Connectors for legacy infrastructure
                  </p>
                  <p className="text-[#555555] leading-relaxed">
                    Custom LLM fine-tuning
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY THIS MODEL ─── */}
      <section className="py-24 md:py-32 border-b border-[#E0E0E0] bg-[#FAFAFA]">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
            <div className="lg:col-span-7">
              <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold text-[#111111] leading-tight mb-10 break-words">
                Flat-rate pricing model.
              </h2>
              <div className="space-y-8">
                <p className="text-lg md:text-xl text-[#555555] leading-relaxed break-words">
                  Apolast deploys on-premises. Because the platform runs directly on your infrastructure with no external API dependencies, we do not charge for token consumption or request volume.
                </p>
                <p className="text-lg md:text-xl text-[#555555] leading-relaxed break-words">
                  Pricing is determined by the size and complexity of the codebase, the number of active engineers using the platform, and your deployment configuration.
                </p>
                <p className="text-lg md:text-xl text-[#111111] font-medium leading-relaxed break-words">
                  This model provides fixed annual costs for budgeting, ensures zero data egress for security compliance, and allows unlimited usage for engineering teams.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <PixelServer />
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-24 md:py-32 border-b border-[#E0E0E0] bg-white">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16">
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold text-[#111111] leading-tight mb-16 break-words">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-14 max-w-5xl">
            <div>
              <h3 className="text-xl font-bold text-[#111111] mb-4">What factors influence the integration fee?</h3>
              <p className="text-[#555555] leading-relaxed">
                The fee is calculated based on codebase size (lines of code and module count), the legacy programming languages used, and your deployment environment requirements. We determine this fee during our initial technical review.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#111111] mb-4">Are there usage limits or per-token fees?</h3>
              <p className="text-[#555555] leading-relaxed">
                No. Because the models run entirely on your infrastructure, there are no token charges or generation limits. Engineering teams have unrestricted access within their licensed scope.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#111111] mb-4">Is on-premises deployment supported?</h3>
              <p className="text-[#555555] leading-relaxed">
                Yes. We support on-premises and air-gapped deployments. The platform runs entirely inside your network boundary, preventing data egress.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#111111] mb-4">Can we pilot the platform on a single application?</h3>
              <p className="text-[#555555] leading-relaxed">
                Yes. The SME plan allows you to deploy the platform for a single legacy codebase. You can expand coverage to additional applications as needed.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#111111] mb-4">Is the platform compliant with regulated industry standards?</h3>
              <p className="text-[#555555] leading-relaxed">
                Yes. We design for financial institutions, government agencies, insurance providers, and infrastructure operators. Deployments comply with DORA and NIS2 security frameworks.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#111111] mb-4">Do you offer pricing for system integrators?</h3>
              <p className="text-[#555555] leading-relaxed">
                Yes. We offer project-specific, volume-based, and revenue-share pricing structures for consulting partners and system integrators.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#111111] mb-4">What is included in technical support plans?</h3>
              <p className="text-[#555555] leading-relaxed">
                Technical support includes defined SLA response times, dedicated integration engineers, and custom connection support for legacy build tools.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#111111] mb-4">How long does integration take?</h3>
              <p className="text-[#555555] leading-relaxed">
                Integration timelines vary by codebase size and environment. Most enterprise deployments are fully functional within 4 to 8 weeks.
              </p>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </main>
  );
}
