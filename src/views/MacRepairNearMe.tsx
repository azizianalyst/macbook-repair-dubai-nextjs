"use client";
import { MapPin, Clock, Star, Phone, MessageCircle, Truck, Laptop, Monitor, HardDrive } from "lucide-react";
import { QuickAnswer } from "@/components/blocks/QuickAnswer";
import { PageShell } from "@/components/layout/PageShell";
import { RelatedArticles } from "@/components/blocks/RelatedArticles";
import { Hero } from "@/components/blocks/Hero";
import { USPStrip } from "@/components/blocks/USPStrip";
import { BreadcrumbTrail } from "@/components/blocks/BreadcrumbTrail";
import { ReviewGrid } from "@/components/blocks/ReviewGrid";
import { FAQAccordion } from "@/components/blocks/FAQAccordion";
import { LocationBlock } from "@/components/blocks/LocationBlock";
import { useSeo } from "@/hooks/use-seo";
import { REVIEWS } from "@/content/reviews";
import { NAP } from "@/content/site";

const REPAIRS = [
  { icon: Laptop,    label: "MacBook screen repair",      price: "From AED 499",  time: "Same day",  note: "Air & Pro 13\". IPS panels in stock" },
  { icon: Laptop,    label: "MacBook battery replacement", price: "From AED 450",  time: "1–2 hrs",   note: "All M1–M5 and Intel models" },
  { icon: Laptop,    label: "MacBook keyboard repair",     price: "From AED 550",  time: "2–3 hrs",   note: "Butterfly and scissor keyboards" },
  { icon: Laptop,    label: "MacBook water damage",        price: "From AED 500",  time: "1–3 days",  note: "Ultrasonic clean + board repair" },
  { icon: Laptop,    label: "MacBook logic board repair",  price: "From AED 800",  time: "2–5 days",  note: "Component-level micro-soldering" },
  { icon: Monitor,   label: "iMac screen repair",          price: "From AED 800",  time: "2–4 days",  note: "21.5\", 24\" and 27\" Retina 5K" },
  { icon: Monitor,   label: "iMac SSD upgrade",            price: "From AED 600",  time: "Same day",  note: "Fusion to SSD, any capacity" },
  { icon: HardDrive, label: "Mac mini / Studio repair",    price: "From AED 400",  time: "Same day",  note: "M1–M4 Mac mini and Studio" },
];

const AREAS = [
  { area: "Dubai Media City / JLT / JBR",    time: "Free pickup · 2–4 hrs" },
  { area: "Downtown / DIFC / Business Bay",   time: "Free pickup · 2–4 hrs" },
  { area: "Jumeirah / Al Quoz / Umm Suqeim", time: "Free pickup · 2–4 hrs" },
  { area: "Deira / Bur Dubai / Karama",       time: "Free pickup · 2–4 hrs" },
  { area: "Dubai Hills / Al Barsha / Mirdif", time: "Free pickup · 2–4 hrs" },
  { area: "Sharjah / Abu Dhabi",              time: "AED 100 each way" },
];

const FAQS = [
  { q: "Where is the nearest Mac repair shop to me in Dubai?",
    a: "The closest Mac repair specialist in Dubai is at Concord Tower, Office #45, 10th Floor, Al Sufouh, Dubai Media City, a 5-minute walk from Media City Metro. If travelling is inconvenient, free pickup is available from your home or office across all Dubai Mainland areas. WhatsApp 055 741 3706 with your Mac model and fault." },
  { q: "Can you repair my Mac near me on the same day in Dubai?",
    a: "MacBook battery, keyboard, trackpad, charging port, and software faults are all same-day when your Mac arrives before 2 pm. Screen replacement for Air and 13\" Pro is same-day. Logic board and water damage take 2–5 days. Drop in to Concord Tower or request free pickup from anywhere in Dubai." },
  { q: "Do you offer free Mac pickup near me in Dubai?",
    a: "Yes, free courier pickup from your home or office across all Dubai Mainland areas. WhatsApp 055 741 3706, share your area and fault. A courier arrives within 2–4 hours. Mac is repaired and returned the same day for battery, keyboard, and software jobs." },
  { q: "How much does MacBook repair cost near me in Dubai?",
    a: "Screen from AED 499, battery from AED 450, keyboard from AED 550. Diagnosis is always free. WhatsApp 055 741 3706 with your exact model (check the serial number under System Settings → General → About) for a fixed written quote in under 4 minutes." },
  { q: "Do you repair iMac and Mac mini near me in Dubai?",
    a: "Yes, iMac 21.5\", 24\", and 27\" screen repair, power supply, SSD upgrade, and fan cleaning. Mac mini M1–M4 logic board and SSD. Mac Studio and Mac Pro diagnostics and repair. All handled at Concord Tower, Dubai Media City, with free courier pickup for heavier units." },
  { q: "What if my Mac was bought in the USA or UK, can you still repair it near me?",
    a: "Yes. Mac hardware is identical globally, only the power adapter varies. We carry keyboards in US and UK layouts and parts for all internationally-purchased MacBook, iMac, and Mac mini models from 2015 onward." },
  { q: "Is there a warranty on Mac repair near me in Dubai?",
    a: "Every repair carries a written warranty of up to 12 months. Battery carries a 3-month warranty with an 80% capacity guarantee. The warranty card is issued with every paid repair and lists the device serial number, repair type, and parts used." },
];

