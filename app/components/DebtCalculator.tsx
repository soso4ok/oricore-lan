"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function DebtCalculator() {
  const [stack, setStack] = useState("");
  const [calculating, setCalculating] = useState(false);
  // Lead form state
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [leadName, setLeadName] = useState("");
  const [leadTitle, setLeadTitle] = useState("");
  const [leadEmail, setLeadEmail] = useState("");
  const [leadPhone, setLeadPhone] = useState("");
  const [leadCompany, setLeadCompany] = useState("");
  const [leadDetails, setLeadDetails] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleAnalyze = (e: React.FormEvent) => {
    e.preventDefault();
    if (!stack.trim()) return;

    setCalculating(true);
    setShowLeadForm(false);

    // Simulate API call/processing
    setTimeout(() => {
      setCalculating(false);
      setShowLeadForm(true);
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
                    {showLeadForm && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-10 pt-10 border-t border-[#333333]"
                      >
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
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                              type="text"
                              placeholder="Job Title"
                              required
                              className="w-full bg-[#111111] border border-[#333333] text-white p-4 text-base focus:outline-none focus:border-[#2FCA54] transition-colors placeholder:text-[#555555]"
                              value={leadTitle}
                              onChange={(e) => setLeadTitle(e.target.value)}
                            />
                            <input
                              type="text"
                              placeholder="Company"
                              required
                              className="w-full bg-[#111111] border border-[#333333] text-white p-4 text-base focus:outline-none focus:border-[#2FCA54] transition-colors placeholder:text-[#555555]"
                              value={leadCompany}
                              onChange={(e) => setLeadCompany(e.target.value)}
                            />
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                              type="email"
                              placeholder="Work email"
                              required
                              className="w-full bg-[#111111] border border-[#333333] text-white p-4 text-base focus:outline-none focus:border-[#2FCA54] transition-colors placeholder:text-[#555555]"
                              value={leadEmail}
                              onChange={(e) => setLeadEmail(e.target.value)}
                            />
                            <input
                              type="tel"
                              placeholder="Phone number"
                              className="w-full bg-[#111111] border border-[#333333] text-white p-4 text-base focus:outline-none focus:border-[#2FCA54] transition-colors placeholder:text-[#555555]"
                              value={leadPhone}
                              onChange={(e) => setLeadPhone(e.target.value)}
                            />
                          </div>
                          <textarea
                            placeholder="Tell us about your legacy modernization goals..."
                            rows={3}
                            className="w-full bg-[#111111] border border-[#333333] text-white p-4 text-base focus:outline-none focus:border-[#2FCA54] transition-colors placeholder:text-[#555555] resize-none"
                            value={leadDetails}
                            onChange={(e) => setLeadDetails(e.target.value)}
                          />
                          <button
                            type="submit"
                            className="w-full bg-[#2FCA54] text-[#111111] font-bold text-lg py-5 hover:bg-white transition-colors"
                          >
                            Send Report & Schedule Demo
                          </button>
                        </motion.form>
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
