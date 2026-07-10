"use client";

import { motion } from "framer-motion";

export default function HeroIllustration() {
  return (
    <div className="relative w-full h-full min-h-[500px] md:min-h-[700px] flex items-center justify-center select-none overflow-hidden">
      {/* ── CSS Animations style block ── */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float-column-1 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-column-2 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-35px); }
        }
        @keyframes float-column-3 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .float-1 {
          animation: float-column-1 12s ease-in-out infinite;
        }
        .float-2 {
          animation: float-column-2 16s ease-in-out infinite;
        }
        .float-3 {
          animation: float-column-3 10s ease-in-out infinite;
        }
      `}} />

      {/* Main Coordinate Wrapper (Fixed internal coordinate system 1000 x 800) */}
      <div className="relative w-[1000px] h-[800px] scale-[0.6] sm:scale-[0.7] md:scale-[0.8] lg:scale-[1.0] transition-transform duration-300 origin-center">
        
        {/* ── SVG Connection Paths (drawn in background) ── */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1000 800">
          <defs>
            <linearGradient id="line-grad-1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#E0E0E0" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#2FCA54" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="line-grad-2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#E0E0E0" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#E0E0E0" stopOpacity="0.5" />
            </linearGradient>
          </defs>

          {/* Connection Lines (Bezier Curves) */}
          {/* Path 1: Column 2 Gradient Pill to Column 3 Dot Grid */}
          <path
            id="path1"
            d="M 490 190 C 640 190, 640 370, 790 370"
            fill="none"
            stroke="url(#line-grad-2)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />

          {/* Path 2: Column 2 Middle Face to Column 3 Top Face */}
          <path
            id="path2"
            d="M 490 370 C 640 370, 640 160, 790 160"
            fill="none"
            stroke="url(#line-grad-1)"
            strokeWidth="1.5"
          />

          {/* Path 3: Column 2 Middle Face to Column 3 Dot Grid */}
          <path
            id="path3"
            d="M 490 370 C 640 370, 640 370, 790 370"
            fill="none"
            stroke="url(#line-grad-1)"
            strokeWidth="1.5"
          />

          {/* Path 4: Column 2 Middle Face to Column 3 Green Gradient Pill */}
          <path
            id="path4"
            d="M 490 370 C 640 370, 640 600, 790 600"
            fill="none"
            stroke="url(#line-grad-1)"
            strokeWidth="1.5"
          />

          {/* Path 5: Column 2 Bottom Face to Column 3 Green Gradient Pill */}
          <path
            id="path5"
            d="M 490 700 C 640 700, 640 600, 790 600"
            fill="none"
            stroke="url(#line-grad-2)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />

          {/* ── Flow Particles traveling along paths ── */}
          {/* Path 2 Particles (Middle Face to Top Face) */}
          <circle r="3.5" fill="#2FCA54" className="shadow-[0_0_8px_#2FCA54]">
            <animateMotion dur="6s" repeatCount="indefinite" begin="0s">
              <mpath href="#path2" />
            </animateMotion>
          </circle>
          <circle r="3.5" fill="#2FCA54" className="shadow-[0_0_8px_#2FCA54]">
            <animateMotion dur="6s" repeatCount="indefinite" begin="3s">
              <mpath href="#path2" />
            </animateMotion>
          </circle>

          {/* Path 3 Particles (Middle Face to Dot Grid) */}
          <circle r="3" fill="#2FCA54">
            <animateMotion dur="5s" repeatCount="indefinite" begin="1s">
              <mpath href="#path3" />
            </animateMotion>
          </circle>

          {/* Path 4 Particles (Middle Face to Green Gradient Pill) */}
          <circle r="3.5" fill="#2FCA54" className="shadow-[0_0_8px_#2FCA54]">
            <animateMotion dur="7s" repeatCount="indefinite" begin="0.5s">
              <mpath href="#path4" />
            </animateMotion>
          </circle>
          <circle r="3.5" fill="#2FCA54" className="shadow-[0_0_8px_#2FCA54]">
            <animateMotion dur="7s" repeatCount="indefinite" begin="4s">
              <mpath href="#path4" />
            </animateMotion>
          </circle>

          {/* Path 1 Particles (Gradient Pill to Dot Grid - Slow grey flow) */}
          <circle r="2.5" fill="#E0E0E0">
            <animateMotion dur="8s" repeatCount="indefinite" begin="2s">
              <mpath href="#path1" />
            </animateMotion>
          </circle>
        </svg>

        {/* ── Column 1 (Left-most) ── */}
        <div className="absolute left-[150px] top-[120px] w-[140px] flex flex-col gap-8 float-1 z-10">
          {/* Portrait Card */}
          <div className="w-[120px] h-[120px] bg-white p-2.5 rounded-[24px] shadow-md border border-[#EBEBEB] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80"
              alt="Portrait 1"
              className="w-full h-full rounded-[18px] object-cover filter grayscale opacity-90"
              loading="lazy"
            />
          </div>

          {/* Solid Black Capsule */}
          <div className="w-[80px] h-[180px] bg-[#111111] rounded-full shadow-md ml-5" />

          {/* Skeleton Pill Card */}
          <div className="w-[90px] h-[130px] border border-[#E0E0E0] bg-white/70 backdrop-blur-sm rounded-[30px] p-4 flex flex-col gap-2 justify-center ml-4">
            <div className="h-2 w-10 bg-[#E5E5E5] rounded-full" />
            <div className="h-2 w-6 bg-[#E5E5E5] rounded-full" />
            <div className="h-2 w-8 bg-[#E5E5E5] rounded-full" />
          </div>
        </div>

        {/* ── Column 2 (Middle) ── */}
        <div className="absolute left-[420px] top-[80px] w-[140px] flex flex-col gap-7 float-2 z-10">
          {/* Vertical Abstract Gradient Capsule */}
          <div className="w-[64px] h-[180px] bg-gradient-to-b from-[#DEC3B2] via-[#BACDB0] to-[#7FA99B] rounded-full shadow-sm mx-auto" />

          {/* Small Gradient Square */}
          <div className="w-[60px] h-[60px] bg-gradient-to-br from-[#BACDB0] to-[#7FA99B] rounded-[18px] shadow-sm mx-auto" />

          {/* Middle Portrait Card (Connecting Node) */}
          <div className="w-[96px] h-[96px] bg-white p-2 rounded-[20px] shadow-md border border-[#EBEBEB] overflow-hidden mx-auto">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80"
              alt="Portrait 2"
              className="w-full h-full rounded-[14px] object-cover filter grayscale opacity-90"
              loading="lazy"
            />
          </div>

          {/* Skeleton Pill Card */}
          <div className="w-[96px] h-[120px] border border-[#E0E0E0] bg-white/70 backdrop-blur-sm rounded-[24px] p-4 flex flex-col gap-2 justify-center mx-auto">
            <div className="h-2 w-full bg-[#E5E5E5] rounded-full" />
            <div className="h-2 w-2/3 bg-[#E5E5E5] rounded-full" />
            <div className="h-2 w-4/5 bg-[#E5E5E5] rounded-full" />
          </div>

          {/* Black / White Gradient Capsule */}
          <div className="w-[64px] h-[140px] bg-gradient-to-b from-[#111111] to-[#FAFAFA] border border-[#E5E5E5] rounded-full shadow-sm mx-auto" />

          {/* Bottom Portrait Card */}
          <div className="w-[84px] h-[84px] bg-white p-1.5 rounded-[18px] shadow-md border border-[#EBEBEB] overflow-hidden mx-auto">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
              alt="Portrait 3"
              className="w-full h-full rounded-[12px] object-cover filter grayscale opacity-90"
              loading="lazy"
            />
          </div>
        </div>

        {/* ── Column 3 (Right-most) ── */}
        <div className="absolute left-[730px] top-[100px] w-[140px] flex flex-col gap-8 float-3 z-10">
          {/* Top Portrait Card */}
          <div className="w-[84px] h-[84px] bg-white p-1.5 rounded-[18px] shadow-md border border-[#EBEBEB] overflow-hidden mx-auto">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80"
              alt="Portrait 4"
              className="w-full h-full rounded-[12px] object-cover filter grayscale opacity-90"
              loading="lazy"
            />
          </div>

          {/* Dot Grid Card */}
          <div className="w-[96px] h-[140px] bg-white border border-[#EBEBEB] rounded-[24px] shadow-md p-4 flex flex-col justify-center items-center mx-auto">
            <div className="grid grid-cols-3 gap-2">
              {Array.from({ length: 15 }).map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-[1px] transition-colors duration-1000 ${
                    i % 4 === 0
                      ? "bg-[#2FCA54] shadow-[0_0_4px_#2FCA54]"
                      : i % 3 === 0
                      ? "bg-[#111111]"
                      : "bg-[#E5E5E5]"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Skeletal Pill Card (Large) */}
          <div className="w-[110px] h-[190px] border border-[#E0E0E0] bg-white/70 backdrop-blur-sm rounded-[28px] p-5 flex flex-col gap-3 justify-center mx-auto">
            <div className="h-2.5 w-full bg-[#E5E5E5] rounded-full" />
            <div className="h-2.5 w-2/3 bg-[#E5E5E5] rounded-full" />
            <div className="flex gap-1 items-center my-1">
              <div className="h-2 w-2 rounded-[1px] bg-[#2FCA54]" />
              <div className="h-2.5 w-1/2 bg-[#E5E5E5] rounded-full" />
            </div>
            <div className="h-2.5 w-3/4 bg-[#E5E5E5] rounded-full" />
            <div className="h-2.5 w-1/2 bg-[#E5E5E5] rounded-full" />
          </div>

          {/* Green Gradient Pill */}
          <div className="w-[64px] h-[165px] bg-gradient-to-b from-[#2FCA54] via-[#7FA99B] to-[#111111] rounded-full shadow-sm mx-auto" />
        </div>

      </div>
    </div>
  );
}