const FEATURED_REVIEW_INDEXES = [3, 7, 12, 18, 23, 29];

export default function MacRepairNearMe() {
  const reviews = FEATURED_REVIEW_INDEXES.map((i) => REVIEWS[i % REVIEWS.length]).filter(Boolean);

  useSeo({
    title: "Mac Repair Near Me Dubai. MacBook, iMac & Mac mini | From AED 450",
    description:
      "Mac repair near you in Dubai. MacBook screen from AED 499, battery from AED 450. Free pickup across Dubai. Same-day. Concord Tower, Media City. Call 055 741 3706.",
    path: "/mac-repair-near-me-dubai",
  });

  return (
    <PageShell>
      <div className="bg-bg-alt text-text -mb-[4rem]">
        <Hero
          image={undefined}
          imageAlt="Mac repair near me Dubai. MacBook, iMac, Mac mini"
          variant="device"
          tone="dark"
          eyebrow="Mac repair near you · Dubai Media City · Since 2004"
          title="Mac Repair Near Me. Dubai"
          subtitle="MacBook, iMac & Mac mini. Screen from AED 499, battery from AED 450. Free pickup. Same-day at Concord Tower, Media City."
        >
          <p className="mt-md flex flex-wrap items-center gap-md text-[14px] text-text-muted">
            <span className="flex items-center gap-1"><Star size={16} className="fill-star text-star" aria-hidden /> 5.0 · 216+ reviews</span>
            <span>·</span>
            <span className="flex items-center gap-1"><MapPin size={14} aria-hidden /> Concord Tower, Dubai Media City</span>
            <span>·</span>
            <span>Free pickup · Same-day</span>
          </p>
        </Hero>

        <USPStrip tone="dark" />

        <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
          <BreadcrumbTrail
            tone="dark"
            trail={[
              { name: "Home", path: "/" },
              { name: "Mac Repair Dubai", path: "/mac-repair-dubai" },
              { name: "Mac Repair Near Me", path: "/mac-repair-near-me-dubai" },
            ]}
          />
        </section>

        <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
          <QuickAnswer
            tone="dark"
            question="Where can I get my Mac repaired near me in Dubai?"
            answer="The nearest Mac repair specialist in Dubai is at Concord Tower, Office #45, 10th Floor, Dubai Media City, near Media City Metro. MacBook screen from AED 499, battery from AED 450, same-day service. Can't travel? Free courier pickup from your home or office across all Dubai Mainland areas. WhatsApp 055 741 3706."
          />
        </section>

        {/* Two options */}
        <section className="bg-bg-alt border-y border-border mt-3xl py-3xl">
          <div className="mx-auto max-w-content px-5 md:px-6">
            <h2 className="text-[28px] md:text-[32px] mb-md">Two ways to get your Mac fixed near you</h2>
            <div className="grid gap-md md:grid-cols-2">
              <article className="border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md p-xl">
                <MapPin size={28} className="text-accent mb-sm" aria-hidden />
                <h3 className="text-[20px] font-bold mb-sm">Drop in to the workshop</h3>
                <p className="text-[15px] text-text-muted leading-relaxed mb-md">
                  Office #45, 10th Floor, Concord Tower, Al Sufouh, Dubai Media City. 5 min walk from Media City Metro. Open Mon-Sat 9 am–10 pm. Battery and keyboard repairs done while you wait.
                </p>
                <a href="https://maps.google.com/?q=Concord+Tower+Dubai+Media+City" className="text-accent text-[14px] font-semibold hover:underline">Get directions →</a>
              </article>
              <article className="border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md p-xl">
                <Truck size={28} className="text-accent mb-sm" aria-hidden />
                <h3 className="text-[20px] font-bold mb-sm">Free pickup from your location</h3>
                <p className="text-[15px] text-text-muted leading-relaxed mb-md">
                  WhatsApp 055 741 3706. A courier collects from your home or office anywhere in Dubai Mainland, no charge. Mac repaired and returned same day for battery, keyboard, and software jobs.
                </p>
                <a href={NAP.whatsappUrl} className="text-accent text-[14px] font-semibold hover:underline">WhatsApp to book →</a>
              </article>
            </div>
          </div>
        </section>

        {/* Repairs table */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <h2 className="text-[28px] md:text-[32px] mb-sm">Mac repairs near you, prices & times</h2>
          <div className="overflow-x-auto mt-lg">
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
                {REPAIRS.map((row) => (
                  <tr key={row.label} className="border-b border-border">
                    <td className="py-sm pr-lg font-medium">{row.label}</td>
                    <td className="py-sm pr-lg text-accent font-semibold">{row.price}</td>
                    <td className="py-sm pr-lg text-text-muted whitespace-nowrap">
                      <span className="inline-flex items-center gap-1"><Clock size={12} aria-hidden /> {row.time}</span>
                    </td>
                    <td className="py-sm text-text-muted">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Areas */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <h2 className="text-[28px] md:text-[32px] mb-sm">Mac repair pickup, all Dubai areas</h2>
          <div className="grid gap-sm sm:grid-cols-2 lg:grid-cols-3 mt-lg">
            {AREAS.map(({ area, time }) => (
              <div key={area} className="border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md p-md flex items-start gap-sm">
                <MapPin size={16} className="text-accent shrink-0 mt-[2px]" aria-hidden />
                <div>
                  <p className="text-[14px] font-semibold">{area}</p>
                  <p className="text-[13px] text-text-muted">{time}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <div className="border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md p-xl flex flex-col md:flex-row md:items-center gap-lg">
            <div className="flex-1">
              <h2 className="text-[22px] font-bold mb-sm">Get your Mac repaired near you today</h2>
              <p className="text-[15px] text-text-muted">Free diagnosis. Fixed price. Free pickup or drop-in. Same-day return for most repairs.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-sm shrink-0">
              <a href={NAP.whatsappUrl} className="inline-flex items-center gap-sm bg-accent text-white font-semibold px-lg py-sm rounded-md text-[15px] hover:bg-accent/90">
                <MessageCircle size={18} aria-hidden /> WhatsApp Now
              </a>
              <a href={`tel:${NAP.phoneE164}`} className="inline-flex items-center gap-sm border border-border bg-bg font-semibold px-lg py-sm rounded-md text-[15px] hover:bg-bg-card">
                <Phone size={18} aria-hidden /> {NAP.phoneDisplay}
              </a>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="bg-bg-alt border-y border-border mt-3xl py-3xl">
          <div className="mx-auto max-w-content px-5 md:px-6">
            <h2 className="text-[28px] md:text-[32px] mb-md">What customers near you say</h2>
            <ReviewGrid reviews={reviews} tone="dark" />
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <h2 className="text-[28px] md:text-[32px] mb-md">Mac repair near me. FAQ</h2>
          <FAQAccordion items={FAQS} injectSchema tone="dark" />
        </section>

        {/* Related */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <h2 className="text-[22px] font-bold mb-md">Related repairs near you</h2>
          <div className="flex flex-wrap gap-sm">
            {[
              { label: "iPhone Repair Near Me Dubai", href: "/iphone-repair-near-me-dubai" },
              { label: "Apple Repair Near Me Dubai", href: "/apple-repair-near-me-dubai" },
              { label: "MacBook Repair Dubai", href: "/" },
              { label: "Mac Repair Dubai", href: "/mac-repair-dubai" },
              { label: "Same-Day MacBook Repair", href: "/same-day-macbook-repair-dubai" },
              { label: "iMac Repair Dubai", href: "/imac-repair-dubai" },
            ].map(({ label, href }) => (
              <a key={href} href={href} className="border border-border rounded-md px-md py-xs text-[14px] hover:bg-bg-card transition-colors">
                {label}
              </a>
            ))}
          </div>
        </section>

        {/* Location */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <h2 className="text-[28px] md:text-[32px] mb-lg">Find us. Concord Tower, Dubai Media City</h2>
          <LocationBlock tone="dark" />
        </section>
      </div>
      <RelatedArticles path="/mac-repair-near-me-dubai" />
    </PageShell>
  );
}
