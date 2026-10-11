"use client";
/**
 * IPhoneMoneyPage: a shared layout for the iPhone money pages rebuilt on 2026-09-26
 * (docs/seo-master-plan-2026-09-26.md, Phase 2.3 and 2.4). It currently serves five pages:
 *   /iphone-repair-dubai (IPhoneRepairHub) · /iphone-battery-replacement-dubai (IPhoneBatteryReplacement)
 *   /iphone-screen-repair-dubai (IPhoneScreenRepair) · /iphone-screen-repair-cost-dubai
 *   (IPhoneScreenRepairCostDubai) · /iphone-back-glass-repair-dubai (IPhoneBackGlassRepair)
 * Each page keeps its copy in its own view file; this component only supplies the layout.
 *
 * Why not IPhonePageTemplate: that template hard-wires a per-model price table, derives the
 * answer block from a starting price, and has no slot for a "By model" section. These pages
 * need a hand-written 40-60 word answer, free-form sections and one H3 per model group with a
 * WhatsApp prefill each (plan 2.4), so this layout composes the same shared blocks instead.
 *
 * Content only, like AziziTemplate: <title>/meta come from metaForPath() in page.tsx, and the
 * Service + business entity nodes from <PageSchema/>. This file adds what the view owns:
 * BreadcrumbList (BreadcrumbTrail), FAQPage (FAQAccordion), and the Speakable WebPage node,
 * all rendered into the static HTML.
 *
 * Truth rules baked in: the reviewer byline reads name + years from TEAM (never typed per page);
 * reviews come from pickReviews() only; there is no price field anywhere. Apple's published UAE
 * prices may appear in page copy only in the attributed form "AED X (Apple list)".
 */
import type { ReactNode } from "react";
import { MessageCircle } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { Hero } from "@/components/blocks/Hero";
import { BreadcrumbTrail, type Crumb } from "@/components/blocks/BreadcrumbTrail";
import { QuickAnswer } from "@/components/blocks/QuickAnswer";
import { TakeawaysByline } from "@/components/blocks/TakeawaysByline";
import { FAQAccordion, type FAQ } from "@/components/blocks/FAQAccordion";
import { LeadForm } from "@/components/blocks/LeadForm";
import { ReviewGrid } from "@/components/blocks/ReviewGrid";
import { LocationBlock } from "@/components/blocks/LocationBlock";
import { CtaBand } from "@/components/blocks/CtaBand";
import { RelatedArticles } from "@/components/blocks/RelatedArticles";
import { ScrollHintTable } from "@/components/blocks/ScrollHintTable";
import { RelatedHubs, AuthorityOutboundLinks, type LinkItem } from "@/components/azizi/modules";
import { Button } from "@/components/ui/button";
import { Link } from "@/lib/router-compat";
import { PRESETS } from "@/data/form-presets";
import { pickReviews, reviewDevicesForPath } from "@/lib/find-reviews";
import { pageWithSpeakable } from "@/lib/schema";
import { SITE } from "@/lib/seo";
import { NAP, TEAM } from "@/content/site";

/** wa.me link with a prefilled message: the site's primary conversion path. */
export function waHref(text: string): string {
  return `${NAP.whatsappUrl}?text=${encodeURIComponent(text)}`;
}

export function WhatsAppButton({ text, label, className }: { text: string; label: string; className?: string }) {
  return (
    <Button asChild variant="whatsapp" size="lg" className={className}>
      <a href={waHref(text)} target="_blank" rel="noopener noreferrer">
        <MessageCircle aria-hidden /> {label}
      </a>
    </Button>
  );
}

/** Inline internal link. `to` stays slash-free: Next appends the trailing slash (check-urls rule). */
export function A({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link to={to} className="text-accent font-semibold underline underline-offset-2 hover:no-underline">
      {children}
    </Link>
  );
}

const PROSE =
  "flex flex-col gap-sm text-[16px] leading-relaxed text-text-muted max-w-[75ch] " +
  "[&_strong]:text-text [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-2 " +
  "[&_h3]:text-text [&_h3]:text-[19px] [&_h3]:font-bold [&_h3]:mt-md";

