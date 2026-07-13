"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

/**
 * PricingCoins — Three pixel-art currency coins arranged asymmetrically
 * on the right side of the pricing hero. Each coin drifts on its own
 * slow, staggered vertical path to create a sense of quiet weight —
 * like coins settling through still air.
 *
 * Animation approach: no spring physics, no bounce, no infinite spin.
 * Just a slow sinusoidal vertical drift at different frequencies and
 * amplitudes per coin, driven by requestAnimationFrame for smoothness.
 * The motion is subtle enough to feel intentional, not decorative.
 */

interface CoinConfig {
  src: string;
  alt: string;
  /** Size in px */
  size: number;
  /** X offset from center in px (positive = right) */
  x: number;
  /** Y offset from center in px (positive = down) */
  y: number;
  /** Vertical drift amplitude in px */
  driftAmp: number;
  /** Drift cycle duration in ms */
  driftPeriod: number;
  /** Initial phase offset (0–1) */
  phase: number;
  /** Static rotation in degrees — slight tilt for asymmetry */
  rotation: number;
  /** Animation start delay in ms for staggered entrance */
  entranceDelay: number;
}

const COINS: CoinConfig[] = [
  {
    src: "/coin-dolar.svg",
    alt: "Dollar coin",
    size: 240,
    x: 20,
    y: -150,
    driftAmp: 14,
    driftPeriod: 6200,
    phase: 0,
    rotation: -4,
    entranceDelay: 0,
  },
  {
    src: "/coin-zloty.svg",
    alt: "Złoty coin",
    size: 192,
    x: -120,
    y: 30,
    driftAmp: 10,
    driftPeriod: 7800,
    phase: 0.33,
    rotation: 6,
    entranceDelay: 120,
  },
  {
    src: "/coin-pound-Recovered.svg",
    alt: "Pound coin",
    size: 216,
    x: 70,
    y: 160,
    driftAmp: 12,
    driftPeriod: 5400,
    phase: 0.66,
    rotation: -2,
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

        // Entrance fade — simple opacity ramp over 600ms after delay
        const entranceProgress = Math.min(
          1,
          Math.max(0, (elapsed - coin.entranceDelay) / 600)
        );

        // Sinusoidal drift
        const t = (elapsed + coin.phase * coin.driftPeriod) / coin.driftPeriod;
        const yOffset = Math.sin(t * Math.PI * 2) * coin.driftAmp;

        el.style.opacity = String(entranceProgress);
        el.style.transform = `translateY(${yOffset}px) rotate(${coin.rotation}deg)`;
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
