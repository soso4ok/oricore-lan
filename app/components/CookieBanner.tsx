"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Check if consent has already been given or denied
    const consent = localStorage.getItem("apolast_cookie_consent");
    
    if (consent === "granted") {
      updateGtag("granted");
    } else if (consent === "denied") {
      updateGtag("denied");
    } else {
      // Show the banner if no choice has been made
      setShow(true);
    }
  }, []);

  const updateGtag = (status: "granted" | "denied") => {
    if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
      (window as any).gtag("consent", "update", {
        ad_storage: status,
        ad_user_data: status,
        ad_personalization: status,
        analytics_storage: status,
      });
    }
  };

  const handleAccept = () => {
    localStorage.setItem("apolast_cookie_consent", "granted");
    updateGtag("granted");
    setShow(false);
  };

  const handleReject = () => {
    localStorage.setItem("apolast_cookie_consent", "denied");
    updateGtag("denied");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 sm:left-auto sm:w-[420px] z-50 bg-[var(--color-bg-alt)] border border-[var(--color-border)] shadow-2xl p-6 sm:p-8 flex flex-col gap-6 rounded-xl">
      <div>
        <h3 className="text-xl font-bold text-[var(--color-ink)] mb-3 font-display tracking-tight">
          Data & Privacy
        </h3>
        <p className="text-base text-[var(--color-ink-soft)] leading-relaxed">
          We use essential cookies to run the platform. With your consent, we use minimal analytics to improve the experience. We do not use third-party ad tracking networks. Read our{" "}
          <Link
            href="/privacy"
            className="text-[var(--color-ink)] underline underline-offset-4 hover:text-[var(--color-accent)] transition-colors duration-200"
          >
            Privacy Policy
          </Link>{" "}
          for details.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={handleAccept}
          className="flex-1 bg-[var(--color-ink)] text-[var(--color-bg)] hover:bg-[var(--color-accent)] hover:text-[var(--color-bg)] font-medium text-base py-3 px-5 transition-colors duration-200 cursor-pointer text-center rounded-lg"
        >
          Accept all
        </button>
        <button
          onClick={handleReject}
          className="flex-1 bg-transparent border border-[var(--color-ink-soft)] text-[var(--color-ink)] hover:border-[var(--color-ink-muted)] hover:text-[var(--color-ink)] font-medium text-base py-3 px-5 transition-colors duration-200 cursor-pointer text-center rounded-lg"
        >
          Decline non-essential
        </button>
      </div>
    </div>
  );
}
