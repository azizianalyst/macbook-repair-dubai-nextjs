"use client";
/**
 * SSD data recovery (/ssd-data-recovery-dubai/). Truth pass 2026-09-26, aligned with the rebuilt
 * /mac-data-recovery-dubai hub: no chip-off / NAND reads on T2 or Apple silicon Macs (the SSD is
 * encrypted with a key held in the Mac's own security chip, so recovery means getting the
 * original board running); the unsourced success-rate table (85-95%, 60-80%...) and the fixed
 * turnaround figures are gone; "needs your Apple ID" corrected to the login password / FileVault
 * recovery key; hero swapped from the chip-off infographic to the real lab photo.
 */
import { withSlash } from "@/lib/utils";
import { HardDrive, AlertTriangle, CheckCircle2, Clock, Shield, Phone, MessageCircle, Database } from "lucide-react";
import { QuickAnswer } from "@/components/blocks/QuickAnswer";
import { LeadForm } from "@/components/blocks/LeadForm";
import { PRESETS } from "@/data/form-presets";
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
  { icon: HardDrive,    label: "MacBook SSD not detected",        price: "On request",  note: "Removable SSD read on a workstation; a soldered T2 or Apple silicon SSD needs the original board running" },
  { icon: AlertTriangle,label: "Accidental deletion / format",    price: "On request",  note: "Best odds on external drives; an internal Mac SSD clears deleted blocks (TRIM)" },
  { icon: Database,     label: "macOS won't boot. SSD fault",    price: "On request",  note: "Corrupted APFS container or failing storage" },
  { icon: HardDrive,    label: "Water-damaged MacBook SSD",       price: "On request",  note: "Board cleaned and repaired so the original Mac can read it; a removable SSD is cleaned and read directly" },
  { icon: AlertTriangle,label: "T2 / Apple silicon encrypted SSD", price: "On request", note: "Original logic board repaired until it runs; login password needed if FileVault is on" },
  { icon: Shield,       label: "External SSD / USB drive recovery", price: "On request", note: "Samsung T7, WD My Passport, Kingston USB drives" },
];

// Qualitative on purpose: the old percentage table had no source and contradicted the other
// recovery pages. The free assessment gives the realistic chance for the actual failure.
const OUTLOOK = [
  { scenario: "Deleted or formatted files on an external SSD or USB drive", outlook: "Often recoverable if nothing new is written" },
  { scenario: "Deleted files on a Mac's internal SSD", outlook: "Chance falls quickly: TRIM clears freed blocks" },
  { scenario: "Removable SSD from an older Intel Mac (pre-T2)", outlook: "Read on a workstation if the SSD is healthy" },
  { scenario: "T2 or Apple silicon Mac with a board fault", outlook: "Needs the original board running again" },
  { scenario: "T2 or Apple silicon: security chip or storage destroyed, board replaced, or FileVault password and key lost", outlook: "Not recoverable, by anyone" },
];

const DONT_DO = [
  "Do NOT continue writing to the drive (installing macOS, saving files), overwrites destroy recoverable data",
  "Do NOT run Disk Utility First Aid on a failing drive, it can make unrecoverable damage worse",
  "Do NOT freeze the SSD, this is an old hard-drive myth and condensation makes it worse",
  "Do NOT erase, restore or reinstall a T2 or Apple silicon Mac, it discards the encryption key and the data with it",
  "Do NOT let anyone replace a T2 or Apple silicon logic board until your data is off it, a new board has a new key",
];

const FAQS = [
  { q: "Can data be recovered from a MacBook SSD in Dubai?",
    a: "Often, but how depends on the Mac. Older Intel MacBooks without the T2 chip have a removable SSD that can be read on a separate workstation. On T2 and Apple silicon Macs the SSD is soldered and encrypted with a key held in the Mac's own security chip, so the data can only be read through the original board, repaired until it runs. With FileVault on, the login password or recovery key is also needed. WhatsApp 055 741 3706 with your model and failure description for a free assessment." },
  { q: "How much does SSD data recovery cost in Dubai?",
    a: "It depends on the failure type and the drive. Accidental deletion on an external drive is the least involved; a board fault on a T2 or Apple silicon Mac needs board-level repair first; water damage that needs cleaning and board repair before the Mac can be read is the most involved. Every case gets a written quote after the free assessment. No-fix no-charge policy: if we cannot recover your data, you pay nothing." },
  { q: "How long does SSD data recovery take in Dubai?",
    a: "It depends on the failure, so the timeline comes with your written quote after the free assessment. Logical recovery from a healthy drive is usually the quickest; board-level repair on a T2 or Apple silicon Mac takes longest. We give you a daily status update via WhatsApp and notify you the moment data is confirmed recoverable." },
  { q: "Can you recover data from a water-damaged MacBook SSD?",
    a: "Often, if it was powered off quickly and not charged while wet. On an older Intel MacBook with a removable SSD, the drive is cleaned and read directly. On T2 and Apple silicon MacBooks the storage chips cannot be read on their own, so the board is cleaned and repaired until the Mac starts and the data can be copied off. If corrosion has destroyed the chip or the storage, the data is gone. See also: /mac-data-recovery-after-water-damage-dubai." },
  { q: "Can you recover data from a T2 or Apple Silicon encrypted Mac SSD?",
    a: "Only through the original logic board. T2 and Apple silicon Macs encrypt the SSD with a key that never leaves the security chip (the T2, or the Secure Enclave inside the M-series chip), so desoldering the storage chips (chip-off) yields only encrypted data, and a replacement board has a different key. We repair the original board until the Mac runs and copy the data off. If FileVault is on, you also need the login password or the FileVault recovery key; without them, no lab in the world can read it." },
  { q: "What is your no-fix no-charge policy for data recovery?",
    a: "If we cannot recover your files, you pay nothing. We confirm what is recoverable before billing, you approve the file list before we complete the extraction. We do not charge for failed recovery attempts." },
  { q: "Can you recover data from an external SSD or USB drive in Dubai?",
    a: "Yes. Samsung T7, T9, WD My Passport SSD, Kingston USB drives, and most external NAND-based storage. Same process: free assessment, file list confirmed before billing, no-fix no-charge." },
];

