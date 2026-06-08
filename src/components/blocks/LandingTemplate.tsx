"use client";
// LandingTemplate - flagship reusable landing page (workstream E).
//
// Renders up to 8 sections IN ORDER; every section EXCEPT the hero is optional
// and is omitted entirely when its prop is not supplied:
//   1 HERO        (required)            - dark brand band, gradient H1, CTAs, trust pills, optional ResultsCard
//   2 WHAT-IS     (props.whatIs)        - <WhatIsSection>
//   3 FEATURES    (props.features)      - <FeatureGrid>
//   4 CASE STUDIES(props.caseStudies)   - <CaseStudyGrid>
//   5 METHODOLOGY (props.methodology)   - existing <StepList> (numbered 5-step)
//   6 PRICING     (props.pricing)       - <PricingTiers>
//   7 FAQ         (props.faqs)          - existing <FAQAccordion> (injects FAQPage schema)
//   8 FINAL CTA   (props.finalCta)      - <FinalCTA> (else a sensible WhatsApp/phone default)
//
// SSR-safe: no window access during render. Mounts inside PageShell (one <main>),
// matching how SubServicePageTemplate mounts within the app. SEO via <SEOHead>.
import { ReactNode } from "react";
import { Link } from "@/lib/router-compat";
import { Phone, MessageCircle, ArrowRight, Star, type LucideIcon } from "lucide-react";

import { PageShell } from "@/components/layout/PageShell";
import { Reveal } from "@/components/blocks/Reveal";
import { Button } from "@/components/ui/button";
import { GradientText } from "@/components/blocks/GradientText";
import { BreadcrumbTrail, type Crumb } from "@/components/blocks/BreadcrumbTrail";
import SEOHead from "@/components/SEOHead";

import ResultsCard, { type ResultsCardProps } from "@/components/blocks/ResultsCard";
import WhatIsSection, { type WhatIsSectionProps } from "@/components/blocks/WhatIsSection";
import FeatureGrid, { type FeatureGridProps } from "@/components/blocks/FeatureGrid";
import CaseStudyGrid, { type CaseStudyGridProps } from "@/components/blocks/CaseStudyGrid";
import PricingTiers, { type PricingTiersProps } from "@/components/blocks/PricingTiers";
import FinalCTA, { type FinalCTAProps } from "@/components/blocks/FinalCTA";
import { type Step } from "@/components/blocks/StepList";
import { FAQAccordion } from "@/components/blocks/FAQAccordion";

import { NAP } from "@/content/site";
import { SITE } from "@/lib/seo";
import { speakable, itemList } from "@/lib/schema";
import { cn } from "@/lib/utils";

/** SEO props passed straight to <SEOHead>. */
export type LandingSeo = {
  title: string;
  description: string;
  path?: string;
  canonical?: string;
  ogImage?: string;
  ogImageAlt?: string;
  robots?: string;
  noindex?: boolean;
  preloadImage?: {
    href: string;
    type?: "image/avif" | "image/webp" | "image/jpeg" | "image/png";
    imagesrcset?: string;
    imagesizes?: string;
  };
  /** ISO date (e.g. "2026-06-02"). Emits dateModified on the WebPage schema for freshness signals. */
  dateModified?: string;
  schemas?: unknown[];
};

export type LandingCTA = { label: string; href: string };

/** Internal link to a related service/area page (the GEO entity-linking lever). */
export type LandingRelatedLink = {
  label: string;
  href: string;
  description?: string;
};

/** A labelled column of internal links for the link-hub navigation block. */
export type LinkHubCluster = {
  heading: string;
  links: { label: string; href: string }[];
};

/** A single customer review for the Reviews section. */
export type LandingReview = { name: string; date: string; rating: number; text: string };
export type LandingReviews = {
  heading?: string;
  rating: number;
  count: number;
  items: LandingReview[];
  ctaHref?: string;
  ctaLabel?: string;
};

/** A column of quick facts (opening hours, pickup, location, payment) - AI-citable. */
export type LandingInfoColumn = { icon?: LucideIcon; title: string; lines: string[] };

/** A related blog post / guide card. */
export type LandingPost = { title: string; href: string; excerpt?: string; meta?: string };

