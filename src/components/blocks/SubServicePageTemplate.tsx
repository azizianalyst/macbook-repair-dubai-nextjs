"use client";
// shorter sibling of DevicePageTemplate - for sub-service pages (800-1,200 words).
// no full pricing table, no comparison table, no honesty callout slot - focused & quick.
import { ReactNode } from "react";
import { ShieldCheck } from "lucide-react";
import { Link } from "@/lib/router-compat";
import { PageShell } from "@/components/layout/PageShell";
import { Hero } from "@/components/blocks/Hero";
import { BreadcrumbTrail } from "@/components/blocks/BreadcrumbTrail";
import { PageMeta } from "@/components/blocks/PageMeta";
import { PriceCard } from "@/components/blocks/PriceCard";
import { StepList, type Step } from "@/components/blocks/StepList";
import { FAQAccordion, type FAQ } from "@/components/blocks/FAQAccordion";
import { ReviewGrid } from "@/components/blocks/ReviewGrid";
import { TechnicianBadge } from "@/components/blocks/TechnicianBadge";
import { RelatedServices } from "@/components/blocks/RelatedServices";
import { RelatedArticles } from "@/components/blocks/RelatedArticles";
import { WarrantyBar } from "@/components/blocks/WarrantyBar";
import { QuoteBand } from "@/components/blocks/QuoteBand";
import { StatBand } from "@/components/blocks/StatBand";
import { CtaBand } from "@/components/blocks/CtaBand";
import { SectionHeading } from "@/components/blocks/SectionHeading";
import { useSeo } from "@/hooks/use-seo";
import { localBusiness, organization, service as serviceSchema, pageWithSpeakable } from "@/lib/schema";
import { SITE } from "@/lib/seo";
import { QuickAnswer, deriveServiceQuickAnswer } from "@/components/blocks/QuickAnswer";
import { pickReviews, reviewDevicesForPath } from "@/lib/find-reviews";
import { warrantyLabel, warrantyClause, warrantyIso } from "@/content/site";
import { imageForSlug, imageForService, topicForPath } from "@/lib/page-images";
import GlassWarrantyNotice from "@/components/blocks/GlassWarrantyNotice";
import { LinkifyProse } from "@/lib/linkify";
import { familyFromPath } from "@/lib/related-articles";
import { relatedServices, withCoverage } from "@/lib/related-services";
import { LeadForm } from "@/components/blocks/LeadForm";
import { deviceTypeFromPath } from "@/lib/lead-schema";
import { relatedIphoneModels } from "@/content/iphone-model-links";

export type Crumb = { name: string; path: string };

export type SubServiceProps = {
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
  whatsappPrefill: string;
  // Breadcrumb (Home > MacBook > parent hub > this sub)
  breadcrumb: Crumb[];
  // Lead tech
  technician: { name: string; years: number; specialisation: string };
  // Page body
  serviceName: string;
  intro: ReactNode;
  whatWeFix: string[];
  steps: Step[];
  warrantyDays: number;
  warrantyBullets: string[];
  glassNotice?: boolean;      // screen/back-glass pages: highlight that broken glass isn't covered
  faqs: FAQ[];
  reviewNames: string[];
  /** Curated related repairs. Optional — when omitted, auto-resolved from the route registry. */
  related?: { label: string; href: string; description: string }[];
  blogLink?: { label: string; href: string };
  /** Optional override for the auto-generated AI quick-answer block. */
  quickAnswer?: { question: string; answer: string };
};

