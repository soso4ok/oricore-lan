"use client";

import { useEffect } from "react";

/**
 * A progressive enhancement for the homepage. The document continues to use
 * native scrolling on touch devices and for visitors who request reduced
 * motion; Locomotive is only loaded after those checks pass.
 */
export default function OperationalScroll() {
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 960px)");
    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    let cancelled = false;
    let generation = 0;
    let instance: { destroy: () => void } | undefined;

    const destroy = () => {
      instance?.destroy();
      instance = undefined;
      document.documentElement.removeAttribute("data-operational-scroll");
    };

    const configure = async () => {
      const currentGeneration = ++generation;
      destroy();

      if (!desktop.matches || !finePointer.matches || reducedMotion.matches) {
        return;
      }

      const { default: LocomotiveScroll } = await import("locomotive-scroll");

      if (
        cancelled ||
        currentGeneration !== generation ||
        !desktop.matches ||
        !finePointer.matches ||
        reducedMotion.matches
      ) {
        return;
      }

      instance = new LocomotiveScroll({
        lenisOptions: {
          anchors: false,
          autoRaf: false,
          lerp: 0.09,
          smoothWheel: true,
          syncTouch: false,
        },
      });
      document.documentElement.setAttribute("data-operational-scroll", "active");
    };

    const handlePreferenceChange = () => {
      void configure();
    };

    void configure();

    for (const query of [desktop, finePointer, reducedMotion]) {
      query.addEventListener("change", handlePreferenceChange);
    }

    return () => {
      cancelled = true;
      generation += 1;
      for (const query of [desktop, finePointer, reducedMotion]) {
        query.removeEventListener("change", handlePreferenceChange);
      }
      destroy();
    };
  }, []);

  return null;
}
