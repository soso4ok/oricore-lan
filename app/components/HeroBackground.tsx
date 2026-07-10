"use client";

import { motion } from "framer-motion";

export default function HeroBackground() {
  const gherkinLines = [
    { line: "Feature: Premium Calculation Logic", type: "header" },
    { line: "  Extracted via AST from: PRM-CALC.cpy", type: "comment" },
    { line: "", type: "normal" },
    { line: "  Scenario: High risk factor applies max multiplier", type: "bold" },
    { line: "    Given a base premium of $5,000", type: "step" },
    { line: "    And the policy risk factor is > 0.80", type: "step" },
    { line: "    When the final premium is calculated", type: "step" },
    { line: "    Then the result should be $7,500", type: "step" },
  ];

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Subtle dot grid */}
      <div 
        className="absolute inset-0 z-0 bg-[radial-gradient(#E0E0E0_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" 
      />
      
      <div className="w-full h-full max-w-[1600px] mx-auto relative">
        <div className="absolute right-6 lg:right-16 xl:right-32 top-32 hidden md:block w-[480px]">
          
          {/* Background block: The Legacy Source */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute -top-8 -left-12 w-[400px] bg-[#F5F5F5] border border-[#E0E0E0] p-8 font-mono text-[13px] leading-[1.8] text-[#999999] opacity-70 z-0 whitespace-pre"
          >
            <div>01  WS-CALC-VARS.</div>
            <div>    05  WS-BASE-PREM    PIC 9(5)V99.</div>
            <div>    05  WS-RISK-FACT    PIC 9(3)V99.</div>
            <div>    05  WS-MAX-MULT     PIC 9(1)V99 VALUE 1.5.</div>
            <br/>
            <div className="text-[#111111] bg-[#E0E0E0]/50 font-bold">    IF WS-RISK-FACT &gt; 0.80</div>
            <div className="text-[#111111] bg-[#E0E0E0]/50 font-bold">        COMPUTE WS-FINAL = WS-BASE-PREM * WS-MAX-MULT</div>
            <div>    END-IF.</div>
          </motion.div>

          {/* Foreground block: The Extracted Spec */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative z-10 bg-white border border-[#111111] shadow-[8px_8px_0px_0px_rgba(17,17,17,1)] mt-16 ml-8"
          >
            <div className="border-b border-[#111111] px-6 py-4 bg-[#FAFAFA] flex justify-between items-center">
              <span className="font-mono text-xs font-bold text-[#111111] uppercase tracking-widest">
                Generated Specification
              </span>
              <span className="font-mono text-[10px] font-bold text-[#111111] bg-[#2FCA54] px-2 py-1">
                AST_VERIFIED
              </span>
            </div>
            
            <div className="p-8 font-mono text-sm leading-[2.2]">
              {gherkinLines.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className={`
                    ${item.type === 'header' ? 'text-[#111111] font-bold text-base' : ''}
                    ${item.type === 'comment' ? 'text-[#999999]' : ''}
                    ${item.type === 'bold' ? 'text-[#111111] font-bold mt-4' : ''}
                    ${item.type === 'step' ? 'text-[#555555] pl-4 border-l-[3px] border-[#2FCA54] ml-2' : ''}
                  `}
                >
                  {item.line}
                </motion.div>
              ))}
            </div>
          </motion.div>
          
        </div>
      </div>
    </div>
  );
}
