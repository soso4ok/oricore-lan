"use client";

import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <>
      {/* Subtle dot grid */}
      <div 
        className="absolute inset-0 z-0 bg-[radial-gradient(#E0E0E0_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" 
      />

      {/* Ambient Glows */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -40, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-[20%] -left-[15%] w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] rounded-full bg-[radial-gradient(circle_at_center,rgba(47,202,84,0.06)_0%,transparent_70%)] blur-[100px]"
        />
        <motion.div
          animate={{
            x: [0, -30, 40, 0],
            y: [0, 50, -35, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -bottom-[20%] -right-[15%] w-[70vw] h-[70vw] max-w-[700px] max-h-[700px] rounded-full bg-[radial-gradient(circle_at_center,rgba(47,202,84,0.04)_0%,transparent_70%)] blur-[80px]"
        />
      </div>
    </>
  );
}
