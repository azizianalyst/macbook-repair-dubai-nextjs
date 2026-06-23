"use client";
// Lightweight device-family hub. Built to fix breadcrumb gaps and orphan model pages.
// Lists all model pages + relevant sub-services for the family on a single landing.
import { ReactNode } from "react";
import { Link } from "@/lib/router-compat";
import { MessageCircle, Phone, ShieldCheck, Wrench, Star, ArrowRight } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { Hero } from "@/components/blocks/Hero";
import { USPStrip } from "@/components/blocks/USPStrip";
import { BreadcrumbTrail } from "@/components/blocks/BreadcrumbTrail";
import { ReviewGrid } from "@/components/blocks/ReviewGrid";
import { FAQAccordion, type FAQ } from "@/components/blocks/FAQAccordion";
import { RelatedArticles } from "@/components/blocks/RelatedArticles";
import { LocationBlock } from "@/components/blocks/LocationBlock";
import { PageMeta } from "@/components/blocks/PageMeta";
import { Button } from "@/components/ui/button";
import { useSeo, preloadFromHero } from "@/hooks/use-seo";
import { localBusiness, organization, service as serviceSchema, pageWithSpeakable } from "@/lib/schema";
import { SITE } from "@/lib/seo";
import { QuickAnswer, deriveFamilyQuickAnswer } from "@/components/blocks/QuickAnswer";
import { pickReviews } from "@/lib/find-reviews";
import { NAP } from "@/content/site";
import { imageForFamily } from "@/lib/page-images";

export type FamilyHubLink = { label: string; href: string; sub?: string };

export type FamilyHubProps = {
  seoTitle: string;
  seoDescription: string;
  path: string;                   // e.g. /iphone-repair-dubai
  family: string;                 // e.g. "iPhone"
  h1: string;
  subtitle: string;
  startingPrice: number;
  intro: ReactNode;
  modelLinks: FamilyHubLink[];    // every model page in the family
  serviceLinks: FamilyHubLink[];  // every sub-service hub for this family
  faqs: FAQ[];
  reviewNames: string[];
  technician: { name: string; years: number; specialisation: string };
};

