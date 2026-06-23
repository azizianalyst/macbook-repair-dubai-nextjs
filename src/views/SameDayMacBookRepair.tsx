"use client";
import { Zap, Clock, MapPin, Star, Phone, MessageCircle, CheckCircle2, Truck, Shield } from "lucide-react";
import { QuickAnswer } from "@/components/blocks/QuickAnswer";
import { PageShell } from "@/components/layout/PageShell";
import { RelatedArticles } from "@/components/blocks/RelatedArticles";
import { Hero } from "@/components/blocks/Hero";
import { USPStrip } from "@/components/blocks/USPStrip";
import { BreadcrumbTrail } from "@/components/blocks/BreadcrumbTrail";
import { ReviewGrid } from "@/components/blocks/ReviewGrid";
import { FAQAccordion } from "@/components/blocks/FAQAccordion";
import { VsAppleStore } from "@/components/blocks/VsAppleStore";
import { LocationBlock } from "@/components/blocks/LocationBlock";
import { useSeo } from "@/hooks/use-seo";
import { REVIEWS } from "@/content/reviews";
import { NAP } from "@/content/site";

const SAME_DAY_REPAIRS = [
  { label: "Screen replacement (non-OLED)",   price: "From AED 499",  hours: "2–4 hrs",  note: "MacBook Air M1/M2/M3, MacBook Pro 13\". IPS panel, in-stock." },
  { label: "Battery replacement",              price: "From AED 450",  hours: "1–2 hrs",  note: "All Air and Pro models M1–M5, Intel 2015–2019." },
  { label: "Keyboard replacement",             price: "From AED 550",  hours: "2–3 hrs",  note: "Butterfly (2016–2019) and scissor keyboards." },
  { label: "Trackpad replacement",             price: "From AED 450",  hours: "2–3 hrs",  note: "Force Touch trackpad, all models 2015–2024." },
  { label: "USB-C charging port repair",       price: "From AED 350",  hours: "1–2 hrs",  note: "Single port or Thunderbolt board repair." },
  { label: "RAM / SSD diagnostic",             price: "Free",          hours: "30 min",   note: "Full hardware diagnostic + written report." },
  { label: "macOS reinstall / software fix",   price: "From AED 200",  hours: "1–2 hrs",  note: "Internet Recovery, corrupted OS, boot loop." },
  { label: "Fan cleaning / thermal paste",     price: "From AED 250",  hours: "1 hr",     note: "Overheating Intel MacBook, performance restored." },
];

const NOT_SAME_DAY = [
  { label: "Logic board repair", note: "Requires micro-soldering, 2 to 5 business days depending on fault." },
  { label: "Water damage",       note: "Ultrasonic clean + board inspection, 1 to 3 days." },
  { label: "MacBook Pro 16\" OLED screen", note: "Panel sourced on request, 1 to 3 days lead time." },
  { label: "Data recovery",      note: "Depends on drive state, 1 to 7 days." },
];

const ZONES = [
  { area: "Dubai Media City / JLT / JBR",      pickup: "Free", time: "Same day" },
  { area: "Downtown / Business Bay / DIFC",     pickup: "Free", time: "Same day" },
  { area: "Jumeirah / Umm Suqeim / Al Quoz",   pickup: "Free", time: "Same day" },
  { area: "Deira / Bur Dubai / Karama",         pickup: "Free", time: "Same day" },
  { area: "Dubai Hills / Mirdif / Al Barsha",   pickup: "Free", time: "Same day" },
  { area: "Sharjah / Abu Dhabi",                pickup: "AED 100 each way", time: "Next day" },
];

const STEPS = [
  { icon: MessageCircle, title: "WhatsApp us",       body: "Send a photo and model number to 055 741 3706. Get a quote in under 4 minutes during business hours." },
  { icon: Truck,         title: "Free pickup",        body: "A courier collects your MacBook from anywhere across Dubai Mainland, no delivery charge." },
  { icon: Zap,           title: "Same-day repair",    body: "Screen, battery, keyboard, trackpad, and ports are all repaired the same day your device arrives." },
  { icon: Shield,        title: "Warranty handed over", body: "Written warranty of up to 12 months. MacBook returned the same day or next morning." },
];

