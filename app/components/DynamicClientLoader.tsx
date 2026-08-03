"use client";

import dynamic from "next/dynamic";

// Heavy below-the-fold interactive components — lazy-loaded, client-only.
// ssr: false is only valid inside a "use client" boundary (per Next.js 16 docs).

export const DynamicSovereigntyScroll = dynamic(
  () => import("./SovereigntyScroll"),
  {
    ssr: false,
    loading: () => (
      <div className="h-screen bg-[#111111]" aria-hidden="true" />
    ),
  }
);

export const DynamicDebtCalculator = dynamic(
  () => import("./DebtCalculator"),
  {
    ssr: false,
    loading: () => (
      <div className="py-32 bg-[#111111]" aria-hidden="true" />
    ),
  }
);

export const DynamicComparisonMatrix = dynamic(
  () => import("./ComparisonMatrix"),
  {
    ssr: false,
    loading: () => (
      <div className="py-24 bg-white" aria-hidden="true" />
    ),
  }
);

export const DynamicComplianceSection = dynamic(
  () => import("./ComplianceSection"),
  {
    ssr: false,
    loading: () => (
      <div className="py-24 bg-[#F5F5F5]" aria-hidden="true" />
    ),
  }
);
