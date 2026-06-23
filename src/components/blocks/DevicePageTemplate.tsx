"use client";
// generic device hub template - drives iPad, iMac and Mac desktop pages.
// adapted from IPhonePageTemplate but parameterised by device family.
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
import { LocationBlock } from "@/components/blocks/LocationBlock";
import { WarrantyBar } from "@/components/blocks/WarrantyBar";
import { FloatingBookingCard } from "@/components/blocks/FloatingBookingCard";
import { StatBand } from "@/components/blocks/StatBand";
import { CtaBand } from "@/components/blocks/CtaBand";
import { SectionHeading } from "@/components/blocks/SectionHeading";
import { useSeo } from "@/hooks/use-seo";
import { localBusiness, organization, service as serviceSchema, pageWithSpeakable } from "@/lib/schema";
import { SITE } from "@/lib/seo";
import { QuickAnswer, deriveServiceQuickAnswer } from "@/components/blocks/QuickAnswer";
import { pickReviews, reviewDevicesForPath } from "@/lib/find-reviews";
import { NAP, warrantyLabel, warrantyClause, warrantyIso } from "@/content/site";
import { DEVICE_FAMILY, type DeviceFamily } from "@/content/device-hubs";
import { relatedServices, withCoverage } from "@/lib/related-services";
import { topicForPath } from "@/lib/page-images";
import ResponsiveImage from "@/components/blocks/ResponsiveImage";
import GlassWarrantyNotice from "@/components/blocks/GlassWarrantyNotice";

export type DeviceTemplateProps = {
  family: DeviceFamily["key"];   // "ipad" | "watch"
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
  // Page body
  serviceName: string;
  pricingRows: PricingRow[];
  pricingCaption?: string;
  modelsHeading?: string;        // override "Models we repair" heading
  modelsBlurb?: ReactNode;       // override paragraph above pricing table
  intro: ReactNode;
  problems: { title: string; body: string }[];
  steps: Step[];
  warrantyDays: number;
  warrantyBullets: string[];
  glassNotice?: boolean;      // screen/back-glass pages: highlight that broken glass isn't covered
  comparisonRows: [string, string, string][];
  faqs: FAQ[];
  reviewNames: string[];
  relatedSlugs?: string[];       // 3 slugs from the device family hub list; auto-resolved when omitted
  relatedExtra?: { label: string; href: string; description: string }[]; // additional free-form links appended after slug-resolved ones
  honestyCallout?: ReactNode;
};

