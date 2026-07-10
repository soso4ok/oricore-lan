"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function DebtCalculator() {
  const [stack, setStack] = useState("");
  const [linesOfCode, setLinesOfCode] = useState("");
  const [calculating, setCalculating] = useState(false);
  const [result, setResult] = useState<null | {
    score: number;
    time: string;
    risk: string;
    savings: string;
  }>(null);

  // Lead form state
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [leadEmail, setLeadEmail] = useState("");
  const [leadName, setLeadName] = useState("");
  const [leadCompany, setLeadCompany] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleAnalyze = (e: React.FormEvent) => {
    e.preventDefault();
    if (!stack.trim()) return;

    setCalculating(true);
    setResult(null);
    setShowLeadForm(false);

    // Simulate API call/processing
    setTimeout(() => {
      setCalculating(false);

      const lines = parseInt(linesOfCode) || 500000;
      const estimatedCloudCost = Math.round(lines * 0.0012);
      const estimatedOricore = Math.round(estimatedCloudCost / 18);

      setResult({
        score: Math.floor(Math.random() * 15) + 80,
        time: "14–21 Days",
        risk: "Undocumented Business Logic",
        savings: `$${estimatedCloudCost.toLocaleString()} → $${estimatedOricore.toLocaleString()}/yr`,
      });
    }, 1200);
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would POST to your API
    setSubmitted(true);
  };

  return (
    <section
      id="demo"
      className="py-24 md:py-32 bg-[#111111] text-white border-b border-[#333333]"
    >
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold leading-tight mb-8 break-words">
              Estimate Your Technical Debt Exposure.
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-[#CCCCCC] leading-relaxed max-w-lg mb-6 break-words">
              Input your legacy stack to see how AST-based extraction compares
              to manual rewrite costs. Includes estimated savings from
              on-premise SLMs vs. public cloud LLM token pricing.
            </p>
          </div>

          <div className="bg-[#1A1A1A] border border-[#333333] p-8 md:p-12">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.div
                  key="calculator"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <form
                    onSubmit={handleAnalyze}
                    className="flex flex-col gap-6"
                  >
                    <div>
                      <label
                        htmlFor="debt-stack"
                        className="block text-lg font-bold text-white mb-3"
                      >
                        Describe your legacy stack
                      </label>
                      <input
                        id="debt-stack"
                        type="text"
                        placeholder="e.g. 2M lines of COBOL, Java 6 monolith, AS400 system..."
                        className="w-full bg-[#111111] border border-[#333333] text-white p-5 text-lg focus:outline-none focus:border-[#2FCA54] transition-colors placeholder:text-[#555555]"
                        value={stack}
                        onChange={(e) => setStack(e.target.value)}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="debt-lines"
                        className="block text-lg font-bold text-white mb-3"
                      >
                        Estimated lines of code
                      </label>
                      <input
                        id="debt-lines"
                        type="text"
                        placeholder="e.g. 2000000"
                        className="w-full bg-[#111111] border border-[#333333] text-white p-5 text-lg focus:outline-none focus:border-[#2FCA54] transition-colors placeholder:text-[#555555]"
                        value={linesOfCode}
                        onChange={(e) => setLinesOfCode(e.target.value)}
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={calculating || !stack.trim()}
                      className="bg-[#2FCA54] text-[#111111] font-bold text-lg py-5 hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {calculating
                        ? "Running Diagnostic Trace..."
                        : "Analyze Complexity"}
                    </button>
                  </form>

                  <AnimatePresence>
                    {result && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-10 pt-10 border-t border-[#333333]"
                      >
                        <div className="grid grid-cols-2 gap-6 mb-8">
                          <div>
                            <p className="text-[#CCCCCC] mb-2 text-sm font-medium">
                              Complexity Score
                            </p>
                            <p className="text-4xl font-bold text-[#2FCA54]">
                              {result.score}
                              <span className="text-2xl text-[#555555]">
                                /100
                              </span>
                            </p>
                          </div>
                          <div>
                            <p className="text-[#CCCCCC] mb-2 text-sm font-medium">
                              Extraction Estimate
                            </p>
                            <p className="text-2xl font-bold text-white mt-2">
                              {result.time}
                            </p>
                          </div>
                          <div>
                            <p className="text-[#CCCCCC] mb-2 text-sm font-medium">
                              Primary Risk
                            </p>
                            <p className="text-lg font-bold text-[#FAFAFA] mt-1">
                              {result.risk}
                            </p>
                          </div>
                          <div>
                            <p className="text-[#CCCCCC] mb-2 text-sm font-medium">
                              SLM vs. Cloud LLM Cost
                            </p>
                            <p className="text-lg font-bold text-[#2FCA54] mt-1">
                              {result.savings}
                            </p>
                          </div>
                        </div>

                        {!showLeadForm ? (
                          <button
                            onClick={() => setShowLeadForm(true)}
                            className="w-full bg-[#2FCA54] text-[#111111] font-bold text-lg py-5 hover:bg-white transition-colors"
                          >
                            Generate Detailed Debt Report & Book Architecture
                            Demo
                          </button>
                        ) : (
                          <motion.form
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            onSubmit={handleLeadSubmit}
                            className="flex flex-col gap-4 mt-4"
                          >
                            <input
                              type="text"
                              placeholder="Your name"
                              required
                              className="w-full bg-[#111111] border border-[#333333] text-white p-4 text-base focus:outline-none focus:border-[#2FCA54] transition-colors placeholder:text-[#555555]"
                              value={leadName}
                              onChange={(e) => setLeadName(e.target.value)}
                            />
                            <input
                              type="email"
                              placeholder="Work email"
                              required
                              className="w-full bg-[#111111] border border-[#333333] text-white p-4 text-base focus:outline-none focus:border-[#2FCA54] transition-colors placeholder:text-[#555555]"
                              value={leadEmail}
                              onChange={(e) => setLeadEmail(e.target.value)}
                            />
                            <input
                              type="text"
                              placeholder="Company"
                              required
                              className="w-full bg-[#111111] border border-[#333333] text-white p-4 text-base focus:outline-none focus:border-[#2FCA54] transition-colors placeholder:text-[#555555]"
                              value={leadCompany}
                              onChange={(e) => setLeadCompany(e.target.value)}
                            />
                            <button
                              type="submit"
                              className="w-full bg-[#2FCA54] text-[#111111] font-bold text-lg py-5 hover:bg-white transition-colors"
                            >
                              Send Report & Schedule Demo
                            </button>
                          </motion.form>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ) : (
                <motion.div
                  key="confirmation"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-16 text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-8 flex items-center justify-center border-2 border-[#2FCA54]">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#2FCA54"
                      strokeWidth="2.5"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-2xl font-bold text-white mb-3">
                    Report queued.
                  </p>
                  <p className="text-lg text-[#CCCCCC]">
                    We&apos;ll send a detailed debt analysis to{" "}
                    <strong className="text-white">{leadEmail}</strong> and
                    follow up to schedule your architecture demo.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
