"use client";
import { Star, MessageCircle, Phone, Truck, Check, MapPin, Wrench, Headphones } from "lucide-react";
import { Link } from "@/lib/router-compat";
import { PageShell } from "@/components/layout/PageShell";
import { Hero } from "@/components/blocks/Hero";
import { topicForPath } from "@/lib/page-images";
import { USPStrip } from "@/components/blocks/USPStrip";
import { BreadcrumbTrail } from "@/components/blocks/BreadcrumbTrail";
import { FAQAccordion } from "@/components/blocks/FAQAccordion";
import { LocationBlock } from "@/components/blocks/LocationBlock";
import { Button } from "@/components/ui/button";
import { useSeo } from "@/hooks/use-seo";
import { localBusiness, organization, service as serviceSchema, breadcrumbs, itemList } from "@/lib/schema";
import { NAP } from "@/content/site";

const STEPS = [
  { title: "Message us your model and location", body: "Send your MacBook model and your area on WhatsApp or call 055 741 3706. Tell us the fault and we point you at a likely fix and a price range before anyone moves." },
  { title: "Free same-hour or same-day pickup", body: "A technician comes to your office or home anywhere on Dubai mainland and collects the MacBook. Pickup and delivery are free, no callout charge." },
  { title: "Repair at the Dubai Media City workshop", body: "The MacBook is diagnosed and repaired at our Concord Tower workshop in Dubai Media City, where the tools, parts and benches live. Diagnosis is free and you approve the quote before any work starts." },
  { title: "Tested before it leaves", body: "Every repair is bench-tested - screen, battery, keyboard, ports and boot - so the MacBook works when it reaches you, not just when it leaves." },
  { title: "Returned to your door", body: "We deliver the repaired MacBook back to the same address, free. Most common repairs are completed and returned the same day." },
];

const HANDLED = [
  { title: "Screen repair", body: "Cracked, flickering or black displays - genuine and high-grade compatible panels, see MacBook screen repair." },
  { title: "Battery replacement", body: "Swollen, draining or no-charge batteries swapped and health-tested, see MacBook battery replacement." },
  { title: "Keyboard and trackpad", body: "Dead, sticky or repeating keys and unresponsive trackpads replaced." },
  { title: "Charging and ports", body: "MagSafe, USB-C and charging faults diagnosed and fixed at board or port level." },
  { title: "Liquid damage", body: "Spill cleaning, corrosion treatment and board-level recovery to save the MacBook and your data." },
  { title: "Software and upgrades", body: "macOS crashes, boot loops, storage and RAM upgrades, and performance tuning - the same software, hardware and upgrade work the site has always covered." },
];

const AREAS = ["Dubai Marina", "Downtown Dubai", "JBR", "JLT", "Business Bay", "Dubai Internet City", "Dubai Media City", "Palm Jumeirah"];

const FAQS = [
  { q: "Is pickup and delivery really free for onsite MacBook repair?",
    a: "Yes. Pickup and delivery are free across Dubai mainland, with no callout charge. A technician collects the MacBook from your office or home, it is repaired at our Dubai Media City workshop, and it is returned to the same address at no extra cost. Diagnosis is free too." },
  { q: "How fast can you collect my MacBook?",
    a: "Collection is usually same-hour or same-day across Dubai mainland once you message us your area and model on WhatsApp at 055 741 3706. We run Monday to Saturday, 9 am to 10 pm, so evening pickups after work are normal." },
  { q: "Do you repair at my office, or take the MacBook away?",
    a: "Quick checks and software fixes can be done at your location. Most hardware repairs - screen, battery, keyboard, charging, liquid damage - are done faster and more safely at our Concord Tower workshop in Dubai Media City, where the parts, tools and test benches are. Either way, collection and return are free." },
  { q: "Can a MacBook repair be done the same day?",
    a: "Most common repairs such as screen and battery replacement are completed and returned the same day when the part is in stock. Liquid damage and board-level work can take longer, and we tell you the realistic timeline before you approve anything." },
  { q: "Which Dubai areas do you cover for onsite collection?",
    a: "We collect and deliver free across Dubai mainland, including Dubai Marina, Downtown Dubai, JBR, JLT, Business Bay, Dubai Internet City, Dubai Media City and Palm Jumeirah. See MacBook repair near me for the full list of communities we serve." },
  { q: "Is the diagnosis free?",
    a: "Yes, diagnosis is free. We tell you what is wrong and quote a fixed price on WhatsApp before any work begins. Repairs are priced per service and you approve the quote first, so there is no surprise bill." },
  { q: "Do you cover Sharjah or Abu Dhabi?",
    a: "Free pickup and delivery applies to Dubai mainland. For an address in Sharjah, Abu Dhabi or another emirate, message us your location on WhatsApp at 055 741 3706 and we will tell you what we can arrange for your area." },
  { q: "What warranty comes with an onsite MacBook repair?",
    a: "Every repair is backed by our own 12-month written warranty covering the parts replaced and the workmanship. The warranty is the same whether you visit the workshop or use free pickup and delivery." },
  { q: "How much does an onsite MacBook repair cost?",
    a: "Pickup, delivery and diagnosis are free. Repairs are priced per service - screen, battery, keyboard and so on - and quoted on WhatsApp before any work starts. You only pay for the repair itself, never for the visit." },
];

