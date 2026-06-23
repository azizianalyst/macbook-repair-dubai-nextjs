"use client";
import { HardDrive, AlertTriangle, CheckCircle2, Clock, Shield, Phone, MessageCircle, Database } from "lucide-react";
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

const SCENARIOS = [
  { icon: HardDrive,    label: "MacBook SSD not detected",        price: "AED 800–2,000",  note: "Logic board SSD controller fault or dead NAND chip" },
  { icon: AlertTriangle,label: "Accidental deletion / format",    price: "AED 600–1,200",  note: "Files deleted or drive formatted, high success rate" },
  { icon: Database,     label: "macOS won't boot. SSD fault",    price: "AED 700–1,500",  note: "Corrupted APFS container or failing NAND" },
  { icon: HardDrive,    label: "Water-damaged MacBook SSD",       price: "AED 900–2,500",  note: "NAND chips desoldered, cleaned, and re-read" },
  { icon: AlertTriangle,label: "Firmware-locked / T2 encrypted SSD", price: "AED 1,000–2,500", note: "Requires Apple ID + logic board chip-off read" },
  { icon: Shield,       label: "External SSD / USB drive recovery", price: "AED 500–1,200", note: "Samsung T7, WD My Passport, Kingston USB drives" },
];

const SUCCESS_RATES = [
  { scenario: "Logical failure (deletion, corruption, format)", rate: "85–95%" },
  { scenario: "Firmware / software failure (won't boot)", rate: "75–90%" },
  { scenario: "Water damage (NAND chips intact)", rate: "60–80%" },
  { scenario: "Physical NAND failure (bad blocks)", rate: "40–70%" },
  { scenario: "T2 / Apple Silicon encrypted SSD without Apple ID", rate: "0%, encryption is unbreakable" },
];

const DONT_DO = [
  "Do NOT continue writing to the drive (installing macOS, saving files), overwrites destroy recoverable data",
  "Do NOT run Disk Utility First Aid on a failing drive, it can make unrecoverable damage worse",
  "Do NOT freeze the SSD, this is an HDD myth; it damages NAND chips",
  "Do NOT send the MacBook to Apple, they will data-wipe before any repair",
];

const FAQS = [
  { q: "Can data be recovered from a MacBook SSD in Dubai?",
    a: "Yes in most cases. MacBook SSDs use NAND flash chips that can be read even when the logic board fails. Success rate depends on the failure type: accidental deletion recovers 85–95% of data; water damage recovers 60–80%; encrypted T2/Apple Silicon drives without the original Apple ID recover 0% (unbreakable encryption). WhatsApp 055 741 3706 with your model and failure description for a free assessment." },
  { q: "How much does SSD data recovery cost in Dubai?",
    a: "SSD data recovery in Dubai costs AED 500–2,500 depending on the failure type and drive. Accidental deletion: AED 600–1,200. Logic board SSD controller fault: AED 800–2,000. Water damage with NAND chip removal: AED 900–2,500. No-fix no-charge policy: if we cannot recover your data, you pay nothing." },
  { q: "How long does SSD data recovery take in Dubai?",
    a: "Logical recovery (deletion, format, corruption): 1–3 days. Logic board fault with SSD controller repair: 3–7 days. Water damage with chip-off NAND read: 3–7 days. We give you a daily status update via WhatsApp and notify you the moment data is confirmed recoverable." },
  { q: "Can you recover data from a water-damaged MacBook SSD?",
    a: "Yes. MacBook SSD data can often be recovered after water damage even when the logic board is non-functional. The NAND chips are desoldered from the board, cleaned, and read directly. Success rate is 60–80% depending on how long the board was wet and whether it was charged while wet. See also: /mac-data-recovery-after-water-damage-dubai." },
  { q: "Can you recover data from a T2 or Apple Silicon encrypted Mac SSD?",
    a: "Only if you have the original Apple ID and password used on the Mac. T2 and Apple Silicon Macs encrypt the SSD with a hardware key tied to the Secure Enclave chip. Without the Apple ID, the encryption is mathematically unbreakable, no lab in the world can recover it. With the Apple ID, we can attempt board repair to re-establish the key and decrypt the drive." },
  { q: "What is your no-fix no-charge policy for data recovery?",
    a: "If we cannot recover your files, you pay nothing. We confirm what is recoverable before billing, you approve the file list before we complete the extraction. We do not charge for failed recovery attempts." },
  { q: "Can you recover data from an external SSD or USB drive in Dubai?",
    a: "Yes. Samsung T7, T9, WD My Passport SSD, Kingston USB drives, and most external NAND-based storage. Price from AED 500. Same process: free assessment, file list confirmed before billing, no-fix no-charge." },
];

const FEATURED_REVIEW_INDEXES = [5, 9, 15, 21, 27];

