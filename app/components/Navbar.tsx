"use client";

import Link from "next/link";
import { useState } from "react";
import InteractiveLink from "./InteractiveLink";

const navItems = [
  { href: "/#pipeline", label: "Process", hoverText: "[01/trace-extract]" },
  { href: "/#comparison", label: "Comparison", hoverText: "[02/spec-verify]" },
  { href: "/solutions/bfsi", label: "BFSI", hoverText: "[icp/bfsi]" },
  { href: "/pricing", label: "Pricing", hoverText: "[05/pricing]" },
  { href: "/#demo", label: "Assess", hoverText: "[06/debt-calc]" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-[#FAFAFA]/90 backdrop-blur-md border-b border-[#E0E0E0]"
      aria-label="Main navigation"
    >
      <div className="max-w-[1600px] mx-auto flex items-center justify-between px-6 sm:px-8 py-6">
        <Link href="/" className="flex items-center gap-4 group">
          <svg
            width="32"
            height="32"
            viewBox="0 0 148 148"
            fill="none"
            className="w-8 h-8 transition-transform group-hover:scale-105"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M6.46929e-06 74C7.74879e-06 59.3642 4.34004 45.0571 12.4713 32.8878C20.6025 20.7186 32.1597 11.2338 45.6814 5.63295C59.2032 0.0320586 74.0821 -1.43338 88.4367 1.42192C102.791 4.27723 115.977 11.325 126.326 21.6741C136.675 32.0232 143.723 45.2088 146.578 59.5634C149.433 73.9179 147.968 88.7969 142.367 102.319C136.766 115.84 127.281 127.398 115.112 135.529C102.943 143.66 88.6358 148 74 148L74 74L6.46929e-06 74Z" fill="#333B42"/>
            <path d="M74 3.49123e-05C83.7178 3.44876e-05 93.3405 1.9141 102.319 5.63295C111.297 9.3518 119.454 14.8026 126.326 21.6741C133.197 28.5457 138.648 36.7034 142.367 45.6815C146.086 54.6596 148 64.2822 148 74L74 74L74 3.49123e-05Z" fill="#24292E"/>
            <rect x="74" y="148" width="18.5" height="18.5" transform="rotate(-180 74 148)" fill="#2FCA54"/>
            <rect x="74" y="129.5" width="18.5" height="18.5" transform="rotate(-180 74 129.5)" fill="#2FCA54"/>
            <rect x="74" y="111" width="18.5" height="18.5" transform="rotate(-180 74 111)" fill="#2FCA54"/>
            <rect x="74" y="92.5" width="18.5" height="18.5" transform="rotate(-180 74 92.5)" fill="#2FCA54"/>
            <rect x="55.5" y="92.5" width="18.5" height="18.5" transform="rotate(-180 55.5 92.5)" fill="#2FCA54"/>
            <rect x="37" y="92.5" width="18.5" height="18.5" transform="rotate(-180 37 92.5)" fill="#2FCA54"/>
            <rect x="18.5" y="92.5" width="18.5" height="18.5" transform="rotate(-180 18.5 92.5)" fill="#2FCA54"/>
            <rect x="37" y="129.5" width="18.5" height="18.5" transform="rotate(-180 37 129.5)" fill="#2FCA54"/>
          </svg>
          <span className="font-display font-bold text-xl tracking-tight text-[#111111]">
            Apolast.
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <InteractiveLink
              key={item.href}
              href={item.href}
              hoverText={item.hoverText}
              className="font-display font-medium text-lg text-ink-soft hover:text-ink transition-colors"
            >
              {item.label}
            </InteractiveLink>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((previous) => !previous)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 text-[#111111]"
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
            aria-hidden="true"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div id="mobile-navigation" className="md:hidden border-t border-[#E0E0E0] px-6 sm:px-8 py-4">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={`mobile-${item.href}`}
                href={item.href}
                className="font-display font-medium text-base text-[#111111]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
