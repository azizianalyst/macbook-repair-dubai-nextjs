"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";

export default function IPhoneFullDiagnostic() {
  return (
    <SubServicePageTemplate
      seoTitle="iPhone Full Diagnostic Dubai - Free 20-Point Check | 055 741 3706"
      seoDescription="Free iPhone diagnostic in Dubai. 20-point check: battery, screen, ports, Face ID, antennas, water indicators. No obligation. Call 055 741 3706."
      path="/iphone-full-diagnostic-dubai"
      eyebrow="iPhone diagnostic"
      h1="iPhone Full Diagnostic Dubai - Free 20-Point Check"
      subtitle="Not sure what's wrong? Bring the iPhone in. We run a free 20-point hardware and software check, hand you a written report, and quote any fixes. No obligation, no pressure, no charge."
      startingPrice={0}
      timeline="30 minutes"
      whatsappPrefill="Hi, I'd like a free iPhone diagnostic - model and main concern:"
      breadcrumb={[
        { name: "Home",            path: "/" },
        { name: "iPhone Repair",   path: "/iphone-repair-dubai" },
        { name: "Free Diagnostic", path: "/iphone-full-diagnostic-dubai" },
      ]}
      technician={{ name: "Shafeez", years: 12, specialisation: "iPhone diagnostics across all models" }}
      serviceName="iPhone Free Full Diagnostic"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>Walk in with a problem, walk out with a written report and a fixed price.</strong> Free, no obligation, no upsell. We run a 20-point check on every iPhone - battery health, screen quality, all four mics, both speakers, all ports, all antennas, Face ID or Touch ID, water-damage indicators, and a software-side check for jailbreaks or rogue profiles.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed">
            About 20% of iPhones we see don't actually need a repair - they need a software reset, a free port clean, or a battery replacement they could schedule for next month. We tell you the truth either way. If you do need work, you'll see the price in writing before we touch anything.
          </p>
        </>
      }
      whatWeFix={[
        '"Just doesn\'t feel right" performance issues',
        "Multiple symptoms - figure out the root cause",
        "Pre-purchase check on a used iPhone",
        "After-third-party-repair sanity check",
        "Battery health and cycle count",
        "Original vs aftermarket screen identification",
        "Water-damage indicator tab inspection",
        "Face ID, Touch ID, all sensors verified",
      ]}
      steps={[
        { title: "Hardware test bench", body: "iPhone connected to our diagnostic rig - runs Apple's own internal hardware tests via DFU mode." },
        { title: "Manual port and button check", body: "Every button, port, mic and speaker tested by hand. Microscope on the cameras and lens for crack/scratch assessment." },
        { title: "Battery + screen forensics", body: "True battery health (not just iOS Settings), screen brightness uniformity, True Tone calibration, original vs aftermarket detection." },
        { title: "Written report", body: "We hand you a one-page summary: what's working, what's borderline, what needs work, and the cost in writing. No obligation to repair." },
      ]}
      warrantyDays={90}
      warrantyBullets={[
        "Diagnostic itself is free of charge - no warranty needed.",
        "Any repair you book afterwards carries our standard 90-day warranty.",
        "We don't disable, modify or 'unlock' anything during the diagnostic.",
      ]}
      faqs={[
        { q: "Is the diagnostic really free with no catch?", a: "Yes. We've found that honest diagnostics build long-term trust. About 1 in 5 customers needs no repair at all - we tell them so. The remaining 4 out of 5 know the price in writing before any work begins." },
        { q: "How long does it take?", a: "About 30 minutes for a full check. You can wait at our Media City workshop with coffee, or drop the phone and pick up later the same day." },
        { q: "What if the diagnostic finds something I didn't expect?", a: "We tell you. Sometimes it's good news - the original screen is intact, the battery has years left, no water damage. Sometimes it's bad news - but better to know now than to be surprised when reselling." },
        { q: "Will you wipe my data?", a: "No. The diagnostic is read-only - we don't reset, restore or modify the phone in any way." },
        { q: "Is this useful before buying a used iPhone?", a: "Very. Bring the seller and the phone, we run the check while you wait, and you walk out knowing exactly what you're buying. We've prevented dozens of bad deals." },
        { q: "Can I book a diagnostic on WhatsApp?", a: "Yes - WhatsApp 055 741 3706 with the iPhone model and your concern. We confirm a slot, you walk in." },
      ]}
      reviewNames={["Tim Quick", "B Parker", "Wellington Academy"]}
      related={[
        { label: "iPhone Screen Repair",       href: "/iphone-screen-repair-dubai",       description: "Most common follow-up after diagnostic." },
        { label: "iPhone Battery Replacement", href: "/iphone-battery-replacement-dubai", description: "Usually the next-most-common." },
        { label: "iPhone Water Damage Repair", href: "/iphone-water-damage-repair-dubai", description: "Often what diagnostic uncovers." },
      ]}
      blogLink={{ label: "What we look for in a free iPhone diagnostic - checklist", href: "/blog" }}
    />
  );
}
