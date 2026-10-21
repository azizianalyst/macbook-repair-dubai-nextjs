"use client";
import { withSlash } from "@/lib/utils";
import { MapPin, Train, Car, Clock, Star, MessageCircle, Phone, ParkingCircle, Navigation } from "lucide-react";
import { Link } from "@/lib/router-compat";
import { PageShell } from "@/components/layout/PageShell";
import { LeadForm } from "@/components/blocks/LeadForm";
import { PRESETS } from "@/data/form-presets";
import { RelatedArticles } from "@/components/blocks/RelatedArticles";
import { Hero } from "@/components/blocks/Hero";
import { QuickAnswer } from "@/components/blocks/QuickAnswer";
import { topicForPath } from "@/lib/page-images";
import { USPStrip } from "@/components/blocks/USPStrip";
import { BreadcrumbTrail } from "@/components/blocks/BreadcrumbTrail";
import { LocationBlock } from "@/components/blocks/LocationBlock";
import { ReviewGrid } from "@/components/blocks/ReviewGrid";
import { FAQAccordion } from "@/components/blocks/FAQAccordion";
import { Button } from "@/components/ui/button";
import { useSeo } from "@/hooks/use-seo";
import {
  localBusiness, organization, service as serviceSchema, webPage,
} from "@/lib/schema";
import { REVIEWS } from "@/content/reviews";
import { NAP, REVIEW_COUNT_LABEL, RATING_LABEL } from "@/content/site";

const TRAVEL_TIMES = [
  // ── Closest (≤10 min) ──────────────────────────────────────────────────
  { area: "Dubai Media City",         car: "In the area" },
  { area: "Internet City",            car: "3 min" },
  { area: "Knowledge Village",        car: "4 min" },
  { area: "Knowledge Park",           car: "5 min" },
  { area: "Al Sufouh",                car: "5 min" },
  { area: "Dubai Pearl",              car: "7 min" },
  { area: "Sheikh Zayed Road",        car: "9 min" },
  // ── 10-20 min ──────────────────────────────────────────────────────────
  { area: "JBR",                      car: "10 min" },
  { area: "JLT",                      car: "12 min" },
  { area: "Dubai Marina",             car: "14 min" },
  { area: "Palm Jumeirah",            car: "15 min" },
  { area: "Emirates Living",          car: "12 min" },
  { area: "Jumeirah Heights",         car: "14 min" },
  { area: "Jumeirah Islands",         car: "16 min" },
  { area: "The Greens",               car: "11 min" },
  { area: "The Views",                car: "12 min" },
  { area: "Commodities Centre",       car: "12 min" },
  { area: "Tecom",                    car: "12 min" },
  { area: "Discovery Gardens",        car: "16 min" },
  { area: "Jumeirah",                 car: "18 min" },
  { area: "Umm Suqeim",               car: "18 min" },
  { area: "Al Barsha",                car: "19 min" },
  { area: "Al Furjan",                car: "19 min" },
  { area: "Dubai Science Park",       car: "18 min" },
  // ── 20-30 min ──────────────────────────────────────────────────────────
  { area: "Downtown Dubai",           car: "21 min" },
  { area: "DIFC",                     car: "27 min" },
  { area: "Business Bay",             car: "23 min" },
  { area: "Dubai Hills Estate",       car: "21 min" },
  { area: "Dubai Hills View",         car: "22 min" },
  { area: "Al Quoz",                  car: "18 min" },
  { area: "Motor City",               car: "22 min" },
  { area: "Dubai Motor City",         car: "22 min" },
  { area: "Sports City",              car: "21 min" },
  { area: "Studio City",              car: "22 min" },
  { area: "Arabian Ranches",          car: "23 min" },
  { area: "Jumeirah Village Circle",  car: "20 min" },
  { area: "Bur Dubai",                car: "24 min" },
  { area: "Al Karama",                car: "24 min" },
  { area: "Deira",                    car: "29 min" },
  { area: "Dubai Design District (d3)", car: "26 min" },
  { area: "Dubai Healthcare City",    car: "26 min" },
  { area: "Nad Al Sheba",             car: "34 min" },
  { area: "Meadows",                  car: "14 min" },
  { area: "The Villa",                car: "33 min" },
  { area: "Sustainable City",         car: "27 min" },
  { area: "Al Jaddaf",                car: "25 min" },
  { area: "Al Jafiliya",              car: "27 min" },
  { area: "Satwa",                    car: "28 min" },
  // ── 30+ min ────────────────────────────────────────────────────────────
  { area: "Mirdif",                   car: "31 min" },
  { area: "Dubai Silicon Oasis",      car: "33 min" },
  { area: "Dubai Investment Park",    car: "24 min" },
  { area: "Dubai Production City",    car: "24 min" },
  { area: "Dubai South",              car: "33 min" },
  { area: "Dubai Land",               car: "25 min" },
  { area: "International City",       car: "33 min" },
  { area: "Arabian Ranches 2",        car: "30 min" },
  { area: "Al Warqa",                 car: "35 min" },
  { area: "Al Barari",                car: "30 min" },
  { area: "Al Mizhar",                car: "40 min" },
  { area: "Al Nahda",                 car: "31 min" },
  { area: "Jebel Ali",                car: "24 min" },
  { area: "Dubai Industrial City",    car: "35 min" },
  { area: "Remraam",                  car: "26 min" },
];

