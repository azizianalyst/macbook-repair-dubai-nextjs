"use client";
import { Star, CheckCircle2, Phone, MessageCircle, Shield, Clock, Wrench, Award } from "lucide-react";
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
  { label: "Screen replacement",   price: "From AED 179",  time: "40 min",   note: "OLED True Tone on iPhone 11–17" },
  { label: "Battery replacement",  price: "From AED 250",  time: "30 min",   note: "3-month warranty, 80% capacity guarantee" },
  { label: "Back glass repair",    price: "From AED 300",  time: "Same day", note: "iPhone 8 through 16 Pro Max" },
  { label: "Face ID repair",       price: "From AED 350",  time: "Same day", note: "Dot-projector assembly, iPhone X–17" },
  { label: "Charging port repair", price: "From AED 200",  time: "1 hr",     note: "Lightning and USB-C" },
  { label: "Water damage",         price: "From AED 300",  time: "1–2 days", note: "Ultrasonic clean + board inspection" },
  { label: "Camera repair",        price: "From AED 350",  time: "Same day", note: "Front, rear, periscope zoom modules" },
  { label: "Logic board repair",   price: "From AED 450",  time: "2–5 days", note: "Component-level micro-soldering" },
];

const CRITERIA = [
  { icon: Wrench,   title: "Genuine-grade OLED panels",      body: "The best iPhone repair shops in Dubai use OLED panels with True Tone calibration for iPhone 11 and above. Cheap LCD replacements on OLED phones have visibly lower contrast, no True Tone, and typically fail within 6 months." },
  { icon: Clock,    title: "Screen replaced in 40 minutes",  body: "A shop that takes more than 90 minutes to replace an iPhone screen is either using a difficult process or low-skill technicians. iPhone screen replacement is a well-practised job, 40 minutes is standard." },
  { icon: Shield,   title: "Written warranty, not verbal",   body: "The best iPhone repair in Dubai comes with a written warranty card: device serial number, repair type, parts used, and expiry date. A verbal 'we'll fix it if it breaks' is not a warranty." },
  { icon: Award,    title: "No Face ID damage after screen", body: "A poorly replaced iPhone screen can break Face ID, the dot projector sits behind the earpiece bracket and must be re-seated precisely. Ask any shop: 'Will my Face ID still work after the screen?' If they hesitate, walk out." },
];

const COMPARISONS = [
  { shop: "MacBook Repair Dubai (us)", screen: "From AED 179", time: "40 min", warranty: "Up to 12 months", faceId: "Preserved", pickup: "Free" },
  { shop: "Apple Store / AASP",        screen: "AED 549–1,699", time: "3–5 days", warranty: "90 days",         faceId: "Preserved", pickup: "No" },
  { shop: "Karama / generic shops",    screen: "AED 80–150",    time: "30–60 min", warranty: "Verbal / 1 month", faceId: "Risk of damage", pickup: "No" },
];

const WHY_US = [
  "iPhone 6 through iPhone 17 Pro Max, 11 active generations in stock",
  "OLED panels with True Tone calibration for iPhone 11–17",
  "Face ID preserved on every screen replacement, guaranteed",
  "Screen in 40 minutes, battery in 30 minutes",
  "Free pickup and delivery across Dubai Mainland",
  "Written warranty up to 12 months",
  "Free diagnosis, no fix, no charge",
  "5.0 stars · 216+ verified Google reviews · Since 2004",
];