const FAQS = [
  { q: "Which MacBook repairs are genuinely same-day in Dubai?",
    a: "Screen replacement (MacBook Air and Pro 13\"), battery, keyboard, trackpad, USB-C charging port, fan cleaning, thermal paste, and macOS software repair are all same-day when your MacBook arrives before 2 pm. Logic board, water damage, and 16\" OLED screens take 1–5 days." },
  { q: "How does the free MacBook pickup work in Dubai?",
    a: "WhatsApp 055 741 3706 with your model and fault. We confirm a fixed price, then dispatch a courier to collect from your home or office across Dubai Mainland. Repair is done the same day; MacBook returned next morning. No charge for pickup or delivery." },
  { q: "Do you do MacBook repair at home in Dubai?",
    a: "We pick up and return the MacBook for free across Dubai Mainland, same practical outcome as an on-site visit. The workshop at Concord Tower, Dubai Media City has the tools, parts stock, and cleanroom conditions for quality repairs that a home visit can't match. For corporate bulk repairs (5+ devices), on-site visits can be arranged." },
  { q: "How much does same-day MacBook repair cost in Dubai?",
    a: "Screen from AED 499, battery from AED 450, keyboard from AED 550. Diagnosis is free. WhatsApp 055 741 3706 with your exact model and fault for a fixed quote, no hidden fees, no surprises." },
  { q: "What time do I need to drop off my MacBook for same-day repair?",
    a: "Drop-off or pickup before 2 pm guarantees same-day completion for screen, battery, keyboard, and trackpad jobs. After 2 pm those jobs finish the following morning. We're open Monday to Saturday 9 am to 10 pm at Concord Tower, Dubai Media City." },
  { q: "Is a same-day repair covered by a warranty?",
    a: "Yes, every repair carries a written warranty of up to 12 months, including same-day jobs. Battery replacement carries a 3-month warranty with an 80% capacity guarantee. The warranty card lists the repair, the parts used, and the serial number." },
  { q: "Can you repair a MacBook the same day if bought in the USA or UK?",
    a: "Yes. MacBook hardware is identical globally, only the power adapter differs. We carry parts for all internationally-sourced MacBook Air and Pro models from 2015 onward, including US-layout keyboards." },
];

const FEATURED_REVIEW_INDEXES = [0, 3, 8, 14, 19, 26];

