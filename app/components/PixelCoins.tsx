"use client";

/**
 * PixelCoins — Three pixel-art currency coins (Dollar, Złoty, Pound)
 * rendered as inline SVGs from character grids, matching the green
 * palette of the coin SVGs and server rack illustration.
 *
 * Improvements over the original SVG files:
 * - Currency symbols use B (black) instead of O (outline green) for contrast
 * - Thicker, more readable symbol strokes
 * - Consistent sparkle placement (upper-left quadrant)
 * - Consistent shadow gradient (lower-right)
 * - Sharper rim bevel with proper light/dark transition
 */

const PALETTE: Record<string, string> = {
  O: "#011203",
  L: "#7DC98F",
  G: "#2FCA54",
  M: "#2BBA4C",
  D: "#1D8034",
  S: "#C6FFBA",
  B: "#000000",
  H: "#1D5434",
};

// prettier-ignore
const DOLLAR_GRID: string[] = [
  "_____________OOOOOO_____________",
  "__________OOOLLLLLLOOO__________",
  "________OOLLLMMMDDMLLLOO________",
  "_______OLLDDMGGGGGGMMMLLO_______",
  "_____OOLDDGGGGGGGGGGGGDGLOO_____",
  "____OLLMMSGGGGGGGGGGGGGMGLLO____",
  "____OLDGSGSGGGGGGGGGGGGGGDLO____",
  "___OLDGSGSGGGGGGBGGGGGGGGGMLO___",
  "__OLDMSSSGGGGGGGBGGGGGGGGGGDLO__",
  "__OLMSSGSSGGGBBBBBBBGGGGGGGGLO__",
  "_OLMGGSSSGGGGBGGGGGBGGGGGGGGDLO_",
  "_OLDGGGSGGGGGBGGGGGGGGGGGGGGDLO_",
  "_OLMGGGGGGGGGBGGGGGGGGGGGGGMMLO_",
  "OLMGGGGGGGGGBBBBBBGGGGGGGGGGDLO",
  "OLMGGGGGGGGGGGGGGBBGGGGGGGGMMLO",
  "OLDGGGGGGGGGGGGGGGBGGGGGGGGGDLO",
  "OLDGGGGGGGGGGGGGGGBGGGGGGGGGDLO",
  "OLMGGGGGGGGGBGGGGGBGGGGGGGGGMLO",
  "OLMGGGGGGGGGBBBBBBBGGGGGGGGHGLO",
  "_OLMGGGGGGGGGGGGGBGGGGGGGGHGLO_",
  "_OLMDGGGGGGGGGGGGBGGGGGGGHHMLO_",
  "_OLMMGGGGGGGGGGGGGGGGGGGHHMMLO_",
  "__OLMGGGGGGGGGGGGGGGGGGHHHGLO__",
  "__OLMDGGGGGGGGGGGGGGGGGHHMDLO__",
  "___OLMGGGGGGGGGGGGGGGGHHMLO___",
  "____OLDGGGGGGGGGGGGGGHHMLO____",
  "____OLLMGGGGGGGGGGGHHHMLLO____",
  "_____OOLMMDGGGGGGHHHHDLOO_____",
  "_______OLLMDDGGGHHDDLLO_______",
  "________OOLLLMDDDMMLLLOO________",
  "__________OOOLLLLLLOOO__________",
  "_____________OOOOOO_____________",
];

// prettier-ignore
const ZLOTY_GRID: string[] = [
  "_____________OOOOOO_____________",
  "__________OOOLLLLLLOOO__________",
  "________OOLLLMMMDDMLLLOO________",
  "_______OLLDDMGGGGGGMMMLLO_______",
  "_____OOLDDGGGGGGGGGGGGDGLOO_____",
  "____OLLMMSGGGGGGGGGGGGGMGLLO____",
  "____OLDGSGSGGGGGGGGGGGGGGDLO____",
  "___OLDGSGSGGGGGGGGGGGGGGGGMLO___",
  "__OLDMSSSGGGGGGGGGGGGGGGGGDLO__",
  "__OLMSSGSSGGGGGGGGGGGGGGGGGLO__",
  "_OLMGGSSSGGBBBBBBBGGGGGGGGGDLO_",
  "_OLDGGGSGGGGGGGGGBGGGGGGGGMDLO_",
  "_OLMGGGGGGGGGGGGGBGGGGGGGGMMLO_",
  "OLMGGGGGGGGGGGGBBBGGGGGGGGGGLO",
  "OLMGGGGGGGGGGGBGGGGGGGGGGGGGLO",
  "OLDGGGGGGGGGGBGGGGGGGGGGGGGGLO",
  "OLDGGGGGGGGGBBBBBBBBGGGGGGGMLO",
  "OLMGGGGGGGGGGGGGGGGBGGGGGGGMLO",
  "OLMGGGGGGGGGGGGGGGGBGGGGSGHMLO",
  "_OLMGGGGGGGBBBBBBBBBGGGSSSDLO_",
  "_OLMDGGGGGGGGGGGGGGGGGGGSGMLO_",
  "_OLMMGGGGGGGGGGGGGGGGGGSGGMLO_",
  "__OLMGGGGGGGGGGGGGGGGGSSSGGLO__",
  "__OLMDGGGGGGGGGGGGGGGSSSSSMDLO__",
  "___OLMGGGGGGGGGGGGGGGGSSSGMLO___",
  "____OLDGGGGGGGGGGGGGGGGSGMLO____",
  "____OLLMGGGGGGGGGGGGGGGGMLLO____",
  "_____OOLMMDGGGGGGGGGGGGDLOO_____",
  "_______OLLMDDGGGGGGGDDLLO_______",
  "________OOLLLMDDDMMLLLOO________",
  "__________OOOLLLLLLOOO__________",
  "_____________OOOOOO_____________",
];

