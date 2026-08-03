"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FaultyTerminal from "./FaultyTerminal";

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
    
    const subject = encodeURIComponent("New Debt Analysis Request");
    const body = encodeURIComponent(
      `Name: ${leadName}\nJob Title: ${leadTitle}\nCompany: ${leadCompany}\nEmail: ${leadEmail}\nPhone: ${leadPhone}\n\nLegacy Stack:\n${stack}\n\nDetails:\n${leadDetails}`
    );
    
    window.location.href = `mailto:contact@apolast.com?subject=${subject}&body=${body}`;
    
    setSubmitted(true);
  };

  return (
    <section
      id="demo"
      className="py-24 md:py-32 bg-[var(--color-bg)] text-[var(--color-ink)] border-b border-[var(--color-ink-soft)] relative overflow-hidden"
    >
      {/* Cinematic Glitch Terminal Background */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none mix-blend-plus-lighter" aria-hidden="true">
        <FaultyTerminal
          scale={1.5}
          digitSize={1.4}
          timeScale={0.8}
          scanlineIntensity={1.2}
          glitchAmount={1.5}
          flickerAmount={0.8}
          noiseAmp={0.5}
          tint="#2FCA54"
          brightness={0.3}
          mouseReact={false}
          pageLoadAnimation={true}
        />
      </div>
      
      {/* Radial Gradient overlay to ensure text remains readable */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--color-bg)_100%)] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold leading-tight mb-8 break-words">
              How deep is your legacy problem?
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-[var(--color-ink-soft)] leading-relaxed max-w-lg mb-6 break-words">
              Tell us what you&apos;re running. We&apos;ll show what can be extracted, what would require a rewrite, and the cost trade-offs between on-premises and cloud-based analysis.
            </p>
          </div>

          <div className="bg-[var(--color-bg-alt)] border border-[var(--color-ink-soft)] p-8 md:p-12">
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
                        className="block text-lg font-bold text-[var(--color-ink)] mb-3 text-center"
                      >
                        Describe your legacy stack
                      </label>
                      <input
                        id="debt-stack"
                        type="text"
                        placeholder="e.g. 2M lines of legacy logic, complex operational flows..."
                        className="w-full bg-[var(--color-bg-alt)] border border-[var(--color-border)] text-[var(--color-ink)] p-5 text-lg focus:outline-none focus:border-[var(--color-accent)] transition-colors placeholder:text-[var(--color-ink-muted)] text-center"
                        value={stack}
                        onChange={(e) => setStack(e.target.value)}
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={calculating || !stack.trim()}
                      className="bg-[var(--color-accent)] text-[var(--color-ink)] font-bold text-lg py-5 hover:bg-[var(--color-bg)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
                        className="mt-10 pt-10 border-t border-[var(--color-ink-soft)]"
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
                            className="w-full bg-[var(--color-bg-alt)] border border-[var(--color-border)] text-[var(--color-ink)] p-4 text-base focus:outline-none focus:border-[var(--color-accent)] transition-colors placeholder:text-[var(--color-ink-muted)]"
                            value={leadName}
                            onChange={(e) => setLeadName(e.target.value)}
                          />
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                              type="text"
                              placeholder="Job Title"
                              required
                              className="w-full bg-[var(--color-bg-alt)] border border-[var(--color-border)] text-[var(--color-ink)] p-4 text-base focus:outline-none focus:border-[var(--color-accent)] transition-colors placeholder:text-[var(--color-ink-muted)]"
                              value={leadTitle}
                              onChange={(e) => setLeadTitle(e.target.value)}
                            />
                            <input
                              type="text"
                              placeholder="Company"
                              required
                              className="w-full bg-[var(--color-bg-alt)] border border-[var(--color-border)] text-[var(--color-ink)] p-4 text-base focus:outline-none focus:border-[var(--color-accent)] transition-colors placeholder:text-[var(--color-ink-muted)]"
                              value={leadCompany}
                              onChange={(e) => setLeadCompany(e.target.value)}
                            />
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                              type="email"
                              placeholder="Work email"
                              required
                              className="w-full bg-[var(--color-bg-alt)] border border-[var(--color-border)] text-[var(--color-ink)] p-4 text-base focus:outline-none focus:border-[var(--color-accent)] transition-colors placeholder:text-[var(--color-ink-muted)]"
                              value={leadEmail}
                              onChange={(e) => setLeadEmail(e.target.value)}
                            />
                            <input
                              type="tel"
                              placeholder="Phone number"
                              className="w-full bg-[var(--color-bg-alt)] border border-[var(--color-border)] text-[var(--color-ink)] p-4 text-base focus:outline-none focus:border-[var(--color-accent)] transition-colors placeholder:text-[var(--color-ink-muted)]"
                              value={leadPhone}
                              onChange={(e) => setLeadPhone(e.target.value)}
                            />
                          </div>
                          <textarea
                            placeholder="Tell us about your legacy modernization goals..."
                            rows={3}
                            className="w-full bg-[var(--color-bg-alt)] border border-[var(--color-border)] text-[var(--color-ink)] p-4 text-base focus:outline-none focus:border-[var(--color-accent)] transition-colors placeholder:text-[var(--color-ink-muted)] resize-none"
                            value={leadDetails}
                            onChange={(e) => setLeadDetails(e.target.value)}
                          />
                          <button
                            type="submit"
                            className="w-full bg-[var(--color-accent)] text-[var(--color-ink)] font-bold text-lg py-5 hover:bg-[var(--color-bg)] transition-colors"
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
                  <div className="w-16 h-16 mx-auto mb-8 flex items-center justify-center border-2 border-[var(--color-accent)]">
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
                  <p className="text-2xl font-bold text-[var(--color-ink)] mb-3">
                    Report queued.
                  </p>
                  <p className="text-lg text-[var(--color-ink-soft)]">
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
