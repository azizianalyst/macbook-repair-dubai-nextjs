"use client";
import { MapPin, Clock, Star, Phone, MessageCircle, Zap, Shield, Truck } from "lucide-react";
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
  { label: "Screen replacement",     price: "From AED 179",  time: "40 min",   models: "iPhone 6 through 17 Pro Max" },
  { label: "Battery replacement",    price: "From AED 250",  time: "30 min",   models: "All models, 3-month warranty" },
  { label: "Back glass repair",      price: "From AED 300",  time: "Same day", models: "iPhone 8 through 16 Pro Max" },
  { label: "Charging port repair",   price: "From AED 200",  time: "1 hr",     models: "Lightning & USB-C" },
  { label: "Camera repair",          price: "From AED 350",  time: "Same day", models: "Front & rear, all modules" },
  { label: "Water damage repair",    price: "From AED 300",  time: "1–2 days", models: "Ultrasonic clean + board check" },
  { label: "Face ID repair",         price: "From AED 350",  time: "Same day", models: "iPhone X through 17 Pro Max" },
  { label: "Logic board repair",     price: "From AED 450",  time: "2–5 days", models: "Component-level micro-soldering" },
];

const AREAS = [
  { area: "Dubai Media City / JLT / JBR",     time: "2–4 hrs pickup" },
  { area: "Downtown Dubai / Business Bay",      time: "2–4 hrs pickup" },
  { area: "Jumeirah / Al Quoz / Umm Suqeim",  time: "2–4 hrs pickup" },
  { area: "Deira / Bur Dubai / Karama",        time: "2–4 hrs pickup" },
  { area: "Dubai Hills / Mirdif / Al Barsha",  time: "2–4 hrs pickup" },
  { area: "Sharjah / Abu Dhabi",               time: "AED 100 each way" },
];

const FAQS = [
  { q: "Where is the nearest iPhone repair shop to me in Dubai?",
    a: "The closest iPhone repair specialist to most of Dubai is at Concord Tower, Office #45, 10th Floor, Al Sufouh, Dubai Media City, near the Media City Metro station. If you can't travel, we offer free pickup from your home or office across Dubai Mainland. WhatsApp 055 741 3706 with your location and fault; a courier arrives within 2–4 hours." },
  { q: "How quickly can you fix my iPhone near me in Dubai?",
    a: "Screen replacement takes 40 minutes, battery 30 minutes. Both can be done the same day you contact us. Drop in to Concord Tower or request free pickup from anywhere in Dubai Mainland, screen and battery repairs are usually back with you the same day." },
  { q: "Do you offer iPhone repair pickup near me in Dubai?",
    a: "Yes, free pickup and delivery across all Dubai Mainland areas. WhatsApp 055 741 3706, tell us your area and the iPhone fault, and we send a courier. No transport cost, no delivery fee. The iPhone is repaired and returned the same day for screen and battery jobs." },
  { q: "How much does iPhone screen repair cost near me in Dubai?",
    a: "iPhone screen repair starts from AED 179 for older models and runs up to AED 1,400 for an iPhone 17 Pro Max OLED. WhatsApp 055 741 3706 with your model number for a fixed quote in under 4 minutes. No hidden fees." },
  { q: "Is there an iPhone repair shop open now near me in Dubai?",
    a: "We're open Monday to Saturday, 9 am to 10 pm at Concord Tower, Dubai Media City. WhatsApp is answered from 8 am. On Sundays the workshop is closed but WhatsApp replies are sent and Monday appointments can be booked. Call 055 741 3706 for immediate assistance." },
  { q: "Can you repair my iPhone near me on the same day?",
    a: "Yes for screen, battery, charging port, back glass, and camera. Drop off by 4 pm at Concord Tower or request free pickup, the repair is done the same day. Logic board and water damage take 1–3 days depending on severity." },
  { q: "Do you offer a warranty on iPhone repair near me in Dubai?",
    a: "Every repair carries a written warranty of up to 12 months. Battery replacement comes with a 3-month warranty plus an 80% capacity guarantee. The warranty card has the device serial number, the repair description, and the parts used." },
];

const FEATURED_REVIEW_INDEXES = [1, 5, 10, 16, 21, 27];

