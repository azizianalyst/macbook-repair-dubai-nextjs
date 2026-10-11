"use client";
import { withSlash } from "@/lib/utils";
import { Star, CheckCircle2, Phone, MessageCircle, Laptop, Smartphone, Tablet, Monitor } from "lucide-react";
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

const DEVICES = [
  { icon: Laptop,     label: "MacBook",          from: "Price on request",  href: "/",                          detail: "Air, Pro 13–16\", Intel & M1–M5. Screen, battery, keyboard, logic board." },
  { icon: Monitor,    label: "iMac",              from: "Price on request",  href: "/imac-repair-dubai",         detail: "21.5\", 24\", 27\" Retina 5K. Screen, SSD, power supply, fan." },
  { icon: Monitor,    label: "Mac mini & Studio", from: "Price on request",  href: "/mac-mini-repair-dubai",     detail: "M1–M4 Mac mini, Mac Studio. Logic board, SSD, diagnostics." },
  { icon: Smartphone, label: "iPhone",            from: "Price on request",  href: "/iphone-repair-dubai",       detail: "iPhone 6 through 17 Pro Max. Screen in 40 min, battery in 30 min." },
  { icon: Tablet,     label: "iPad",              from: "Price on request",  href: "/ipad-repair-dubai",         detail: "mini, Air, standard, Pro 11/13\". Screen, battery, charging port." },
];

const WHY_US = [
  "Mac, iPhone and iPad. MacBook, iMac, Mac mini, Mac Studio, iPhone, iPad",
  "Apple-only repair experience in Dubai since 2004",
  "Component-level logic board repair, not module swaps",
  "Same-day for iPhone screen, MacBook battery, iPad screen",
  "Free pickup and delivery across all Dubai Mainland",
  "Written warranty up to 12 months on every repair",
  "Free diagnosis, no fix, no charge policy",
  `${RATING_LABEL} stars · ${REVIEW_COUNT_LABEL} verified Google reviews`,
];

const FAQS = [
  { q: "What is the best Apple repair service in Dubai?",
    a: `The best Apple repair service in Dubai covers every Apple device (not just iPhones), does component-level logic board repair, gives a written warranty that states the period for each repair, offers same-day service for common repairs, and has transparent pricing before work starts. We've done this since 2004 at Concord Tower, Dubai Media City, ${RATING_LABEL} stars from ${REVIEW_COUNT_LABEL} verified reviews.` },
  { q: "Can one shop repair all my Apple devices in Dubai?",
    a: "Yes, we repair MacBook (Air, Pro, Intel through M5), iMac (21.5\", 24\", 27\"), Mac mini, Mac Studio, Mac Pro, iPhone (6 through 18 Pro Max) and iPad (all generations including Pro M5). One workshop, one warranty card, one WhatsApp thread." },
  { q: "How does the best Apple repair in Dubai compare to Apple Store?",
    a: "Apple Store typically costs far more for the same repair and only does module swaps (no component-level board repair). Independent specialists like us repair the specific component that failed, cheaper outcome, same device functionality. For repairs under AppleCare+, use Apple first. Out of warranty, independent repair is the better value in almost every case." },
  { q: "How much does Apple repair cost in Dubai?",
    a: "Apple repair cost in Dubai depends on your exact device and fault, covering MacBook, iPhone and iPad screens, batteries and logic boards. Diagnosis is always free. WhatsApp 055 741 3706 with your device model and fault for a fixed quote before any work starts." },
  { q: "Do you repair Apple devices that are no longer supported by Apple?",
    a: "Yes, we repair MacBooks from 2012 onward, iPhones from iPhone 6, iPads from iPad Air 1st gen, and iMacs from 2013. Apple stops supporting older devices; independent specialists continue to repair them as long as parts and boards are available." },
  { q: "Do you offer Apple repair pickup in Dubai?",
    a: "Yes, free pickup and delivery across Dubai Mainland for every Apple device. WhatsApp 055 741 3706 with your device, location, and fault. Courier arrives within 2–4 hours. Most repairs are completed the same day." },
];

const FEATURED_REVIEW_INDEXES = [2, 6, 11, 16, 22, 28];

