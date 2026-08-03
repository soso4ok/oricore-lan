export default function PricingPenny() {
  /*
   * 18×13 pixel grid for a half-penny with a green dollar sign.
   * 0 = transparent
   * 1 = black outline (#111111)
   * 2 = white fill (#FFFFFF)
   * 3 = green dollar sign (#2FCA54)
   */
  const COLORS: Record<number, string> = {
    1: "#111111",
    2: "#FFFFFF",
    3: "#2FCA54",
  };

  // prettier-ignore
  const grid = [
    [0,0,0,0,0,0,0,1,1,1,1,1,1],
    [0,0,0,0,0,1,1,2,2,2,2,2,1],
    [0,0,0,0,1,2,2,2,2,2,2,2,1],
    [0,0,0,1,2,2,2,2,2,2,2,2,1],
    [0,0,0,1,2,2,2,2,3,2,2,2,1],
    [0,0,1,2,2,2,2,2,3,2,2,2,1],
    [0,1,2,2,2,3,3,3,3,3,2,2,1],
    [0,1,2,2,2,3,2,2,3,2,2,2,1],
    [0,1,2,2,2,3,2,2,3,2,2,2,1],
    [0,1,2,2,2,3,3,3,3,3,2,2,1],
    [0,1,2,2,2,2,2,2,3,2,3,2,1],
    [0,1,2,2,2,2,2,2,3,2,3,2,1],
    [0,0,1,2,2,3,3,3,3,3,2,2,1],
    [0,0,0,1,2,2,2,2,3,2,2,2,1],
    [0,0,0,1,2,2,2,2,3,2,2,2,1],
    [0,0,0,0,1,2,2,2,2,2,2,2,1],
    [0,0,0,0,0,1,1,2,2,2,2,2,1],
    [0,0,0,0,0,0,0,1,1,1,1,1,1],
  ];

  const CELL = 20; // px per cell
  const W = grid[0].length * CELL;
  const H = grid.length * CELL;

  return (
    <svg
      width={W}
      height={H}
      viewBox={`0 0 ${W} ${H}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="w-full h-full"
      style={{ imageRendering: "pixelated" }}
    >
      {grid.map((row, y) =>
        row.map((cell, x) =>
          cell !== 0 ? (
            <rect
              key={`${x}-${y}`}
              x={x * CELL}
              y={y * CELL}
              width={CELL}
              height={CELL}
              fill={COLORS[cell]}
            />
          ) : null
        )
      )}
    </svg>
  );
}
