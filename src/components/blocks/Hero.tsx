"use client";
import { ReactNode } from "react";
import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TrustLine } from "@/components/blocks/TrustLine";
import { Reveal } from "@/components/blocks/Reveal";
import { NAP } from "@/content/site";
import { cn } from "@/lib/utils";

type Variant = "home" | "service" | "blog" | "device";

// `imageAlt` is required IF a hero image is set. Enforced at runtime:
// when `image` is set without `imageAlt`, we fall back to the H1 title so
// the <img> is never alt="" and dev sees a console warning.
// See docs/PHOTOGRAPHY_BRIEF.md → "Alt-text rules" for what good alt text looks like.
type Props = {
  variant?: Variant;
  tone?: "light" | "dark"; // override band tone; default derives from variant (home/device dark, service/blog light)
  eyebrow?: string;          // small line above H1
  title: string;             // H1 text
  subtitle?: string;         // 1-line problem statement
  startingPrice?: number;    // AED
  timeline?: string;         // e.g. "Same day · 1-2 days"
  image?: string;            // hero image path (e.g. /images/devices/iphone-15.jpg) - LCP
  imageAlt?: string;         // REQUIRED when `image` is set (runtime-enforced, never empty)
  meta?: ReactNode;          // for blog: date + author + reading time
  ctaLabel?: string;         // override the primary (WhatsApp) CTA label; default "Message on WhatsApp"
  children?: ReactNode;      // free-form below CTAs (do NOT pass your own TrustLine/CTA here - Hero already renders them)
  sidecar?: ReactNode;       // right-column slot (e.g. booking/price card) - takes image's place
};

const HERO_SIZES = "(max-width: 414px) 360px, (max-width: 1068px) 800px, 640px";

function variantPaths(image: string) {
  const m = image.match(/^(.*)\.(jpe?g|png)$/i);
  if (!m) return null;
  const base = m[1];
  return {
    avif: `${base}-mobile.avif 360w, ${base}-tablet.avif 800w, ${base}-desktop.avif 1600w`,
    webp: `${base}-mobile.webp 360w, ${base}-tablet.webp 800w, ${base}-desktop.webp 1600w`,
    fallback: image,
  };
}

// hero variants - vary intentionally per page type.
// home: photo background, USP density. service: text-forward + price card.
// blog: tall + meta. device: model name big.
export function Hero({
  variant = "service",
  tone,
  eyebrow, title, subtitle, startingPrice, timeline,
  image, imageAlt, meta, ctaLabel, children, sidecar,
}: Props) {
  const hasSide = Boolean(image) || Boolean(sidecar);
  if (image && !imageAlt && process.env.NODE_ENV !== "production") {
    console.warn(`[Hero] imageAlt is required when image is set. Image: ${image}`);
  }
  const paths = image ? variantPaths(image) : null;
  // Site is light-only: every hero renders on a light band with dark text,
  // regardless of variant or any `tone` prop a caller still passes.
  const onDark = false;
  const toneBand = tone ? "bg-bg-alt" : "";
  return (
    <section
      data-hero-tone={onDark ? "dark" : "light"}
      className={cn(
        "relative pt-[96px] pb-2xl md:pb-3xl overflow-hidden",
        !tone && variant === "home" && "bg-bg-alt",
        !tone && variant === "service" && "bg-bg-alt",
        !tone && variant === "device" && "bg-bg-alt",
        !tone && variant === "blog" && "bg-bg",
        toneBand,
      )}
    >
      {onDark && (
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -left-16 h-[28rem] w-[28rem] rounded-full bg-accent/15 blur-3xl"
        />
      )}
      <div className={cn(
        "relative mx-auto max-w-content px-5 md:px-6 grid gap-xl items-center",
        hasSide ? "md:grid-cols-12" : "md:grid-cols-1",
      )}>
        <div className={cn(hasSide ? "md:col-span-7" : "max-w-[820px]")}>
          {eyebrow && (
            <Reveal as="p" delay={0} className="mono text-[12px] uppercase tracking-wider mb-md text-text-muted">
              {eyebrow}
            </Reveal>
          )}
          <Reveal as="h1" delay={60} className={cn(
            onDark ? "text-on-primary" : "text-text",
          )}>{title}</Reveal>

          <Reveal delay={120}>
            <TrustLine tone={onDark ? "light" : "dark"} />
          </Reveal>

          {subtitle && (
            <Reveal as="p" delay={180} className={cn(
              "mt-md text-[18px] leading-relaxed max-w-[60ch]",
              onDark ? "text-on-primary-muted" : "text-text-muted",
            )}>
              {subtitle}
            </Reveal>
          )}

          {meta && <div className="mt-md">{meta}</div>}

          {(startingPrice || timeline) && (
            <div className="mt-lg flex flex-wrap gap-md items-center">
              {startingPrice && (
                <div>
                  <span className={cn(
                    "block text-[12px] uppercase tracking-wider",
                    onDark ? "text-on-primary-faint" : "text-text-faint",
                  )}>From</span>
                  <span className="mono text-[28px] font-semibold">AED {startingPrice}</span>
                </div>
              )}
              {timeline && (
                <div>
                  <span className={cn(
                    "block text-[12px] uppercase tracking-wider",
                    onDark ? "text-on-primary-faint" : "text-text-faint",
                  )}>Timeline</span>
                  <span className="mono text-[18px]">{timeline}</span>
                </div>
              )}
            </div>
          )}

          <Reveal delay={240} className="mt-lg flex flex-wrap gap-sm">
            <Button asChild variant="whatsapp">
              <a href={NAP.whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle aria-hidden /> {ctaLabel ?? "Message on WhatsApp"}
              </a>
            </Button>
            <Button asChild variant={onDark ? "secondary" : "primary"}>
              <a href={`tel:${NAP.phoneE164}`}>
                <Phone aria-hidden /> {NAP.phoneDisplay}
              </a>
            </Button>
          </Reveal>

          {children}
        </div>

        {!image && sidecar && (
          <div className="md:col-span-5">
            {sidecar}
          </div>
        )}

        {image && (
          <div className="md:col-span-5">
            <picture>
              {paths && <source type="image/avif" srcSet={paths.avif} sizes={HERO_SIZES} />}
              {paths && <source type="image/webp" srcSet={paths.webp} sizes={HERO_SIZES} />}
              <img
                src={image}
                alt={imageAlt || title}
                width={640}
                height={480}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </picture>
          </div>
        )}
      </div>
    </section>
  );
}
