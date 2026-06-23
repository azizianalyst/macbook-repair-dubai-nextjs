"use client";
import { Star, CheckCircle2, Phone, MessageCircle, MapPin, Clock, Shield, Wrench, Award } from "lucide-react";
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

const CRITERIA = [
  { icon: Wrench,       title: "Component-level board repair",   body: "Most shops replace the whole logic board at AED 2,000+. The best MacBook repair shop in Dubai does component-level micro-soldering, fixing the specific chip or capacitor that failed. Cost: AED 800–1,500. Same outcome, 40–60% cheaper." },
  { icon: Clock,        title: "Same-day for common repairs",     body: "Screen, battery, keyboard, trackpad, and charging port should be done the day you arrive. Any shop quoting 3–5 days for a battery replacement is either understaffed or outsourcing the work." },
  { icon: Shield,       title: "Written warranty on every repair", body: "The best shops back every repair with a written warranty, not a verbal promise. Look for at least 6 months on screens and 3 months on batteries with a capacity guarantee. Avoid any shop that quotes 'warranty depends on parts availability'." },
  { icon: Award,        title: "Transparent pricing before work starts", body: "A fixed written quote before any work begins separates professional shops from price-bait operations. You should never receive a higher bill than the quote, full stop." },
  { icon: CheckCircle2, title: "Experience with Apple Silicon",   body: "M1 through M5 MacBooks use a unified memory architecture that changes how board faults present. A technician who only worked on Intel Macs will misdiagnose Apple Silicon faults regularly. Ask: 'Have you fixed an M3 or M4 logic board?'" },
  { icon: MapPin,       title: "Free diagnosis, no fix no fee",   body: "The best repair shops in Dubai diagnose for free and charge only if the repair succeeds. Any shop charging AED 100–200 'diagnostic fee' before they've even looked at the Mac is a red flag." },
];

const COMPARISONS = [
  { shop: "MacBook Repair Dubai (us)",    location: "Concord Tower, Media City", board: "Yes, component level", warranty: "Up to 12 months", sameDay: "Yes", pickup: "Free", price: "From AED 450" },
  { shop: "Apple Store / AASP",           location: "Dubai Mall / online",       board: "Module swap only",      warranty: "90 days",          sameDay: "No (3–5 days)", pickup: "No", price: "From AED 900" },
  { shop: "Generic phone repair shops",   location: "Various (Karama etc.)",     board: "Some, inconsistent",  warranty: "Verbal / 1 month",  sameDay: "Sometimes",     pickup: "No", price: "Varies, no fixed quote" },
];

const WHY_US = [
  "21 years repairing MacBooks in Dubai. Intel 2008 through M5 2025",
  "Component-level logic board repair (not module swap), saves AED 500–1,000",
  "Same-day screen, battery, keyboard, and trackpad",
  "Free pickup and delivery across Dubai Mainland",
  "Written warranty up to 12 months on every repair",
  "Free diagnosis, no fix, no charge",
  "5.0 stars · 216+ verified Google reviews",
  "Office #45, Concord Tower, Dubai Media City, no hidden location",
];