/** A device model we service, linking to its model page. */
export type LandingModel = { label: string; href: string; note?: string };
export type LandingModelCluster = { heading: string; models: LandingModel[] };
/** "Models we service" section - grouped model links + auto ItemList schema. */
export type LandingModelsSection = { heading?: string; description?: string; clusters: LandingModelCluster[] };

export type LandingTrustPill = {
  icon?: LucideIcon;
  label: string;
};

export type LandingHero = {
  /** Small badge pill above the H1. */
  badge?: string;
  /**
   * H1 content. Pass a plain string, or JSX using <GradientText> on the key
   * words for the green gradient highlight, e.g.
   *   title={<>Apple repair, <GradientText>done right</GradientText></>}
   */
  title: ReactNode;
  description?: string;
  /** Primary CTA. Defaults to WhatsApp. */
  primary?: LandingCTA;
  /** Secondary CTA (usually phone). Defaults to calling the shop. */
  secondary?: LandingCTA;
  /** 3-4 short trust pills (rendered as rounded-full bordered chips). */
  trustPills?: LandingTrustPill[];
  /** Optional right-column ResultsCard. */
  results?: ResultsCardProps;
};

export type LandingMethodology = {
  heading?: string;
  subheading?: string;
  /** Numbered steps (designed for 5). */
  steps: Step[];
  className?: string;
};

export type FAQItem = { q: string; a: string };

export type LandingTemplateProps = {
  /** SEO meta + schemas. Rendered via <SEOHead>. */
  seo: LandingSeo;
  /** Breadcrumb trail (renders below the hero + emits BreadcrumbList schema). Required on pages below home. */
  breadcrumb?: Crumb[];
  /** Section 1 (required). */
  hero: LandingHero;
  /** Related internal links (entity-linking) - renders a card row before the final CTA. */
  relatedServices?: LandingRelatedLink[];
  /** Multi-cluster internal-link hub (services / models / areas / guides) - maximises crawl paths + navigation from every page. */
  linkHub?: { heading?: string; clusters: LinkHubCluster[] };
  /** Customer reviews + aggregate rating (social proof). Renders after case studies. */
  reviews?: LandingReviews;
  /** Quick-facts columns (opening hours, pickup, location, payment) - the things people ask AI. */
  keyInfo?: { heading?: string; columns: LandingInfoColumn[] };
  /** Related blog posts / guides (renders a card grid before related services). */
  relatedPosts?: { heading?: string; posts: LandingPost[] };
  /** "Models we service" - grouped model links (which devices this service covers) + ItemList schema. */
  models?: LandingModelsSection;
  /** Section 2 - omit to skip. */
  whatIs?: WhatIsSectionProps;
  /** Section 3 - omit to skip. */
  features?: FeatureGridProps;
  /** Section 4 - omit to skip. */
  caseStudies?: CaseStudyGridProps;
  /** Section 5 - omit to skip. */
  methodology?: LandingMethodology;
  /** Section 6 - omit to skip. */
  pricing?: PricingTiersProps;
  /** Section 7 - omit to skip. FAQAccordion injects FAQPage schema. */
  faqs?: FAQItem[];
  /** Section 8 - omit to fall back to the default WhatsApp/phone CTA. */
  finalCta?: FinalCTAProps;
  /** Optional free-form content appended after the hero, before What-Is. */
  children?: ReactNode;
};

const DEFAULT_PRIMARY: LandingCTA = {
  label: "Message on WhatsApp",
  href: NAP.whatsappUrl,
};
const DEFAULT_SECONDARY: LandingCTA = {
  label: NAP.phoneDisplay,
  href: `tel:${NAP.phoneE164}`,
};

function isExternal(href: string) {
  return /^https?:\/\/|^tel:|^mailto:/.test(href);
}

