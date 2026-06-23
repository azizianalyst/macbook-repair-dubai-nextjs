"use client";
import { HardDrive, MessageCircle, Phone, ShieldCheck, AlertTriangle, Wrench, Star, Lock } from "lucide-react";
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
import { NAP } from "@/content/site";

const PRICING: PricingRow[] = [
  { model: "Logical recovery (deleted files, formatted drive)",      price: 299,  timeline: "24 hours"     },
  { model: "Physical recovery - Intel SSD (2010-2017)",              price: 700,  timeline: "24-48 hours"  },
  { model: "Physical recovery - Retina blade SSD (2013-2017)",       price: 800,  timeline: "48 hours"     },
  { model: "T2 chip recovery (2018-2020 Intel, working logic board)", price: 1200, timeline: "48-72 hours" },
  { model: "Apple Silicon NAND-off recovery (M1/M2/M3 - best case)",  price: 1500, timeline: "72 hours"    },
  { model: "Water-damaged SSD recovery (any model)",                  price: 1000, timeline: "48-72 hours" },
  { model: "Time Machine restore + migration",                        price: 299,  timeline: "Same day"    },
  { model: "Complex board-level recovery (multi-chip)",               price: 2000, timeline: "5-7 days"    },
];

const COMMON_SCENARIOS = [
  { title: "MacBook won't power on - files trapped on a working SSD",
    body: "Most common ticket. The logic board is dead but the SSD chips themselves are healthy. On Intel pre-T2 (2010-2017) the workshop pulls the SSD and reads it on a chip-off rig - AED 700, 80% success rate. On T2 and Apple Silicon the SSD is encrypted and bonded to the secure enclave - board repair becomes the recovery path." },
  { title: "Accidentally deleted important files (emptied trash)",
    body: "Logical recovery. macOS doesn't immediately overwrite the data - it just marks the blocks free. As long as nothing has been written since, recovery is 90%+ successful. AED 299, 24 hours. Stop using the MacBook the moment you realise files are missing - every save shrinks the recovery window." },
  { title: "Formatted the drive by mistake",
    body: "Quick format leaves data intact - only the file table is rewritten. Recovery rate 80%+ if no new data has been written. Full secure erase (the AppleCare \"erase before return\" option) overwrites with zeros - recovery rate near 0%. Free diagnosis confirms which type of format happened." },
  { title: "FileVault-encrypted drive - lost the password",
    body: "Honesty: without the password, the iCloud recovery key, or the institutional recovery key, FileVault data is unrecoverable. AppleCare and the workshop are equally bound by this. Free diagnosis confirms whether the encryption key is still in the secure enclave (recoverable with password reset on the same Apple ID) or fully gone." },
  { title: "Water-damaged MacBook - data on the drive",
    body: "After ultrasonic cleaning, the SSD chips are read directly. AED 1,000 if the SSD is the only damaged component. If the secure enclave is corroded on T2/Apple Silicon, recovery becomes much harder - diagnosis tells you which scenario applies before any paid work." },
  { title: "T2 chip Mac (2018-2020 Intel) - board working but Mac won't boot",
    body: "T2 Macs encrypt the SSD with a key in the secure enclave. If the board still powers on, the workshop can boot into Apple Configurator restore mode and pull data via Target Disk Mode. AED 1,200, 48-72 hours, 70% success rate." },
  { title: "Apple Silicon (M1/M2/M3) - secure enclave intact, won't boot",
    body: "M-series Macs have the SSD soldered directly to the logic board with the encryption key in the secure enclave. As long as the secure enclave chip itself is healthy, board-level repair restores access to data. AED 1,500-2,000 depending on what failed. 60% success rate honestly stated." },
  { title: "External drive or Time Machine corrupted",
    body: "External drive recovery uses the same chip-off rig. AED 600 for standard 2.5\"/3.5\" drives, AED 800 for portable USB-C SSDs. Time Machine corrupted backup recovery: AED 299 with 95% success rate - the workshop reads the underlying APFS or HFS+ structure directly." },
  { title: "macOS won't update - disk error blocks installation",
    body: "Often a corrupted catalog file rather than a hardware failure. Free diagnosis runs Disk Utility First Aid then a deeper APFS check. If it's catalog corruption (50% of cases) the fix is free as part of diagnosis. If it's a failing SSD, recovery is AED 299-700." },
  { title: "Folder shows but files appear empty (0 bytes)",
    body: "APFS metadata corruption. The file content is still on the drive but the inode pointers are broken. Custom recovery script reconstructs the pointers from the journal - AED 299, 24 hours, 85% success rate." },
];

