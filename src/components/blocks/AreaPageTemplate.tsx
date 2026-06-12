"use client";
// Shared template for Dubai area landing pages.
// Driven entirely by AreaConfig from src/content/areas.ts.
// Renders ~1,300+ visible words per page with unique title/description/H1.
import { Link } from "@/lib/router-compat";
import { Car, Clock, MapPin, MessageCircle, Navigation, ParkingCircle, Phone, Truck } from "lucide-react";

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
import { localBusiness, organization, service as serviceSchema, pageWithSpeakable, place } from "@/lib/schema";
import { SITE } from "@/lib/seo";
import { REVIEWS } from "@/content/reviews";
import { NAP } from "@/content/site";
import { AREAS, type AreaConfig } from "@/content/areas";
import { areaTopicForSlug } from "@/lib/page-images";

export function AreaPageTemplate({ cfg }: { cfg: AreaConfig }) {
  const path = `/macbook-repair-${cfg.slug}`;
  const url = `${SITE.url}${path}`;
  const reviews = cfg.reviewIndexes.map((i) => REVIEWS[i % REVIEWS.length]).filter(Boolean);
  const title = `MacBook Repair ${cfg.area} - Free Pickup & Delivery`;
  const description = `MacBook repair in ${cfg.area} with free pickup & same-day delivery from our Concord Tower workshop. 12-month warranty. Call 055 741 3706.`;

  useSeo(
    { title, description, path },
    [
      organization(),
      localBusiness(),
      // Single WebPage node (speakable). BreadcrumbList is emitted by the rendered <BreadcrumbTrail>.
      pageWithSpeakable({ url, name: title }),
      // Place node for the served area - falls back to central Dubai business geo (areas.ts has no per-area geo).
      place({
        areaName: cfg.area,
        description: `MacBook repair service area covering ${cfg.area}, Dubai. Free pickup and delivery from our Concord Tower workshop in Media City - ${cfg.driveTime} away.`,
      }),
      serviceSchema({
        name: `MacBook Repair ${cfg.area}`,
        price: 350,
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
        title={`MacBook Repair in ${cfg.area} - Free Pickup & Delivery`}
        subtitle={`${cfg.driveTime} from our Concord Tower workshop in Media City. ${cfg.landmarkLine} Same-day repair, 12-month written warranty.`}
        image={areaTopicForSlug(cfg.slug)?.src}
        imageAlt={areaTopicForSlug(cfg.slug)?.alt ?? `MacBook repair pickup and delivery in ${cfg.area}, Dubai`}
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
        answer={`MacBook repair from ${cfg.area} starts with a free door-to-door pickup - typically ${cfg.pickupWindow.toLowerCase()} of your WhatsApp. We diagnose at our Concord Tower workshop in Media City (${cfg.driveTime}), quote in writing within 4 hours, and return the repaired MacBook with a 12-month warranty. Most common repairs finish the same day.`}
      />

      <USPStrip tone="dark" />

      <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
        <BreadcrumbTrail tone="dark" trail={[{ name: "Home", path: "/" }, { name: `MacBook Repair ${cfg.area}`, path }]} />
      </section>

      {/* Intro / context */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
        <h2 className="text-[28px] md:text-[32px] mb-md">Trusted MacBook repair for {cfg.area} residents and offices</h2>
        <p className="text-[16px] text-text-muted leading-relaxed max-w-[72ch]">{cfg.intro}</p>
        <p className="text-[16px] text-text-muted leading-relaxed max-w-[72ch] mt-md">{cfg.whyChoose}</p>
      </section>

      {/* Travel times table */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-sm flex items-center gap-sm">
          <Car size={28} className="text-accent" aria-hidden /> Travel times from {cfg.area}
        </h2>
        <p className="text-[16px] text-text-muted max-w-[72ch] mb-md">
          Off-peak driving times to Concord Tower, Media City. Add 10-20 minutes during 8-10 am and 5-7 pm rush windows. The pickup column shows our courier turnaround once you confirm on WhatsApp.
        </p>
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
          <h2 className="text-[28px] md:text-[32px] mb-md">Pickup &amp; delivery from {cfg.area}</h2>
          <p className="text-[16px] text-text-muted leading-relaxed max-w-[72ch] mb-lg">{cfg.pickupNote}</p>

          <ol className="grid gap-lg md:grid-cols-2 lg:grid-cols-5">
            {[
              { t: `WhatsApp 055 741 3706`, b: `Send your ${cfg.area} address and the MacBook model. Shafiq confirms a pickup window within 4 minutes during business hours.` },
              { t: "Courier collects in person", b: `${cfg.pickupWindow} of confirmation. Marked Toyota Innova, ID-checked, insured, trackable on WhatsApp.` },
              { t: "Free workshop diagnosis", b: "Shafiq inspects the device the same day. Itemised written quote on WhatsApp within 4 hours of pickup." },
              { t: "Approve and we repair", b: "Reply 'approved'. Most common repairs finish the same day. We message you the moment the device is ready." },
              { t: "Free return delivery", b: `Courier returns the device to your ${cfg.area} address. Pay on arrival - cash, card or bank transfer. 12-month warranty card included.` },
            ].map((s, i) => (
              <li key={i} className="border border-border bg-bg-card rounded-md p-lg">
                <span aria-hidden className="inline-flex w-10 h-10 rounded-md bg-accent/15 text-accent font-heading font-bold text-[18px] items-center justify-center mb-md">
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
        <h2 className="text-[28px] md:text-[32px] mb-md">Common MacBook repairs for {cfg.area} customers</h2>
        <p className="text-[16px] text-text-muted max-w-[72ch] mb-lg">
          Indicative starting prices in AED. Final price is fixed in writing on WhatsApp before any work begins, after a free diagnosis at the workshop.
        </p>
        <div className="grid gap-md md:grid-cols-2 lg:grid-cols-3">
          {cfg.topServices.map((s) => (
            <Link
              key={s.href}
              to={s.href}
              className="block border border-border bg-bg-card rounded-md p-lg hover:border-accent/40 transition"
            >
              <p className="font-bold text-[16px] mb-1">{s.label}</p>
              <p className="text-[13px] text-text-muted">From <span className="mono text-accent font-bold">AED {s.price}</span> · 12-month warranty</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Landmarks */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-md flex items-center gap-sm">
          <Navigation size={28} className="text-accent" aria-hidden /> Landmarks we collect from in {cfg.area}
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
          <h2 className="text-[28px] md:text-[32px] mb-md">Customer reviews from across Dubai</h2>
          <p className="text-[16px] text-text-muted max-w-[72ch] mb-lg">
            215+ five-star Google reviews. A small sample below - many are from {cfg.area} residents and office workers who used the free pickup service.
          </p>
          <ReviewGrid tone="dark" reviews={reviews} />
          <p className="text-[14px] text-text-muted mt-md">
            <Link to="/reviews" className="text-accent hover:underline">Read all reviews →</Link>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-md">{cfg.area} - frequently asked questions</h2>
        <FAQAccordion tone="dark" items={cfg.faqs} injectSchema />
      </section>

      {/* Find us */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-md flex items-center gap-sm">
          <MapPin size={28} className="text-accent" aria-hidden /> Visit our workshop or use free pickup
        </h2>
        <p className="text-[16px] text-text-muted max-w-[72ch] mb-lg">
          From {cfg.area}, the workshop is {cfg.driveTime} away by car. Paid parking inside Concord Tower (AED 5/hour) or free street parking on Al Sufouh Road behind the tower.
        </p>
        <LocationBlock tone="dark" />
      </section>

      {/* Visiting the workshop (shared logistics, condensed from a 3-card block) */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <article className="border border-border bg-bg-card rounded-md p-lg flex items-start gap-md">
          <ParkingCircle size={24} className="text-accent shrink-0 mt-1" aria-hidden />
          <p className="text-[15px] text-text-muted leading-relaxed m-0">
            <strong className="text-text">Prefer to drop in?</strong> Paid tower parking (AED 5/hour, AED 25/day cap) or free street parking on Al Sufouh Road, 120 m from Media City Metro on the Red Line. Quietest on weekday afternoons - WhatsApp ahead at peak times for a guaranteed slot.
          </p>
        </article>
      </section>

      {/* Other Dubai areas we cover - sibling cross-links */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-md">Free pickup across Dubai</h2>
        <p className="text-[16px] text-text-muted max-w-[72ch] mb-lg">
          We collect from and deliver back to every Dubai neighbourhood from our Concord Tower workshop. We also cover:
        </p>
        <div className="flex flex-wrap gap-sm">
          {AREAS.filter((a) => a.slug !== cfg.slug).map((a) => (
            <Link key={a.slug} to={`/macbook-repair-${a.slug}`} className="rounded-full border border-border bg-bg-card px-4 py-2 text-[14px] text-text-muted transition-colors hover:border-accent/40 hover:text-text">
              MacBook repair {a.area}
            </Link>
          ))}
          <Link to="/macbook-repair-near-me" className="rounded-full border border-accent/40 bg-bg-card px-4 py-2 text-[14px] text-text transition-colors hover:border-accent">
            MacBook repair near me →
          </Link>
          <Link to="/macbook-repair-sharjah" className="rounded-full border border-border bg-bg-card px-4 py-2 text-[14px] text-text-muted transition-colors hover:border-accent/40 hover:text-text">
            Other emirates (Sharjah, Abu Dhabi…) →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <div className="relative overflow-hidden border border-border bg-bg-card text-text rounded-2xl p-xl md:p-2xl flex flex-col items-start gap-md">
          <div aria-hidden className="pointer-events-none absolute -top-16 -right-10 h-[20rem] w-[20rem] rounded-full bg-accent/15 blur-3xl" />
          <h2 className="relative text-text text-[28px] md:text-[32px] max-w-[28ch]">Book a free pickup from {cfg.area} in 30 seconds</h2>
          <p className="relative text-text-muted text-[16px] max-w-[60ch]">
            Send your address and the MacBook model on WhatsApp. Pickup window confirmed in 4 minutes.
          </p>
          <div className="relative flex flex-wrap gap-sm">
            <Button asChild variant="whatsapp" size="lg">
              <a href={NAP.whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle aria-hidden /> Book free pickup
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

export default AreaPageTemplate;
