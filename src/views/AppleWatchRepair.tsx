"use client";
import { Watch, Shield, Zap, Clock, Star, Phone, MessageCircle, Droplets, Battery, Monitor, Settings } from "lucide-react";
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

const REPAIRS = [
  { icon: Monitor,   label: "Screen Replacement",      price: "AED 350–750",  time: "Same day",   note: "Series 4 through Ultra 2, crack-free LTPO display, True Tone, Always-On." },
  { icon: Battery,   label: "Battery Replacement",     price: "AED 250–400",  time: "Same day",   note: "80% capacity test post-swap. Certified cell, 3-month battery warranty." },
  { icon: Droplets,  label: "Water Damage Repair",     price: "AED 400–900",  time: "1–3 days",   note: "Ultrasonic clean, corrosion removal, crown seal replacement." },
  { icon: Settings,  label: "Digital Crown Repair",    price: "AED 200–450",  time: "Same day",   note: "Sticky, unresponsive, or worn crown, full assembly replacement." },
  { icon: Zap,       label: "Charging Port / Band Connector", price: "AED 180–350", time: "Same day", note: "Magnetic charging pins or band-release mechanism." },
  { icon: Shield,    label: "Back Glass Replacement",  price: "AED 220–450",  time: "Same day",   note: "Cracked sapphire back or composite rear, pressure-bonded to frame." },
];

const SERIES_SUPPORTED = [
  { series: "Apple Watch Ultra 3 / Ultra 2", chip: "S10 / S9", note: "49mm titanium, screen and battery most common" },
  { series: "Apple Watch Series 10",         chip: "S10",       note: "Thinnest casing, screen crack repaired same day" },
  { series: "Apple Watch Series 9",          chip: "S9",        note: "Double-tap gesture survives repair" },
  { series: "Apple Watch Series 8 / 7",      chip: "S8 / S7",   note: "Blood oxygen sensor preserved" },
  { series: "Apple Watch Series 6 / 5 / 4",  chip: "S5 / S4",   note: "LTPO OLED, older stock cells available" },
  { series: "Apple Watch SE (2nd gen)",       chip: "S8",        note: "Sport-grade aluminium, budget-friendly screen repair" },
  { series: "Apple Watch SE (1st gen) / Series 3", chip: "S3", note: "Legacy, screen available, battery lead time 1–2 days" },
];

const PROCESS = [
  { step: "1", title: "Free Diagnosis", body: "Drop in, ship in, or request pickup. Shafiq inspects the watch in front of you, no charge for assessment." },
  { step: "2", title: "Fixed Quote",    body: "You receive a written price before any work starts. No surprise charges." },
  { step: "3", title: "Expert Repair",  body: "Genuine-grade cells and OEM-spec glass. Watch repaired with precision screwdrivers, adhesive press, and vacuum chamber for screen bonds." },
  { step: "4", title: "Quality Check",  body: "Heart-rate sensor, GPS, crown rotation, haptic motor, and charging all tested before handoff." },
  { step: "5", title: "Warranty",       body: "Up to 12 months written warranty on screen and back glass. 3-month warranty on battery with 80% capacity guarantee." },
];

