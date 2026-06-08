"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";

export default function IPhoneSimTrayRepair() {
  return (
    <SubServicePageTemplate
      seoTitle="iPhone SIM Tray Repair Dubai - Physical & eSIM | From AED 150"
      seoDescription="iPhone SIM tray repair Dubai. Lost tray AED 150, broken reader AED 400. Dual-SIM and eSIM advice for UAE. Same day. Call 055 741 3706."
      path="/iphone-sim-tray-repair-dubai"
      eyebrow="iPhone SIM tray repair"
      h1="iPhone SIM Tray Repair Dubai - SIM & eSIM"
      subtitle="Lost the tray, bent it on the way out, or the SIM reader inside has died. From AED 150 for a tray, AED 400 for a reader replacement. Same day on most models."
      startingPrice={150}
      timeline="Same day"
      whatsappPrefill="Hi, my iPhone SIM tray / reader needs repair - model:"
      breadcrumb={[
        { name: "Home",              path: "/" },
        { name: "iPhone Repair",     path: "/iphone-repair-dubai" },
        { name: "SIM Tray Repair",   path: "/iphone-sim-tray-repair-dubai" },
      ]}
      technician={{ name: "Shafeez", years: 12, specialisation: "iPhone connectivity and antennas" }}
      serviceName="iPhone SIM Tray Repair"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>Two different problems</strong>, one page: a lost or bent SIM tray (cheap, AED 150) versus a dead SIM reader inside the phone (proper repair, AED 400). We'll tell you which you have within 5 minutes of looking at the phone, free. The reader fault is more common after a careless tray insertion that bent a pin.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed">
            <strong>UAE eSIM note</strong>: US iPhone 14 and later are eSIM-only - no physical tray at all. Globally-sold iPhones (including UAE retail) keep the tray through iPhone 16. iPhone 17 begins the global eSIM transition. If you're moving from a US-bought iPhone to a UAE eSIM (Etisalat or du), we can also help you provision and transfer - included free with any tray or reader repair.
          </p>
        </>
      }
      whatWeFix={[
        "Lost SIM tray - replacement only AED 150",
        "Bent or stuck SIM tray",
        '"No SIM" error after a careful insertion',
        "SIM reader pins damaged",
        "Dual-SIM tray (UAE/global iPhone) issues",
        "eSIM transfer between devices",
        "eSIM activation help for Etisalat / du",
        "After-water SIM reader corrosion",
      ]}
      steps={[
        { title: "Tray vs reader diagnosis",   body: "We slide a known-good test tray with a working SIM. If 'No SIM' appears, it's the reader. If service comes up, you just needed a tray." },
        { title: "Tray-only fix",               body: "AED 150, walk-in, 5 minutes. Includes free SIM eject tool." },
        { title: "Reader replacement",          body: "AED 400. Open the phone from the bottom, swap the SIM reader flex, reseat dual-SIM rails on UAE-spec models." },
        { title: "eSIM provisioning if needed", body: "Free help converting from physical SIM to eSIM, including QR setup with Etisalat or du if you bring activation details." },
      ]}
      warrantyDays={90}
      warrantyBullets={[
        "Covers the new tray or reader and seal.",
        "eSIM provisioning has no warranty (we don't control carrier networks).",
        "Free re-fit if reader fails within 90 days.",
      ]}
      faqs={[
        { q: "I bought my iPhone in the US - can I add a UAE SIM?", a: "Only via eSIM. US iPhone 14+ have no physical tray. Both Etisalat and du support iPhone eSIM. We'll set it up free if you're already in for a different repair, or AED 50 for eSIM-only assistance walk-in." },
        { q: "Can a UAE-bought iPhone use eSIM?", a: "Yes - every iPhone XS and later supports eSIM in the UAE. You can run dual SIM (one physical + one eSIM, or two eSIMs on iPhone 13+)." },
        { q: "Why did my SIM tray die?", a: "Most often: someone (often a previous shop) used a thick wire instead of an eject tool, bent a pin, then forced the tray back. Pin damage cascades and the reader fails. Use the original Apple SIM tool - it's a precision shape." },
        { q: "Will my number be lost?", a: "No - a SIM tray or reader repair doesn't affect your number. The number lives on the SIM card or on the carrier's eSIM record. The phone is just a host." },
        { q: "What if I'm switching between phones?", a: "Bring both. We can transfer a physical SIM in seconds, or move an eSIM via Apple's Quick Transfer (both phones on iOS 16+). No charge if you're already in for a repair." },
      ]}
      reviewNames={["Tim Quick", "B Parker", "Wellington Academy"]}
      related={[
        { label: "iPhone Network Unlock",       href: "/iphone-network-unlock-dubai",       description: "Carrier unlock for imported iPhones." },
        { label: "iPhone WiFi & Bluetooth Repair",href: "/iphone-wifi-bluetooth-repair-dubai", description: "Connectivity diagnostics together." },
        { label: "iPhone Charging Port Repair", href: "/iphone-charging-port-repair-dubai", description: "Bottom-of-phone repairs in one visit." },
      ]}
      blogLink={{ label: "Physical SIM vs eSIM in the UAE: complete iPhone guide", href: "/blog/lightning-vs-usb-c-explained-2026" }}
    />
  );
}
