"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";

export default function MacDataRecovery() {
  return (
    <SubServicePageTemplate
      seoTitle="Mac Mini, Studio & Pro Data Recovery Dubai | 055 741 3706"
      seoDescription="Mac desktop data recovery Dubai. Intel Mac easier, M-series chip-off only. Mac Pro RAID recovery. From AED 600. 2-7 days. Honest success rates first."
      path="/mac-data-recovery-dubai"
      eyebrow="Mac data recovery"
      h1="Mac Mini, Studio & Pro Data Recovery Dubai"
      subtitle="A failed Intel Mac is usually recoverable. A failed M-series Mac with a dead logic board is much harder - sometimes impossible - because Apple ties the SSD to the chip's encryption. Mac Pro 2019 RAID recovery is its own discipline. We tell you the honest success odds before you commit."
      startingPrice={600}
      timeline="2-7 days depending on damage"
      whatsappPrefill="Hi, I need Mac data recovery - model, year and what happened:"
      breadcrumb={[
        { name: "Home",            path: "/" },
        { name: "Mac Mini Repair", path: "/mac-mini-repair-dubai" },
        { name: "Data Recovery",   path: "/mac-data-recovery-dubai" },
      ]}
      technician={{ name: "Mohammed", years: 14, specialisation: "Mac desktop and RAID recovery" }}
      serviceName="Mac Mini, Studio and Pro Data Recovery"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>Stop using the Mac.</strong> Every power-on writes more data to weak sectors and reduces what we can recover. Bring it in untouched - we image first, work on the image second. The original is never written to again until you've confirmed the recovery succeeded.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed">
            Recovery splits hard by Mac generation. Intel Mac Mini, Mac Pro 2013 cylinder, Mac Pro 2019 - these have standard SSDs we can recover from with normal techniques. M1, M2, M4 Mac Mini and Mac Studio with a dead logic board are the hardest jobs in the field: the SSD silicon is on the SoC and the encryption key dies with the chip. Sometimes we can chip-off and read raw, sometimes the encryption blocks us. We will tell you the realistic odds for your exact case before charging anything beyond the free assessment.
          </p>
        </>
      }
      whatWeFix={[
        "Mac Mini 2014 / 2018 Intel SATA and PCIe SSD recovery",
        "Mac Pro 2013 cylinder proprietary SSD recovery",
        "Mac Pro 2019 standard NVMe and RAID array recovery",
        "Mac Studio with dead module - Apple-paired recovery limits explained",
        "M-series Mac Mini chip-off recovery (specialist work, honest success rates)",
        "Accidentally erased macOS volume - pre-erase data still recoverable",
      ]}
      steps={[
        { title: "Free intake assessment",         body: "Bring the Mac in. We listen to your story, look at SMART data if the drive responds, and tell you whether recovery is straightforward, complex, or honestly not possible." },
        { title: "Image first, work on image",     body: "We pull the drive (or, on M-series, attempt DFU-mode access first). All recovery attempts run on a sector-by-sector clone." },
        { title: "Logical or physical recovery",   body: "Logical: file system rebuild, partition recovery, deleted-file recovery. Physical: clean-room work or chip-off (rare, quoted separately)." },
        { title: "Hand-back on your drive",        body: "Recovered data delivered on a new external SSD you can keep, or on a drive you provide. Our working clone is wiped in front of you." },
      ]}
      warrantyDays={15}
      warrantyBullets={[
        "30-day window to verify your data - we re-read for free if anything is missing.",
        "No-recovery-no-fee on standard logical jobs.",
        "Chip-off and clean-room work quoted up front before any cost.",
      ]}
      faqs={[
        { q: "What's the realistic chance of recovering data from a dead M2 Mac Mini?", a: "If the SoC is still alive but macOS is corrupted: 90%+. If the SoC itself has died: typically under 30%, and only via chip-off. We test which case yours is for free before charging." },
        { q: "Can you recover data from a dead Mac Studio?", a: "If the chip is intact and the failure is elsewhere on the board, often yes - DFU mode revival via Apple Configurator can sometimes get you back in. If the M-series chip itself died, recovery is very difficult. Free assessment first." },
        { q: "What about a Mac Pro 2019 with a failed RAID?", a: "Standard RAID 0/1/5/10 recovery is well-understood - usually 80-95% success on logical RAID failures. Hardware-failed individual drives may need clean-room work." },
        { q: "Do you keep a copy of my data?", a: "No. Recovery is delivered to your drive, our working clone is wiped in front of you. Privacy is not negotiable." },
        { q: "How much does it cost?", a: "From AED 600 for straightforward logical recovery. Mac Pro RAID typically AED 1,200-2,500. Chip-off on M-series typically AED 3,500-6,000 with no-recovery-no-fee not applicable. We quote in writing before starting." },
        { q: "Is there anything I shouldn't do at home?", a: "Don't keep restarting it. Don't run Disk Utility's First Aid 'just in case'. Don't try to reinstall macOS on a failing SSD. Each of those reduces what we can recover. Power off, bring it in." },
      ]}
      reviewNames={["Ali Hassan", "Marianne Chehade El Dfouni", "Binod Shrestha"]}
      related={[
        { label: "Mac Not Turning On",     href: "/mac-not-turning-on-dubai",     description: "If the Mac itself is dead, start here." },
        { label: "Mac Logic Board Repair", href: "/mac-logic-board-repair-dubai", description: "Sometimes board repair brings the SSD back online." },
        { label: "Mac Full Diagnostic",    href: "/mac-full-diagnostic-dubai",    description: "Free check including drive and chip health." },
      ]}
      blogLink={{ label: "Why M-series Mac data recovery is so much harder than Intel Mac", href: "/blog/apple-silicon-vs-intel-repair-difference" }}
    />
  );
}
