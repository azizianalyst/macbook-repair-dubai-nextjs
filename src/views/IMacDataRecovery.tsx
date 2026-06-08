"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";

export default function IMacDataRecovery() {
  return (
    <SubServicePageTemplate
      seoTitle="iMac Data Recovery Dubai - Fusion Drive, SSD, T2 | 055 741 3706"
      seoDescription="iMac data recovery Dubai. Failed Fusion Drive, dead SSD, T2-encrypted recovery. From AED 500. 1-5 days. No-recovery, no-fee on most cases."
      path="/imac-data-recovery-dubai"
      eyebrow="iMac data recovery"
      h1="iMac Data Recovery Dubai - Fusion Drive, SSD, T2"
      subtitle="Failed iMac and your photos, work or thesis is on it? Don't keep powering it on - every boot makes recovery harder. We handle Fusion Drive splits, failing SATA SSDs, dead spinning halves and T2-encrypted recovery on 2018+ models."
      startingPrice={500}
      timeline="1-5 days depending on damage"
      whatsappPrefill="Hi, I need iMac data recovery - model, year and what happened:"
      breadcrumb={[
        { name: "Home",            path: "/" },
        { name: "iMac Repair",     path: "/imac-repair-dubai" },
        { name: "Data Recovery",   path: "/imac-data-recovery-dubai" },
      ]}
      technician={{ name: "Mohammed", years: 14, specialisation: "Fusion Drive and T2 data recovery" }}
      serviceName="iMac Data Recovery"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>Stop using the iMac.</strong> If a drive is failing, every power-on writes more data to weak sectors and reduces what we can recover. The right move is to bring it to us untouched - we image the drive on a write-blocker bench before we attempt anything.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed">
            iMac data recovery splits into three very different jobs. Older Fusion Drives need both halves understood - the SSD cache holds the file map, the spinning HDD holds the actual data. SATA SSDs from 2017 fail silently. 2018-and-later iMacs use the T2 chip to encrypt the SSD against the logic board's unique key - recovery from a dead T2 board is much harder and we will tell you up front whether it is possible. Honest assessment first, then a written quote.
          </p>
        </>
      }
      whatWeFix={[
        "Fusion Drive logical failure (file system corruption)",
        "Failed spinning half of a Fusion Drive - clicking, stuck heads",
        "Failed SSD half of a Fusion Drive - files visible but unreadable",
        "Standalone SATA SSD failure (iMac 27-inch 2017 / 2019)",
        "Accidentally erased macOS volume - pre-erase data still recoverable",
        "T2 / Apple Silicon recovery limits explained honestly",
      ]}
      steps={[
        { title: "Free intake assessment",       body: "Bring the iMac in. We listen, look at SMART data if the drive responds, and tell you whether recovery is straightforward, complex, or impossible. Always honest." },
        { title: "Image first, work on the image", body: "We pull the drive and clone it sector-by-sector to a working disk. All recovery attempts run on the clone - your original is never written to again." },
        { title: "Logical or physical recovery", body: "Logical: file system rebuild, partition recovery, deleted-file recovery. Physical: head swap or platter work in our partner clean room (rare, quoted separately)." },
        { title: "Hand-back on your drive",      body: "Recovered data delivered on a new external SSD you can keep, or on a drive you provide. We don't keep copies." },
      ]}
      warrantyDays={30}
      warrantyBullets={[
        "30-day window to verify your data - we re-read for free if anything is missing.",
        "No-recovery-no-fee on standard logical jobs.",
        "Clean-room physical work quoted up front before any work begins.",
      ]}
      faqs={[
        { q: "What does 'no recovery, no fee' mean?", a: "On standard logical jobs (Fusion Drive splits, deleted files, corrupted volumes), if we can't recover your data you don't pay. Physical clean-room work is quoted separately because the parts and lab time cost regardless." },
        { q: "How likely am I to get my data back?", a: "Logical Fusion Drive failures: usually 90%+ recovery. SSD electronic failure: 50-70%. T2-encrypted iMac with dead logic board: very low - we'll tell you before charging." },
        { q: "Do you keep a copy of my data?", a: "No. Recovery is delivered to your drive, our working clone is wiped in front of you. Privacy is non-negotiable for personal photos and business data." },
        { q: "How much does it cost?", a: "From AED 500 for straightforward logical recovery on a healthy-but-corrupt drive. Physical clean-room work runs AED 2,500-6,000 depending on damage. We quote in writing before starting." },
        { q: "Can you recover from a 2018+ iMac with a dead logic board?", a: "Sometimes - depends on whether the T2 chip itself survived. We test for free. If the T2 is dead, recovery is generally impossible because the encryption key dies with it. We won't take your money for impossible work." },
        { q: "Should I keep trying to start the iMac at home?", a: "No. Every boot risks more damage. Power it down, bring it in untouched. The first attempt has the highest success rate." },
      ]}
      reviewNames={["Ali Hassan", "Marianne Chehade El Dfouni", "Binod Shrestha"]}
      related={[
        { label: "iMac SSD Upgrade",       href: "/imac-ssd-upgrade-dubai",       description: "Common follow-up after recovery - replace the failed drive." },
        { label: "iMac Not Turning On",    href: "/imac-not-turning-on-dubai",    description: "If the iMac itself is dead, start here." },
        { label: "iMac Full Diagnostic",   href: "/imac-full-diagnostic-dubai",   description: "Free check including drive health." },
      ]}
      blogLink={{ label: "Fusion Drive failure - what's actually happening and what we can recover", href: "/blog/data-recovery-broken-macbook-2026" }}
    />
  );
}
