"use client";
import { ReactNode } from "react";
import { ScrollHintTable } from "@/components/blocks/ScrollHintTable";
import { AlertTriangle } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { Hero } from "@/components/blocks/Hero";
import { BreadcrumbTrail } from "@/components/blocks/BreadcrumbTrail";
import { PageMeta } from "@/components/blocks/PageMeta";
import { PricingTable, type PricingRow } from "@/components/blocks/PricingTable";
import { StepList, type Step } from "@/components/blocks/StepList";
import { FAQAccordion, type FAQ } from "@/components/blocks/FAQAccordion";
import { RelatedArticles } from "@/components/blocks/RelatedArticles";
import { ReviewGrid } from "@/components/blocks/ReviewGrid";
import { TechnicianBadge } from "@/components/blocks/TechnicianBadge";
import { RelatedServices } from "@/components/blocks/RelatedServices";
import { LeadForm } from "@/components/blocks/LeadForm";
import { LocationBlock } from "@/components/blocks/LocationBlock";
import { WarrantyBar } from "@/components/blocks/WarrantyBar";
import { StatBand } from "@/components/blocks/StatBand";
import { CtaBand } from "@/components/blocks/CtaBand";
import { SectionHeading } from "@/components/blocks/SectionHeading";
import { useSeo, preloadFromHero } from "@/hooks/use-seo";
import { localBusiness, organization, service as serviceSchema, pageWithSpeakable } from "@/lib/schema";
import { SITE } from "@/lib/seo";
import { TakeawaysByline } from "@/components/blocks/TakeawaysByline";
import { QuickAnswer, deriveServiceQuickAnswer } from "@/components/blocks/QuickAnswer";
import { pickReviews, reviewDevicesForPath } from "@/lib/find-reviews";
import { NAP, warrantyLabel, warrantyClause, warrantyIso, REVIEW_COUNT_LABEL } from "@/content/site";
import { IPHONE_HUBS } from "@/content/iphone-models";
import { relatedServices, withCoverage } from "@/lib/related-services";
import { imageForSlug, imageForService, topicForPath } from "@/lib/page-images";
import GlassWarrantyNotice from "@/components/blocks/GlassWarrantyNotice";

export type IPhoneTemplateProps = {
  // SEO
  seoTitle: string;
  seoDescription: string;
  path: string;
  // Hero
  eyebrow: string;
  h1: string;
  subtitle: string;
  startingPrice: number;
  timeline: string;
  // Booking
  whatsappPrefill: string;
  // Lead tech
  technician: { name: string; years: number; specialisation: string };
  /** Page-specific key takeaways (5-6 real facts). Renders the standard block after QuickAnswer. */
  takeaways?: string[];
  // Page body
  serviceName: string;        // "iPhone Screen Repair Dubai" - used in schema + pricing header
  pricingRows: PricingRow[];
  pricingCaption?: string;    // e.g. "Pro Max sizes may vary - message us for the exact price"
  intro: ReactNode;           // 1-2 paragraphs, JSX so anchor links can be inline
  problems: { title: string; body: string }[];
  steps: Step[];
  warrantyDays: number;       // typically 30, 60, or 90
  warrantyBullets: string[];  // covered/not covered breakdown
  glassNotice?: boolean;      // screen/back-glass pages: highlight that broken glass isn't covered
  comparisonRows: [string, string, string][];
  faqs: FAQ[];
  reviewNames: string[];
  relatedSlugs?: string[];    // 3 slugs from IPHONE_HUBS (not self); auto-resolved when omitted
  relatedExtra?: { label: string; href: string; description: string }[]; // additional free-form links appended after slug-resolved ones
  honestyCallout?: ReactNode; // for iCloud, Face ID, network unlock
  /** Optional page-specific answer block (40-60 words). Overrides the derived cost answer. */
  quickAnswer?: { question: string; answer: string };
  /** Optional extra H2 sections (e.g. "By model", symptom checks), rendered after Common problems. */
  sections?: ReactNode;
};

