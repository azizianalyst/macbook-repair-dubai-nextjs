"use client";
// Shared template for Dubai area landing pages.
// Driven entirely by AreaConfig from src/content/areas.ts.
// Renders ~1,300+ visible words per page with unique title/description/H1.
import { Link } from "@/lib/router-compat";
import { Car, Clock, MapPin, ParkingCircle, Truck } from "lucide-react";

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
import { AREAS, type AreaConfig } from "@/content/areas";
import { DATA_RECOVERY_AREAS } from "@/content/data-recovery-areas";
import { areaTopicForSlug } from "@/lib/page-images";
import { REVIEW_COUNT_LABEL } from "@/content/site";

// Every Mac family we collect from, shown on every area page. The domain is MacBook-led,
// but the same courier run covers the desktops - these links are how an area page ranks
// for "imac repair <area>", "mac mini repair <area>" and "data recovery <area>".
const MAC_FAMILY_LINKS = [
  { label: "iMac repair", href: "/imac-repair-dubai", note: "24\" M4 and older Intel 21.5\"/27\" - screen, SSD, power supply, logic board." },
  { label: "Mac mini repair", href: "/mac-mini-repair-dubai", note: "M6, M4, M2 and Intel - no display, no power, SSD and port faults." },
  { label: "Mac Studio repair", href: "/mac-studio-repair-dubai", note: "M5 Max and M5 Ultra through M1 - thermal, power and board-level work." },
  { label: "Mac Pro repair", href: "/mac-pro-repair-dubai", note: "M2 Ultra and Intel 2019 tower - GPU, PSU and expansion faults." },
  { label: "MacBook Neo repair", href: "/macbook-neo-repair-dubai", note: "The A18 Pro MacBook - screen, battery and keyboard." },
  { label: "Mac data recovery", href: "/mac-data-recovery-dubai", note: "Soldered SSD, T2 and Apple-silicon recovery from a Mac that will not boot." },
  { label: "Apple display repair", href: "/apple-display-repair-dubai", note: "Studio Display, Studio Display XDR and older Thunderbolt panels." },
];

