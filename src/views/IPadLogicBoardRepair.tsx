"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";

export default function IPadLogicBoardRepair() {
  return (
    <SubServicePageTemplate
      seoTitle="iPad Logic Board Repair Dubai - Micro-Soldering | From AED 449"
      seoDescription="iPad logic board repair Dubai. Component-level micro-soldering - charging IC, PMIC, NAND, backlight. Not a board swap. Pro, Air & mini. From AED 449. Call 055 741 3706."
      path="/ipad-logic-board-repair-dubai"
      eyebrow="iPad logic board repair"
      h1="iPad Logic Board Repair Dubai - Micro-Soldering"
      subtitle="Won't charge, won't power on, no backlight, or stuck in a boot loop. We replace the failed IC under microscope - not the whole iPad. From AED 449, 3-5 days."
      startingPrice={449}
      timeline="3-5 days"
      whatsappPrefill="Hi, my iPad has a logic board fault - model and symptom:"
      breadcrumb={[
        { name: "Home",        path: "/" },
        { name: "iPad Repair", path: "/ipad-repair-dubai" },
        { name: "Logic Board", path: "/ipad-logic-board-repair-dubai" },
      ]}
      technician={{ name: "Shafiq Ahmed", years: 21, specialisation: "iPad board-level micro-soldering" }}
      serviceName="iPad Logic Board Repair Dubai"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>iPad logic board repair in Dubai</strong> is component-level micro-soldering - we identify the single failed chip and replace it instead of writing off the tablet. iPads are routinely declared &quot;not worth repairing&quot; when in fact one charging IC, PMIC, or backlight component has failed. From AED 449 (iPad boards are denser and the glass-and-LCD teardown is more involved than an iPhone), most faults back in 3-5 days.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed">
            Work is done under a stereo microscope with a JBC micro-soldering station and reballed Apple-spec ICs. Free diagnosis first: if it&apos;s a NAND/Secure-Enclave failure or a cracked SoC that can&apos;t be economically fixed, we say so up front and charge nothing.
          </p>
        </>
      }
      whatWeFix={[
        "Won't charge / charges intermittently - charging IC or USB-C / Lightning Tristar",
        "Dead, no power, no Apple logo - failed PMIC or main power rail",
        "Stuck on Apple logo / boot loop - NAND or PMIC fault",
        "Backlight dead - image faintly visible under a torch - backlight IC or coil",
        "'iPad unavailable / connect to iTunes' won't restore - NAND or baseband",
        "No Wi-Fi / no cellular on a clean board - RF or baseband section",
        "Liquid-recovered iPad with one remaining fault - corrosion under a single chip",
        "Black screen after a battery or screen swap - tripped rail or shorted line",
      ]}
      steps={[
        { title: "Free schematic diagnosis", body: "We scope the power rails against the board schematic and isolate the failed component - usually within 24-48 hours. No charge if it can't be economically fixed." },
        { title: "Open quote", body: "A WhatsApp voice note with the diagnosis, the exact price, and an honest success rate. Nothing happens until you approve." },
        { title: "Microscope rework", body: "Failed IC removed under stereo microscope, pads cleaned, a fresh reballed chip placed with a controlled hot-air profile - then the chassis carefully resealed." },
        { title: "Burn-in + test", body: "Charge cycles, display, Wi-Fi, audio and a full diagnostic under sustained load before delivery, so an intermittent fault is caught on the bench, not at home." },
      ]}
      warrantyDays={15}
      warrantyBullets={[
        "Covers the specific component repaired and the rails around it.",
        "A new failure elsewhere on the board is a separate fault.",
        "Free re-work if the same fault returns - bring it straight back.",
      ]}
      faqs={[
        { q: "Is board repair cheaper than replacing the iPad?", a: "Yes, by a wide margin. A charging IC or backlight fix is AED 449-1,200; a new iPad Pro is thousands. Component-level repair fixes the actual fault for the cost of the chip plus micro-soldering labour - and you keep your own device, your data, and your Apple Pencil pairing." },
        { q: "Can every iPad board fault be fixed?", a: "No. NAND/Secure-Enclave failures that need Apple's pairing and a physically cracked SoC are not economically repairable - we tell you at the free diagnosis and charge nothing. Charging, power, backlight and most RF faults, we fix routinely on iPad mini, Air and Pro." },
        { q: "Will I lose my data?", a: "No - we never swap the board and never wipe the device. Your original NAND (your data) and Secure Enclave stay on your own board. If the board genuinely can't boot, ask about iPad data recovery instead." },
        { q: "Why is iPad board repair more than iPhone?", a: "The teardown. An iPad's screen is bonded glass-on-LCD over a large battery, so getting to the board safely - and resealing it without cracking the display - takes considerably more time than an iPhone. The micro-soldering itself is similar; the labour around it is not." },
        { q: "My iPad won't charge - is it always the board?", a: "Not always. We first rule out the cheaper causes: a worn charge port, a bad cable, or a tired battery. Only if the port and battery test good do we move to the charging IC on the board. You never pay for board work that a port swap would have fixed." },
        { q: "How long does it take?", a: "Diagnosis up to 48 hours, the rework an hour or two, then burn-in testing. iPad reseal needs controlled cure time for the adhesive, which is why we quote 3-5 days rather than same-day." },
      ]}
      reviewNames={["Janna Nurahmetova", "Marina Larioshina", "Yuki Koga"]}
      related={[
        { label: "iPad Repair Hub",          href: "/ipad-repair-dubai",                 description: "Every iPad service in one place." },
        { label: "iPad Water Damage Repair", href: "/ipad-water-damage-repair-dubai",     description: "Sister fault - liquid kills boards." },
        { label: "iPad Data Recovery",       href: "/ipad-data-recovery-dubai",           description: "Recover data from a dead-board iPad. From AED 349." },
      ]}
    />
  );
}
