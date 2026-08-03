"use client";

import { motion } from "framer-motion";

export default function HeroBackground() {
  const gherkinLines = [
    { line: "Feature: Premium Calculation Logic", type: "header" },
    { line: "  Mapped from: PRM-CALC.cpy", type: "comment" },
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
            className="absolute -top-8 -left-12 w-[400px] bg-[var(--color-bg-alt)] border border-[var(--color-border)] p-8 font-mono text-[13px] leading-[1.8] text-[var(--color-ink-muted)] opacity-70 z-0 whitespace-pre"
          >
            <div>01  WS-CALC-VARS.</div>
            <div>    05  WS-BASE-PREM    PIC 9(5)V99.</div>
            <div>    05  WS-RISK-FACT    PIC 9(3)V99.</div>
            <div>    05  WS-MAX-MULT     PIC 9(1)V99 VALUE 1.5.</div>
            <br/>
            <div className="text-[var(--color-ink)] bg-[var(--color-border)]/50 font-bold">    IF WS-RISK-FACT &gt; 0.80</div>
            <div className="text-[var(--color-ink)] bg-[var(--color-border)]/50 font-bold">        COMPUTE WS-FINAL = WS-BASE-PREM * WS-MAX-MULT</div>
            <div>    END-IF.</div>
          </motion.div>

          {/* Foreground block: The Extracted Spec */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative z-10 bg-[var(--color-bg-alt)] border border-[var(--color-ink)] shadow-[8px_8px_0px_0px_rgba(17,17,17,1)] mt-16 ml-8"
          >
            <div className="border-b border-[var(--color-ink)] px-6 py-4 bg-[var(--color-bg)] flex justify-between items-center">
              <span className="font-mono text-xs font-bold text-[var(--color-ink)] uppercase tracking-widest">
                Generated Specification
              </span>
              <span className="font-mono text-[10px] font-bold text-[var(--color-ink)] bg-[var(--color-accent)] px-2 py-1">
                VERIFIED_SPEC
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
                    ${item.type === 'header' ? 'text-[var(--color-ink)] font-bold text-base' : ''}
                    ${item.type === 'comment' ? 'text-[var(--color-ink-muted)]' : ''}
                    ${item.type === 'bold' ? 'text-[var(--color-ink)] font-bold mt-4' : ''}
                    ${item.type === 'step' ? 'text-[var(--color-ink-muted)] pl-4 border-l-[3px] border-[var(--color-accent)] ml-2' : ''}
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