const LANDMARKS = [
  { name: "Palm Jumeirah tram stop",  distance: "3-min walk", note: "Dubai Tram. From the Red Line, change to the tram at Sobha Realty or DMCC station" },
  { name: "Concord Tower lobby",       distance: "0 m",   note: "Take the elevator to the 10th floor, Office #45 is on the right" },
  { name: "Roxy Cinemas Mall of the Emirates", distance: "1.8 km", note: "5-minute drive south on Sheikh Zayed Road" },
  { name: "Burj Al Arab",              distance: "3.5 km", note: "8-minute drive - useful waypoint coming from Jumeirah Beach Road" },
  { name: "Palm Jumeirah Monorail",    distance: "4.2 km", note: "12-minute drive via Al Sufouh Road" },
  { name: "Al Fardan Exchange Metro", distance: "15-min walk", note: "Nearest Red Line station (formerly Nakheel, then Al Khail)" },
];

const SEND_IN_STEPS = [
  { title: "WhatsApp 055 741 3706 first", body: "Tell Shafiq the model and the fault, and send a photo. He replies with a quote during business hours." },
  { title: "Book a same-day courier yourself", body: "Use any same-day courier app. Address it to Office #45, 10th Floor, Concord Tower, Dubai Media City, and hand the MacBook to the driver." },
  { title: "Send us the tracking link", body: "WhatsApp the link so we know it's on the way. It reaches us within the day, and we log it by serial number when it arrives." },
  { title: "Free diagnosis, then approve", body: "Shafiq checks it on the bench and sends a written quote. Reply 'approved' and most repairs finish the same day." },
  { title: "Collect it or send it back", body: "Collect it from the workshop, or we book a courier to bring it back to you. Warranty card of 15 days to 2 years included." },
];

const FAQS = [
  { q: "Where is MacBook Repair Dubai actually located?",
    a: "Office #45, 10th Floor, Concord Tower, Al Sufouh, Dubai Media City. The tower is a 3-minute walk from the Palm Jumeirah tram stop, with parking on site." },
  { q: "How far are you from Dubai Marina?",
    a: "10 minutes by car via Sheikh Zayed Road exit 32. By tram: board at the Marina and get off at Palm Jumeirah, a 3-minute walk from the tower. Can't make the trip? A same-day courier you book gets it to us within the day." },
  { q: "Do you have a branch in JLT or Downtown?",
    a: "No - single Concord Tower workshop only. It's a 3-minute walk from the Palm Jumeirah tram stop, with parking on site, so it's easy to reach. If you can't, send the MacBook with a same-day courier you book and WhatsApp us the tracking link." },
  { q: "What's the closest Metro station?",
    a: "Al Fardan Exchange on the Red Line, about a 15-minute walk. The quicker route is the tram: change from the Red Line at Sobha Realty or DMCC station, get off at Palm Jumeirah and walk 3 minutes to Concord Tower. Take the elevator to the 10th floor." },
  { q: "Is there parking?",
    a: "Yes, there is parking on site at Concord Tower, so you can drive in, drop the MacBook and wait upstairs while we work on it." },
  { q: "Can I walk in without an appointment?",
    a: "Yes - walk-in welcome any time during opening hours (Mon-Thu and Sat 9 am - 7 pm, Friday 9 am - 12 pm and 2 pm - 7 pm). For complex board work, sending a WhatsApp first lets Shafiq pre-order the part so the device is fixed during your visit instead of left overnight." },
  { q: "What if I can't come to the workshop?",
    a: "Book any same-day courier app, hand the MacBook to the driver and WhatsApp us the tracking link. You're not waiting on us to send anyone. If you need a technician at your home or office, a paid onsite visit can be booked, subject to technician availability, with the charge quoted on WhatsApp first." },
  { q: "Do you cover Sharjah and Abu Dhabi?",
    a: "Yes, at the Dubai workshop. WhatsApp a photo for a quote, then walk in or book a courier yourself to send the MacBook over. When it's fixed, we book a courier to bring it back, arranged on WhatsApp." },
  { q: "What if I'm in a hurry - can you fix it while I wait?",
    a: "Walk in with an in-stock part fault (MacBook screen, battery, keyboard, iPhone screen, iPhone battery) and the repair finishes in 40 minutes to 2 hours. Wait in the AC office or grab coffee at the Costa downstairs in the tower lobby." },
  { q: "Are you open weekends?",
    a: "Saturday: full opening hours, 9 am-7 pm. Sunday: storefront closed but WhatsApp answered all day. Monday morning is the busiest hour - message us on WhatsApp on Sunday to reserve a Monday slot." },
];

