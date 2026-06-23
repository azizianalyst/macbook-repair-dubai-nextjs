"use client";
import { AlertTriangle, Battery, Clock, Shield, Phone, MessageCircle, CheckCircle2, XCircle } from "lucide-react";
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

const MODELS = [
  { model: "MacBook Air M1 / M2 / M3 / M4", price: "AED 450–550",  note: "Most common swollen battery, thin chassis makes bulge visible early" },
  { model: "MacBook Pro 13\" M1 / M2",       price: "AED 500–600",  note: "Compact body; trackpad lift is the first symptom" },
  { model: "MacBook Pro 14\" / 16\" M1–M5",  price: "AED 600–750",  note: "Larger cell, swelling usually after 3+ years" },
  { model: "MacBook Pro Intel 2015–2019",     price: "AED 450–600",  note: "High-failure-rate batteries at 4–6 years old" },
  { model: "MacBook Air Intel 2018–2020",     price: "AED 450–550",  note: "A1932 / A2179, well-documented swelling issue" },
];

const DANGER_SIGNS = [
  { icon: CheckCircle2, label: "Trackpad clicks feel stiff or won't click at all", safe: false },
  { icon: CheckCircle2, label: "MacBook lid won't close flush, gap at the bottom", safe: false },
  { icon: CheckCircle2, label: "Bottom case is visibly bulging or raised", safe: false },
  { icon: CheckCircle2, label: "MacBook feels hot even when idle", safe: false },
  { icon: CheckCircle2, label: "Battery health below 80% with less than 500 cycles", safe: false },
  { icon: CheckCircle2, label: "Battery percentage jumps or drains suddenly", safe: false },
];

const DONT_DO = [
  "Do NOT leave the MacBook plugged in charging, a swollen battery under charge pressure can rupture",
  "Do NOT press hard on the swollen area or try to pop it back in place",
  "Do NOT put the MacBook in a bag with other items pressing against it",
  "Do NOT put the MacBook in extreme heat (car dashboard, direct sunlight)",
  "Do NOT continue using it for hours, use it to save your work, then power down",
];

const FAQS = [
  { q: "Is a swollen MacBook battery dangerous?",
    a: "Yes, a swollen lithium-ion battery is in a state of active chemical decomposition. It can rupture, emit toxic gas, or in rare cases catch fire. The risk increases when the battery is under physical pressure (in a bag), charging, or exposed to heat. Stop using the MacBook, power it down, and get the battery replaced the same day you notice swelling." },
  { q: "What causes a MacBook battery to swell?",
    a: "Lithium-ion batteries produce gas as they age and degrade. This is a normal end-of-life process but is accelerated by: always keeping the MacBook at 100% charge, using it at high temperatures (like on a duvet blocking the fans), or using third-party chargers that don't respect the charging curve. Most swellings appear after 3–6 years of daily use." },
  { q: "Can I still use my MacBook if the battery is swollen?",
    a: "Briefly, only to save your work and copy critical files. Power it down as soon as possible and don't charge it. A swollen battery under charge can rupture. Bring it in or request free pickup from Dubai Mainland, we replace swollen batteries the same day." },
  { q: "How much does swollen MacBook battery repair cost in Dubai?",
    a: "Swollen battery replacement in Dubai costs AED 450–750 depending on model. MacBook Air M1–M4: AED 450–550. MacBook Pro 14\" / 16\": AED 600–750. The battery is completely replaced, we do not attempt to discharge and re-seal swollen cells. Diagnosis is free." },
  { q: "Can a swollen battery damage my MacBook?",
    a: "Yes. The pressure from a swollen battery lifts the trackpad out of its housing (damaging the Force Touch mechanism), can crack the display from the inside, and warps the bottom case. Replace it before the swelling progresses, most early-stage swellings cause no secondary damage." },
  { q: "How long does swollen MacBook battery replacement take?",
    a: "1–2 hours for most models. MacBook Air and Pro 13\" are the fastest, battery is accessible without full disassembly. MacBook Pro 16\" takes slightly longer due to the larger cell and more screws. Same-day service when you arrive before 4 pm." },
  { q: "Do you offer MacBook battery pickup in Dubai for swollen batteries?",
    a: "Yes, free pickup and delivery across Dubai Mainland. WhatsApp 055 741 3706. Important: tell us the battery is swollen so the courier uses a padded bag and handles it carefully. We prioritise swollen-battery pickups for same-day replacement." },
];

const FEATURED_REVIEW_INDEXES = [3, 7, 13, 19, 24];

