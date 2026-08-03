"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** 'fade' | 'slide-up' | 'slide-left' | 'clip' | 'word-stagger' */
  variant?: "fade" | "slide-up" | "slide-left" | "clip" | "scale";
  /** Once triggered, stays visible */
  once?: boolean;
  /** IntersectionObserver threshold */
  threshold?: number;
  /** Duration of the reveal in ms */
  duration?: number;
  /** HTML tag to render */
  as?: keyof HTMLElementTagNameMap;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  variant = "slide-up",
  once = true,
  threshold = 0.15,
  duration = 900,
  as: Tag = "div",
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Set initial hidden state via CSS custom properties
    el.style.setProperty("--reveal-delay", `${delay}ms`);
    el.style.setProperty("--reveal-duration", `${duration}ms`);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-revealed");
          if (once) observer.unobserve(el);
        } else if (!once) {
          el.classList.remove("is-revealed");
        }
      },
      { threshold, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, duration, once, threshold]);

  const variantClass = `scroll-reveal scroll-reveal--${variant}`;

  // @ts-expect-error — dynamic tag rendering
  return <Tag ref={ref} className={`${variantClass} ${className}`}>{children}</Tag>;
}