const FAQS = [
  { q: "What is the best iPhone repair shop in Dubai?",
    a: "The best iPhone repair in Dubai uses genuine-grade OLED panels with True Tone, preserves Face ID on every screen replacement, gives a written warranty of at least 6 months, and replaces the screen in 40 minutes. We've done this since 2004 at Concord Tower, Dubai Media City, 5.0 stars from 216+ verified reviews." },
  { q: "How much does the best iPhone screen repair cost in Dubai?",
    a: "Quality iPhone screen repair in Dubai starts from AED 179 for older LCD models and runs to AED 1,400 for the iPhone 17 Pro Max OLED. Cheap shops quote AED 80–120 but use grey-market panels without True Tone that dim and yellow within months. The best repair is not the cheapest, it's the one with the best OLED and a 6-month written warranty." },
  { q: "Can iPhone Face ID be damaged during a screen repair?",
    a: "Yes, if the repair technician damages the dot-projector flex cable during screen removal, Face ID stops working permanently (Apple ties it to the original module and can't be replaced independently). The best iPhone repair shops in Dubai use screen-removal tools that protect the dot-projector bracket. We guarantee Face ID works after every screen replacement." },
  { q: "Is it better to use Apple Store or an independent shop for iPhone repair in Dubai?",
    a: "Apple Store for screen repair under AppleCare+ costs AED 99, hard to beat. Out of warranty, Apple Store charges AED 549–1,699 for screen replacement. Independent specialists do the same job from AED 179 with comparable parts and a longer warranty. For logic board issues, independent specialists offer component-level repair at 40–60% of Apple's module-swap price." },
  { q: "How fast can you fix my iPhone in Dubai?",
    a: "Screen replacement: 40 minutes. Battery replacement: 30 minutes. Back glass: same day. Face ID repair: same day. Water damage: 1–2 days. Logic board: 2–5 days. Drop in before 4 pm or request free pickup from anywhere in Dubai Mainland, screen and battery jobs return the same day." },
  { q: "Do you offer iPhone repair at home in Dubai?",
    a: "We offer free pickup and delivery, a courier collects your iPhone from your home or office anywhere in Dubai Mainland, repair is completed at our Concord Tower workshop, and the phone is returned the same day. This is safer than a home-visit repair, which can't carry the tools and microscopes needed for quality work." },
];

const FEATURED_REVIEW_INDEXES = [1, 4, 8, 14, 20, 25];

