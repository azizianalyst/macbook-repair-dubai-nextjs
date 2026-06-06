"use client";
import { ReactNode } from "react";
import { MessageCircle, Phone, ShieldCheck, AlertTriangle, Wrench, Star } from "lucide-react";
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
import { Button } from "@/components/ui/button";
import { useSeo, preloadFromHero } from "@/hooks/use-seo";
import { localBusiness, organization, service as serviceSchema, pageWithSpeakable } from "@/lib/schema";
import { SITE } from "@/lib/seo";
import { QuickAnswer, deriveServiceQuickAnswer } from "@/components/blocks/QuickAnswer";
import { pickReviews } from "@/lib/find-reviews";
import { NAP } from "@/content/site";
import { IPHONE_HUBS } from "@/content/iphone-models";
import { imageForSlug, imageForService } from "@/lib/page-images";

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
  // Page body
  serviceName: string;        // "iPhone Screen Repair Dubai" - used in schema + pricing header
  pricingRows: PricingRow[];
  pricingCaption?: string;    // e.g. "+AED 150 for Pro Max sizes"
  intro: ReactNode;           // 1-2 paragraphs, JSX so anchor links can be inline
  problems: { title: string; body: string }[];
  steps: Step[];
  warrantyDays: number;       // typically 30, 60, or 90
  warrantyBullets: string[];  // covered/not covered breakdown
  comparisonRows: [string, string, string][];
  faqs: FAQ[];
  reviewNames: string[];
  relatedSlugs: string[];     // 3 slugs from IPHONE_HUBS (not self)
  honestyCallout?: ReactNode; // for iCloud, Face ID, network unlock
};

