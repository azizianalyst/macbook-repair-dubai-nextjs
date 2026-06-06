"use client";
import { Link } from "@/lib/router-compat";
import { Reveal } from "@/components/blocks/Reveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type FinalCTAProps = {
  eyebrow?: string;
  headline: string;
  description?: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
  className?: string;
};

function isExternal(href: string) {
  return /^https?:\/\/|^tel:|^mailto:/.test(href);
}

function CTALink({
  href,
  label,
  variant,
}: {
  href: string;
  label: string;
  variant: "primary" | "secondary";
}) {
  return (
    <Button asChild size="lg" variant={variant}>
      {isExternal(href) ? (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {label}
        </a>
      ) : (
        <Link to={href}>{label}</Link>
      )}
    </Button>
  );
}

/**
 * Gradient closing CTA panel. Dark brand band (bg-primary) with an accent
 * gradient overlay, rounded-3xl, centered, two buttons. SSR-safe.
 */
export default function FinalCTA({
  eyebrow,
  headline,
  description,
  primary,
  secondary,
  className,
}: FinalCTAProps) {
  return (
    <Reveal as="section" className={cn("py-14 lg:py-20", className)}>
      <div className="mx-auto max-w-content px-5 md:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-accent to-accent-2 px-6 py-2xl text-center shadow-lg md:px-2xl md:py-3xl">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-black/10"
          />
          <div className="relative mx-auto flex max-w-[640px] flex-col items-center">
            {eyebrow && (
              <span className="mb-sm text-[13px] font-semibold uppercase tracking-wide text-white/80">
                {eyebrow}
              </span>
            )}
            <h2 className="text-[26px] md:text-[36px] font-bold tracking-tight text-white">
              {headline}
            </h2>
            {description && (
              <p className="mt-md text-[16px] md:text-[18px] leading-relaxed text-white/85">
                {description}
              </p>
            )}
            <div className="mt-xl flex flex-wrap justify-center gap-sm text-white">
              <CTALink
                href={primary.href}
                label={primary.label}
                variant="primary"
              />
              {secondary && (
                <CTALink
                  href={secondary.href}
                  label={secondary.label}
                  variant="secondary"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
