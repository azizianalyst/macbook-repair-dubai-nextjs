"use client";
import { MapPin, Truck, Train, Car, Clock, Star, MessageCircle, Phone, ParkingCircle, Navigation } from "lucide-react";
import { Link } from "@/lib/router-compat";
import { PageShell } from "@/components/layout/PageShell";
import { RelatedArticles } from "@/components/blocks/RelatedArticles";
import { Hero } from "@/components/blocks/Hero";
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
import { NAP } from "@/content/site";

const TRAVEL_TIMES = [
  // ── Closest (≤10 min) ──────────────────────────────────────────────────
  { area: "Dubai Media City",         car: "In the area", pickup: "Same hour" },
  { area: "Internet City",            car: "3 min",       pickup: "Same hour" },
  { area: "Knowledge Village",        car: "4 min",       pickup: "Same hour" },
  { area: "Knowledge Park",           car: "5 min",       pickup: "Same hour" },
  { area: "Al Sufouh",                car: "5 min",       pickup: "Same hour" },
  { area: "Dubai Pearl",              car: "7 min",       pickup: "Same hour" },
  { area: "Sheikh Zayed Road",        car: "9 min",       pickup: "Same hour" },
  // ── 10-20 min ──────────────────────────────────────────────────────────
  { area: "JBR",                      car: "10 min",      pickup: "Same day" },
  { area: "JLT",                      car: "12 min",      pickup: "Same day" },
  { area: "Dubai Marina",             car: "14 min",      pickup: "Same day" },
  { area: "Palm Jumeirah",            car: "15 min",      pickup: "Same day" },
  { area: "Emirates Living",          car: "12 min",      pickup: "Same day" },
  { area: "Jumeirah Heights",         car: "14 min",      pickup: "Same day" },
  { area: "Jumeirah Islands",         car: "16 min",      pickup: "Same day" },
  { area: "The Greens",               car: "11 min",      pickup: "Same day" },
  { area: "The Views",                car: "12 min",      pickup: "Same day" },
  { area: "Commodities Centre",       car: "12 min",      pickup: "Same day" },
  { area: "Tecom",                    car: "12 min",      pickup: "Same day" },
  { area: "Discovery Gardens",        car: "16 min",      pickup: "Same day" },
  { area: "Jumeirah",                 car: "18 min",      pickup: "Same day" },
  { area: "Umm Suqeim",               car: "18 min",      pickup: "Same day" },
  { area: "Al Barsha",                car: "19 min",      pickup: "Same day" },
  { area: "Al Furjan",                car: "19 min",      pickup: "Same day" },
  { area: "Dubai Science Park",       car: "18 min",      pickup: "Same day" },
  // ── 20-30 min ──────────────────────────────────────────────────────────
  { area: "Downtown Dubai",           car: "21 min",      pickup: "Same day" },
  { area: "DIFC",                     car: "27 min",      pickup: "Same day" },
  { area: "Business Bay",             car: "23 min",      pickup: "Same day" },
  { area: "Dubai Hills Estate",       car: "21 min",      pickup: "Same day" },
  { area: "Dubai Hills View",         car: "22 min",      pickup: "Same day" },
  { area: "Al Quoz",                  car: "18 min",      pickup: "Same day" },
  { area: "Motor City",               car: "22 min",      pickup: "Same day" },
  { area: "Dubai Motor City",         car: "22 min",      pickup: "Same day" },
  { area: "Sports City",              car: "21 min",      pickup: "Same day" },
  { area: "Studio City",              car: "22 min",      pickup: "Same day" },
  { area: "Arabian Ranches",          car: "23 min",      pickup: "Same day" },
  { area: "Jumeirah Village Circle",  car: "20 min",      pickup: "Same day" },
  { area: "Bur Dubai",                car: "24 min",      pickup: "Same day" },
  { area: "Al Karama",                car: "24 min",      pickup: "Same day" },
  { area: "Deira",                    car: "29 min",      pickup: "Same day" },
  { area: "Dubai Design District (d3)", car: "26 min",    pickup: "Same day" },
  { area: "Dubai Healthcare City",    car: "26 min",      pickup: "Same day" },
  { area: "Nad Al Sheba",             car: "34 min",      pickup: "Next morning" },
  { area: "Meadows",                  car: "14 min",      pickup: "Same day" },
  { area: "The Villa",                car: "33 min",      pickup: "Next morning" },
  { area: "Sustainable City",         car: "27 min",      pickup: "Same day" },
  { area: "Al Jaddaf",                car: "25 min",      pickup: "Same day" },
  { area: "Al Jafiliya",              car: "27 min",      pickup: "Same day" },
  { area: "Satwa",                    car: "28 min",      pickup: "Same day" },
  // ── 30+ min ────────────────────────────────────────────────────────────
  { area: "Mirdif",                   car: "31 min",      pickup: "Next morning" },
  { area: "Dubai Silicon Oasis",      car: "33 min",      pickup: "Next morning" },
  { area: "Dubai Investment Park",    car: "24 min",      pickup: "Same day" },
  { area: "Dubai Production City",    car: "24 min",      pickup: "Same day" },
  { area: "Dubai South",              car: "33 min",      pickup: "Next morning" },
  { area: "Dubai Land",               car: "25 min",      pickup: "Same day" },
  { area: "International City",       car: "33 min",      pickup: "Next morning" },
  { area: "Arabian Ranches 2",        car: "30 min",      pickup: "Next morning" },
  { area: "Al Warqa",                 car: "35 min",      pickup: "Next morning" },
  { area: "Al Barari",                car: "30 min",      pickup: "Next morning" },
  { area: "Al Mizhar",                car: "40 min",      pickup: "Next morning" },
  { area: "Al Nahda",                 car: "31 min",      pickup: "Next morning" },
  { area: "Jebel Ali",                car: "24 min",      pickup: "Same day" },
  { area: "Dubai Industrial City",    car: "35 min",      pickup: "Next morning" },
  { area: "Remraam",                  car: "26 min",      pickup: "Same day" },
];

