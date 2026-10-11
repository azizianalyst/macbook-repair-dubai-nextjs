"use client";
/**
 * MacBook data recovery (/macbook-data-recovery-dubai/). Truth pass 2026-09-26, aligned with
 * the rebuilt /mac-data-recovery-dubai hub:
 *   - Removed "chip-off" / "NAND-off" recovery on T2 and Apple silicon Macs. The storage is
 *     encrypted with a key held in the Mac's own security chip (the T2, or the Secure Enclave
 *     inside the M-series chip), so desoldered storage chips yield only ciphertext. Recovery on
 *     those Macs means getting the original logic board running. Only removable-SSD Intel Macs
 *     (pre-T2) and external drives can be read on a separate workstation.
 *   - Removed every success-rate percentage (90/80/70/60/50%, 95%, 85%, "60-90%") and the
 *     per-scenario turnaround figures: no source, and they contradicted the hub and the
 *     SSD / water-damage pages. Timelines now come with the written quote.
 *   - Removed the Apple "evaluation fee" figures in the comparison table: they are AppleCare+
 *     accidental-damage service fees, not a diagnostic fee.
 *   - Hero image swapped from the chip-off infographic to the real lab photo the hub uses.
 */
import { withSlash } from "@/lib/utils";
import { MessageCircle, Phone, ShieldCheck, AlertTriangle, Wrench, Star, Lock } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { QuickAnswer, deriveServiceQuickAnswer } from "@/components/blocks/QuickAnswer";
import { LeadForm } from "@/components/blocks/LeadForm";
import { LinkifyProse } from "@/lib/linkify";
import { RelatedArticles } from "@/components/blocks/RelatedArticles";
import { Hero } from "@/components/blocks/Hero";
import { BreadcrumbTrail } from "@/components/blocks/BreadcrumbTrail";
import { PageMeta } from "@/components/blocks/PageMeta";
import { PricingTable, type PricingRow } from "@/components/blocks/PricingTable";
import { StepList } from "@/components/blocks/StepList";
import { FAQAccordion, type FAQ } from "@/components/blocks/FAQAccordion";
import { ReviewGrid } from "@/components/blocks/ReviewGrid";
import { TechnicianBadge } from "@/components/blocks/TechnicianBadge";
import { RelatedServices } from "@/components/blocks/RelatedServices";
import { LocationBlock } from "@/components/blocks/LocationBlock";
import { WarrantyBar } from "@/components/blocks/WarrantyBar";
import { QuoteBand } from "@/components/blocks/QuoteBand";
import { Button } from "@/components/ui/button";
import { useSeo } from "@/hooks/use-seo";
import { localBusiness, organization, service as serviceSchema } from "@/lib/schema";
import { pickReviews } from "@/lib/find-reviews";
import { NAP, REVIEW_COUNT_LABEL } from "@/content/site";

// Timelines are given with the written quote after the free assessment (no fixed figures).
const QUOTED = "With your quote";

const PRICING: PricingRow[] = [
  { model: "Logical recovery (deleted files, formatted external drive)",       price: 299,  timeline: QUOTED },
  { model: "Removable SSD, older Intel MacBook Air (2010-2017)",               price: 700,  timeline: QUOTED },
  { model: "Retina MacBook Pro blade SSD (2012-2015)",                         price: 800,  timeline: QUOTED },
  { model: "T2 MacBook (2018-2020 Intel): original board brought back up",     price: 1200, timeline: QUOTED },
  { model: "Apple silicon MacBook: board-level repair so the data can be read", price: 1500, timeline: QUOTED },
  { model: "Liquid-damaged MacBook: clean, repair, then copy the data off",     price: 1000, timeline: QUOTED },
  { model: "Time Machine restore + migration",                                  price: 299,  timeline: QUOTED },
  { model: "Complex board-level recovery (multiple faults)",                    price: 2000, timeline: QUOTED },
];

