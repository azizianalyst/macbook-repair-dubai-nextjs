"use client";
/**
 * Truth pass 2026-09-26, aligned with /mac-data-recovery-dubai: recovery on a T2 Mac needs the
 * original board running and, if FileVault is on, the login password or FileVault recovery key.
 * It does NOT need the Apple ID (the old copy said it did throughout). T2 model list completed
 * from Apple's list (support.apple.com/en-us/103265). Hero swapped from the chip-off infographic
 * to the real lab photo the hub uses.
 */
import { withSlash } from "@/lib/utils";
import { Lock, HardDrive, AlertTriangle, Shield, Phone, MessageCircle, CheckCircle2, XCircle } from "lucide-react";
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

const T2_MODELS = [
  "MacBook Pro 2018-2020 (13\", 15\" and 16\")",
  "MacBook Air 2018, 2019, 2020 (Intel)",
  "Mac mini 2018",
  "iMac 27\" 2020",
  "iMac Pro 2017",
  "Mac Pro 2019",
];

const SCENARIOS = [
  { possible: true,  label: "Logic board fault. T2 chip and storage intact",           note: "Board repaired until the Mac starts, then the data is copied off (login password needed if FileVault is on)" },
  { possible: true,  label: "Water damage. T2 chip and storage intact",               note: "Ultrasonic board clean and component repair until the original board runs" },
  { possible: true,  label: "Board powers on, macOS won't start",                     note: "macOS Recovery, a T2 firmware revive (never a restore, which erases) or Target Disk Mode" },
  { possible: false, label: "T2 chip or storage physically destroyed",                note: "The encryption key lives in the T2 - no working T2, no decryption" },
  { possible: false, label: "FileVault on, login password and recovery key both lost", note: "FileVault needs one of them; without either, nobody can decrypt the data" },
  { possible: false, label: "Board replaced with a different logic board",             note: "New board has a different Secure Enclave, cannot decrypt old SSD" },
];

const FAQS = [
  { q: "Can data be recovered from a T2 chip MacBook?",
    a: "Often, if the T2 chip and the storage are physically intact and the original logic board can be brought back up. T2 Macs encrypt the SSD with a key stored in the Secure Enclave inside the T2 chip, so the data can only be read through that board - chip-off does not work. If FileVault was on, you also need the login password or the FileVault recovery key. If the T2 chip is destroyed, recovery is impossible." },
  { q: "Which Mac models have the T2 chip?",
    a: "Per Apple's list: MacBook Pro 2018-2020 (13\", 15\" and 16\"), MacBook Air 2018-2020 (Intel), Mac mini 2018, iMac 27\" 2020, iMac Pro 2017 and Mac Pro 2019. Apple Silicon Macs (M1 and later) do not have a T2 chip, they use the M-series chip's integrated Secure Enclave, which behaves similarly." },
  { q: "How much does T2 chip Mac data recovery cost in Dubai?",
    a: "T2 Mac data recovery pricing depends on the specific board fault, so message us on WhatsApp for a quote on your Mac. The process requires repairing the original logic board (not replacing it) so the Secure Enclave key remains intact. No-fix no-charge: if data cannot be recovered, you pay nothing." },
  { q: "Do you need my Apple ID to recover data from a T2 Mac?",
    a: "No. What matters is the original T2 chip and, if FileVault was on, the Mac's login password or the FileVault recovery key. With FileVault off, the T2 unlocks the SSD by itself once the original board runs. No data recovery lab in the world can decrypt a T2-encrypted SSD without its Secure Enclave key." },
  { q: "What if I have forgotten my Mac's login password?",
    a: "If FileVault is on, try the FileVault recovery key first, or, if you allowed it when FileVault was set up, reset the password with your Apple Account (Apple's account recovery is at iforgot.apple.com). Without the password or the recovery key, FileVault data on a T2 Mac cannot be recovered. This is by design: Apple's security model trades data recovery possibility for data security." },
  { q: "Can I replace my T2 Mac logic board and still access my data?",
    a: "No, replacing the logic board with a different board means a different Secure Enclave with a different encryption key. The original SSD cannot be decrypted by the new board. Always attempt data recovery before replacing the board on a T2 Mac." },
  { q: "Is Apple Silicon (M1, M2, M3) data recovery the same as T2?",
    a: "Very similar. Apple Silicon Macs use the M-series chip's integrated Secure Enclave instead of a separate T2 chip. The same rule applies: the original board must be intact (or repairable) for data access, and FileVault needs the login password or recovery key. Replacing an Apple Silicon board also loses the encryption key." },
];

const FEATURED_REVIEW_INDEXES = [7, 12, 18, 23];