const FAQS = [
  { q: "What makes the best MacBook repair shop in Dubai?",
    a: "The best MacBook repair shop in Dubai does component-level logic board repair (not just module swaps), provides a written fixed quote before starting, offers same-day service for screen and battery, backs every repair with a written warranty of at least 6 months, and diagnoses for free. Price alone is not the best indicator, a shop quoting AED 200 for a screen is likely using grey-market panels that fail within 3 months." },
  { q: "Is MacBook Repair Dubai the best shop in Dubai?",
    a: "We have 5.0 stars from 216+ verified Google reviews, 21 years of MacBook repair experience in Dubai Media City, same-day service on the most common repairs, component-level board repair capability, and written warranties of up to 12 months. We let the track record speak, read the reviews and compare." },
  { q: "How do I choose between MacBook repair shops in Dubai?",
    a: "Ask four questions: (1) Do you diagnose free of charge? (2) Do you give a written fixed quote before starting? (3) Do you repair MacBook logic boards at component level or replace the whole board? (4) What is the written warranty? A good shop answers yes, yes, component level, and at least 6 months respectively." },
  { q: "Is it better to go to Apple Store or an independent MacBook repair shop in Dubai?",
    a: "Apple Store (or AASP) for repairs under AppleCare+, the AED 99 screen repair fee is hard to beat. For out-of-warranty work, independent specialists cost 40–60% less. Apple Store replaces whole modules; independent specialists repair the component that failed, which is cheaper and produces the same outcome on most faults." },
  { q: "How much does the best MacBook repair shop charge in Dubai?",
    a: "Screen from AED 499, battery from AED 450, keyboard from AED 550, logic board from AED 800. Diagnosis is free. Compare: Apple Store charges AED 900–2,500 for the same jobs. Generic shops may quote less but often use grey-market parts without warranty." },
  { q: "Where is the best MacBook repair shop in Dubai located?",
    a: "Office #45, 10th Floor, Concord Tower, Al Sufouh, Dubai Media City. Near Media City Metro station. Open Monday to Saturday 9 am–10 pm. Free pickup also available from anywhere in Dubai Mainland. WhatsApp 055 741 3706." },
];

const FEATURED_REVIEW_INDEXES = [0, 2, 5, 10, 17, 24];

