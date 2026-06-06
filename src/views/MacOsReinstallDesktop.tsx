"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";

export default function MacOsReinstallDesktop() {
  return (
    <SubServicePageTemplate
      seoTitle="Mac Mini, Studio & Pro macOS Reinstall Dubai | 055 741 3706"
      seoDescription="macOS reinstall on Mac Mini, Studio, Pro. Internet Recovery, Apple Configurator for revival, latest macOS compatibility. AED 300. Same day."
      path="/mac-os-reinstall-dubai"
      eyebrow="macOS reinstall"
      h1="Mac Mini, Studio & Pro macOS Reinstall Dubai"
      subtitle="Clean macOS install fixes years of accumulated cruft, kernel panics, broken updates and mystery slowdowns. Internet Recovery for most Macs, Apple Configurator revival for stuck M-series Mac Studio and Pro. We back up first, install clean, restore your data after."
      startingPrice={300}
      timeline="Same day"
      whatsappPrefill="Hi, I'd like a macOS reinstall on my Mac - model and year:"
      breadcrumb={[
        { name: "Home",            path: "/" },
        { name: "Mac Mini Repair", path: "/mac-mini-repair-dubai" },
        { name: "macOS Reinstall", path: "/mac-os-reinstall-dubai" },
      ]}
      technician={{ name: "Sayed", years: 12, specialisation: "macOS installs and Apple Configurator revival" }}
      serviceName="Mac Mini, Studio and Pro macOS Reinstall"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>Sometimes the right fix isn't a part - it's a fresh OS.</strong> A Mac that boots slowly, throws random kernel panics, can't complete a software update or has been through three or four major macOS upgrades over the years often just needs a clean install. We back up first, install clean, restore your data and apps after.
          </p>
          <p className="text-[16px] text-on-primary-muted leading-relaxed">
            For most Macs, Internet Recovery is the route - boot with Cmd-R or Option-Cmd-R, install macOS, done. For M-series Mac Studio and Mac Pro that are properly stuck (no boot at all, recoveryOS won't load), we use Apple Configurator 2 from a second Mac connected over USB-C - it does a DFU-mode revival or restore that brings the firmware back to ship-state. We have the second Mac, the right cables and the experience to make this work the first time.
          </p>
        </>
      }
      whatWeFix={[
        "Mac stuck on a half-failed macOS update",
        "Years of accumulated software issues and kernel panics",
        "Selling the Mac - clean install ready for new owner",
        "Bought a used Mac and want to start fresh",
        "M-series Mac Studio or Pro stuck - DFU-mode revival via Apple Configurator",
        "macOS support ceiling for older Mac Mini and Pro models",
      ]}
      steps={[
        { title: "Backup verify",              body: "We confirm a Time Machine or external clone exists. If not, we make one before anything else - non-negotiable." },
        { title: "Internet Recovery or Configurator", body: "Most Macs: hold Option-Cmd-R for the latest supported macOS. Stuck M-series Studio or Pro: Apple Configurator 2 over USB-C from our service Mac." },
        { title: "Clean install",              body: "Erase the volume in Disk Utility (APFS), install macOS, set up baseline preferences." },
        { title: "Restore data + apps",        body: "Migration Assistant brings back documents, photos, mail, settings and most apps from your backup. We help with the things Migration Assistant misses." },
      ]}
      warrantyDays={30}
      warrantyBullets={[
        "30-day support window - if the install has issues, we re-do it free.",
        "We confirm the OS boots cleanly and apps run before you collect.",
        "No bundled antivirus or 'optimisation' apps installed.",
      ]}
      faqs={[
        { q: "Will I lose my files?", a: "No - not if a backup exists, which is step one. We restore everything via Migration Assistant after the clean install. Photos, Mail, Documents and most app data come back exactly as before." },
        { q: "What's Apple Configurator revival and when do you need it?", a: "When an M-series Mac Studio or Pro is stuck so badly that recoveryOS won't even load. We connect a second Mac over USB-C, put the dead one in DFU mode, and Apple Configurator either reflashes firmware ('revive') or wipes and reinstalls macOS ('restore'). It works on cases that Internet Recovery can't touch." },
        { q: "Which version of macOS will my Mac get?", a: "Depends on year. Mac Mini 2014: macOS Big Sur (last). Mac Mini 2018 Intel: Ventura. Mac Pro 2013 cylinder: Monterey. Mac Pro 2019 Intel: Sequoia. M-series: latest supported (currently Tahoe). We confirm by serial." },
        { q: "What if the install fails?", a: "Usually means the SSD itself is failing. We then check storage health and recommend SSD replacement (where the Mac allows it) before retrying. Free re-attempt after the storage fix." },
        { q: "How long does it really take?", a: "Same day - typically 2-4 hours including backup verify, install and data restore. Apple Configurator revival adds another hour or two." },
        { q: "Should I do this myself?", a: "If you're comfortable with backups and Disk Utility, yes - Apple makes it doable. We exist for people who want it done by someone who's done it 500 times and won't lose their data on the way, especially for the Configurator-revival cases." },
      ]}
      reviewNames={["Ali Hassan", "Marianne Chehade El Dfouni", "Binod Shrestha"]}
      related={[
        { label: "Mac Performance Tune",  href: "/mac-performance-tune-dubai",  description: "If macOS is slow but you don't want a full reinstall." },
        { label: "Mac SSD Upgrade",       href: "/mac-ssd-upgrade-dubai",       description: "Pair with SSD upgrade where the model allows it." },
        { label: "Mac Full Diagnostic",   href: "/mac-full-diagnostic-dubai",   description: "Free check before deciding on a reinstall." },
      ]}
      blogLink={{ label: "Apple Configurator revival - how we bring stuck M-series Macs back to life", href: "/blog/mac-mini-running-slow-fix" }}
    />
  );
}
