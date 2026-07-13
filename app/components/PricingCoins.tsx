"use client";

import { useEffect, useRef } from "react";
import { DollarCoin, PoundCoin, ZlotyCoin } from "./PixelCoins";

/**
 * PricingCoins — Three pixel-art currency coins arranged asymmetrically
 * on the right side of the pricing hero.
 *
 * Enhanced with:
 * - Redrawn SVGs for better contrast and readability
 * - Strong pixel-appropriate drop shadows
 * - Orbital drift paths
 * - Entrance slide-up with scale-in
 */

interface CoinConfig {
  type: "dollar" | "zloty" | "pound";
  size: number;
  x: number;
  y: number;
  driftAmpY: number;
  driftAmpX: number;
  driftPeriod: number;
  phase: number;
  rotation: number;
  rotDrift: number;
  entranceDelay: number;
}

const COINS: CoinConfig[] = [
  {
    type: "dollar",
    size: 240,
    x: 20,
    y: -150,
    driftAmpY: 18,
    driftAmpX: 8,
    driftPeriod: 6200,
    phase: 0,
    rotation: -4,
    rotDrift: 2.5,
    entranceDelay: 0,
  },
  {
    type: "zloty",
    size: 192,
    x: -120,
    y: 30,
    driftAmpY: 14,
    driftAmpX: 10,
    driftPeriod: 7800,
    phase: 0.33,
    rotation: 6,
    rotDrift: 3,
    entranceDelay: 120,
  },
  {
    type: "pound",
    size: 216,
    x: 70,
    y: 160,
    driftAmpY: 16,
    driftAmpX: 6,
    driftPeriod: 5400,
    phase: 0.66,
    rotation: -2,
    rotDrift: 2,
    entranceDelay: 240,
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

        // Entrance: fade + slide up + scale in over 800ms
        const entranceT = Math.min(
          1,
          Math.max(0, (elapsed - coin.entranceDelay) / 800)
        );
        const eased = 1 - Math.pow(1 - entranceT, 3);
        const entranceSlide = (1 - eased) * 50;
        const entranceScale = 0.7 + eased * 0.3;

        // Vertical drift
        const tY = (elapsed + coin.phase * coin.driftPeriod) / coin.driftPeriod;
        const yOffset = Math.sin(tY * Math.PI * 2) * coin.driftAmpY;

        // Horizontal drift at different period for orbital path
        const tX = (elapsed + coin.phase * coin.driftPeriod * 1.3) / (coin.driftPeriod * 1.7);
        const xOffset = Math.cos(tX * Math.PI * 2) * coin.driftAmpX;

        // Rotation oscillation
        const tR = (elapsed + coin.phase * coin.driftPeriod) / (coin.driftPeriod * 2.1);
        const rotOffset = Math.sin(tR * Math.PI * 2) * coin.rotDrift;

        const totalY = yOffset + entranceSlide;
        const totalRot = coin.rotation + rotOffset;
        const totalScale = entranceScale;

        el.style.opacity = String(eased);
        el.style.transform = `translate(${xOffset}px, ${totalY}px) rotate(${totalRot}deg) scale(${totalScale})`;
        el.style.filter = `drop-shadow(4px 6px 2px rgba(1, 18, 3, 0.3))`;
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
          key={coin.type}
          ref={(el) => { coinRefs.current[i] = el; }}
          className="pricing-coin"
          style={{
            position: "absolute",
            left: `calc(50% + ${coin.x}px - ${coin.size / 2}px)`,
            top: `calc(50% + ${coin.y}px - ${coin.size / 2}px)`,
            width: coin.size,
            height: coin.size,
            opacity: 0,
            willChange: "transform, opacity, filter",
          }}
        >
          {coin.type === "dollar" && <DollarCoin size={coin.size} />}
          {coin.type === "zloty" && <ZlotyCoin size={coin.size} />}
          {coin.type === "pound" && <PoundCoin size={coin.size} />}
        </div>
      ))}
    </div>
  );
}
