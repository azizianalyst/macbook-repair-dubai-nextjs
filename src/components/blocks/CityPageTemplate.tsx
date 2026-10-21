"use client";
// Shared template for OTHER-EMIRATE city pages. One workshop only (Concord Tower, Dubai
// Media City), no branch in any of these cities. The customer either books a courier to
// send the Mac to us (slower than inside Dubai, never same-day) and we send it back by
// courier arranged on WhatsApp, or drives in. No onsite visits outside Dubai, no free
// pickup/collection/delivery. Driven by CityConfig from src/content/cities.ts; the
// per-city wording lives there so pages are not name-swapped copies of each other.
import { Link } from "@/lib/router-compat";
import { Building2, Car, Clock, MapPin, Package } from "lucide-react";

import { PageShell } from "@/components/layout/PageShell";
import { Hero } from "@/components/blocks/Hero";
import { QuickAnswer } from "@/components/blocks/QuickAnswer";
import { USPStrip } from "@/components/blocks/USPStrip";
import { StatBand } from "@/components/blocks/StatBand";
import { CtaBand } from "@/components/blocks/CtaBand";
import { SectionHeading } from "@/components/blocks/SectionHeading";
import { BreadcrumbTrail } from "@/components/blocks/BreadcrumbTrail";
import { LocationBlock } from "@/components/blocks/LocationBlock";
import { ReviewGrid } from "@/components/blocks/ReviewGrid";
import { FAQAccordion } from "@/components/blocks/FAQAccordion";
import { LeadForm } from "@/components/blocks/LeadForm";
import { PRESETS } from "@/data/form-presets";
import { RelatedArticles } from "@/components/blocks/RelatedArticles";

import { useSeo } from "@/hooks/use-seo";
import { localBusiness, organization, service as serviceSchema, pageWithSpeakable } from "@/lib/schema";
import { SITE } from "@/lib/seo";
import { REVIEWS } from "@/content/reviews";
import { COMMON_SERVICES, CITIES, type CityConfig } from "@/content/cities";
import { areaTopicForSlug } from "@/lib/page-images";
import { REVIEW_COUNT_LABEL } from "@/content/site";