export default function IPhonePageTemplate(p: IPhoneTemplateProps) {
  const reviews = pickReviews(p.reviewNames, { devices: reviewDevicesForPath(p.path), min: 2, seed: p.path });
  const curated = (p.relatedSlugs ?? [])
    .map((s) => IPHONE_HUBS.find((h) => h.slug === s))
    .filter(Boolean)
    .slice(0, 3)
    .map((h) => ({ label: h!.label, href: h!.slug, description: h!.desc }));
  const related = withCoverage([...(curated.length ? curated : relatedServices({ path: p.path })), ...(p.relatedExtra ?? [])], p.path);
  // Service topics first (screen/battery/port infographics) - imageForSlug()
  // returns a generation fallback for ANY iphone path, so it must come second.
  const topic = topicForPath(p.path);
  const heroImage = topic?.src ?? imageForSlug(p.path) ?? imageForService(p.path);
  const qa = p.quickAnswer ?? deriveServiceQuickAnswer({
    serviceName: p.serviceName,
    startingPrice: p.startingPrice,
    timeline: p.timeline,
    warrantyDays: p.warrantyDays,
  });

  useSeo(
    {
      title: p.seoTitle,
      description: p.seoDescription,
      path: p.path,
      preloadImage: preloadFromHero(heroImage),
    },
    [
      localBusiness(),
      organization(),
      serviceSchema({
        name: p.serviceName,
        timeline: p.timeline,
        warranty: warrantyIso(p.warrantyDays),
        url: p.path,
        description: p.seoDescription,
      }),
      pageWithSpeakable({ url: SITE.url + p.path, name: p.seoTitle }),
    ],
  );

  return (
    <PageShell hideContactCta>
      <div className="bg-bg-alt text-text -mb-[4rem]">
      <Hero
        variant="service"
        tone="dark"
        eyebrow={p.eyebrow}
        title={p.h1}
        subtitle={p.subtitle}
        timeline={p.timeline}
        image={heroImage}
        imageAlt={topic?.alt ?? p.h1}
      >
        <PageMeta author={`${p.technician.name}, ${p.technician.specialisation}`} />
      </Hero>

      <QuickAnswer question={qa.question} answer={qa.answer} tone="dark" />

      {p.takeaways && (
        <TakeawaysByline
          updated="September 2026"
          reviewer={`${p.technician.name}, ${p.technician.specialisation}`}
          years={p.technician.years}
          items={p.takeaways}
        />
      )}

      <WarrantyBar tone="dark" warrantyDays={p.warrantyDays} />

      <StatBand />

      <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
        <BreadcrumbTrail tone="dark" trail={[
          { name: "Home",           path: "/" },
          { name: "iPhone Repair",  path: "/iphone-repair-dubai" },
          { name: p.eyebrow,        path: p.path },
        ]} />
      </section>

      <div className="mx-auto max-w-content px-5 md:px-6 mt-xl">
        <div className="flex flex-col gap-3xl">
          {/* Intro */}
          <section>{p.intro}</section>

          {/* Lead form */}
          <section id="quote" className="scroll-mt-24">
            <h2 className="text-[28px] md:text-[32px] mb-md text-text">Get a free repair quote</h2>
            <p className="text-[15px] text-text-muted mb-lg max-w-[60ch]">
              Two quick steps — your device, then how to reach you. Free diagnosis, written quote{warrantyLabel(p.warrantyDays) ? ", warranty included" : ""}.
            </p>
            <LeadForm variant="compact" defaultDeviceType="iPhone" sourcePath={p.path} />
          </section>

          {/* Honest disclosure block (iCloud / Face ID / Network Unlock) */}
          {p.honestyCallout && (
            <section className="bg-warning/5 border border-warning/30 rounded-md p-lg">
              <h2 className="text-[22px] mb-md flex items-center gap-sm">
                <AlertTriangle size={22} className="text-warning" aria-hidden /> Read this first
              </h2>
              {p.honestyCallout}
            </section>
          )}

          {/* Models + pricing */}
          <section>
            <SectionHeading
              eyebrow="Models & pricing"
              title="Which iPhone models do you repair?"
              sub={<>Find your model below. Every line includes {warrantyLabel(p.warrantyDays) ? `parts, labour, and ${warrantyClause(p.warrantyDays)}` : "the work and a written quote"}. No diagnostic fee, no surprise add-ons.</>}
            />
            <PricingTable service={p.serviceName} rows={p.pricingRows} caption={`${p.serviceName} pricing by model`} tone="dark" />
            {p.pricingCaption && (
              <p className="text-[13px] text-text-muted mt-sm mono">{p.pricingCaption}</p>
            )}
          </section>

          {/* Common problems */}
          <section>
            <SectionHeading
              eyebrow="Common problems"
              title="What are the most common iPhone problems?"
              sub="The highest-volume tickets at the workshop. Match the symptom to find the typical fix, then message us on WhatsApp for today's exact price on your model."
            />
            <div className="grid gap-md md:grid-cols-2">
              {p.problems.map((it) => (
                <article key={it.title} className="border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md p-lg">
                  <h3 className="text-[16px] font-bold mb-sm">{it.title}</h3>
                  <p className="text-[14px] text-text-muted leading-relaxed">{it.body}</p>
                </article>
              ))}
            </div>
          </section>

          {/* Page-specific sections (by-model notes, symptom checks) */}
          {p.sections}

          {/* Process */}
          <section>
            <SectionHeading
              eyebrow="Our process"
              title="How does the iPhone repair process work?"
              sub="Six steps from WhatsApp to handover. Each step has a fixed time estimate."
            />
            <StepList steps={p.steps} tone="dark" />
          </section>

          {/* Warranty */}
          <section>
            <SectionHeading eyebrow="Guarantee" title="What warranty do you get?" />
            <div className="border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md p-lg">
              <ul className="space-y-2 text-[15px] text-text">
                <li>{warrantyLabel(p.warrantyDays) ? <><strong>{warrantyLabel(p.warrantyDays)}</strong> - written warranty on parts and labour, dated and signed.</> : <><strong>Unlock service</strong> - no parts are fitted, so no parts warranty applies; you get a written quote before any work.</>}</li>
                {p.warrantyBullets.map((b, i) => <li key={i}>{b}</li>)}
                {warrantyLabel(p.warrantyDays) && <li><strong>How to claim:</strong> WhatsApp the warranty card photo to {NAP.phoneDisplay}, then bring the device in to the workshop.</li>}
              </ul>
            </div>
            {p.glassNotice && <div className="mt-md"><GlassWarrantyNotice device="screen" /></div>}
          </section>

          {/* Technician */}
          <section className="bg-bg-alt border-y border-border rounded-md p-lg">
            <h2 className="text-[22px] mb-md">Who is the technician handling your iPhone repair?</h2>
            <TechnicianBadge name={p.technician.name} years={p.technician.years} specialisation={p.technician.specialisation} tone="dark" />
            <p className="text-[14px] text-text-muted mt-md max-w-[70ch]">
              Personally signs the QC checklist on every iPhone job leaving the bench.
            </p>
          </section>

          {/* Comparison */}
          <section>
            <SectionHeading eyebrow="Honest comparison" title={`${p.serviceName} vs Apple Store Dubai`} />
            <ScrollHintTable className="border border-border rounded-md bg-bg-alt" fadeClass="from-bg-alt">
              <table className="w-full text-[14px] min-w-[640px]">
                <thead className="bg-bg-card">
                  <tr className="text-left text-accent">
                    <th className="px-md py-sm font-semibold">Factor</th>
                    <th className="px-md py-sm font-semibold">{NAP.name}</th>
                    <th className="px-md py-sm font-semibold">Apple Store / AASP</th>
                  </tr>
                </thead>
                <tbody>
                  {p.comparisonRows.map((row, i) => (
                    <tr key={row[0]} className={i % 2 ? "bg-bg-alt" : ""}>
                      <td className="px-md py-sm font-semibold">{row[0]}</td>
                      <td className="px-md py-sm">{row[1]}</td>
                      <td className="px-md py-sm text-text-muted">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </ScrollHintTable>
            <p className="text-[13px] text-text-muted mt-sm mono">
              Apple figures are Apple&apos;s own published UAE prices (apple.com/ae; repair estimates from support.apple.com/en-ae exclude VAT) and can change at any time. Comparison shown for transparency.
            </p>
          </section>

          {/* Reviews */}
          {reviews.length > 0 && (
            <section>
              <SectionHeading
                eyebrow="What customers say"
                title="Real iPhone-repair reviews"
                sub={<>Verbatim from Google. Nothing edited. <a href="/reviews/" className="text-accent font-semibold hover:underline">Read all {REVIEW_COUNT_LABEL} →</a></>}
              />
              <ReviewGrid reviews={reviews} tone="dark" />
            </section>
          )}

          {/* FAQ */}
          <section>
            <h2 className="text-[28px] md:text-[32px] mb-md">{p.serviceName} FAQ</h2>
            <FAQAccordion items={p.faqs} injectSchema />
          </section>

          {/* Related */}
          <section>
            <RelatedServices items={related} tone="dark" />
          </section>

          {/* Location */}
          <section>
            <h2 className="text-[28px] md:text-[32px] mb-lg">Where can you bring your iPhone for repair?</h2>
            <LocationBlock tone="dark" />
          </section>
        </div>
      </div>

      {/* Final CTA (shared dark band, matches master) */}
      <CtaBand
        className="mt-3xl"
        headline={`Book your ${p.serviceName} on WhatsApp`}
        description={`Send the model and a photo of the issue, then walk in to our Media City workshop${warrantyLabel(p.warrantyDays) ? `. ${warrantyClause(p.warrantyDays)[0].toUpperCase() + warrantyClause(p.warrantyDays).slice(1)}` : " for a written quote"}.`}
      />
      </div>
      <RelatedArticles path={p.path} tone="dark" />
    </PageShell>
  );
}