export default function OnsiteMacBookRepair() {
  useSeo(
    {
      title: "Onsite MacBook Repair Dubai | MacBook Repair Dubai",
      description:
        "Doorstep MacBook repair across Dubai. Free pickup and delivery, free diagnosis, same-day turnaround, 12-month warranty. Call 055 741 3706.",
      path: "/onsite-macbook-repair-dubai",
    },
    [
      localBusiness(),
      organization(),
      serviceSchema({
        name: "Onsite MacBook Repair Dubai",
        price: 0,
        timeline: "Same-day on most repairs",
        warranty: "P1Y",
        url: "/onsite-macbook-repair-dubai",
        description: "Onsite and doorstep MacBook repair across Dubai - free pickup and delivery on Dubai mainland, free diagnosis, repairs priced per service and a 12-month warranty.",
      }),
      itemList({
        name: "What we handle onsite",
        items: HANDLED.map((i) => ({ name: i.title, url: "/onsite-macbook-repair-dubai", description: i.body })),
      }),
      breadcrumbs([
        { name: "Home", path: "/" },
        { name: "MacBook Repair", path: "/apple-repair-dubai" },
        { name: "Onsite Repair", path: "/onsite-macbook-repair-dubai" },
      ]),
    ],
  );

  return (
    <PageShell>
      <div className="bg-bg-alt text-text -mb-[4rem]">
      <Hero
        image={topicForPath("/onsite-macbook-repair-dubai")?.src}
        imageAlt={topicForPath("/onsite-macbook-repair-dubai")?.alt}
        variant="service"
        tone="dark"
        eyebrow="Onsite MacBook Repair · Dubai"
        title="Onsite MacBook Repair and Support in Dubai"
        subtitle="Stay at your desk - we come to you. Free pickup and delivery across Dubai mainland, free diagnosis, and most repairs returned the same day. No callout charge."
      >
        <p className="mt-md flex flex-wrap items-center gap-md text-[14px] text-text-muted">
          <span className="flex items-center gap-1"><Star size={16} className="fill-star text-star" aria-hidden /> 5.0 · 215+ reviews</span>
          <span>·</span>
          <span>Free pickup across Dubai</span>
          <span>·</span>
          <span>Repairing Apple hardware since 2004</span>
        </p>
      </Hero>

      <USPStrip tone="dark" />

      <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
        <BreadcrumbTrail tone="dark" trail={[
          { name: "Home", path: "/" },
          { name: "MacBook Repair", path: "/apple-repair-dubai" },
          { name: "Onsite Repair", path: "/onsite-macbook-repair-dubai" },
        ]} />
      </section>

      <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
        <p className="text-[18px] leading-relaxed max-w-[75ch] mb-md">
          <strong>MacBook Repair Dubai</strong> brings the workshop to you. If you do not have time to leave your office or home, a technician comes to your location, collects your MacBook, repairs it and returns it safely - all with <strong>free pickup and delivery across Dubai mainland</strong> and <strong>free diagnosis</strong>. Whether it is a software crash, a hardware failure or an upgrade, you get the same expert service that has run on Apple hardware since 2004, without the trip across town.
        </p>
        <p className="text-[16px] text-text-muted leading-relaxed max-w-[75ch] m-0">
          There is no callout charge. Repairs are priced per service, diagnosed free, and quoted on WhatsApp before any work starts.
        </p>
      </section>

      {/* How onsite works */}
      <section className="bg-bg-alt border-y border-border mt-3xl py-3xl">
        <div className="mx-auto max-w-content px-5 md:px-6">
          <h2 className="text-[28px] md:text-[32px] mb-md flex items-center gap-sm">
            <Truck size={28} className="text-accent" aria-hidden /> How onsite MacBook repair works
          </h2>
          <ol className="grid gap-md md:grid-cols-2 lg:grid-cols-3 list-none p-0 m-0">
            {STEPS.map((s, i) => (
              <li key={s.title} className="border border-border bg-bg-card rounded-md p-lg">
                <span className="mono text-[13px] text-accent">Step {i + 1}</span>
                <h3 className="text-[17px] font-bold mb-sm mt-1">{s.title}</h3>
                <p className="text-[14px] text-text-muted leading-relaxed m-0">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* What we handle */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-md flex items-center gap-sm">
          <Wrench size={28} className="text-accent" aria-hidden /> What we handle onsite and at your doorstep
        </h2>
        <p className="text-[16px] text-text-muted max-w-[70ch] mb-lg">
          The same repairs we do at the workshop, collected and returned free. Start with <Link to="/macbook-screen-repair-dubai" className="text-accent hover:underline">MacBook screen repair</Link> or <Link to="/macbook-battery-replacement-dubai" className="text-accent hover:underline">MacBook battery replacement</Link>, the two most common doorstep jobs.
        </p>
        <div className="grid gap-md md:grid-cols-2 lg:grid-cols-3">
          {HANDLED.map((i) => (
            <article key={i.title} className="border border-border bg-bg-card rounded-md p-lg">
              <h3 className="text-[17px] font-bold mb-sm flex items-start gap-2"><Check size={18} className="text-accent mt-1 shrink-0" aria-hidden /> {i.title}</h3>
              <p className="text-[14px] text-text-muted leading-relaxed m-0">{i.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Coverage areas */}
      <section className="bg-bg-alt border-y border-border mt-3xl py-3xl">
        <div className="mx-auto max-w-content px-5 md:px-6">
          <h2 className="text-[28px] md:text-[32px] mb-md flex items-center gap-sm">
            <MapPin size={28} className="text-accent" aria-hidden /> Areas we collect from
          </h2>
          <p className="text-[16px] text-text-muted max-w-[70ch] mb-lg">
            Free collection and return across Dubai mainland, including these areas. Outside the list? <Link to="/macbook-repair-near-me" className="text-accent hover:underline">See MacBook repair near me</Link> for every community we serve.
          </p>
          <ul className="grid gap-sm grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 list-none p-0 m-0">
            {AREAS.map((a) => (
              <li key={a} className="border border-border bg-bg-card rounded-md px-md py-sm text-[15px] font-semibold flex items-center gap-2">
                <MapPin size={16} className="text-accent shrink-0" aria-hidden /> {a}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why us */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-md flex items-center gap-sm">
          <Headphones size={28} className="text-accent" aria-hidden /> Why book onsite with us
        </h2>
        <div className="grid gap-md md:grid-cols-3">
          {[
            { title: "Free pickup, free diagnosis", body: "No callout charge and no diagnosis fee. We collect, diagnose and quote before you commit to anything." },
            { title: "Same-day on most repairs", body: "Common screen and battery jobs are collected, repaired and returned the same day across Dubai mainland." },
            { title: "Workshop-grade, not roadside", body: "Hardware repairs happen at our Dubai Media City workshop with proper tools and test benches, then come back to your door - backed by a 12-month written warranty." },
          ].map((c) => (
            <article key={c.title} className="border border-border bg-bg-card rounded-md p-lg">
              <h3 className="text-[18px] font-bold mb-sm">{c.title}</h3>
              <p className="text-[15px] text-text-muted leading-relaxed m-0">{c.body}</p>
            </article>
          ))}
        </div>
        <p className="text-[15px] text-text-muted leading-relaxed max-w-[70ch] mt-lg m-0">
          Prefer to talk it through first? <Link to="/contact" className="text-accent hover:underline">Contact us</Link> with your model and area and we will arrange a pickup that fits your schedule.
        </p>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-md">Onsite MacBook repair FAQ</h2>
        <FAQAccordion items={FAQS} injectSchema tone="dark" />
      </section>

      {/* Location */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-lg">Where we're based</h2>
        <LocationBlock tone="dark" />
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl mb-3xl">
        <div className="relative overflow-hidden border border-border bg-bg-card rounded-md p-xl md:p-2xl flex flex-col items-start gap-md">
          <div aria-hidden className="pointer-events-none absolute -top-16 -right-10 h-[20rem] w-[20rem] rounded-full bg-accent/15 blur-3xl" />
          <h2 className="relative text-text text-[28px] md:text-[32px] max-w-[30ch]">Book a free MacBook pickup across Dubai</h2>
          <p className="relative text-text-muted text-[16px] max-w-[60ch]">
            Message your MacBook model and your area and we will arrange same-hour or same-day collection. Free pickup, free delivery, free diagnosis - you only pay for the repair, quoted before we start.
          </p>
          <div className="relative flex flex-wrap gap-sm">
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
    </PageShell>
  );
}
