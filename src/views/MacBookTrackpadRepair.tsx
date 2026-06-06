"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";

export default function MacBookTrackpadRepair() {
  return (
    <SubServicePageTemplate
      seoTitle="MacBook Trackpad Repair Dubai - AED 350 | 1 Day | Force Touch Specialists"
      seoDescription="MacBook trackpad repair Dubai. Dead clicks, ghost touches, swollen-battery push-up. Force Touch haptic engine specialists. AED 350. Call 055 741 3706."
      path="/macbook-trackpad-repair-dubai"
      eyebrow="MacBook trackpad repair"
      h1="MacBook Trackpad Repair Dubai"
      subtitle="Click stopped working, cursor jumping, trackpad lifting from the body. Often a swollen battery underneath - we always check both. AED 350, 1 day."
      startingPrice={350}
      timeline="1 day"
      whatsappPrefill="Hi, my MacBook trackpad isn't working - model:"
      breadcrumb={[
        { name: "Home",           path: "/" },
        { name: "MacBook Repair", path: "/" },
        { name: "Trackpad Repair", path: "/macbook-trackpad-repair-dubai" },
      ]}
      technician={{ name: "Shafeeq", years: 12, specialisation: "MacBook input & Force Touch repair" }}
      serviceName="MacBook Trackpad Repair"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>MacBook trackpad repair in Dubai</strong> usually splits into two camps: the trackpad itself has failed (worn click mechanism, dead Force Touch haptic engine, cracked glass), or the trackpad is fine but a <strong>swollen battery</strong> underneath is pushing it up from below. We always check the battery first - replacing a trackpad on top of a swollen cell is a fire risk and a waste of money.
          </p>
          <p className="text-[16px] text-on-primary-muted leading-relaxed">
            On Force Touch trackpads (2015 onwards) we replace the haptic engine and force sensors as a unit. Calibration done on the bench so click force matches Apple spec.
          </p>
        </>
      }
      whatWeFix={[
        "Click feel mushy, dead, or only on one corner",
        "Cursor jumping or selecting on its own (ghost touches)",
        "Trackpad visibly raised above the palm rest",
        "Force Touch / haptic feedback no longer working",
        "Three-finger / four-finger gestures unresponsive",
        "Cracked glass on the trackpad surface",
        "Trackpad clicks but the click registers twice",
        "Cursor freezes for a second every few minutes",
      ]}
      steps={[
        { title: "Battery check first", body: "Open the bottom case, inspect for swelling. If swollen, that's the real fix - quote the battery + trackpad together." },
        { title: "Diagnose trackpad", body: "Test click, force, gestures, haptic. Confirm whether it's mechanical, glass or electronic." },
        { title: "Swap the trackpad", body: "Disconnect, replace with the correct part for your model, transfer brackets, recalibrate force." },
        { title: "Bench QC", body: "Verify click consistency across all four corners, all gestures, Force Touch, and palm rejection." },
      ]}
      warrantyDays={90}
      warrantyBullets={[
        "Covers trackpad, click mechanism and Force Touch electronics.",
        "Excludes new physical damage (drops, fresh impact).",
        "Free re-fit if click feel changes inside 90 days.",
      ]}
      faqs={[
        { q: "How can I tell if it's the trackpad or the battery underneath?", a: "Look for the trackpad sitting flush with the palm rest (vs. raised even slightly). Run coconutBattery - if your battery is showing swelling indicators or 100%+ original capacity, that's a swollen cell. We check both at intake - no charge." },
        { q: "Do you fix Force Touch trackpads (2015 onwards)?", a: "Yes. Force Touch trackpads use a haptic engine and four force sensors. We replace the assembly as a unit and recalibrate to Apple-spec click force." },
        { q: "Is trackpad replacement model-specific?", a: "Very. Trackpad part numbers change every 1-2 years. Send us your model identifier from About This Mac and we confirm the part is in stock." },
        { q: "Can you fix just the cracked glass on the trackpad?", a: "Honestly no - the glass and the sensor PCB are bonded as one unit. Full trackpad replacement is the only durable fix." },
        { q: "What if the trackpad works on macOS but not after sleep?", a: "Usually a flex cable issue or a software bug. We diagnose first - sometimes a free SMC reset fixes it." },
        { q: "Will my AppleCare cover this?", a: "If you're under AppleCare, use it first - they cover trackpad replacement. We're for out-of-warranty or anyone who'd rather skip the 1-2 week Apple wait." },
      ]}
      reviewNames={["Saeed Alam", "Polycarp", "Mariia Chymyrysova"]}
      related={[
        { label: "MacBook Repair Hub",          href: "/",              description: "Parent hub - all MacBook services." },
        { label: "MacBook Battery Replacement", href: "/macbook-battery-replacement-dubai",  description: "Swollen battery? Fix the cause first. From AED 350." },
        { label: "MacBook Keyboard Repair",     href: "/macbook-keyboard-repair-dubai",       description: "Sister input fault. Same-day on most models." },
      ]}
      blogLink={{ label: "How a swollen MacBook battery breaks your trackpad", href: "/blog/macbook-battery-replacement-cost-2026" }}
    />
  );
}
