"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function NeuronGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  // Snap precisely to the 40x40 pixel grid
  const snappedX = Math.round(mousePos.x / 40) * 40;
  const snappedY = Math.round(mousePos.y / 40) * 40;

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const padding = 100;
      if (
        x >= -padding &&
        x <= rect.width + padding &&
        y >= -padding &&
        y <= rect.height + padding
      ) {
        setMousePos({ x, y });
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleGlobalMouseMove);
    return () => window.removeEventListener("mousemove", handleGlobalMouseMove);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full flex items-start justify-center bg-transparent overflow-hidden"
    >
      <svg width="100%" height="100%" className="opacity-60">
        <defs>
          <pattern id="smallGrid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#E0E0E0" strokeWidth="1" />
          </pattern>
        </defs>
        
        {/* Infinite Grid Background */}
        <rect width="100%" height="100%" fill="url(#smallGrid)" />
        
        {/* Interactive User Node - Snappy and fast */}
        <motion.circle
          animate={{ 
            cx: snappedX, 
            cy: snappedY,
            opacity: isHovering ? 1 : 0,
            scale: isHovering ? 1 : 0
          }}
          transition={{ 
            type: "spring", 
            stiffness: 800, // Very snappy
            damping: 35,
            mass: 0.5
          }}
          r="8"
          fill="#FAFAFA"
          stroke="#2FCA54"
          strokeWidth="3"
          style={{ filter: "drop-shadow(0px 0px 12px rgba(47,202,84,0.6))" }}
        />

        {/* Main Automated Neuron (Pixels) */}
        <motion.circle
          r="6"
          fill="#111111"
          initial={{ cx: 0, cy: 120 }}
          animate={{
            cx: [0, 200, 200, 440, 440, 800],
            cy: [120, 120, 320, 320, 480, 480],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
            repeatType: "reverse"
          }}
        />

        {/* Trail for Automated Neuron */}
        <motion.path
          d="M0,120 L200,120 L200,320 L440,320 L440,480 L800,480"
          fill="none"
          stroke="#111111"
          strokeWidth="2"
          strokeDasharray="1000"
          strokeDashoffset="1000"
          animate={{
            strokeDashoffset: [1000, 0, -1000]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
            repeatType: "reverse"
          }}
          className="opacity-20"
        />

        {/* Secondary Automated Neuron */}
        <motion.circle
          r="4"
          fill="#999999"
          initial={{ cx: 120, cy: 0 }}
          animate={{
            cx: [120, 120, 360, 360, 200, 200],
            cy: [0, 240, 240, 400, 400, 800],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
            repeatType: "reverse"
          }}
        />
        
        {/* Trail for Secondary Neuron */}
        <motion.path
          d="M120,0 L120,240 L360,240 L360,400 L200,400 L200,800"
          fill="none"
          stroke="#999999"
          strokeWidth="1"
          strokeDasharray="1000"
          strokeDashoffset="1000"
          animate={{
            strokeDashoffset: [1000, 0, -1000]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
            repeatType: "reverse"
          }}
          className="opacity-30"
        />
      </svg>
    </div>
  );
}
