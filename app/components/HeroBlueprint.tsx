"use client";

export default function HeroBlueprint() {
  return (
    <div className="relative w-full h-[500px] md:h-[600px] rounded-sm bg-[#FAFAFA] border border-[#E0E0E0] overflow-hidden flex items-center justify-center shadow-[0_20px_60px_rgba(0,0,0,0.03)]">
      {/* Faint Grid Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="blueprint-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#111111" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#blueprint-grid)" />
        </svg>
      </div>

      {/* Interface Panel / Diagram */}
      <div className="relative z-10 w-[85%] h-[85%] bg-white border border-[#E0E0E0] shadow-[0_10px_30px_rgba(0,0,0,0.04)] flex flex-col">
        {/* Header */}
        <div className="h-10 border-b border-[#E0E0E0] flex items-center px-4 gap-2 bg-[#FAFAFA]">
          <div className="w-2.5 h-2.5 rounded-full bg-[#E0E0E0]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#E0E0E0]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#E0E0E0]"></div>
        </div>
        
        {/* Body */}
        <div className="flex-1 p-6 flex flex-col gap-6">
          {/* Node graph abstraction */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-[#FAFAFA] border border-[#E0E0E0] flex-shrink-0 flex items-center justify-center">
              <div className="w-4 h-4 bg-[#111111]"></div>
            </div>
            <div className="flex-1 space-y-3 pt-2">
              <div className="h-2 w-3/4 bg-[#E0E0E0] rounded-full"></div>
              <div className="h-2 w-1/2 bg-[#E0E0E0] rounded-full"></div>
            </div>
          </div>
          
          <div className="h-px w-full bg-[#E0E0E0]"></div>
          
          {/* Blueprint extraction visualization */}
          <div className="flex-1 relative border border-dashed border-[#CCCCCC] p-4 bg-[#FAFAFA]/50">
            <svg className="w-full h-full text-[#111111] opacity-30" viewBox="0 0 200 100" preserveAspectRatio="none">
              <path d="M10,50 C40,10 60,90 90,50 S140,10 190,50" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
              <circle cx="10" cy="50" r="4" fill="currentColor" />
              <circle cx="90" cy="50" r="4" fill="#2FCA54" stroke="none" className="opacity-100" />
              <circle cx="190" cy="50" r="4" fill="currentColor" />
            </svg>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
               <div className="px-3 py-1 bg-white border border-[#E0E0E0] text-[11px] font-mono tracking-wide text-[#111111] shadow-sm">
                 SYSTEM_MAP.json
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
