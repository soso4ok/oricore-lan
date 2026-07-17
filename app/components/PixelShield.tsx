import Image from "next/image";

/**
 * PixelShield — Hand-drawn pixel-art shield SVG for the
 * sovereignty section. Displayed at a fixed size with
 * pixelated rendering to preserve sharp edges.
 */
export default function PixelShield() {
  return (
    <Image
      src="/SH.svg"
      alt="Apolast pixel art shield representing code security and on-premise execution"
      width={308}
      height={308}
      aria-hidden="true"
      style={{ imageRendering: "pixelated" }}
      priority
    />
  );
}
