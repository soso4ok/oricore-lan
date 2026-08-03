import { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import InteractiveLink from "../../components/InteractiveLink";

export const metadata: Metadata = {
  title: "BFSI Legacy Modernization | Apolast",
  description:
    "DORA and NIS2 compliant on-premise legacy modernization for Banking, Financial Services, and Insurance. Safely map and extract complex operational logic.",
  alternates: {
    canonical: "/solutions/bfsi",
  },
};

export default function BFSISolutions() {
  return (
    <main className="min-h-screen bg-[var(--color-bg)]">
      <Navbar />

      {/* ─── HERO ─── */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-32 border-b border-[var(--color-border)]">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16">
          <div className="max-w-4xl">
            <h1 className="text-[clamp(3rem,5vw,5rem)] font-bold text-[var(--color-ink)] leading-[0.95] tracking-tighter mb-8 break-words">
              Legacy intelligence for highly regulated finance.
            </h1>
            <div className="mb-10 w-24 h-[6px] bg-[var(--color-accent)]"></div>
            <p className="text-lg sm:text-xl md:text-[22px] text-[var(--color-ink-soft)] leading-[1.6] mb-12 break-words">
              Banks and Insurance companies run on complex legacy operations. These systems process billions daily — and the organizational knowledge needed to maintain them is disappearing. Apolast lets you securely map your architecture and operational workflows on-premise, aligned with DORA and NIS2 mandates — with deterministic precision.
            </p>
            <a
              href="mailto:contact@apolast.com"
              className="apolast-btn text-lg"
            >
              Request a BFSI Audit
            </a>
          </div>
        </div>
      </section>

      {/* ─── DORA COMPLIANCE FOCUS ─── */}
      <section className="py-24 md:py-32 md:pb-48 bg-[var(--color-bg)] border-b border-[var(--color-border)]">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 flex flex-col lg:flex-row gap-12 lg:gap-24 lg:items-end">
          <div className="lg:w-1/2">
            <h2 className="text-[clamp(3.5rem,7vw,7rem)] font-bold text-[var(--color-ink)] leading-[0.85] tracking-tighter">
              Strict<br />Data<br />Sovereignty.
            </h2>
          </div>
          <div className="lg:w-1/2 max-w-xl pb-4">
            <p className="text-xl md:text-[22px] text-[var(--color-ink)] font-medium leading-[1.4] mb-8">
              In the BFSI sector, PII and proprietary trading algorithms cannot be sent to cloud-based LLMs.
            </p>
            <p className="text-lg md:text-xl text-[var(--color-ink-muted)] leading-relaxed mb-12">
              Apolast runs entirely on your hardware. Localized language models and deterministic system mapping analyze your architecture without ever making an external API call. No data leaves your network — fully aligned with DORA and NIS2 mandates.
            </p>
            
            <a 
              href="/#compliance"
              className="inline-flex items-center gap-6 text-[var(--color-ink)] font-bold text-xl group"
            >
              <div className="w-12 h-12 bg-[var(--color-accent)] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-75"></div>
              <span className="transition-all duration-300 group-hover:text-[var(--color-ink-muted)]">Explore the Compliance Platform</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
