"use client";
/**
 * AziziTemplate — the 24-module landing page standard, ported from
 * azizitechnologies.ae (_delivery/PAGE-TEMPLATE-STANDARD.md, approved 2026-08-29).
 *
 * WHAT THIS IS NOT
 * ----------------
 * It is not `@/components/blocks/LandingTemplate`. That one renders 8 sections
 * and owns its own SEO via <SEOHead>. This project has since moved to App
 * Router metadata (`metaForPath` in page.tsx) and server-rendered schema
 * (<PageSchema />), so AziziTemplate deliberately renders **content only**.
 * Emitting SEO from inside the view would double up on both.
 *
 * MODULE ORDER (chrome numbered as in the source spec)
 *   1–2  Header, breadcrumb ............ layout / page.tsx
 *   3    Hero ......................... required
 *   4    AuthorByline ................. authorByline
 *   5    QuickAnswer .................. quickAnswer
 *   6    KeyTakeaways ................. keyTakeaways
 *   7    IntentRouter ................. intentRouter — OMIT unless data shows mismatch
 *   8    WhatIs ....................... whatIs
 *   9    Features ..................... features
 *   10   Comparison ................... comparison
 *   11   Methodology .................. methodology
 *   12   PartsAndTooling .............. partsAndTooling
 *   13   LocationDetails .............. showLocation
 *   14   RelatedServiceChips .......... relatedServices
 *   15   RelatedBlogStrip ............. relatedPosts
 *   16   FAQ .......................... faqs (emits FAQPage schema)
 *   17   AuthorityOutboundLinks ....... sources
 *   18   RelatedHubs .................. relatedHubs
 *   19   FinalCta ..................... finalCta
 *   20   LeadForm ..................... preset — ALWAYS pass one
 *   21   TeamCredentials .............. showTeam
 *   22   Maps ......................... folded into LocationDetails
 *   23   StatsBlock ................... showStats
 *   24   ReviewsGrid .................. reviews — real ones only, or omit
 *   25   HubServiceLinks .............. hubLinks
 *   —    StickyMobileCTA .............. layout
 *
 * Every module except the hero is optional and is omitted entirely when its
 * prop is absent. That is deliberate: the standard's honesty rule says an empty
 * slot beats fabricated proof, so a page with no real reviews passes no
 * `reviews` prop rather than inventing three.
 *
 * Target shape per page: 1 H1 · ~16 H2 · ~17 H3 · 10 FAQs · ~78 internal links.
 */
import type { ReactNode } from "react";

import { PageShell } from "@/components/layout/PageShell";
import { Hero } from "@/components/blocks/Hero";
import { QuickAnswer } from "@/components/blocks/QuickAnswer";
import WhatIsSection, { type WhatIsSectionProps } from "@/components/blocks/WhatIsSection";
import FeatureGrid, { type FeatureGridProps } from "@/components/blocks/FeatureGrid";
import { StepList, type Step } from "@/components/blocks/StepList";
import { FAQAccordion } from "@/components/blocks/FAQAccordion";
import FinalCTA from "@/components/blocks/FinalCTA";
import { LocationBlock } from "@/components/blocks/LocationBlock";
import { RelatedArticles } from "@/components/blocks/RelatedArticles";
import { ReviewGrid } from "@/components/blocks/ReviewGrid";
import { StatBand } from "@/components/blocks/StatBand";
import { LeadForm } from "@/components/blocks/LeadForm";
import { SectionHeading } from "@/components/blocks/SectionHeading";
import { BreadcrumbTrail, type Crumb } from "@/components/blocks/BreadcrumbTrail";
import type { Review } from "@/components/blocks/ReviewCard";
import type { FormPreset } from "@/data/form-presets";

import {
  AuthorByline, type AuthorBylineProps,
  KeyTakeaways, type KeyTakeawaysProps,
  IntentRouter, type IntentRouterProps,
  ComparisonTable, type ComparisonTableProps,
  PartsAndTooling, type PartsAndToolingProps,
  AuthorityOutboundLinks, type AuthorityOutboundLinksProps,
  RelatedHubs, HubServiceLinks, TeamCredentials, type LinkItem,
} from "@/components/azizi/modules";