export default function SubServicePageTemplate(p: SubServiceProps) {
  // device-filtered + backfilled so an iPhone/iPad page never shows a MacBook review,
  // and the section always has >=2 distinct on-topic reviews (fixes the single-review case).
  const reviews = pickReviews(p.reviewNames, { devices: reviewDevicesForPath(p.path), min: 2, seed: p.path });
  // Prefer a service-specific lab photo (logic board, battery, fan, keyboard…)
  // and fall back to the device hero when the service has no dedicated shot.
  const heroImage = imageForService(p.path) ?? imageForSlug(p.path);
  // Topic infographics carry their own SEO alt text; lab photos use the H1.
  const topic = heroImage ? topicForPath(p.path) : undefined;
  const heroAlt = topic && topic.src === heroImage ? topic.alt : p.h1;
  // Auto cross-link sibling iPhone models (only fires on iPhone model pages).
  const otherIphoneModels = relatedIphoneModels(p.path);
  const qa = p.quickAnswer ?? deriveServiceQuickAnswer({
    serviceName: p.serviceName,
    startingPrice: p.startingPrice,
    timeline: p.timeline,
    warrantyDays: p.warrantyDays,
  });

  // No preloadImage here: the hero LCP preload is emitted server-side by <PageSchema> (a client
  // preload via useSeo/useEffect lands post-hydration — too late for LCP, and can re-fetch a
  // different size than the <picture> chose). useSeo still injects the JSON-LD below.
  useSeo(
    { title: p.seoTitle, description: p.seoDescription, path: p.path },
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

        {/* 1. HERO — H1, price, primary CTA */}
        <Hero
          variant="service"
          tone="dark"
          eyebrow={p.eyebrow}
          title={p.h1}
          subtitle={p.subtitle}
          startingPrice={p.startingPrice}
          timeline={p.timeline}
          image={heroImage}
          imageAlt={heroAlt}
        >
          <PageMeta author={`${p.technician.name}, ${p.technician.specialisation}`} />
        </Hero>

        {/* 2. QUICK ANSWER — AI/featured-snippet answer directly under H1 */}
        <QuickAnswer question={qa.question} answer={qa.answer} tone="dark" />

        {/* 3. WARRANTY BAR — trust signals */}
        <WarrantyBar tone="dark" warrantyDays={p.warrantyDays} />

        {/* 3b. STATS BAND — shared brand trust band (matches master template) */}
        <StatBand />

        {/* 4. BREADCRUMB — navigation context */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-lg">
          <BreadcrumbTrail trail={p.breadcrumb} tone="dark" />
        </section>

        <div className="mx-auto max-w-content px-5 md:px-6 mt-xl">
          <div className="flex flex-col gap-3xl">

            {/* 5. INTRO — context and E-E-A-T opening */}
            <section className="text-text-muted">
              {/* Contextual auto-linking is family-scoped (see linkify.tsx): an iPhone page links
                  /iphone-* services, an iMac page /imac-*, etc. — never cross-family. */}
              <LinkifyProse selfHref={p.path} family={familyFromPath(p.path)}>{p.intro}</LinkifyProse>
            </section>

            {/* 6. WHAT WE FIX — service scope */}
            <section>
              <SectionHeading eyebrow="Service scope" title="What we fix" />
              <ul className="grid gap-sm md:grid-cols-2">
                {p.whatWeFix.map((it, i) => (
                  <li key={i} className="flex gap-sm text-[15px] leading-relaxed text-text-muted">
                    <span aria-hidden className="text-accent font-bold mt-[2px]">•</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 7. HOW IT WORKS — process steps */}
            <section>
              <SectionHeading eyebrow="Our process" title="How it works" />
              <StepList steps={p.steps} tone="dark" />
            </section>

            {/* 8. PRICING + WARRANTY — transparent cost and guarantee */}
            <section className="grid gap-md md:grid-cols-[2fr_3fr] items-stretch">
              <PriceCard
                service={p.serviceName}
                startingPrice={p.startingPrice}
                timeline={p.timeline}
                whatsappMessage={p.whatsappPrefill}
                tone="dark"
              />
              <div className="border border-border bg-bg-card rounded-md p-lg flex flex-col justify-center">
                <h3 className="text-[18px] font-bold mb-sm flex items-center gap-sm text-text">
                  <ShieldCheck size={20} className="text-accent" aria-hidden /> {warrantyLabel(p.warrantyDays) ? `${warrantyLabel(p.warrantyDays)} written warranty` : "Written quote, no surprises"}
                </h3>
                <ul className="space-y-1 text-[14px] text-text-muted">
                  {p.warrantyBullets.map((b, i) => <li key={i}>• {b}</li>)}
                </ul>
              </div>
              {p.glassNotice && <div className="mt-md"><GlassWarrantyNotice device="screen or glass" /></div>}
            </section>

            {/* 9. LEAD TECHNICIAN — E-E-A-T authority before social proof */}
            <section className="bg-bg-card rounded-md p-lg border border-border">
              <h2 className="text-[20px] mb-md text-text">Lead technician</h2>
              <TechnicianBadge name={p.technician.name} years={p.technician.years} specialisation={p.technician.specialisation} tone="dark" />
            </section>

            {/* 10. REVIEWS — social proof after pricing and tech authority */}
            {reviews.length > 0 && (
              <section>
                <SectionHeading eyebrow="What customers say" title="Reviews for this service" />
                <ReviewGrid reviews={reviews} tone="dark" />
              </section>
            )}

            {/* 11. MID-PAGE CTA — conversion after trust is established */}
            <QuoteBand
              service={p.serviceName}
              startingPrice={p.startingPrice}
              timeline={p.timeline}
              whatsappMessage={p.whatsappPrefill}
              blurb={`Send the model and a photo of the issue. Free pickup across Dubai mainland, ${warrantyClause(p.warrantyDays)}.`}
            />

            {/* 12. LEAD FORM — full quote form after social proof */}
            <section id="quote" className="scroll-mt-24">
              <h2 className="text-[28px] md:text-[32px] mb-md text-text">Get a free repair quote</h2>
              <p className="text-[15px] text-text-muted mb-lg max-w-[60ch]">
                Two quick steps — tell us about your device, then how to reach you. Free diagnosis, written quote, warranty included.
              </p>
              <LeadForm variant="compact" defaultDeviceType={deviceTypeFromPath(p.path)} sourcePath={p.path} />
            </section>

            {/* 13. FAQ — long-tail keywords and objection handling */}
            <section>
              <h2 className="text-[28px] md:text-[32px] mb-md text-text">FAQ</h2>
              <FAQAccordion items={p.faqs} injectSchema tone="dark" />
            </section>

            {/* 14. RELATED SERVICES — internal linking */}
            <section>
              <RelatedServices items={withCoverage(p.related?.length ? p.related : relatedServices({ path: p.path }), p.path)} tone="dark" />
              {p.blogLink && (
                <p className="mt-md text-[14px] text-text-muted">
                  Related reading: <Link to={p.blogLink.href} className="text-accent font-semibold hover:underline">{p.blogLink.label}</Link>
                </p>
              )}
            </section>

            {/* 15. OTHER IPHONE MODELS — model cross-links (conditional) */}
            {otherIphoneModels.length > 0 && (
              <section>
                <h2 className="text-[28px] md:text-[32px] mb-md text-text">Other iPhone models we repair</h2>
                <div className="flex flex-wrap gap-sm">
                  {otherIphoneModels.map((m) => (
                    <Link key={m.slug} to={m.slug} className="rounded-full border border-border bg-bg-card px-4 py-2 text-[14px] text-text-muted transition-colors hover:border-accent/40 hover:text-text">
                      {m.label} repair
                    </Link>
                  ))}
                </div>
              </section>
            )}

          </div>
        </div>

        {/* 16. RELATED ARTICLES — blog internal links */}
        <RelatedArticles path={p.path} tone="dark" />

        {/* 17. FINAL CTA — last conversion opportunity (shared dark band, matches master) */}
        <CtaBand
          className="mt-3xl"
          headline={`Book your ${p.serviceName} on WhatsApp`}
          description={`${p.startingPrice > 0 ? `From AED ${p.startingPrice}. ` : ""}Free pickup across Dubai mainland. ${warrantyClause(p.warrantyDays)[0].toUpperCase() + warrantyClause(p.warrantyDays).slice(1)}.`}
        />

      </div>
    </PageShell>
  );
}