export default function BestMacBookRepairShop() {
  const reviews = FEATURED_REVIEW_INDEXES.map((i) => REVIEWS[i % REVIEWS.length]).filter(Boolean);

  useSeo({
    title: "Best MacBook Repair Shop Dubai 2026, 5★, From AED 450 | Since 2004",
    description:
      "Best MacBook repair shop in Dubai. 216+ 5-star reviews. Component-level board repair, same-day service, written warranty up to 12 months. From AED 450. Call 055 741 3706.",
    path: "/best-macbook-repair-shop-dubai",
  });

  return (
    <PageShell>
      <div className="bg-bg-alt text-text -mb-[4rem]">
        <Hero
          image={undefined}
          imageAlt="Best MacBook repair shop Dubai"
          variant="device"
          tone="dark"
          eyebrow="Best MacBook repair · Dubai · Since 2004"
          title="Best MacBook Repair Shop in Dubai, 2026"
          subtitle="5.0 stars · 216+ reviews · Component-level board repair · Same-day screen & battery · Written warranty up to 12 months."
        >
          <p className="mt-md flex flex-wrap items-center gap-md text-[14px] text-text-muted">
            <span className="flex items-center gap-1"><Star size={16} className="fill-star text-star" aria-hidden /><Star size={16} className="fill-star text-star" aria-hidden /><Star size={16} className="fill-star text-star" aria-hidden /><Star size={16} className="fill-star text-star" aria-hidden /><Star size={16} className="fill-star text-star" aria-hidden /> 5.0 · 216+ reviews</span>
            <span>·</span>
            <span>21 years in Dubai</span>
            <span>·</span>
            <span>Free diagnosis</span>
          </p>
        </Hero>

        <USPStrip tone="dark" />

        <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
          <BreadcrumbTrail tone="dark" trail={[{ name: "Home", path: "/" }, { name: "Best MacBook Repair Shop Dubai", path: "/best-macbook-repair-shop-dubai" }]} />
        </section>

        <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
          <QuickAnswer
            tone="dark"
            question="What is the best MacBook repair shop in Dubai?"
            answer="The best MacBook repair shop in Dubai is at Concord Tower, Office #45, Dubai Media City, 5.0 stars from 216+ verified reviews, 21 years experience, component-level logic board repair, same-day screen and battery service, written warranty up to 12 months, free diagnosis. Screen from AED 499, battery from AED 450. WhatsApp 055 741 3706."
          />
        </section>

        {/* What to look for */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <h2 className="text-[28px] md:text-[32px] mb-sm">6 things the best MacBook repair shop must have</h2>
          <p className="text-[16px] text-text-muted max-w-[70ch] mb-lg">Use this checklist before choosing any repair shop in Dubai, including us.</p>
          <div className="grid gap-md md:grid-cols-2 lg:grid-cols-3">
            {CRITERIA.map(({ icon: Icon, title, body }) => (
              <article key={title} className="border border-border bg-bg-card rounded-md p-lg">
                <Icon size={24} className="text-accent mb-sm" aria-hidden />
                <h3 className="text-[17px] font-bold mb-sm">{title}</h3>
                <p className="text-[14px] text-text-muted leading-relaxed">{body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Comparison table */}
        <section className="bg-bg-alt border-y border-border mt-3xl py-3xl">
          <div className="mx-auto max-w-content px-5 md:px-6">
            <h2 className="text-[28px] md:text-[32px] mb-md">MacBook repair shop comparison. Dubai 2026</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-[14px] border-collapse">
                <thead>
                  <tr className="border-b border-border text-left text-text-muted">
                    <th className="py-sm pr-lg font-semibold">Shop</th>
                    <th className="py-sm pr-lg font-semibold">Board repair</th>
                    <th className="py-sm pr-lg font-semibold">Warranty</th>
                    <th className="py-sm pr-lg font-semibold">Same-day</th>
                    <th className="py-sm pr-lg font-semibold">Free pickup</th>
                    <th className="py-sm font-semibold">Starting price</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISONS.map((row, i) => (
                    <tr key={row.shop} className={`border-b border-border ${i === 0 ? "bg-accent/5" : ""}`}>
                      <td className="py-sm pr-lg font-medium">{row.shop}{i === 0 && <span className="ml-sm text-accent text-[12px] font-bold">← YOU ARE HERE</span>}</td>
                      <td className="py-sm pr-lg text-text-muted">{row.board}</td>
                      <td className="py-sm pr-lg text-text-muted">{row.warranty}</td>
                      <td className="py-sm pr-lg text-text-muted">{row.sameDay}</td>
                      <td className="py-sm pr-lg text-text-muted">{row.pickup}</td>
                      <td className="py-sm text-text-muted">{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Why us checklist */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <h2 className="text-[28px] md:text-[32px] mb-md">Why customers call us the best MacBook repair shop in Dubai</h2>
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

        {/* CTA */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <div className="border border-border bg-bg-card rounded-md p-xl flex flex-col md:flex-row md:items-center gap-lg">
            <div className="flex-1">
              <h2 className="text-[22px] font-bold mb-sm">Get a quote from Dubai's best-rated MacBook repair shop</h2>
              <p className="text-[15px] text-text-muted">Free diagnosis · Fixed written quote · Same-day for screen & battery · Warranty up to 12 months.</p>
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

        {/* Reviews */}
        <section className="bg-bg-alt border-y border-border mt-3xl py-3xl">
          <div className="mx-auto max-w-content px-5 md:px-6">
            <h2 className="text-[28px] md:text-[32px] mb-md">216+ reviews, see what customers say</h2>
            <ReviewGrid reviews={reviews} tone="dark" />
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <h2 className="text-[28px] md:text-[32px] mb-md">Best MacBook repair shop Dubai. FAQ</h2>
          <FAQAccordion items={FAQS} injectSchema tone="dark" />
        </section>

        {/* Related */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <h2 className="text-[22px] font-bold mb-md">More MacBook repair options</h2>
          <div className="flex flex-wrap gap-sm">
            {[
              { label: "MacBook Repair Dubai", href: "/" },
              { label: "Same-Day MacBook Repair", href: "/same-day-macbook-repair-dubai" },
              { label: "MacBook Screen Repair Dubai", href: "/macbook-screen-repair-dubai" },
              { label: "MacBook Battery Replacement Dubai", href: "/macbook-battery-replacement-dubai" },
              { label: "Best iPhone Repair Dubai", href: "/best-iphone-repair-dubai" },
              { label: "Best Apple Repair Dubai", href: "/best-apple-repair-dubai" },
            ].map(({ label, href }) => (
              <a key={href} href={href} className="border border-border rounded-md px-md py-xs text-[14px] hover:bg-bg-card transition-colors">{label}</a>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <h2 className="text-[28px] md:text-[32px] mb-lg">Visit us. Concord Tower, Dubai Media City</h2>
          <LocationBlock tone="dark" />
        </section>
      </div>
      <RelatedArticles path="/best-macbook-repair-shop-dubai" />
    </PageShell>
  );
}