const STEPS = [
  { title: "Free diagnosis call + drop-off",
    body: "WhatsApp the model, the failure (won't power on, deleted files, formatted), and roughly how much data needs recovering. Free 30-minute diagnosis on the bench - no payment until the recovery scope and quote are agreed." },
  { title: "Imaging - never write to the original",
    body: "First step is always a sector-by-sector image of the source SSD onto fresh forensic storage. The original drive is then untouched. Recovery work happens on the image only, so the original cannot be made worse." },
  { title: "Logical or physical recovery path",
    body: "Logical: file-system reconstruction, deleted-file scanning, APFS journal replay. Physical: chip-off NAND recovery on the dedicated rig, or T2/Secure Enclave board-level work." },
  { title: "Recovered files preview",
    body: "Before payment, you see a file tree of what's recoverable - folder structure, file names, sizes. You decide if it's worth proceeding. About 5% of customers stop at this stage because the files they wanted aren't recoverable." },
  { title: "Transfer to your new drive or cloud",
    body: "Delivered on a fresh external SSD (yours or supplied at AED 200 for 1 TB) or uploaded to your iCloud / Google Drive / Dropbox via the workshop's gigabit line. Encrypted in transit." },
  { title: "Original device + 7-day verification",
    body: "Original MacBook returned with the SSD intact. 7 days to verify every file you needed is recovered correctly - if anything is missing, free re-attempt." },
];

