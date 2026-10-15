"use client";
/**
 * AziziMoneyPage — AziziTemplate plus a `sections` slot for keyword H2s.
 *
 * WHY THIS EXISTS
 * ---------------
 * The four Mac money-page rebuilds (plan 2026-09-26, Phase 2.3 items 5–8) have to
 * cover specific Semrush keywords as H2s with prose under them ("MacBook Air
 * screen replacement", "iMac upgrade", "hard drive data recovery"…). AziziTemplate
 * has no slot for free-form H2 sections, and it is a shared file other agents
 * depend on, so this renders the same modules in the same order and adds one
 * thing: `sections`, rendered straight after WhatIs.
 *
 * If AziziTemplate later gains a `sections` prop, the pages using this can switch
 * their import back with no other change — the props are a strict superset.
 *
 * Everything else (module order, honesty rules, LeadForm preset, schema split)
 * follows docs/azizi-template-standard.md exactly.
 */
import type { ReactNode } from "react";

import { PageShell } from "@/components/layout/PageShell";
import { Hero } from "@/components/blocks/Hero";
import { QuickAnswer } from "@/components/blocks/QuickAnswer";
import WhatIsSection from "@/components/blocks/WhatIsSection";
import FeatureGrid from "@/components/blocks/FeatureGrid";
import { StepList } from "@/components/blocks/StepList";
import { FAQAccordion } from "@/components/blocks/FAQAccordion";
import FinalCTA from "@/components/blocks/FinalCTA";
import { LocationBlock } from "@/components/blocks/LocationBlock";
import { RelatedArticles } from "@/components/blocks/RelatedArticles";
import { ReviewGrid } from "@/components/blocks/ReviewGrid";
import { StatBand } from "@/components/blocks/StatBand";
import { LeadForm } from "@/components/blocks/LeadForm";
import { SectionHeading } from "@/components/blocks/SectionHeading";
import { BreadcrumbTrail } from "@/components/blocks/BreadcrumbTrail";
import type { AziziTemplateProps } from "@/components/azizi/AziziTemplate";
import {
  AuthorByline, KeyTakeaways, IntentRouter, ComparisonTable, PartsAndTooling,
  AuthorityOutboundLinks, RelatedHubs, HubServiceLinks, TeamCredentials,
} from "@/components/azizi/modules";
import { Link } from "@/lib/router-compat";
import { NAP } from "@/content/site";

/** One keyword H2 with prose under it. `body` should be <p>/<ul> elements. */
export type BodySection = { id: string; heading: string; body: ReactNode };

export type AziziMoneyPageProps = AziziTemplateProps & { sections?: readonly BodySection[] };

/** wa.me link with a prefilled message naming the service — the site's primary CTA. */
export function waHref(message: string): string {
  return `${NAP.whatsappUrl}?text=${encodeURIComponent(message)}`;
}

/** Inline prose link to an internal page. Prose links are exempt from the 44px rule. */
export function InLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link to={to} className="font-medium text-accent underline underline-offset-2 hover:text-accent/80">
      {children}
    </Link>
  );
}

/** Inline prefilled WhatsApp link. */
export function WaLink({ message, children }: { message: string; children: ReactNode }) {
  return (
    <a
      href={waHref(message)}
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium text-accent underline underline-offset-2 hover:text-accent/80"
    >
      {children}
    </a>
  );
}

function Sections({ items }: { items: readonly BodySection[] }) {
  return (
    <>
      {items.map((s) => (
        <section key={s.id} className="mx-auto max-w-content px-5 md:px-6 mt-3xl" aria-labelledby={s.id}>
          <h2 id={s.id} className="text-[28px] font-bold leading-tight text-text md:text-[32px]">
            {s.heading}
          </h2>
          <div className="mt-md max-w-[68ch] space-y-md text-[17px] leading-relaxed text-text-muted [&_li]:mt-xs [&_ul]:list-disc [&_ul]:pl-5">
            {s.body}
          </div>
        </section>
      ))}
    </>
  );
}