const FEATURED_REVIEW_INDEXES = [5, 9, 15, 21, 27];

export default function SsdDataRecovery() {
  const reviews = FEATURED_REVIEW_INDEXES.map((i) => REVIEWS[i % REVIEWS.length]).filter(Boolean);

  useSeo({
    title: "SSD Data Recovery Dubai. MacBook & External SSD | No-Fix No-Charge",
    description:
      "SSD data recovery in Dubai. MacBook SSD, external SSD, deleted files, water damage. No-fix no-charge. Free assessment. Concord Tower, Media City. 055 741 3706.",
    path: "/ssd-data-recovery-dubai",
  });


  return (
    <PageShell>
      <div className="bg-bg-alt text-text -mb-[4rem]">
        <Hero
          image="/images/real/lab/macbook-pro-internals-topdown-dubai.jpg"
          imageAlt="MacBook Pro opened on the bench at MacBook Repair Dubai, showing the logic board where Apple silicon storage is soldered"
          variant="device"
          tone="dark"
          eyebrow="SSD data recovery · Dubai · No-fix no-charge"
          title="SSD Data Recovery Dubai"
          subtitle="MacBook SSD, external SSD, deleted files, water damage. No-fix no-charge. Free assessment, written quote first. Concord Tower, Media City."
        >
          <p className="mt-md flex flex-wrap items-center gap-md text-[14px] text-text-muted">
            <span className="flex items-center gap-1"><Shield size={14} aria-hidden /> No-fix no-charge</span>
            <span>·</span>
            <span>Free assessment</span>
            <span>·</span>
            <span>Timeline given with your written quote</span>
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
            answer="Often, yes. SSD data recovery in Dubai covers MacBook SSDs (board fault, deletion, corruption, water damage), external SSDs, and USB drives. On T2 and Apple silicon Macs, recovery depends on getting the original logic board working. Free assessment with a written quote, and no-fix no-charge: you only pay if we recover your data. WhatsApp 055 741 3706 at Concord Tower, Dubai Media City."
          />
        </section>

        {/* Scenarios */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <h2 className="text-[28px] md:text-[32px] mb-sm">SSD recovery scenarios we handle</h2>
          <div className="grid gap-md sm:grid-cols-2 lg:grid-cols-3 mt-lg">
            {SCENARIOS.map(({ icon: Icon, label, price, note }) => (
              <article key={label} className="border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md p-lg flex flex-col gap-sm">
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
            <h2 className="text-[28px] md:text-[32px] mb-md">What decides whether SSD data comes back</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-[14px] border-collapse">
                <thead>
                  <tr className="border-b border-border text-left text-text-muted">
                    <th className="py-sm pr-lg font-semibold">Failure type</th>
                    <th className="py-sm font-semibold">Outlook</th>
                  </tr>
                </thead>
                <tbody>
                  {OUTLOOK.map((row) => (
                    <tr key={row.scenario} className="border-b border-border">
                      <td className="py-sm pr-lg">{row.scenario}</td>
                      <td className={`py-sm font-semibold ${row.outlook.startsWith("Not recoverable") ? "text-red-700" : "text-accent"}`}>{row.outlook}</td>
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
                <AlertTriangle size={16} className="text-red-700 shrink-0 mt-[2px]" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <div className="border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md p-xl flex flex-col md:flex-row md:items-center gap-lg">
            <div className="flex-1">
              <h2 className="text-[22px] font-bold mb-sm">Start SSD data recovery, free assessment</h2>
              <p className="text-[15px] text-text-muted">No-fix no-charge. You only pay when data is confirmed recoverable. Free assessment, no commitment.</p>
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
            <h2 className="text-[28px] md:text-[32px] mb-md">What customers say</h2>
            <ReviewGrid reviews={reviews} tone="dark" />
          </div>
        </section>

        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <h2 className="text-[28px] md:text-[32px] mb-md">SSD data recovery Dubai. FAQ</h2>
          <FAQAccordion items={FAQS} injectSchema />
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
        <h2 id="page-lead" className="text-[26px] md:text-[32px] font-bold mb-md">Start a free recovery assessment</h2>
        <LeadForm preset={PRESETS["data-recovery"]} sourcePath="/ssd-data-recovery-dubai" defaultDeviceType="MacBook" />
      </section>

      <RelatedArticles path="/ssd-data-recovery-dubai" />
    </PageShell>
  );
}
