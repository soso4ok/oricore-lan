import InteractiveLink from "./InteractiveLink";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white" role="contentinfo">
      {/* ─── MAIN FOOTER ─── */}
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16">
        {/* Top section — large brand statement + CTA */}
        <div className="pt-24 pb-20 md:pt-32 md:pb-24 border-b border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-7">
              <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[0.95] tracking-tighter text-white mb-8">
                Ready to map your
                <br />
                legacy codebase<span className="text-[#2FCA54]">?</span>
              </h2>
              <p className="text-lg md:text-xl text-white/50 max-w-lg leading-relaxed">
                Send us your repository details and deployment requirements.
                We&apos;ll scope the integration and return a fixed-cost
                proposal.
              </p>
            </div>
            <div className="lg:col-span-5 flex items-end lg:justify-end">
              <a
                href="mailto:hello@apolast.com"
                className="inline-flex items-center justify-center bg-white !text-[#111111] hover:bg-[#2FCA54] hover:!text-[#111111] font-medium text-lg py-5 px-10 transition-colors duration-200"
              >
                Request a technical review
              </a>
            </div>
          </div>
        </div>

        {/* Middle section — navigation columns + brand */}
        <div className="py-16 md:py-20 border-b border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 lg:gap-16">
            {/* Brand column — takes more space, left-aligned */}
            <div className="md:col-span-5 lg:col-span-4">
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
                  Apolast.
                </span>
              </div>
              <p className="text-base text-white/40 max-w-xs leading-relaxed">
                Legacy extraction. On your servers.
                <br />
                No cloud. No guessing.
              </p>
            </div>

            {/* Nav columns — asymmetric widths */}
            <nav
              className="md:col-span-7 lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-10 lg:gap-16"
              aria-label="Footer navigation"
            >
              {/* Platform */}
              <div>
                <h3 className="font-display font-bold text-base text-white/30 mb-5">
                  Platform
                </h3>
                <ul className="space-y-3">
                  <li>
                    <InteractiveLink
                      href="/#pipeline"
                      hoverText="[01/trace-extract]"
                      className="text-base text-white/70 hover:text-white transition-colors"
                    >
                      How It Works
                    </InteractiveLink>
                  </li>
                  <li>
                    <InteractiveLink
                      href="/#comparison"
                      hoverText="[02/spec-verify]"
                      className="text-base text-white/70 hover:text-white transition-colors"
                    >
                      Why Apolast
                    </InteractiveLink>
                  </li>
                  <li>
                    <InteractiveLink
                      href="/#demo"
                      hoverText="[06/debt-calc]"
                      className="text-base text-white/70 hover:text-white transition-colors"
                    >
                      Cost Calculator
                    </InteractiveLink>
                  </li>
                  <li>
                    <InteractiveLink
                      href="/pricing"
                      hoverText="[05/pricing]"
                      className="text-base text-white/70 hover:text-white transition-colors"
                    >
                      Plans & Pricing
                    </InteractiveLink>
                  </li>
                </ul>
              </div>

              {/* Solutions */}
              <div>
                <h3 className="font-display font-bold text-base text-white/30 mb-5">
                  Solutions
                </h3>
                <ul className="space-y-3">
                  <li>
                    <InteractiveLink
                      href="/solutions/bfsi"
                      hoverText="[icp/bfsi]"
                      className="text-base text-white/70 hover:text-white transition-colors"
                    >
                      Banking &amp; Insurance
                    </InteractiveLink>
                  </li>
                  <li>
                    <InteractiveLink
                      href="/#compliance"
                      hoverText="[03/compliance]"
                      className="text-base text-white/70 hover:text-white transition-colors"
                    >
                      Regulatory Compliance
                    </InteractiveLink>
                  </li>
                  <li>
                    <InteractiveLink
                      href="/#sovereignty"
                      hoverText="[04/on-prem]"
                      className="text-base text-white/70 hover:text-white transition-colors"
                    >
                      Air-Gapped Deployment
                    </InteractiveLink>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="font-display font-bold text-base text-white/30 mb-5">
                  Contact
                </h3>
                <ul className="space-y-3">
                  <li>
                    <InteractiveLink
                      href="mailto:hello@apolast.com"
                      hoverText="[mail::connect]"
                      className="text-base text-white/70 hover:text-white transition-colors"
                    >
                      hello@apolast.com
                    </InteractiveLink>
                  </li>
                  <li>
                    <InteractiveLink
                      href="https://www.linkedin.com/company/apolast"
                      hoverText="[social::linkedin]"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base text-white/70 hover:text-white transition-colors"
                    >
                      LinkedIn
                    </InteractiveLink>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>

        {/* Bottom bar — copyright + legal */}
        <div className="py-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <span className="text-sm text-white/25">
            © 2026 Apolast. All rights reserved.
          </span>
          <div className="flex gap-6 text-sm text-white/25">
            <a href="/privacy" className="hover:text-white/50 transition-colors">
              Privacy
            </a>
            <a href="/terms" className="hover:text-white/50 transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
