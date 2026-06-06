"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";

export default function IMacOsReinstall() {
  return (
    <SubServicePageTemplate
      seoTitle="iMac macOS Reinstall Dubai - Internet Recovery & Clean Install | 055 741 3706"
      seoDescription="iMac macOS reinstall Dubai. Latest supported macOS via Internet Recovery. Honest about model age limits. AED 300. Same day. Home visit available."
      path="/imac-os-reinstall-dubai"
      eyebrow="iMac macOS reinstall"
      h1="iMac macOS Reinstall Dubai - Clean Install or Internet Recovery"
      subtitle="A clean macOS reinstall fixes years of accumulated cruft, kernel panics, mystery slowdowns and broken updates. We use Apple's Internet Recovery to install the latest macOS your iMac actually supports - and we'll tell you honestly which version that is."
      startingPrice={300}
      timeline="Same day"
      whatsappPrefill="Hi, I'd like a macOS reinstall on my iMac - model and year:"
      breadcrumb={[
        { name: "Home",                path: "/" },
        { name: "iMac Repair",         path: "/imac-screen-repair-dubai" },
        { name: "macOS Reinstall",     path: "/imac-os-reinstall-dubai" },
      ]}
      technician={{ name: "Sayed", years: 12, specialisation: "macOS installs and migrations" }}
      serviceName="iMac macOS Reinstall"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>Sometimes the right fix isn't a part - it's a clean operating system.</strong> An iMac that boots slowly, throws random kernel panics, can't complete a software update or has been through three or four major macOS upgrades over the years often just needs a fresh install. We back up first, install clean, and restore your data and apps after.
          </p>
          <p className="text-[16px] text-on-primary-muted leading-relaxed">
            Different iMac models support different ceiling versions of macOS, and Apple drops models silently each year. A 2015 iMac is stuck at macOS Monterey. 2017 iMac runs Ventura. 2019 iMac handles macOS Sequoia and Tahoe. We check your serial first and tell you exactly which version you can install - there's no point promising the latest macOS to a machine that won't take it. We'll also give you a straight answer if your iMac is at end-of-life and won't see another security update.
          </p>
        </>
      }
      whatWeFix={[
        "iMac stuck on a half-failed macOS update",
        "Years of accumulated software issues and kernel panics",
        "Selling the iMac - clean install ready for new owner",
        "Bought a used iMac and want to start fresh",
        "Random reboots, extensions chaos, login items mess",
        "Honest 'this is your model's last supported macOS' advice",
      ]}
      steps={[
        { title: "Backup verify",            body: "We confirm a Time Machine or external clone exists. If not, we make one before anything else - non-negotiable." },
        { title: "Internet Recovery boot",   body: "Hold Option-Cmd-R at boot to install the latest macOS your iMac supports, or Cmd-R for the originally shipped version." },
        { title: "Clean install",            body: "Erase the volume in Disk Utility (APFS), install macOS, set up baseline preferences." },
        { title: "Restore your data + apps", body: "Migration Assistant brings back documents, photos, mail, settings and most apps from your backup. We help with the things Migration Assistant misses." },
      ]}
      warrantyDays={30}
      warrantyBullets={[
        "30-day support window - if the install has issues, we re-do it free.",
        "We confirm the OS boots cleanly and all your apps run before you collect.",
        "No bundled antivirus or 'optimisation' apps installed.",
      ]}
      faqs={[
        { q: "Will I lose my files?", a: "No - not if a backup exists, which is step one. We restore everything via Migration Assistant after the clean install. Photos, Mail, Documents and most app data come back exactly as before." },
        { q: "Which version of macOS will my iMac get?", a: "Depends on year. iMac 2014: macOS Big Sur (last). 2015: Monterey. 2017: Ventura. 2019: Sequoia and Tahoe. 2020+: latest. We confirm by serial number before starting." },
        { q: "Can you install macOS Tahoe on my old iMac?", a: "Only if your iMac is on Apple's compatibility list. We won't install an unsupported OS via hacks (OpenCore Legacy Patcher) as a paid service - too unreliable. We'll tell you the truth about your machine's ceiling." },
        { q: "What if the install fails?", a: "Usually means the SSD or Fusion Drive itself is failing. We then check storage health and recommend SSD replacement before retrying. Free re-attempt after the storage fix." },
        { q: "How long does it really take?", a: "Same day - typically 2-4 hours including backup verify, install and data restore. Internet Recovery downloads the OS from Apple over our gigabit line, then install runs offline." },
        { q: "Should I do this myself?", a: "If you're comfortable with backups and Disk Utility, yes - Apple makes it doable. We exist for people who want it done by someone who's done it 500 times and won't lose their data on the way." },
      ]}
      reviewNames={["Ali Hassan", "Marianne Chehade El Dfouni", "Binod Shrestha"]}
      related={[
        { label: "iMac Virus Removal",     href: "/imac-virus-removal-dubai",     description: "If malware is the reason for the reinstall." },
        { label: "iMac SSD Upgrade",       href: "/imac-ssd-upgrade-dubai",       description: "Pair with SSD upgrade for biggest speed gain." },
        { label: "iMac Full Diagnostic",   href: "/imac-full-diagnostic-dubai",   description: "Free check before deciding on a reinstall." },
      ]}
      blogLink={{ label: "Last supported macOS for every iMac year - the honest list", href: "/blog/best-imac-for-business-dubai" }}
    />
  );
}
