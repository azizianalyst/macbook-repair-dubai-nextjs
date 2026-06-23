"use client";
import { Check } from "lucide-react";
import { Link } from "@/lib/router-compat";
import { Reveal } from "@/components/blocks/Reveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type PricingTier = {
  name: string;
  price: string;
  period?: string;
  description?: string;
  features: string[];
  highlighted?: boolean;
  cta: { label: string; href: string };
};

export type PricingTiersProps = {
  heading?: string;
  subheading?: string;
  tiers: PricingTier[];
  className?: string;
};

/**
 * 3-tier responsive pricing grid (md:3, stacks on mobile). The highlighted
 * tier gets an accent ring + "Most Popular" badge. Prices shown verbatim
 * (AED strings). SSR-safe.
 */
export default function PricingTiers({
  heading,
  subheading,
  tiers,
  className,
}: PricingTiersProps) {
  return (
    <Reveal as="section" className={cn("py-3xl lg:py-4xl", className)}>
      <div className="mx-auto max-w-content px-5 md:px-6">
        {(heading || subheading) && (
          <div className="mb-2xl max-w-[680px]">
            {heading && (
              <h2 className="text-[28px] md:text-[32px] font-semibold tracking-tight text-text">
                {heading}
              </h2>
            )}
            {subheading && (
              <p className="mt-sm text-[16px] md:text-[18px] leading-relaxed text-text-muted">
                {subheading}
              </p>
            )}
          </div>
        )}

        <div className="grid gap-md md:grid-cols-3">
          {tiers.map((t, i) => {
            const isExternal = /^https?:\/\/|^tel:|^mailto:/.test(t.cta.href);
            return (
              <div
                key={i}
                className={cn(
                  "relative flex flex-col rounded-md border p-lg",
                  t.highlighted
                    ? "border-accent/60 bg-bg-card ring-2 ring-accent/50 md:-mt-2 md:mb-2"
                    : "border-border bg-bg-card",
                )}
              >
                {t.highlighted && (
                  <span className="absolute -top-3 left-lg inline-flex rounded-full bg-accent px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
                    Most Popular
                  </span>
                )}

                <h3 className="text-[18px] font-bold text-text">{t.name}</h3>

                <div className="mt-md flex items-end gap-1">
                  <span className="text-[32px] font-bold leading-none tracking-tight text-text">
                    {t.price}
                  </span>
                  {t.period && (
                    <span className="pb-1 text-[14px] text-text-muted">
                      {t.period}
                    </span>
                  )}
                </div>

                {t.description && (
                  <p className="mt-sm text-[14px] leading-relaxed text-text-muted">
                    {t.description}
                  </p>
                )}

                <ul className="mt-lg flex flex-col gap-sm">
                  {t.features.map((f, fi) => (
                    <li
                      key={fi}
                      className="flex items-start gap-sm text-[14px] leading-relaxed text-text"
                    >
                      <Check
                        size={18}
                        className="mt-[2px] shrink-0 text-accent"
                        aria-hidden
                      />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-lg">
                  <Button
                    asChild
                    size="lg"
                    variant={t.highlighted ? "whatsapp" : "secondary"}
                    className="w-full"
                  >
                    {isExternal ? (
                      <a
                        href={t.cta.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t.cta.label}
                      </a>
                    ) : (
                      <Link to={t.cta.href}>{t.cta.label}</Link>
                    )}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Reveal>
  );
}