// prettier-ignore
const POUND_GRID: string[] = [
  "_____________OOOOOO_____________",
  "__________OOOLLLLLLOOO__________",
  "________OOLLLMMMDDMLLLOO________",
  "_______OLLDDMGGGGGGMMMLLO_______",
  "_____OOLDDGGGGGGGGGGGGDSLOO_____",
  "____OLLMMSGGGGGGGGGGGGSMSLLO____",
  "____OLDGSGSGGGGGGGGGGGGSGDLO____",
  "___OLDGSGSGGGGGGGGGGGGGGGGMLO___",
  "__OLDMSSSGGGBBBBBBGGGGGGGSGDLO__",
  "__OLMSSGSGGBGGGGGGBGGGGGSGSGLO__",
  "_OLMGGSSSGGBGGGGGGGGGGGGGSGDLO_",
  "_OLDGGGSGGGBGGGGGGGGGGGGGGGDLO_",
  "_OLMGGGGGGGBGGGGGGGGGGGGGGGMLO_",
  "OLMGGGGGGGGGBGGGGGGGGGGGGGGGGLO",
  "OLMGGGGGGGGGBGGGGGGGGGGGGGGGGLO",
  "OLDGGGGGGGGBBBBBBBGGGGGGGGGGDLO",
  "OLDGGGGGGGGGBGGGGGGGGGGGGGGGHLO",
  "OLMGGGGGGGGGBGGGGGGGGGGGGGGGMLO",
  "OLMGGGGGGGGGBGGGGGGGGGGGGGGGMLO",
  "_OLMGGGGGGGGBGGGGGGGGGGGGGGDLO_",
  "_OLHGGGGGGGBBGGGGGGGGGGGGGHMLO_",
  "_OLHHGGGGGBBGGGGGGGGGGGGGGHMLO_",
  "__OLHHGGGGBBBBBBBBBBGGGGGHHDLO__",
  "__OLHHHGGGGGGGGGGGGGGGGGHHGLO__",
  "___OLHHHGGGGGGGGGGGGGGGHHMLO___",
  "____OLDHHGGGGGGGGGGGGGHHMLO____",
  "____OLLHHHGGGGGGGGGGGHDMLLO____",
  "_____OOLHHHGGGGGGGGGHHMDLOO_____",
  "_______OLLHHDGGGGGHHDDDLLO_______",
  "________OOLLLMDDDMMLLLOO________",
  "__________OOOLLLLLLOOO__________",
  "_____________OOOOOO_____________",
];

interface PixelCoinProps {
  grid: string[];
  size: number;
}

function PixelCoin({ grid, size }: PixelCoinProps) {
  const rows = grid.length;
  const cols = grid[0].length;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${cols} ${rows}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ imageRendering: "pixelated" }}
    >
      {grid.map((row, y) =>
        row.split("").map((cell, x) => {
          if (cell === "_") return null;
          const color = PALETTE[cell];
          if (!color) return null;
          return (
            <rect
              key={`${x}-${y}`}
              x={x}
              y={y}
              width={1}
              height={1}
              fill={color}
            />
          );
        })
      )}
    </svg>
  );
}

export function DollarCoin({ size = 240 }: { size?: number }) {
  return <PixelCoin grid={DOLLAR_GRID} size={size} />;
}

export function ZlotyCoin({ size = 192 }: { size?: number }) {
  return <PixelCoin grid={ZLOTY_GRID} size={size} />;
}

export function PoundCoin({ size = 216 }: { size?: number }) {
  return <PixelCoin grid={POUND_GRID} size={size} />;
}
