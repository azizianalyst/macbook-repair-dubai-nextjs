"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";

export default function IMacDataRecovery() {
  return (
    <SubServicePageTemplate
      seoTitle="iMac Data Recovery Dubai - Fusion Drive, SSD, T2 | 055 741 3706"
      seoDescription="iMac data recovery Dubai. Failed Fusion Drive, dead SSD, T2-encrypted recovery. 1-5 days. No-recovery, no-fee on most cases. Message us on WhatsApp for a quote."
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
      serviceName="iMac Data Recovery Dubai"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>Stop using the iMac.</strong> If a drive is failing, every power-on writes more data to weak sectors and reduces what we can recover. The right move is to bring it to us untouched - we image the drive on a write-blocker bench before we attempt anything.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed">
            iMac data recovery splits into three very different jobs. Older Fusion Drives need both halves understood - the SSD cache holds the file map, the spinning HDD holds the actual data. SATA SSDs from 2017 fail silently. 2018-and-later iMacs use the T2 chip to encrypt the SSD against the logic board's unique key - recovery from a dead T2 board is much harder and we will tell you up front whether it is possible. Honest assessment first, then a written quote.
          </p>
          <h2 className="text-[24px] md:text-[28px] mb-md mt-lg">What if one half of the Fusion Drive is dead and the other is failing?</h2>
          <p className="text-[16px] text-text-muted leading-relaxed mb-md">
            This is the hardest Fusion Drive case and the one we see most on the 2017 27-inch iMac. A typical picture: the SSD half no longer answers at all (a Linux boot sees the controller but reports the device as not ready), and the 2TB hard drive is still detected but SMART shows hundreds of pending sectors and a list of uncorrectable errors. The owner has no backup and asks whether anything is left.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed mb-md">
            Usually, yes, but only if nothing else is done to the drives first. Fusion Drive is one APFS container spread over two devices: the SSD carries the hot data and part of the file map, the HDD carries the bulk. With the SSD gone, the map has holes; with the HDD shedding sectors, every read makes more holes. What we do on the bench:
          </p>
          <ul className="space-y-2 text-[15px] text-text-muted mb-md">
            <li>• <strong className="text-text">No First Aid, no resetFusion, no reinstall.</strong> Each of those writes to the container. Disk Utility&apos;s First Aid on a failing HDD can push pending sectors over the edge, and resetFusion erases both members.</li>
            <li>• <strong className="text-text">Image the HDD first, worst sectors last.</strong> The drive goes on a hardware imager that reads the healthy areas first, skips the bad ones and comes back for them with short timeouts. A failing drive gets a limited number of reads before the heads give up, so the order matters.</li>
            <li>• <strong className="text-text">Then the SSD.</strong> A blade SSD that is &quot;not ready&quot; is sometimes a power or firmware state, not dead NAND. We try it on a separate bench adapter. If it never comes up, we work from the HDD image alone and recover what was stored there, which on most Fusion Drives is the large majority of files.</li>
            <li>• <strong className="text-text">Rebuild the container on the clones</strong>, never on the originals, and hand the originals back to you untouched.</li>
          </ul>
          <p className="text-[16px] text-text-muted leading-relaxed">
            If a shop offers to &quot;try a repair&quot; on the original drives before imaging them, walk out. The free assessment tells you which case you have before any charge.
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
      warrantyDays={15}
      warrantyBullets={[
        "30-day window to verify your data - we re-read for free if anything is missing.",
        "No-recovery-no-fee on standard logical jobs.",
        "Clean-room physical work quoted up front before any work begins.",
      ]}
      faqs={[
        { q: "What does 'no recovery, no fee' mean?", a: "On standard logical jobs (Fusion Drive splits, deleted files, corrupted volumes), if we can't recover your data you don't pay. Physical clean-room work is quoted separately because the parts and lab time cost regardless." },
        { q: "How likely am I to get my data back?", a: "It depends on the failure, and the free assessment tells you before any charge. Logical Fusion Drive failures on older iMacs are usually the most recoverable. On the T2 iMac (27-inch 2020) and Apple silicon iMacs the storage is encrypted to the Mac's own chip, so recovery needs the original logic board running; if that chip is destroyed, the data is gone." },
        { q: "Do you keep a copy of my data?", a: "No. Recovery is delivered to your drive, our working clone is wiped in front of you. Privacy is non-negotiable for personal photos and business data." },
        { q: "How much does it cost?", a: "It depends on the type of failure - straightforward logical recovery on a healthy-but-corrupt drive costs a lot less than physical clean-room work, which varies with the damage. Message us on WhatsApp with your iMac model and what happened and we'll quote in writing before starting." },
        { q: "Can you recover from a 2018+ iMac with a dead logic board?", a: "Sometimes - depends on whether the T2 chip itself survived. We test for free. If the T2 is dead, recovery is generally impossible because the encryption key dies with it. We won't take your money for impossible work." },
        { q: "My 2017 iMac Fusion Drive SSD is not detected and the hard drive shows SMART errors. Can the data be recovered?", a: "Often, yes, if the drives are not written to again. Stop running First Aid, resetFusion or any reinstall. We image the hard drive on a hardware imager that reads the good sectors first and retries the bad ones gently, then test the SSD on a separate adapter. If the SSD never comes back we rebuild from the hard-drive image alone, which holds most of the files on a Fusion Drive. Both originals are preserved and returned untouched." },
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