export default function FamilyHubTemplate(p: FamilyHubProps) {
  const reviews = pickReviews(p.reviewNames);
  const heroImage = imageForFamily(p.family);
  const qa = deriveFamilyQuickAnswer({ family: p.family, startingPrice: p.startingPrice });

  useSeo(
    { title: p.seoTitle, description: p.seoDescription, path: p.path, preloadImage: preloadFromHero(heroImage) },
    [
      localBusiness(),
      organization(),
      serviceSchema({
        name: `${p.family} Repair Dubai`,
        price: p.startingPrice,
        timeline: "Same-day to 5 days",
        warranty: "P1Y",
        url: p.path,
        description: p.seoDescription,
      }),
      pageWithSpeakable({ url: SITE.url + p.path, name: p.seoTitle }),
    ],
  );

  return (
    <PageShell>
      <Hero
        variant="service"
        eyebrow={`${p.family} Repair Dubai · since 2004`}
        title={p.h1}
        subtitle={p.subtitle}
        startingPrice={p.startingPrice}
        timeline="Same-day to 5 days"
        image={heroImage}
        imageAlt={`${p.family} repair Dubai`}
      >
        <PageMeta author={`${p.technician.name}, ${p.technician.specialisation}`} />
      </Hero>

      <QuickAnswer question={qa.question} answer={qa.answer} />

      <USPStrip />

      <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
        <BreadcrumbTrail trail={[
          { name: "Home", path: "/" },
          { name: `${p.family} Repair`, path: p.path },
        ]} />
      </section>

      <div className="mx-auto max-w-content px-5 md:px-6 mt-xl flex flex-col gap-3xl pb-3xl">
        {/* Intro overview */}
        <section className="bg-bg-card border border-border rounded-md p-lg">
          <h2 className="text-[20px] mb-sm">Overview</h2>
          <div className="text-[15px] leading-relaxed">{p.intro}</div>
        </section>

        {/* Service grid */}
        <section>
          <h2 className="text-[28px] md:text-[32px] mb-md flex items-center gap-sm">
            <Wrench size={28} className="text-accent" aria-hidden /> {p.family} repairs we do
          </h2>
          <p className="text-[16px] text-text-muted max-w-[70ch] mb-lg">
            Pick the symptom - each link goes to a dedicated service page with pricing, timeline, and warranty.
          </p>
          <div className="grid gap-sm sm:grid-cols-2 lg:grid-cols-3">
            {p.serviceLinks.map((s) => (
              <Link
                key={s.href}
                to={s.href}
                className="group bg-bg-card border border-border rounded-md p-md hover:border-primary transition-colors flex items-start justify-between gap-sm"
              >
                <div>
                  <div className="font-semibold text-[15px] group-hover:text-primary">{s.label}</div>
                  {s.sub && <div className="text-[12px] text-text-muted mt-[2px]">{s.sub}</div>}
                </div>
                <ArrowRight size={16} className="text-text-muted group-hover:text-primary mt-[2px]" aria-hidden />
              </Link>
            ))}
          </div>
        </section>

        {/* Model grid - primary orphan-killer */}
        <section>
          <h2 className="text-[28px] md:text-[32px] mb-md">Every {p.family} model we service</h2>
          <p className="text-[16px] text-text-muted max-w-[70ch] mb-lg">
            From the oldest model still in active use through Apple's current 2026 lineup. Click any model for
            specific pricing, common issues, and parts availability.
          </p>
          <div className="grid gap-xs sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {p.modelLinks.map((m) => (
              <Link
                key={m.href}
                to={m.href}
                className="border border-border rounded-md px-sm py-xs bg-bg-card hover:border-primary text-[13px] transition-colors"
              >
                <div className="font-semibold">{m.label}</div>
                {m.sub && <div className="text-text-muted text-[11px]">{m.sub}</div>}
              </Link>
            ))}
          </div>
        </section>

        {/* Reviews */}
        {reviews.length > 0 && (
          <section>
            <h2 className="text-[28px] md:text-[32px] mb-md flex items-center gap-sm">
              <Star size={28} className="text-star fill-star" aria-hidden /> Reviews from {p.family} customers
            </h2>
            <p className="text-[14px] text-text-muted mb-lg">
              Verbatim from Google. <Link to="/reviews" className="text-primary font-semibold hover:underline">Read all 216+ →</Link>
            </p>
            <ReviewGrid reviews={reviews} />
          </section>
        )}

        {/* FAQ */}
        <section>
          <h2 className="text-[28px] md:text-[32px] mb-md">{p.family} repair FAQ</h2>
          <FAQAccordion items={p.faqs} injectSchema />
        </section>

        {/* Warranty */}
        <section className="bg-bg-card border border-border rounded-md p-lg">
          <h2 className="text-[22px] mb-md flex items-center gap-sm">
            <ShieldCheck size={22} className="text-accent" aria-hidden /> written warranty up to 12 months
          </h2>
          <p className="text-[15px]">
            Every {p.family} repair includes a warranty of up to 12 months on parts and labour, dated and signed on your invoice.
            Same fault returns inside the window? We re-do it free.
          </p>
        </section>

        <section>
          <h2 className="text-[28px] md:text-[32px] mb-lg">Where to bring your {p.family}</h2>
          <LocationBlock />
        </section>

        {/* Final CTA */}
        <section>
          <div className="bg-bg-alt text-text rounded-md p-xl md:p-2xl flex flex-col items-start gap-md shadow-md">
            <h2 className="text-text text-[28px] md:text-[32px] max-w-[28ch]">{p.family} repair quote in 4 minutes on WhatsApp</h2>
            <p className="text-text-muted text-[16px] max-w-[60ch]">
              Send the model and a photo of the issue. Free pickup across Dubai mainland. Written warranty of up to 12 months, depending on the repair.
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
      <RelatedArticles path={p.path} />
    </PageShell>
  );
}
