"use client";
import { MessageCircle, Phone, ShieldCheck, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/blocks/Reveal";
import { NAP } from "@/content/site";

type Props = {
  service: string;            // "MacBook Water Damage Repair"
  startingPrice?: number;     // AED
  timeline?: string;          // "1-5 days"
  whatsappMessage?: string;   // prefilled
  /** short reassurance line; defaults to warranty + pickup */
  blurb?: string;
};

/**
 * Full-width "Get a quote" CTA band - replaces the repeating right-rail widget.
 * Drop between content sections. Dark brand band (always-dark surface → on-primary text).
 */
export function QuoteBand({ service, startingPrice, timeline, whatsappMessage, blurb }: Props) {
  const wa = whatsappMessage
    ? `${NAP.whatsappUrl}?text=${encodeURIComponent(whatsappMessage)}`
    : NAP.whatsappUrl;

  return (
    <Reveal
      as="section"
      className="mx-auto max-w-content px-5 md:px-6 my-2xl"
    >
      <div className="bg-bg-alt text-text rounded-lg p-xl md:p-2xl shadow-lg overflow-hidden relative">
        {/* subtle accent glow, decorative */}
        <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/20 blur-3xl" />
        <div className="relative flex flex-col gap-lg md:flex-row md:items-center md:justify-between">
          <div className="max-w-[46ch]">
            <p className="mono text-[12px] uppercase tracking-wider text-text-faint mb-1">
              {service}
            </p>
            <h2 className="text-text text-[26px] md:text-[32px] leading-tight">
              Get your free quote in 4 minutes on WhatsApp
            </h2>
            <p className="text-text-muted text-[15px] mt-sm">
              {blurb ?? "Send the model and a photo of the issue. Free pickup across Dubai mainland, no-fix-no-charge."}
            </p>
            <div className="mt-md flex flex-wrap gap-x-lg gap-y-sm text-[14px] text-text-muted">
              {startingPrice != null && (
                <span className="inline-flex items-center gap-1.5">
                  <span className="text-text-faint">From</span>
                  <span className="mono text-text font-bold text-[18px]">AED {startingPrice}</span>
                </span>
              )}
              {timeline && (
                <span className="inline-flex items-center gap-1.5">
                  <Clock size={15} aria-hidden /> {timeline}
                </span>
              )}
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck size={15} aria-hidden /> 90-day warranty
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-sm shrink-0 md:min-w-[220px]">
            <Button asChild variant="whatsapp" size="lg" className="w-full">
              <a href={wa} target="_blank" rel="noopener noreferrer">
                <MessageCircle aria-hidden /> WhatsApp quote
              </a>
            </Button>
            <Button asChild variant="secondary" size="lg" className="w-full">
              <a href={`tel:${NAP.phoneE164}`}>
                <Phone aria-hidden /> {NAP.phoneDisplay}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default QuoteBand;
