"use client";
import { Star, MessageCircle, Phone, ShieldCheck, Check, Building2, Droplets, Search } from "lucide-react";
import { Link } from "@/lib/router-compat";
import { PageShell } from "@/components/layout/PageShell";
import { QuickAnswer } from "@/components/blocks/QuickAnswer";
import { Hero } from "@/components/blocks/Hero";
import { USPStrip } from "@/components/blocks/USPStrip";
import { BreadcrumbTrail } from "@/components/blocks/BreadcrumbTrail";
import { FAQAccordion } from "@/components/blocks/FAQAccordion";
import { LocationBlock } from "@/components/blocks/LocationBlock";
import { Button } from "@/components/ui/button";
import { useSeo } from "@/hooks/use-seo";
import { localBusiness, organization, service as serviceSchema, breadcrumbs, itemList } from "@/lib/schema";
import { NAP } from "@/content/site";

const COVERAGE = [
  { title: "Accidental Damage", body: "Drops, knocks and cracked casings on MacBook Air, MacBook Pro and other Apple laptops. We diagnose the damage and repair it under the terms set in your plan." },
  { title: "Liquid Damage", body: "Coffee, water or any spill that reaches the logic board. We clean, treat corrosion and repair affected components - the same liquid-damage workshop we run every day." },
  { title: "Screen Damage", body: "Shattered, cracked or display-failed panels. Screen repair is one of our most common jobs, so covered devices get a fast, in-house fix." },
  { title: "Extended Warranty", body: "Cover that continues after your manufacturer warranty has expired, for hardware and software faults handled under your plan terms." },
  { title: "Theft or Loss", body: "Support if your MacBook is stolen or lost - guidance through the claim and replacement process, plus help recovering and restoring your data." },
  { title: "Corporate & Fleet Plans", body: "Custom packages for companies running multiple Apple laptops, with bulk cover, priority repairs and a single point of contact for your team." },
];

const STEPS = [
  { n: "1", title: "Assess your device", body: "Bring in your MacBook or book free pickup across Dubai. We check its model, age, condition and history so cover matches the actual device." },
  { n: "2", title: "Choose your cover", body: "Pick the level that fits - accidental damage, liquid, screen, extended warranty, theft or loss, or a corporate fleet plan for several devices." },
  { n: "3", title: "Pay the annual fee", body: "Your annual fee is quoted after the assessment, per device. We confirm it on WhatsApp in writing before anything starts - no fixed public price." },
  { n: "4", title: "Claim via WhatsApp", body: "If something happens, message us on WhatsApp with the issue. We arrange repair or the claim process under the terms in your plan document." },
];

const WHY = [
  { title: "Repaired in-house since 2004", body: "The same Dubai workshop that has serviced Apple hardware since 2004 handles every covered repair - not a third party you never meet." },
  { title: "90-day repair warranty", body: "Every repair carried out under your plan is backed by our standard 90-day workmanship warranty on the work performed." },
  { title: "Free pickup across Dubai", body: "Covered devices are collected and delivered free across Dubai, so a claim does not mean a trip across the city." },
];

const FAQS = [
  {
    q: "What does MacBook insurance from MacBook Repair Dubai cover?",
    a: "Cover can include accidental damage, liquid damage, screen damage, extended warranty after your manufacturer warranty ends, and theft or loss support. The exact items covered for your device are listed in your plan document, confirmed before you pay.",
  },
  {
    q: "How is the price decided?",
    a: "There is no fixed public price. Each plan is assessed per device - based on your MacBook's model, age and condition - and the annual fee is quoted to you on WhatsApp before anything starts. We never publish a flat premium because cover is matched to the actual device.",
  },
  {
    q: "Is liquid damage covered?",
    a: "Liquid damage can be included in your plan. We run a liquid-damage workshop every day, cleaning boards, treating corrosion and repairing affected parts. Whether a specific spill is covered, and any conditions, are confirmed in your plan document.",
  },
  {
    q: "Do you cover individuals or only companies?",
    a: "Both. We offer full-coverage plans for individuals and freelancers, and custom corporate or fleet packages for companies running several Apple laptops. Corporate plans add bulk cover, priority repairs and a single point of contact.",
  },
  {
    q: "How do I make a claim?",
    a: "Message us on WhatsApp at 055 741 3706 with your device and the issue. We arrange repair or guide you through the claim and replacement process under the terms in your plan. Free pickup and delivery across Dubai is available for covered devices.",
  },
  {
    q: "Is this the same as AppleCare?",
    a: "No. This is an independent plan from MacBook Repair Dubai, not AppleCare or an Apple product. We are a private Dubai repair workshop, so cover, terms and the repair process are ours and are set out in your own plan document.",
  },
  {
    q: "What about excess, exclusions or conditions?",
    a: "Any excess, limits, exclusions and conditions are stated honestly and in full in your plan document before you pay. We confirm them in writing on WhatsApp so you know exactly what is and is not covered - no surprises at claim time.",
  },
  {
    q: "Does cover include theft or a lost MacBook?",
    a: "Theft or loss support can be part of your plan. We guide you through the claim and replacement process and help recover and restore your data where a backup exists. The specifics for your device are confirmed in your plan document.",
  },
  {
    q: "How long does the assessment take?",
    a: "A device assessment is quick - bring the MacBook in or book free pickup, and we check model, age and condition the same day in most cases. You then get your annual fee quoted on WhatsApp before deciding.",
  },
  {
    q: "How do I start a plan?",
    a: "WhatsApp us on 055 741 3706 or call the same number with your MacBook model. We assess the device, quote the annual fee per device, and put the cover in writing - nothing is charged until you approve the plan.",
  },
];