export function CityPageTemplate({ cfg }: { cfg: CityConfig }) {
  const path = `/macbook-repair-${cfg.slug}`;
  const url = `${SITE.url}${path}`;
  const reviews = cfg.reviewIndexes.map((i) => REVIEWS[i % REVIEWS.length]).filter(Boolean);
  const services = cfg.topServices ?? COMMON_SERVICES;
  // Mirrored in src/lib/dynamic-meta.ts (city loop): keep the two in step.
  const title = cfg.seoTitle;
  const description = cfg.seoDescription;

  useSeo(
    { title, description, path },
    [
      organization(),
      localBusiness(), // correctly anchors the business in Dubai - we do NOT emit a Place node at Dubai geo for another emirate
      pageWithSpeakable({ url, name: title }),
      serviceSchema({
        name: `MacBook Repair ${cfg.city}`,
        timeline: cfg.turnaround,
        warranty: "P2Y",
        url: path,
        description: `MacBook screen, battery, keyboard, water-damage and logic-board repair for customers in ${cfg.city}, ${cfg.emirate}. Repairs are done at our Dubai Media City workshop: send the Mac by a courier you book, or drive in.`,
      }),
    ],
  );

  return (
    <PageShell>
      <div className="bg-bg-alt text-text -mb-[4rem]">
        <Hero
          variant="service"
          tone="dark"
          eyebrow={cfg.short}
          title={`MacBook Repair in ${cfg.city}, Done at Our Dubai Bench`}
          subtitle={`${cfg.landmarkLine} Free diagnosis, a written quote on WhatsApp before any work, and a warranty of 15 days to 2 years.`}
          ctaLabel="WhatsApp us before you send it"
          image={areaTopicForSlug(cfg.slug)?.src}
          imageAlt={areaTopicForSlug(cfg.slug)?.alt ?? `MacBook repair for customers in ${cfg.city}, ${cfg.emirate}`}
        >
          {/* Hero renders the CTA pair itself (ctaLabel above). Only the trust line goes here. */}
          <p className="mt-md flex flex-wrap items-center gap-md text-[14px] text-text-muted">
            <span className="flex items-center gap-1"><Package size={16} className="text-accent" aria-hidden /> Courier you book, sent back by courier</span>
            <span className="text-text-faint">·</span>
            <span className="flex items-center gap-1"><Clock size={16} className="text-accent" aria-hidden /> {cfg.collectionWindow}</span>
            <span className="text-text-faint">·</span>
            <span className="flex items-center gap-1"><Car size={16} className="text-accent" aria-hidden /> Drive time: {cfg.distance}</span>
          </p>
        </Hero>

        <QuickAnswer
          tone="dark"
          question={`MacBook repair in ${cfg.city}: how does it work?`}
          answer={cfg.quickAnswer}
        />

        <USPStrip tone="dark" />

        <StatBand />

        <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
          <BreadcrumbTrail tone="dark" trail={[{ name: "Home", path: "/" }, { name: `MacBook Repair ${cfg.city}`, path }]} />
        </section>

        {/* Intro / context */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
          <h2 className="text-[28px] md:text-[32px] mb-md">{cfg.introHeading}</h2>
          <p className="text-[16px] text-text-muted leading-relaxed max-w-[72ch]">{cfg.intro}</p>
          <p className="text-[16px] text-text-muted leading-relaxed max-w-[72ch] mt-md">{cfg.whyChoose}</p>
        </section>

        {/* Local context: districts, and what to know about getting the Mac to us from each */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <SectionHeading
            eyebrow={`Around ${cfg.city}`}
            title={`Which parts of ${cfg.city} do customers send from?`}
            sub={cfg.districtsSub}
          />
          <div className="grid gap-md md:grid-cols-2 lg:grid-cols-3">
            {cfg.districts.map((d) => (
              <div key={d.name} className="border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md p-lg">
                <p className="font-bold text-[16px] mb-1 flex items-center gap-2"><MapPin size={16} className="text-accent shrink-0" aria-hidden /> {d.name}</p>
                <p className="text-[14px] text-text-muted leading-relaxed m-0">{d.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How sending it works */}
        <section className="bg-bg-alt border-y border-border mt-3xl py-3xl">
          <div className="mx-auto max-w-content px-5 md:px-6">
            <SectionHeading
              eyebrow="How it works"
              title={`How do I send my MacBook from ${cfg.city} to your workshop?`}
              sub={cfg.collectionNote}
            />

            <ol className="grid gap-lg md:grid-cols-2 lg:grid-cols-5">
              {[
                { t: "WhatsApp 055 741 3706 first", b: "Send the model and what it's doing. We'll say whether it's worth sending, give you a likely range, and share the address for the courier label." },
                { t: "Book your courier", b: `Use any courier service that collects in ${cfg.city}. Pack the Mac padded and switched off, then WhatsApp us the tracking number.` },
                { t: "Free diagnosis on the bench", b: "We message you when it lands at Concord Tower, find the fault and send an itemised quote on WhatsApp." },
                { t: "You approve, we repair", b: "Nothing gets repaired until you say yes. If you'd rather not go ahead, you pay nothing for the diagnosis." },
                { t: "We send it back by courier", b: `Once it's fixed and tested, we courier it back to your ${cfg.city} address. The return is arranged with you on WhatsApp.` },
              ].map((s, i) => (
                <li key={i} className="border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md p-lg">
                  <span aria-hidden className="inline-flex w-10 h-10 rounded-md bg-accent/10 text-accent font-heading font-bold text-[18px] items-center justify-center mb-md">{i + 1}</span>
                  <p className="font-bold text-[16px] mb-1">{s.t}</p>
                  <p className="text-[14px] text-text-muted leading-relaxed">{s.b}</p>
                </li>
              ))}
            </ol>

            <div className="mt-lg border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md p-lg max-w-[72ch]">
              <p className="font-bold text-[16px] mb-1 flex items-center gap-2"><Car size={16} className="text-accent shrink-0" aria-hidden /> Rather drive in?</p>
              <p className="text-[14px] text-text-muted leading-relaxed m-0">{cfg.driveIn}</p>
            </div>
          </div>
        </section>

        {/* Top services */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <SectionHeading
            eyebrow="Popular repairs"
            title={`What are the most common MacBook repairs for ${cfg.city} customers?`}
            sub="Same bench, same parts and same pricing as for anyone who walks in. WhatsApp us for today's price on your model; it's fixed in writing after the free diagnosis, before any work starts."
          />
          <div className="grid gap-md md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link key={s.href} to={s.href} className="block border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md p-lg hover:border-accent/40 transition">
                <p className="font-bold text-[16px] mb-1">{s.label}</p>
                <p className="text-[13px] text-text-muted"><span className="mono text-accent font-bold">Price on request</span> · warranty of 15 days to 2 years</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Landmarks */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <SectionHeading eyebrow="Around town" title={`Landmarks around ${cfg.city}`} />
          <ul className="grid gap-sm md:grid-cols-2 lg:grid-cols-3 text-[15px] text-text">
            {cfg.landmarks.map((l) => (
              <li key={l} className="flex items-start gap-sm border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md p-md">
                <MapPin size={18} className="text-accent shrink-0 mt-1" aria-hidden />
                <span>{l}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Reviews */}
        <section className="bg-bg-alt border-y border-border mt-3xl py-3xl">
          <div className="mx-auto max-w-content px-5 md:px-6">
            <SectionHeading
              eyebrow="What customers say"
              title="Customer reviews"
              sub={`${REVIEW_COUNT_LABEL} five-star Google reviews for our Dubai Media City workshop. A few of them below.`}
            />
            <ReviewGrid tone="dark" reviews={reviews} />
            <p className="text-[14px] text-text-muted mt-md">
              <Link to="/reviews" className="text-accent underline underline-offset-2">Read all reviews →</Link>
            </p>
          </div>
        </section>

        {/* Lead form */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl" aria-labelledby="city-lead">
          <h2 id="city-lead" className="text-[26px] md:text-[32px] font-bold mb-md">Tell us what&apos;s wrong before you send it</h2>
          <LeadForm preset={PRESETS.repair} sourcePath={path} defaultDeviceType="MacBook" />
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <h2 className="text-[28px] md:text-[32px] mb-md">MacBook repair in {cfg.city}: frequently asked questions</h2>
          <FAQAccordion items={cfg.faqs} injectSchema />
        </section>

        {/* Honest "we're Dubai-based" block */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <h2 className="text-[28px] md:text-[32px] mb-md flex items-center gap-sm">
            <Building2 size={28} className="text-accent" aria-hidden /> One workshop, not a chain of front desks
          </h2>
          <p className="text-[16px] text-text-muted max-w-[72ch] mb-lg">
            We don&apos;t have a shop in {cfg.city}. Our only location is Office #45, 10th Floor, Concord Tower,
            Dubai Media City: one bench with the tools and parts for board-level work, rather than a row of counters
            that pass your Mac on to someone else. You reach it with a courier you book, or by driving in. We&apos;re open
            Mon-Thu and Sat 9 am-7 pm, Fri 9 am-12 pm and 2 pm-7 pm, and closed on Sunday.
          </p>
          <LocationBlock tone="dark" />
        </section>

        {/* Other emirates - sibling cross-links */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <SectionHeading
            eyebrow="More cities"
            title="MacBook repair across the UAE"
            sub="Customers from every emirate send their Macs to the same Media City bench, or drive in. Other city pages:"
          />
          <div className="flex flex-wrap gap-sm">
            {CITIES.filter((c) => c.slug !== cfg.slug).map((c) => (
              <Link key={c.slug} to={`/macbook-repair-${c.slug}`} className="rounded-full border border-border/70 bg-bg-card ring-1 ring-black/[0.03] px-4 py-2 text-[14px] text-text-muted transition-colors hover:border-accent/40 hover:text-text">
                MacBook repair {c.city}
              </Link>
            ))}
            <Link to="/macbook-repair-near-me-dubai" className="rounded-full border border-accent/40 bg-bg-card px-4 py-2 text-[14px] text-text transition-colors hover:border-accent">
              MacBook repair near me →
            </Link>
          </div>
        </section>

        {/* CTA (shared dark band, matches master) */}
        <CtaBand
          eyebrow={`Sending from ${cfg.city}?`}
          headline="Message us before the courier leaves"
          description="Send the model and the fault on WhatsApp. We'll tell you whether it's worth sending, the likely price, and the address to put on the label."
          whatsappLabel="WhatsApp us before you send it"
          className="mt-3xl"
        />
        <RelatedArticles tone="dark" path={path} />
      </div>
    </PageShell>
  );
}

export default CityPageTemplate;
