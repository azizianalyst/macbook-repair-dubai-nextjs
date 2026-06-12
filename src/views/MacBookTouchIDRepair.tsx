"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";

export default function MacBookTouchIDRepair() {
  return (
    <SubServicePageTemplate
      seoTitle="MacBook Touch ID Repair Dubai - AED 350 | Fingerprint & Power Button"
      seoDescription="MacBook Touch ID repair Dubai. Fingerprint won't enrol, sensor not responding, power button dead. Honest diagnosis on T2 / Apple Silicon pairing. From AED 350, 1-2 days."
      path="/macbook-touch-id-repair-dubai"
      eyebrow="MacBook Touch ID repair"
      h1="MacBook Touch ID Repair Dubai"
      subtitle="Fingerprint won't enrol, sensor ignores your touch, or the power button's gone dead. We diagnose and repair the Touch ID and power button - and we're honest about what board pairing does and doesn't allow. From AED 350."
      startingPrice={350}
      timeline="1-2 days"
      whatsappPrefill="Hi, my MacBook Touch ID / power button has a problem - model and symptom:"
      breadcrumb={[
        { name: "Home",            path: "/" },
        { name: "MacBook Repair",  path: "/" },
        { name: "Touch ID Repair", path: "/macbook-touch-id-repair-dubai" },
      ]}
      technician={{ name: "Shafiq", years: 21, specialisation: "MacBook board-level & secure-element repair" }}
      serviceName="MacBook Touch ID Repair"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            On every Touch ID MacBook the fingerprint sensor doubles as the power button, sitting at the top-right of the keyboard. When it fails you get one of a few things: fingerprints won't enrol, the sensor ignores your touch, "Touch ID has been disabled" keeps appearing, or the button won't power the machine on at all. We diagnose whether it's the sensor, the flex, or the power circuit on the board, and repair it from <strong>AED 350</strong> with a 12-month warranty.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed">
            Here's the honest part, and you won't get it from every shop in Dubai. On T2 and Apple Silicon MacBooks the Touch ID sensor is cryptographically paired to your logic board at the factory. We can always restore the <strong>power-button function</strong> so the machine turns on normally. Restoring fingerprint enrolment with a brand-new sensor needs Apple's pairing tool, which is Apple-only - so if your original sensor can't be reused, we'll tell you upfront that fingerprint may not come back, rather than take your money and hand you a half-working button. We've run board-level work at Concord Tower, Dubai Media City since 2004 and we'd rather be straight with you.
          </p>
        </>
      }
      whatWeFix={[
        "Fingerprints won't enrol - 'unable to complete Touch ID setup'",
        "Sensor doesn't respond to your finger",
        "'Touch ID has been disabled' message keeps returning",
        "Power button dead - MacBook won't turn on from the button",
        "Cracked or lifted Touch ID sensor glass",
        "Touch ID stopped after a liquid spill",
        "Button works to power on but fingerprint never reads",
        "Intermittent - reads sometimes, fails often",
      ]}
      steps={[
        { title: "Diagnose sensor vs board", body: "We confirm whether it's the Touch ID sensor, its flex cable, or the power circuit on the logic board. Free, before any quote." },
        { title: "Honest pairing check", body: "We tell you upfront whether your original sensor can be kept (fingerprint stays) or whether a new one would lose enrolment on a T2 / Apple Silicon board. No surprises." },
        { title: "Repair the fault", body: "Reseat or replace the sensor and flex, or repair the power circuit at board level. Power-button function restored either way." },
        { title: "Test power and enrolment", body: "We verify the MacBook powers on cleanly and, where the original sensor is reused, that fingerprint enrolment works before it leaves the bench." },
      ]}
      warrantyDays={365}
      warrantyBullets={[
        "Covers the power-button function and the components we fit.",
        "Fingerprint enrolment covered only where the original paired sensor is reusable.",
        "Excludes new liquid contact after delivery.",
      ]}
      faqs={[
        { q: "Can you make Touch ID work again on my MacBook?", a: "If your original sensor is intact, usually yes - we reseat or repair the flex and enrolment comes back. If the sensor itself is dead on a T2 or Apple Silicon MacBook, a new one has to be paired with Apple's tool, which only Apple has. We'll always restore the power button, and we tell you before we start whether fingerprint can realistically be saved." },
        { q: "Why won't a new Touch ID sensor just work like any other part?", a: "Apple pairs the sensor to the Secure Enclave on your logic board for security - it stops a stolen MacBook's fingerprint reader being swapped to bypass the lock. That pairing is done with an Apple-only tool. It's the same reason a third party can't freely swap Touch ID on a modern iPhone. We're upfront about this limit rather than overpromise." },
        { q: "How much does Touch ID and power button repair cost in Dubai?", a: "From AED 350 when the fix is the sensor flex or a reseat, parts and labour included and VAT-inclusive. Board-level power-circuit repairs are quoted after diagnosis. You get the written price on WhatsApp first, and the diagnosis is free even if you decide not to go ahead." },
        { q: "My MacBook won't turn on from the power button - is that Touch ID?", a: "Often, yes - the button and Touch ID are the same component. But a no-power fault can also be the board or battery, so we diagnose properly before pointing at the button. If it's the power circuit, that's board-level work we do in-house. WhatsApp the model and what happens when you press it." },
        { q: "Will I lose my data or settings?", a: "No. A Touch ID or power-button repair doesn't touch your SSD - files, apps and macOS stay as they are. You may need to re-enrol fingerprints after the repair, and as always we recommend a backup before any hardware work; we can set one up if you need." },
        { q: "How long does it take and do you collect?", a: "Most Touch ID repairs are done in 1-2 days. Board-level power-circuit work can run 2-4 days. Free pickup and delivery across Dubai mainland - send the serial and we'll arrange same-day collection from Marina, Business Bay, JLT or wherever suits." },
      ]}
      reviewNames={["Aditya Kaushik", "Hassan Rana", "Phill Balcon"]}
      related={[
        { label: "MacBook Power Button Repair", href: "/macbook-power-button-repair-dubai", description: "No power from the button? Board-level fix." },
        { label: "MacBook Keyboard Repair",     href: "/macbook-keyboard-repair-dubai",     description: "Full deck replacement from AED 350." },
        { label: "MacBook Logic Board Repair",  href: "/macbook-logic-board-repair-dubai",  description: "Secure Enclave and power-circuit faults." },
      ]}
    />
  );
}