export default function SsdDataRecovery() {
  const reviews = FEATURED_REVIEW_INDEXES.map((i) => REVIEWS[i % REVIEWS.length]).filter(Boolean);

  useSeo({
    title: "SSD Data Recovery Dubai. MacBook & External SSD | From AED 500",
    description:
      "SSD data recovery in Dubai. MacBook SSD, external SSD, deleted files, water damage. From AED 500. No-fix no-charge. Free assessment. Concord Tower, Media City. 055 741 3706.",
    path: "/ssd-data-recovery-dubai",
  });

  return (
    <PageShell>
      <div className="bg-bg-alt text-text -mb-[4rem]">
        <Hero
          image={undefined}
          imageAlt="SSD data recovery Dubai. MacBook and external SSD"
          variant="device"
          tone="dark"
          eyebrow="SSD data recovery · Dubai · No-fix no-charge"
          title="SSD Data Recovery Dubai"
          subtitle="MacBook SSD, external SSD, deleted files, water damage. From AED 500. No-fix no-charge. Free assessment. Concord Tower, Media City."
        >
          <p className="mt-md flex flex-wrap items-center gap-md text-[14px] text-text-muted">
            <span className="flex items-center gap-1"><Shield size={14} aria-hidden /> No-fix no-charge</span>
            <span>·</span>
            <span>Free assessment</span>
            <span>·</span>
            <span>1–7 days turnaround</span>
          </p>
        </Hero>

        <USPStrip tone="dark" />

        <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
          <BreadcrumbTrail tone="dark" trail={[{ name: "Home", path: "/" }, { name: "MacBook Repair Dubai", path: "/" }, { name: "SSD Data Recovery Dubai", path: "/ssd-data-recovery-dubai" }]} />
        </section>

        <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
          <QuickAnswer
            tone="dark"
            question="Can you recover data from a failed SSD in Dubai?"
            answer="Yes. SSD data recovery in Dubai from AED 500. MacBook SSD (controller fault, deletion, corruption, water damage), external SSD, and USB drives. No-fix no-charge: you only pay if we recover your data. Free assessment. WhatsApp 055 741 3706 at Concord Tower, Dubai Media City."
          />
        </section>

        {/* Scenarios */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <h2 className="text-[28px] md:text-[32px] mb-sm">SSD recovery scenarios we handle</h2>
          <div className="grid gap-md sm:grid-cols-2 lg:grid-cols-3 mt-lg">
            {SCENARIOS.map(({ icon: Icon, label, price, note }) => (
              <article key={label} className="border border-border bg-bg-card rounded-md p-lg flex flex-col gap-sm">
                <Icon size={22} className="text-accent shrink-0" aria-hidden />
                <h3 className="text-[16px] font-bold">{label}</h3>
                <p className="text-[20px] font-bold text-accent">{price}</p>
                <p className="text-[13px] text-text-muted">{note}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Success rates */}
        <section className="bg-bg-alt border-y border-border mt-3xl py-3xl">
          <div className="mx-auto max-w-content px-5 md:px-6">
            <h2 className="text-[28px] md:text-[32px] mb-md">SSD data recovery success rates</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-[14px] border-collapse">
                <thead>
                  <tr className="border-b border-border text-left text-text-muted">
                    <th className="py-sm pr-lg font-semibold">Failure type</th>
                    <th className="py-sm font-semibold">Success rate</th>
                  </tr>
                </thead>
                <tbody>
                  {SUCCESS_RATES.map((row) => (
                    <tr key={row.scenario} className="border-b border-border">
                      <td className="py-sm pr-lg">{row.scenario}</td>
                      <td className={`py-sm font-semibold ${row.rate.startsWith("0%") ? "text-red-400" : "text-accent"}`}>{row.rate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* What NOT to do */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <h2 className="text-[28px] md:text-[32px] mb-sm">Do not do this, it destroys recoverable data</h2>
          <ul className="space-y-sm mt-lg">
            {DONT_DO.map((item) => (
              <li key={item} className="flex items-start gap-sm text-[15px] border border-red-700/30 bg-red-900/10 rounded-md p-md">
                <AlertTriangle size={16} className="text-red-400 shrink-0 mt-[2px]" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <div className="border border-border bg-bg-card rounded-md p-xl flex flex-col md:flex-row md:items-center gap-lg">
            <div className="flex-1">
              <h2 className="text-[22px] font-bold mb-sm">Start SSD data recovery, free assessment</h2>
              <p className="text-[15px] text-text-muted">No-fix no-charge. You only pay when data is confirmed recoverable. Free assessment, no commitment.</p>
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
            <h2 className="text-[28px] md:text-[32px] mb-md">What customers say</h2>
            <ReviewGrid reviews={reviews} tone="dark" />
          </div>
        </section>

        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <h2 className="text-[28px] md:text-[32px] mb-md">SSD data recovery Dubai. FAQ</h2>
          <FAQAccordion items={FAQS} injectSchema tone="dark" />
        </section>

        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <h2 className="text-[22px] font-bold mb-md">Related data recovery services</h2>
          <div className="flex flex-wrap gap-sm">
            {[
              { label: "MacBook Data Recovery Dubai", href: "/macbook-data-recovery-dubai" },
              { label: "Mac Data Recovery After Water Damage", href: "/mac-data-recovery-after-water-damage-dubai" },
              { label: "Apple T2 Chip Data Recovery Dubai", href: "/apple-t2-chip-data-recovery-dubai" },
              { label: "MacBook Water Damage Repair Dubai", href: "/macbook-water-damage-repair-dubai" },
              { label: "MacBook Logic Board Repair Dubai", href: "/macbook-logic-board-repair-dubai" },
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
      <RelatedArticles path="/ssd-data-recovery-dubai" />
    </PageShell>
  );
}