export function AreaPageTemplate({ cfg }: { cfg: AreaConfig }) {
  const path = `/macbook-repair-${cfg.slug}`;
  const url = `${SITE.url}${path}`;
  // Where this area has its own data-recovery page, the "Mac data recovery" card points
  // there instead of the Dubai-wide page - that is the only in-content route into those
  // pages from the rest of the site (cluster-audit 2026-09-25: they were unreachable).
  const drArea = DATA_RECOVERY_AREAS.find((d) => d.slug === cfg.slug);
  const macFamily = drArea
    ? MAC_FAMILY_LINKS.map((l) =>
        l.href === "/mac-data-recovery-dubai"
          ? { ...l, label: `Mac data recovery in ${cfg.area}`, href: `/mac-data-recovery-${drArea.slug}` }
          : l,
      )
    : MAC_FAMILY_LINKS;
  const reviews = cfg.reviewIndexes.map((i) => REVIEWS[i % REVIEWS.length]).filter(Boolean);
  const title = `MacBook Repair ${cfg.area} - Free Pickup & Delivery`;
  const description = `MacBook repair in ${cfg.area}: free pickup, same-day on most repairs, written warranty up to 12 months. Free diagnosis. Call 055 741 3706.`;

  useSeo(
    { title, description, path },
    [
      organization(),
      localBusiness(),
      // Single WebPage node (speakable). BreadcrumbList is emitted by the rendered <BreadcrumbTrail>.
      pageWithSpeakable({ url, name: title }),
      // NOTE: the per-area Place node is now server-rendered via <PageSchema> (see
      // src/lib/page-schema.ts) so it ships in the static HTML; it was removed from here
      // to avoid a duplicate Place node after hydration.
      serviceSchema({
        name: `MacBook Repair ${cfg.area}`,
        timeline: "Same day",
        warranty: "P1Y",
        url: path,
        description: `MacBook screen, battery, keyboard, water-damage and logic-board repair with free pickup and delivery from ${cfg.area}.`,
      }),
    ],
  );

  return (
    <PageShell>
      <div className="bg-bg-alt text-text -mb-[4rem]">
      <Hero
        variant="service"
        tone="dark"
        eyebrow={`Free pickup in ${cfg.area}`}
        title={`MacBook Repair ${cfg.area} — Free Pickup & Delivery`}
        subtitle={`${cfg.driveTime} from our Concord Tower workshop in Media City. ${cfg.landmarkLine} Same-day repair, written warranty up to 12 months.`}
        image={areaTopicForSlug(cfg.slug)?.src}
        imageAlt={`MacBook repair ${cfg.area} — free pickup and delivery service`}
      >
        <p className="mt-md flex flex-wrap items-center gap-md text-[14px] text-text-muted">
          <span className="flex items-center gap-1"><Truck size={16} className="text-accent" aria-hidden /> Free pickup &amp; delivery</span>
          <span className="text-text-faint">·</span>
          <span className="flex items-center gap-1"><Clock size={16} className="text-accent" aria-hidden /> {cfg.pickupWindow}</span>
          <span className="text-text-faint">·</span>
          <span className="flex items-center gap-1"><Car size={16} className="text-accent" aria-hidden /> {cfg.driveTime} drive</span>
        </p>
      </Hero>

      <QuickAnswer
        tone="dark"
        question={`MacBook repair in ${cfg.area} - how does it work?`}
        answer={`MacBook repair from ${cfg.area} starts with a free door-to-door pickup - typically ${cfg.pickupWindow.toLowerCase()} of your WhatsApp. We diagnose at our Concord Tower workshop in Media City (${cfg.driveTime}), quote in writing within 4 hours, and return the repaired MacBook with a warranty of up to 12 months. Most common repairs finish the same day.`}
      />

      <USPStrip tone="dark" />

      <StatBand />

      <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
        <BreadcrumbTrail tone="dark" trail={[{ name: "Home", path: "/" }, { name: `MacBook Repair ${cfg.area}`, path }]} />
      </section>

      {/* Intro / context */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
        <h2 className="text-[28px] md:text-[32px] mb-md">MacBook Repair {cfg.area} — Trusted by Residents &amp; Offices</h2>
        <p className="text-[16px] text-text-muted leading-relaxed max-w-[72ch]">{cfg.intro}</p>
        <p className="text-[16px] text-text-muted leading-relaxed max-w-[72ch] mt-md">{cfg.whyChoose}</p>
      </section>

      {/* Travel times table */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <SectionHeading
          eyebrow="Getting here"
          title={`How far is the workshop from ${cfg.area}?`}
          sub="Off-peak driving times to Concord Tower, Media City. Add 10-20 minutes during 8-10 am and 5-7 pm rush windows. The pickup column shows our courier turnaround once you confirm on WhatsApp."
        />
        <div className="overflow-x-auto border border-border rounded-md bg-bg-card">
          <table className="w-full text-[14px] min-w-[520px]">
            <caption className="sr-only">Travel times from {cfg.area} sub-areas to MacBook Repair Dubai workshop, plus free pickup turnaround.</caption>
            <thead className="bg-bg-alt">
              <tr className="text-left">
                <th className="px-md py-sm font-semibold">From</th>
                <th className="px-md py-sm font-semibold">Drive</th>
                <th className="px-md py-sm font-semibold">Free pickup</th>
              </tr>
            </thead>
            <tbody>
              {cfg.travel.map((row, i) => (
                <tr key={row.from} className={i % 2 ? "bg-bg-alt" : ""}>
                  <td className="px-md py-sm font-semibold">{row.from}</td>
                  <td className="px-md py-sm mono text-accent">{row.drive}</td>
                  <td className="px-md py-sm mono text-text-muted">{row.pickup}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-[14px] text-text-muted mt-sm">
          {cfg.metroNote}
        </p>
      </section>

      {/* Pickup process */}
      <section className="bg-bg-alt border-y border-border mt-3xl py-3xl">
        <div className="mx-auto max-w-content px-5 md:px-6">
          <SectionHeading
            eyebrow="How it works"
            title={`How does free pickup & delivery from ${cfg.area} work?`}
            sub={cfg.pickupNote}
          />

          <ol className="grid gap-lg md:grid-cols-2 lg:grid-cols-5">
            {[
              { t: `WhatsApp 055 741 3706`, b: `Send your ${cfg.area} address and the MacBook model. Shafiq confirms a pickup window within 4 minutes during business hours.` },
              { t: "Courier collects in person", b: `${cfg.pickupWindow} of confirmation. Marked Toyota Innova, ID-checked, insured, trackable on WhatsApp.` },
              { t: "Free workshop diagnosis", b: "Shafiq inspects the device the same day. Itemised written quote on WhatsApp within 4 hours of pickup." },
              { t: "Approve and we repair", b: "Reply 'approved'. Most common repairs finish the same day. We message you the moment the device is ready." },
              { t: "Free return delivery", b: `Courier returns the device to your ${cfg.area} address. Pay on arrival - cash, card or bank transfer. Warranty up to 12 months card included.` },
            ].map((s, i) => (
              <li key={i} className="border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md p-lg">
                <span aria-hidden className="inline-flex w-10 h-10 rounded-md bg-accent/10 text-accent font-heading font-bold text-[18px] items-center justify-center mb-md">
                  {i + 1}
                </span>
                <p className="font-bold text-[16px] mb-1">{s.t}</p>
                <p className="text-[14px] text-text-muted leading-relaxed">{s.b}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Top services for area */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <SectionHeading
          eyebrow="Popular repairs"
          title={`What are the most common MacBook repairs for ${cfg.area} customers?`}
          sub="The exact price is fixed in writing on WhatsApp before any work begins, after a free diagnosis at the workshop. Message us for today's price on your model."
        />
        <div className="grid gap-md md:grid-cols-2 lg:grid-cols-3">
          {cfg.topServices.map((s) => (
            <Link
              key={s.href}
              to={s.href}
              className="block border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md p-lg hover:border-accent/40 transition"
            >
              <p className="font-bold text-[16px] mb-1">{s.label}</p>
              <p className="text-[13px] text-text-muted"><span className="mono text-accent font-bold">Price on request</span> · warranty of up to 12 months</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Other Macs we collect from this area */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <SectionHeading
          eyebrow="Every Mac, not just MacBooks"
          title={`Do you repair iMac, Mac mini and Mac Studio in ${cfg.area}?`}
          sub={`Yes. The same free collection and return covers every Mac in ${cfg.area} - desktops included. Desktops are collected by appointment so the courier brings the right packaging for the display or chassis.`}
        />
        <div className="grid gap-md md:grid-cols-2 lg:grid-cols-3">
          {macFamily.map((s) => (
            <Link
              key={s.href}
              to={s.href}
              className="block border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md p-lg hover:border-accent/40 transition"
            >
              <p className="font-bold text-[16px] mb-1">{s.label}</p>
              <p className="text-[13px] text-text-muted">{s.note}</p>
            </Link>
          ))}
        </div>
        <p className="text-[15px] text-text-muted mt-md max-w-[72ch]">
          Looking after a team of Macs in {cfg.area}? See{" "}
          <Link to="/corporate-macbook-repair-dubai" className="text-accent underline underline-offset-2">corporate MacBook repair</Link>
          {" "}and our{" "}
          <Link to="/annual-maintenance-contract-dubai" className="text-accent underline underline-offset-2">annual maintenance contracts</Link>.
        </p>
      </section>

      {/* Landmarks */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <SectionHeading eyebrow="Coverage" title={`Landmarks we collect from in ${cfg.area}`} />
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
            title="Customer reviews from across Dubai"
            sub={`${REVIEW_COUNT_LABEL} five-star Google reviews. A small sample below - many are from ${cfg.area} residents and office workers who used the free pickup service.`}
          />
          <ReviewGrid tone="dark" reviews={reviews} />
          <p className="text-[14px] text-text-muted mt-md">
            <Link to="/reviews" className="text-accent underline underline-offset-2">Read all reviews →</Link>
          </p>
        </div>
      </section>

      {/* Lead form - area pages are where local "near me" visitors land, and they had
          no on-page form at all (template-audit, 2026-09-24). */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl" aria-labelledby="area-lead">
        <h2 id="area-lead" className="text-[26px] md:text-[32px] font-bold mb-md">Book a free pickup from {cfg.area}</h2>
        <LeadForm preset={PRESETS.repair} sourcePath={path} defaultDeviceType="MacBook" />
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-md">{cfg.area} - frequently asked questions</h2>
        <FAQAccordion items={cfg.faqs} injectSchema />
      </section>

      {/* Find us */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-md flex items-center gap-sm">
          <MapPin size={28} className="text-accent" aria-hidden /> Visit our workshop or use free pickup
        </h2>
        <p className="text-[16px] text-text-muted max-w-[72ch] mb-lg">
          From {cfg.area}, the workshop is {cfg.driveTime} away by car. Paid parking inside Concord Tower or free street parking on Al Sufouh Road behind the tower.
        </p>
        <LocationBlock tone="dark" />
      </section>

      {/* Visiting the workshop (shared logistics, condensed from a 3-card block) */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <article className="border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md p-lg flex items-start gap-md">
          <ParkingCircle size={24} className="text-accent shrink-0 mt-1" aria-hidden />
          <p className="text-[15px] text-text-muted leading-relaxed m-0">
            <strong className="text-text">Prefer to drop in?</strong> Paid tower parking or free street parking on Al Sufouh Road, 120 m from Media City Metro on the Red Line. Quietest on weekday afternoons - WhatsApp ahead at peak times to book a slot.
          </p>
        </article>
      </section>

      {/* Other Dubai areas we cover - sibling cross-links */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <SectionHeading
          eyebrow="More areas"
          title="Free pickup across Dubai"
          sub="We collect from and deliver back to every Dubai neighbourhood from our Concord Tower workshop. We also cover:"
        />
        <div className="flex flex-wrap gap-sm">
          {AREAS.filter((a) => a.slug !== cfg.slug).map((a) => (
            <Link key={a.slug} to={`/macbook-repair-${a.slug}`} className="rounded-full border border-border/70 bg-bg-card ring-1 ring-black/[0.03] px-4 py-2 text-[14px] text-text-muted transition-colors hover:border-accent/40 hover:text-text">
              MacBook repair {a.area}
            </Link>
          ))}
          <Link to="/macbook-repair-near-me-dubai" className="rounded-full border border-accent/40 bg-bg-card px-4 py-2 text-[14px] text-text transition-colors hover:border-accent">
            MacBook repair near me →
          </Link>
          <Link to="/macbook-repair-sharjah" className="rounded-full border border-border/70 bg-bg-card ring-1 ring-black/[0.03] px-4 py-2 text-[14px] text-text-muted transition-colors hover:border-accent/40 hover:text-text">
            Other emirates (Sharjah, Abu Dhabi…) →
          </Link>
        </div>
      </section>

      {/* CTA (shared dark band, matches master) */}
      <CtaBand
        eyebrow={`Free pickup in ${cfg.area}`}
        headline={`Book a free pickup from ${cfg.area} in 30 seconds`}
        description="Send your address and the MacBook model on WhatsApp. Pickup window confirmed in 4 minutes."
        whatsappLabel="Book free pickup"
        className="mt-3xl"
      />
      <RelatedArticles tone="dark" path={path} />
      </div>
    </PageShell>
  );
}

export default AreaPageTemplate;
