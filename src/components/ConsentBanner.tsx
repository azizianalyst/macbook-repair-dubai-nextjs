"use client";

// GDPR opt-in cookie-consent banner. Matches the contract described on /cookies:
//   • Bottom-of-screen banner on first visit, two equally-weighted buttons.
//   • Google Analytics loads ONLY after "Accept analytics" (opt-in, GDPR Art. 7).
//   • Choice persisted in the `mrd_consent` cookie for 12 months.
//   • Dormant when no GA4 Measurement ID is configured (no banner, nothing loads).

import { useEffect, useState } from "react";
import { initAnalytics, analyticsConfigured } from "@/lib/analytics";

const CONSENT_COOKIE = "mrd_consent";
const TWELVE_MONTHS = 60 * 60 * 24 * 365; // seconds

function readConsent(): string | null {
  const m = document.cookie.match(/(?:^|;\s*)mrd_consent=([^;]+)/);
  return m ? decodeURIComponent(m[1]) : null;
}

function writeConsent(value: "accept" | "reject"): void {
  const secure = location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${CONSENT_COOKIE}=${value}; Max-Age=${TWELVE_MONTHS}; Path=/; SameSite=Lax${secure}`;
}

export function ConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!analyticsConfigured()) return; // no GA id → dormant
    const choice = readConsent();
    if (choice === "accept") {
      initAnalytics(); // returning visitor who already opted in
    } else if (choice == null) {
      setVisible(true); // first visit → ask
    }
    // choice === "reject" → stay hidden, load nothing
  }, []);

  if (!visible) return null;

  const accept = () => {
    writeConsent("accept");
    initAnalytics();
    setVisible(false);
  };
  const reject = () => {
    writeConsent("reject");
    setVisible(false);
  };

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-14 md:bottom-0 z-50 border-t border-border bg-background/95 px-4 py-4 shadow-lg backdrop-blur"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          We use anonymised Google Analytics (IP-anonymised, no advertising or cross-site
          trackers) to see how this site is used. It loads only if you accept. Read our{" "}
          <a href="/cookies" className="underline hover:text-foreground">
            Cookie Policy
          </a>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            onClick={reject}
            className="rounded-full border border-border bg-card px-5 py-2 text-sm font-medium hover:bg-muted"
          >
            Reject analytics
          </button>
          <button
            onClick={accept}
            className="rounded-full border border-border bg-card px-5 py-2 text-sm font-medium hover:bg-muted"
          >
            Accept analytics
          </button>
        </div>
      </div>
    </div>
  );
}
