"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";

export default function MacLogicBoardRepair() {
  return (
    <SubServicePageTemplate
      seoTitle="Mac Mini & Studio Logic Board Repair Dubai | 055 741 3706"
      seoDescription="Mac Mini and Studio logic board repair Dubai. Component-level work on power delivery, Thunderbolt controller, USB. SoC failures = board swap (honest). From AED 800."
      path="/mac-logic-board-repair-dubai"
      eyebrow="Mac logic board repair"
      h1="Mac Mini & Studio Logic Board Repair Dubai"
      subtitle="We do real component-level repair on Mac Mini and Mac Studio boards: power-delivery MOSFETs, Thunderbolt controllers, USB controllers, capacitor failures. We will not pretend we can fix a failed M4 or M5 SoC chip - that's a board replacement, and we'll say so up front."
      startingPrice={800}
      timeline="3-5 days"
      whatsappPrefill="Hi, I need Mac logic board repair - model and symptoms:"
      breadcrumb={[
        { name: "Home",                path: "/" },
        { name: "Mac Mini Repair",     path: "/mac-mini-repair-dubai" },
        { name: "Logic Board Repair",  path: "/mac-logic-board-repair-dubai" },
      ]}
      technician={{ name: "Mohammed", years: 14, specialisation: "Mac board-level micro-soldering" }}
      serviceName="Mac Mini and Mac Studio Logic Board Repair"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>Most of what fails on a Mac Mini or Mac Studio logic board is not the M-series chip itself.</strong> It's the power-delivery network around it: MOSFETs that have shorted, capacitors that have leaked, the SMC controller, the Thunderbolt or USB controller, or a damaged trace from a port short. All of that is fixable at component level by someone with the right rework station, microscope and patience.
          </p>
          <p className="text-[16px] text-on-primary-muted leading-relaxed">
            Where we are honest: the M-series SoC itself is a black box. If the chip has died (rare but possible after a power surge or liquid event), no shop in the world is reballing or replacing it economically - Apple's policy is whole-board replacement and the price puts you at half a new Mac. We diagnose under microscope and tell you which side of the line your fault is on, free of charge, before any work begins.
          </p>
        </>
      }
      whatWeFix={[
        "No-power faults caused by failed power-delivery MOSFETs",
        "Capacitor failures and leaks (especially older Intel Mac Mini)",
        "Thunderbolt controller chip failure or damage from port short",
        "USB controller chip failure",
        "SMC controller faults (won't boot, won't sleep, behaves erratically)",
        "Liquid damage tracking and corrosion repair",
      ]}
      steps={[
        { title: "Free microscope diagnostic",   body: "Board out, under microscope. We probe rails, find the short, identify the failed component. Tell you in writing what we found and what the fix costs." },
        { title: "Source the right parts",        body: "Mac board components are often Apple-specific. We have most common MOSFETs, controllers and caps in stock. Anything else lands in 24-48 hours." },
        { title: "Component-level rework",        body: "Hot-air rework station, lead-free reflow profile, Kapton tape masking. We replace the failed component, not the whole board." },
        { title: "Bench test before reassembly",  body: "Board powered on bench (outside the chassis) before final reassembly. Confirms the fix worked and nothing else is borderline." },
        { title: "Burn-in test in chassis",       body: "Reassembled Mac runs a 24-hour stress test before you collect - proves the repair holds under real load." },
      ]}
      warrantyDays={180}
      warrantyBullets={[
        "6-month warranty on component-level repairs.",
        "Free re-attempt if the same failure recurs inside warranty.",
        "Honest 'this needs a board swap' verdict if we find SoC damage.",
      ]}
      faqs={[
        { q: "How do I know if it's a board issue or just a power supply?", a: "We diagnose for free. PSU faults are usually 'no power at all'; board faults often show as 'tries to start, fails partway through'. We'll tell you which yours is in 30 minutes." },
        { q: "Can you really fix a chip on a Mac Studio board?", a: "Component-level chips around the SoC, yes - Thunderbolt controllers, USB controllers, power MOSFETs, SMC. The M-series SoC itself, no - and nobody honest will claim otherwise. We'll diagnose which type of fault yours is for free." },
        { q: "Why is this 3-5 days when other repairs are same-day?", a: "Real diagnosis takes time - finding a shorted MOSFET on a 2,000-component board needs probing rail by rail. Then sourcing the exact replacement part. Then careful rework. Then a 24-hour burn-in test. We don't rush board work." },
        { q: "Can liquid damage be reversed?", a: "Often yes if you don't keep powering it on. We ultrasonic-clean the board, repair any tracks corroded by liquid, replace components killed by the short. Success rate is much higher when the customer brought it in within 48 hours and didn't keep trying to start it." },
        { q: "What's the alternative if the SoC is dead?", a: "A full logic board swap from Apple's parts channel - typically AED 4,000-8,000 depending on Mac model and original chip configuration. At that point we'll usually advise replacing the Mac instead." },
        { q: "Is the 6-month warranty for the same fault or any new fault?", a: "Same fault. If the MOSFET we replaced fails again in 6 months, we re-do it free. If a different component fails 4 months later, that's a separate job." },
      ]}
      reviewNames={["Marianne Chehade El Dfouni", "Ali Hassan", "Shah nawaz"]}
      related={[
        { label: "Mac Not Turning On",      href: "/mac-not-turning-on-dubai",      description: "Where most logic board diagnoses start." },
        { label: "Mac Port Repair",         href: "/mac-port-repair-dubai",         description: "If the damage is contained to a port assembly." },
        { label: "Mac Full Diagnostic",     href: "/mac-full-diagnostic-dubai",     description: "Free check before opening the Mac." },
      ]}
      blogLink={{ label: "Mac Mini and Studio board failures - the common ones we actually see", href: "/blog/macbook-logic-board-repair-cost-dubai" }}
    />
  );
}