export type AziziTemplateProps = {
  /** Page path, e.g. "/macbook-air-repair-dubai". Used for lead attribution. */
  path: string;

  /* 2 — Breadcrumb. Emits BreadcrumbList JSON-LD as well as the visible trail.
     The reference page carries one; the first version of this template did not,
     caught by cross-checking the two rendered pages side by side. */
  breadcrumb?: Crumb[];

  /* 3 — Hero. The image is the LCP element; Hero handles eager/priority. */
  hero: {
    eyebrow?: string;
    title: string;
    subtitle?: string;
    timeline?: string;
    image?: string;
    imageAlt?: string;
    ctaLabel?: string;
    children?: ReactNode;
  };

  /* 4 — AuthorByline. Never mass-assign; a fabricated byline is worse than none. */
  authorByline?: AuthorBylineProps;

  /* 5 — QuickAnswer. Written per page; generated filler across many pages is
     scaled content abuse and costs rankings rather than winning them. */
  quickAnswer?: { question: string; answer: ReactNode };

  /* 6 — KeyTakeaways */
  keyTakeaways?: KeyTakeawaysProps;

  /* 7 — IntentRouter. Omit unless GSC/GBP data shows mismatched traffic. */
  intentRouter?: IntentRouterProps;

  /* 8–11 */
  whatIs?: WhatIsSectionProps;
  features?: FeatureGridProps;
  comparison?: ComparisonTableProps;
  methodology?: { heading: string; intro?: string; steps: Step[] };

  /* 12 */
  partsAndTooling?: PartsAndToolingProps;

  /* 13–14 */
  showLocation?: boolean;
  relatedServices?: { heading?: string; links: readonly LinkItem[] };

  /* 15 — derives from blog data, so it stays current without editing the page.
     RelatedArticles resolves the blog family from `path` and renders NOTHING
     when it finds fewer than 2 matches — correct behaviour, but it means a page
     whose slug does not map to a blog family shows no strip. Pass
     relatedPostsFamily / relatedPostsTopics to force it. */
  relatedPosts?: boolean;
  relatedPostsFamily?: string;
  relatedPostsTopics?: string[];

  /* 16 — 8–10 questions. Emits FAQPage JSON-LD. */
  faqs?: { heading?: string; intro?: string; items: { q: string; a: string }[] };

  /* 17–19 */
  sources?: AuthorityOutboundLinksProps;
  relatedHubs?: { heading?: string; links: readonly LinkItem[] };
  finalCta?: { eyebrow?: string; headline: string; description?: string; primary: { label: string; href: string }; secondary?: { label: string; href: string } };

  /* 20 — ALWAYS pass a preset. A LeadForm without one is a bug: it falls back
     to a generic chip list built for no page in particular. */
  preset: FormPreset | null;
  leadFormDeviceType?: React.ComponentProps<typeof LeadForm>["defaultDeviceType"];

  /* 21, 23 */
  showTeam?: boolean;
  showStats?: boolean;

  /* 24 — real, named reviews only. Omit rather than invent. */
  reviews?: Review[];
  reviewsHeading?: string;

  /* 25 */
  hubLinks?: { eyebrow?: string; heading: string; links: readonly LinkItem[] };
};

export function AziziTemplate(p: AziziTemplateProps) {
  return (
    /* Modules 1–2 and the sticky mobile CTA are chrome, and they live in
       PageShell: skip link, NavBar, the single <main>, footer and StickyContactBar.
       Rendering the modules as a bare fragment (the first version of this file)
       shipped a page with no footer and no sticky bar — and the footer alone
       carries roughly half the internal links, so the link count came out at 38
       against the old template's 77. Caught by /azizi-template-demo. */
    <PageShell>
      {/* 2 — BREADCRUMB (also emits BreadcrumbList schema)
          NavBar is `fixed top-0` and PageShell's <main> has no padding-top, so
          the first thing rendered sits under the header. Hero solves this for
          itself with pt-[96px]; the breadcrumb runs before the Hero here and
          had only pt-lg (24px), which put the whole trail behind a 64px header
          — measured at 375px, the trail's top was 24px against a header bottom
          of 64px, so it was invisible on every AziziTemplate page. Matching
          Hero's clearance is the smallest fix that does not reorder the
          modules. */}
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

      {/* 7 — INTENT ROUTER (sits high, directly under the byline) */}
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

      {/* 13 + 22 — LOCATION DETAILS (carries the map embed) */}
      {p.showLocation && (
        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl" aria-label="Where to find us">
          <SectionHeading
            title="Where to find us"
            sub="Walk in during workshop hours — no appointment needed — or we collect free from anywhere in Dubai."
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

      {/* 16 — FAQ (emits FAQPage JSON-LD server-side) */}
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

      {/* 20 — LEAD FORM. Preset is required by the type, but a page that
          genuinely has no matching motion may pass null and get the generic
          chip list — see src/data/form-presets.ts for which slugs do. */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl" id="get-a-quote">
        <LeadForm preset={p.preset} sourcePath={p.path} defaultDeviceType={p.leadFormDeviceType} />
      </section>

      {/* 21 — TEAM CREDENTIALS */}
      {p.showTeam && <TeamCredentials />}

      {/* 23 — STATS BAND (placed low: QuickAnswer already puts a fact strip up top) */}
      {p.showStats && <StatBand className="mt-3xl" />}

      {/* 24 — REVIEWS */}
      {p.reviews && p.reviews.length > 0 && (
        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl" aria-label="Customer reviews">
          <SectionHeading title={p.reviewsHeading ?? "What our customers say"} />
          <div className="mt-lg">
            <ReviewGrid reviews={p.reviews} />
          </div>
        </section>
      )}

      {/* 25 — HUB SERVICE LINKS (closes most of the internal-link target) */}
      {p.hubLinks && <HubServiceLinks {...p.hubLinks} />}
    </PageShell>
  );
}

export default AziziTemplate;
