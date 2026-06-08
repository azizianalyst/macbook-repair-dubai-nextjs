"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";

export default function MacBookLogicBoardRepair() {
  return (
    <SubServicePageTemplate
      seoTitle="MacBook Logic Board Repair Dubai - Component-Level | From AED 800"
      seoDescription="MacBook logic board repair Dubai. Component-level rework - IC swap, PMIC, CPU reflow, charging circuit. Not board-swap. From AED 800. Call 055 741 3706."
      path="/macbook-logic-board-repair-dubai"
      eyebrow="MacBook logic board repair"
      h1="MacBook Logic Board Repair Dubai - Component-Level"
      subtitle="Failed PMIC, dead charging circuit, blown MOSFET, CPU reflow. We replace the failed chip - not the whole board. From AED 800, 3-5 days."
      startingPrice={800}
      timeline="3-5 days"
      whatsappPrefill="Hi, my MacBook logic board has a fault - symptom and model:"
      breadcrumb={[
        { name: "Home",           path: "/" },
        { name: "MacBook Repair", path: "/" },
        { name: "Logic Board",    path: "/macbook-logic-board-repair-dubai" },
      ]}
      technician={{ name: "Mohammed", years: 14, specialisation: "Apple board-level micro-soldering" }}
      serviceName="MacBook Logic Board Repair"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>MacBook logic board repair in Dubai</strong> means component-level rework - replacing the actual failed chip on the board, not swapping the whole board. The difference matters: a typical Apple board swap is AED 4,000-6,000. A component-level fix on the failed PMIC, MOSFET, charging IC, or USB-C controller is AED 800-1,500. Same outcome, fraction of the cost, original board kept (which preserves T2 SSD pairing on Intel MacBooks).
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed">
            We work under stereo microscope with a JBC hot-air station, controlled thermal profiles, and reballed Apple-spec replacement chips. The 90-day warranty is paperwork - done correctly, the repair lasts as long as the original.
          </p>
        </>
      }
      whatWeFix={[
        "MacBook won't power on - dead PMIC or input rail",
        "Charges to 1% then dies - bad charging IC (BQ chip)",
        "Black screen but fans run - GPU or display rail fault",
        "USB-C port dead but charging works - TB controller",
        "Random shutdowns under load - bad MOSFET or VRM",
        "Liquid spill recovered to a partial fault - corrosion under a chip",
        "T2 chip lockup on 2018+ Intel MacBooks",
        "Backlight dead but image visible with torch - backlight FET",
      ]}
      steps={[
        { title: "Schematic-driven diagnosis", body: "We use the actual board schematic, scope the relevant rails, identify the failed component within 24 hours." },
        { title: "Open quote", body: "Voice note with the diagnosis, the price, and the realistic success rate. You sign off before any work." },
        { title: "Microscope rework", body: "Failed chip removed under stereo microscope, pads cleaned with no-clean flux, replacement chip reballed and placed with controlled hot-air profile." },
        { title: "48 hr burn-in", body: "Stress test under sustained load - CPU, GPU, ports, charging cycles. Catches intermittents before delivery." },
      ]}
      warrantyDays={90}
      warrantyBullets={[
        "Covers the specific component repaired and adjacent rails.",
        "Excludes new failures elsewhere on the board (separate fault).",
        "Free re-work if the same fault returns within 90 days.",
      ]}
      faqs={[
        { q: "What's the difference between component-level repair and board swap?", a: "Component-level: we identify the failed chip (a USD 5-30 part), desolder it under microscope, install a new one. Board swap: throw out the entire AED 4,000+ board and fit a new one. Same outcome on the symptom, very different cost - and only component-level keeps your original board (and your T2-paired SSD on Intel models)." },
        { q: "Can you fix any logic board fault?", a: "No, and we're honest about that. SoC failure on M-series MacBooks (M1/M2/M3/M4/M5) means board swap - the SoC integrates CPU, GPU and RAM on a single die. We diagnose first; if it's SoC, we tell you and don't charge for the diagnostic." },
        { q: "Why does this take 3-5 days?", a: "Diagnosis is 24 hours, the actual rework is 4-6 hours including controlled cool-down, then 48 hours of burn-in to confirm stability under load. Sending it back the same day and having it fail next week serves no-one." },
        { q: "Will my data survive?", a: "Yes - we don't touch the SSD. On Intel T2-equipped MacBooks (2018+) we keep your original board paired to your original SSD, which preserves the encryption chain. Component-level repair is the only way to do this." },
        { q: "What chips do you commonly replace?", a: "Apple's PMIC (NXP / TI), the BQ24172/24780 charging ICs, ISL95828 buck converters, the U7000-series USB-C controllers, ALC display backlight FETs, and SMC chips. Stock kept in the workshop for the most common ones." },
        { q: "Is reflow ever a viable fix?", a: "Almost never. Reflow (re-heating an existing chip to re-bond) buys weeks, not years. We replace the chip with a fresh reballed unit - costs marginally more, lasts 100x longer." },
        { q: "Have you fixed liquid-damaged boards before?", a: "Hundreds. Liquid often kills one specific chip (because it shorted a particular rail) and the rest of the board is fine. We isolate, replace, ultrasonic clean. AED 800-1,500 typical." },
      ]}
      reviewNames={["Janna Nurahmetova", "Marina Larioshina", "joseph manalili"]}
      related={[
        { label: "MacBook Repair Hub",          href: "/",                  description: "All MacBook services in one place." },
        { label: "MacBook Water Damage Repair", href: "/macbook-water-damage-repair-dubai",     description: "Sister fault - liquid kills boards. From AED 450." },
        { label: "MacBook GPU Repair",          href: "/macbook-gpu-repair-dubai",              description: "Discrete GPU faults on 2016-2019 Intel. AED 800." },
      ]}
      blogLink={{ label: "Component-level vs board-swap repair: a MacBook owner's guide", href: "/blog/macbook-logic-board-repair-cost-dubai" }}
    />
  );
}
