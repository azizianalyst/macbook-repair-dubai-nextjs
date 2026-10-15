"use client";
import { withSlash } from "@/lib/utils";
import { Zap, Clock, MapPin, Star, Phone, MessageCircle, CheckCircle2, Shield } from "lucide-react";
import { QuickAnswer } from "@/components/blocks/QuickAnswer";
import { LeadForm } from "@/components/blocks/LeadForm";
import { PRESETS } from "@/data/form-presets";
import { PageShell } from "@/components/layout/PageShell";
import { RelatedArticles } from "@/components/blocks/RelatedArticles";
import { Hero } from "@/components/blocks/Hero";
import { imageForRoute } from "@/lib/page-images";
import { USPStrip } from "@/components/blocks/USPStrip";
import { BreadcrumbTrail } from "@/components/blocks/BreadcrumbTrail";
import { ReviewGrid } from "@/components/blocks/ReviewGrid";
import { FAQAccordion } from "@/components/blocks/FAQAccordion";
import { VsAppleStore } from "@/components/blocks/VsAppleStore";
import { LocationBlock } from "@/components/blocks/LocationBlock";
import { useSeo } from "@/hooks/use-seo";
import { REVIEWS } from "@/content/reviews";
import { NAP, REVIEW_COUNT_LABEL, RATING_LABEL } from "@/content/site";

const SAME_DAY_REPAIRS = [
  { label: "Screen replacement (Air, Pro 13\")", price: "On request",  hours: "2–4 hrs",  note: "MacBook Air M1/M2/M3, MacBook Pro 13\". IPS panel, in-stock." },
  { label: "Battery replacement",              price: "On request",  hours: "1–2 hrs",  note: "All Air and Pro models M1–M5, Intel 2015–2019." },
  { label: "Keyboard replacement",             price: "On request",  hours: "2–3 hrs",  note: "Butterfly (2016–2019) and scissor keyboards." },
  { label: "Trackpad replacement",             price: "On request",  hours: "2–3 hrs",  note: "Force Touch trackpad, all models 2015–2024." },
  { label: "USB-C charging port repair",       price: "On request",  hours: "1–2 hrs",  note: "Single port or Thunderbolt board repair." },
  { label: "RAM / SSD diagnostic",             price: "Free",          hours: "30 min",   note: "Full hardware diagnostic + written report." },
  { label: "macOS reinstall / software fix",   price: "On request",  hours: "1–2 hrs",  note: "Internet Recovery, corrupted OS, boot loop." },
  { label: "Fan cleaning / thermal paste",     price: "On request",  hours: "1 hr",     note: "Overheating Intel MacBook, performance restored." },
];

const NOT_SAME_DAY = [
  { label: "Logic board repair", note: "Requires micro-soldering, 2 to 5 business days depending on fault." },
  { label: "Water damage",       note: "Ultrasonic clean + board inspection, 1 to 3 days." },
  { label: "MacBook Pro 16\" XDR screen", note: "Panel sourced on request, 1 to 3 days lead time." },
  { label: "Data recovery",      note: "Depends on drive state, 1 to 7 days." },
];

const VISIT = [
  { label: "Address",          detail: "Office #45, 10th Floor, Concord Tower, Al Sufouh, Dubai Media City" },
  { label: "Getting here",     detail: "Across from the Media City Metro station" },
  { label: "Parking",          detail: "On site at Concord Tower" },
  { label: "Mon–Thu and Sat",  detail: "9 am – 7 pm" },
  { label: "Friday",           detail: "9 am – 12 pm and 2 pm – 7 pm" },
  { label: "Sunday",           detail: "Closed" },
];

const STEPS = [
  { icon: MessageCircle, title: "WhatsApp us",       body: "Send a photo and model number to 055 741 3706. Get a quote in under 4 minutes during business hours." },
  { icon: MapPin,        title: "Walk in",            body: "Bring your MacBook to Concord Tower, Dubai Media City, across from the Media City Metro station. No appointment needed, parking on site." },
  { icon: Zap,           title: "Same-day repair",    body: "Screen, battery, keyboard, trackpad, and ports are all repaired the same day your device arrives." },
  { icon: Shield,        title: "Warranty handed over", body: "Written warranty of up to 12 months. Collect your MacBook the same day or next morning." },
];

const FAQS = [
  { q: "Which MacBook repairs are genuinely same-day in Dubai?",
    a: "Screen replacement (MacBook Air and Pro 13\"), battery, keyboard, trackpad, USB-C charging port, fan cleaning, thermal paste, and macOS software repair are all same-day when your MacBook arrives before 2 pm. Logic board, water damage, and 16\" Liquid Retina XDR screens take 1–5 days." },
  { q: "Do I need an appointment for a same-day MacBook repair?",
    a: "No. Walk in to Office #45, 10th Floor, Concord Tower, Dubai Media City, across from the Media City Metro station, with parking on site. WhatsApp 055 741 3706 first with your model, the fault and a photo, and we confirm a fixed price and check the part is in stock before you travel." },
  { q: "Do you do MacBook repair at home in Dubai?",
    a: "Yes, as a paid onsite visit when a technician is free, with the charge quoted on WhatsApp 055 741 3706 before you book. Same-day screen, battery and keyboard jobs are best done at the workshop at Concord Tower, Dubai Media City, which has the tools, parts stock and clean bench conditions a home visit can't match. Can't come in? Book any same-day courier app and send it to us." },
  { q: "How much does same-day MacBook repair cost in Dubai?",
    a: "It depends on your model and which part failed. Diagnosis is free. WhatsApp 055 741 3706 with your exact model and fault for a fixed quote, no hidden fees, no surprises." },
  { q: "What time do I need to drop off my MacBook for same-day repair?",
    a: "Drop off before 2 pm for same-day completion on screen, battery, keyboard, and trackpad jobs. After 2 pm those jobs finish the following morning. We're open Monday to Thursday and Saturday 9 am to 7 pm, and Friday 9 am to 12 pm and 2 pm to 7 pm, at Concord Tower, Dubai Media City. Sunday closed." },
  { q: "Is a same-day repair covered by a warranty?",
    a: "Yes, every repair carries a written warranty of up to 12 months, including same-day jobs. Battery replacement carries a 3-month warranty with an 80% capacity guarantee. The warranty card lists the repair, the parts used, and the serial number." },
  { q: "Can you repair a MacBook the same day if bought in the USA or UK?",
    a: "Yes. MacBook hardware is identical globally, only the power adapter differs. We carry parts for all internationally-sourced MacBook Air and Pro models from 2015 onward, including US-layout keyboards." },
];

