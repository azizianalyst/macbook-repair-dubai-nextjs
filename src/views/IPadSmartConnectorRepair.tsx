"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";

export default function IPadSmartConnectorRepair() {
  return (
    <SubServicePageTemplate
      seoTitle="iPad Smart Connector Repair Dubai - AED 450 | 2-Day Fix"
      seoDescription="iPad Smart Connector repair Dubai. Magic Keyboard / Smart Keyboard not connecting. 3-pin magnetic contact replacement. AED 450, 2 days."
      path="/ipad-smart-connector-repair-dubai"
      eyebrow="iPad Smart Connector"
      h1="iPad Smart Connector Repair Dubai"
      subtitle="Magic Keyboard or Smart Keyboard no longer recognised. The 3-pin magnetic Smart Connector has corroded or lost contact. AED 450, 2 days, 90-day warranty."
      startingPrice={450}
      timeline="2 days"
      whatsappPrefill="Hi, my iPad Smart Connector is broken - model and keyboard:"
      breadcrumb={[
        { name: "Home",              path: "/" },
        { name: "iPad Repair",       path: "/ipad-screen-repair-dubai" },
        { name: "Smart Connector",   path: "/ipad-smart-connector-repair-dubai" },
      ]}
      technician={{ name: "Mohammed", years: 14, specialisation: "iPad chassis and connector repair" }}
      serviceName="iPad Smart Connector Repair"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>The Smart Connector is the three-pin magnetic contact</strong> on the side or back of every iPad Pro and iPad Air since 2015 - it's how the Magic Keyboard, Smart Keyboard and Smart Keyboard Folio talk to your iPad without Bluetooth or charging cables. When it fails, your keyboard goes dead even though it's mechanically attached.
          </p>
          <p className="text-[16px] text-on-primary-muted leading-relaxed">
            Two common causes in Dubai: humidity corrosion on the contact pads (especially in coastal areas like JBR and Palm), and impact damage that bent the chassis enough to break the internal flex. AED 450 covers Smart Connector flex replacement and contact pad cleaning. Free first step: we check whether the keyboard itself is the fault by testing on another iPad.
          </p>
        </>
      }
      whatWeFix={[
        "Magic Keyboard not detected",
        "Smart Keyboard / Folio not waking the iPad",
        "Trackpad on Magic Keyboard unresponsive",
        "Backlit keys not lighting up",
        "Intermittent connection - drops mid-typing",
        "Corroded green-tinged Smart Connector pads",
        "After-impact Smart Connector flex break",
        "Cleaning + reseating (often the only fix needed)",
      ]}
      steps={[
        { title: "Cross-test the keyboard",     body: "Free - we test your Magic Keyboard on a known-good iPad. Rules out the keyboard as the fault before we open the iPad." },
        { title: "Pad inspection + clean",       body: "Microscope inspection of the three Smart Connector pads. About 25% of cases are solved by careful contact pad cleaning - no bill if so." },
        { title: "Smart Connector flex replace", body: "If the internal flex is broken or pads are pitted beyond cleaning, we replace the assembly. Battery disconnect, careful chassis-side work to preserve the antenna." },
        { title: "Verify keyboard + trackpad",   body: "Test your Magic Keyboard or Smart Keyboard, including trackpad gestures and backlight. 90-day warranty card with the iPad." },
      ]}
      warrantyDays={90}
      warrantyBullets={[
        "Covers the new Smart Connector flex and contact pads.",
        "Excludes new humidity exposure or impact damage.",
        "Free re-test if connection drops within 90 days.",
      ]}
      faqs={[
        { q: "How can I tell if it\u2019s the keyboard or the iPad?", a: "Bring both. We test the keyboard on our bench iPad; if it works, your iPad's Smart Connector is the fault. If it doesn't work, the keyboard itself needs Apple service (Magic Keyboard repairs go through Apple - we don't service those)." },
        { q: "Why does humidity damage the Smart Connector?", a: "The exposed metal contact pads slowly corrode in salt-laden coastal air, especially when the iPad sits in its keyboard case for months. The corrosion forms a non-conductive layer; cleaning removes it but if pitting is deep, the pads need replacement." },
        { q: "Will Bluetooth keyboards still work if Smart Connector is broken?", a: "Yes - Bluetooth is independent. If you're stuck waiting for parts, any Bluetooth keyboard works fine in the meantime." },
        { q: "Can you repair the Smart Connector on the keyboard side too?", a: "Honestly no - Apple's Magic Keyboard internal assembly isn't economically repairable at component level. If the keyboard's pogo pins are damaged, Apple replacement (around AED 800) is the only path." },
        { q: "Does this work on Smart Keyboard Folio too?", a: "Yes - same Smart Connector standard, same repair process. We've done it on every iPad model from iPad Pro 9.7\" up to current M4." },
      ]}
      reviewNames={["Anatoliy Tarasenko", "Anastasiia Goncia", "Ana Undricova"]}
      related={[
        { label: "iPad Charging Port Repair",   href: "/ipad-charging-port-repair-dubai", description: "USB-C and accessory bus repairs." },
        { label: "iPad Back Repair",            href: "/ipad-back-glass-repair-dubai",    description: "If chassis impact also damaged the back." },
        { label: "iPad Pencil Compatibility",   href: "/ipad-pencil-compatibility-dubai", description: "Magnetic pairing and BLE issues." },
      ]}
      blogLink={{ label: "Why Magic Keyboard stops working in Dubai humidity (and the fix)", href: "/blog/iphone-water-damage-action-plan" }}
    />
  );
}