/** One H2 section of body copy. */
export function PageSection({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-h`} className="scroll-mt-24">
      {eyebrow && (
        <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-3">{eyebrow}</p>
      )}
      <h2 id={`${id}-h`} className="text-[28px] md:text-[34px] font-bold tracking-tight text-text leading-[1.15] mb-md">
        {title}
      </h2>
      <div className={PROSE}>{children}</div>
    </section>
  );
}

/** Simple bordered table on the site's ScrollHintTable (horizontal scroll hint on phones). */
export function DataTable({
  caption,
  head,
  rows,
  note,
  minWidth = 560,
}: {
  caption: string;
  head: string[];
  rows: ReactNode[][];
  note?: ReactNode;
  minWidth?: number;
}) {
  return (
    <div className="my-sm">
      <ScrollHintTable className="border border-border rounded-md bg-bg-card" fadeClass="from-bg-card">
        <table className="w-full text-[14px] border-collapse" style={{ minWidth }}>
          <caption className="sr-only">{caption}</caption>
          <thead className="bg-bg-alt">
            <tr className="text-left">
              {head.map((h) => (
                <th key={h} scope="col" className="px-md py-sm font-semibold text-text">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className={i % 2 ? "bg-bg-alt/50" : ""}>
                {r.map((c, j) =>
                  j === 0 ? (
                    <th key={j} scope="row" className="px-md py-sm font-semibold text-text text-left align-top">{c}</th>
                  ) : (
                    <td key={j} className="px-md py-sm text-text-muted align-top">{c}</td>
                  ),
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </ScrollHintTable>
      {note && <p className="text-[13px] text-text-muted mt-xs">{note}</p>}
    </div>
  );
}

export type ModelGroup = {
  /** Model or model group, e.g. "iPhone X and iPhone XS". Used in the H3 and the WhatsApp prefill. */
  name: string;
  /** Optional H3 override when the heading should carry the service keyword. */
  heading?: string;
  body: ReactNode;
  /** Optional link to the model's own repair page (slash-free). */
  modelPage?: string;
};

/**
 * Plan item 2.4: a "By model" section with one H3 per model group and a WhatsApp prefill that
 * names the model and the service, so the quote request arrives already qualified. The folded
 * iPhone 6-12 pages stay folded; this section is where their demand is served.
 */
export function ByModelSection({
  id,
  title,
  intro,
  service,
  groups,
}: {
  id: string;
  title: string;
  intro: ReactNode;
  service: string;
  groups: ModelGroup[];
}) {
  return (
    <PageSection id={id} eyebrow="By model" title={title}>
      {intro}
      <div className="grid gap-md md:grid-cols-2 mt-sm max-w-none">
        {groups.map((g) => (
          <article key={g.name} className="rounded-md border border-border/70 bg-bg-card ring-1 ring-black/[0.03] p-lg flex flex-col gap-sm">
            <h3 className="!mt-0">{g.heading ?? g.name}</h3>
            <div className="text-[15px] leading-relaxed">{g.body}</div>
            <div className="mt-auto flex flex-wrap items-center gap-x-md gap-y-xs pt-xs">
              <a
                href={waHref(`Hi, ${service} quote please. Model: ${g.name}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 min-h-[44px] text-[14px] font-semibold text-accent hover:underline"
              >
                <MessageCircle size={16} aria-hidden /> WhatsApp a quote for {g.name}
              </a>
              {g.modelPage && (
                <Link to={g.modelPage} className="text-[14px] text-text-muted underline underline-offset-2 hover:text-accent">
                  Model page
                </Link>
              )}
            </div>
          </article>
        ))}
      </div>
    </PageSection>
  );
}

export type IPhoneMoneyPageProps = {
  path: string;
  crumbs: Crumb[];
  hero: { eyebrow: string; title: string; subtitle: string; image: string; imageAlt: string; timeline?: string };
  quickAnswer: { question: string; answer: string };
  /** A name from TEAM in src/content/site.ts; years always come from the roster. */
  reviewer: { name: string; role?: string };
  takeaways: string[];
  children: ReactNode;
  faqs: FAQ[];
  faqHeading: string;
  leadHeading: string;
  cta: { headline: string; description: string; prefill: string };
  related: LinkItem[];
  sources?: { label: string; href: string; note?: string }[];
  reviewNames?: string[];
};