const FAQS = [
  { q: "How much does Apple Watch screen repair cost in Dubai?",
    a: "Screen replacement runs AED 350 to AED 750 depending on the series. Series 4–6 screens cost AED 350–500; Series 7–9 cost AED 450–600; Series 10 and Ultra 2 cost AED 600–750. WhatsApp 055 741 3706 with your exact model for a fixed quote." },
  { q: "Can you repair Apple Watch that has been water damaged?",
    a: "Yes. Apple Watch is rated water-resistant, not waterproof, repeated submersion, chlorine, or a cracked screen breaks the seal. We do an ultrasonic clean, corrosion inspection, and crown seal replacement. Most water-damage jobs finish in 1–2 days; severe corrosion takes up to 3 days." },
  { q: "How long does Apple Watch battery last before replacement is needed?",
    a: "Most Apple Watch batteries start holding under 80% of original capacity after 400–500 charge cycles, roughly 2–3 years of daily use. Signs: watch not making it through the day, charging twice daily, or iOS Battery Health below 80%. Replacement costs AED 250–400 and takes under an hour." },
  { q: "Is it worth repairing an older Apple Watch (Series 4 or 5)?",
    a: "Yes if the screen or battery alone is the issue. A Series 5 screen repair at AED 400 is far cheaper than replacing the watch. Logic board failure or severe water damage on a Series 4/5 may not be worth repairing, we assess free of charge and tell you honestly which situation you're in." },
  { q: "Do you replace Apple Watch batteries with genuine Apple cells?",
    a: "We use OEM-specification lithium-ion cells that match the original mAh rating. Genuine Apple batteries are only available through AASP channels; as an independent specialist we source factory-spec cells that pass the same 80% capacity test and carry a 3-month warranty." },
  { q: "Can Apple Watch be repaired while still under Apple warranty?",
    a: "If your watch is under AppleCare+ you should claim through Apple first, screen repair is AED 99 (AED 549 service fee applies once). If you're out of warranty or the damage type isn't covered, independent repair costs 40–60% less than the Apple Store price." },
  { q: "Do you offer Apple Watch repair pickup in Dubai?",
    a: "Yes, free pickup and delivery across Dubai Mainland for Apple Watch repairs. WhatsApp 055 741 3706, share your location, and a courier collects within 2–4 hours. Repair usually completes the same day; watch is returned the following morning." },
  { q: "Where are you located for Apple Watch repair in Dubai?",
    a: "Office #45, 10th Floor, Concord Tower, Al Sufouh, Dubai Media City. Near the Media City Metro station. Open Monday to Saturday 9 am–10 pm. Sunday: WhatsApp answered, walk-ins by appointment." },
];

const FEATURED_REVIEW_INDEXES = [2, 6, 11, 17, 22, 28];