export default function IPhonePageTemplate(p: IPhoneTemplateProps) {
  const reviews = pickReviews(p.reviewNames);
  const related = p.relatedSlugs
    .map((s) => IPHONE_HUBS.find((h) => h.slug === s))
    .filter(Boolean)
    .slice(0, 3)
    .map((h) => ({ label: h!.label, href: h!.slug, description: h!.desc }));
  const heroImage = imageForSlug(p.path) ?? imageForService(p.path);
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
      preloadImage: preloadFromHero(heroImage),
    },
    [
      localBusiness(),
      organization(),
      serviceSchema({
        name: p.serviceName,
        price: p.startingPrice,
        timeline: p.timeline,
        warranty: `P${p.warrantyDays}D`,
        url: p.path,
        description: p.seoDescription,
      }),
      pageWithSpeakable({ url: SITE.url + p.path, name: p.seoTitle }),
    ],
  );

  return (
    <PageShell>
      <div className="bg-primary text-on-primary -mb-[4rem]">
      <Hero
        variant="service"
        tone="dark"
        eyebrow={p.eyebrow}
        title={p.h1}
        subtitle={p.subtitle}
        startingPrice={p.startingPrice}
        timeline={p.timeline}
        image={heroImage}
        imageAlt={p.h1}
      >
        <PageMeta author={`${p.technician.name}, ${p.technician.specialisation}`} />
      </Hero>

      <QuickAnswer question={qa.question} answer={qa.answer} tone="dark" />

      <WarrantyBar tone="dark" />

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
            <h2 className="text-[24px] md:text-[28px] mb-md text-on-primary">Get a free repair quote</h2>
            <p className="text-[15px] text-on-primary-muted mb-lg max-w-[60ch]">
              Two quick steps — your device, then how to reach you. Free diagnosis, written quote, warranty included.
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
            <h2 className="text-[28px] md:text-[32px] mb-md">iPhone models we repair - every model since 2014</h2>
            <p className="text-[16px] text-on-primary-muted max-w-[70ch] mb-lg">
              From the iPhone 6 through the iPhone 17e. Every line below includes parts, labour, and the {p.warrantyDays}-day written warranty. No diagnostic fee, no surprise add-ons.
            </p>
            <PricingTable service={p.serviceName} rows={p.pricingRows} caption={`${p.serviceName} pricing by model`} tone="dark" />
            {p.pricingCaption && (
              <p className="text-[13px] text-on-primary-muted mt-sm mono">{p.pricingCaption}</p>
            )}
          </section>

          {/* Common problems */}
          <section>
            <h2 className="text-[28px] md:text-[32px] mb-md flex items-center gap-sm">
              <AlertTriangle size={28} className="text-accent-bright" aria-hidden /> Common iPhone issues we see
            </h2>
            <p className="text-[16px] text-on-primary-muted max-w-[70ch] mb-lg">
              The highest-volume tickets at the workshop. Match the symptom to find the typical fix and price.
            </p>
            <div className="grid gap-md md:grid-cols-2">
              {p.problems.map((it) => (
                <article key={it.title} className="border border-white/10 bg-white/[0.04] rounded-md p-lg">
                  <h3 className="text-[16px] font-bold mb-sm">{it.title}</h3>
                  <p className="text-[14px] text-on-primary-muted leading-relaxed">{it.body}</p>
                </article>
              ))}
            </div>
          </section>

          {/* Process */}
          <section>
            <h2 className="text-[28px] md:text-[32px] mb-md flex items-center gap-sm">
              <Wrench size={28} className="text-accent-bright" aria-hidden /> How the repair works
            </h2>
            <p className="text-[16px] text-on-primary-muted max-w-[70ch] mb-lg">
              Six steps from WhatsApp to delivery. Each step has a fixed time estimate.
            </p>
            <StepList steps={p.steps} tone="dark" />
          </section>

          {/* Warranty */}
          <section>
            <h2 className="text-[28px] md:text-[32px] mb-md flex items-center gap-sm">
              <ShieldCheck size={28} className="text-accent-bright" aria-hidden /> Warranty
            </h2>
            <div className="border border-white/10 bg-white/[0.04] rounded-md p-lg">
              <ul className="space-y-2 text-[15px] text-on-primary">
                <li><strong>{p.warrantyDays} days</strong> - written warranty on parts and labour, dated and signed.</li>
                {p.warrantyBullets.map((b, i) => <li key={i}>{b}</li>)}
                <li><strong>How to claim:</strong> WhatsApp the warranty card photo to {NAP.phoneDisplay}. Same-day collection, free of charge.</li>
              </ul>
            </div>
          </section>

          {/* Technician */}
          <section className="bg-white/[0.02] border-y border-white/10 rounded-md p-lg">
            <h2 className="text-[22px] mb-md">Lead technician on this job</h2>
            <TechnicianBadge name={p.technician.name} years={p.technician.years} specialisation={p.technician.specialisation} tone="dark" />
            <p className="text-[14px] text-on-primary-muted mt-md max-w-[70ch]">
              Personally signs the QC checklist on every iPhone job leaving the bench.
            </p>
          </section>

          {/* Comparison */}
          <section>
            <h2 className="text-[28px] md:text-[32px] mb-md">{p.serviceName} vs Apple Store Dubai</h2>
            <div className="overflow-x-auto border border-white/10 rounded-md bg-white/[0.03]">
              <table className="w-full text-[14px] min-w-[640px]">
                <thead className="bg-white/[0.04]">
                  <tr className="text-left text-accent-bright">
                    <th className="px-md py-sm font-semibold">Factor</th>
                    <th className="px-md py-sm font-semibold">{NAP.name}</th>
                    <th className="px-md py-sm font-semibold">Apple Store / AASP</th>
                  </tr>
                </thead>
                <tbody>
                  {p.comparisonRows.map((row, i) => (
                    <tr key={row[0]} className={i % 2 ? "bg-white/[0.02]" : ""}>
                      <td className="px-md py-sm font-semibold">{row[0]}</td>
                      <td className="px-md py-sm">{row[1]}</td>
                      <td className="px-md py-sm text-on-primary-muted">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[13px] text-on-primary-muted mt-sm mono">
              Apple list pricing from apple.com/ae, retrieved May 2026. Comparison shown for transparency.
            </p>
          </section>

          {/* Reviews */}
          {reviews.length > 0 && (
            <section>
              <h2 className="text-[28px] md:text-[32px] mb-md flex items-center gap-sm">
                <Star size={28} className="text-star fill-star" aria-hidden /> Real iPhone-repair reviews
              </h2>
              <p className="text-[14px] text-on-primary-muted mb-lg">
                Verbatim from Google. Nothing edited. <a href="/reviews" className="text-accent-bright font-semibold hover:underline">Read all 215+ →</a>
              </p>
              <ReviewGrid reviews={reviews} tone="dark" />
            </section>
          )}

          {/* FAQ */}
          <section>
            <h2 className="text-[28px] md:text-[32px] mb-md">{p.serviceName} FAQ</h2>
            <FAQAccordion items={p.faqs} injectSchema tone="dark" />
          </section>

          {/* Related */}
          <section>
            <RelatedServices items={related} tone="dark" />
          </section>

          {/* Location */}
          <section>
            <h2 className="text-[28px] md:text-[32px] mb-lg">Where to bring your iPhone</h2>
            <LocationBlock tone="dark" />
          </section>
        </div>
      </div>

      {/* Final CTA */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl mb-3xl">
        <div className="border border-white/10 bg-white/[0.04] text-on-primary rounded-md p-xl md:p-2xl flex flex-col items-start gap-md">
          <h2 className="text-on-primary text-[28px] md:text-[32px] max-w-[28ch]">{p.h1} - quote in 4 minutes on WhatsApp</h2>
          <p className="text-on-primary-muted text-[16px] max-w-[60ch]">
            Send the model and a photo of the issue. Free pickup across Dubai mainland. {p.warrantyDays}-day written warranty.
          </p>
          <div className="flex flex-wrap gap-sm">
            <Button asChild variant="whatsapp" size="lg">
              <a href={NAP.whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle aria-hidden /> Message on WhatsApp
              </a>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a href={`tel:${NAP.phoneE164}`}>
                <Phone aria-hidden /> {NAP.phoneDisplay}
              </a>
            </Button>
          </div>
        </div>
      </section>
      </div>
      <RelatedArticles path={p.path} tone="dark" />
    </PageShell>
  );
}
