"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";

export default function MacBookSsdUpgrade() {
  return (
    <SubServicePageTemplate
      seoTitle="MacBook SSD Upgrade Dubai - From AED 600 + Drive | Same Day"
      seoDescription="MacBook SSD upgrade Dubai. Intel MacBook Pro 2013-2015 NVMe swap up to 2TB. M-series SSDs soldered (no upgrade). Cloning included. AED 600 + drive."
      path="/macbook-ssd-upgrade-dubai"
      eyebrow="MacBook SSD upgrade"
      h1="MacBook SSD Upgrade Dubai"
      subtitle="Intel MacBook Pro 2013-2015 - yes, up to 2TB NVMe. M-series MacBooks - soldered, no upgrade. Honest answer first, then the work."
      startingPrice={600}
      timeline="Same day"
      whatsappPrefill="Hi, can you upgrade my MacBook SSD? Model and year:"
      breadcrumb={[
        { name: "Home",           path: "/" },
        { name: "MacBook Repair", path: "/" },
        { name: "SSD Upgrade",    path: "/macbook-ssd-upgrade-dubai" },
      ]}
      technician={{ name: "Shafeeq", years: 12, specialisation: "MacBook upgrade & data migration" }}
      serviceName="MacBook SSD Upgrade"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>MacBook SSD upgrade in Dubai</strong> is possible on Intel MacBook Pros from 2013 to early 2015 - those use a custom Apple NVMe slot that we can adapt to standard M.2 NVMe drives up to 2 TB. AED 600 labour plus the cost of the drive (typically AED 400 for 1 TB, AED 800 for 2 TB). Includes Time Machine clone of your current data so you boot up the next day with everything in place.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed">
            The honest part: every M-series MacBook (M1, M2, M3, M4, M5) has its SSD soldered to the logic board. The same goes for the 2016-2017 MacBook Pro Touch Bar models. No upgrade is possible - only data recovery if the soldered SSD dies. Plan capacity at purchase or use Thunderbolt 4 external SSDs (nearly as fast in real-world use).
          </p>
        </>
      }
      whatWeFix={[
        "MacBook Pro Retina 13\" 2013-2015 - up to 2TB NVMe",
        "MacBook Pro Retina 15\" 2013-2015 - up to 2TB NVMe",
        "MacBook Air 2013-2017 - up to 1TB (custom slot)",
        "Pre-Retina 2009-2012 MacBook Pro - standard 2.5\" SATA SSD up to 4TB",
        "Cloning your current macOS install + apps + data",
        "Fresh macOS installation on the new SSD (your choice)",
        "Time Machine backup before we start (mandatory step)",
        "Honest \"can't be upgraded\" answer for soldered M-series",
      ]}
      steps={[
        { title: "Confirm compatibility", body: "Send your model identifier. We tell you the upgrade ceiling (or that it's soldered) within minutes." },
        { title: "Backup", body: "Time Machine to our bench drive before we touch anything. Non-negotiable safety step." },
        { title: "Install + clone", body: "Bottom case off, NVMe adapter installed, new drive seated, clone via Carbon Copy Cloner. 1 TB clones in about 90 minutes." },
        { title: "First-boot verification", body: "Boot from new drive, verify all apps + data + iCloud + login chain. Sign-off only after you confirm." },
      ]}
      warrantyDays={90}
      warrantyBullets={[
        "Covers SSD installation and adapter (where applicable).",
        "SSD itself carries the manufacturer's separate 5-year warranty.",
        "Free clone re-do if anything is missing after first boot.",
      ]}
      faqs={[
        { q: "Why is M-series SSD soldered?", a: "Apple's design choice - the SSD controller is moved into the T2 / SoC for security and speed, leaving only NAND chips on the board itself. The NAND is soldered for thinness and reliability. There is no socket, no slot, no upgrade path." },
        { q: "What about external Thunderbolt 4 SSDs as a workaround?", a: "Genuinely good. A Samsung T9 or OWC Envoy Pro on Thunderbolt 4 (40 Gbps) reaches 3,000+ MB/s - within 30% of the internal SSD speed and indistinguishable for most workloads. We set these up as boot drives or scratch volumes for AED 200." },
        { q: "Will the cloned drive be exactly like my old setup?", a: "Yes. Carbon Copy Cloner copies everything bit-for-bit including the EFI partition, recovery partition, all apps, all settings, your iCloud login chain. You boot up and it's the same machine, just with more space and faster." },
        { q: "Can you recover data from a dead M-series SSD?", a: "Sometimes - only if the SoC is healthy. We boot the MacBook in DFU mode and image the SSD to an external drive. If the SoC has died, the SSD's data is mathematically unrecoverable because the encryption key lives in the Secure Enclave. This is why Time Machine matters." },
        { q: "What size SSD do you recommend for an Intel MacBook upgrade?", a: "1 TB hits the sweet spot for price and capacity in 2026. 2 TB makes sense for video work or large libraries. We have both in stock; quoted before pickup." },
        { q: "Will macOS Sonoma / Sequoia run on a 2014 MacBook Pro after the upgrade?", a: "Not officially. Apple cuts macOS support around the 7-year mark. We can install OpenCore Legacy Patcher (separate AED 300 service) to run unsupported macOS, but for most users we recommend staying on Big Sur or Monterey on a 2014 machine - stable, secure, fast on a new SSD." },
      ]}
      reviewNames={["Anatoliy Tarasenko", "vinay menon", "David Boulos"]}
      related={[
        { label: "MacBook Repair Hub",     href: "/",            description: "All MacBook services in one place." },
        { label: "MacBook Data Recovery",  href: "/macbook-data-recovery-dubai",     description: "Failed SSD? Recovery before upgrade. From AED 800." },
        { label: "macOS Reinstall",        href: "/macos-reinstall-dubai",            description: "Pair with the upgrade for a clean install. AED 300." },
      ]}
      blogLink={{ label: "MacBook SSD upgrade in 2026: what's possible, what's not", href: "/blog/macbook-running-slow-10-fixes" }}
    />
  );
}
