"use client";
import { Phone, MessageCircle } from "lucide-react";
import { NAP } from "@/content/site";

// fixed bottom on mobile only. solid bg, no blur.
export function StickyMobileCTA() {
  return (
    <div className="sticky-cta md:hidden fixed inset-x-0 bottom-0 z-40 min-h-14 pb-[env(safe-area-inset-bottom)] grid grid-cols-2 border-t border-border shadow-lg">
      <a
        href={`tel:${NAP.phoneE164}`}
        data-track="sticky-bar-call"
        className="flex items-center justify-center gap-2 bg-bg-card text-text border-r border-border font-semibold text-[15px]"
        aria-label={`Call now on ${NAP.phoneDisplay}`}
      >
        <Phone size={18} aria-hidden /> Call now
      </a>
      <a
        href={NAP.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        data-track="sticky-bar-whatsapp"
        className="flex items-center justify-center gap-2 bg-whatsapp text-white font-semibold text-[15px]"
        aria-label="Message on WhatsApp"
      >
        <MessageCircle size={18} aria-hidden /> WhatsApp
      </a>
    </div>
  );
}