const COMMON_SCENARIOS = [
  { title: "MacBook won't power on - files trapped inside",
    body: "Most common ticket. Often the board has failed while the storage is fine. On older Intel MacBooks with a removable SSD (such as 2012-2015 MacBook Pros and MacBook Airs up to 2017) the SSD comes out and is read on a separate workstation. On T2 and Apple silicon MacBooks the SSD is soldered and encrypted with a key held in the Mac's own security chip, so repairing the original board is the only recovery path." },
  { title: "Accidentally deleted important files (emptied trash)",
    body: "Logical recovery. On a Mac's internal SSD, macOS tells the drive which blocks are free (TRIM) and the SSD can clear them in the background, so the chance falls quickly. Stop using the MacBook the moment you notice, check Time Machine and iCloud Drive's Recently Deleted first, and the free diagnosis tells you what is still there." },
  { title: "Formatted the drive by mistake",
    body: "On an external hard drive, a quick erase rewrites only the file table, so files often survive until overwritten. On T2 and Apple silicon MacBooks, erasing the internal drive also discards its encryption keys, so a formatted internal drive cannot be recovered by anyone. The free diagnosis confirms which case you are in." },
  { title: "FileVault-encrypted drive - lost the password",
    body: "Honesty: without the login password, the FileVault recovery key or an institutional recovery key, FileVault data cannot be read - by us, by Apple or by any lab. If you allowed your Apple Account to reset the password when FileVault was set up, try that first." },
  { title: "Water-damaged MacBook - data on the drive",
    body: "On older Intel MacBooks with a removable SSD, the drive comes out, is cleaned and is read on its own. On T2 and Apple silicon MacBooks the data can only be read through the original board, so the board is cleaned and repaired until the Mac starts. If corrosion has destroyed the chip or the storage, the data is gone - the diagnosis tells you which case applies before any paid work." },
  { title: "T2 chip Mac (2018-2020 Intel) - board working but Mac won't boot",
    body: "T2 Macs encrypt the SSD with a key held in the T2 chip. If the board powers on, we use routes that keep the data in place: macOS Recovery, a T2 firmware revive with Apple Configurator (a revive keeps data, a restore erases it, so we never restore first), and Target Disk Mode to copy files to another Mac. If the board doesn't power on, it is repaired first." },
  { title: "Apple silicon (M1 to M5) - won't boot",
    body: "The SSD storage is soldered to the logic board and encrypted with a key held in the Secure Enclave inside the M-series chip. If the chip and the storage are healthy and the fault is elsewhere on the board (often a power rail or corrosion), component-level repair gets the Mac running so the data can be copied off. Cost depends on what failed." },
  { title: "External drive or Time Machine corrupted",
    body: "External drives are imaged first and recovered from the copy. A hard drive that clicks, grinds or won't spin has a mechanical fault: it goes to our partner clean room and is quoted separately first. A corrupted Time Machine backup is often still readable, because the underlying APFS or HFS+ structure survives." },
  { title: "macOS won't update - disk error blocks installation",
    body: "Often file-system corruption rather than a hardware failure. The free diagnosis runs Disk Utility First Aid once, then a deeper APFS check. If it's corruption, it is often fixed as part of the diagnosis. If the SSD is failing, recovery is quoted after diagnosis." },
  { title: "Folder shows but files appear empty (0 bytes)",
    body: "APFS metadata damage. Where the file content is still on the drive, it can often be rebuilt from the file system's own records. The free diagnosis tells you whether it is." },
];

