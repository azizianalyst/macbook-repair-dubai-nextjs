/**
 * Azizi template — the nine modules this project did not already have.
 *
 * Ported from azizitechnologies.ae's 24-module standard
 * (_delivery/PAGE-TEMPLATE-STANDARD.md). Most of that standard is already
 * covered here by existing blocks, so only the genuine gaps live in this file:
 *
 *   already present → QuickAnswer · WhatIsSection · FeatureGrid · StepList
 *                     FAQAccordion · FinalCTA · ReviewGrid · StatBand
 *                     LocationBlock · RelatedServices · RelatedArticles
 *                     BreadcrumbTrail · StickyContactBar · CaseStudyGrid
 *
 *   built here      → AuthorByline · KeyTakeaways · IntentRouter
 *                     ComparisonTable · PartsAndTooling · AuthorityOutboundLinks
 *                     RelatedHubs · HubServiceLinks · TeamCredentials
 *
 * House rules carried over from the standard:
 *  - Every tap target ≥44px. Inline links inside prose are exempt.
 *  - Eyebrows are plain uppercase text — no pills, no pulsing dots.
 *  - Prose caps at 58ch; pass paragraphs as <p>, never bare text in a fragment.
 *  - Never invent reviews, case-study numbers or author bylines. An empty slot
 *    beats fabricated proof.
 */
import type { ReactNode } from "react";
import { CalendarCheck, ShieldCheck, UserRound, ArrowRight, ExternalLink, type LucideIcon } from "lucide-react";

import { Link } from "@/lib/router-compat";
import { Reveal } from "@/components/blocks/Reveal";
import { cn } from "@/lib/utils";
import { TEAM, NAP } from "@/content/site";

/* ─────────────────────────────────────────────────────────────────────────
   Module 4 — AuthorByline
   Names a real person and a real review date. Never mass-assign this: an
   invented byline is a fabricated E-E-A-T signal, which is worse than none.
   ───────────────────────────────────────────────────────────────────────── */
export type AuthorBylineProps = {
  author: string;
  role: string;
  reviewer?: string;
  updated: string;
  className?: string;
};

