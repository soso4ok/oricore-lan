import { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import InteractiveLink from "../../components/InteractiveLink";

export const metadata: Metadata = {
  title: "BFSI Legacy Modernization | Apolast",
  description:
    "DORA and NIS2 compliant on-premise legacy modernization for Banking, Financial Services, and Insurance. Safely map and extract COBOL, Java, and Mainframe logic.",
  alternates: {
    canonical: "/solutions/bfsi",
  },
};

export default function BFSISolutions() {
  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      <Navbar />

      {/* ─── HERO ─── */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-32 border-b border-[#E0E0E0]">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16">
          <div className="max-w-4xl">
            <h1 className="text-[clamp(3rem,5vw,5rem)] font-bold text-[#111111] leading-[0.95] tracking-tighter mb-8 break-words">
              Legacy extraction for highly regulated finance.
            </h1>
            <div className="mb-10 w-24 h-[6px] bg-[#2FCA54]"></div>
            <p className="text-lg sm:text-xl md:text-[22px] text-[#333333] leading-[1.6] mb-12 break-words">
              Banks run on COBOL. Insurance runs on mainframes. These systems process billions daily — and the people who wrote them are retiring. Apolast lets you securely map and extract core banking business rules on-premise, aligned with DORA and NIS2 mandates — without hallucinating code.
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
      <section className="py-24 md:py-32 md:pb-48 bg-[#FAFAFA] border-b border-[#E0E0E0]">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 flex flex-col lg:flex-row gap-12 lg:gap-24 lg:items-end">
          <div className="lg:w-1/2">
            <h2 className="text-[clamp(3.5rem,7vw,7rem)] font-bold text-[#111111] leading-[0.85] tracking-tighter">
              Strict<br />Data<br />Sovereignty.
            </h2>
          </div>
          <div className="lg:w-1/2 max-w-xl pb-4">
            <p className="text-xl md:text-[22px] text-[#111111] font-medium leading-[1.4] mb-8">
              In the BFSI sector, PII and proprietary trading algorithms cannot be sent to cloud-based LLMs.
            </p>
            <p className="text-lg md:text-xl text-[#555555] leading-relaxed mb-12">
              Apolast runs entirely on your hardware. Localized language models and deterministic AST parsing map your architecture without ever making an external API call. No data leaves your network — fully aligned with DORA and NIS2 mandates.
            </p>
            
            <a 
              href="/#compliance"
              className="inline-flex items-center gap-6 text-[#111111] font-bold text-xl group"
            >
              <div className="w-12 h-12 bg-[#2FCA54] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-75"></div>
              <span className="transition-all duration-300 group-hover:text-[#555555]">Explore the Compliance Platform</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