const STEPS = [
  { title: "Free diagnosis + drop-off",
    body: "WhatsApp the model, the failure (won't power on, deleted files, formatted), and roughly how much data needs recovering. Free diagnosis on the bench - no payment until the recovery scope and quote are agreed." },
  { title: "Imaging - never write to the original",
    body: "Wherever the drive can be read, the first step is a full image onto fresh storage. The original is then left untouched and recovery work happens on the image, so the original cannot be made worse." },
  { title: "Logical or physical recovery path",
    body: "Logical: file-system reconstruction, deleted-file scanning, APFS repair. Physical: a removable drive is read on a separate workstation; on T2 and Apple silicon MacBooks, board-level repair until the original board runs and the data can be copied off." },
  { title: "Recovered files preview",
    body: "Before payment, you see a file tree of what's recoverable - folder structure, file names, sizes. You decide if it's worth proceeding." },
  { title: "Transfer to your new drive or cloud",
    body: "Delivered on a fresh external SSD (yours, or we supply a 1 TB drive) or uploaded to your iCloud / Google Drive / Dropbox via the workshop's gigabit line. Encrypted in transit." },
  { title: "Original device + 7-day verification",
    body: "Original MacBook returned with the SSD intact. 7 days to verify every file you needed is recovered correctly - if anything is missing, free re-attempt." },
];

const FAQS: FAQ[] = [
  { q: "How much does MacBook data recovery cost in Dubai?",
    a: "It depends on the failure: logical recovery of deleted or formatted files, a removable Intel SSD read on a workstation, a T2 board brought back up, or board-level repair on an Apple silicon MacBook. Diagnosis is free and the figure is confirmed after it - never quoted blind. Send us the model and what happened on WhatsApp." },
  { q: "Is data recovery guaranteed?",
    a: "No - and any shop claiming a 100% guarantee is misleading. We don't publish success percentages because the outcome depends on the exact failure. The free diagnosis tells you the realistic chance for your MacBook before any paid work, and if nothing is recovered you pay nothing." },
  { q: "How long does data recovery take?",
    a: "It depends on the failure, so the timeline comes with your written quote after the free diagnosis. A logical recovery from a healthy drive is usually the quickest; board-level work on a dead T2 or Apple silicon MacBook takes longest. Time Machine restore + migration is usually same day if the backup drive is healthy." },
  { q: "Can you recover data from a T2 Mac (2018-2020)?",
    a: "Often, if the original logic board can be brought back up. We try macOS Recovery, a T2 firmware revive with Apple Configurator (never a restore, which erases) and Target Disk Mode, and repair the board first if it won't power on. If the T2 chip itself is destroyed, the encryption key is gone and the data is unrecoverable - the same limit applies at Apple and at every lab. Chip-off does not work on T2 Macs." },
  { q: "Can you recover data from M1, M2, M3, M4 or M5 MacBooks?",
    a: "Often, with one condition: the original logic board has to run again. The SSD on Apple silicon is soldered to the board and encrypted with a key held in the Secure Enclave inside the M-series chip, so desoldering the storage chips (chip-off) yields only encrypted data. If the chip and storage are healthy and the fault is elsewhere on the board, component-level repair restores boot and the data can be copied off. Time Machine backups taken before the failure are hugely valuable on Apple silicon." },
  { q: "What if the drive is FileVault encrypted?",
    a: "Then the data also needs the login password, the FileVault recovery key, or the institutional recovery key on a managed Mac. Without one of these, recovery is impossible - Apple, the workshop, and any reputable lab face the same limit. Free diagnosis confirms what you need to bring." },
  { q: "My MacBook is dead from water damage - can you save my files?",
    a: "Often, depending on which parts corroded. Bring it in quickly and don't charge it - corrosion on the chip or the storage is what ends recovery on T2 and Apple silicon MacBooks. The water-damage repair and the data recovery are billed together at a combined rate if both are needed on the same MacBook." },
  { q: "Will recovered files be encrypted or decrypted?",
    a: "Decrypted, in their original form. The data is read through the original MacBook (with your password if FileVault is on) and written to the destination drive. You can re-encrypt the destination drive with FileVault, BitLocker, or VeraCrypt before it leaves the workshop if you prefer." },
  { q: "Can I get my files back from an emptied Trash?",
    a: "Sometimes. On an external hard drive, deleted files often survive until overwritten. On a MacBook's internal SSD, TRIM lets the drive clear deleted blocks in the background, so the chance falls quickly. Stop using the MacBook, check Time Machine and iCloud Drive's Recently Deleted first, then bring it in for a free diagnosis." },
  { q: "What about my photos in iCloud - do you handle that too?",
    a: "Yes - Time Machine restore plus iCloud Photo Library re-download is included in the migration service. The workshop signs into your iCloud on the new MacBook (with you present), waits for the photo download, and verifies the count matches your old library before handover." },
  { q: "Is my data confidential during recovery?",
    a: "Yes. The workshop signs an NDA on request. All recovery work happens on isolated, air-gapped imaging stations - no internet connection during the recovery process. Recovered files are stored on encrypted drives, deleted with secure erase 7 days after handover." },
  { q: "Do you offer pickup for data recovery jobs?",
    a: "Yes, free pickup and delivery across Dubai mainland. Same-hour pickup for emergency cases. The dead MacBook is transported in a static-free anti-shock case to prevent any further damage in transit." },
];

