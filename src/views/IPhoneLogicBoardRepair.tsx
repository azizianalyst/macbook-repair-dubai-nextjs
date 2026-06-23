"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";

export default function IPhoneLogicBoardRepair() {
  return (
    <SubServicePageTemplate
      seoTitle="iPhone Logic Board Repair Dubai - Micro-Soldering | From AED 299"
      seoDescription="iPhone logic board repair Dubai. Component-level micro-soldering - charging IC, PMIC, NAND, audio IC, backlight. Not a board swap. From AED 299. Call 055 741 3706."
      path="/iphone-logic-board-repair-dubai"
      eyebrow="iPhone logic board repair"
      h1="iPhone Logic Board Repair Dubai - Micro-Soldering"
      subtitle="Won't charge, won't power on, no backlight, boot loop, or 'unavailable in iTunes'. We replace the failed IC under microscope - not the whole phone. From AED 299, 2-4 days."
      startingPrice={299}
      timeline="2-4 days"
      whatsappPrefill="Hi, my iPhone has a logic board fault - model and symptom:"
      breadcrumb={[
        { name: "Home",          path: "/" },
        { name: "iPhone Repair", path: "/iphone-repair-dubai" },
        { name: "Logic Board",   path: "/iphone-logic-board-repair-dubai" },
      ]}
      technician={{ name: "Shafiq Ahmed", years: 21, specialisation: "iPhone board-level micro-soldering" }}
      serviceName="iPhone Logic Board Repair Dubai"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>iPhone logic board repair in Dubai</strong> is component-level micro-soldering - we find the one failed chip on the board and replace it, instead of writing off the whole phone. When Apple or a generic shop says &quot;board fault, not worth fixing,&quot; it usually means a single charging IC, PMIC, or backlight component has died - a part that costs a few dirhams and an hour under the microscope. From AED 299, most faults back in 2-4 days.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed">
            We work under a stereo microscope with a JBC micro-soldering station, controlled hot-air profiles, and reballed Apple-spec ICs. Free diagnosis first: if it&apos;s a fault we can&apos;t economically fix (a NAND/Secure-Enclave failure or a cracked SoC), we tell you straight and charge nothing.
          </p>
        </>
      }
      whatWeFix={[
        "Won't charge / 'accessory not supported' - charging IC (Tristar/Tigris) or Tigris U2",
        "Dead, no power, no Apple logo - failed PMIC or main power rail",
        "Boot loop / stuck on Apple logo - NAND or PMIC fault",
        "Image visible under a torch but screen dark - backlight IC, coil or filter",
        "'iPhone unavailable / connect to iTunes' won't restore - NAND or baseband",
        "No service / no IMEI / grayed-out Wi-Fi - baseband or RF section",
        "Microphone or earpiece dead after a clean board - audio IC ('loop disease' on 7/7 Plus)",
        "Liquid-recovered phone with one remaining fault - corrosion under a single chip",
      ]}
      steps={[
        { title: "Free schematic diagnosis", body: "We scope the relevant power rails against the board schematic and isolate the failed component - usually within 24 hours. No charge if we can't fix it." },
        { title: "Open quote", body: "A WhatsApp voice note with the diagnosis, the exact price, and an honest success rate. Nothing happens until you approve." },
        { title: "Microscope rework", body: "Failed IC removed under stereo microscope, pads cleaned with no-clean flux, a fresh reballed chip placed with a controlled hot-air profile." },
        { title: "Function + stress test", body: "Charge cycles, signal, audio, backlight and a full Settings diagnostic before delivery - so an intermittent fault never goes back out the door." },
      ]}
      warrantyDays={15}
      warrantyBullets={[
        "Covers the specific component repaired and the rails around it.",
        "A genuinely new failure elsewhere on the board is a separate fault.",
        "Free re-work if the same fault returns - bring it straight back.",
      ]}
      faqs={[
        { q: "Is board repair really cheaper than replacing the iPhone?", a: "Almost always. A charging IC, backlight, or audio IC fix is AED 299-750. Replacing the phone is thousands. Component-level repair fixes the actual fault for the price of the chip plus the micro-soldering labour - and you keep your own device, Face ID and storage intact." },
        { q: "Can you fix any logic board fault?", a: "No, and we're honest before you pay. NAND/Secure-Enclave failures that need Apple's pairing, and a physically cracked SoC, are not economically repairable - we'll tell you at the free diagnosis and charge nothing. Charging, power, backlight, audio and most RF faults, we fix routinely." },
        { q: "Will I lose my data or my Face ID?", a: "No. We don't wipe the phone and we never swap the board - your original NAND (your data) and your Secure Enclave (your Face ID/Touch ID pairing) stay on your own board. That's the whole advantage of component-level repair over a board swap." },
        { q: "My iPhone got wet and now it's dead - is that a board fault?", a: "Often, yes. Liquid usually shorts one rail and kills one chip while the rest of the board is fine. We ultrasonic-clean the corrosion, isolate the failed component and replace it. See iPhone water damage repair - it's the same bench, same technician." },
        { q: "What's the audio IC / 'loop disease' fault on iPhone 7 and 7 Plus?", a: "A known design weakness: the audio IC's solder joints fatigue and crack, causing a grayed-out speaker button in calls, a stuck 'Searching' on the recorder, or no microphone. We reinforce the joint and, where needed, fit a jumper and a fresh IC - a permanent fix, not a reflow." },
        { q: "Why does it take 2-4 days?", a: "Diagnosis is up to 24 hours, the rework itself is an hour or two including controlled cool-down, then we test under real load. Same-day board repairs that fail next week help no-one - we'd rather get it right." },
        { q: "Do you do reflow, or actual chip replacement?", a: "Replacement. Reflow (re-heating the old chip) buys weeks, not years. We remove the failed IC and fit a fresh reballed one - marginally more work, dramatically more reliable." },
      ]}
      reviewNames={["Saeed Alam", "Janna Nurahmetova", "Knight A. Shakir"]}
      related={[
        { label: "iPhone Repair Hub",          href: "/iphone-repair-dubai",                description: "Every iPhone service in one place." },
        { label: "iPhone Water Damage Repair", href: "/iphone-water-damage-repair-dubai",    description: "Sister fault - liquid kills boards. From AED 179." },
        { label: "iPhone Data Recovery",        href: "/iphone-data-recovery-dubai",          description: "Pull data off a dead-board iPhone. From AED 279." },
        { label: "Can iPhone motherboard be repaired?", href: "/can-iphone-motherboard-be-repaired", description: "A full guide to iPhone logic board repair options." },
      ]}
    />
  );
}