export function AuthorByline({ author, role, reviewer, updated, className }: AuthorBylineProps) {
  return (
    <div
      className={cn(
        "mx-auto max-w-content px-5 md:px-6 mt-lg flex flex-wrap items-center gap-x-lg gap-y-sm text-[14px] text-text-muted",
        className,
      )}
    >
      <span className="inline-flex items-center gap-2">
        <UserRound size={16} className="text-accent" aria-hidden />
        Written by <strong className="font-semibold text-text">{author}</strong>, {role}
      </span>
      {reviewer && (
        <span className="inline-flex items-center gap-2">
          <ShieldCheck size={16} className="text-accent" aria-hidden />
          Reviewed by <strong className="font-semibold text-text">{reviewer}</strong>
        </span>
      )}
      <span className="inline-flex items-center gap-2">
        <CalendarCheck size={16} className="text-accent" aria-hidden />
        Updated {updated}
      </span>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   Module 6 — KeyTakeaways
   Six standalone claims. Each must read on its own out of context — a model
   quoting one line should not need the line above it. That is the whole point:
   it gives an answer engine a second extraction point alongside QuickAnswer.
   ───────────────────────────────────────────────────────────────────────── */
export type KeyTakeawaysProps = {
  lead: string;
  items: readonly string[];
  updated?: string;
  className?: string;
};

export function KeyTakeaways({ lead, items, updated, className }: KeyTakeawaysProps) {
  return (
    <section className={cn("mx-auto max-w-content px-5 md:px-6 mt-2xl", className)} aria-labelledby="key-takeaways">
      <Reveal>
        <div className="rounded-md border border-border bg-bg-alt p-lg md:p-xl">
          <h2 id="key-takeaways" className="text-[24px] font-bold leading-tight text-text">
            Key takeaways
          </h2>
          <p className="mt-sm max-w-[58ch] text-[16px] leading-relaxed text-text-muted">{lead}</p>
          <ul className="mt-lg grid gap-sm md:grid-cols-2">
            {items.map((it) => (
              <li key={it} className="flex gap-3 text-[15px] leading-relaxed text-text">
                <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                <span className="max-w-[58ch]">{it}</span>
              </li>
            ))}
          </ul>
          {updated && <p className="mt-lg text-[13px] text-text-faint">Last reviewed {updated}.</p>}
        </div>
      </Reveal>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   Module 7 — IntentRouter
   Sits directly under the hero and sends mismatched traffic somewhere useful
   instead of letting it bounce off the global nav.

   OMIT THIS unless GSC or GBP data actually shows the mismatch. On a page whose
   traffic already matches its intent it is a distraction that pushes the real
   content down.
   ───────────────────────────────────────────────────────────────────────── */
export type IntentRouterProps = {
  question: string;
  detail?: string;
  options: ReadonlyArray<{ label: string; to: string; icon?: LucideIcon }>;
  className?: string;
};

export function IntentRouter({ question, detail, options, className }: IntentRouterProps) {
  return (
    <section className={cn("mx-auto max-w-content px-5 md:px-6 mt-xl", className)} aria-label={question}>
      <div className="rounded-md border border-accent/30 bg-accent/5 p-lg">
        <p className="text-[17px] font-semibold text-text">{question}</p>
        {detail && <p className="mt-xs max-w-[58ch] text-[15px] leading-relaxed text-text-muted">{detail}</p>}
        <div className="mt-md flex flex-wrap gap-sm">
          {options.map((o) => {
            const Icon = o.icon;
            return (
              <Link
                key={o.to}
                to={o.to}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-border bg-bg-card px-4 text-[14px] font-medium text-text transition-colors hover:border-accent hover:text-accent"
              >
                {Icon && <Icon size={16} aria-hidden />}
                {o.label}
                <ArrowRight size={14} aria-hidden />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   Module 10 — ComparisonTable
   "Us vs the alternative", 5–8 rows. Generic on purpose: VsAppleStore already
   handles the Apple-Store comparison, but a page may be comparing repair
   against replacement, or against a mall kiosk.
   ───────────────────────────────────────────────────────────────────────── */
export type ComparisonRow = { feature: string; left: string; right: string };

export type ComparisonTableProps = {
  eyebrow?: string;
  headline: ReactNode;
  description?: string;
  leftLabel: string;
  rightLabel: string;
  rows: readonly ComparisonRow[];
  className?: string;
};

export function ComparisonTable({
  eyebrow,
  headline,
  description,
  leftLabel,
  rightLabel,
  rows,
  className,
}: ComparisonTableProps) {
  return (
    <section className={cn("mx-auto max-w-content px-5 md:px-6 mt-3xl", className)} aria-labelledby="comparison">
      {eyebrow && (
        <p className="text-[13px] font-semibold uppercase tracking-widest text-accent">{eyebrow}</p>
      )}
      <h2 id="comparison" className="mt-xs text-[28px] font-bold leading-tight text-text md:text-[32px]">
        {headline}
      </h2>
      {description && (
        <p className="mt-sm max-w-[58ch] text-[16px] leading-relaxed text-text-muted">{description}</p>
      )}
      {/* Horizontal scroll rather than a squeezed table: at 375px a 3-column
          table either overflows the viewport or becomes unreadable. */}
      <div className="mt-lg overflow-x-auto rounded-md border border-border">
        <table className="w-full min-w-[560px] border-collapse text-[15px]">
          <thead>
            <tr className="bg-bg-alt text-left">
              <th scope="col" className="p-md font-semibold text-text-muted">What matters</th>
              <th scope="col" className="p-md font-semibold text-accent">{leftLabel}</th>
              <th scope="col" className="p-md font-semibold text-text-muted">{rightLabel}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.feature} className="border-t border-border align-top">
                <th scope="row" className="p-md text-left font-medium text-text">{r.feature}</th>
                <td className="p-md text-text">{r.left}</td>
                <td className="p-md text-text-muted">{r.right}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   Module 12 — PartsAndTooling
   The repair-shop equivalent of the source's BrandsWeDeploy: same module,
   different subject. Names the parts grades and bench equipment actually used,
   which is the detail that separates a board-level workshop from a swap shop.
   ───────────────────────────────────────────────────────────────────────── */
export type PartsAndToolingProps = {
  headline?: string;
  intro?: string;
  items: ReadonlyArray<{ name: string; note: string }>;
  className?: string;
};

export function PartsAndTooling({
  headline = "Parts and tooling we use",
  intro,
  items,
  className,
}: PartsAndToolingProps) {
  return (
    <section className={cn("mx-auto max-w-content px-5 md:px-6 mt-3xl", className)} aria-labelledby="parts-tooling">
      <h2 id="parts-tooling" className="text-[28px] font-bold leading-tight text-text md:text-[32px]">
        {headline}
      </h2>
      {intro && <p className="mt-sm max-w-[58ch] text-[16px] leading-relaxed text-text-muted">{intro}</p>}
      <div className="mt-lg grid gap-md md:grid-cols-2 lg:grid-cols-3">
        {items.map((b) => (
          <div key={b.name} className="rounded-md border border-border bg-bg-card p-lg">
            <h3 className="text-[17px] font-semibold text-text">{b.name}</h3>
            <p className="mt-xs text-[15px] leading-relaxed text-text-muted">{b.note}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   Module 17 — AuthorityOutboundLinks
   Outbound citations to primary sources. Kept small and genuinely relevant;
   a wall of links to Apple reads as padding rather than sourcing.
   ───────────────────────────────────────────────────────────────────────── */
export type AuthorityOutboundLinksProps = {
  heading?: string;
  links: ReadonlyArray<{ label: string; href: string; note?: string }>;
  className?: string;
};

export function AuthorityOutboundLinks({
  heading = "Sources and further reading",
  links,
  className,
}: AuthorityOutboundLinksProps) {
  return (
    <section className={cn("mx-auto max-w-content px-5 md:px-6 mt-3xl", className)} aria-labelledby="sources">
      <h2 id="sources" className="text-[22px] font-bold leading-tight text-text">{heading}</h2>
      <ul className="mt-md grid gap-sm md:grid-cols-2">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center gap-2 text-[15px] font-medium text-accent hover:underline"
            >
              {l.label}
              <ExternalLink size={14} aria-hidden />
            </a>
            {l.note && <p className="text-[14px] leading-relaxed text-text-muted">{l.note}</p>}
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   Modules 18 & 25 — RelatedHubs and HubServiceLinks
   Both are internal-link surfaces. HubServiceLinks is what closes most of the
   ~78-link target on a page; RelatedHubs points sideways at sibling clusters.
   ───────────────────────────────────────────────────────────────────────── */
export type LinkItem = { label: string; to: string };

export function RelatedHubs({
  heading = "Explore related repair hubs",
  links,
  className,
}: {
  heading?: string;
  links: readonly LinkItem[];
  className?: string;
}) {
  return (
    <section className={cn("mx-auto max-w-content px-5 md:px-6 mt-3xl", className)} aria-labelledby="related-hubs">
      <h2 id="related-hubs" className="text-[22px] font-bold leading-tight text-text">{heading}</h2>
      <div className="mt-md flex flex-wrap gap-sm">
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            className="inline-flex min-h-[44px] items-center rounded-full border border-border bg-bg-card px-4 text-[14px] font-medium text-text transition-colors hover:border-accent hover:text-accent"
          >
            {l.label}
          </Link>
        ))}
      </div>
    </section>
  );
}

export function HubServiceLinks({
  eyebrow,
  heading,
  links,
  className,
}: {
  eyebrow?: string;
  heading: string;
  links: readonly LinkItem[];
  className?: string;
}) {
  return (
    <section className={cn("mx-auto max-w-content px-5 md:px-6 mt-3xl", className)} aria-labelledby="hub-services">
      {eyebrow && <p className="text-[13px] font-semibold uppercase tracking-widest text-accent">{eyebrow}</p>}
      <h2 id="hub-services" className="mt-xs text-[24px] font-bold leading-tight text-text">{heading}</h2>
      <ul className="mt-lg grid gap-x-lg gap-y-xs sm:grid-cols-2 lg:grid-cols-3">
        {links.map((l) => (
          <li key={l.to}>
            <Link
              to={l.to}
              className="inline-flex min-h-[44px] items-center text-[15px] text-text-muted transition-colors hover:text-accent"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   Module 21 — TeamCredentials
   AuthorByline names one person and a date; this answers the question behind
   handing over a device, which is who actually works on it. Reads from the
   real TEAM constant — never invent a technician.
   ───────────────────────────────────────────────────────────────────────── */
export function TeamCredentials({
  heading = "Who actually works on your device",
  intro = `Every repair is done in our own Dubai Media City workshop by one named technician, not passed between hands. Between them the bench has decades on Apple hardware.`,
  className,
}: {
  heading?: string;
  intro?: string;
  className?: string;
}) {
  return (
    <section className={cn("mx-auto max-w-content px-5 md:px-6 mt-3xl", className)} aria-labelledby="team-credentials">
      <h2 id="team-credentials" className="text-[28px] font-bold leading-tight text-text md:text-[32px]">
        {heading}
      </h2>
      <p className="mt-sm max-w-[58ch] text-[16px] leading-relaxed text-text-muted">{intro}</p>
      <div className="mt-lg grid gap-md sm:grid-cols-2 lg:grid-cols-4">
        {TEAM.map((t) => (
          <div key={t.name} className="rounded-md border border-border bg-bg-card p-lg">
            <h3 className="text-[17px] font-semibold text-text">{t.name}</h3>
            <p className="mt-xs text-[13px] font-semibold uppercase tracking-wide text-accent">
              {t.years} years on Apple hardware
            </p>
            <p className="mt-sm text-[15px] leading-relaxed text-text-muted">{t.specialisation}</p>
          </div>
        ))}
      </div>
      <p className="mt-lg max-w-[58ch] text-[14px] leading-relaxed text-text-faint">
        {NAP.name} is an independent Apple repair specialist. We are not an Apple Authorised Service Provider, and we
        will tell you when Apple is the better option for your device.
      </p>
    </section>
  );
}
