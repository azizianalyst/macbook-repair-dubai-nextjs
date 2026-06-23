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

  // Tell the QuickHelp launcher (which hides itself while this banner is up) that the
  // first-visit decision is made, so it can reappear immediately without a reload.
  const announce = () => window.dispatchEvent(new Event("mrd-consent-change"));
  const accept = () => {
    writeConsent("accept");
    initAnalytics();
    setVisible(false);
    announce();
  };
  const reject = () => {
    writeConsent("reject");
    setVisible(false);
    announce();
  };

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      // On mobile, lift the sheet clear of the sticky Call/WhatsApp bar (bottom-[60px] vs the bar's
      // ~56px) and round + shadow the top so it reads as a distinct layer, not a second stacked bar.
      // One-line copy + py-3 keeps the footprint small so it occludes far less of the viewport.
      className="fixed inset-x-0 bottom-[60px] md:bottom-0 z-[70] rounded-t-2xl border-t border-border bg-background/95 px-4 py-3 shadow-2xl backdrop-blur md:rounded-none"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[13px] leading-snug text-muted-foreground">
          We use anonymised analytics (no ads, no cross-site tracking) — loaded only if you accept.{" "}
          <a href="/cookies/" className="underline hover:text-foreground">Cookie Policy</a>.
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            onClick={reject}
            className="inline-flex min-h-[44px] flex-1 items-center justify-center rounded-full border border-border bg-card px-4 text-sm font-medium hover:bg-muted sm:flex-none"
          >
            Reject
          </button>
          <button
            onClick={accept}
            className="inline-flex min-h-[44px] flex-1 items-center justify-center rounded-full border border-border bg-card px-4 text-sm font-medium hover:bg-muted sm:flex-none"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
