"use client";

import { useEffect, useRef } from "react";

/**
 * PixelServer — A pixel-art server rack illustration in the same
 * green palette as the pricing coins. Represents on-premises
 * deployment and flat-rate infrastructure pricing.
 *
 * 24×32 pixel grid. Colors match the coin SVGs:
 *   O = #011203 (outline)
 *   L = #7DC98F (light green)
 *   G = #2FCA54 (main green)
 *   M = #2BBA4C (medium green)
 *   D = #1D8034 (dark green)
 *   S = #C6FFBA (sparkle/light)
 *   B = #000000 (black — screen/detail)
 *   _ = transparent
 */

const PALETTE: Record<string, string> = {
  O: "#011203",
  L: "#7DC98F",
  G: "#2FCA54",
  M: "#2BBA4C",
  D: "#1D8034",
  S: "#C6FFBA",
  B: "#000000",
};

// prettier-ignore
const GRID: string[][] = [
  //  0  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23
  ["_","_","_","_","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","_","_","_","_"], // 0  — top cap
  ["_","_","_","O","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","O","_","_","_"], // 1
  ["_","_","O","L","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","L","O","_","_"], // 2
  ["_","O","L","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","L","O","_"], // 3
  ["_","O","L","G","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","G","L","O","_"], // 4  — top drive bay
  ["_","O","L","G","B","S","S","G","G","G","G","G","G","G","G","G","G","G","G","B","G","L","O","_"], // 5
  ["_","O","L","G","B","S","G","G","G","G","G","G","G","G","G","G","G","G","G","B","G","L","O","_"], // 6
  ["_","O","L","G","B","G","G","G","G","G","G","G","G","G","G","G","G","S","G","B","G","L","O","_"], // 7
  ["_","O","L","G","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","G","L","O","_"], // 8
  ["_","O","L","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","L","O","_"], // 9  — divider
  ["_","O","L","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","L","O","_"], // 10
  ["_","O","L","G","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","G","L","O","_"], // 11 — mid drive bay
  ["_","O","L","G","B","S","S","G","G","G","G","G","G","G","G","G","G","G","G","B","G","L","O","_"], // 12
  ["_","O","L","G","B","S","G","G","G","G","G","G","G","G","G","G","G","G","G","B","G","L","O","_"], // 13
  ["_","O","L","G","B","G","G","G","G","G","G","G","G","G","G","G","G","S","G","B","G","L","O","_"], // 14
  ["_","O","L","G","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","G","L","O","_"], // 15
  ["_","O","L","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","L","O","_"], // 16 — divider
  ["_","O","L","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","L","O","_"], // 17
  ["_","O","L","G","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","G","L","O","_"], // 18 — bottom drive bay
  ["_","O","L","G","B","D","D","D","D","D","D","D","D","D","D","D","D","D","D","B","G","L","O","_"], // 19
  ["_","O","L","G","B","D","M","G","G","G","G","G","G","G","G","G","G","G","D","B","G","L","O","_"], // 20
  ["_","O","L","G","B","D","G","G","G","G","G","G","G","G","G","G","G","G","D","B","G","L","O","_"], // 21
  ["_","O","L","G","B","D","G","G","G","S","G","G","G","G","S","G","G","G","D","B","G","L","O","_"], // 22 — LED lights
  ["_","O","L","G","B","D","G","G","G","G","G","G","G","G","G","G","G","G","D","B","G","L","O","_"], // 23
  ["_","O","L","G","B","D","D","D","D","D","D","D","D","D","D","D","D","D","D","B","G","L","O","_"], // 24
  ["_","O","L","G","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","B","G","L","O","_"], // 25
  ["_","O","L","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","L","O","_"], // 26
  ["_","O","L","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","L","O","_"], // 27
  ["_","_","O","L","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","L","O","_","_"], // 28
  ["_","_","_","O","D","D","D","D","D","D","D","D","D","D","D","D","D","D","D","D","O","_","_","_"], // 29 — base
  ["_","_","O","O","O","O","O","_","_","_","_","_","_","_","_","_","_","O","O","O","O","O","_","_"], // 30 — feet
  ["_","O","D","D","D","D","O","_","_","_","_","_","_","_","_","_","_","O","D","D","D","D","O","_"], // 31
];

const CELL = 16;
const COLS = GRID[0].length;
const ROWS = GRID.length;

export default function PixelServer() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let startTime: number | null = null;
    let raf: number;

    function animate(ts: number) {
      if (!startTime) startTime = ts;
      const elapsed = ts - startTime;

      // Slow, subtle breathing pulse on the LED sparkles (row 22, cols 9 and 14)
      // Cycle: 3s on, 1s fade, simulating server activity LEDs
      const ledCycle = 4000;
      const phase = (elapsed % ledCycle) / ledCycle;
      const ledOpacity = phase < 0.75 ? 1 : 1 - ((phase - 0.75) / 0.25);

      const target = containerRef.current;
      if (target) {
        const leds = target.querySelectorAll<SVGRectElement>(".server-led");
        leds.forEach((led) => {
          led.setAttribute("opacity", String(0.4 + ledOpacity * 0.6));
        });
      }

      raf = requestAnimationFrame(animate);
    }

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div ref={containerRef} style={{ width: COLS * CELL, height: ROWS * CELL }}>
      <svg
        width={COLS * CELL}
        height={ROWS * CELL}
        viewBox={`0 0 ${COLS * CELL} ${ROWS * CELL}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{ imageRendering: "pixelated", width: "100%", height: "100%" }}
      >
        {GRID.map((row, y) =>
          row.map((cell, x) => {
            if (cell === "_") return null;
            const isLed = cell === "S" && y === 22 && (x === 9 || x === 14);
            return (
              <rect
                key={`${x}-${y}`}
                className={isLed ? "server-led" : undefined}
                x={x * CELL}
                y={y * CELL}
                width={CELL}
                height={CELL}
                fill={PALETTE[cell]}
              />
            );
          })
        )}
      </svg>
    </div>
  );
}