export default function SameDayMacBookRepair() {
  const reviews = FEATURED_REVIEW_INDEXES.map((i) => REVIEWS[i % REVIEWS.length]).filter(Boolean);

  useSeo({
    title: "Same-Day MacBook Repair Dubai. Screen from AED 499, Battery from AED 450",
    description:
      "Same-day MacBook repair in Dubai. Screen from AED 499, battery from AED 450. Free pickup across Dubai. Drop off by 2 pm, back the same day. Call 055 741 3706.",
    path: "/same-day-macbook-repair-dubai",
  });

  return (
    <PageShell>
      <div className="bg-bg-alt text-text -mb-[4rem]">
        <Hero
          image={undefined}
          imageAlt="Same-day MacBook repair Dubai, screen and battery"
          variant="device"
          tone="dark"
          eyebrow="Same-day MacBook repair · Dubai · Since 2004"
          title="Same-Day MacBook Repair Dubai"
          subtitle="Screen from AED 499, battery from AED 450. Free pickup across Dubai. Drop off before 2 pm, back the same day."
        >
          <p className="mt-md flex flex-wrap items-center gap-md text-[14px] text-text-muted">
            <span className="flex items-center gap-1"><Star size={16} className="fill-star text-star" aria-hidden /> 5.0 · 215+ reviews</span>
            <span>·</span>
            <span>All Air & Pro models</span>
            <span>·</span>
            <span>Free pickup · Same-day return</span>
          </p>
        </Hero>

        <USPStrip tone="dark" />

        <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
          <BreadcrumbTrail
            tone="dark"
            trail={[
              { name: "Home", path: "/" },
              { name: "MacBook Repair", path: "/" },
              { name: "Same-Day Repair Dubai", path: "/same-day-macbook-repair-dubai" },
            ]}
          />
        </section>

        <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
          <QuickAnswer
            tone="dark"
            question="Can I get my MacBook repaired the same day in Dubai?"
            answer="Yes. Screen (from AED 499), battery (from AED 450), keyboard, trackpad, and USB-C port are all same-day repairs at Concord Tower, Dubai Media City, drop off or free pickup before 2 pm. Logic board and water damage take 1–5 days. Free diagnosis, warranty up to 12 months. WhatsApp 055 741 3706."
          />
        </section>

        {/* Same-day repair list */}
        <section aria-labelledby="same-day-list" className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <h2 id="same-day-list" className="text-[28px] md:text-[32px] mb-sm">Same-day repairs (drop off by 2 pm)</h2>
          <p className="text-[16px] text-text-muted max-w-[70ch] mb-lg">
            These jobs are in-stock and completed the same day your MacBook arrives.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-[14px] border-collapse">
              <thead>
                <tr className="border-b border-border text-left text-text-muted">
                  <th className="py-sm pr-lg font-semibold">Repair</th>
                  <th className="py-sm pr-lg font-semibold">Price</th>
                  <th className="py-sm pr-lg font-semibold">Time</th>
                  <th className="py-sm font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                {SAME_DAY_REPAIRS.map((row) => (
                  <tr key={row.label} className="border-b border-border">
                    <td className="py-sm pr-lg font-medium">{row.label}</td>
                    <td className="py-sm pr-lg text-accent font-semibold">{row.price}</td>
                    <td className="py-sm pr-lg text-text-muted whitespace-nowrap">
                      <span className="inline-flex items-center gap-1">
                        <Clock size={12} aria-hidden /> {row.hours}
                      </span>
                    </td>
                    <td className="py-sm text-text-muted">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Not same-day */}
          <div className="mt-xl border border-border rounded-md p-lg bg-bg-card">
            <h3 className="text-[17px] font-bold mb-md">Repairs that take 1–5 days</h3>
            <ul className="space-y-sm">
              {NOT_SAME_DAY.map((item) => (
                <li key={item.label} className="flex gap-sm text-[14px]">
                  <span className="font-semibold shrink-0">{item.label}:</span>
                  <span className="text-text-muted">{item.note}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-bg-alt border-y border-border mt-3xl py-3xl">
          <div className="mx-auto max-w-content px-5 md:px-6">
            <h2 className="text-[28px] md:text-[32px] mb-md">How same-day MacBook repair works</h2>
            <div className="grid gap-md md:grid-cols-4">
              {STEPS.map(({ icon: Icon, title, body }) => (
                <article key={title} className="border border-border bg-bg-card rounded-md p-lg">
                  <Icon size={28} className="text-accent mb-sm" aria-hidden />
                  <h3 className="text-[16px] font-bold mb-xs">{title}</h3>
                  <p className="text-[14px] text-text-muted leading-relaxed">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Pickup zones */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <h2 className="text-[28px] md:text-[32px] mb-sm">Free pickup across Dubai</h2>
          <p className="text-[16px] text-text-muted max-w-[70ch] mb-lg">
            We collect from home or office at no charge. WhatsApp your location, courier arrives within 2–4 hours.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-[14px] border-collapse">
              <thead>
                <tr className="border-b border-border text-left text-text-muted">
                  <th className="py-sm pr-lg font-semibold">Area</th>
                  <th className="py-sm pr-lg font-semibold">Pickup fee</th>
                  <th className="py-sm font-semibold">Turnaround</th>
                </tr>
              </thead>
              <tbody>
                {ZONES.map((zone) => (
                  <tr key={zone.area} className="border-b border-border">
                    <td className="py-sm pr-lg font-medium">{zone.area}</td>
                    <td className="py-sm pr-lg text-text-muted">{zone.pickup}</td>
                    <td className="py-sm text-text-muted">{zone.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Why us vs Apple Store */}
        <VsAppleStore tone="dark" />

        {/* CTA */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <div className="border border-border bg-bg-card rounded-md p-xl flex flex-col md:flex-row md:items-center gap-lg">
            <div className="flex-1">
              <h2 className="text-[22px] font-bold mb-sm">Need your MacBook repaired today?</h2>
              <p className="text-[15px] text-text-muted">WhatsApp with your model and fault, fixed quote in under 4 minutes.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-sm shrink-0">
              <a
                href={NAP.whatsappUrl}
                className="inline-flex items-center gap-sm bg-accent text-white font-semibold px-lg py-sm rounded-md text-[15px] hover:bg-accent/90"
              >
                <MessageCircle size={18} aria-hidden /> WhatsApp Now
              </a>
              <a
                href={`tel:${NAP.phoneE164}`}
                className="inline-flex items-center gap-sm border border-border bg-bg font-semibold px-lg py-sm rounded-md text-[15px] hover:bg-bg-card"
              >
                <Phone size={18} aria-hidden /> {NAP.phoneDisplay}
              </a>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="bg-bg-alt border-y border-border mt-3xl py-3xl">
          <div className="mx-auto max-w-content px-5 md:px-6">
            <h2 className="text-[28px] md:text-[32px] mb-md">What customers say about our same-day service</h2>
            <ReviewGrid reviews={reviews} tone="dark" />
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <h2 className="text-[28px] md:text-[32px] mb-md">Same-day MacBook repair FAQ</h2>
          <FAQAccordion items={FAQS} injectSchema tone="dark" />
        </section>

        {/* Related */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <h2 className="text-[22px] font-bold mb-md">Related MacBook repair services</h2>
          <div className="flex flex-wrap gap-sm">
            {[
              { label: "MacBook Screen Repair Dubai", href: "/macbook-screen-repair-dubai" },
              { label: "MacBook Battery Replacement Dubai", href: "/macbook-battery-replacement-dubai" },
              { label: "MacBook Keyboard Repair Dubai", href: "/macbook-keyboard-repair-dubai" },
              { label: "MacBook Water Damage Repair Dubai", href: "/macbook-water-damage-repair-dubai" },
              { label: "MacBook Repair Near Me Dubai", href: "/mac-repair-dubai" },
              { label: "MacBook Repair Dubai", href: "/" },
            ].map(({ label, href }) => (
              <a key={href} href={href} className="border border-border rounded-md px-md py-xs text-[14px] hover:bg-bg-card transition-colors">
                {label}
              </a>
            ))}
          </div>
        </section>

        {/* Location */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <h2 className="text-[28px] md:text-[32px] mb-lg">Find us in Dubai Media City</h2>
          <LocationBlock tone="dark" />
        </section>
      </div>
      <RelatedArticles path="/same-day-macbook-repair-dubai" />
    </PageShell>
  );
}