export default function IPhoneRepairNearMe() {
  const reviews = FEATURED_REVIEW_INDEXES.map((i) => REVIEWS[i % REVIEWS.length]).filter(Boolean);

  useSeo({
    title: "iPhone Repair Near Me Dubai. Screen from AED 179, Same-Day | Free Pickup",
    description:
      "iPhone repair near you in Dubai. Screen from AED 179, battery from AED 250. Free pickup across Dubai. Same-day service. Concord Tower, Media City. Call 055 741 3706.",
    path: "/iphone-repair-near-me-dubai",
  });

  return (
    <PageShell>
      <div className="bg-bg-alt text-text -mb-[4rem]">
        <Hero
          image={undefined}
          imageAlt="iPhone repair near me Dubai, same-day screen and battery"
          variant="device"
          tone="dark"
          eyebrow="iPhone repair near you · Dubai Media City · Since 2004"
          title="iPhone Repair Near Me. Dubai"
          subtitle="Screen from AED 179, battery from AED 250. Free pickup from your door. Same-day repair at Concord Tower, Media City."
        >
          <p className="mt-md flex flex-wrap items-center gap-md text-[14px] text-text-muted">
            <span className="flex items-center gap-1"><Star size={16} className="fill-star text-star" aria-hidden /> 5.0 · 215+ reviews</span>
            <span>·</span>
            <span className="flex items-center gap-1"><MapPin size={14} aria-hidden /> Concord Tower, Dubai Media City</span>
            <span>·</span>
            <span>Free pickup across Dubai</span>
          </p>
        </Hero>

        <USPStrip tone="dark" />

        <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
          <BreadcrumbTrail
            tone="dark"
            trail={[
              { name: "Home", path: "/" },
              { name: "iPhone Repair Dubai", path: "/iphone-repair-dubai" },
              { name: "iPhone Repair Near Me", path: "/iphone-repair-near-me-dubai" },
            ]}
          />
        </section>

        <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
          <QuickAnswer
            tone="dark"
            question="Where can I get my iPhone repaired near me in Dubai?"
            answer="The nearest iPhone repair specialist in Dubai is at Concord Tower, Office #45, 10th Floor, Dubai Media City, near Media City Metro. Screen repair from AED 179, battery from AED 250, same-day service. Can't travel? Free pickup from your home or office across all Dubai Mainland areas. WhatsApp 055 741 3706."
          />
        </section>

        {/* How to get it fixed */}
        <section className="bg-bg-alt border-y border-border mt-3xl py-3xl">
          <div className="mx-auto max-w-content px-5 md:px-6">
            <h2 className="text-[28px] md:text-[32px] mb-md">Two ways to get your iPhone repaired near you</h2>
            <div className="grid gap-md md:grid-cols-2">
              <article className="border border-border bg-bg-card rounded-md p-xl">
                <MapPin size={28} className="text-accent mb-sm" aria-hidden />
                <h3 className="text-[20px] font-bold mb-sm">Drop in to the workshop</h3>
                <p className="text-[15px] text-text-muted leading-relaxed mb-md">
                  Walk in to Office #45, 10th Floor, Concord Tower, Al Sufouh, Dubai Media City. Near Media City Metro. Open Mon-Sat 9 am–10 pm. Screen done in 40 minutes, wait while we fix it.
                </p>
                <a href="https://maps.google.com/?q=Concord+Tower+Dubai+Media+City" className="text-accent text-[14px] font-semibold hover:underline">Get directions →</a>
              </article>
              <article className="border border-border bg-bg-card rounded-md p-xl">
                <Truck size={28} className="text-accent mb-sm" aria-hidden />
                <h3 className="text-[20px] font-bold mb-sm">Free pickup from your door</h3>
                <p className="text-[15px] text-text-muted leading-relaxed mb-md">
                  WhatsApp 055 741 3706. A courier collects from your home or office anywhere in Dubai Mainland, no charge. iPhone repaired and returned the same day for screen and battery jobs.
                </p>
                <a href={NAP.whatsappUrl} className="text-accent text-[14px] font-semibold hover:underline">WhatsApp to book pickup →</a>
              </article>
            </div>
          </div>
        </section>

        {/* Repairs + prices */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <h2 className="text-[28px] md:text-[32px] mb-sm">iPhone repairs near you, prices & times</h2>
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
                {REPAIRS.map((row) => (
                  <tr key={row.label} className="border-b border-border">
                    <td className="py-sm pr-lg font-medium">{row.label}</td>
                    <td className="py-sm pr-lg text-accent font-semibold">{row.price}</td>
                    <td className="py-sm pr-lg text-text-muted whitespace-nowrap">
                      <span className="inline-flex items-center gap-1"><Clock size={12} aria-hidden /> {row.time}</span>
                    </td>
                    <td className="py-sm text-text-muted">{row.models}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Pickup areas */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <h2 className="text-[28px] md:text-[32px] mb-sm">iPhone repair pickup near you, all Dubai areas</h2>
          <div className="grid gap-sm sm:grid-cols-2 lg:grid-cols-3 mt-lg">
            {AREAS.map(({ area, time }) => (
              <div key={area} className="border border-border bg-bg-card rounded-md p-md flex items-start gap-sm">
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
          <div className="border border-border bg-bg-card rounded-md p-xl flex flex-col md:flex-row md:items-center gap-lg">
            <div className="flex-1">
              <h2 className="text-[22px] font-bold mb-sm">Get your iPhone fixed today</h2>
              <p className="text-[15px] text-text-muted">Free diagnosis. Fixed quote. Free pickup or drop-in. Same-day return.</p>
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
          <h2 className="text-[28px] md:text-[32px] mb-md">iPhone repair near me. FAQ</h2>
          <FAQAccordion items={FAQS} injectSchema tone="dark" />
        </section>

        {/* Related */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <h2 className="text-[22px] font-bold mb-md">Other repairs near you in Dubai</h2>
          <div className="flex flex-wrap gap-sm">
            {[
              { label: "MacBook Repair Near Me Dubai", href: "/mac-repair-near-me-dubai" },
              { label: "Apple Repair Near Me Dubai", href: "/apple-repair-near-me-dubai" },
              { label: "iPhone Repair Dubai", href: "/iphone-repair-dubai" },
              { label: "iPad Repair Dubai", href: "/ipad-repair-dubai" },
              { label: "MacBook Repair Dubai", href: "/" },
              { label: "Same-Day MacBook Repair Dubai", href: "/same-day-macbook-repair-dubai" },
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
      <RelatedArticles path="/iphone-repair-near-me-dubai" />
    </PageShell>
  );
}