const LANDMARKS = [
  { name: "Media City Metro Station", distance: "120 m", note: "Red Line - 2-minute walk across Sheikh Zayed Road via the pedestrian bridge" },
  { name: "Concord Tower lobby",       distance: "0 m",   note: "Take the elevator to the 10th floor, Office #45 is on the right" },
  { name: "Roxy Cinemas Mall of the Emirates", distance: "1.8 km", note: "5-minute drive south on Sheikh Zayed Road" },
  { name: "Burj Al Arab",              distance: "3.5 km", note: "8-minute drive - useful waypoint coming from Jumeirah Beach Road" },
  { name: "Palm Jumeirah Monorail",    distance: "4.2 km", note: "12-minute drive via Al Sufouh Road" },
  { name: "Dubai Internet City Metro", distance: "1.1 km", note: "Walking distance - alternative Red Line stop" },
];

const PICKUP_STEPS = [
  { title: "Send a WhatsApp to 055 741 3706", body: "Tell Shafiq the model, the issue, and your area. He confirms a pickup window within 4 minutes during business hours." },
  { title: "Courier collects within the booked window", body: "The MacBook Repair Dubai courier arrives in a Toyota Innova marked with the workshop logo. ID-checked, insured, and trackable on WhatsApp." },
  { title: "Free diagnosis at the workshop", body: "Shafiq inspects the device the same day. A written quote lands in your WhatsApp within 4 hours of pickup." },
  { title: "Approve the quote, get the repair", body: "Reply 'approved' on WhatsApp. Most repairs finish the same day. You receive a 'ready' message when the device is back on the courier van." },
  { title: "Free delivery, payment on arrival", body: "Courier returns the device to your door. Pay the courier in cash, by card on a portable terminal, or by bank transfer. Warranty up to 12 months card included." },
];

const FAQS = [
  { q: "Where is MacBook Repair Dubai actually located?",
    a: "Office #45, 10th Floor, Concord Tower, Al Sufouh, Dubai Media City. The tower sits directly on Sheikh Zayed Road across from Media City Metro Station. Paid parking on-site (AED 5/hour) and free street parking on Al Sufouh Road behind the tower." },
  { q: "How far are you from Dubai Marina?",
    a: "10 minutes by car via Sheikh Zayed Road exit 32. By Metro: 4 stops on the Red Line from DMCC station. Pickup from any Marina tower is same-day, free." },
  { q: "Do you have a branch in JLT or Downtown?",
    a: "No - single Concord Tower workshop only. The free pickup and delivery service replaces the need for branches: a courier collects from Marina, JLT, Downtown, Palm, JBR, Business Bay, and the rest of Dubai Mainland at no charge." },
  { q: "What's the closest Metro station?",
    a: "Media City Metro on the Red Line, 120 metres from the tower. Walk over the pedestrian bridge across Sheikh Zayed Road, into the Concord Tower lobby, elevator to the 10th floor. Total walk time: 4 minutes." },
  { q: "Is there parking?",
    a: "Yes - paid parking inside Concord Tower (AED 5/hour, AED 25/day max). Free street parking on Al Sufouh Road behind the tower (10-minute walk). Valet parking at the tower lobby for AED 30 flat." },
  { q: "Can I walk in without an appointment?",
    a: "Yes - walk-in welcome any time during opening hours (9 am - 10 pm Mon-Sat). For complex board work, sending a WhatsApp first lets Shafiq pre-order the part so the device is fixed during your visit instead of left overnight." },
  { q: "How long does free pickup take?",
    a: "Within Dubai Marina, JLT, Internet City, Knowledge Village, Al Barsha - same hour during business hours. Downtown, Business Bay, JBR, Palm - same day. Mirdif, Arabian Ranches, Silicon Oasis - next morning." },
  { q: "Do you cover Sharjah and Abu Dhabi?",
    a: "Pickup available for AED 100 each way. Sharjah next-day, Abu Dhabi same-week (Tuesdays and Fridays only - courier runs the route twice weekly)." },
  { q: "What if I'm in a hurry - same-day on-site repair?",
    a: "Walk in with an in-stock part fault (MacBook screen, battery, keyboard, iPhone screen, iPhone battery) and the repair finishes in 40 minutes to 2 hours. Wait in the AC office or grab coffee at the Costa downstairs in the tower lobby." },
  { q: "Are you open weekends?",
    a: "Saturday: full opening hours, 9 am-10 pm. Sunday: storefront closed but WhatsApp answered all day. Monday morning is the busiest hour - book a slot via WhatsApp on Sunday for a guaranteed Monday turnaround." },
];