/** Hero CTA button: external links open in a new tab; internal use a plain anchor. */
function HeroCTA({
  cta,
  variant,
  icon: Icon,
}: {
  cta: LandingCTA;
  variant: "whatsapp" | "secondary";
  icon?: LucideIcon;
}) {
  const external = isExternal(cta.href);
  return (
    <Button asChild variant={variant} size="lg">
      <a
        href={cta.href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {Icon && <Icon aria-hidden />}
        {cta.label}
      </a>
    </Button>
  );
}

export default function LandingTemplate({
  seo,
  hero,
  whatIs,
  features,
  caseStudies,
  methodology,
  pricing,
  breadcrumb,
  relatedServices,
  linkHub,
  reviews,
  keyInfo,
  relatedPosts,
  models,
  faqs,
  finalCta,
  children,
}: LandingTemplateProps) {
  const primary = hero.primary ?? DEFAULT_PRIMARY;
  const secondary = hero.secondary ?? DEFAULT_SECONDARY;
  const trustPills = hero.trustPills ?? [];
  const hasResults = Boolean(hero.results);

  // WebPage node carrying the freshness signal (dateModified) and a Speakable
  // spec pointing at the hero summary - helps voice assistants / AI Overviews.
  const pagePath = seo.path ?? seo.canonical ?? "/";
  const speakableWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: pagePath.startsWith("http") ? pagePath : SITE.url + pagePath,
    name: seo.title,
    description: seo.description,
    inLanguage: "en-AE",
    ...(seo.dateModified ? { dateModified: seo.dateModified } : {}),
    speakable: { ...speakable([]), cssSelector: [".lt-speakable"] },
  };
  // ItemList of serviced models - lets Google/AI enumerate exactly which devices this page covers.
  const modelsItemList =
    models && models.clusters.length > 0
      ? itemList({
          name: models.heading ?? "Models we service",
          items: models.clusters
            .flatMap((c) => c.models)
            .map((m) => ({ name: m.label, url: m.href, description: m.note })),
        })
      : null;
  const schemas = [
    ...(seo.schemas ?? []),
    speakableWebPage,
    ...(modelsItemList ? [modelsItemList] : []),
  ];

  return (
    <PageShell>
      <SEOHead
        title={seo.title}
        description={seo.description}
        path={seo.path}
        canonical={seo.canonical}
        ogImage={seo.ogImage}
        ogImageAlt={seo.ogImageAlt}
        robots={seo.robots}
        noindex={seo.noindex}
        preloadImage={seo.preloadImage}
        schemas={schemas}
      />

      {/* whole page sits on one continuous dark brand band */}
      <div className="bg-bg-alt text-text">
      {/* 1 - HERO (required) */}
      <section data-hero-tone="light" className="relative overflow-hidden bg-bg-alt text-text pt-[96px] pb-2xl md:pb-3xl">
        {/* faint grid + soft radial accent glow behind the hero */}
        <div className="absolute inset-0 bg-grid-faint on-dark" aria-hidden />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -left-16 h-[28rem] w-[28rem] rounded-full bg-accent/15 blur-3xl"
        />

        <div
          className={cn(
            "relative mx-auto max-w-content px-5 md:px-6 grid items-center gap-xl",
            hasResults ? "lg:grid-cols-12" : "lg:grid-cols-1",
          )}
        >
          <div className={cn(hasResults ? "lg:col-span-7" : "max-w-[820px]")}>
            {breadcrumb && breadcrumb.length > 0 && (
              <BreadcrumbTrail trail={breadcrumb} tone="dark" />
            )}
            {hero.badge && (
              <Reveal
                as="p"
                delay={0}
                className="mb-md inline-flex items-center rounded-full border border-border bg-bg-card px-3 py-1 text-[12px] font-semibold uppercase tracking-wider text-accent"
              >
                {hero.badge}
              </Reveal>
            )}

            <Reveal as="h1" delay={60} className="text-text">
              {hero.title}
            </Reveal>

            {hero.description && (
              <Reveal
                as="p"
                delay={140}
                className="lt-speakable mt-md max-w-[60ch] text-[18px] leading-relaxed text-text-muted"
              >
                {hero.description}
              </Reveal>
            )}

            <Reveal delay={220} className="mt-lg flex flex-wrap gap-sm">
              <HeroCTA cta={primary} variant="whatsapp" icon={MessageCircle} />
              <HeroCTA cta={secondary} variant="secondary" icon={Phone} />
            </Reveal>

            {trustPills.length > 0 && (
              <Reveal delay={300} className="mt-lg flex flex-wrap gap-sm">
                {trustPills.map((pill, i) => {
                  const Icon = pill.icon;
                  return (
                    <span
                      key={i}
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-bg-card px-3 py-1.5 text-[13px] text-text-muted"
                    >
                      {Icon && (
                        <Icon size={15} className="text-white" aria-hidden />
                      )}
                      {pill.label}
                    </span>
                  );
                })}
              </Reveal>
            )}
          </div>

          {hasResults && hero.results && (
            <div className="lg:col-span-5">
              <ResultsCard {...hero.results} />
            </div>
          )}
        </div>
      </section>

      {children}

      {/* 2 - WHAT IS */}
      {whatIs && <WhatIsSection {...whatIs} />}

      {/* 3 - FEATURES (subtle banded surface for rhythm) */}
      {features && (
        <FeatureGrid
          {...features}
          className={cn("bg-bg-alt border-y border-border", features.className)}
        />
      )}

      {/* 4 - CASE STUDIES */}
      {caseStudies && <CaseStudyGrid {...caseStudies} />}

      {/* REVIEWS - social proof + aggregate rating */}
      {reviews && reviews.items.length > 0 && (
        <Reveal as="section" className="py-14 lg:py-20 bg-bg-alt border-y border-border">
          <div className="mx-auto max-w-content px-5 md:px-6">
            <div className="mb-2xl flex flex-wrap items-end justify-between gap-md">
              <div>
                <h2 className="text-[26px] md:text-[34px] font-bold tracking-tight text-text">
                  {reviews.heading ?? "What our customers say"}
                </h2>
                <p className="mt-sm flex items-center gap-2 text-[15px] text-text-muted">
                  <span className="flex" aria-hidden>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={16} className="fill-star text-star" />
                    ))}
                  </span>
                  <span className="font-semibold text-text">{reviews.rating.toFixed(1)}</span>
                  <span>· {reviews.count}+ Google reviews</span>
                </p>
              </div>
              {reviews.ctaHref && (
                <Link
                  to={reviews.ctaHref}
                  className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-accent hover:underline rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  {reviews.ctaLabel ?? `Read all ${reviews.count}+ reviews`}
                  <ArrowRight size={15} aria-hidden />
                </Link>
              )}
            </div>
            <div className="grid gap-md md:grid-cols-3">
              {reviews.items.map((r, i) => (
                <figure key={i} className="flex flex-col rounded-2xl border border-border bg-bg-card p-lg">
                  <div className="flex" aria-label={`${r.rating} out of 5 stars`}>
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} size={15} aria-hidden className={s < r.rating ? "fill-star text-star" : "text-white/20"} />
                    ))}
                  </div>
                  <blockquote className="mt-md flex-1 text-[15px] leading-relaxed text-text-muted">
                    {r.text}
                  </blockquote>
                  <figcaption className="mt-md text-[13px] text-text-faint">
                    <span className="font-semibold text-text">{r.name}</span> · {r.date}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </Reveal>
      )}

      {/* 5 - METHODOLOGY (numbered steps, dark band) */}
      {methodology && (
        <Reveal
          as="section"
          className={cn(
            "py-14 lg:py-20 bg-bg-alt border-y border-border",
            methodology.className,
          )}
        >
          <div className="mx-auto max-w-content px-5 md:px-6">
            {(methodology.heading || methodology.subheading) && (
              <div className="mb-2xl max-w-[680px]">
                {methodology.heading && (
                  <h2 className="text-[26px] md:text-[34px] font-bold tracking-tight text-text">
                    {methodology.heading}
                  </h2>
                )}
                {methodology.subheading && (
                  <p className="mt-sm text-[16px] md:text-[18px] leading-relaxed text-text-muted">
                    {methodology.subheading}
                  </p>
                )}
              </div>
            )}
            <ol className="grid gap-md sm:grid-cols-2 lg:grid-cols-4">
              {methodology.steps.map((s, i) => (
                <Reveal
                  as="li"
                  key={i}
                  delay={(i % 4) * 70}
                  className="rounded-2xl border border-border bg-bg-card p-lg"
                >
                  <span
                    aria-hidden
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-white font-bold text-[18px]"
                  >
                    {i + 1}
                  </span>
                  <h3 className="mt-md font-semibold text-[16px] text-text">{s.title}</h3>
                  <p className="mt-1 text-[14px] leading-relaxed text-text-muted">{s.body}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </Reveal>
      )}

      {/* KEY INFO - hours, pickup, location, payment (high-intent, AI-citable facts) */}
      {keyInfo && keyInfo.columns.length > 0 && (
        <Reveal as="section" className="py-14 lg:py-20">
          <div className="mx-auto max-w-content px-5 md:px-6">
            <h2 className="mb-2xl text-[26px] md:text-[34px] font-bold tracking-tight text-text">
              {keyInfo.heading ?? "Hours, pickup & location"}
            </h2>
            <div className="grid gap-md sm:grid-cols-2 lg:grid-cols-4">
              {keyInfo.columns.map((col, i) => {
                const Icon = col.icon;
                return (
                  <div key={i} className="rounded-2xl border border-border bg-bg-card p-lg">
                    {Icon && (
                      <span className="mb-md inline-flex h-11 w-11 items-center justify-center rounded-xl bg-bg-card text-accent">
                        <Icon size={22} aria-hidden />
                      </span>
                    )}
                    <h3 className="text-[16px] font-bold text-text">{col.title}</h3>
                    <ul className="mt-sm space-y-1.5 text-[14px] leading-relaxed text-text-muted">
                      {col.lines.map((line, li) => (
                        <li key={li}>{line}</li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      )}

      {/* 6 - PRICING */}
      {pricing && <PricingTiers {...pricing} />}

      {/* MODELS WE SERVICE - which devices this service covers (links to model pages) + ItemList schema */}
      {models && models.clusters.length > 0 && (
        <Reveal as="section" className="py-14 lg:py-20 bg-bg-alt border-y border-border">
          <div className="mx-auto max-w-content px-5 md:px-6">
            <div className="mb-2xl max-w-[760px]">
              <h2 className="text-[26px] md:text-[34px] font-bold tracking-tight text-text">
                {models.heading ?? "MacBook models we service"}
              </h2>
              {models.description && (
                <p className="mt-sm text-[16px] md:text-[18px] leading-relaxed text-text-muted">
                  {models.description}
                </p>
              )}
            </div>
            <div className="grid gap-xl sm:grid-cols-2 lg:grid-cols-3">
              {models.clusters.map((cluster) => (
                <div key={cluster.heading}>
                  <h3 className="mb-md text-[12px] font-bold uppercase tracking-[0.14em] text-accent">
                    {cluster.heading}
                  </h3>
                  <ul className="flex flex-wrap gap-2">
                    {cluster.models.map((m) => (
                      <li key={m.href}>
                        <Link
                          to={m.href}
                          title={m.note}
                          className="inline-flex items-center rounded-full border border-border bg-bg-card px-3 py-1.5 text-[13.5px] text-text-muted transition-colors hover:border-accent/50 hover:bg-bg-alt hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                        >
                          {m.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      )}

      {/* 7 - FAQ (dark accordion, injects FAQPage schema) */}
      {faqs && faqs.length > 0 && (
        <Reveal as="section" className="py-14 lg:py-20 bg-bg-alt border-y border-border">
          <div className="mx-auto max-w-content px-5 md:px-6">
            <h2 className="mb-2xl text-[26px] md:text-[34px] font-bold tracking-tight text-text">
              Frequently asked questions
            </h2>
            <FAQAccordion items={faqs} injectSchema tone="dark" />
          </div>
        </Reveal>
      )}

      {/* Related posts - blog/guide cards (topical authority + internal links) */}
      {relatedPosts && relatedPosts.posts.length > 0 && (
        <Reveal as="section" className="py-14 lg:py-20">
          <div className="mx-auto max-w-content px-5 md:px-6">
            <h2 className="mb-2xl text-[26px] md:text-[34px] font-bold tracking-tight text-text">
              {relatedPosts.heading ?? "From our blog"}
            </h2>
            <div className="grid gap-md md:grid-cols-3">
              {relatedPosts.posts.map((p) => (
                <Link
                  key={p.href}
                  to={p.href}
                  className="group flex flex-col rounded-2xl border border-border bg-bg-card p-lg transition-colors duration-200 hover:border-accent/40 hover:bg-bg-alt focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  {p.meta && (
                    <span className="text-[12px] font-semibold uppercase tracking-wide text-accent">{p.meta}</span>
                  )}
                  <h3 className="mt-1 text-[16px] font-bold leading-snug text-text group-hover:text-accent">
                    {p.title}
                  </h3>
                  {p.excerpt && (
                    <p className="mt-sm flex-1 text-[13.5px] leading-relaxed text-text-muted">{p.excerpt}</p>
                  )}
                  <span className="mt-md inline-flex items-center gap-1.5 text-[13px] font-semibold text-accent">
                    Read guide <ArrowRight size={14} aria-hidden className="transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </Reveal>
      )}

      {/* Related services - internal entity links (GEO topic-cluster signal) */}
      {relatedServices && relatedServices.length > 0 && (
        <Reveal as="section" className="py-14 lg:py-20">
          <div className="mx-auto max-w-content px-5 md:px-6">
            <h2 className="mb-2xl text-[26px] md:text-[34px] font-bold tracking-tight text-text">
              Related repairs at MacBook Repair Dubai
            </h2>
            <div className="grid gap-md sm:grid-cols-2 lg:grid-cols-3">
              {relatedServices.map((r) => (
                <Link
                  key={r.href}
                  to={r.href}
                  className="group flex items-center justify-between gap-md rounded-2xl border border-border bg-bg-card p-lg transition-colors duration-200 hover:border-accent/40 hover:bg-bg-alt focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <span className="min-w-0">
                    <span className="block text-[16px] font-semibold text-text group-hover:text-accent">
                      {r.label}
                    </span>
                    {r.description && (
                      <span className="mt-1 block text-[13.5px] leading-relaxed text-text-muted">
                        {r.description}
                      </span>
                    )}
                  </span>
                  <ArrowRight
                    size={18}
                    aria-hidden
                    className="shrink-0 text-accent transition-transform group-hover:translate-x-0.5"
                  />
                </Link>
              ))}
            </div>
          </div>
        </Reveal>
      )}

      {/* Link hub - multi-cluster internal navigation (services / models / areas / guides) */}
      {linkHub && linkHub.clusters.length > 0 && (
        <Reveal as="section" className="py-14 lg:py-20 bg-bg-alt border-y border-border">
          <div className="mx-auto max-w-content px-5 md:px-6">
            <h2 className="mb-2xl text-[26px] md:text-[34px] font-bold tracking-tight text-text">
              {linkHub.heading ?? "Explore more across MacBook Repair Dubai"}
            </h2>
            <div className="grid gap-xl sm:grid-cols-2 lg:grid-cols-4">
              {linkHub.clusters.map((cluster) => (
                <nav key={cluster.heading} aria-label={cluster.heading}>
                  <h3 className="mb-md text-[12px] font-bold uppercase tracking-[0.14em] text-accent">
                    {cluster.heading}
                  </h3>
                  <ul className="space-y-2">
                    {cluster.links.map((l) => (
                      <li key={l.href}>
                        <Link
                          to={l.href}
                          className="inline-flex items-center gap-1.5 text-[14.5px] text-text-muted transition-colors hover:text-accent rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                        >
                          <ArrowRight size={13} aria-hidden className="shrink-0 text-text-faint" />
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              ))}
            </div>
          </div>
        </Reveal>
      )}

      {/* 8 - FINAL CTA (default WhatsApp/phone fallback) */}
      {finalCta ? (
        <FinalCTA {...finalCta} />
      ) : (
        <FinalCTA
          eyebrow="Free diagnosis"
          headline="Book your Apple repair in Dubai today"
          description="Send your model and a photo of the issue on WhatsApp for a free quote. Free pickup across Dubai mainland, 90-day written warranty."
          primary={DEFAULT_PRIMARY}
          secondary={DEFAULT_SECONDARY}
        />
      )}
      </div>
    </PageShell>
  );
}