export default function BestAppleRepair() {
  const reviews = FEATURED_REVIEW_INDEXES.map((i) => REVIEWS[i % REVIEWS.length]).filter(Boolean);

  useSeo({
    title: "Best Apple Repair Dubai: What to Look For in 2026",
    description:
      `Choosing an Apple repair shop in Dubai? Check parts, warranty, board-level skill and real reviews first. Independent, ${RATING_LABEL} on Google. WhatsApp for a quote.`,
    path: "/best-apple-repair-dubai",
  });

  // Scaffolded with image={undefined} (audit 2026-09-23).
  const heroImg = imageForRoute("/best-apple-repair-dubai");

  return (
    <PageShell>
      <div className="bg-bg-alt text-text -mb-[4rem]">
        <Hero
          image={heroImg?.src}
          imageAlt={heroImg?.alt}
          variant="device"
          tone="dark"
          eyebrow="Buyer’s guide · Dubai · Since 2004"
          title="Finding the best Apple repair in Dubai"
          subtitle={`MacBook, iMac, iPhone and iPad, repaired in-house. Message us on WhatsApp for a fixed quote. ${RATING_LABEL} stars · ${REVIEW_COUNT_LABEL} reviews. Free pickup. Warranty up to 12 months.`}
        >
          <p className="mt-md flex flex-wrap items-center gap-md text-[14px] text-text-muted">
            <span className="flex items-center gap-1"><Star size={16} className="fill-star text-star" aria-hidden /><Star size={16} className="fill-star text-star" aria-hidden /><Star size={16} className="fill-star text-star" aria-hidden /><Star size={16} className="fill-star text-star" aria-hidden /><Star size={16} className="fill-star text-star" aria-hidden /> {RATING_LABEL} · {REVIEW_COUNT_LABEL} reviews</span>
            <span>·</span>
            <span>6 Apple device families</span>
            <span>·</span>
            <span>In Dubai since 2004</span>
          </p>
        </Hero>

        <USPStrip tone="dark" />

        <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
          <BreadcrumbTrail tone="dark" trail={[{ name: "Home", path: "/" }, { name: "Apple Repair Dubai", path: "/apple-repair-dubai" }, { name: "Best Apple Repair Dubai", path: "/best-apple-repair-dubai" }]} />
        </section>

        <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
          <QuickAnswer
            tone="dark"
            question="What is the best Apple repair service in Dubai?"
            answer={`The best Apple repair in Dubai is at Concord Tower, Office #45, Dubai Media City, MacBook, iMac, iPhone and iPad repaired in-house, ${RATING_LABEL} stars from ${REVIEW_COUNT_LABEL} reviews, written warranty up to 12 months, free diagnosis, free pickup across Dubai. Independent specialist since 2004. WhatsApp 055 741 3706 for a fixed quote on your device.`}
          />
        </section>

        {/* Device grid */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <h2 className="text-[28px] md:text-[32px] mb-sm">Every Apple device repaired</h2>
          <p className="text-[16px] text-text-muted max-w-[70ch] mb-lg">One specialist for the whole Apple ecosystem, not a shop that does iPhones and subcontracts everything else.</p>
          <div className="grid gap-md sm:grid-cols-2 lg:grid-cols-3">
            {DEVICES.map(({ icon: Icon, label, from, href, detail }) => (
              <a key={label} href={withSlash(href)} className="border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md p-lg flex flex-col gap-sm hover:border-accent transition-colors">
                <div className="flex items-center gap-sm">
                  <Icon size={22} className="text-accent shrink-0" aria-hidden />
                  <h3 className="text-[17px] font-bold">{label}</h3>
                </div>
                <p className="text-[22px] font-bold text-accent">{from}</p>
                <p className="text-[13px] text-text-muted leading-relaxed">{detail}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Why us */}
        <section className="bg-bg-alt border-y border-border mt-3xl py-3xl">
          <div className="mx-auto max-w-content px-5 md:px-6">
            <h2 className="text-[28px] md:text-[32px] mb-md">Why customers rate us {RATING_LABEL} on Google</h2>
            <ul className="grid gap-sm md:grid-cols-2">
              {WHY_US.map((item) => (
                <li key={item} className="flex items-start gap-sm text-[15px]">
                  <CheckCircle2 size={18} className="text-accent shrink-0 mt-[2px]" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <VsAppleStore tone="dark" />

        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <div className="border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md p-xl flex flex-col md:flex-row md:items-center gap-lg">
            <div className="flex-1">
              <h2 className="text-[22px] font-bold mb-sm">Get the best Apple repair in Dubai today</h2>
              <p className="text-[15px] text-text-muted">Free diagnosis · Fixed quote · Same-day for common repairs · Warranty up to 12 months · Free pickup.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-sm shrink-0">
              <a href={withSlash(NAP.whatsappUrl)} className="inline-flex items-center gap-sm bg-accent text-white font-semibold px-lg py-sm rounded-md text-[15px] hover:bg-accent/90">
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
            <h2 className="text-[28px] md:text-[32px] mb-md">{REVIEW_COUNT_LABEL} reviews, what customers say</h2>
            <ReviewGrid reviews={reviews} tone="dark" />
          </div>
        </section>

        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <h2 className="text-[28px] md:text-[32px] mb-md">Best Apple repair Dubai. FAQ</h2>
          <FAQAccordion items={FAQS} injectSchema />
        </section>

        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <h2 className="text-[22px] font-bold mb-md">Best repair by device</h2>
          <div className="flex flex-wrap gap-sm">
            {[
              { label: "Best MacBook Repair Dubai", href: "/best-macbook-repair-dubai" },
              { label: "Best iPhone Repair Dubai", href: "/best-iphone-repair-dubai" },
              { label: "Apple Repair Dubai", href: "/apple-repair-dubai" },
              { label: "Apple Repair Near Me Dubai", href: "/apple-repair-near-me-dubai" },
              { label: "MacBook Repair Dubai", href: "/" },
              { label: "iPhone Repair Dubai", href: "/iphone-repair-dubai" },
            ].map(({ label, href }) => (
              <a key={href} href={withSlash(href)} className="border border-border rounded-md px-md py-xs text-[14px] hover:bg-bg-card transition-colors">{label}</a>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <h2 className="text-[28px] md:text-[32px] mb-lg">Find us. Concord Tower, Dubai Media City</h2>
          <LocationBlock tone="dark" />
        </section>
      </div>
      {/* Lead form (template-audit 2026-09-24: page shipped with none) */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-[80px]" aria-labelledby="page-lead">
        <h2 id="page-lead" className="text-[26px] md:text-[32px] font-bold mb-md">Get a free quote</h2>
        <LeadForm preset={PRESETS.repair} sourcePath="/best-apple-repair-dubai" defaultDeviceType="MacBook" />
      </section>

      <RelatedArticles path="/best-apple-repair-dubai" />
    </PageShell>
  );
}
