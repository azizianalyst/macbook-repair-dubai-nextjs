"use client";
// shorter sibling of DevicePageTemplate - for sub-service pages (800-1,200 words).
// no full pricing table, no comparison table, no honesty callout slot - focused & quick.
import { ReactNode } from "react";
import { Wrench, ShieldCheck, Star, MessageCircle, Phone } from "lucide-react";
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
import { Button } from "@/components/ui/button";
import { useSeo, preloadFromHero } from "@/hooks/use-seo";
import { localBusiness, organization, service as serviceSchema, pageWithSpeakable } from "@/lib/schema";
import { SITE } from "@/lib/seo";
import { QuickAnswer, deriveServiceQuickAnswer } from "@/components/blocks/QuickAnswer";
import { pickReviews } from "@/lib/find-reviews";
import { NAP } from "@/content/site";
import { imageForSlug, imageForService } from "@/lib/page-images";
import { LinkifyProse } from "@/lib/linkify";
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
  faqs: FAQ[];
  reviewNames: string[];
  related: { label: string; href: string; description: string }[];
  blogLink?: { label: string; href: string };
  /** Optional override for the auto-generated AI quick-answer block. */
  quickAnswer?: { question: string; answer: string };
};

export default function SubServicePageTemplate(p: SubServiceProps) {
  const reviews = pickReviews(p.reviewNames);
  // Prefer a service-specific lab photo (logic board, battery, fan, keyboard…)
  // and fall back to the device hero when the service has no dedicated shot.
  const heroImage = imageForService(p.path) ?? imageForSlug(p.path);
  // Auto cross-link sibling iPhone models (only fires on iPhone model pages).
  const otherIphoneModels = relatedIphoneModels(p.path);
  const qa = p.quickAnswer ?? deriveServiceQuickAnswer({
    serviceName: p.serviceName,
    startingPrice: p.startingPrice,
    timeline: p.timeline,
    warrantyDays: p.warrantyDays,
  });

  useSeo(
    { title: p.seoTitle, description: p.seoDescription, path: p.path, preloadImage: preloadFromHero(heroImage) },
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
      <div className="bg-bg-alt text-text -mb-[4rem]">
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
          <BreadcrumbTrail trail={p.breadcrumb} tone="dark" />
        </section>

        <div className="mx-auto max-w-content px-5 md:px-6 mt-xl">
          <div className="flex flex-col gap-2xl">
            <section className="text-text-muted">
              {/* Contextual auto-linking only on MacBook-context pages — the keyword targets are
                  MacBook service pages, so we must not mis-link iPad/iPhone/iMac copy to them. */}
              {/macbook|^\/mac-|^\/macos/.test(p.path)
                ? <LinkifyProse selfHref={p.path}>{p.intro}</LinkifyProse>
                : p.intro}
            </section>

            <section id="quote" className="scroll-mt-24">
              <h2 className="text-[24px] md:text-[28px] mb-md text-text">Get a free repair quote</h2>
              <p className="text-[15px] text-text-muted mb-lg max-w-[60ch]">
                Two quick steps — tell us about your device, then how to reach you. Free diagnosis, written quote, 90-day warranty.
              </p>
              <LeadForm variant="compact" defaultDeviceType={deviceTypeFromPath(p.path)} sourcePath={p.path} />
            </section>

            <section>
              <h2 className="text-[24px] md:text-[28px] mb-md text-text">What we fix</h2>
              <ul className="grid gap-sm md:grid-cols-2">
                {p.whatWeFix.map((it, i) => (
                  <li key={i} className="flex gap-sm text-[15px] leading-relaxed text-text-muted">
                    <span aria-hidden className="text-accent font-bold mt-[2px]">•</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-[24px] md:text-[28px] mb-md flex items-center gap-sm text-text">
                <Wrench size={24} className="text-accent" aria-hidden /> How it works
              </h2>
              <StepList steps={p.steps} tone="dark" />
            </section>

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
                  <ShieldCheck size={20} className="text-accent" aria-hidden /> {p.warrantyDays}-day written warranty
                </h3>
                <ul className="space-y-1 text-[14px] text-text-muted">
                  {p.warrantyBullets.map((b, i) => <li key={i}>• {b}</li>)}
                </ul>
              </div>
            </section>

            <QuoteBand
              service={p.serviceName}
              startingPrice={p.startingPrice}
              timeline={p.timeline}
              whatsappMessage={p.whatsappPrefill}
              blurb={`Send the model and a photo of the issue. Free pickup across Dubai mainland, ${p.warrantyDays}-day written warranty.`}
            />

            <section className="bg-bg-card rounded-md p-lg border border-border">
              <h2 className="text-[20px] mb-md text-text">Lead technician</h2>
              <TechnicianBadge name={p.technician.name} years={p.technician.years} specialisation={p.technician.specialisation} tone="dark" />
            </section>

            {reviews.length > 0 && (
              <section>
                <h2 className="text-[24px] md:text-[28px] mb-md flex items-center gap-sm text-text">
                  <Star size={24} className="text-star fill-star" aria-hidden /> Reviews for this service
                </h2>
                <ReviewGrid reviews={reviews} tone="dark" />
              </section>
            )}

            <section>
              <h2 className="text-[24px] md:text-[28px] mb-md text-text">FAQ</h2>
              <FAQAccordion items={p.faqs} injectSchema tone="dark" />
            </section>

            <section>
              <RelatedServices items={p.related.slice(0, 3)} tone="dark" />
              {p.blogLink && (
                <p className="mt-md text-[14px] text-text-muted">
                  Related reading: <Link to={p.blogLink.href} className="text-accent font-semibold hover:underline">{p.blogLink.label}</Link>
                </p>
              )}
            </section>

            {otherIphoneModels.length > 0 && (
              <section>
                <h2 className="text-[24px] md:text-[28px] mb-md text-text">Other iPhone models we repair</h2>
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

        <RelatedArticles path={p.path} tone="dark" />

        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl mb-3xl">
          <div className="relative overflow-hidden border border-border bg-bg-card text-text rounded-md p-xl md:p-2xl flex flex-col items-start gap-md">
            <div aria-hidden className="pointer-events-none absolute -top-16 -right-10 h-[20rem] w-[20rem] rounded-full bg-accent/15 blur-3xl" />
            <h2 className="relative text-text text-[24px] md:text-[28px] max-w-[28ch]">{p.h1} - book in 4 minutes on WhatsApp</h2>
            <p className="relative text-text-muted text-[16px] max-w-[60ch]">
              From AED {p.startingPrice}. Free pickup across Dubai mainland. {p.warrantyDays}-day written warranty.
            </p>
            <div className="relative flex flex-wrap gap-sm">
              <Button asChild variant="whatsapp" size="lg">
                <a href={NAP.whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle aria-hidden /> Message on WhatsApp
                </a>
              </Button>
              <Button asChild size="lg" variant="secondary" className="border border-border-strong bg-bg-card text-text hover:bg-bg-alt">
                <a href={`tel:${NAP.phoneE164}`}>
                  <Phone aria-hidden /> {NAP.phoneDisplay}
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
