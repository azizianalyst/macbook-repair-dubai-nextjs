"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";

export default function IMacSsdUpgrade() {
  return (
    <SubServicePageTemplate
      seoTitle="iMac SSD Upgrade Dubai - Fusion Drive to NVMe | 055 741 3706"
      seoDescription="iMac SSD upgrade Dubai. Replace slow Fusion Drive in 2017-2020 27-inch iMac with fast NVMe. Massive speed boost. AED 700 labor. 1-2 days."
      path="/imac-ssd-upgrade-dubai"
      eyebrow="iMac SSD upgrade"
      h1="iMac SSD Upgrade Dubai - Fusion Drive to NVMe"
      subtitle="If your 27-inch iMac (2017-2020) still runs a Fusion Drive, an SSD swap is the single most dramatic speed upgrade you can buy. Boot in seconds, Lightroom in a heartbeat, Final Cut without the spinning beachball. M-series iMac SSDs are soldered - we'll tell you honestly."
      startingPrice={700}
      timeline="1-2 days (display removal required)"
      whatsappPrefill="Hi, I'd like to upgrade SSD on my iMac - model and current storage:"
      breadcrumb={[
        { name: "Home",            path: "/" },
        { name: "iMac Repair",     path: "/imac-repair-dubai" },
        { name: "SSD Upgrade",     path: "/imac-ssd-upgrade-dubai" },
      ]}
      technician={{ name: "Sayed", years: 12, specialisation: "iMac display removal and storage upgrades" }}
      serviceName="iMac SSD Upgrade"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>The Fusion Drive in older iMacs is the single biggest performance bottleneck on the machine.</strong> Apple paired a tiny SSD with a slow 5400rpm or 7200rpm spinning hard drive. When the SSD cache fills up, everything crashes back to spinning-disk speeds - Lightroom freezes, macOS updates take hours, the beachball appears for the simplest tasks.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed">
            Swapping the whole storage stack for a single 1TB or 2TB NVMe SSD turns a tired iMac into a fast machine again. It is a real procedure though: the entire 5K display has to come off, the adhesive stripped, the new drive installed and the display re-laminated dust-free. We do this every week and we have the proper tools and clean bench. M-series 24" iMac SSDs are soldered - we'll tell you up front if your model can be upgraded.
          </p>
        </>
      }
      whatWeFix={[
        "iMac 27-inch 2017 / 2019 / 2020 Fusion Drive → 1TB or 2TB NVMe",
        "Failed Fusion Drive (the spinning half died, SSD half still works)",
        "iMac 21.5-inch 2017-2019 storage upgrades",
        "Cloning your existing macOS install to the new SSD",
        "Optional: data migration from a healthy original drive",
        "Free honest 'no, we can't' for soldered M-series storage",
      ]}
      steps={[
        { title: "Backup first",            body: "We confirm you have a Time Machine or clone backup before we open the iMac. If not, we make one for you (separate service) - never start storage work without one." },
        { title: "Display removal",          body: "We use Apple-spec adhesive cutting wheels to separate the laminated display from the chassis without cracking the glass." },
        { title: "Install NVMe + sled",      body: "Install a Samsung, WD or Crucial NVMe SSD into the iMac's storage bay using the correct PCIe adapter for your year. Reseat the SATA SSD half if the model needs it for the temperature sensor." },
        { title: "Re-laminate display",      body: "Fresh Apple-spec adhesive strips applied in our dust-controlled bench. Display refit, edges sealed, weighted overnight." },
        { title: "Install macOS + restore",  body: "Latest supported macOS for your iMac installed clean, then we restore your data and apps from your backup. You collect a working machine, not a project." },
      ]}
      warrantyDays={365}
      warrantyBullets={[
        "1-year warranty on the SSD itself (manufacturer + us).",
        "3-month warranty on the display reassembly and adhesive seal.",
        "Free re-seal if the display lifts at the edge in warranty.",
      ]}
      faqs={[
        { q: "How much speed difference will I actually see?", a: "Boot times typically drop from 60-90 seconds to under 15. App launches are near-instant. Photo and video scrubbing is the biggest visible improvement - usually 5-10× faster than Fusion Drive." },
        { q: "Will Apple Pencil… sorry, will my display look the same after?", a: "Yes. We use Apple-spec adhesive and cure overnight. The seal is invisible and the laminated look is preserved. We have not lost a display in years of doing this work." },
        { q: "Why is this 1-2 days when RAM is same-day?", a: "Display removal needs adhesive curing time on reassembly. Rushing this step is how shops end up with displays that lift at the corner. We won't rush it." },
        { q: "Can you do this on a 24-inch M1 / M2 / M3 / M4 iMac?", a: "No. SSD is soldered to the logic board on M-series iMacs. We'll confirm by serial and tell you honestly - your only options are external Thunderbolt SSDs or a different machine." },
        { q: "What about my data?", a: "If your existing drive still reads we clone it across. If the spinning half has failed but you need data from it, see our iMac Data Recovery service." },
        { q: "Is the new SSD bigger than the original?", a: "Almost always - most upgrades go from 1TB Fusion (28GB SSD + 1TB HDD) to a flat 1TB or 2TB true SSD. Bigger sizes available." },
      ]}
      reviewNames={["Binod Shrestha", "Marianne Chehade El Dfouni", "Shah nawaz"]}
      related={[
        { label: "iMac RAM Upgrade",       href: "/imac-ram-upgrade-dubai",       description: "Pair the SSD swap with RAM for full transformation." },
        { label: "iMac Data Recovery",     href: "/imac-data-recovery-dubai",     description: "Recover from a failing Fusion Drive first." },
        { label: "iMac macOS Reinstall",   href: "/imac-os-reinstall-dubai",      description: "Clean OS install on the new drive." },
      ]}
      blogLink={{ label: "Fusion Drive vs SSD - what changes in real life on a 27-inch iMac", href: "/blog/imac-vs-mac-mini-vs-mac-studio" }}
    />
  );
}