export default function BestIPhoneRepair() {
  const reviews = FEATURED_REVIEW_INDEXES.map((i) => REVIEWS[i % REVIEWS.length]).filter(Boolean);

  useSeo({
    title: "Best iPhone Repair Dubai 2026. Screen from AED 179, 5★ | Since 2004",
    description:
      "Best iPhone repair in Dubai. Screen from AED 179, battery from AED 250. OLED True Tone, Face ID preserved. Written warranty up to 12 months. 216+ reviews. Call 055 741 3706.",
    path: "/best-iphone-repair-dubai",
  });

  return (
    <PageShell>
      <div className="bg-bg-alt text-text -mb-[4rem]">
        <Hero
          image={undefined}
          imageAlt="Best iPhone repair Dubai"
          variant="device"
          tone="dark"
          eyebrow="Best iPhone repair · Dubai · Since 2004"
          title="Best iPhone Repair in Dubai, 2026"
          subtitle="Screen from AED 179 · OLED True Tone · Face ID preserved · Written warranty up to 12 months · 5.0 stars · 216+ reviews."
        >
          <p className="mt-md flex flex-wrap items-center gap-md text-[14px] text-text-muted">
            <span className="flex items-center gap-1"><Star size={16} className="fill-star text-star" aria-hidden /><Star size={16} className="fill-star text-star" aria-hidden /><Star size={16} className="fill-star text-star" aria-hidden /><Star size={16} className="fill-star text-star" aria-hidden /><Star size={16} className="fill-star text-star" aria-hidden /> 5.0 · 216+ reviews</span>
            <span>·</span>
            <span>iPhone 6 through 17 Pro Max</span>
            <span>·</span>
            <span>40 min screen repair</span>
          </p>
        </Hero>

        <USPStrip tone="dark" />

        <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
          <BreadcrumbTrail tone="dark" trail={[{ name: "Home", path: "/" }, { name: "iPhone Repair Dubai", path: "/iphone-repair-dubai" }, { name: "Best iPhone Repair Dubai", path: "/best-iphone-repair-dubai" }]} />
        </section>

        <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
          <QuickAnswer
            tone="dark"
            question="What is the best iPhone repair in Dubai?"
            answer="The best iPhone repair in Dubai is at Concord Tower, Office #45, Dubai Media City, screen from AED 179 with OLED True Tone, Face ID preserved, written warranty up to 12 months, 40-minute screen replacement, free pickup across Dubai. 5.0 stars from 216+ verified reviews since 2004. WhatsApp 055 741 3706."
          />
        </section>

        {/* What to look for */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <h2 className="text-[28px] md:text-[32px] mb-sm">4 things to check before choosing an iPhone repair shop in Dubai</h2>
          <div className="grid gap-md md:grid-cols-2">
            {CRITERIA.map(({ icon: Icon, title, body }) => (
              <article key={title} className="border border-border bg-bg-card rounded-md p-lg">
                <Icon size={24} className="text-accent mb-sm" aria-hidden />
                <h3 className="text-[17px] font-bold mb-sm">{title}</h3>
                <p className="text-[14px] text-text-muted leading-relaxed">{body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Comparison */}
        <section className="bg-bg-alt border-y border-border mt-3xl py-3xl">
          <div className="mx-auto max-w-content px-5 md:px-6">
            <h2 className="text-[28px] md:text-[32px] mb-md">iPhone repair comparison. Dubai 2026</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-[14px] border-collapse">
                <thead>
                  <tr className="border-b border-border text-left text-text-muted">
                    <th className="py-sm pr-lg font-semibold">Shop type</th>
                    <th className="py-sm pr-lg font-semibold">Screen price</th>
                    <th className="py-sm pr-lg font-semibold">Time</th>
                    <th className="py-sm pr-lg font-semibold">Warranty</th>
                    <th className="py-sm pr-lg font-semibold">Face ID</th>
                    <th className="py-sm font-semibold">Free pickup</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISONS.map((row, i) => (
                    <tr key={row.shop} className={`border-b border-border ${i === 0 ? "bg-accent/5" : ""}`}>
                      <td className="py-sm pr-lg font-medium">{row.shop}{i === 0 && <span className="ml-sm text-accent text-[12px] font-bold">← us</span>}</td>
                      <td className="py-sm pr-lg text-text-muted">{row.screen}</td>
                      <td className="py-sm pr-lg text-text-muted">{row.time}</td>
                      <td className="py-sm pr-lg text-text-muted">{row.warranty}</td>
                      <td className="py-sm pr-lg text-text-muted">{row.faceId}</td>
                      <td className="py-sm text-text-muted">{row.pickup}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Repairs */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <h2 className="text-[28px] md:text-[32px] mb-sm">iPhone repairs, prices & times</h2>
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
                    <td className="py-sm pr-lg text-text-muted whitespace-nowrap"><span className="inline-flex items-center gap-1"><Clock size={12} aria-hidden /> {row.time}</span></td>
                    <td className="py-sm text-text-muted">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Why us */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <h2 className="text-[28px] md:text-[32px] mb-md">Why we're rated the best iPhone repair in Dubai</h2>
          <ul className="grid gap-sm md:grid-cols-2">
            {WHY_US.map((item) => (
              <li key={item} className="flex items-start gap-sm text-[15px]">
                <CheckCircle2 size={18} className="text-accent shrink-0 mt-[2px]" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <VsAppleStore tone="dark" />

        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <div className="border border-border bg-bg-card rounded-md p-xl flex flex-col md:flex-row md:items-center gap-lg">
            <div className="flex-1">
              <h2 className="text-[22px] font-bold mb-sm">Get the best iPhone repair in Dubai today</h2>
              <p className="text-[15px] text-text-muted">Free diagnosis · Fixed quote · 40-min screen · Face ID preserved · Warranty up to 12 months.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-sm shrink-0">
              <a href={NAP.whatsappUrl} className="inline-flex items-center gap-sm bg-accent text-white font-semibold px-lg py-sm rounded-md text-[15px] hover:bg-accent/90">
                <MessageCircle size={18} aria-hidden /> WhatsApp
              </a>
              <a href={`tel:${NAP.phoneE164}`} className="inline-flex items-center gap-sm border border-border bg-bg font-semibold px-lg py-sm rounded-md text-[15px] hover:bg-bg-card">
                <Phone size={18} aria-hidden /> {NAP.phoneDisplay}
              </a>
            </div>
          </div>
        </section>

        <section className="bg-bg-alt border-y border-border mt-3xl py-3xl">
          <div className="mx-auto max-w-content px-5 md:px-6">
            <h2 className="text-[28px] md:text-[32px] mb-md">216+ reviews, what customers say</h2>
            <ReviewGrid reviews={reviews} tone="dark" />
          </div>
        </section>

        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <h2 className="text-[28px] md:text-[32px] mb-md">Best iPhone repair Dubai. FAQ</h2>
          <FAQAccordion items={FAQS} injectSchema tone="dark" />
        </section>

        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <h2 className="text-[22px] font-bold mb-md">More repair options in Dubai</h2>
          <div className="flex flex-wrap gap-sm">
            {[
              { label: "iPhone Repair Dubai", href: "/iphone-repair-dubai" },
              { label: "iPhone Repair Near Me Dubai", href: "/iphone-repair-near-me-dubai" },
              { label: "Best MacBook Repair Shop Dubai", href: "/best-macbook-repair-shop-dubai" },
              { label: "Best Apple Repair Dubai", href: "/best-apple-repair-dubai" },
              { label: "MacBook Repair Dubai", href: "/" },
              { label: "Apple Repair Dubai", href: "/apple-repair-dubai" },
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
      <RelatedArticles path="/best-iphone-repair-dubai" />
    </PageShell>
  );
}