export function AziziMoneyPage(p: AziziMoneyPageProps) {
  return (
    <PageShell>
      {/* 2 — BREADCRUMB (emits BreadcrumbList). pt matches Hero's header clearance. */}
      {p.breadcrumb && p.breadcrumb.length > 0 && (
        <div className="mx-auto max-w-content px-5 md:px-6 pt-[96px]">
          <BreadcrumbTrail trail={p.breadcrumb} />
        </div>
      )}

      {/* 3 — HERO */}
      <Hero
        variant="service"
        eyebrow={p.hero.eyebrow}
        title={p.hero.title}
        subtitle={p.hero.subtitle}
        timeline={p.hero.timeline}
        image={p.hero.image}
        imageAlt={p.hero.imageAlt}
        ctaLabel={p.hero.ctaLabel}
      >
        {p.hero.children}
      </Hero>

      {/* 4 — AUTHOR BYLINE */}
      {p.authorByline && <AuthorByline {...p.authorByline} />}

      {/* 7 — INTENT ROUTER */}
      {p.intentRouter && <IntentRouter {...p.intentRouter} />}

      {/* 5 — QUICK ANSWER */}
      {p.quickAnswer && <QuickAnswer question={p.quickAnswer.question} answer={p.quickAnswer.answer} />}

      {/* 6 — KEY TAKEAWAYS */}
      {p.keyTakeaways && <KeyTakeaways {...p.keyTakeaways} />}

      {/* 8 — WHAT IS */}
      {p.whatIs && (
        <div className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <WhatIsSection {...p.whatIs} />
        </div>
      )}

      {/* 8b — KEYWORD SECTIONS (the only addition over AziziTemplate) */}
      {p.sections && p.sections.length > 0 && <Sections items={p.sections} />}

      {/* 9 — FEATURES */}
      {p.features && (
        <div className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <FeatureGrid {...p.features} />
        </div>
      )}

      {/* 10 — COMPARISON */}
      {p.comparison && <ComparisonTable {...p.comparison} />}

      {/* 11 — METHODOLOGY */}
      {p.methodology && (
        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl" aria-label={p.methodology.heading}>
          <SectionHeading title={p.methodology.heading} sub={p.methodology.intro} />
          <div className="mt-lg">
            <StepList steps={p.methodology.steps} />
          </div>
        </section>
      )}

      {/* 12 — PARTS AND TOOLING */}
      {p.partsAndTooling && <PartsAndTooling {...p.partsAndTooling} />}

      {/* 13 + 22 — LOCATION DETAILS */}
      {p.showLocation && (
        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl" aria-label="Where to find us">
          <SectionHeading
            title="Where to find us"
            sub="Walk in during workshop hours with no appointment, or WhatsApp a photo first for a quote."
          />
          <div className="mt-lg">
            <LocationBlock />
          </div>
        </section>
      )}

      {/* 14 — RELATED SERVICE CHIPS */}
      {p.relatedServices && (
        <RelatedHubs heading={p.relatedServices.heading ?? "Related repairs"} links={p.relatedServices.links} />
      )}

      {/* 15 — RELATED BLOG STRIP */}
      {p.relatedPosts && (
        <div className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <RelatedArticles path={p.path} family={p.relatedPostsFamily} topics={p.relatedPostsTopics} />
        </div>
      )}

      {/* 16 — FAQ (FAQPage JSON-LD rendered server-side with the markup) */}
      {p.faqs && (
        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl" aria-label="Frequently asked questions">
          <SectionHeading title={p.faqs.heading ?? "Frequently asked questions"} sub={p.faqs.intro} />
          <div className="mt-lg">
            <FAQAccordion items={p.faqs.items} injectSchema />
          </div>
        </section>
      )}

      {/* 17 — AUTHORITY OUTBOUND LINKS */}
      {p.sources && <AuthorityOutboundLinks {...p.sources} />}

      {/* 18 — RELATED HUBS */}
      {p.relatedHubs && <RelatedHubs heading={p.relatedHubs.heading} links={p.relatedHubs.links} />}

      {/* 19 — FINAL CTA */}
      {p.finalCta && (
        <div className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <FinalCTA {...p.finalCta} />
        </div>
      )}

      {/* 20 — LEAD FORM */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl" id="get-a-quote">
        <LeadForm preset={p.preset} sourcePath={p.path} defaultDeviceType={p.leadFormDeviceType} />
      </section>

      {/* 21 — TEAM CREDENTIALS */}
      {p.showTeam && <TeamCredentials />}

      {/* 23 — STATS BAND */}
      {p.showStats && <StatBand className="mt-3xl" />}

      {/* 24 — REVIEWS (real ones only) */}
      {p.reviews && p.reviews.length > 0 && (
        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl" aria-label="Customer reviews">
          <SectionHeading title={p.reviewsHeading ?? "What our customers say"} />
          <div className="mt-lg">
            <ReviewGrid reviews={p.reviews} />
          </div>
        </section>
      )}

      {/* 25 — HUB SERVICE LINKS */}
      {p.hubLinks && <HubServiceLinks {...p.hubLinks} />}
    </PageShell>
  );
}

export default AziziMoneyPage;