export default function MacBookInsurance() {
  useSeo(
    {
      title: "MacBook Insurance Dubai | MacBook Repair Dubai",
      description:
        "Accidental damage, liquid, theft or loss and extended warranty cover for MacBooks in Dubai. Custom corporate plans, free assessment, quote on WhatsApp.",
      path: "/macbook-insurance-dubai",
    },
    [
      localBusiness(),
      organization(),
      serviceSchema({
        name: "MacBook Insurance Dubai",
        price: 0,
        timeline: "Annual plan",
        warranty: "P90D",
        url: "/macbook-insurance-dubai",
        description:
          "Independent MacBook and Apple laptop insurance in Dubai - accidental damage, liquid damage, screen damage, extended warranty, theft or loss, and custom corporate plans. Priced per device.",
      }),
      itemList({
        name: "What MacBook insurance can cover",
        items: COVERAGE.map((c) => ({ name: c.title, url: "/macbook-insurance-dubai", description: c.body })),
      }),
      breadcrumbs([
        { name: "Home", path: "/" },
        { name: "Apple Repair", path: "/apple-repair-dubai" },
        { name: "MacBook Insurance", path: "/macbook-insurance-dubai" },
      ]),
    ],
  );

  return (
    <PageShell>
      <div className="bg-bg-alt text-text -mb-[4rem]">
      <Hero
        variant="service"
        tone="dark"
        eyebrow="MacBook Insurance · Dubai"
        title="Apple Laptop & MacBook Insurance in Dubai"
        subtitle="Protect your MacBook against accidental damage, liquid spills, screen breaks, theft or loss. Independent cover from a Dubai workshop, priced per device and quoted on WhatsApp - not a fixed public premium."
      >
        <p className="mt-md flex flex-wrap items-center gap-md text-[14px] text-text-muted">
          <span className="flex items-center gap-1"><Star size={16} className="fill-star text-star" aria-hidden /> 5.0 · 215+ reviews</span>
          <span>·</span>
          <span>Repaired in-house since 2004</span>
          <span>·</span>
          <span>Free pickup across Dubai</span>
        </p>
      </Hero>

      {/* Answer-first capsule (AEO/BLUF) */}
      <QuickAnswer
        tone="dark"
        question="Does MacBook Repair Dubai offer MacBook insurance in Dubai?"
        answer="Yes. MacBook Repair Dubai offers MacBook and Apple laptop insurance and protection plans in Dubai covering accidental damage, liquid spills, broken screens, software crashes and hardware failure. Plans suit individuals and companies, include out-of-warranty repairs with genuine or OEM-grade parts, and every repair carries a 90-day written warranty. WhatsApp 055 741 3706 for a plan."
      />

      <USPStrip tone="dark" />

      <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
        <BreadcrumbTrail tone="dark" trail={[
          { name: "Home", path: "/" },
          { name: "Apple Repair", path: "/apple-repair-dubai" },
          { name: "MacBook Insurance", path: "/macbook-insurance-dubai" },
        ]} />
      </section>

      <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
        <p className="text-[18px] leading-relaxed max-w-[75ch] mb-md">
          <strong>MacBook Repair Dubai</strong> does more than repair Apple laptops - we offer insurance plans that protect your MacBook from accidental damage, liquid spills, broken screens, hardware failure, and theft or loss. Cover is independent of Apple, handled by the same Dubai workshop that has serviced Apple hardware since 2004. Plans are available for individuals and freelancers, with custom packages for companies running several devices.
        </p>
        <p className="text-[16px] text-text-muted leading-relaxed max-w-[75ch] m-0">
          There is no fixed public price. Each plan is assessed per device and quoted on WhatsApp, because cover should match the model, age and condition of the actual MacBook in front of us. If something does go wrong, every covered repair is backed by our 90-day workmanship warranty.
        </p>
      </section>

      {/* Coverage types */}
      <section className="bg-bg-alt border-y border-border mt-3xl py-3xl">
        <div className="mx-auto max-w-content px-5 md:px-6">
          <h2 className="text-[28px] md:text-[32px] mb-md flex items-center gap-sm">
            <ShieldCheck size={28} className="text-accent" aria-hidden /> What MacBook insurance covers
          </h2>
          <div className="grid gap-md md:grid-cols-2 lg:grid-cols-3">
            {COVERAGE.map((c) => (
              <article key={c.title} className="border border-border bg-bg-card rounded-md p-lg">
                <h3 className="text-[17px] font-bold mb-sm flex items-start gap-2"><Check size={18} className="text-accent mt-1 shrink-0" aria-hidden /> {c.title}</h3>
                <p className="text-[14px] text-text-muted leading-relaxed m-0">{c.body}</p>
              </article>
            ))}
          </div>
          <p className="text-[14px] text-text-muted leading-relaxed max-w-[75ch] mt-lg m-0">
            The exact cover, conditions and any excess for your device are set out in your plan document and confirmed in writing before you pay. Related repairs we handle every day include{" "}
            <Link to="/macbook-water-damage-repair-dubai" className="text-accent underline">water damage repair</Link>,{" "}
            <Link to="/macbook-screen-repair-dubai" className="text-accent underline">screen repair</Link>, and{" "}
            <Link to="/out-of-warranty-apple-repair-dubai" className="text-accent underline">out-of-warranty Apple repair</Link>.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-md flex items-center gap-sm">
          <Droplets size={28} className="text-accent" aria-hidden /> How a MacBook insurance plan works
        </h2>
        <p className="text-[16px] text-text-muted max-w-[70ch] mb-lg">
          Four steps from assessment to cover. Pricing is decided per device and quoted on WhatsApp - nothing is charged until you approve.
        </p>
        <div className="grid gap-md md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <article key={s.n} className="border border-border bg-bg-card rounded-md p-lg flex flex-col">
              <span className="text-[28px] font-bold text-accent mb-sm">{s.n}</span>
              <h3 className="text-[17px] font-bold mb-sm">{s.title}</h3>
              <p className="text-[14px] text-text-muted leading-relaxed m-0">{s.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section className="bg-bg-alt border-y border-border mt-3xl py-3xl">
        <div className="mx-auto max-w-content px-5 md:px-6">
          <h2 className="text-[28px] md:text-[32px] mb-md flex items-center gap-sm">
            <Building2 size={28} className="text-accent" aria-hidden /> Why insure with MacBook Repair Dubai
          </h2>
          <div className="grid gap-md md:grid-cols-3">
            {WHY.map((w) => (
              <article key={w.title} className="border border-border bg-bg-card rounded-md p-lg">
                <h3 className="text-[18px] font-bold mb-sm flex items-center gap-2"><Search size={18} className="text-accent" aria-hidden /> {w.title}</h3>
                <p className="text-[15px] text-text-muted leading-relaxed m-0">{w.body}</p>
              </article>
            ))}
          </div>
          <p className="text-[14px] text-text-muted leading-relaxed max-w-[75ch] mt-lg m-0">
            Running several devices for a team? An{" "}
            <Link to="/annual-maintenance-contract-dubai" className="text-accent underline">Annual Maintenance Contract</Link>{" "}
            can pair scheduled servicing with cover for your whole fleet.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-md">MacBook insurance FAQ</h2>
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
          <h2 className="relative text-text text-[28px] md:text-[32px] max-w-[30ch]">Get your MacBook insurance quote on WhatsApp</h2>
          <p className="relative text-text-muted text-[16px] max-w-[60ch]">
            Free device assessment, custom plans for individuals and companies. WhatsApp your MacBook model and we'll quote the annual fee per device - no fixed public price, no obligation until you approve.
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
