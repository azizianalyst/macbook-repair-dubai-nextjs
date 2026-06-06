"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";

export default function MacOsReinstall() {
  return (
    <SubServicePageTemplate
      seoTitle="macOS Reinstall Dubai - Clean Install Service | AED 300 | Same Day"
      seoDescription="macOS reinstall Dubai. Internet Recovery, clean install of macOS Sequoia / Sonoma / Ventura. Optional data preservation. AED 300, 2-4 hours."
      path="/macos-reinstall-dubai"
      eyebrow="macOS reinstall"
      h1="macOS Reinstall Dubai - Clean Install Service"
      subtitle="Slow, glitchy, full of clutter? A clean macOS reinstall fixes 90% of software problems. AED 300, same-day, with or without data preservation."
      startingPrice={300}
      timeline="Same day (2-4 hours)"
      whatsappPrefill="Hi, I need a macOS reinstall - model and current macOS version:"
      breadcrumb={[
        { name: "Home",           path: "/" },
        { name: "MacBook Repair", path: "/" },
        { name: "macOS Reinstall", path: "/macos-reinstall-dubai" },
      ]}
      technician={{ name: "Shafeeq", years: 12, specialisation: "macOS recovery & system service" }}
      serviceName="macOS Reinstall"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>macOS reinstall in Dubai</strong> is the cure for the things software updates and trying-too-many-tools won't fix: kernel panics, runaway processes, corrupted preferences, half-installed apps that won't uninstall, mysterious slowdowns, broken Spotlight, iCloud sync that's stuck. We do clean installs of macOS Sequoia 15, Sonoma 14, Ventura 13, or whichever is the latest your Mac supports. AED 300, same-day.
          </p>
          <p className="text-[16px] text-on-primary-muted leading-relaxed">
            Two flavours: <strong>clean install with data preservation</strong> (we Time Machine your user folder, wipe, reinstall, restore your data - apps need re-installing fresh) or <strong>full clean install</strong> (everything wiped, fresh start, you reinstall apps yourself afterwards). We recommend with data preservation for most users.
          </p>
        </>
      }
      whatWeFix={[
        "Mac slow on startup or wake from sleep",
        "Frequent kernel panics or unexpected restarts",
        "Apps that won't uninstall properly",
        "Spotlight indexing broken - search not working",
        "iCloud sync stuck or refusing to log in",
        "Corrupted preferences (apps refusing to launch)",
        "macOS update that won't complete",
        "Cleaning up before selling or gifting your Mac",
      ]}
      steps={[
        { title: "Backup first (always)", body: "Time Machine to our bench drive. Confirms your data is safe before we erase anything." },
        { title: "Download the right macOS", body: "Internet Recovery or USB installer for the version your Mac supports. Sequoia / Sonoma / Ventura / Monterey / Big Sur." },
        { title: "Wipe + clean install", body: "Disk Utility erase, fresh macOS install, set up your user account, restore preferences and data (if you chose with-data option)." },
        { title: "Verify + handover", body: "Sign in to iCloud, Apple Music, App Store. Confirm hardware checks pass. Sign-off." },
      ]}
      warrantyDays={30}
      warrantyBullets={[
        "Covers the macOS install itself and our data restore.",
        "Excludes future macOS updates and third-party app issues.",
        "Free re-install within 30 days if the same fault returns.",
      ]}
      faqs={[
        { q: "Will I lose my apps and files?", a: "Depends which option you choose. With-data preservation: files (Documents, Photos, Music) restored, apps need reinstalling fresh. Full clean: everything wiped - you start blank. We discuss before starting." },
        { q: "Can you preserve my Photos library?", a: "Yes. Photos library, iMessages, Mail, Calendar, Contacts, Music - all preserved with the with-data option. Even if you're using iCloud, we keep the local copy for safety." },
        { q: "Which macOS version should I install?", a: "Latest supported by your Mac. We check via the Mac model identifier - sometimes the latest macOS isn't the best choice on older hardware (e.g. a 2018 Intel MacBook Pro is often happier on Sonoma than Sequoia). We advise honestly per machine." },
        { q: "Can you install older macOS for Intel app compatibility?", a: "Yes - happy to install Big Sur, Monterey or Ventura if you need older app compatibility. Some legacy 32-bit apps stopped working at Catalina (10.15) - we can install Mojave on supported hardware if you really need it." },
        { q: "Will Internet Recovery work in Dubai?", a: "Yes - we use it daily. Apple's CDN serves macOS download to UAE without restrictions. Average download is 8-12 GB so it takes 30-60 minutes on our bench fibre, then install is another hour." },
        { q: "Does this wipe my macOS license?", a: "There's no \"license\" to wipe - macOS is tied to your Apple ID. After install you sign in with the same Apple ID and everything from the App Store re-downloads from your purchase history." },
        { q: "Can you reinstall macOS on a Mac that won't boot?", a: "Yes - that's exactly when reinstall is most useful. We boot from Internet Recovery (Cmd+R or Cmd+Option+R at startup) or use a bootable USB. Quoted same as standard reinstall." },
      ]}
      reviewNames={["Polycarp", "Mariia Chymyrysova", "Daniel Vyskoc"]}
      related={[
        { label: "MacBook Repair Hub",       href: "/",            description: "All MacBook services in one place." },
        { label: "MacBook Virus Removal",    href: "/macbook-virus-removal-dubai",     description: "Persistent malware? Reinstall is the cure. AED 350." },
        { label: "MacBook Data Recovery",    href: "/macbook-data-recovery-dubai",     description: "Lost data before reinstall? Recovery first. From AED 800." },
      ]}
      blogLink={{ label: "When to reinstall macOS (and when it won't help)", href: "/blog/macbook-running-slow-10-fixes" }}
    />
  );
}