const REVIEW_INDEXES = [0, 5, 8, 10, 13, 21];

export default function MacBookRepairNearMe() {
  const reviews = REVIEW_INDEXES.map((i) => REVIEWS[i % REVIEWS.length]).filter(Boolean);

  useSeo(
    {
      title: "MacBook Repair Near Me Dubai - Free Pickup Across the City",
      description:
        "MacBook repair near you in Dubai. Free pickup from Marina, JLT, Downtown, Palm, Business Bay. Concord Tower Media City. 10-min from Marina. 055 741 3706.",
      path: "/macbook-repair-near-me",
    },
    [
      localBusiness(),
      organization(),
      webPage({
        title: "MacBook Repair Near Me Dubai",
        description: "Find a MacBook repair specialist near your Dubai address. Free pickup and delivery across all major areas.",
        path: "/macbook-repair-near-me",
        dateModified: "2026-04-01",
        datePublished: "2024-06-01",
      }),
      serviceSchema({
        name: "MacBook Repair Near Me Dubai",
        price: 350,
        timeline: "Same day",
        warranty: "P1Y",
        url: "/macbook-repair-near-me",
        description: "MacBook screen, battery, keyboard, and water damage repair with free door-to-door pickup across Dubai Mainland.",
      }),
    ],
  );

  return (
    <PageShell>
      <div className="bg-bg-alt text-text -mb-[4rem]">
      <Hero
        image={topicForPath("/macbook-repair-near-me")?.src}
        imageAlt={topicForPath("/macbook-repair-near-me")?.alt}
        variant="service"
        tone="dark"
        eyebrow="Free pickup across Dubai"
        title="MacBook Repair Near You in Dubai - Free Pickup Across the City"
        subtitle="Concord Tower in Media City is the workshop. The free door-to-door courier turns 'near me' into anywhere in Dubai Mainland - same-hour pickup from 6 areas, same-day from the rest."
      >
        <p className="mt-md flex flex-wrap items-center gap-md text-[14px] text-text">
          <span className="flex items-center gap-1"><Truck size={16} className="text-accent" aria-hidden /> Free pickup & delivery</span>
          <span className="text-text-muted">·</span>
          <span className="flex items-center gap-1"><Train size={16} className="text-accent" aria-hidden /> 120 m from Media City Metro</span>
          <span className="text-text-muted">·</span>
          <span className="flex items-center gap-1"><Star size={16} className="fill-star text-star" aria-hidden /> 5.0 · 216+ reviews</span>
        </p>
      </Hero>

      <USPStrip tone="dark" />

      <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
        <BreadcrumbTrail tone="dark" trail={[{ name: "Home", path: "/" }, { name: "MacBook Repair Near Me", path: "/macbook-repair-near-me" }]} />
      </section>

      {/* Find us */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
        <h2 className="text-[28px] md:text-[32px] mb-md flex items-center gap-sm">
          <MapPin size={28} className="text-accent" aria-hidden /> Find the workshop
        </h2>
        <LocationBlock tone="dark" />
      </section>

      {/* Areas we cover - free pickup & delivery */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-md">Areas we cover across Dubai</h2>
        <p className="text-[16px] text-text-muted max-w-[70ch] mb-lg">
          Free door-to-door pickup and same-day delivery from every Dubai neighbourhood. Tap your area for local pickup windows and drive times.
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
            <Link key={href} to={href} className="px-3.5 py-1.5 border border-border bg-bg-card rounded-md text-[14px] text-accent hover:bg-accent/15 hover:border-accent/40 transition-colors">MacBook Repair {label} →</Link>
          ))}
        </div>
      </section>

      {/* Landmarks */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-md">Landmarks near the workshop</h2>
        <p className="text-[16px] text-text-muted max-w-[70ch] mb-lg">
          Six landmarks within 5 km. Use any of them as a waypoint when navigating from your area.
        </p>
        <div className="grid gap-md md:grid-cols-2">
          {LANDMARKS.map((l) => (
            <article key={l.name} className="border border-border bg-bg-card rounded-md p-lg flex gap-md">
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
          Off-peak driving times to Concord Tower Media City. Add 10-20 minutes during 8-10 am and 5-7 pm rush windows. Free pickup column shows the courier turnaround.
        </p>
        <div className="overflow-x-auto border border-border rounded-md bg-bg-card">
          <table className="w-full text-[14px] min-w-[520px]">
            <caption className="sr-only">Travel times from Dubai areas to MacBook Repair Dubai workshop, plus free pickup turnaround.</caption>
            <thead className="bg-bg-card">
              <tr className="text-left">
                <th className="px-md py-sm font-semibold">Area</th>
                <th className="px-md py-sm font-semibold">Drive time</th>
                <th className="px-md py-sm font-semibold">Free pickup turnaround</th>
              </tr>
            </thead>
            <tbody>
              {TRAVEL_TIMES.map((t, i) => (
                <tr key={t.area} className={i % 2 ? "bg-bg-alt" : ""}>
                  <td className="px-md py-sm font-semibold">{t.area}</td>
                  <td className="px-md py-sm mono text-accent">{t.car}</td>
                  <td className="px-md py-sm mono text-text-muted">{t.pickup}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Pickup process */}
      <section className="bg-bg-alt border-y border-border mt-3xl py-3xl">
        <div className="mx-auto max-w-content px-5 md:px-6">
          <h2 className="text-[28px] md:text-[32px] mb-md">How free pickup works - 5 steps</h2>
          <ol className="grid gap-lg md:grid-cols-2 lg:grid-cols-5">
            {PICKUP_STEPS.map((s, i) => (
              <li key={i} className="border border-border bg-bg-card rounded-md p-lg">
                <span aria-hidden className="inline-flex w-10 h-10 rounded-md bg-accent/15 text-accent font-heading font-bold text-[18px] items-center justify-center mb-md">
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
        <article className="border border-border bg-bg-card rounded-md p-lg">
          <ParkingCircle size={28} className="text-accent mb-sm" aria-hidden />
          <h3 className="text-[18px] font-bold mb-sm">Parking</h3>
          <p className="text-[15px] text-text-muted leading-relaxed">
            Paid tower parking AED 5/hour, AED 25/day cap. Free street parking on Al Sufouh Road (8-minute walk). Valet at the tower lobby AED 30 flat. EV charging (3 stations) on level B2.
          </p>
        </article>
        <article className="border border-border bg-bg-card rounded-md p-lg">
          <Train size={28} className="text-accent mb-sm" aria-hidden />
          <h3 className="text-[18px] font-bold mb-sm">Metro & bus</h3>
          <p className="text-[15px] text-text-muted leading-relaxed">
            Media City Metro (Red Line) is 120 metres away. Bus routes 8, 88, and X28 stop at Media City Metro. RTA taxis queue 24/7 at the tower entrance.
          </p>
        </article>
        <article className="border border-border bg-bg-card rounded-md p-lg">
          <Clock size={28} className="text-accent mb-sm" aria-hidden />
          <h3 className="text-[18px] font-bold mb-sm">Best time to visit</h3>
          <p className="text-[15px] text-text-muted leading-relaxed">
            Quietest: weekday afternoons 2-5 pm, walk in, sit down, repair starts immediately. Busiest: Saturday 11 am-1 pm and Monday 9-10 am. WhatsApp ahead during peaks for a guaranteed slot.
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
        <FAQAccordion items={FAQS} injectSchema tone="dark" />
      </section>

      {/* CTA */}
      <section className="mt-3xl" style={{ background: "#2C3137" }}>
        <div className="mx-auto max-w-content px-5 md:px-6 py-[56px] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-md">
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-accent-bright font-semibold mb-1">Free pickup across Dubai</p>
            <h2 className="text-white text-[26px] md:text-[32px] font-bold leading-tight max-w-[24ch]">Book a free pickup in 30 seconds</h2>
            <p className="text-on-primary-muted text-[16px] max-w-[60ch] leading-relaxed mt-2">
              Send your area and the MacBook model on WhatsApp. Pickup window confirmed within 4 minutes.
            </p>
          </div>
          <div className="flex flex-wrap gap-sm shrink-0">
            <Button asChild variant="whatsapp" size="lg">
              <a href={NAP.whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle aria-hidden /> Book free pickup
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
    <RelatedArticles path="/macbook-repair-near-me" />
    </PageShell>
  );
}
