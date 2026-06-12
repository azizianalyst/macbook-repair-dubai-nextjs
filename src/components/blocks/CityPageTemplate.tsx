"use client";
// Shared template for OTHER-EMIRATE city pages (served by free courier collection
// from the single Dubai Media City workshop). Honest by construction: it states we
// have no branch in the city, frames turnaround truthfully by distance, and never
// uses the Dubai-only copy (metro/parking/"same-day"/"reviews from across Dubai")
// that the Dubai AreaPageTemplate carries. Driven by CityConfig from src/content/cities.ts.
import { Link } from "@/lib/router-compat";
import { Building2, Clock, MapPin, MessageCircle, Navigation, Phone, Truck } from "lucide-react";

import { PageShell } from "@/components/layout/PageShell";
import { Hero } from "@/components/blocks/Hero";
import { QuickAnswer } from "@/components/blocks/QuickAnswer";
import { USPStrip } from "@/components/blocks/USPStrip";
import { BreadcrumbTrail } from "@/components/blocks/BreadcrumbTrail";
import { LocationBlock } from "@/components/blocks/LocationBlock";
import { ReviewGrid } from "@/components/blocks/ReviewGrid";
import { FAQAccordion } from "@/components/blocks/FAQAccordion";
import { RelatedArticles } from "@/components/blocks/RelatedArticles";
import { Button } from "@/components/ui/button";

import { useSeo } from "@/hooks/use-seo";
import { localBusiness, organization, service as serviceSchema, pageWithSpeakable } from "@/lib/schema";
import { SITE } from "@/lib/seo";
import { REVIEWS } from "@/content/reviews";
import { NAP } from "@/content/site";
import { COMMON_SERVICES, CITIES, type CityConfig } from "@/content/cities";
import { areaTopicForSlug } from "@/lib/page-images";

