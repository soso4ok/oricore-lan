"use client";

import { motion } from "framer-motion";

export default function LearnMoreButton() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById("paradox");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Trailing squares animation (pixel arrow)
  const arrowContainer = {
    initial: {},
    hover: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const arrowSquare = {
    initial: { x: 0, scale: 1, backgroundColor: "#2FCA54" },
    hover: {
      x: [0, 8, 0],
      scale: [1, 1.25, 1],
      backgroundColor: ["#2FCA54", "#FFFFFF", "#2FCA54"],
      transition: {
        duration: 0.8,
        repeat: Infinity,
        repeatDelay: 0.2,
      },
    },
  };

  return (
    <motion.a
      href="#paradox"
      onClick={handleScroll}
      initial="initial"
      whileHover="hover"
      className="group relative inline-flex items-center gap-4 bg-[#111111] !text-white font-medium text-lg px-10 py-5 overflow-hidden transition-colors duration-300 hover:bg-[#1C1C1C]"
    >
      {/* Decorative diagonal cascading background squares */}
      <div className="absolute inset-0 grid grid-cols-6 grid-rows-3 opacity-0 group-hover:opacity-15 transition-opacity duration-300 pointer-events-none">
        {Array.from({ length: 18 }).map((_, i) => {
          const col = i % 6;
          const row = Math.floor(i / 6);
          const delay = col * 0.08 + row * 0.12;
          return (
            <motion.div
              key={i}
              variants={{
                initial: { scale: 0, opacity: 0 },
                hover: {
                  scale: [0, 1, 0.7],
                  opacity: [0, 1, 0.4],
                  transition: {
                    duration: 1.2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: delay,
                    ease: "easeInOut",
                  },
                },
              }}
              className="w-2.5 h-2.5 bg-[#2FCA54] mx-auto my-auto rounded-[1px]"
            />
          );
        })}
      </div>

      {/* Button Text */}
      <span className="relative z-10 tracking-tight">Learn More</span>

      {/* Animated Pixel Arrow */}
      <motion.div
        variants={arrowContainer}
        className="relative z-10 flex gap-1 items-center"
      >
        <motion.div variants={arrowSquare} className="w-2 h-2 rounded-[1px]" />
        <motion.div variants={arrowSquare} className="w-2 h-2 rounded-[1px]" />
        <motion.div variants={arrowSquare} className="w-2 h-2 rounded-[1px]" />
      </motion.div>

      {/* Bottom accent border line */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#2FCA54] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </motion.a>
  );
}