const COMPARISON = [
  ["Free diagnosis",                 "Yes, with a written quote",                  "Appointment required"],
  ["Logical recovery",               "Free diagnosis, then a quote",               "Not offered - back up first"],
  ["T2 recovery",                    "Original board brought back up",             "Board replaced; data lost with it"],
  ["Apple silicon recovery",         "Original board repaired",                    "Board replaced; data lost with it"],
  ["Same-hour emergency pickup",     "Yes",                                        "No, customer must courier"],
  ["File preview before payment",    "Yes",                                        "Not offered"],
  ["NDA available",                  "Yes, on request",                            "Apple privacy policy only"],
  ["Original device returned intact","Yes",                                        "Sometimes wiped during repair"],
];

export default function MacBookDataRecovery() {
  const reviews = pickReviews([
    "Nab",
    "leaux leaux",
    "Knight A. Shakir",
    "David Boulos",
    "Polycarp",
    "Rouba Abou Nader",
  ]);

  useSeo(
    {
      title: "MacBook Data Recovery Dubai - Free Diagnosis First",
      description:
        "MacBook data recovery Dubai. Dead board, water damage, T2 and Apple silicon, deleted files. Free diagnosis, no charge if nothing is recovered. 055 741 3706.",
      path: "/macbook-data-recovery-dubai",
    },
    [
      localBusiness(),
      organization(),
      serviceSchema({
        name: "MacBook Data Recovery Dubai",
        timeline: "Given with the written quote after a free diagnosis",
        warranty: "P15D",
        url: "/macbook-data-recovery-dubai",
        description:
          "MacBook data recovery in Dubai. Dead logic board, water damage, deleted files, T2 and Apple silicon recovery by repairing the original board, FileVault, Time Machine restore.",
      }),
    ],
  );

  return (
    <PageShell>
      <div className="bg-bg-alt text-text -mb-[4rem]">
      <Hero
        image="/images/real/lab/macbook-pro-internals-topdown-dubai.jpg"
        imageAlt="MacBook Pro opened on the bench at MacBook Repair Dubai, showing the logic board where Apple silicon storage is soldered"
        tone="dark"
        variant="service"
        eyebrow="MacBook data recovery"
        title="MacBook Data Recovery Dubai - From Dead or Damaged Macs"
        subtitle="Dead logic board, water damage, deleted files, T2 and Apple silicon MacBooks. Free diagnosis, then a firm quote - and an honest answer on what can come back."
        startingPrice={299}
        timeline="Given with your written quote"
      >
        <PageMeta author="Shafiq Ahmed, Lead MacBook Technician" />
      </Hero>

      {/* Answer-first capsule (AEO/BLUF) */}
      <QuickAnswer tone="dark" {...deriveServiceQuickAnswer({ serviceName: "MacBook data recovery", startingPrice: 299, timeline: "given with your written quote after the free diagnosis" })} />

      <WarrantyBar tone="dark" warrantyDays={15} />

      <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
        <BreadcrumbTrail tone="dark" trail={[
          { name: "Home",               path: "/" },
          { name: "MacBook Repair",     path: "/" },
          { name: "Data Recovery",      path: "/macbook-data-recovery-dubai" },
        ]} />
      </section>

      <div className="mx-auto max-w-content px-5 md:px-6 mt-xl">
        <div className="max-w-[820px] flex flex-col gap-3xl">
          {/* Intro */}
          <section>
            <LinkifyProse selfHref="/macbook-data-recovery-dubai"><p className="text-[17px] text-text leading-relaxed">
              MacBook data recovery in Dubai spans logical recovery (deleted files, formatted drives, corrupted folders) through to board-level repair on T2 and Apple silicon MacBooks. The workshop has recovered 1,200+ MacBooks since 2004 - removable Intel SSDs, T2 Macs and Apple silicon Macs brought back up, water-damaged boards. Free diagnosis, an honest answer on what can come back, and a file preview before any payment is taken. If nothing is recovered, you pay nothing. T2 and Apple silicon recovery has real limits because the storage is encrypted to the Mac's own chip - the section below explains exactly what those limits are.
            </p></LinkifyProse>
          </section>

          {/* Encryption note - important */}
          <section className="bg-bg-card rounded-md p-lg border border-border">
            <h2 className="text-[22px] mb-md flex items-center gap-sm">
              <Lock size={24} className="text-accent" aria-hidden /> T2, Apple silicon and FileVault encryption - the honest version
            </h2>
            <p className="text-[15px] text-text-muted leading-relaxed mb-md">
              Every T2 Mac (most 2018-2020 Intel models) and every Apple silicon Mac encrypts its SSD by default, with a key that never leaves the Mac's own security chip: the T2, or the Secure Enclave inside the M-series chip. This affects recovery in four ways:
            </p>
            <ul className="space-y-2 text-[14px] text-text-muted">
              <li><strong className="text-text">Chip-off does not work</strong> - desoldered storage chips hold only encrypted data, so the data can only be read through the original, working board.</li>
              <li><strong className="text-text">If the chip and storage are healthy</strong> - board-level repair gets the Mac running again so the data can be copied off.</li>
              <li><strong className="text-text">If the security chip or storage is destroyed, or the board has been replaced</strong> - the key is gone and the data is unrecoverable. This applies equally at Apple, at the workshop, and at every recovery lab.</li>
              <li><strong className="text-text">If FileVault is also enabled</strong> - recovery additionally requires the login password, the FileVault recovery key, or an institutional recovery key.</li>
            </ul>
            <p className="text-[14px] text-text-muted mt-md">
              Older Intel MacBooks without the T2 (such as 2012-2015 MacBook Pros and MacBook Airs up to 2017) use a removable SSD that can be read on a separate workstation. The free diagnosis confirms which scenario applies for your specific MacBook before any paid recovery work begins.
            </p>
          </section>

          {/* Models + pricing */}
          <section>
            <h2 className="text-[28px] md:text-[32px] mb-md">Recovery scenarios + pricing</h2>
            <p className="text-[16px] text-text-muted max-w-[70ch] mb-lg">
              Every MacBook from the 2010 Air to the 2026 M5 Pro and M5 Max. Pricing covers diagnosis, imaging, recovery work, and transfer to a destination drive of your choice.
            </p>
            <PricingTable tone="dark" service="Data recovery" rows={PRICING} />
          </section>

          {/* Common scenarios */}
          <section>
            <h2 className="text-[28px] md:text-[32px] mb-md flex items-center gap-sm">
              <AlertTriangle size={28} className="text-accent" aria-hidden /> Common data-loss scenarios
            </h2>
            <p className="text-[16px] text-text-muted max-w-[70ch] mb-lg">
              The 10 highest-volume data-recovery tickets at the workshop.
            </p>
            <div className="grid gap-md md:grid-cols-2">
              {COMMON_SCENARIOS.map((p) => (
                <article key={p.title} className="border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md p-lg">
                  <h3 className="text-[16px] font-bold mb-sm">{p.title}</h3>
                  <p className="text-[14px] text-text-muted leading-relaxed">{p.body}</p>
                </article>
              ))}
            </div>
          </section>

          {/* Process */}
          <section>
            <h2 className="text-[28px] md:text-[32px] mb-md flex items-center gap-sm">
              <Wrench size={28} className="text-accent" aria-hidden /> Our data recovery process
            </h2>
            <p className="text-[16px] text-text-muted max-w-[70ch] mb-lg">
              Six steps. The file-preview stage means you see what's recoverable before paying - no surprises.
            </p>
            <StepList tone="dark" steps={STEPS} />
          </section>

          {/* What can come back - no percentages (none were sourced) */}
          <section>
            <h2 className="text-[28px] md:text-[32px] mb-md">What can and cannot come back</h2>
            <div className="overflow-x-auto border border-border rounded-md bg-bg-card">
              <table className="w-full text-[14px] min-w-[520px]">
                <thead className="bg-bg-card">
                  <tr className="text-left">
                    <th className="px-md py-sm font-semibold">Scenario</th>
                    <th className="px-md py-sm font-semibold">Outlook</th>
                    <th className="px-md py-sm font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="px-md py-sm font-semibold">Deleted files, external hard drive</td><td className="px-md py-sm text-success">Often recoverable</td><td className="px-md py-sm text-text-muted">Stop writing to the drive.</td></tr>
                  <tr className="bg-bg-alt"><td className="px-md py-sm font-semibold">Deleted files, internal Mac SSD</td><td className="px-md py-sm text-text">Falls quickly</td><td className="px-md py-sm text-text-muted">TRIM clears freed blocks; check Time Machine first.</td></tr>
                  <tr><td className="px-md py-sm font-semibold">Removable SSD, older Intel MacBook</td><td className="px-md py-sm text-success">Good if the SSD is healthy</td><td className="px-md py-sm text-text-muted">Read on a separate workstation.</td></tr>
                  <tr className="bg-bg-alt"><td className="px-md py-sm font-semibold">T2 MacBook (2018-2020 Intel)</td><td className="px-md py-sm text-text">Needs the original board running</td><td className="px-md py-sm text-text-muted">Plus the password if FileVault is on.</td></tr>
                  <tr><td className="px-md py-sm font-semibold">Apple silicon MacBook (M1 to M5)</td><td className="px-md py-sm text-text">Needs the original board running</td><td className="px-md py-sm text-text-muted">Board-level repair; no chip-off.</td></tr>
                  <tr className="bg-bg-alt"><td className="px-md py-sm font-semibold">Liquid damage</td><td className="px-md py-sm text-text">Depends on the corrosion</td><td className="px-md py-sm text-text-muted">Bring it in quickly; never charge it wet.</td></tr>
                  <tr><td className="px-md py-sm font-semibold">Security chip or storage destroyed, or board replaced</td><td className="px-md py-sm text-error">Not recoverable</td><td className="px-md py-sm text-text-muted">Key gone - same at Apple and every lab.</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Warranty */}
          <section>
            <h2 className="text-[28px] md:text-[32px] mb-md flex items-center gap-sm">
              <ShieldCheck size={28} className="text-accent" aria-hidden /> Recovery guarantee
            </h2>
            <div className="border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md p-lg">
              <ul className="space-y-2 text-[15px] text-text">
                <li><strong>No recovery, no charge.</strong> If the file preview is empty or doesn't include what you need, you pay nothing.</li>
                <li><strong>7-day verification window</strong> after handover. If a needed file is missing or corrupted, the workshop re-attempts free of charge.</li>
                <li><strong>Original MacBook returned intact</strong> - never wiped, never re-formatted without your written permission.</li>
                <li><strong>Confidentiality:</strong> NDA available on request, recovered files deleted with secure erase 7 days after handover.</li>
              </ul>
            </div>
          </section>

          {/* Pricing recap */}
          <section>
            <h2 className="text-[28px] md:text-[32px] mb-md">MacBook Data Recovery Dubai. Transparent Pricing</h2>
            <PricingTable tone="dark" service="Data recovery" rows={PRICING} />
            <p className="text-[14px] text-text-muted mt-md max-w-[70ch] mono">
              Final price and timeline confirmed after the free diagnosis. No recovery, no charge applies on every job.
            </p>
          </section>

          <QuoteBand
            service="MacBook Data Recovery"
            startingPrice={299}
            timeline="Given with your written quote"
            whatsappMessage="Hi Shafiq, MacBook data recovery quote please. Model + what happened: "
          />

          {/* Technician */}
          <section className="bg-bg-card rounded-md p-lg border border-border">
            <h2 className="text-[22px] mb-md">Lead technician on data recovery jobs</h2>
            <TechnicianBadge tone="dark" name="Shafiq Ahmed" years={15} specialisation="Logic board & data recovery" />
            <p className="text-[14px] text-text-muted mt-md max-w-[70ch]">
              Shafiq oversees every data recovery job and signs every NDA. On T2 and Apple silicon MacBooks the work is board-level repair on the original logic board - never a chip-off, which cannot work on encrypted storage.
            </p>
          </section>

          {/* DIY */}
          <section>
            <h2 className="text-[28px] md:text-[32px] mb-md">Should I try to fix this myself?</h2>
            <div className="grid gap-md md:grid-cols-2">
              <article className="bg-accent/5 border border-accent/30 rounded-md p-lg">
                <h3 className="text-[18px] font-bold mb-sm">Try it yourself first</h3>
                <ul className="space-y-2 text-[14px] text-text-muted">
                  <li>Time Machine restore - free and official, and the fastest fix for an accidental delete if a backup exists.</li>
                  <li>iCloud Drive web interface - files synced to iCloud are still recoverable from iCloud.com for 30 days after delete.</li>
                  <li>Disk Utility First Aid, once - it can fix file-system errors on a drive that won't mount. Don't repeat it on a failing drive.</li>
                  <li>Free trial of Disk Drill or PhotoRec for logical recovery on external drives - only safe to run when the drive is healthy and target is different.</li>
                </ul>
              </article>
              <article className="border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md p-lg">
                <h3 className="text-[18px] font-bold mb-sm">Stop and bring it in</h3>
                <ul className="space-y-2 text-[14px] text-text-muted">
                  <li>Hardware failure (won't power on, board damage, water) - DIY tools can't reach a dead board.</li>
                  <li>T2 or Apple silicon - an erase, a restore or a board swap destroys the encryption key, and the data with it.</li>
                  <li>Critical files (contracts, photos, irreplaceable data) - every save and every reboot reduces recovery odds.</li>
                  <li>Drive making clicking or grinding noises - applies to external HDDs; powering on causes more head crashes.</li>
                </ul>
              </article>
            </div>
          </section>

          {/* Comparison */}
          <section>
            <h2 className="text-[28px] md:text-[32px] mb-md">Data Recovery vs Apple Store Dubai</h2>
            <div className="overflow-x-auto border border-border rounded-md bg-bg-card">
              <table className="w-full text-[14px] min-w-[640px]">
                <thead className="bg-bg-card">
                  <tr className="text-left">
                    <th className="px-md py-sm font-semibold">Factor</th>
                    <th className="px-md py-sm font-semibold">MacBook Repair Dubai</th>
                    <th className="px-md py-sm font-semibold">Apple Store / AASP</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map((row, i) => (
                    <tr key={row[0]} className={i % 2 ? "bg-bg-alt" : ""}>
                      <td className="px-md py-sm font-semibold">{row[0]}</td>
                      <td className="px-md py-sm">{row[1]}</td>
                      <td className="px-md py-sm text-text-muted">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[13px] text-text-muted mt-sm mono">
              We are independent, not an Apple Authorised Service Provider. Apple repairs hardware; it does not recover files, and replacing a T2 or Apple silicon board ends any chance of recovery. Back up, or recover first.
            </p>
          </section>

          {/* Reviews */}
          <section>
            <h2 className="text-[28px] md:text-[32px] mb-md flex items-center gap-sm">
              <Star size={28} className="text-star fill-star" aria-hidden /> Real data-recovery reviews
            </h2>
            <p className="text-[14px] text-text-muted mb-lg">
              All six reviews verbatim from Google. <a href="/reviews/" className="text-accent font-semibold hover:underline">Read all {REVIEW_COUNT_LABEL} →</a>
            </p>
            <ReviewGrid tone="dark" reviews={reviews} />
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-[28px] md:text-[32px] mb-md">MacBook data recovery FAQ</h2>
            <FAQAccordion items={FAQS} injectSchema />
          </section>

          {/* Related */}
          <section>
            <RelatedServices tone="dark" items={[
              { label: "MacBook Logic Board Repair",  href: "/macbook-logic-board-repair-dubai",  description: "Often the first step in T2 / Apple Silicon recovery - restore boot, then data." },
              { label: "MacBook Water Damage Repair", href: "/macbook-water-damage-repair-dubai", description: "Liquid in the SSD area? Handled as a combo job: clean plus recovery." },
              { label: "MacBook Virus Removal",       href: "/macbook-virus-removal-dubai",       description: "Files locked by ransomware? Free diagnosis tells whether recovery is possible." },
            ]} />
          </section>

          {/* Sub-link block */}
          <section>
            <h2 className="text-[22px] mb-md">More on Mac data</h2>
            <ul className="grid gap-2 md:grid-cols-2 text-[14px]">
              <li><a className="text-accent font-semibold hover:underline" href="/blog/data-recovery-broken-macbook-2026/">Blog: The Time Machine backup guide every MacBook owner needs</a></li>
              <li><a className="text-accent font-semibold hover:underline" href="/blog/data-recovery-broken-macbook-2026/">Blog: Why M1/M2/M3 data recovery is harder - and what to do about it</a></li>
            </ul>
          </section>

          {/* Location */}
          <section>
            <h2 className="text-[28px] md:text-[32px] mb-lg">Where do I bring my MacBook in Dubai?</h2>
            <LocationBlock tone="dark" />
          </section>
        </div>
      </div>

      {/* Final CTA */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <div className="relative overflow-hidden border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md p-xl md:p-2xl flex flex-col items-start gap-md">
          <h2 className="relative text-text text-[28px] md:text-[32px] max-w-[28ch]">Files trapped on a dead MacBook? Free diagnosis, straight answer</h2>
          <p className="relative text-text-muted text-[16px] max-w-[60ch]">
            Stop using the MacBook. WhatsApp the model and what happened. Free diagnosis and an honest answer on what can come back, before any payment.
          </p>
          <div className="relative flex flex-wrap gap-sm">
            <Button asChild variant="whatsapp" size="lg">
              <a href={withSlash(NAP.whatsappUrl)} target="_blank" rel="noopener noreferrer">
                <MessageCircle aria-hidden /> Message on WhatsApp
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary" className="border border-border-strong bg-bg-card text-text hover:bg-bg-alt">
              <a href={`tel:${NAP.phoneE164}`}>
                <Phone aria-hidden /> {NAP.phoneDisplay}
              </a>
            </Button>
          </div>
        </div>
      </section>
      </div>
        <section id="quote" className="mx-auto max-w-content px-5 md:px-6 mt-3xl scroll-mt-24">
      <h2 className="text-[28px] md:text-[32px] mb-md text-text">Get your free repair quote</h2>
      <p className="text-[15px] text-text-muted mb-lg max-w-[60ch]">Two quick steps, your device, then how to reach you. Free diagnosis, written quote, no charge if nothing is recovered.</p>
      <LeadForm variant="compact" defaultDeviceType="MacBook" sourcePath="/macbook-data-recovery-dubai" />
    </section>
    <RelatedArticles path="/macbook-data-recovery-dubai" />
    </PageShell>
  );
}
