"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";

export default function MacBookLogicBoardRepair() {
  return (
    <SubServicePageTemplate
      seoTitle="MacBook Logic Board Repair Dubai - Component-Level, Not Board-Swap"
      seoDescription="MacBook logic board repair Dubai. Component-level rework - IC swap, PMIC, CPU reflow, charging circuit. Not board-swap. Free diagnosis. Call 055 741 3706."
      path="/macbook-logic-board-repair-dubai"
      eyebrow="MacBook logic board repair"
      h1="MacBook Logic Board Repair Dubai - Component-Level"
      subtitle="Failed PMIC, dead charging circuit, blown MOSFET, CPU reflow. We replace the failed chip - not the whole board. 3-5 days."
      startingPrice={299}
      timeline="3-5 days"
      whatsappPrefill="Hi, my MacBook logic board has a fault - symptom and model:"
      breadcrumb={[
        { name: "Home",           path: "/" },
        { name: "MacBook Repair", path: "/" },
        { name: "Logic Board",    path: "/macbook-logic-board-repair-dubai" },
      ]}
      technician={{ name: "Mohammed", years: 14, specialisation: "Apple board-level micro-soldering" }}
      serviceName="MacBook Logic Board Repair Dubai"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>MacBook logic board repair in Dubai</strong> means component-level rework - replacing the actual failed chip on the board, not swapping the whole board. The difference matters: a typical board swap at the Apple Store is AED 4,000-6,000. A component-level fix on the failed PMIC, MOSFET, charging IC, or USB-C controller costs a fraction of that. Same outcome, original board kept (which preserves T2 SSD pairing on Intel MacBooks).
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed">
            We work under stereo microscope with a JBC hot-air station, controlled thermal profiles, and reballed Apple-spec replacement chips. Board-level repairs carry a 15-day written warranty as standard - shorter than our 12-month cover on screens and batteries, because a board that has already failed once is harder to guarantee - and it can be extended to 6 months for a small flat fee. Done correctly, the repair lasts as long as the original.
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
      warrantyDays={15}
      warrantyBullets={[
        "Covers the specific component repaired and adjacent rails.",
        "Excludes new failures elsewhere on the board (separate fault).",
        "Free re-work if the same repaired fault returns inside the warranty period.",
        "Extendable to 6 months for a small flat fee - agreed on the quote, before work starts.",
      ]}
      faqs={[
        { q: "What's the difference between component-level repair and board swap?", a: "Component-level: we identify the failed chip (a USD 5-30 part), desolder it under microscope, install a new one. Board swap: throw out the entire board — Apple charges AED 4,000+ for that — and fit a new one. Same outcome on the symptom, very different cost - and only component-level keeps your original board (and your T2-paired SSD on Intel models)." },
        { q: "Can you fix any logic board fault?", a: "No, and we're honest about that. SoC failure on M-series MacBooks (M1/M2/M3/M4/M5) means board swap - the SoC integrates CPU, GPU and RAM on a single die. We diagnose first; if it's SoC, we tell you and don't charge for the diagnostic." },
        { q: "Why does this take 3-5 days?", a: "Diagnosis is 24 hours, the actual rework is 4-6 hours including controlled cool-down, then 48 hours of burn-in to confirm stability under load. Sending it back the same day and having it fail next week serves no-one." },
        { q: "Will my data survive?", a: "Yes - we don't touch the SSD. On Intel T2-equipped MacBooks (2018+) we keep your original board paired to your original SSD, which preserves the encryption chain. Component-level repair is the only way to do this." },
        { q: "What chips do you commonly replace?", a: "Apple's PMIC (NXP / TI), the BQ24172/24780 charging ICs, ISL95828 buck converters, the U7000-series USB-C controllers, ALC display backlight FETs, and SMC chips. Stock kept in the workshop for the most common ones." },
        { q: "Is reflow ever a viable fix?", a: "Almost never. Reflow (re-heating an existing chip to re-bond) buys weeks, not years. We replace the chip with a fresh reballed unit - costs marginally more, lasts 100x longer." },
        { q: "Have you fixed liquid-damaged boards before?", a: "Hundreds. Liquid often kills one specific chip (because it shorted a particular rail) and the rest of the board is fine. We isolate, replace, ultrasonic clean." },
        { q: "What warranty comes with a logic board repair?", a: "15 days as standard, and it can be extended to 6 months for a small flat fee agreed on the quote before work starts. It is shorter than the 12 months we give on screens and batteries, and deliberately so: a board that has already failed once, often after corrosion, is harder to guarantee than a new panel. The exact period is printed on your invoice." },
        { q: "When would you tell me NOT to repair the board?", a: "When the economics do not work or the odds are poor. SoC failure on M-series machines means a board swap, not a repair. Boards with widespread corrosion across multiple rails can be repaired and then fail somewhere else weeks later - we will say so and quote it as best-effort, or decline. And on an older Intel machine, the repair sometimes costs more than the Mac is worth. You get that assessment free." },
        { q: "What are the realistic odds of success?", a: "It depends entirely on the fault. A single failed PMIC or charging IC on an otherwise clean board is routine work. A board recovered from a serious liquid spill is genuinely uncertain, and we will tell you it is uncertain before you commit rather than after. If we are not confident, we say so in the quote and you can walk away having paid nothing." },
        { q: "What happens to my data if the board repair fails?", a: "Nothing - we do not touch the SSD. If the board cannot be revived and the data matters, we move to data recovery instead, reading the storage at component level. On Apple silicon and T2 Macs the SSD is soldered and paired to the board, which is exactly why keeping the original board matters." },
        { q: "Do I pay anything if you cannot fix it?", a: "No. Diagnosis is free and there is no fee if we cannot fix the machine. You only pay for a repair you approved in writing and that we completed." },
        { q: "Is a cheaper board swap from another shop a better deal?", a: "Sometimes, and we will say so when it is. But check what you are buying: a replacement board on an Intel T2 machine is not paired to your SSD, so the data on it becomes unreadable. On M-series the same applies. A swapped board is also usually a used board of unknown history. Component-level repair keeps the board you own." },
      ]}
      reviewNames={["Janna Nurahmetova", "Marina Larioshina", "joseph manalili"]}
      related={[
        { label: "MacBook Repair Hub",          href: "/",                  description: "All MacBook services in one place." },
        { label: "MacBook Water Damage Repair", href: "/macbook-water-damage-repair-dubai",     description: "Sister fault - liquid kills boards." },
        { label: "MacBook GPU Repair",          href: "/macbook-gpu-repair-dubai",              description: "Discrete GPU faults on 2016-2019 Intel." },
      ]}
      blogLink={{ label: "Component-level vs board-swap repair: a MacBook owner's guide", href: "/blog/macbook-logic-board-repair-cost-dubai" }}
    />
  );
}
