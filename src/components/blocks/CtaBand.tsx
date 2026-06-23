"use client";
// Shared dark closing CTA band — the signature final CTA from the MacBook Pro master
// template (src/views/MacBookProRepair.tsx). Full-bleed #2C3137 band with eyebrow +
// headline on the left and the WhatsApp / Call button pair on the right.
// Used across every service / device / area / city template for a consistent close.
import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAP } from "@/content/site";

export type CtaBandProps = {
  eyebrow?: string;
  headline: string;
  description?: string;
  whatsappLabel?: string;
  whatsappHref?: string;
  phoneLabel?: string;
  className?: string;
};

export function CtaBand({
  eyebrow = "Ready to fix your Mac?",
  headline,
  description,
  whatsappLabel = "Message on WhatsApp",
  whatsappHref = NAP.whatsappUrl,
  phoneLabel = NAP.phoneDisplay,
  className = "mt-[80px]",
}: CtaBandProps) {
  return (
    <section className={className} style={{ background: "#2C3137" }}>
      <div className="mx-auto max-w-content px-5 md:px-6 py-[48px] flex flex-col sm:flex-row items-center justify-between gap-md">
        <div>
          <p className="text-[11px] uppercase tracking-widest text-on-primary-muted mb-1">{eyebrow}</p>
          <h2 className="text-[22px] md:text-[26px] font-bold text-white leading-tight max-w-[40ch]">{headline}</h2>
          {description && (
            <p className="mt-2 text-[15px] text-on-primary-muted leading-relaxed max-w-[60ch]">{description}</p>
          )}
        </div>
        <div className="flex flex-wrap gap-sm shrink-0">
          <Button asChild variant="whatsapp" size="lg">
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
              <MessageCircle aria-hidden /> {whatsappLabel}
            </a>
          </Button>
          <Button asChild variant="secondary" size="lg" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
            <a href={`tel:${NAP.phoneE164}`}>
              <Phone aria-hidden /> {phoneLabel}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default CtaBand;
