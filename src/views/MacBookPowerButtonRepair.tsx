"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";

export default function MacBookPowerButtonRepair() {
  return (
    <SubServicePageTemplate
      seoTitle="MacBook Power Button & Touch ID Repair Dubai - AED 250"
      seoDescription="MacBook power button & Touch ID repair Dubai. Won't power on, stuck button, fingerprint not reading. From AED 250, same day, 12-month warranty. Call 055 741 3706."
      path="/macbook-power-button-repair-dubai"
      eyebrow="MacBook power button repair"
      h1="MacBook Power Button & Touch ID Repair Dubai"
      subtitle="Power button dead, stuck, or Touch ID won't read your fingerprint? We repair and replace MacBook power/Touch ID assemblies - from AED 250, most done same day."
      startingPrice={250}
      timeline="Same day · 1-2 days"
      whatsappPrefill="Hi, my MacBook power button / Touch ID has a problem - model and symptom:"
      breadcrumb={[
        { name: "Home",                path: "/" },
        { name: "MacBook Repair",      path: "/" },
        { name: "Power Button Repair", path: "/macbook-power-button-repair-dubai" },
      ]}
      technician={{ name: "Usman", years: 14, specialisation: "MacBook power & Touch ID repair" }}
      serviceName="MacBook Power Button Repair"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>MacBook power button repair in Dubai</strong> covers a button that does nothing when pressed, a stuck or mushy button, and Touch ID that no longer reads your fingerprint. On modern MacBooks the power button doubles as the Touch ID sensor and ties into the logic board's secure enclave, so a fault can leave you unable to power on or unlock. We diagnose whether it's the button assembly, the flex cable, or a board-level fault before quoting. AED 250 covers parts, labour and a 12-month warranty.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed">
            We service MacBook Air M1/M2/M3, MacBook Pro 13/14/16 (Intel and M-series), including liquid-damaged power circuits and board-level Touch ID faults.
          </p>
        </>
      }
      whatWeFix={[
        "Power button does nothing when pressed",
        "Button feels stuck, mushy, or rattles",
        "Mac only powers on when plugged in or lid opened",
        "Touch ID no longer reads your fingerprint",
        "\"Touch ID not available\" or enrolment fails",
        "Random shutdowns or won't wake from sleep",
      ]}
      steps={[
        { title: "Free diagnosis", body: "We test power-on behaviour, the button assembly, the flex cable and Touch ID enrolment." },
        { title: "Written quote", body: "Assembly swap or board-level repair - the final price is agreed before any work begins." },
        { title: "Repair", body: "New power/Touch ID assembly fitted, or board-level micro-soldering of the power circuit where needed." },
        { title: "Quality test", body: "We confirm clean power-on, sleep/wake and Touch ID enrolment before pickup." },
      ]}
      warrantyDays={365}
      warrantyBullets={[
        "Covers the power/Touch ID assembly and fitment.",
        "Excludes new liquid contact after delivery.",
        "Free re-fit if the fault returns inside 12 months.",
      ]}
      faqs={[
        { q: "How much does MacBook power button repair cost in Dubai?", a: "Power button / Touch ID assembly replacement starts at AED 250. If the fault is board-level (secure enclave or power circuitry), micro-soldering repair starts at AED 450. You get an exact quote after a free diagnosis." },
        { q: "Can you restore Touch ID, or just the power button?", a: "Both, in most cases. On many MacBooks the power button and Touch ID are one assembly. Note Touch ID is cryptographically paired to the logic board - on some models the fingerprint sensor can only be re-paired with original parts. We'll tell you exactly what's possible for your model first." },
        { q: "My MacBook still turns on with the lid - do I need this repair?", a: "If the button is dead, opening the lid or connecting power may still boot the Mac, but you lose reliable power control, sleep/wake and Touch ID. We recommend fixing it before you get locked out." },
        { q: "How long does it take?", a: "Most assembly replacements are same day. Board-level Touch ID or power-circuit repairs typically take 1-2 days depending on parts." },
        { q: "The button stopped working after a spill - can you help?", a: "Yes. Liquid often corrodes the button contacts or the flex cable. We clean and inspect the affected area free of charge before quoting, and recommend full water-damage treatment if corrosion has spread." },
      ]}
      reviewNames={["David Boulos", "Anatoliy Tarasenko", "vinay menon"]}
      related={[
        { label: "MacBook Logic Board Repair", href: "/macbook-logic-board-repair-dubai", description: "Board-level power & Touch ID faults." },
        { label: "MacBook Keyboard Repair",    href: "/macbook-keyboard-repair-dubai",    description: "Top-case work, same disassembly." },
        { label: "MacBook Water Damage Repair", href: "/macbook-water-damage-repair-dubai", description: "Spill corroded the button? From AED 700." },
      ]}
    />
  );
}
