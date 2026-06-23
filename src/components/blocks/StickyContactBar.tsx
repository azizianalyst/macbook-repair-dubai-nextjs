"use client";
import { useEffect, useState } from "react";
import { MessageCircle, Phone, Headset } from "lucide-react";
import { NAP } from "@/content/site";
import { cn } from "@/lib/utils";

/**
 * Desktop-only floating contact cluster (bottom-right). Mobile is handled by
 * <StickyMobileCTA/>, so this is hidden below lg to avoid double bars.
 *
 * Three-button compact stack: Tech help → Call → WhatsApp.
 * The "Tech help" button fires a custom event that QuickHelpWidget listens to.
 */
export function StickyContactBar() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const onScroll = () => setShown(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function openQuickHelp() {
    window.dispatchEvent(new CustomEvent("quickhelp-open"));
  }

  const pillBase = cn(
    "inline-flex w-full items-center justify-center gap-2 rounded-full px-5 h-11 min-h-[44px] font-semibold text-[14px]",
    "motion-safe:transition-all motion-safe:duration-200 hover:-translate-y-0.5",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
  );

  return (
    <div
      className={cn(
        "hidden lg:flex fixed bottom-6 right-6 z-50 flex-col items-stretch gap-2 w-44",
        "motion-safe:transition-all motion-safe:duration-500 motion-safe:ease-out",
        shown
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 motion-safe:translate-y-4 pointer-events-none",
      )}
      aria-hidden={!shown}
    >
      {/* 1 — Tech help: opens QuickHelpWidget */}
      <button
        type="button"
        onClick={openQuickHelp}
        aria-label="Talk to a technician"
        className={cn(
          pillBase,
          "bg-primary text-white shadow-[0_8px_24px_-10px_rgba(0,0,0,0.35)]",
          "hover:brightness-110",
        )}
      >
        <Headset size={16} aria-hidden />
        <span>Tech help</span>
      </button>

      {/* 2 — Call */}
      <a
        href={`tel:${NAP.phoneE164}`}
        data-track="call-sticky"
        aria-label={`Call ${NAP.phoneDisplay}`}
        title={`Call ${NAP.phoneDisplay}`}
        className={cn(
          pillBase,
          "bg-bg-card/95 text-text backdrop-blur-sm border border-border",
          "shadow-[0_4px_16px_-8px_rgba(0,0,0,0.18)] hover:border-accent/50 hover:text-accent",
        )}
      >
        <Phone size={16} aria-hidden />
        <span>Call</span>
      </a>

      {/* 3 — WhatsApp */}
      <a
        href={NAP.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        data-track="whatsapp-sticky"
        aria-label="Chat with us on WhatsApp"
        title="Chat with us on WhatsApp"
        className={cn(
          pillBase,
          "bg-whatsapp text-white shadow-[0_8px_24px_-10px_rgba(7,92,48,0.5)]",
          "hover:brightness-110",
        )}
      >
        <MessageCircle size={16} aria-hidden />
        <span>WhatsApp</span>
      </a>
    </div>
  );
}

export default StickyContactBar;