const FEATURED_REVIEW_INDEXES = [0, 3, 8, 14, 19, 26];

export default function SameDayMacBookRepair() {
  const reviews = FEATURED_REVIEW_INDEXES.map((i) => REVIEWS[i % REVIEWS.length]).filter(Boolean);

  useSeo({
    title: "Same-Day MacBook Repair Dubai. Screen, Battery, Keyboard",
    description:
      "Same-day MacBook repair in Dubai. Screen, battery and keyboard. Walk in to our Media City workshop by 2 pm, collect the same day. Call 055 741 3706.",
    path: "/same-day-macbook-repair-dubai",
  });

  // Scaffolded with image={undefined} and an alt already written for an image
  // that was never wired up (audit 2026-09-23). Uses the route's own topic
  // image, so src and alt can never drift apart.
  const heroImg = imageForRoute("/same-day-macbook-repair-dubai");

  return (
    <PageShell>
      <div className="bg-bg-alt text-text -mb-[4rem]">
        <Hero
          image={heroImg?.src}
          imageAlt={heroImg?.alt}
          variant="device"
          tone="dark"
          eyebrow="Same-day MacBook repair · Dubai · Since 2004"
          title="Same-Day MacBook Repair Dubai"
          subtitle="Screen, battery, keyboard, trackpad and charging port. Walk in to our Dubai Media City workshop before 2 pm and collect it the same day."
        >
          <p className="mt-md flex flex-wrap items-center gap-md text-[14px] text-text-muted">
            <span className="flex items-center gap-1"><Star size={16} className="fill-star text-star" aria-hidden /> {RATING_LABEL} · {REVIEW_COUNT_LABEL} reviews</span>
            <span>·</span>
            <span>All Air & Pro models</span>
            <span>·</span>
            <span>Walk-in · Same-day collection</span>
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
            answer="Yes. Screen, battery, keyboard, trackpad and USB-C port are all same-day repairs at Concord Tower, Dubai Media City, when you walk in before 2 pm. Logic board and water damage take 1–5 days. Free diagnosis, warranty up to 12 months. WhatsApp 055 741 3706."
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
                <article key={title} className="border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md p-lg">
                  <Icon size={28} className="text-accent mb-sm" aria-hidden />
                  <h3 className="text-[16px] font-bold mb-xs">{title}</h3>
                  <p className="text-[14px] text-text-muted leading-relaxed">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Visiting the workshop */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <h2 className="text-[28px] md:text-[32px] mb-sm">Where do I bring my MacBook for a same-day repair?</h2>
          <p className="text-[16px] text-text-muted max-w-[70ch] mb-lg">
            Walk in, no appointment needed. WhatsApp a photo and your model first and we confirm the price and part before you set off.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-[14px] border-collapse">
              <thead>
                <tr className="border-b border-border text-left text-text-muted">
                  <th className="py-sm pr-lg font-semibold">Visit</th>
                  <th className="py-sm font-semibold">Details</th>
                </tr>
              </thead>
              <tbody>
                {VISIT.map((row) => (
                  <tr key={row.label} className="border-b border-border">
                    <td className="py-sm pr-lg font-medium">{row.label}</td>
                    <td className="py-sm text-text-muted">{row.detail}</td>
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
          <div className="border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md p-xl flex flex-col md:flex-row md:items-center gap-lg">
            <div className="flex-1">
              <h2 className="text-[22px] font-bold mb-sm">Need your MacBook repaired today?</h2>
              <p className="text-[15px] text-text-muted">WhatsApp with your model and fault, fixed quote in under 4 minutes.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-sm shrink-0">
              <a
                href={withSlash(NAP.whatsappUrl)}
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
          <FAQAccordion items={FAQS} injectSchema />
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
              { label: "MacBook Repair Near Me Dubai", href: "/mac-repair-near-me-dubai" },
              { label: "MacBook Repair Dubai", href: "/" },
            ].map(({ label, href }) => (
              <a key={href} href={withSlash(href)} className="border border-border rounded-md px-md py-xs text-[14px] hover:bg-bg-card transition-colors">
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
      {/* Lead form (template-audit 2026-09-24: page shipped with none) */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-[80px]" aria-labelledby="page-lead">
        <h2 id="page-lead" className="text-[26px] md:text-[32px] font-bold mb-md">Get a free quote</h2>
        <LeadForm preset={PRESETS.repair} sourcePath="/same-day-macbook-repair-dubai" defaultDeviceType="MacBook" />
      </section>

      <RelatedArticles path="/same-day-macbook-repair-dubai" />
    </PageShell>
  );
}