export default function IPhoneMoneyPage(p: IPhoneMoneyPageProps) {
  const member = TEAM.find((t) => t.name === p.reviewer.name);
  const years = member?.years ?? 0;
  const role = p.reviewer.role ?? member?.specialisation ?? "";
  const reviews = pickReviews(p.reviewNames ?? [], { devices: reviewDevicesForPath(p.path), min: 3, seed: p.path });
  // WebSite (with Organization and LocalBusiness) comes from <PageSchema> on all five routes (t-schema-dup-static).
  const schemaNodes = [pageWithSpeakable({ url: SITE.url + p.path, name: p.hero.title })];

  return (
    <PageShell>
      {schemaNodes.map((node, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(node) }} />
      ))}
      <div className="bg-bg-alt text-text -mb-[4rem]">
        {/* Breadcrumb strip under the fixed header (emits BreadcrumbList) */}
        <div className="pt-[64px]" style={{ borderBottom: "1px solid var(--color-border)" }}>
          <div className="mx-auto max-w-content px-5 md:px-6 py-[6px]">
            <BreadcrumbTrail tone="dark" trail={p.crumbs} />
          </div>
        </div>

        <Hero
          variant="service"
          tone="dark"
          eyebrow={p.hero.eyebrow}
          title={p.hero.title}
          subtitle={p.hero.subtitle}
          timeline={p.hero.timeline}
          image={p.hero.image}
          imageAlt={p.hero.imageAlt}
        />

        <QuickAnswer question={p.quickAnswer.question} answer={p.quickAnswer.answer} tone="dark" />

        <TakeawaysByline
          updated="September 2026"
          reviewer={role ? `${p.reviewer.name}, ${role}` : p.reviewer.name}
          years={years}
          items={p.takeaways}
        />

        <div className="mx-auto max-w-content px-5 md:px-6 mt-3xl flex flex-col gap-3xl">
          {p.children}

          <section aria-labelledby="faq-h">
            <h2 id="faq-h" className="text-[28px] md:text-[34px] font-bold tracking-tight text-text leading-[1.15] mb-md">
              {p.faqHeading}
            </h2>
            <FAQAccordion items={p.faqs} injectSchema />
          </section>

          <section id="quote" aria-labelledby="quote-h" className="scroll-mt-24">
            <h2 id="quote-h" className="text-[28px] md:text-[34px] font-bold tracking-tight text-text leading-[1.15] mb-sm">
              {p.leadHeading}
            </h2>
            <p className="text-[15px] text-text-muted mb-lg max-w-[62ch]">
              WhatsApp is fastest. If you prefer, leave your details here and we reply with a written quote. Diagnosis is free.
            </p>
            <LeadForm preset={PRESETS.repair} sourcePath={p.path} defaultDeviceType="iPhone" />
          </section>

          {reviews.length > 0 && (
            <section aria-labelledby="reviews-h">
              <h2 id="reviews-h" className="text-[28px] md:text-[34px] font-bold tracking-tight text-text leading-[1.15] mb-sm">
                What iPhone customers say
              </h2>
              <p className="text-[15px] text-text-muted mb-lg">
                Verbatim from our Google reviews. <Link to="/reviews" className="text-accent font-semibold hover:underline">Read them all</Link>.
              </p>
              <ReviewGrid reviews={reviews} tone="dark" />
            </section>
          )}
        </div>

        <RelatedHubs heading="Related iPhone repairs" links={p.related} />

        {p.sources && p.sources.length > 0 && <AuthorityOutboundLinks heading="Sources" links={p.sources} />}

        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl" aria-labelledby="where-h">
          <h2 id="where-h" className="text-[28px] md:text-[34px] font-bold tracking-tight text-text leading-[1.15] mb-lg">
            Where to bring your iPhone
          </h2>
          <LocationBlock tone="dark" />
        </section>

        <CtaBand
          className="mt-3xl"
          eyebrow="Ready to fix your iPhone?"
          headline={p.cta.headline}
          description={p.cta.description}
          whatsappHref={waHref(p.cta.prefill)}
        />
      </div>
      <RelatedArticles path={p.path} tone="dark" />
    </PageShell>
  );
}
