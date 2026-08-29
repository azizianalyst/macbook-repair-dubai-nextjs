"use client";
// Shared "Get price on WhatsApp" call-to-action. The site runs in request-a-quote mode: no
// visitor ever sees a figure — every price surface becomes this CTA, which opens WhatsApp with
// an optional prefilled message naming the device/service on the page. Matches the codebase's
// WhatsApp link style (text-whatsapp + MessageCircle). Use the compact variant inside table
// cells / tight stat spots.
import { MessageCircle } from "lucide-react";
import { NAP } from "@/content/site";
import { cn } from "@/lib/utils";

type Props = {
  /** Prefilled WhatsApp text, e.g. "Hi, price for MacBook Air M2 screen replacement?" */
  message?: string;
  /** Override link text (default "Get price on WhatsApp", or "Price on WhatsApp" when compact) */
  label?: string;
  /** Tight variant for table cells / stat values: smaller text + icon */
  compact?: boolean;
  className?: string;
};

export function PriceCTA({ message, label, compact = false, className }: Props) {
  const href = message ? `${NAP.whatsappUrl}?text=${encodeURIComponent(message)}` : NAP.whatsappUrl;
  const text = label ?? (compact ? "Price on WhatsApp" : "Get price on WhatsApp");
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-1.5 font-semibold text-whatsapp hover:underline",
        compact ? "text-[13px]" : "text-[14px]",
        className,
      )}
    >
      <MessageCircle size={compact ? 14 : 16} aria-hidden /> {text}
    </a>
  );
}

export default PriceCTA;