const FAQS: FAQ[] = [
  { q: "How much does MacBook data recovery cost in Dubai?",
    a: "Logical recovery (deleted files, formatted drive): AED 299, 24 hours. Physical recovery on Intel SSDs (2010-2017): AED 700-800. T2 chip recovery (2018-2020 Intel): AED 1,200. Apple Silicon NAND recovery (M1/M2/M3): AED 1,500. Complex multi-chip board work: up to AED 2,000. Final price is confirmed after the free diagnosis - never quoted blind." },
  { q: "Is data recovery guaranteed?",
    a: "No - and any shop claiming 100% guarantee is misleading. Honest success rates from the workshop's 2024-2025 logbook: logical recovery 90%, Intel SSD physical 80%, T2 70%, Apple Silicon 60%, water-damaged SSD 50%. Free diagnosis tells you the realistic chance for your specific failure before any paid work." },
  { q: "How long does data recovery take?",
    a: "24 hours for logical recovery (deleted files, formatted drive). 24-48 hours for Intel SSD chip-off recovery. 48-72 hours for T2 and Apple Silicon. Up to 7 days for complex board-level work. Time Machine restore + migration: same day if the backup drive is healthy." },
  { q: "Can you recover data from a T2 Mac (2018-2020)?",
    a: "Yes, if the logic board is alive enough to boot into Apple Configurator restore mode or Target Disk Mode. AED 1,200 typical, 70% success rate. If the T2 chip itself is dead, the AES encryption key is gone and the data is unrecoverable - same constraint applies at Apple. Free diagnosis confirms which scenario." },
  { q: "Can you recover data from M1, M2, M3, M4 MacBooks?",
    a: "Yes, with caveats. The SSD on Apple Silicon is soldered to the logic board and encrypted by the secure enclave. If the secure enclave chip is healthy and the failure is elsewhere on the board, component-level repair restores boot and data - AED 1,500-2,000, 60% success. If the secure enclave is dead, data is gone. Time Machine backups taken before failure are hugely valuable on Apple Silicon." },
  { q: "What if the drive is FileVault encrypted?",
    a: "FileVault adds full-disk encryption on top of the hardware encryption. Recovery requires the FileVault password, the iCloud recovery key, or the institutional recovery key from a managed Mac. Without one of these, recovery is impossible - Apple, the workshop, and any reputable lab face the same limit. Free diagnosis confirms whether the encryption key is still accessible." },
  { q: "My MacBook is dead from water damage - can you save my files?",
    a: "Yes in 50-80% of cases depending on which chips corroded. Bring it in within 24 hours of the spill - corrosion on the secure enclave chip is what kills T2 and Apple Silicon recovery chances. AED 1,000 standard, 48-72 hours. The water-damage repair (AED 700) and data recovery (AED 1,000) are billed together at AED 1,500 if both are needed on the same MacBook." },
  { q: "Will recovered files be encrypted or decrypted?",
    a: "Decrypted, in their original form. The recovery process unlocks the data using the source MacBook's encryption keys (when available) and writes it to the destination drive in the clear. The destination drive itself can be re-encrypted by you with FileVault, BitLocker, or VeraCrypt before it leaves the workshop if you prefer." },
  { q: "Can I get my files back from an emptied Trash?",
    a: "Usually yes within the first few days - macOS marks the blocks free but doesn't overwrite them immediately. The workshop's deleted-file scan finds files by their content signatures (magic numbers) rather than the file table. AED 299, 24 hours, 90% success if you stop using the MacBook the moment you realise files are missing." },
  { q: "What about my photos in iCloud - do you handle that too?",
    a: "Yes - Time Machine restore plus iCloud Photo Library re-download is included in the AED 299 migration service. The workshop signs into your iCloud on the new MacBook (with you present), waits for the photo download, and verifies the count matches your old library before handover." },
  { q: "Is my data confidential during recovery?",
    a: "Yes. The workshop signs an NDA on request. All recovery work happens on isolated, air-gapped imaging stations - no internet connection during the recovery process. Recovered files are stored on encrypted forensic drives, deleted with secure erase 7 days after handover." },
  { q: "Do you offer pickup for data recovery jobs?",
    a: "Yes, free pickup and delivery across Dubai mainland. Same-hour pickup for emergency cases. The dead MacBook is transported in a static-free anti-shock case to prevent any further damage in transit." },
];

