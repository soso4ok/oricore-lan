"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import dynamic from "next/dynamic";

// Heavy below-the-fold interactive components — lazy-loaded, client-only.
// ssr: false is only valid inside a "use client" boundary (per Next.js 16 docs).

function DeferredSection({
  children,
  minBlockSize,
}: {
  children: ReactNode;
  minBlockSize: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsActive(true);
        observer.disconnect();
      },
      { rootMargin: "1200px 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={isActive ? undefined : { minBlockSize }}>
      {isActive ? children : null}
    </div>
  );
}

const SovereigntyScroll = dynamic(
  () => import("./SovereigntyScroll"),
  {
    ssr: false,
    loading: () => (
      <div className="h-screen bg-[var(--color-bg)]" aria-hidden="true" />
    ),
  }
);

const DebtCalculator = dynamic(
  () => import("./DebtCalculator"),
  {
    ssr: false,
    loading: () => (
      <div className="py-32 bg-[var(--color-bg)]" aria-hidden="true" />
    ),
  }
);

const ComparisonMatrix = dynamic(
  () => import("./ComparisonMatrix"),
  {
    ssr: false,
    loading: () => (
      <div className="py-24 bg-[var(--color-bg)]" aria-hidden="true" />
    ),
  }
);

const ComplianceSection = dynamic(
  () => import("./ComplianceSection"),
  {
    ssr: false,
    loading: () => (
      <div className="py-24 bg-[var(--color-bg-alt)]" aria-hidden="true" />
    ),
  }
);

export function DynamicSovereigntyScroll() {
  return (
    <DeferredSection minBlockSize="100vh">
      <SovereigntyScroll />
    </DeferredSection>
  );
}

export function DynamicDebtCalculator() {
  return (
    <DeferredSection minBlockSize="32rem">
      <DebtCalculator />
    </DeferredSection>
  );
}

export function DynamicComparisonMatrix() {
  return (
    <DeferredSection minBlockSize="24rem">
      <ComparisonMatrix />
    </DeferredSection>
  );
}

export function DynamicComplianceSection() {
  return (
    <DeferredSection minBlockSize="24rem">
      <ComplianceSection />
    </DeferredSection>
  );
}
