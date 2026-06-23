"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";

export default function IPhoneNfcRepair() {
  return (
    <SubServicePageTemplate
      seoTitle="iPhone NFC Repair Dubai - Apple Pay Fixes | AED 350"
      seoDescription="iPhone NFC and Apple Pay repair Dubai. Top-of-phone antenna replacement, contactless restored. AED 350, 1-2 days. Call 055 741 3706."
      path="/iphone-nfc-repair-dubai"
      eyebrow="iPhone NFC repair"
      h1="iPhone NFC Repair Dubai - Apple Pay Fixes"
      subtitle="Apple Pay won't read at the terminal, contactless transit cards fail, or NFC tags don't trigger Shortcuts. Top-of-phone antenna repair. AED 350, 1-2 days."
      startingPrice={350}
      timeline="1-2 days"
      whatsappPrefill="Hi, my iPhone NFC / Apple Pay isn't working - model:"
      breadcrumb={[
        { name: "Home",            path: "/" },
        { name: "iPhone Repair",   path: "/iphone-repair-dubai" },
        { name: "NFC Repair",      path: "/iphone-nfc-repair-dubai" },
      ]}
      technician={{ name: "Shafiq", years: 15, specialisation: "iPhone RF and antenna repair" }}
      serviceName="iPhone NFC Repair Dubai"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>The NFC antenna in every iPhone since the 6 sits at the very top of the back</strong>, just under the rear glass. When it fails, Apple Pay won't read at terminals, Nol cards in transit won't tap, and any NFC-triggered Shortcuts go silent. On iPhone X and later the antenna shares space with the rear camera assembly, so we work carefully around the camera flex.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed">
            Common cause in Dubai: a drop on the top edge cracks the antenna trace; the back glass replacement at a cheap shop reused damaged adhesive; or water damage corroded the NFC controller. AED 350 covers antenna replacement and, if needed, NFC controller reflow on the logic board.
          </p>
        </>
      }
      whatWeFix={[
        "Apple Pay declined at every terminal",
        "Apple Pay works inside apps but not at terminals (NFC fault)",
        "Nol card not tapping at Dubai Metro",
        "Salik tag scanning fails",
        "Hotel room key (Hilton Honors etc.) not reading",
        "NFC tag Shortcuts no longer trigger",
        "After-back-glass-repair NFC failure",
        "After-drop antenna trace damage",
      ]}
      steps={[
        { title: "Apple Pay terminal test", body: "Free - we test against our bench POS. Confirms whether it's the antenna, controller, or your card." },
        { title: "Open from the screen side", body: "We don't crack the back glass - instead we lift the screen and access the antenna from inside (less risk to the camera bump)." },
        { title: "Replace antenna or reflow controller", body: "If the antenna is broken, we install OEM-grade replacement. If the NFC controller IC has failed, we reflow at controlled temperature." },
        { title: "Test against multiple terminals", body: "Bench POS, contactless transit reader, and an NFC tag. Warranty up to 12 months card with the phone." },
      ]}
      warrantyDays={365}
      warrantyBullets={[
        "Covers the new antenna and controller rework.",
        "Excludes carrier or bank-side Apple Pay issues.",
        "Free re-test within 12 months if NFC stops responding.",
      ]}
      faqs={[
        { q: "How do I know it's NFC and not the bank?", a: "If Apple Pay works inside apps (e.g. paying for Apple Music) but not at physical terminals, NFC hardware is the issue. If both fail, your card may be locked or your Apple Pay setup needs refresh." },
        { q: "Will Nol cards work after the repair?", a: "Yes - Nol uses the same NFC standard as Apple Pay (ISO 14443). Restoring NFC restores both. We test against an actual Nol reader at handover." },
        { q: "Is iPhone NFC the same as Android?", a: "Same standard, but Apple restricts third-party access to NFC. Only Apple Pay, Wallet passes, and accessibility tags can use it. So 'my Bolt scooter NFC tag' won't work even on a perfect iPhone - that's not a hardware issue." },
        { q: "Could a back-glass repair have damaged NFC?", a: "Frequently. Back glass replacement at unskilled shops cracks the antenna trace or breaks the antenna's spring contact to the logic board. We diagnose and repair - and recommend you don't go back to the shop that did the back glass." },
        { q: "Why 1-2 days?", a: "Day 1: open, diagnose, source the right antenna for your model. Day 2: install, test, bench-verify against multiple terminals. Rushed NFC work tends to fail again within weeks." },
      ]}
      reviewNames={["Tim Quick", "B Parker", "Wellington Academy"]}
      related={[
        { label: "iPhone WiFi & Bluetooth Repair", href: "/iphone-wifi-bluetooth-repair-dubai", description: "Wireless faults often share root cause." },
        { label: "iPhone Back Glass Repair",       href: "/iphone-back-glass-repair-dubai",     description: "If a previous back-glass job killed NFC." },
        { label: "iPhone Camera Repair",           href: "/iphone-camera-repair-dubai",         description: "Same area of the phone - combined visit." },
      ]}
      blogLink={{ label: "Apple Pay not working in Dubai? Diagnose NFC vs bank vs phone", href: "/blog/iphone-not-charging-7-fixes" }}
    />
  );
}
