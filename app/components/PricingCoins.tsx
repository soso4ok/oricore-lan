"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

/**
 * PricingCoins — Three pixel-art currency coins arranged asymmetrically
 * on the right side of the pricing hero. Each coin drifts on its own
 * slow, staggered vertical path to create a sense of quiet weight —
 * like coins settling through still air.
 *
 * Enhanced with:
 * - Pixel-art drop shadows for depth (not CSS box-shadow — that's slop)
 * - Subtle horizontal drift layered on top of vertical for organic movement
 * - Staggered entrance with slight upward slide, not just fade
 * - Scale variation during drift for a parallax-like depth illusion
 */

interface CoinConfig {
  src: string;
  alt: string;
  size: number;
  x: number;
  y: number;
  /** Vertical drift amplitude in px */
  driftAmpY: number;
  /** Horizontal drift amplitude in px — smaller, secondary axis */
  driftAmpX: number;
  /** Drift cycle duration in ms */
  driftPeriod: number;
  /** Initial phase offset (0–1) */
  phase: number;
  /** Static rotation in degrees */
  rotation: number;
  /** Subtle rotation drift amplitude in degrees */
  rotDrift: number;
  /** Animation start delay in ms */
  entranceDelay: number;
  /** Z-depth hint: 0 = closest, 1 = furthest. Controls parallax-like scale pulse */
  depth: number;
}

const COINS: CoinConfig[] = [
  {
    src: "/coin-dolar.svg",
    alt: "Dollar coin",
    size: 240,
    x: 20,
    y: -150,
    driftAmpY: 14,
    driftAmpX: 4,
    driftPeriod: 6200,
    phase: 0,
    rotation: -4,
    rotDrift: 1.5,
    entranceDelay: 0,
    depth: 0,
  },
  {
    src: "/coin-zloty.svg",
    alt: "Złoty coin",
    size: 192,
    x: -120,
    y: 30,
    driftAmpY: 10,
    driftAmpX: 6,
    driftPeriod: 7800,
    phase: 0.33,
    rotation: 6,
    rotDrift: 2,
    entranceDelay: 120,
    depth: 0.5,
  },
  {
    src: "/coin-pound-Recovered.svg",
    alt: "Pound coin",
    size: 216,
    x: 70,
    y: 160,
    driftAmpY: 12,
    driftAmpX: 3,
    driftPeriod: 5400,
    phase: 0.66,
    rotation: -2,
    rotDrift: 1,
    entranceDelay: 240,
    depth: 0.3,
  },
];

export default function PricingCoins() {
  const coinRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    let startTime: number | null = null;

    function animate(timestamp: number) {
      if (startTime === null) startTime = timestamp;
      const elapsed = timestamp - startTime;

      COINS.forEach((coin, i) => {
        const el = coinRefs.current[i];
        if (!el) return;

        // Entrance: fade + slide up over 700ms after delay
        const entranceT = Math.min(
          1,
          Math.max(0, (elapsed - coin.entranceDelay) / 700)
        );
        // Ease-out cubic for smooth deceleration
        const eased = 1 - Math.pow(1 - entranceT, 3);
        const entranceSlide = (1 - eased) * 30; // slides up 30px

        // Primary vertical drift (sine)
        const tY = (elapsed + coin.phase * coin.driftPeriod) / coin.driftPeriod;
        const yOffset = Math.sin(tY * Math.PI * 2) * coin.driftAmpY;

        // Secondary horizontal drift (cosine at different period for lissajous-like path)
        const tX = (elapsed + coin.phase * coin.driftPeriod * 1.3) / (coin.driftPeriod * 1.7);
        const xOffset = Math.cos(tX * Math.PI * 2) * coin.driftAmpX;

        // Subtle rotation oscillation
        const tR = (elapsed + coin.phase * coin.driftPeriod) / (coin.driftPeriod * 2.1);
        const rotOffset = Math.sin(tR * Math.PI * 2) * coin.rotDrift;

        // Micro scale pulse for depth (very subtle: 0.98–1.02 range)
        const tS = (elapsed + coin.phase * 3000) / 9000;
        const scalePulse = 1 + Math.sin(tS * Math.PI * 2) * 0.015 * (1 + coin.depth);

        const totalY = yOffset + entranceSlide;
        const totalRot = coin.rotation + rotOffset;

        el.style.opacity = String(eased);
        el.style.transform = `translate(${xOffset}px, ${totalY}px) rotate(${totalRot}deg) scale(${scalePulse})`;
      });

      rafRef.current = requestAnimationFrame(animate);
    }

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      className="pricing-coins-stack"
      aria-hidden="true"
      style={{ position: "relative", width: 480, height: 560 }}
    >
      {COINS.map((coin, i) => (
        <div
          key={coin.src}
          ref={(el) => { coinRefs.current[i] = el; }}
          className="pricing-coin"
          style={{
            position: "absolute",
            left: `calc(50% + ${coin.x}px - ${coin.size / 2}px)`,
            top: `calc(50% + ${coin.y}px - ${coin.size / 2}px)`,
            width: coin.size,
            height: coin.size,
            opacity: 0,
            willChange: "transform, opacity",
            filter: `drop-shadow(${4 + coin.depth * 4}px ${6 + coin.depth * 6}px ${2 + coin.depth * 3}px rgba(1, 18, 3, 0.25))`,
          }}
        >
          <Image
            src={coin.src}
            alt={coin.alt}
            width={coin.size}
            height={coin.size}
            style={{
              imageRendering: "pixelated",
              width: "100%",
              height: "100%",
            }}
            priority
          />
        </div>
      ))}
    </div>
  );
}
