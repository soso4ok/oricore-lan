"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function DebtCalculator() {
  const [stack, setStack] = useState("");
  const [calculating, setCalculating] = useState(false);
  const [result, setResult] = useState<null | { score: number, time: string, risk: string }>(null);

  const handleAnalyze = (e: React.FormEvent) => {
    e.preventDefault();
    if (!stack.trim()) return;
    
    setCalculating(true);
    setResult(null);

    // Simulate API call/processing
    setTimeout(() => {
      setCalculating(false);
      setResult({
        score: Math.floor(Math.random() * 15) + 80, // High score to show debt
        time: "14-21 Days",
        risk: "Undocumented Logic"
      });
    }, 1200);
  };

  return (
    <section id="demo" className="py-32 md:py-40 bg-[#111111] text-white border-b border-[#333333]">
      <div className="max-w-[1600px] mx-auto px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <div>
            <h2 className="text-[clamp(3rem,5vw,4.5rem)] font-bold leading-tight mb-8">
              Visualize Your Technical Debt.
            </h2>
            <p className="text-2xl text-white/60 leading-relaxed max-w-lg mb-8">
              Input your legacy stack configuration to see how our agents would approach mapping your architectural complexity and extracting the underlying business rules.
            </p>
            <div className="text-white/40 text-lg">
              // Diagnostic Tool
            </div>
          </div>

          <div className="bg-[#1A1A1A] border border-[#333333] p-10 md:p-14 shadow-2xl">
            <form onSubmit={handleAnalyze} className="flex flex-col gap-8">
              <div>
                <label className="block text-xl font-bold text-white mb-4">
                  Describe your legacy stack
                </label>
                <input 
                  type="text" 
                  placeholder="e.g. 2M lines of COBOL, Java 6 monolith, or AS400 system..."
                  className="w-full bg-[#111111] border border-[#333333] text-white p-6 text-xl focus:outline-none focus:border-[#2FCA54] transition-colors placeholder:text-[#333333]"
                  value={stack}
                  onChange={(e) => setStack(e.target.value)}
                />
              </div>
              <button 
                type="submit"
                disabled={calculating || !stack.trim()}
                className="bg-[#2FCA54] text-[#111111] font-bold text-xl py-6 hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {calculating ? "Running Diagnostic Trace..." : "Analyze Complexity"}
              </button>
            </form>

            <AnimatePresence>
              {result && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-12 pt-12 border-t border-[#333333] grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                  <div>
                    <p className="text-white/60 mb-2 font-medium">Complexity Score</p>
                    <p className="text-6xl font-bold text-[#2FCA54]">{result.score}<span className="text-3xl text-[#555555]">/100</span></p>
                  </div>
                  <div>
                    <p className="text-white/60 mb-2 font-medium">Extraction Estimate</p>
                    <p className="text-3xl font-bold text-white mt-4">{result.time}</p>
                  </div>
                  <div>
                    <p className="text-white/60 mb-2 font-medium">Primary Risk</p>
                    <p className="text-xl font-bold text-[#FAFAFA] mt-4">{result.risk}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