export function CityPageTemplate({ cfg }: { cfg: CityConfig }) {
  const path = `/macbook-repair-${cfg.slug}`;
  const url = `${SITE.url}${path}`;
  const reviews = cfg.reviewIndexes.map((i) => REVIEWS[i % REVIEWS.length]).filter(Boolean);
  const services = cfg.topServices ?? COMMON_SERVICES;
  const isPickup = cfg.collectionModel === "pickup";
  const collectVerb = isPickup ? "free door-to-door pickup" : "free courier collection";
  const title = `MacBook Repair ${cfg.city} - Free Collection & Delivery`;
  const description = `MacBook repair in ${cfg.city} via ${collectVerb} to our Dubai Media City workshop - ${cfg.turnaround}, 12-month written warranty. No branch needed. Call 055 741 3706.`;

  useSeo(
    { title, description, path },
    [
      organization(),
      localBusiness(), // correctly anchors the business in Dubai - we do NOT emit a Place node at Dubai geo for another emirate
      pageWithSpeakable({ url, name: title }),
      serviceSchema({
        name: `MacBook Repair ${cfg.city}`,
        price: 350,
        timeline: cfg.turnaround,
        warranty: "P1Y",
        url: path,
        description: `MacBook screen, battery, keyboard, water-damage and logic-board repair for ${cfg.city}, ${cfg.emirate}, with free courier collection and return from our Dubai Media City workshop.`,
      }),
    ],
  );

  return (
    <PageShell>
      <div className="bg-bg-alt text-text -mb-[4rem]">
        <Hero
          variant="service"
          tone="dark"
          eyebrow={`${isPickup ? "Free pickup" : "Free courier"} in ${cfg.city}`}
          title={`MacBook Repair in ${cfg.city} - Free Collection & Delivery`}
          subtitle={`We're an independent Mac specialist in Dubai, ${cfg.distance} away - and we come to you. We collect from ${cfg.city} by ${collectVerb}, repair at our Media City workshop, and return it. ${cfg.landmarkLine} ${cfg.turnaround}, 12-month written warranty.`}
          ctaLabel="Book free collection"
          image={areaTopicForSlug(cfg.slug)?.src}
          imageAlt={areaTopicForSlug(cfg.slug)?.alt ?? `MacBook repair courier collection in ${cfg.city}, ${cfg.emirate}`}
        >
          {/* Hero renders the CTA pair itself (ctaLabel above). Only the trust line goes here. */}
          <p className="mt-md flex flex-wrap items-center gap-md text-[14px] text-text-muted">
            <span className="flex items-center gap-1"><Truck size={16} className="text-accent" aria-hidden /> Free collection &amp; return</span>
            <span className="text-text-faint">·</span>
            <span className="flex items-center gap-1"><Clock size={16} className="text-accent" aria-hidden /> {cfg.collectionWindow}</span>
            <span className="text-text-faint">·</span>
            <span className="flex items-center gap-1"><MapPin size={16} className="text-accent" aria-hidden /> {cfg.distance} from Dubai</span>
          </p>
        </Hero>

        <QuickAnswer
          tone="dark"
          question={`MacBook repair in ${cfg.city} - how does it work?`}
          answer={`We don't have a branch in ${cfg.city} - we're a specialist workshop in Dubai Media City and we come to you. A courier collects your MacBook from your ${cfg.city} address free of charge, we diagnose and repair it at the workshop, and a courier returns it - ${cfg.turnaround}. Diagnosis is free, the quote is confirmed in writing first, and every repair carries a 12-month written warranty.`}
        />

        <USPStrip tone="dark" />

        <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
          <BreadcrumbTrail tone="dark" trail={[{ name: "Home", path: "/" }, { name: `MacBook Repair ${cfg.city}`, path }]} />
        </section>

        {/* Intro / context */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
          <h2 className="text-[28px] md:text-[32px] mb-md">MacBook repair for {cfg.city}, without the drive to Dubai</h2>
          <p className="text-[16px] text-text-muted leading-relaxed max-w-[72ch]">{cfg.intro}</p>
          <p className="text-[16px] text-text-muted leading-relaxed max-w-[72ch] mt-md">{cfg.whyChoose}</p>
        </section>

        {/* Districts we collect from */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <h2 className="text-[28px] md:text-[32px] mb-md flex items-center gap-sm">
            <Navigation size={28} className="text-accent" aria-hidden /> Where we collect from in {cfg.city}
          </h2>
          <p className="text-[16px] text-text-muted max-w-[72ch] mb-lg">
            Free collection and return covers all of {cfg.city}. A few of the areas we collect from regularly:
          </p>
          <div className="grid gap-md md:grid-cols-2 lg:grid-cols-3">
            {cfg.districts.map((d) => (
              <div key={d.name} className="border border-border bg-bg-card rounded-md p-lg">
                <p className="font-bold text-[16px] mb-1 flex items-center gap-2"><MapPin size={16} className="text-accent shrink-0" aria-hidden /> {d.name}</p>
                <p className="text-[14px] text-text-muted leading-relaxed m-0">{d.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How collection works */}
        <section className="bg-bg-alt border-y border-border mt-3xl py-3xl">
          <div className="mx-auto max-w-content px-5 md:px-6">
            <h2 className="text-[28px] md:text-[32px] mb-md">How free collection from {cfg.city} works</h2>
            <p className="text-[16px] text-text-muted leading-relaxed max-w-[72ch] mb-lg">{cfg.collectionNote}</p>

            <ol className="grid gap-lg md:grid-cols-2 lg:grid-cols-5">
              {[
                { t: "WhatsApp 055 741 3706", b: `Send your ${cfg.city} address and the MacBook model. We confirm the collection and an indicative price band.` },
                { t: `Courier collects in ${cfg.city}`, b: `${cfg.collectionWindow}. The device is logged, insured in transit and trackable on WhatsApp.` },
                { t: "Free workshop diagnosis", b: "We inspect it at our Dubai Media City workshop and send an itemised written quote on WhatsApp." },
                { t: "Approve and we repair", b: `Reply 'approved' and we get to work. ${cfg.turnaround.charAt(0).toUpperCase()}${cfg.turnaround.slice(1)} for most common repairs.` },
                { t: "Free return to your door", b: `Courier returns the MacBook to your ${cfg.city} address. Pay on completion - cash, card or transfer. 12-month warranty card included.` },
              ].map((s, i) => (
                <li key={i} className="border border-border bg-bg-card rounded-md p-lg">
                  <span aria-hidden className="inline-flex w-10 h-10 rounded-md bg-accent/15 text-accent font-heading font-bold text-[18px] items-center justify-center mb-md">{i + 1}</span>
                  <p className="font-bold text-[16px] mb-1">{s.t}</p>
                  <p className="text-[14px] text-text-muted leading-relaxed">{s.b}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Top services */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <h2 className="text-[28px] md:text-[32px] mb-md">Common MacBook repairs for {cfg.city} customers</h2>
          <p className="text-[16px] text-text-muted max-w-[72ch] mb-lg">
            Indicative starting prices in AED, the same as for our Dubai customers. The final price is fixed in writing on WhatsApp before any work begins, after a free diagnosis.
          </p>
          <div className="grid gap-md md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link key={s.href} to={s.href} className="block border border-border bg-bg-card rounded-md p-lg hover:border-accent/40 transition">
                <p className="font-bold text-[16px] mb-1">{s.label}</p>
                <p className="text-[13px] text-text-muted">From <span className="mono text-accent font-bold">AED {s.price}</span> · 12-month warranty</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Landmarks */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <h2 className="text-[28px] md:text-[32px] mb-md flex items-center gap-sm">
            <MapPin size={28} className="text-accent" aria-hidden /> Around {cfg.city}
          </h2>
          <ul className="grid gap-sm md:grid-cols-2 lg:grid-cols-3 text-[15px] text-text">
            {cfg.landmarks.map((l) => (
              <li key={l} className="flex items-start gap-sm border border-border bg-bg-card rounded-md p-md">
                <MapPin size={18} className="text-accent shrink-0 mt-1" aria-hidden />
                <span>{l}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Reviews */}
        <section className="bg-bg-alt border-y border-border mt-3xl py-3xl">
          <div className="mx-auto max-w-content px-5 md:px-6">
            <h2 className="text-[28px] md:text-[32px] mb-md">Customer reviews</h2>
            <p className="text-[16px] text-text-muted max-w-[72ch] mb-lg">
              215+ five-star Google reviews from customers across the UAE who used our free collection-and-repair service.
            </p>
            <ReviewGrid tone="dark" reviews={reviews} />
            <p className="text-[14px] text-text-muted mt-md">
              <Link to="/reviews" className="text-accent hover:underline">Read all reviews →</Link>
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <h2 className="text-[28px] md:text-[32px] mb-md">MacBook repair in {cfg.city} - frequently asked questions</h2>
          <FAQAccordion tone="dark" items={cfg.faqs} injectSchema />
        </section>

        {/* Honest "we're Dubai-based" block */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <h2 className="text-[28px] md:text-[32px] mb-md flex items-center gap-sm">
            <Building2 size={28} className="text-accent" aria-hidden /> One workshop, not a chain of front desks
          </h2>
          <p className="text-[16px] text-text-muted max-w-[72ch] mb-lg">
            We&apos;re upfront about it: we don&apos;t have a shop in {cfg.city}. Our only location is the workshop in Concord Tower,
            Dubai Media City - one expert bench with the tools and parts to do board-level work properly, rather than a row of
            counters that send your Mac somewhere else. Free collection and return is how we bring that workshop to {cfg.city}.
          </p>
          <LocationBlock tone="dark" />
        </section>

        {/* Other emirates we serve - sibling cross-links */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <h2 className="text-[28px] md:text-[32px] mb-md flex items-center gap-sm">
            <MapPin size={28} className="text-accent" aria-hidden /> MacBook repair across the UAE
          </h2>
          <p className="text-[16px] text-text-muted max-w-[72ch] mb-lg">
            Free courier collection and return reaches every emirate from our Dubai Media City workshop. We also serve:
          </p>
          <div className="flex flex-wrap gap-sm">
            {CITIES.filter((c) => c.slug !== cfg.slug).map((c) => (
              <Link key={c.slug} to={`/macbook-repair-${c.slug}`} className="rounded-full border border-border bg-bg-card px-4 py-2 text-[14px] text-text-muted transition-colors hover:border-accent/40 hover:text-text">
                MacBook repair {c.city}
              </Link>
            ))}
            <Link to="/macbook-repair-near-me" className="rounded-full border border-accent/40 bg-bg-card px-4 py-2 text-[14px] text-text transition-colors hover:border-accent">
              MacBook repair near me →
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <div className="relative overflow-hidden border border-border bg-bg-card text-text rounded-2xl p-xl md:p-2xl flex flex-col items-start gap-md">
            <div aria-hidden className="pointer-events-none absolute -top-16 -right-10 h-[20rem] w-[20rem] rounded-full bg-accent/15 blur-3xl" />
            <h2 className="relative text-text text-[28px] md:text-[32px] max-w-[30ch]">Book a free collection from {cfg.city}</h2>
            <p className="relative text-text-muted text-[16px] max-w-[60ch]">
              WhatsApp your address and MacBook model - we confirm the collection and an indicative price in minutes.
            </p>
            <div className="relative flex flex-wrap gap-sm">
              <Button asChild variant="whatsapp" size="lg">
                <a href={NAP.whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle aria-hidden /> Book free collection
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
        <RelatedArticles tone="dark" path={path} />
      </div>
    </PageShell>
  );
}

export default CityPageTemplate;
