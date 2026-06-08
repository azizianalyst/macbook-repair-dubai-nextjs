"use client";
import { Phone, MessageCircle } from "lucide-react";
import { NAP } from "@/content/site";

// fixed bottom on mobile only. solid bg, no blur.
export function StickyMobileCTA() {
  return (
    <div className="sticky-cta md:hidden fixed inset-x-0 bottom-0 z-40 h-14 grid grid-cols-2 border-t border-border shadow-lg">
      <a
        href={`tel:${NAP.phoneE164}`}
        className="flex items-center justify-center gap-2 bg-bg-card text-text border-r border-border font-semibold text-[15px]"
        aria-label={`Call ${NAP.phoneDisplay}`}
      >
        <Phone size={18} aria-hidden /> Call now
      </a>
      <a
        href={NAP.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-whatsapp text-white font-semibold text-[15px]"
        aria-label="Message on WhatsApp"
      >
        <MessageCircle size={18} aria-hidden /> WhatsApp
      </a>
    </div>
  );
}