export default function AppleT2ChipDataRecovery() {
  const reviews = FEATURED_REVIEW_INDEXES.map((i) => REVIEWS[i % REVIEWS.length]).filter(Boolean);

  useSeo({
    title: "Apple T2 Chip Data Recovery Dubai. MacBook 2018–2020 | No-Fix No-Charge",
    description:
      "Apple T2 chip Mac data recovery Dubai. MacBook Pro/Air 2018–2020, Mac mini 2018, iMac 2020. Requires the original logic board, plus your password if FileVault is on. No-fix no-charge. WhatsApp us for a quote: 055 741 3706.",
    path: "/apple-t2-chip-data-recovery-dubai",
  });


  return (
    <PageShell>
      <div className="bg-bg-alt text-text -mb-[4rem]">
        <Hero
          image="/images/real/lab/macbook-pro-internals-topdown-dubai.jpg"
          imageAlt="MacBook Pro opened on the bench at MacBook Repair Dubai, showing the logic board"
          variant="device"
          tone="dark"
          eyebrow="T2 chip data recovery · Dubai · MacBook 2018–2020"
          title="Apple T2 Chip Data Recovery Dubai"
          subtitle="MacBook Pro/Air 2018–2020, Mac mini 2018, iMac 2020. Requires the original logic board, plus your password if FileVault is on. No-fix no-charge — message us on WhatsApp for a quote."
        >
          <p className="mt-md flex flex-wrap items-center gap-md text-[14px] text-text-muted">
            <span className="flex items-center gap-1"><Lock size={14} aria-hidden /> Password needed if FileVault is on</span>
            <span>·</span>
            <span>Original board must be intact</span>
            <span>·</span>
            <span>No-fix no-charge</span>
          </p>
        </Hero>

        <USPStrip tone="dark" />

        <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
          <BreadcrumbTrail tone="dark" trail={[{ name: "Home", path: "/" }, { name: "SSD Data Recovery Dubai", path: "/ssd-data-recovery-dubai" }, { name: "T2 Chip Data Recovery", path: "/apple-t2-chip-data-recovery-dubai" }]} />
        </section>

        <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
          <QuickAnswer
            tone="dark"
            question="Can data be recovered from an Apple T2 chip Mac in Dubai?"
            answer="Often, if the original logic board is repairable and the T2 chip is intact. T2 Macs encrypt data with a key stored in the T2's Secure Enclave, so the data can only be read through that board, and FileVault also needs the login password or recovery key. With a destroyed T2 chip, recovery is impossible. No-fix no-charge — WhatsApp 055 741 3706 for a quote."
          />
        </section>

        {/* T2 models */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <h2 className="text-[28px] md:text-[32px] mb-sm">Which Mac models have the T2 chip?</h2>
          <div className="flex flex-wrap gap-sm mt-lg">
            {T2_MODELS.map((model) => (
              <div key={model} className="flex items-center gap-sm border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md px-md py-sm">
                <Lock size={14} className="text-accent shrink-0" aria-hidden />
                <span className="text-[14px] font-medium">{model}</span>
              </div>
            ))}
          </div>
          <p className="text-[13px] text-text-muted mt-sm">Apple Silicon Macs (M1 and later) use integrated Secure Enclave, same data recovery rules apply.</p>
        </section>

        {/* What's possible */}
        <section className="bg-bg-alt border-y border-border mt-3xl py-3xl">
          <div className="mx-auto max-w-content px-5 md:px-6">
            <h2 className="text-[28px] md:text-[32px] mb-md">T2 data recovery, what's possible and what isn't</h2>
            <div className="space-y-sm">
              {SCENARIOS.map(({ possible, label, note }) => (
                <div key={label} className={`flex items-start gap-sm border rounded-md p-md ${possible ? "border-green-700/30 bg-green-900/10" : "border-red-700/30 bg-red-900/10"}`}>
                  {possible
                    ? <CheckCircle2 size={18} className="text-green-400 shrink-0 mt-[2px]" aria-hidden />
                    : <XCircle size={18} className="text-red-400 shrink-0 mt-[2px]" aria-hidden />}
                  <div>
                    <p className="text-[14px] font-semibold">{label}</p>
                    <p className="text-[13px] text-text-muted">{note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <div className="border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md p-xl flex flex-col md:flex-row md:items-center gap-lg">
            <div className="flex-1">
              <h2 className="text-[22px] font-bold mb-sm">T2 Mac data recovery assessment, free</h2>
              <p className="text-[15px] text-text-muted">Tell us your model, whether FileVault is on, and what happened. Free assessment before any commitment.</p>
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
          <h2 className="text-[28px] md:text-[32px] mb-md">T2 chip data recovery. FAQ</h2>
          <FAQAccordion items={FAQS} injectSchema />
        </section>

        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <h2 className="text-[22px] font-bold mb-md">Related data recovery services</h2>
          <div className="flex flex-wrap gap-sm">
            {[
              { label: "SSD Data Recovery Dubai", href: "/ssd-data-recovery-dubai" },
              { label: "Mac Data Recovery After Water Damage", href: "/mac-data-recovery-after-water-damage-dubai" },
              { label: "MacBook Data Recovery Dubai", href: "/macbook-data-recovery-dubai" },
              { label: "MacBook Logic Board Repair Dubai", href: "/macbook-logic-board-repair-dubai" },
              { label: "MacBook Water Damage Repair Dubai", href: "/macbook-water-damage-repair-dubai" },
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
        <LeadForm preset={PRESETS["data-recovery"]} sourcePath="/apple-t2-chip-data-recovery-dubai" defaultDeviceType="MacBook" />
      </section>

      <RelatedArticles path="/apple-t2-chip-data-recovery-dubai" />
    </PageShell>
  );
}