export default function MacBookBatterySwollen() {
  const reviews = FEATURED_REVIEW_INDEXES.map((i) => REVIEWS[i % REVIEWS.length]).filter(Boolean);

  useSeo({
    title: "MacBook Swollen Battery Repair Dubai. From AED 450, Same Day | Urgent",
    description:
      "MacBook swollen battery repair Dubai. Urgent, swollen batteries are a fire risk. Same-day replacement from AED 450. Free pickup. Concord Tower, Media City. Call 055 741 3706.",
    path: "/macbook-battery-swollen-repair-dubai",
  });

  return (
    <PageShell>
      <div className="bg-bg-alt text-text -mb-[4rem]">
        <Hero
          image={undefined}
          imageAlt="MacBook swollen battery repair Dubai, urgent same-day service"
          variant="device"
          tone="dark"
          eyebrow="URGENT. Swollen battery repair · Dubai · Same day"
          title="MacBook Swollen Battery Repair Dubai"
          subtitle="A swollen battery is a fire risk, do not keep charging it. Same-day replacement from AED 450. Free pickup across Dubai."
        >
          <p className="mt-md flex flex-wrap items-center gap-md text-[14px] text-text-muted">
            <span className="flex items-center gap-1 text-red-400 font-semibold"><AlertTriangle size={16} aria-hidden /> Urgent, stop charging now</span>
            <span>·</span>
            <span>Same-day replacement</span>
            <span>·</span>
            <span>Free pickup Dubai</span>
          </p>
        </Hero>

        <USPStrip tone="dark" />

        <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
          <BreadcrumbTrail tone="dark" trail={[{ name: "Home", path: "/" }, { name: "MacBook Battery Replacement Dubai", path: "/macbook-battery-replacement-dubai" }, { name: "Swollen Battery Repair", path: "/macbook-battery-swollen-repair-dubai" }]} />
        </section>

        <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
          <QuickAnswer
            tone="dark"
            question="My MacBook battery is swollen, what should I do?"
            answer="Stop charging immediately and power down the MacBook. A swollen lithium battery is a fire risk, do not press on it or carry it in a bag under pressure. WhatsApp 055 741 3706 for same-day free pickup and battery replacement from AED 450. We prioritise swollen-battery jobs at Concord Tower, Dubai Media City."
          />
        </section>

        {/* Danger signs */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <h2 className="text-[28px] md:text-[32px] mb-sm">Signs your MacBook battery is swollen</h2>
          <div className="grid gap-sm md:grid-cols-2 mt-lg">
            {DANGER_SIGNS.map(({ label }) => (
              <div key={label} className="flex items-start gap-sm border border-red-800/30 bg-red-900/10 rounded-md p-md">
                <AlertTriangle size={16} className="text-red-400 shrink-0 mt-[2px]" aria-hidden />
                <p className="text-[14px]">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What NOT to do */}
        <section className="bg-bg-alt border-y border-border mt-3xl py-3xl">
          <div className="mx-auto max-w-content px-5 md:px-6">
            <h2 className="text-[28px] md:text-[32px] mb-md">What NOT to do with a swollen MacBook battery</h2>
            <ul className="space-y-sm">
              {DONT_DO.map((item) => (
                <li key={item} className="flex items-start gap-sm text-[15px]">
                  <XCircle size={18} className="text-red-400 shrink-0 mt-[2px]" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Pricing by model */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <h2 className="text-[28px] md:text-[32px] mb-sm">Swollen MacBook battery replacement, prices by model</h2>
          <div className="overflow-x-auto mt-lg">
            <table className="w-full text-[14px] border-collapse">
              <thead>
                <tr className="border-b border-border text-left text-text-muted">
                  <th className="py-sm pr-lg font-semibold">Model</th>
                  <th className="py-sm pr-lg font-semibold">Price</th>
                  <th className="py-sm font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                {MODELS.map((row) => (
                  <tr key={row.model} className="border-b border-border">
                    <td className="py-sm pr-lg font-medium">{row.model}</td>
                    <td className="py-sm pr-lg text-accent font-semibold">{row.price}</td>
                    <td className="py-sm text-text-muted">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[13px] text-text-muted mt-sm">Diagnosis free. Price confirmed before any work starts. 3-month battery warranty with 80% capacity guarantee.</p>
        </section>

        {/* Urgent CTA */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <div className="border border-red-700/40 bg-red-900/10 rounded-md p-xl flex flex-col md:flex-row md:items-center gap-lg">
            <div className="flex-1">
              <h2 className="text-[22px] font-bold mb-sm flex items-center gap-sm"><AlertTriangle size={22} className="text-red-400" aria-hidden /> Swollen battery, act today</h2>
              <p className="text-[15px] text-text-muted">Free pickup across Dubai Mainland. Same-day replacement. We prioritise swollen battery jobs.</p>
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

        <section className="bg-bg-alt border-y border-border mt-3xl py-3xl">
          <div className="mx-auto max-w-content px-5 md:px-6">
            <h2 className="text-[28px] md:text-[32px] mb-md">What customers say about our battery service</h2>
            <ReviewGrid reviews={reviews} tone="dark" />
          </div>
        </section>

        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <h2 className="text-[28px] md:text-[32px] mb-md">Swollen MacBook battery FAQ</h2>
          <FAQAccordion items={FAQS} injectSchema tone="dark" />
        </section>

        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <h2 className="text-[22px] font-bold mb-md">Related MacBook battery services</h2>
          <div className="flex flex-wrap gap-sm">
            {[
              { label: "MacBook Battery Replacement Dubai", href: "/macbook-battery-replacement-dubai" },
              { label: "Same-Day MacBook Repair Dubai", href: "/same-day-macbook-repair-dubai" },
              { label: "MacBook Repair Dubai", href: "/" },
              { label: "MacBook Water Damage Repair", href: "/macbook-water-damage-repair-dubai" },
            ].map(({ label, href }) => (
              <a key={href} href={href} className="border border-border rounded-md px-md py-xs text-[14px] hover:bg-bg-card transition-colors">{label}</a>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <h2 className="text-[28px] md:text-[32px] mb-lg">Find us. Concord Tower, Dubai Media City</h2>
          <LocationBlock tone="dark" />
        </section>
      </div>
      <RelatedArticles path="/macbook-battery-swollen-repair-dubai" />
    </PageShell>
  );
}
