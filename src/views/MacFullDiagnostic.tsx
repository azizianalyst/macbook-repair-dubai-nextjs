"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";

export default function MacFullDiagnostic() {
  return (
    <SubServicePageTemplate
      seoTitle="Mac Mini, Studio & Pro Full Diagnostic Dubai - Free | 055 741 3706"
      seoDescription="Free Mac desktop diagnostic Dubai. 25-point check on Mac Mini, Studio, Pro. Free home pickup for Mac Pro. No obligation, written report."
      path="/mac-full-diagnostic-dubai"
      eyebrow="Mac diagnostic"
      h1="Mac Mini, Studio & Pro Full Diagnostic Dubai - Free"
      subtitle="Walk in with any Mac concern, walk out with a written 25-point report and a fixed price. Free, no obligation. Free home pickup across Dubai mainland for Mac Pro because they're heavy and awkward to transport."
      startingPrice={0}
      timeline="60 minutes (workshop)"
      whatsappPrefill="Hi, I'd like a free Mac diagnostic - model and main concern:"
      breadcrumb={[
        { name: "Home",            path: "/" },
        { name: "Mac Mini Repair", path: "/mac-mini-repair-dubai" },
        { name: "Free Diagnostic", path: "/mac-full-diagnostic-dubai" },
      ]}
      technician={{ name: "Mohammed", years: 14, specialisation: "Mac desktop diagnostics across all years" }}
      serviceName="Mac Mini, Studio and Pro Free Full Diagnostic Dubai"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>Bring it in, walk out with a written report and a fixed price.</strong> Free, no obligation, no upsell. We run a 25-point check on every Mac desktop: power delivery, SoC or CPU thermal behaviour under load, every port, audio I/O, all storage health, RAM hardware test, fan and chassis cooling, macOS support ceiling, malware quick-scan, and a Thunderbolt routing check on Mac Studio and Mac Pro.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed">
            About 1 in 5 Macs we see don't actually need a paid repair - they need a free port clean, an SMC reset, a software fix or an honest 'this is at end-of-economic-life, replace it' verdict. We tell you the truth either way. If you do need work, you'll see the price in writing before we touch anything. Mac Pro is heavy - we offer free pickup and drop-off across Dubai mainland so you don't have to wrestle a 18kg chassis into a car.
          </p>
        </>
      }
      whatWeFix={[
        "'Just doesn't feel right' performance issues",
        "Multiple symptoms - figure out the root cause",
        "Pre-purchase check on a used Mac Mini, Studio or Pro",
        "Post-third-party-repair sanity check",
        "Storage health and Apple-paired module status (Mac Studio)",
        "Thunderbolt routing across all ports",
        "Honest 'end-of-life' or 'years left' verdict for older Macs",
        "Mac Pro MPX module bench-test before you buy used",
      ]}
      steps={[
        { title: "Hardware bench tests",        body: "Power delivery probed, SoC or CPU thermal behaviour under load, RAM extended test, drive SMART data, every port tested by hand." },
        { title: "Audio + I/O + Thunderbolt",   body: "All speakers, microphones (Mac Studio mic, Mac Pro none), every Thunderbolt port and the controllers behind them, Wi-Fi, Bluetooth, Ethernet." },
        { title: "Software audit",              body: "macOS version vs your Mac's ceiling, malware quick-scan, login items audit, profiles audit, storage health, kernel extension audit." },
        { title: "Written report + price",      body: "One-page summary you can keep. If repair is needed, prices listed in writing. If not, we say so and you walk out with the report." },
      ]}
      warrantyDays={15}
      warrantyBullets={[
        "Diagnostic itself is free - no warranty needed.",
        "Any repair you book carries our standard warranty of up to 12 months.",
        "Free pickup for Mac Pro and heavy Mac Studio setups.",
      ]}
      faqs={[
        { q: "Is the diagnostic really free with no catch?", a: "Yes. Honest first contact builds long-term trust. About 1 in 5 customers needs no repair at all - we tell them so. The other 4 know the price in writing before any work begins." },
        { q: "How long does it take?", a: "About 60 minutes for the full workshop check. You can wait at our Media City workshop with coffee, or drop and pick up later the same day." },
        { q: "Will you wipe my data?", a: "No. The diagnostic is read-only - we don't reset, restore or modify the Mac in any way." },
        { q: "Useful before buying a used Mac Studio or Mac Pro?", a: "Very. Bring the seller and the Mac, we run the check while you wait, and you walk out knowing exactly what you're buying - including module status on Mac Studio and MPX module health on Mac Pro." },
        { q: "Do you offer free pickup for Mac Pro?", a: "Yes - Mac Pro is heavy (around 18kg for the tower, 30kg for the rack-mount) and awkward in a car. We collect across Dubai mainland and return after the diagnostic." },
        { q: "What if you find something I didn't expect?", a: "We tell you. Sometimes it's good news - module healthy, board clean, drive has years left. Sometimes it's bad news, but better to know now than be surprised later." },
      ]}
      reviewNames={["Shah nawaz", "Marianne Chehade El Dfouni", "Binod Shrestha"]}
      related={[
        { label: "Mac Not Turning On",        href: "/mac-not-turning-on-dubai",        description: "If the Mac is dead, this is the most common diagnosis route." },
        { label: "Mac Performance Tune",      href: "/mac-performance-tune-dubai",      description: "Most common follow-up for slow-but-working Macs." },
        { label: "Mac Logic Board Repair",    href: "/mac-logic-board-repair-dubai",    description: "Most common follow-up for board-level diagnoses." },
      ]}
      blogLink={{ label: "What our 25-point Mac desktop diagnostic actually checks", href: "/blog/mac-mini-running-slow-fix" }}
    />
  );
}
