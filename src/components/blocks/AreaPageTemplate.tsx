"use client";
// Shared template for Dubai area landing pages.
// Driven entirely by AreaConfig from src/content/areas.ts.
// Renders ~1,300+ visible words per page with unique title/description/H1.
// Since 2026-10-15 each page is a guide to getting a Mac repaired from that area: walk in to
// Concord Tower (the main option), send it with a courier the customer books, or a paid onsite
// visit when a technician is free. Free pickup/collection/delivery has ended: never offer it here.
import { Link } from "@/lib/router-compat";
import { Car, Clock, MapPin, ParkingCircle, Footprints, Package, Wrench } from "lucide-react";

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
import { AREAS, areaMetaTitle, areaMetaDescription, type AreaConfig } from "@/content/areas";
import { DATA_RECOVERY_AREAS } from "@/content/data-recovery-areas";
import { areaTopicForSlug } from "@/lib/page-images";
import { REVIEW_COUNT_LABEL } from "@/content/site";

// Every Mac family we repair, shown on every area page. The domain is MacBook-led, but the
// workshop takes the desktops too - these links are how an area page ranks for
// "imac repair <area>", "mac mini repair <area>" and "data recovery <area>".
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
  const title = areaMetaTitle(cfg);
  const description = areaMetaDescription(cfg);
  // The workshop is inside Media City, so "drive" and "courier" read oddly there.
  const isHome = cfg.slug === "media-city";

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
        warranty: "P2Y",
        url: path,
        description: `MacBook screen, battery, keyboard, water-damage and logic-board repair for ${cfg.area}: walk in to our Dubai Media City workshop or send the Mac by courier.`,
      }),
    ],
  );

  return (
    <PageShell>
      <div className="bg-bg-alt text-text -mb-[4rem]">
      <Hero
        variant="service"
        tone="dark"
        eyebrow={isHome ? "Walk-in workshop in Concord Tower" : `${cfg.driveTime} from ${cfg.area} by car`}
        title={isHome ? "MacBook Repair Dubai Media City: Walk In, 10th Floor" : `MacBook Repair ${cfg.area}: Walk In, Courier or Onsite`}
        subtitle={`${isHome ? "Our workshop is in Concord Tower, Dubai Media City." : `${cfg.driveTime} by car to our workshop in Concord Tower, Dubai Media City.`} ${cfg.landmarkLine} Walk in for a free diagnosis, no appointment needed. Written warranty of 15 days to 2 years.`}
        image={areaTopicForSlug(cfg.slug)?.src}
        imageAlt={`MacBook repair for ${cfg.area} at our Concord Tower workshop in Dubai Media City`}
      >
        <p className="mt-md flex flex-wrap items-center gap-md text-[14px] text-text-muted">
          <span className="flex items-center gap-1"><Footprints size={16} className="text-accent" aria-hidden /> Walk in, no appointment</span>
          <span className="text-text-faint">·</span>
          <span className="flex items-center gap-1"><Car size={16} className="text-accent" aria-hidden /> {isHome ? "Inside Media City" : `${cfg.driveTime} drive`}</span>
          <span className="text-text-faint">·</span>
          <span className="flex items-center gap-1"><ParkingCircle size={16} className="text-accent" aria-hidden /> Parking on site</span>
        </p>
      </Hero>

      <QuickAnswer
        tone="dark"
        question={`How do I get a MacBook repaired from ${cfg.area}?`}
        answer={
          isHome
            ? "MacBook repair in Dubai Media City is a short walk away: Office #45, 10th floor, Concord Tower. Bring the Mac in without an appointment and the diagnosis is free. You get the price in writing on WhatsApp before we start, and many screen, battery and keyboard jobs are done the same day when the part is in stock."
            : `MacBook repair in ${cfg.area} works three ways. Drive ${cfg.driveTime} to Concord Tower, Dubai Media City and walk in, no appointment needed for the free diagnosis. Or book a same-day courier app and WhatsApp us the tracking link. A paid onsite visit is possible when a technician is free, with the charge quoted first.`
        }
      />

      <USPStrip tone="dark" />

      <StatBand />

      <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
        <BreadcrumbTrail tone="dark" trail={[{ name: "Home", path: "/" }, { name: `MacBook Repair ${cfg.area}`, path }]} />
      </section>

      {/* Intro / context */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
        <h2 className="text-[28px] md:text-[32px] mb-md">Where can I get a MacBook repaired near {cfg.area}?</h2>
        <p className="text-[16px] text-text-muted leading-relaxed max-w-[72ch]">{cfg.intro}</p>
        <p className="text-[16px] text-text-muted leading-relaxed max-w-[72ch] mt-md">{cfg.whyChoose}</p>
      </section>

      {/* Travel times table */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <SectionHeading
          eyebrow="Getting here"
          title={`How far is the workshop from ${cfg.area}?`}
          sub="Off-peak driving times to Concord Tower, Dubai Media City. Allow an extra 10-20 minutes between 8 and 10 am and between 5 and 7 pm. There's parking on site, and a diagnosis needs no appointment."
        />
        <div className="overflow-x-auto border border-border rounded-md bg-bg-card">
          <table className="w-full text-[14px] min-w-[320px]">
            <caption className="sr-only">Off-peak driving times from {cfg.area} to the MacBook Repair Dubai workshop in Concord Tower, Dubai Media City.</caption>
            <thead className="bg-bg-alt">
              <tr className="text-left">
                <th className="px-md py-sm font-semibold">From</th>
                <th className="px-md py-sm font-semibold">Drive to Concord Tower</th>
              </tr>
            </thead>
            <tbody>
              {cfg.travel.map((row, i) => (
                <tr key={row.from} className={i % 2 ? "bg-bg-alt" : ""}>
                  <td className="px-md py-sm font-semibold">{row.from}</td>
                  <td className="px-md py-sm mono text-accent">{row.drive}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-[14px] text-text-muted mt-sm">
          {cfg.metroNote}
        </p>
      </section>

      {/* Three ways to get the Mac to the bench */}
      <section className="bg-bg-alt border-y border-border mt-3xl py-3xl">
        <div className="mx-auto max-w-content px-5 md:px-6">
          <SectionHeading
            eyebrow="Your options"
            title={`How do I get my Mac to you from ${cfg.area}?`}
            sub={cfg.pickupNote}
          />

          <ul className="grid gap-lg md:grid-cols-3">
            {[
              {
                icon: Footprints,
                t: "Walk in (most people do)",
                b: `Office #45, 10th floor, Concord Tower, Dubai Media City${isHome ? ", a few minutes on foot from anywhere in Media City" : `, ${cfg.driveTime} from ${cfg.short} by car`}. Parking is on site and you don't need an appointment for a diagnosis.`,
              },
              {
                icon: Package,
                t: "Send it by courier",
                b: `Book any same-day courier app, hand the Mac to the driver and WhatsApp us the tracking link on 055 741 3706. It's the quickest route if you can't come in, because you aren't waiting on us. We arrange the return with you on WhatsApp once it's fixed.`,
              },
              {
                icon: Wrench,
                t: "Onsite visit (paid)",
                b: "A technician can come to you when one is free. It's a paid visit, and we quote the charge on WhatsApp before you book, so you know the cost first.",
              },
            ].map((s) => (
              <li key={s.t} className="border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md p-lg">
                <span aria-hidden className="inline-flex w-10 h-10 rounded-md bg-accent/10 text-accent items-center justify-center mb-md">
                  <s.icon size={20} />
                </span>
                <p className="font-bold text-[16px] mb-1">{s.t}</p>
                <p className="text-[14px] text-text-muted leading-relaxed">{s.b}</p>
              </li>
            ))}
          </ul>

          <p className="text-[14px] text-text-muted mt-lg max-w-[72ch] flex items-start gap-sm">
            <Clock size={18} className="text-accent shrink-0 mt-[2px]" aria-hidden />
            <span>
              Open Mon-Thu and Sat 9 am-7 pm, Friday 9 am-12 pm and 2 pm-7 pm, closed Sunday. Whichever route you pick, the diagnosis is free and the price is fixed in writing on WhatsApp before any work starts.
            </span>
          </p>
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
              <p className="text-[13px] text-text-muted"><span className="mono text-accent font-bold">Price on request</span> · warranty of 15 days to 2 years</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Other Macs we repair for this area */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <SectionHeading
          eyebrow="Every Mac, not just MacBooks"
          title={`Do you repair iMac, Mac mini and Mac Studio in ${cfg.area}?`}
          sub={`Yes. Bring any Mac from ${cfg.area} to the workshop, desktops included. If you're sending an iMac or a display by courier, use the original box if you still have it, or message us first and we'll tell you how to pack it.`}
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
        <SectionHeading eyebrow="Around the area" title={`Landmarks near you in ${cfg.area}`} />
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
            sub={`${REVIEW_COUNT_LABEL} five-star Google reviews. A small sample below, from customers across Dubai who brought their Macs to the Media City bench.`}
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
        <h2 id="area-lead" className="text-[26px] md:text-[32px] font-bold mb-md">Get a quote for your Mac from {cfg.area}</h2>
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
          <MapPin size={28} className="text-accent" aria-hidden /> Where is the workshop?
        </h2>
        <p className="text-[16px] text-text-muted max-w-[72ch] mb-lg">
          {isHome
            ? "Office #45 on the 10th floor of Concord Tower, Dubai Media City. If you work in Media City, it's a short walk; if you drive, there's parking on site."
            : `Office #45 on the 10th floor of Concord Tower, Dubai Media City. From ${cfg.area} it's ${cfg.driveTime} by car off-peak, and there's parking on site.`}{" "}
          We close for lunch on Fridays from 12 to 2 pm and all day Sunday. A photo of the fault on WhatsApp before you set off helps us tell you what to expect.
        </p>
        <LocationBlock tone="dark" />
      </section>

      {/* Other Dubai areas we cover - sibling cross-links */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <SectionHeading
          eyebrow="More areas"
          title="MacBook repair for other Dubai areas"
          sub="Each page covers the drive, parking and courier options from that neighbourhood to Concord Tower:"
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
        eyebrow={isHome ? "Concord Tower, 10th floor" : `From ${cfg.area} to Concord Tower`}
        headline={`Mac playing up in ${cfg.area}? Send us a photo first`}
        description="WhatsApp the model and a photo of the fault. We'll tell you what it's likely to need, then you walk in or book a courier."
        whatsappLabel="WhatsApp a photo for a quote"
        className="mt-3xl"
      />
      <RelatedArticles tone="dark" path={path} />
      </div>
    </PageShell>
  );
}

export default AreaPageTemplate;