export default function DevicePageTemplate(p: DeviceTemplateProps) {
  const fam = DEVICE_FAMILY[p.family];
  const reviews = pickReviews(p.reviewNames, { devices: reviewDevicesForPath(p.path), min: 2, seed: p.path });
  const curated = (p.relatedSlugs ?? [])
    .map((s) => fam.hubs.find((h) => h.slug === s))
    .filter(Boolean)
    .slice(0, 3)
    .map((h) => ({ label: h!.label, href: h!.slug, description: h!.desc }));
  const related = withCoverage([...(curated.length ? curated : relatedServices({ path: p.path })), ...(p.relatedExtra ?? [])], p.path);
  const qa = deriveServiceQuickAnswer({
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
    },
    [
      localBusiness(),
      organization(),
      serviceSchema({
        name: p.serviceName,
        price: p.startingPrice,
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
        startingPrice={p.startingPrice}
        timeline={p.timeline}
        sidecar={
          <FloatingBookingCard
            sticky={false}
            tone="dark"
            service={p.serviceName}
            startingPrice={p.startingPrice}
            timeline={p.timeline}
            whatsappMessage={p.whatsappPrefill}
          />
        }
      >
        <PageMeta author={`${p.technician.name}, ${p.technician.specialisation}`} />
      </Hero>

      <QuickAnswer question={qa.question} answer={qa.answer} tone="dark" />

      <WarrantyBar tone="dark" warrantyDays={p.warrantyDays} />

      <StatBand />

      <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
        <BreadcrumbTrail tone="dark" trail={[
          { name: "Home",       path: "/" },
          { name: fam.hubLabel, path: fam.hubPath },
          { name: p.eyebrow,    path: p.path },
        ]} />
      </section>

      <div className="mx-auto max-w-content px-5 md:px-6 mt-xl">
        <div className="flex flex-col gap-3xl">
          <section>{p.intro}</section>

          {/* Topic infographic - hero keeps its booking-card sidecar, so the
              service image lives in the body instead. */}
          {(() => {
            const topic = topicForPath(p.path);
            return topic ? (
              <figure className="rounded-md overflow-hidden">
                <ResponsiveImage
                  src={topic.src}
                  alt={topic.alt}
                  width={1200}
                  height={900}
                  imgClassName="w-full h-auto"
                />
              </figure>
            ) : null;
          })()}

          {p.honestyCallout && (
            <section className="bg-warning/5 border border-warning/30 rounded-md p-lg">
              <h2 className="text-[22px] mb-md flex items-center gap-sm">
                <AlertTriangle size={22} className="text-warning" aria-hidden /> Read this first
              </h2>
              {p.honestyCallout}
            </section>
          )}

          <section>
            <SectionHeading
              eyebrow="Models & pricing"
              title={p.modelsHeading ?? `${fam.pluralNoun} we repair - model-by-model pricing`}
            />
            {p.modelsBlurb ?? (
              <p className="text-[16px] text-text-muted max-w-[60ch] mx-auto text-center mb-lg">
                Every line below includes parts, labour, and {warrantyClause(p.warrantyDays)}. No diagnostic fee, no surprise add-ons.
              </p>
            )}
            <PricingTable tone="dark" service={p.serviceName} rows={p.pricingRows} caption={`${p.serviceName} pricing by model`} />
            {p.pricingCaption && (
              <p className="text-[13px] text-text-muted mt-sm mono">{p.pricingCaption}</p>
            )}
          </section>

          <section>
            <SectionHeading
              eyebrow="Common problems"
              title={`Common ${fam.noun} issues we see`}
              sub="The highest-volume tickets at the workshop. Match the symptom to find the typical fix and price."
            />
            <div className="grid gap-md md:grid-cols-2">
              {p.problems.map((it) => (
                <article key={it.title} className="border border-border bg-bg-card rounded-md p-lg">
                  <h3 className="text-[16px] font-bold mb-sm">{it.title}</h3>
                  <p className="text-[14px] text-text-muted leading-relaxed">{it.body}</p>
                </article>
              ))}
            </div>
          </section>

          <section>
            <SectionHeading
              eyebrow="Our process"
              title="How the repair works"
              sub="From WhatsApp to delivery. Each step has a fixed time estimate."
            />
            <StepList steps={p.steps} tone="dark" />
          </section>

          <section>
            <SectionHeading eyebrow="Guarantee" title="Warranty" />
            <div className="border border-border bg-bg-card rounded-md p-lg">
              <ul className="space-y-2 text-[15px] text-text">
                <li><strong>{warrantyLabel(p.warrantyDays) || "Unlock service"}</strong> - written warranty on parts and labour, dated and signed.</li>
                {p.warrantyBullets.map((b, i) => <li key={i}>{b}</li>)}
                <li><strong>How to claim:</strong> WhatsApp the warranty card photo to {NAP.phoneDisplay}. Same-day collection, free of charge.</li>
              </ul>
            </div>
            {p.glassNotice && <div className="mt-md"><GlassWarrantyNotice device="screen" /></div>}
          </section>

          <section className="bg-bg-alt border-y border-border rounded-md p-lg">
            <h2 className="text-[22px] mb-md">Lead technician on this job</h2>
            <TechnicianBadge tone="dark" name={p.technician.name} years={p.technician.years} specialisation={p.technician.specialisation} />
            <p className="text-[14px] text-text-muted mt-md max-w-[70ch]">
              Personally signs the QC checklist on every {fam.noun} job leaving the bench.
            </p>
          </section>

          <section>
            <SectionHeading eyebrow="Honest comparison" title={`${p.serviceName} vs Apple Store Dubai`} />
            <ScrollHintTable className="border border-border rounded-md bg-bg-alt" fadeClass="from-bg-alt">
              <table className="w-full text-[14px] min-w-[640px]">
                <thead className="bg-bg-card">
                  <tr className="text-left">
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
              Apple list pricing from apple.com/ae, retrieved April 2026. Comparison shown for transparency.
            </p>
          </section>

          {reviews.length > 0 && (
            <section>
              <SectionHeading
                eyebrow="What customers say"
                title={`Real ${fam.noun}-repair reviews`}
                sub={<>Verbatim from Google. Nothing edited. <a href="/reviews/" className="text-accent font-semibold hover:underline">Read all 215+ →</a></>}
              />
              <ReviewGrid reviews={reviews} tone="dark" />
            </section>
          )}

          <section>
            <h2 className="text-[28px] md:text-[32px] mb-md">{p.serviceName} FAQ</h2>
            <FAQAccordion items={p.faqs} injectSchema tone="dark" />
          </section>

          <section>
            <RelatedServices items={related} tone="dark" />
          </section>

          <section>
            <h2 className="text-[28px] md:text-[32px] mb-lg">Where to bring your {fam.noun}</h2>
            <LocationBlock tone="dark" />
          </section>
        </div>
      </div>

      {/* Final CTA (shared dark band, matches master) */}
      <CtaBand
        className="mt-3xl"
        headline={`Book your ${p.serviceName} on WhatsApp`}
        description={`Send the model and a photo of the issue. Free pickup across Dubai mainland. ${warrantyClause(p.warrantyDays)[0].toUpperCase() + warrantyClause(p.warrantyDays).slice(1)}.`}
      />
      </div>
      <RelatedArticles path={p.path} />
    </PageShell>
  );
}