const COMPARISON = [
  ["Free diagnosis",                 "Yes - 30 min, written quote",            "AED 379 / AED 999 evaluation fee"],
  ["Logical recovery starting price","AED 299",                                 "Refused - refers to third party"],
  ["T2 recovery",                    "AED 1,200",                               "Refused - refers to third party"],
  ["Apple Silicon recovery",         "AED 1,500",                               "Refused - refers to third party"],
  ["Same-hour emergency pickup",     "Yes",                                      "No, customer must courier"],
  ["File preview before payment",    "Yes",                                      "Not offered"],
  ["NDA available",                  "Yes, on request",                          "Apple privacy policy only"],
  ["Original device returned intact","Yes",                                      "Sometimes wiped during evaluation"],
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
      title: "MacBook Data Recovery Dubai - From AED 299",
      description:
        "MacBook data recovery Dubai from AED 299. Dead board, water damage, T2 & Apple Silicon, deleted files. Free diagnosis. 60-90% recovery rates. 055 741 3706.",
      path: "/macbook-data-recovery-dubai",
    },
    [
      localBusiness(),
      organization(),
      serviceSchema({
        name: "MacBook Data Recovery Dubai",
        price: 299,
        timeline: "24 hours to 7 days",
        warranty: "P7D",
        url: "/macbook-data-recovery-dubai",
        description:
          "MacBook data recovery in Dubai. Dead logic board, water damage, deleted files, T2 chip and Apple Silicon NAND recovery, FileVault, Time Machine restore.",
      }),
    ],
  );

  return (
    <PageShell>
      <div className="bg-bg-alt text-text -mb-[4rem]">
      <Hero
        image="/images/topics/macbook-data-recovery-dubai.jpg"
        imageAlt="MacBook data recovery Dubai - SSD chip-off recovery engineering infographic"
        tone="dark"
        variant="service"
        eyebrow="MacBook data recovery"
        title="MacBook Data Recovery Dubai - From Dead or Damaged Macs"
        subtitle="Dead logic board, water-damaged SSD, deleted files, T2 and Apple Silicon NAND recovery. Free diagnosis. From AED 299. Honest success rates published below."
        startingPrice={299}
        timeline="24 hours - 7 days"
      >
        <PageMeta author="Shafiq Ahmed, Lead MacBook Technician" />
      </Hero>

      {/* Answer-first capsule (AEO/BLUF) */}
      <QuickAnswer tone="dark" {...deriveServiceQuickAnswer({ serviceName: "MacBook data recovery", startingPrice: 299, timeline: "1 to 3 days" })} />

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
              MacBook data recovery in Dubai starts at AED 299 for logical recovery (deleted files, formatted drives, corrupted folders) and goes up to AED 2,000 for complex board-level multi-chip work on Apple Silicon. The workshop has recovered 1,200+ MacBooks since 2004 - Intel SSDs, T2-encrypted drives, M1/M2/M3 NAND chips, water-damaged blade SSDs. Free 30-minute diagnosis, honest success rates, and a file preview before any payment is taken. No recovery, no charge for the labour - only the genuine parts cost (typically AED 0-200 for forensic media). T2 and Apple Silicon recovery has real limits because of secure-enclave encryption - the section below explains exactly what those limits are.
            </p></LinkifyProse>
          </section>

          {/* Encryption note - important */}
          <section className="bg-bg-card rounded-md p-lg border border-border">
            <h2 className="text-[22px] mb-md flex items-center gap-sm">
              <Lock size={24} className="text-accent" aria-hidden /> FileVault and secure-enclave encryption - the honest version
            </h2>
            <p className="text-[15px] text-text-muted leading-relaxed mb-md">
              Every Mac since 2018 (T2) and every Apple Silicon Mac (M1+) hardware-encrypts the SSD by default. The encryption key lives in the secure enclave chip on the logic board. This affects recovery in three ways:
            </p>
            <ul className="space-y-2 text-[14px] text-text-muted">
              <li><strong className="text-text">If the secure enclave is alive</strong> - board-level repair restores boot and data. AED 1,500-2,000, 60-70% success.</li>
              <li><strong className="text-text">If the secure enclave is dead</strong> - the AES key is gone. Data is unrecoverable. This applies equally at Apple, at the workshop, and at every recovery lab globally.</li>
              <li><strong className="text-text">If FileVault is also enabled</strong> - recovery additionally requires the FileVault password, iCloud recovery key, or institutional recovery key. Without one of these, even the chip-level data is encrypted twice.</li>
            </ul>
            <p className="text-[14px] text-text-muted mt-md">
              Free 30-minute diagnosis confirms which scenario applies for your specific MacBook before any paid recovery work begins.
            </p>
          </section>

          {/* Models + pricing */}
          <section>
            <h2 className="text-[28px] md:text-[32px] mb-md">Recovery scenarios + pricing</h2>
            <p className="text-[16px] text-text-muted max-w-[70ch] mb-lg">
              Every MacBook from the 2010 Air to the 2025 M5 Pro 16″. Pricing covers diagnosis, imaging, recovery work, and transfer to a destination drive of your choice.
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
                <article key={p.title} className="border border-border bg-bg-card rounded-md p-lg">
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

          {/* Honest success rates */}
          <section>
            <h2 className="text-[28px] md:text-[32px] mb-md">Honest success rates by scenario</h2>
            <div className="overflow-x-auto border border-border rounded-md bg-bg-card">
              <table className="w-full text-[14px] min-w-[520px]">
                <thead className="bg-bg-card">
                  <tr className="text-left">
                    <th className="px-md py-sm font-semibold">Scenario</th>
                    <th className="px-md py-sm font-semibold">Success rate</th>
                    <th className="px-md py-sm font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="px-md py-sm font-semibold">Deleted files, no overwrite</td><td className="px-md py-sm mono text-success">90%</td><td className="px-md py-sm text-text-muted">Stop using MacBook immediately for best result.</td></tr>
                  <tr className="bg-bg-alt"><td className="px-md py-sm font-semibold">Quick-formatted drive</td><td className="px-md py-sm mono text-success">80%</td><td className="px-md py-sm text-text-muted">Secure-erase format drops to near 0%.</td></tr>
                  <tr><td className="px-md py-sm font-semibold">Intel SSD chip-off (2010-2017)</td><td className="px-md py-sm mono text-success">80%</td><td className="px-md py-sm text-text-muted">Pre-T2 - no encryption barrier.</td></tr>
                  <tr className="bg-bg-alt"><td className="px-md py-sm font-semibold">T2 (2018-2020 Intel)</td><td className="px-md py-sm mono text-text">70%</td><td className="px-md py-sm text-text-muted">Needs working secure enclave + FileVault key.</td></tr>
                  <tr><td className="px-md py-sm font-semibold">Apple Silicon (M1/M2/M3)</td><td className="px-md py-sm mono text-text">60%</td><td className="px-md py-sm text-text-muted">SSD bonded to board - board-level repair required.</td></tr>
                  <tr className="bg-bg-alt"><td className="px-md py-sm font-semibold">Water-damaged SSD</td><td className="px-md py-sm mono text-text">50%</td><td className="px-md py-sm text-text-muted">Bring within 24 hours; salt water worse than fresh.</td></tr>
                  <tr><td className="px-md py-sm font-semibold">Dead secure enclave chip</td><td className="px-md py-sm mono text-error">0%</td><td className="px-md py-sm text-text-muted">AES key gone - same at Apple and every lab.</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Warranty */}
          <section>
            <h2 className="text-[28px] md:text-[32px] mb-md flex items-center gap-sm">
              <ShieldCheck size={28} className="text-accent" aria-hidden /> Recovery guarantee
            </h2>
            <div className="border border-border bg-bg-card rounded-md p-lg">
              <ul className="space-y-2 text-[15px] text-text">
                <li><strong>No recovery, no labour charge.</strong> If the file preview is empty or doesn't include what you need, you pay AED 0 for the labour - only forensic media costs (typically AED 0-200) if used.</li>
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
              Final price confirmed after the free 30-minute diagnosis. No-recovery-no-labour-charge applies on every job.
            </p>
          </section>

          <QuoteBand
            service="MacBook Data Recovery"
            startingPrice={299}
            timeline="24 hours - 7 days"
            whatsappMessage="Hi Shafiq, MacBook data recovery quote please. Model + what happened: "
          />

          {/* Technician */}
          <section className="bg-bg-card rounded-md p-lg border border-border">
            <h2 className="text-[22px] mb-md">Lead technician on data recovery jobs</h2>
            <TechnicianBadge tone="dark" name="Shafiq Ahmed" years={21} specialisation="Logic board & data recovery" />
            <p className="text-[14px] text-text-muted mt-md max-w-[70ch]">
              Shafiq personally runs every chip-off NAND recovery on the dedicated forensic rig and signs every NDA. T2 and Apple Silicon recovery work happens on his bench only.
            </p>
          </section>

          {/* DIY */}
          <section>
            <h2 className="text-[28px] md:text-[32px] mb-md">When DIY makes sense - and when it doesn't</h2>
            <div className="grid gap-md md:grid-cols-2">
              <article className="bg-accent/5 border border-accent/30 rounded-md p-lg">
                <h3 className="text-[18px] font-bold mb-sm">Try it yourself first</h3>
                <ul className="space-y-2 text-[14px] text-text-muted">
                  <li>Time Machine restore - free, official, works for 95% of accidental-delete cases.</li>
                  <li>iCloud Drive web interface - files synced to iCloud are still recoverable from iCloud.com for 30 days after delete.</li>
                  <li>Disk Utility First Aid - fixes catalog corruption in 50% of "drive not mounting" cases at zero cost.</li>
                  <li>Free trial of Disk Drill or PhotoRec for logical recovery on external drives - only safe to run when the drive is healthy and target is different.</li>
                </ul>
              </article>
              <article className="border border-border bg-bg-card rounded-md p-lg">
                <h3 className="text-[18px] font-bold mb-sm">Stop and bring it in</h3>
                <ul className="space-y-2 text-[14px] text-text-muted">
                  <li>Hardware failure (won't power on, board damage, water) - DIY tools can't reach a dead board.</li>
                  <li>T2 or Apple Silicon - without the right tooling, attempting recovery can destroy the encrypted data permanently.</li>
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
              Apple's UAE policy on data recovery is to refer customers to third-party labs - Apple does not perform recovery. The workshop is the direct path for everyone outside AppleCare+ data services.
            </p>
          </section>

          {/* Reviews */}
          <section>
            <h2 className="text-[28px] md:text-[32px] mb-md flex items-center gap-sm">
              <Star size={28} className="text-star fill-star" aria-hidden /> Real data-recovery reviews
            </h2>
            <p className="text-[14px] text-text-muted mb-lg">
              All six reviews verbatim from Google. <a href="/reviews/" className="text-accent font-semibold hover:underline">Read all 216+ →</a>
            </p>
            <ReviewGrid tone="dark" reviews={reviews} />
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-[28px] md:text-[32px] mb-md">MacBook data recovery FAQ</h2>
            <FAQAccordion tone="dark" items={FAQS} injectSchema />
          </section>

          {/* Related */}
          <section>
            <RelatedServices tone="dark" items={[
              { label: "MacBook Logic Board Repair",  href: "/macbook-logic-board-repair-dubai",  description: "Often the first step in T2 / Apple Silicon recovery - restore boot, then data." },
              { label: "MacBook Water Damage Repair", href: "/macbook-water-damage-repair-dubai", description: "Liquid in the SSD area? Combo job from AED 1,500 (clean + recovery)." },
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
            <h2 className="text-[28px] md:text-[32px] mb-lg">Where to bring your MacBook</h2>
            <LocationBlock tone="dark" />
          </section>
        </div>
      </div>

      {/* Final CTA */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <div className="relative overflow-hidden border border-border bg-bg-card rounded-md p-xl md:p-2xl flex flex-col items-start gap-md">
          <h2 className="relative text-text text-[28px] md:text-[32px] max-w-[28ch]">Files trapped on a dead MacBook? Free diagnosis - quote in 30 minutes</h2>
          <p className="relative text-text-muted text-[16px] max-w-[60ch]">
            Stop using the MacBook. WhatsApp the model and what happened. Free 30-minute diagnosis with honest success rate before any payment.
          </p>
          <div className="relative flex flex-wrap gap-sm">
            <Button asChild variant="whatsapp" size="lg">
              <a href={NAP.whatsappUrl} target="_blank" rel="noopener noreferrer">
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
      <p className="text-[15px] text-text-muted mb-lg max-w-[60ch]">Two quick steps, your device, then how to reach you. Free diagnosis, written quote, warranty of up to 12 months.</p>
      <LeadForm variant="compact" defaultDeviceType="MacBook" sourcePath="/macbook-data-recovery-dubai" />
    </section>
    <RelatedArticles path="/macbook-data-recovery-dubai" />
    </PageShell>
  );
}
