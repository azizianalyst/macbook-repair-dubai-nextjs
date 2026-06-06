"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";

export default function IPadSoftwareReset() {
  return (
    <SubServicePageTemplate
      seoTitle="iPad Software Reset Dubai - iPadOS Fix | AED 250 Same-Day"
      seoDescription="iPad stuck on Apple logo, frozen update, recovery loop. DFU restore, iPadOS reinstall, data preserved where possible. AED 250, same day."
      path="/ipad-software-reset-dubai"
      eyebrow="iPad software repair"
      h1="iPad Software Reset Dubai - iPadOS Fix"
      subtitle="Stuck on the Apple logo, frozen during an update, or trapped in recovery mode. DFU restore done properly - with data preserved where possible. AED 250, same day."
      startingPrice={250}
      timeline="Same day"
      whatsappPrefill="Hi, my iPad needs a software reset - model and symptom:"
      breadcrumb={[
        { name: "Home",            path: "/" },
        { name: "iPad Repair",     path: "/ipad-screen-repair-dubai" },
        { name: "Software Reset",  path: "/ipad-software-reset-dubai" },
      ]}
      technician={{ name: "Mohammed", years: 14, specialisation: "iPadOS recovery and DFU restore" }}
      serviceName="iPad Software Reset"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>Most "dead" iPads aren't dead - they're stuck in software</strong>: a failed iPadOS 18 update, a corrupted system partition after a forced shutdown, or a recovery-mode loop after low battery during an update. AED 250 covers the full DFU recovery process, including data preservation attempt before any erase. Same day on every iPad from iPad 5 through M4 Pro.
          </p>
          <p className="text-[16px] text-on-primary-muted leading-relaxed">
            We start with the gentlest method (force restart, then standard recovery) and only escalate to DFU + erase if needed. About 60% of iPads we see this way come back with the original data intact. The rest need a clean iPadOS reinstall - your iCloud backup gets restored automatically afterwards.
          </p>
        </>
      }
      whatWeFix={[
        "Stuck on Apple logo at boot",
        "iPadOS update frozen partway",
        "Recovery mode loop (cable + iTunes screen)",
        "Boot loop - restarts every minute",
        "Apps crashing repeatedly after iPadOS 18 update",
        "iPad won't accept any input after update",
        "Restore failed in iTunes / Finder at home",
        "Disabled iPad needing reset (with proof of ownership)",
      ]}
      steps={[
        { title: "Triage and gentle recovery", body: "Force restart first (button combo), then standard recovery mode. About a third of iPads recover here without data loss." },
        { title: "DFU mode + firmware extract",body: "If standard recovery fails, we enter DFU and attempt to extract user data partition before any erase." },
        { title: "Reinstall iPadOS",           body: "Latest stable iPadOS installed via Apple's signed firmware. We never use modified IPSWs - security and update path stay intact." },
        { title: "Data restore",               body: "If your iCloud backup is recent, we restore from it. If not, we hand back a clean iPad with iPadOS ready to set up. 90-day warranty on the software work." },
      ]}
      warrantyDays={90}
      warrantyBullets={[
        "Covers the software install and configuration.",
        "Excludes hardware faults uncovered during diagnostic (separate quote).",
        "Free re-restore within 90 days if iPadOS becomes unstable.",
      ]}
      faqs={[
        { q: "Will I lose my data?", a: "We try to preserve it. About 60% of cases we recover the data partition before reinstalling. The remaining 40% need an erase, but if you have an iCloud backup we restore it automatically - you'd lose only changes since the last backup." },
        { q: "Can you bypass an Activation Lock?", a: "No - and anyone who claims to in Dubai is lying. Activation Lock is tied to the original Apple ID and only Apple can remove it with proof of ownership. See our iCloud Unlock page for the honest options." },
        { q: "What about disabled iPads (passcode forgotten)?", a: "We can erase and reinstall iPadOS, but the iPad will then ask for the original Apple ID. Without that, you have an unusable device - same Activation Lock honesty applies." },
        { q: "Why did the update fail in the first place?", a: "Most often: low battery during install, weak WiFi causing partial download, or insufficient storage. iPadOS 18 needs ~10GB free - we recommend keeping 15GB free as standard." },
        { q: "Same day for sure?", a: "Yes - most cases done in 2-3 hours. WhatsApp first so we can have firmware downloaded and ready before you arrive." },
      ]}
      reviewNames={["Anatoliy Tarasenko", "Anastasiia Goncia", "Ana Undricova"]}
      related={[
        { label: "iPad iCloud Unlock",         href: "/ipad-icloud-unlock-dubai",     description: "Honest consultation on Activation Lock." },
        { label: "iPad Battery Replacement",   href: "/ipad-battery-replacement-dubai", description: "Common cause of update failures." },
        { label: "iPad Full Diagnostic",       href: "/ipad-full-diagnostic-dubai",   description: "Free 25-point hardware check." },
      ]}
      blogLink={{ label: "iPad stuck on Apple logo: every recovery option in order", href: "/blog" }}
    />
  );
}
