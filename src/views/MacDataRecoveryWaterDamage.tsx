"use client";
import { Droplets, AlertTriangle, HardDrive, Clock, Shield, Phone, MessageCircle, CheckCircle2 } from "lucide-react";
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

const STEPS = [
  { step: "1", title: "Power off immediately",        body: "Do not try to turn it on. Do not plug it in. Electricity through wet circuits causes irreversible short-circuit damage to the board and the SSD chips." },
  { step: "2", title: "Remove peripherals",           body: "Unplug charger, USB drives, and any accessories. Do not press keys, keystrokes can cause shorts through the wet keyboard membrane to the board." },
  { step: "3", title: "Tilt to drain",                body: "Hold the MacBook at a 45° angle to let liquid drain through the keyboard. Do not shake it or use a hair dryer, heat can damage NAND chips." },
  { step: "4", title: "Contact us immediately",       body: "WhatsApp 055 741 3706. Free pickup from your location across Dubai Mainland. Every hour the board stays wet increases the corrosion that makes data unrecoverable." },
];

const PROCESS = [
  { icon: Droplets,  title: "Ultrasonic board clean",     body: "The logic board is removed, disassembled, and cleaned in an ultrasonic bath to remove mineral deposits from the liquid." },
  { icon: HardDrive, title: "SSD chip inspection",        body: "NAND chips are inspected under microscope. If the SSD controller is damaged, chips may be desoldered and read directly." },
  { icon: Shield,    title: "Data extraction",            body: "Files are extracted to a temporary drive. You receive a file list before we proceed, you approve what to recover." },
  { icon: CheckCircle2, title: "Board repair (optional)", body: "After data is secured, we can attempt to repair the logic board. This is a separate quote from the data recovery." },
];

const FAQS = [
  { q: "Can data be recovered from a water-damaged Mac in Dubai?",
    a: "Yes, if the Mac was powered off quickly and not charged while wet. Data recovery from water-damaged Mac SSD is possible in 60–80% of cases. The NAND chips that store your data are often intact even when the board is non-functional. WhatsApp 055 741 3706, bring it in or request free pickup the same day the damage happens." },
  { q: "What should I do immediately after spilling liquid on my Mac?",
    a: "Power off immediately (hold power button 5 seconds). Unplug the charger. Tilt the Mac to drain. Do not press keys, do not use a hair dryer, do not try to restart. Every minute the board is wet with power increases corrosion. WhatsApp 055 741 3706 for same-day free pickup." },
  { q: "How much does Mac data recovery after water damage cost in Dubai?",
    a: "Mac water damage data recovery costs AED 900–2,500 depending on damage severity. Mild water damage with intact NAND: AED 900–1,500. Severe corrosion requiring chip-off NAND read: AED 1,500–2,500. No-fix no-charge: if we cannot recover your data, you pay nothing." },
  { q: "How long does water damage data recovery take?",
    a: "Ultrasonic board clean: 1 day. SSD chip inspection and data extraction: 1–3 days. Severe corrosion with chip-off NAND read: 3–7 days. We send daily updates via WhatsApp and notify you when data is confirmed recovered." },
  { q: "My Mac turned on after water damage, is the data safe?",
    a: "Not necessarily. A Mac that boots after liquid damage often has residual mineral deposits on the board that cause progressive corrosion. It may work for days or weeks, then fail permanently. Back up your data immediately using Time Machine or copy files to an external drive while the Mac still works." },
  { q: "Can you recover data if the Mac was charged while wet?",
    a: "Recovery is harder but not impossible. Charging a wet Mac causes immediate shorts that can damage the SSD controller chip directly. Success rate drops to 30–50% depending on which components shorted. Bring it in for a free assessment, we can advise before committing to any cost." },
  { q: "Is the data recovery separate from the board repair?",
    a: "Yes, we always secure your data first before any repair attempts. Data recovery and board repair are quoted and billed separately. You can choose to recover data only, board repair only, or both. Many customers recover the data and replace the Mac without repairing the board." },
];

const FEATURED_REVIEW_INDEXES = [6, 11, 16, 22, 28];