const REVIEW_INDEXES = [0, 5, 8, 10, 13, 21];

export default function MacBookRepairNearMeDubai() {
  const reviews = REVIEW_INDEXES.map((i) => REVIEWS[i % REVIEWS.length]).filter(Boolean);

  useSeo(
    {
      title: "MacBook Repair Near Me Dubai - Walk In, Same Day",
      description:
        "MacBook repair near you in Dubai. Walk in to Concord Tower, Media City, by the Palm Jumeirah tram, or send it by courier. 10 min from Marina. 055 741 3706.",
      path: "/macbook-repair-near-me-dubai",
    },
    [
      localBusiness(),
      organization(),
      webPage({
        title: "MacBook Repair Near Me Dubai",
        description: "Find a MacBook repair specialist near your Dubai address. Walk in at Dubai Media City or send your MacBook by courier.",
        path: "/macbook-repair-near-me-dubai",
        dateModified: "2026-04-01",
        datePublished: "2024-06-01",
      }),
      serviceSchema({
        name: "MacBook Repair Near Me Dubai",
        timeline: "Same day",
        warranty: "P2Y",
        url: "/macbook-repair-near-me-dubai",
        description: "MacBook screen, battery, keyboard, and water damage repair at our walk-in workshop in Dubai Media City.",
      }),
    ],
  );

  return (
    <PageShell>
      <div className="bg-bg-alt text-text -mb-[4rem]">
      <Hero
        image={topicForPath("/macbook-repair-near-me-dubai")?.src}
        imageAlt={topicForPath("/macbook-repair-near-me-dubai")?.alt}
        variant="service"
        tone="dark"
        eyebrow="Near the Palm Jumeirah tram stop"
        title="MacBook Repair Near You in Dubai - Walk In or Send It Over"
        subtitle="Concord Tower in Media City is the workshop, a 3-minute walk from the Palm Jumeirah tram stop, with parking on site. Can't come in? Book a same-day courier yourself and the MacBook reaches us within the day."
      >
        <p className="mt-md flex flex-wrap items-center gap-md text-[14px] text-text">
          <span className="flex items-center gap-1"><ParkingCircle size={16} className="text-accent" aria-hidden /> Parking on site</span>
          <span className="text-text-muted">·</span>
          <span className="flex items-center gap-1"><Train size={16} className="text-accent" aria-hidden /> 3 min from Palm Jumeirah tram stop</span>
          <span className="text-text-muted">·</span>
          <span className="flex items-center gap-1"><Star size={16} className="fill-star text-star" aria-hidden /> {RATING_LABEL} · {REVIEW_COUNT_LABEL} reviews</span>
        </p>
      </Hero>

      <QuickAnswer
        tone="dark"
        question="Is there a MacBook repair shop near me in Dubai?"
        answer="Our workshop is in Concord Tower, Dubai Media City, a 3-minute walk from the Palm Jumeirah tram stop, with parking on site. Walk in without an appointment, or book any same-day courier app to send your MacBook over. Diagnosis is free and there is no fee if we cannot fix it."
      />

      <USPStrip tone="dark" />

      <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
        <BreadcrumbTrail tone="dark" trail={[{ name: "Home", path: "/" }, { name: "MacBook Repair Near Me", path: "/macbook-repair-near-me-dubai" }]} />
      </section>

      {/* Find us */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
        <h2 className="text-[28px] md:text-[32px] mb-md flex items-center gap-sm">
          <MapPin size={28} className="text-accent" aria-hidden /> Find the workshop
        </h2>
        <LocationBlock tone="dark" />
      </section>

      {/* Areas we cover */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-md">Areas we cover across Dubai</h2>
        <p className="text-[16px] text-text-muted max-w-[70ch] mb-lg">
          Walk in from anywhere in Dubai, or send your MacBook with a same-day courier you book. Tap your area for local directions and drive times. Cracked screen specifically? <Link to="/macbook-screen-repair-near-me-dubai" className="text-accent font-semibold hover:underline">See how screen repair near you works</Link>.
        </p>
        <div className="flex flex-wrap gap-2">
          {[
            ["Dubai Marina", "/macbook-repair-dubai-marina"],
            ["Downtown Dubai", "/macbook-repair-downtown-dubai"],
            ["JBR", "/macbook-repair-jbr"],
            ["Business Bay", "/macbook-repair-business-bay"],
            ["Jumeirah", "/macbook-repair-jumeirah"],
            ["JLT", "/macbook-repair-jlt"],
            ["DIFC", "/macbook-repair-difc"],
            ["Dubai Silicon Oasis", "/macbook-repair-silicon-oasis"],
            ["Dubai Internet City", "/macbook-repair-internet-city"],
          ].map(([label, href]) => (
            <Link key={href} to={href} className="px-3.5 py-1.5 border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md text-[14px] text-accent hover:bg-accent/10 hover:border-accent/40 transition-colors">MacBook Repair {label} →</Link>
          ))}
        </div>
      </section>

      {/* Landmarks */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-md">Landmarks near the workshop</h2>
        <p className="text-[16px] text-text-muted max-w-[70ch] mb-lg">
          Six landmarks and stops within 5 km. Use any of them as a waypoint when navigating from your area.
        </p>
        <div className="grid gap-md md:grid-cols-2">
          {LANDMARKS.map((l) => (
            <article key={l.name} className="border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md p-lg flex gap-md">
              <Navigation size={24} className="text-accent shrink-0 mt-1" aria-hidden />
              <div>
                <p className="font-bold text-[16px]">{l.name} <span className="mono text-[13px] text-text-faint font-normal">· {l.distance}</span></p>
                <p className="text-[14px] text-text-muted leading-relaxed mt-1">{l.note}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Travel times table */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-sm flex items-center gap-sm">
          <Car size={28} className="text-accent" aria-hidden /> Travel times from major Dubai areas
        </h2>
        <p className="text-[16px] text-text-muted max-w-[70ch] mb-md">
          Off-peak driving times to Concord Tower Media City. Add 10-20 minutes during 8-10 am and 5-7 pm rush windows.
        </p>
        <div className="overflow-x-auto border border-border rounded-md bg-bg-card">
          <table className="w-full text-[14px] min-w-[360px]">
            <caption className="sr-only">Travel times from Dubai areas to MacBook Repair Dubai workshop.</caption>
            <thead className="bg-bg-card">
              <tr className="text-left">
                <th className="px-md py-sm font-semibold">Area</th>
                <th className="px-md py-sm font-semibold">Drive time</th>
              </tr>
            </thead>
            <tbody>
              {TRAVEL_TIMES.map((t, i) => (
                <tr key={t.area} className={i % 2 ? "bg-bg-alt" : ""}>
                  <td className="px-md py-sm font-semibold">{t.area}</td>
                  <td className="px-md py-sm mono text-accent">{t.car}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Send-in process */}
      <section className="bg-bg-alt border-y border-border mt-3xl py-3xl">
        <div className="mx-auto max-w-content px-5 md:px-6">
          <h2 className="text-[28px] md:text-[32px] mb-md">Can't come in? Send it by courier in 5 steps</h2>
          <ol className="grid gap-lg md:grid-cols-2 lg:grid-cols-5">
            {SEND_IN_STEPS.map((s, i) => (
              <li key={i} className="border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md p-lg">
                <span aria-hidden className="inline-flex w-10 h-10 rounded-md bg-accent/10 text-accent font-heading font-bold text-[18px] items-center justify-center mb-md">
                  {i + 1}
                </span>
                <p className="font-bold text-[16px] mb-1">{s.title}</p>
                <p className="text-[14px] text-text-muted leading-relaxed">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Parking + transit notes */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl grid gap-lg md:grid-cols-3">
        <article className="border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md p-lg">
          <ParkingCircle size={28} className="text-accent mb-sm" aria-hidden />
          <h3 className="text-[18px] font-bold mb-sm">Parking</h3>
          <p className="text-[15px] text-text-muted leading-relaxed">
            Concord Tower has parking on site. Drive in, park and take the elevator to the 10th floor. WhatsApp us before you set off and we check the part is in stock.
          </p>
        </article>
        <article className="border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md p-lg">
          <Train size={28} className="text-accent mb-sm" aria-hidden />
          <h3 className="text-[18px] font-bold mb-sm">Tram & Metro</h3>
          <p className="text-[15px] text-text-muted leading-relaxed">
            The Palm Jumeirah tram stop is a 3-minute walk. On the Red Line, change to the tram at Sobha Realty or DMCC station. The nearest Metro station, Al Fardan Exchange, is about a 15-minute walk.
          </p>
        </article>
        <article className="border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md p-lg">
          <Clock size={28} className="text-accent mb-sm" aria-hidden />
          <h3 className="text-[18px] font-bold mb-sm">Best time to visit</h3>
          <p className="text-[15px] text-text-muted leading-relaxed">
            Quietest: weekday afternoons 2-5 pm, walk in, sit down, repair starts immediately. Busiest: Saturday 11 am-1 pm and Monday 9-10 am. WhatsApp ahead during peaks to book a slot.
          </p>
        </article>
      </section>

      {/* Reviews */}
      <section className="bg-bg-alt border-y border-border mt-3xl py-3xl">
        <div className="mx-auto max-w-content px-5 md:px-6">
          <h2 className="text-[28px] md:text-[32px] mb-md">What customers from across Dubai say</h2>
          <ReviewGrid reviews={reviews} tone="dark" />
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-md">"MacBook repair near me" FAQ</h2>
        <FAQAccordion items={FAQS} injectSchema />
      </section>

      {/* CTA */}
      <section className="mt-3xl" style={{ background: "#2C3137" }}>
        <div className="mx-auto max-w-content px-5 md:px-6 py-[56px] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-md">
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-accent-bright font-semibold mb-1">Walk in or send it over</p>
            <h2 className="text-white text-[26px] md:text-[32px] font-bold leading-tight max-w-[24ch]">Get a quote on WhatsApp in 30 seconds</h2>
            <p className="text-on-primary-muted text-[16px] max-w-[60ch] leading-relaxed mt-2">
              Send the MacBook model and a photo of the fault on WhatsApp. Then walk in to Concord Tower or send it with a courier you book.
            </p>
          </div>
          <div className="flex flex-wrap gap-sm shrink-0">
            <Button asChild variant="whatsapp" size="lg">
              <a href={withSlash(NAP.whatsappUrl)} target="_blank" rel="noopener noreferrer">
                <MessageCircle aria-hidden /> WhatsApp for a quote
              </a>
            </Button>
            <Button asChild variant="secondary" size="lg" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
              <a href={`tel:${NAP.phoneE164}`}>
                <Phone aria-hidden /> {NAP.phoneDisplay}
              </a>
            </Button>
          </div>
        </div>
      </section>
      </div>
    {/* Lead form (template-audit 2026-09-24: page shipped with none) */}
    <section className="mx-auto max-w-content px-5 md:px-6 mt-[80px]" aria-labelledby="page-lead">
      <h2 id="page-lead" className="text-[26px] md:text-[32px] font-bold mb-md">Get a free quote</h2>
      <LeadForm preset={PRESETS.repair} sourcePath="/macbook-repair-near-me-dubai" defaultDeviceType="MacBook" />
    </section>

    <RelatedArticles path="/macbook-repair-near-me-dubai" />
    </PageShell>
  );
}