export default function AppleWatchRepair() {
  const reviews = FEATURED_REVIEW_INDEXES.map((i) => REVIEWS[i % REVIEWS.length]).filter(Boolean);

  useSeo({
    title: "Apple Watch Repair Dubai. Screen, Battery, Water Damage | From AED 250",
    description:
      "Apple Watch repair in Dubai. Screen from AED 350, battery from AED 250, water damage from AED 400. Series 3–Ultra 2. Same-day, free diagnosis. Call 055 741 3706.",
    path: "/apple-watch-repair-dubai",
  });

  return (
    <PageShell>
      <div className="bg-bg-alt text-text -mb-[4rem]">
        <Hero
          image={undefined}
          imageAlt="Apple Watch repair Dubai, screen, battery, and water damage"
          variant="device"
          tone="dark"
          eyebrow="Apple Watch specialist · Dubai · Since 2004"
          title="Apple Watch Repair Dubai. Screen, Battery & Water Damage"
          subtitle="Series 3 through Ultra 2. Screen from AED 350, battery from AED 250. Same-day repair at Concord Tower, Dubai Media City."
        >
          <p className="mt-md flex flex-wrap items-center gap-md text-[14px] text-text-muted">
            <span className="flex items-center gap-1"><Star size={16} className="fill-star text-star" aria-hidden /> 5.0 · 216+ reviews</span>
            <span>·</span>
            <span>Series 3 through Ultra 2</span>
            <span>·</span>
            <span>Free diagnosis · Free pickup</span>
          </p>
        </Hero>

        <USPStrip tone="dark" />

        <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
          <BreadcrumbTrail
            tone="dark"
            trail={[
              { name: "Home", path: "/" },
              { name: "Apple Repair", path: "/apple-repair-dubai" },
              { name: "Apple Watch Repair", path: "/apple-watch-repair-dubai" },
            ]}
          />
        </section>

        <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
          <QuickAnswer
            tone="dark"
            question="Where can I get my Apple Watch repaired in Dubai?"
            answer="Apple Watch repair in Dubai at Concord Tower, Dubai Media City. Screen replacement from AED 350, battery replacement from AED 250, water damage from AED 400. Covers Series 3 through Ultra 2. Same-day service, free diagnosis, free pickup across Dubai, warranty up to 12 months. WhatsApp 055 741 3706."
          />
        </section>

        {/* Repair types */}
        <section aria-labelledby="repairs" className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <h2 id="repairs" className="text-[28px] md:text-[32px] mb-sm">Apple Watch repairs we handle</h2>
          <p className="text-[16px] text-text-muted max-w-[70ch] mb-lg">
            Every common Apple Watch fault, cracked screen, dead battery, sticky crown, water ingress, repaired at our Dubai Media City workshop.
          </p>
          <div className="grid gap-md sm:grid-cols-2 lg:grid-cols-3">
            {REPAIRS.map(({ icon: Icon, label, price, time, note }) => (
              <article key={label} className="border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md p-lg flex flex-col gap-sm">
                <div className="flex items-center gap-sm">
                  <Icon size={22} className="text-accent shrink-0" aria-hidden />
                  <h3 className="text-[17px] font-bold">{label}</h3>
                </div>
                <p className="text-[22px] font-bold text-accent">{price}</p>
                <p className="text-[13px] text-text-muted font-medium flex items-center gap-1">
                  <Clock size={13} aria-hidden /> {time}
                </p>
                <p className="text-[14px] text-text-muted leading-relaxed">{note}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Series supported */}
        <section className="bg-bg-alt border-y border-border mt-3xl py-3xl">
          <div className="mx-auto max-w-content px-5 md:px-6">
            <h2 className="text-[28px] md:text-[32px] mb-md">Every Apple Watch series we repair</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-[14px] border-collapse">
                <thead>
                  <tr className="border-b border-border text-left text-text-muted">
                    <th className="py-sm pr-lg font-semibold">Model</th>
                    <th className="py-sm pr-lg font-semibold">Chip</th>
                    <th className="py-sm font-semibold">Common repair</th>
                  </tr>
                </thead>
                <tbody>
                  {SERIES_SUPPORTED.map((row) => (
                    <tr key={row.series} className="border-b border-border">
                      <td className="py-sm pr-lg font-medium">{row.series}</td>
                      <td className="py-sm pr-lg text-text-muted">{row.chip}</td>
                      <td className="py-sm text-text-muted">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <h2 className="text-[28px] md:text-[32px] mb-md">How the repair works</h2>
          <div className="grid gap-md md:grid-cols-5">
            {PROCESS.map(({ step, title, body }) => (
              <article key={step} className="border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md p-lg">
                <span className="text-[28px] font-black text-accent block mb-sm">{step}</span>
                <h3 className="text-[16px] font-bold mb-xs">{title}</h3>
                <p className="text-[14px] text-text-muted leading-relaxed">{body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Why independent beats Apple Store */}
        <VsAppleStore tone="dark" />

        {/* CTA strip */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <div className="border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md p-xl flex flex-col md:flex-row md:items-center gap-lg">
            <div className="flex-1">
              <h2 className="text-[22px] font-bold mb-sm">Get a quote for your Apple Watch</h2>
              <p className="text-[15px] text-text-muted">Free diagnosis. Fixed price before we start. Same-day for screen and battery.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-sm shrink-0">
              <a
                href={NAP.whatsappUrl}
                className="inline-flex items-center gap-sm bg-accent text-white font-semibold px-lg py-sm rounded-md text-[15px] hover:bg-accent/90"
              >
                <MessageCircle size={18} aria-hidden /> WhatsApp
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
            <h2 className="text-[28px] md:text-[32px] mb-md">What customers say</h2>
            <ReviewGrid reviews={reviews} tone="dark" />
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <h2 className="text-[28px] md:text-[32px] mb-md">Apple Watch repair FAQ</h2>
          <FAQAccordion items={FAQS} injectSchema tone="dark" />
        </section>

        {/* Related services */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <h2 className="text-[22px] font-bold mb-md">Other Apple device repairs in Dubai</h2>
          <div className="flex flex-wrap gap-sm">
            {[
              { label: "iPhone Repair Dubai", href: "/iphone-repair-dubai" },
              { label: "iPad Repair Dubai", href: "/ipad-repair-dubai" },
              { label: "MacBook Repair Dubai", href: "/" },
              { label: "iMac Repair Dubai", href: "/imac-repair-dubai" },
              { label: "Apple Repair Dubai", href: "/apple-repair-dubai" },
              { label: "Mac Repair Dubai", href: "/mac-repair-dubai" },
            ].map(({ label, href }) => (
              <a key={href} href={href} className="border border-border rounded-md px-md py-xs text-[14px] hover:bg-bg-card transition-colors">
                {label}
              </a>
            ))}
          </div>
        </section>

        {/* Location */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <h2 className="text-[28px] md:text-[32px] mb-lg">Visit the workshop in Dubai Media City</h2>
          <LocationBlock tone="dark" />
        </section>
      </div>
      <RelatedArticles path="/apple-watch-repair-dubai" />
    </PageShell>
  );
}
