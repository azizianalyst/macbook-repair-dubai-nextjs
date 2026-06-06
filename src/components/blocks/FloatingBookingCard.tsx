"use client";
import { MessageCircle, Phone, Clock, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAP } from "@/content/site";
import { cn } from "@/lib/utils";

type Props = {
  service: string;            // "MacBook Screen Repair"
  startingPrice: number;      // AED
  timeline: string;           // "Same day · 1-2 days"
  whatsappMessage?: string;   // prefilled
  sticky?: boolean;           // sticky right-rail (default) vs static (e.g. inside hero)
  tone?: "light" | "dark";    // "dark" for use on the bg-primary band; default light
};

// sticky right-rail booking widget on desktop, inline on mobile.
// kept lightweight - no JS state, just NAP links.
export function FloatingBookingCard({ service, startingPrice, timeline, whatsappMessage, sticky = true, tone = "light" }: Props) {
  const dark = tone === "dark";
  const wa = whatsappMessage
    ? `${NAP.whatsappUrl}?text=${encodeURIComponent(whatsappMessage)}`
    : NAP.whatsappUrl;

  return (
    <aside
      aria-label={`Book ${service}`}
      className={cn(
        sticky && "md:sticky md:top-[110px]",
        "rounded-md p-lg flex flex-col gap-md",
        dark ? "border border-white/10 bg-white/[0.04]" : "bg-bg-card border border-border shadow-md",
      )}
    >
      <div>
        <p className={cn("text-[12px] uppercase tracking-wider mono", dark ? "text-on-primary-faint" : "text-text-faint")}>{service}</p>
        <p className="mt-1">
          <span className={cn("text-[12px] uppercase tracking-wider", dark ? "text-on-primary-faint" : "text-text-faint")}>From </span>
          <span className={cn("mono text-[28px] font-bold", dark ? "text-accent-bright" : "text-primary")}>AED {startingPrice}</span>
        </p>
        <p className={cn("mono text-[13px] mt-1 flex items-center gap-1", dark ? "text-on-primary-muted" : "text-text-muted")}>
          <Clock size={13} aria-hidden /> {timeline}
        </p>
      </div>

      <ul className={cn("text-[13px] space-y-1", dark ? "text-on-primary-muted" : "text-text-muted")}>
        <li className="flex items-center gap-2"><ShieldCheck size={14} className="text-success" aria-hidden /> 90-day written warranty</li>
        <li className="flex items-center gap-2"><ShieldCheck size={14} className="text-success" aria-hidden /> No fix, no charge</li>
        <li className="flex items-center gap-2"><ShieldCheck size={14} className="text-success" aria-hidden /> Free pickup &amp; delivery</li>
      </ul>

      <div className="flex flex-col gap-sm">
        <Button asChild variant="whatsapp" size="lg" className="w-full">
          <a href={wa} target="_blank" rel="noopener noreferrer">
            <MessageCircle aria-hidden /> WhatsApp quote
          </a>
        </Button>
        <Button asChild variant="primary" size="lg" className="w-full">
          <a href={`tel:${NAP.phoneE164}`}>
            <Phone aria-hidden /> {NAP.phoneDisplay}
          </a>
        </Button>
      </div>

      <p className={cn("text-[12px] mono", dark ? "text-on-primary-faint" : "text-text-faint")}>
        Mon-Sat 9 am - 10 pm · Concord Tower, Media City
      </p>
    </aside>
  );
}