export default function MacDataRecoveryWaterDamage() {
  const reviews = FEATURED_REVIEW_INDEXES.map((i) => REVIEWS[i % REVIEWS.length]).filter(Boolean);

  useSeo({
    title: "Mac Data Recovery After Water Damage Dubai. From AED 900 | No-Fix No-Charge",
    description:
      "Mac data recovery after water damage in Dubai. Free pickup, same-day emergency. From AED 900. No-fix no-charge. NAND chip-off capability. Call 055 741 3706.",
    path: "/mac-data-recovery-after-water-damage-dubai",
  });

  return (
    <PageShell>
      <div className="bg-bg-alt text-text -mb-[4rem]">
        <Hero
          image={undefined}
          imageAlt="Mac data recovery after water damage Dubai"
          variant="device"
          tone="dark"
          eyebrow="URGENT. Mac water damage data recovery · Dubai"
          title="Mac Data Recovery After Water Damage. Dubai"
          subtitle="Act fast, every hour increases corrosion. Free pickup today. From AED 900. No-fix no-charge. NAND chip-off capability."
        >
          <p className="mt-md flex flex-wrap items-center gap-md text-[14px] text-text-muted">
            <span className="flex items-center gap-1 text-red-400 font-semibold"><AlertTriangle size={16} aria-hidden /> Power off now, do not charge</span>
            <span>·</span>
            <span>No-fix no-charge</span>
            <span>·</span>
            <span>Free pickup Dubai</span>
          </p>
        </Hero>

        <USPStrip tone="dark" />

        <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
          <BreadcrumbTrail tone="dark" trail={[{ name: "Home", path: "/" }, { name: "MacBook Water Damage Repair", path: "/macbook-water-damage-repair-dubai" }, { name: "Data Recovery After Water Damage", path: "/mac-data-recovery-after-water-damage-dubai" }]} />
        </section>

        <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
          <QuickAnswer
            tone="dark"
            question="Can I recover data from a water-damaged Mac in Dubai?"
            answer="Yes. Mac data recovery after water damage is possible in 60–80% of cases if the Mac was powered off quickly and not charged while wet. NAND chips are often intact even when the board fails. Free pickup today across Dubai. From AED 900. No-fix no-charge. WhatsApp 055 741 3706."
          />
        </section>

        {/* Immediate steps */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <h2 className="text-[28px] md:text-[32px] mb-sm">Do this right now, before anything else</h2>
          <div className="grid gap-md md:grid-cols-4 mt-lg">
            {STEPS.map(({ step, title, body }) => (
              <article key={step} className="border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md p-lg">
                <span className="text-[32px] font-black text-accent block mb-sm">{step}</span>
                <h3 className="text-[15px] font-bold mb-xs">{title}</h3>
                <p className="text-[13px] text-text-muted leading-relaxed">{body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Recovery process */}
        <section className="bg-bg-alt border-y border-border mt-3xl py-3xl">
          <div className="mx-auto max-w-content px-5 md:px-6">
            <h2 className="text-[28px] md:text-[32px] mb-md">How we recover data from a water-damaged Mac</h2>
            <div className="grid gap-md md:grid-cols-4">
              {PROCESS.map(({ icon: Icon, title, body }) => (
                <article key={title} className="border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md p-lg">
                  <Icon size={24} className="text-accent mb-sm" aria-hidden />
                  <h3 className="text-[15px] font-bold mb-xs">{title}</h3>
                  <p className="text-[13px] text-text-muted leading-relaxed">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <div className="border border-red-700/40 bg-red-900/10 rounded-md p-xl flex flex-col md:flex-row md:items-center gap-lg">
            <div className="flex-1">
              <h2 className="text-[22px] font-bold mb-sm flex items-center gap-sm"><AlertTriangle size={22} className="text-red-400" aria-hidden /> Water damage, act now</h2>
              <p className="text-[15px] text-text-muted">Free pickup across Dubai. No-fix no-charge. Every hour increases corrosion, contact us today.</p>
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
            <h2 className="text-[28px] md:text-[32px] mb-md">What customers say</h2>
            <ReviewGrid reviews={reviews} tone="dark" />
          </div>
        </section>

        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <h2 className="text-[28px] md:text-[32px] mb-md">Mac data recovery after water damage. FAQ</h2>
          <FAQAccordion items={FAQS} injectSchema tone="dark" />
        </section>

        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <h2 className="text-[22px] font-bold mb-md">Related services</h2>
          <div className="flex flex-wrap gap-sm">
            {[
              { label: "MacBook Water Damage Repair Dubai", href: "/macbook-water-damage-repair-dubai" },
              { label: "SSD Data Recovery Dubai", href: "/ssd-data-recovery-dubai" },
              { label: "Apple T2 Chip Data Recovery Dubai", href: "/apple-t2-chip-data-recovery-dubai" },
              { label: "MacBook Logic Board Repair Dubai", href: "/macbook-logic-board-repair-dubai" },
              { label: "MacBook Data Recovery Dubai", href: "/macbook-data-recovery-dubai" },
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
      <RelatedArticles path="/mac-data-recovery-after-water-damage-dubai" />
    </PageShell>
  );
}
