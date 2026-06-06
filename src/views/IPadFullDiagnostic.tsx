"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";

export default function IPadFullDiagnostic() {
  return (
    <SubServicePageTemplate
      seoTitle="iPad Full Diagnostic Dubai - Free 25-Point Check | 055 741 3706"
      seoDescription="Free iPad diagnostic Dubai. 25-point check: screen, battery, Pencil, Smart Connector, cameras, speakers, water indicators. No obligation."
      path="/ipad-full-diagnostic-dubai"
      eyebrow="iPad diagnostic"
      h1="iPad Full Diagnostic Dubai - Free 25-Point Check"
      subtitle="Walk in with any iPad concern. We run a free 25-point hardware and iPadOS check, hand you a written report, and quote any fixes. No obligation, no pressure."
      startingPrice={0}
      timeline="45 minutes"
      whatsappPrefill="Hi, I'd like a free iPad diagnostic - model and main concern:"
      breadcrumb={[
        { name: "Home",            path: "/" },
        { name: "iPad Repair",     path: "/ipad-screen-repair-dubai" },
        { name: "Free Diagnostic", path: "/ipad-full-diagnostic-dubai" },
      ]}
      technician={{ name: "Mohammed", years: 14, specialisation: "iPad diagnostics across all models" }}
      serviceName="iPad Free Full Diagnostic"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>Bring the iPad in, walk out with a written report and a fixed price.</strong> Free, no obligation, no upsell. We run a 25-point check on every iPad: screen quality and Pencil response, battery cycle count, Smart Connector pads, all cameras, both or four speakers, every port, Touch ID or Face ID, water-damage indicators, and a software-side check for Activation Lock and rogue profiles.
          </p>
          <p className="text-[16px] text-on-primary-muted leading-relaxed">
            About 1 in 5 iPads we see don't actually need a repair - they need a software reset, a free port clean, or an iPadOS update they could install at home. We tell you the truth either way. If you do need work, you'll see the price in writing before we touch anything.
          </p>
        </>
      }
      whatWeFix={[
        '"Just doesn\u2019t feel right" performance issues',
        "Multiple symptoms - figure out the root cause",
        "Pre-purchase check on a used iPad",
        "After-third-party-repair sanity check",
        "Battery health and cycle count",
        "Apple Pencil pairing and palm rejection check",
        "Smart Connector continuity",
        "Activation Lock status before purchase",
      ]}
      steps={[
        { title: "Hardware test bench", body: "iPad connected to our diagnostic rig - runs Apple's internal hardware tests via DFU mode." },
        { title: "Manual port and button check", body: "Every button, port, mic, speaker tested by hand. Microscope on cameras and Smart Connector pads." },
        { title: "Pencil + screen forensics", body: "Apple Pencil compatibility test (1, 2, Pro depending on model), screen brightness uniformity, True Tone calibration, original vs aftermarket detection." },
        { title: "Written report", body: "We hand you a one-page summary: what's working, what's borderline, what needs work, the cost in writing. No obligation to repair." },
      ]}
      warrantyDays={90}
      warrantyBullets={[
        "Diagnostic itself is free - no warranty needed.",
        "Any repair you book afterwards carries our standard 90-day warranty.",
        "We don't disable, modify or 'unlock' anything during the diagnostic.",
      ]}
      faqs={[
        { q: "Is the diagnostic really free with no catch?", a: "Yes. Honest diagnostics build long-term trust. About 1 in 5 customers needs no repair at all - we tell them so. The other 4 know the price in writing before any work begins." },
        { q: "How long does it take?", a: "About 45 minutes for a full iPad check (longer than iPhone because of Pencil testing and Smart Connector checks). You can wait at our Media City workshop with coffee, or drop and pick up." },
        { q: "Will you wipe my data?", a: "No. The diagnostic is read-only - we don't reset, restore or modify the iPad in any way." },
        { q: "Useful before buying a used iPad?", a: "Very. Bring the seller and the iPad, we run the check while you wait, and you walk out knowing exactly what you're buying - including Apple Pencil compatibility and Activation Lock status." },
        { q: "Will you check Apple Pencil compatibility?", a: "Yes - we own every Pencil generation and test the iPad against the right one for its model. Includes palm rejection, pressure sensitivity, hover (Pencil 2 / Pro on M2+ iPads)." },
        { q: "What if you find something I didn\u2019t expect?", a: "We tell you. Sometimes it\u2019s good news - original screen intact, battery has years left. Sometimes it\u2019s bad news, but better to know now than be surprised later." },
      ]}
      reviewNames={["Anatoliy Tarasenko", "Anastasiia Goncia", "Ana Undricova"]}
      related={[
        { label: "iPad Screen Repair",       href: "/ipad-screen-repair-dubai",       description: "Most common follow-up after diagnostic." },
        { label: "iPad Battery Replacement", href: "/ipad-battery-replacement-dubai", description: "Usually the next-most-common." },
        { label: "iPad Pencil Compatibility",href: "/ipad-pencil-compatibility-dubai",description: "Verifies Pencil after any screen work." },
      ]}
      blogLink={{ label: "What we look for in a free iPad diagnostic - the 25-point list", href: "/blog" }}
    />
  );
}
