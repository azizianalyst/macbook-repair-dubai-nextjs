"use client";
import { useEffect, useState } from "react";
import { MessageCircle, Phone } from "lucide-react";
import { NAP } from "@/content/site";
import { cn } from "@/lib/utils";

/**
 * Desktop-only floating contact cluster (bottom-right). Mobile is handled by
 * <StickyMobileCTA/>, so this is hidden below lg to avoid double bars.
 *
 * SSR-safe: renders by default (visible=false starts the entrance state, the
 * scroll listener only *adds* the shown state in the browser). Reduced-motion
 * safe via motion-safe: utilities. WCAG: aria-labels + focus-visible rings,
 * touch targets >=44px.
 */
export function StickyContactBar() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const onScroll = () => setShown(window.scrollY > 300);
    onScroll(); // sync to current position on mount
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        // desktop-only floating cluster, clear of footer + screen edges
        "hidden lg:flex fixed bottom-6 right-6 z-50 flex-col items-end gap-3",
        // entrance: fade + slide up (no-motion users get instant visibility once shown)
        "motion-safe:transition-all motion-safe:duration-500 motion-safe:ease-out",
        shown
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 motion-safe:translate-y-4 pointer-events-none",
      )}
      aria-hidden={!shown}
    >
      {/* Secondary: Call — same pill geometry as WhatsApp so the stack reads
          as one designed cluster, differentiated by surface only */}
      <a
        href={`tel:${NAP.phoneE164}`}
        data-track="call-sticky"
        aria-label={`Call ${NAP.phoneDisplay}`}
        title={`Call ${NAP.phoneDisplay}`}
        className={cn(
          "group inline-flex w-full items-center justify-center gap-2 rounded-full bg-bg-card/95 text-text backdrop-blur-sm",
          "border border-border shadow-[0_8px_24px_-12px_rgba(0,0,0,0.25)] px-5 h-12 min-h-[44px] font-semibold text-[15px]",
          "hover:border-accent/50 hover:text-accent",
          "motion-safe:transition-all motion-safe:duration-200 hover:-translate-y-0.5",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
        )}
      >
        <Phone size={17} aria-hidden />
        <span>Call</span>
      </a>

      {/* Primary: WhatsApp — white text on the brand green (token is darkened
          specifically for white text contrast) */}
      <a
        href={NAP.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        data-track="whatsapp-sticky"
        aria-label="Chat with us on WhatsApp"
        title="Chat with us on WhatsApp"
        className={cn(
          "group inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp text-white",
          "shadow-[0_12px_32px_-12px_rgba(7,92,48,0.55)] px-5 h-12 min-h-[44px] font-semibold text-[15px]",
          "hover:shadow-[0_16px_40px_-12px_rgba(7,92,48,0.65)] motion-safe:transition-all motion-safe:duration-200 hover:-translate-y-0.5",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-whatsapp focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
        )}
      >
        <MessageCircle size={17} aria-hidden />
        <span>WhatsApp</span>
      </a>
    </div>
  );
}

export default StickyContactBar;
