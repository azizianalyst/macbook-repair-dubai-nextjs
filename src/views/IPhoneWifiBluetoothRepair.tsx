"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";

export default function IPhoneWifiBluetoothRepair() {
  return (
    <SubServicePageTemplate
      seoTitle="iPhone WiFi & Bluetooth Repair Dubai - AED 400 | 2-Day Fix"
      seoDescription="iPhone WiFi grayed-out, Bluetooth not connecting. Combined wireless chip board work. AED 400, 2 days, warranty of up to 12 months. Call 055 741 3706."
      path="/iphone-wifi-bluetooth-repair-dubai"
      eyebrow="iPhone wireless repair"
      h1="iPhone WiFi & Bluetooth Repair Dubai"
      subtitle="WiFi greyed out in Settings, Bluetooth pairing fails, or wireless drops every few minutes. The wireless chip needs board-level work. AED 400, 2 days."
      startingPrice={400}
      timeline="2 days"
      whatsappPrefill="Hi, my iPhone WiFi or Bluetooth is broken - model and symptom:"
      breadcrumb={[
        { name: "Home",                path: "/" },
        { name: "iPhone Repair",       path: "/iphone-repair-dubai" },
        { name: "WiFi & Bluetooth",    path: "/iphone-wifi-bluetooth-repair-dubai" },
      ]}
      technician={{ name: "Shafiq", years: 15, specialisation: "iPhone board-level RF and wireless" }}
      serviceName="iPhone WiFi and Bluetooth Repair Dubai"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>Greyed-out WiFi toggle</strong> in Settings is the classic symptom - the toggle won't turn on at all, or it turns on then immediately greys back out. On most iPhones the same chip handles WiFi and Bluetooth, so when one fails, the other usually goes too. From iPhone 17 onwards Apple uses its own N1 wireless chip; earlier models use Broadcom or Apple-Broadcom hybrids. Both are repairable at component level - AED 400.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed">
            Common causes: heat damage from prolonged charging in a hot car (Dubai summers are brutal), motherboard flex from a drop, or post-water corrosion on the wireless module. We use hot-air rework at 280°C with the rest of the board protected, then reflow or reball the chip.
          </p>
        </>
      }
      whatWeFix={[
        'Greyed-out WiFi toggle in Settings',
        "WiFi connects then drops within seconds",
        "Bluetooth devices not discoverable",
        "AirDrop and Handoff failing",
        "Bluetooth headphones constantly disconnecting from this phone",
        "Apple Watch losing pairing repeatedly",
        "Hotspot won't broadcast",
        "After-water-damage wireless failure",
      ]}
      steps={[
        { title: "Confirm wireless chip fault", body: "Free 30-min diagnostic - settings reset, network reset, then bench test on a known-good carrier SIM. Rules out software." },
        { title: "Microscope inspection",       body: "Open the phone, lift logic board, inspect the WiFi/BT chip and shielding for cracks, water marks or solder fatigue." },
        { title: "Reflow or reball",            body: "Hot-air rework at controlled 280°C. Either reflow the existing chip (cheaper, when shorts only) or reball with fresh BGA (when chip itself is damaged)." },
        { title: "48-hour bench test",          body: "Wireless tested for 48 hours connected to multiple networks before handover. Warranty up to 12 months card included." },
      ]}
      warrantyDays={365}
      warrantyBullets={[
        "Covers the wireless chip rework or replacement.",
        "Excludes new water damage after repair.",
        "Free retest within 12 months if WiFi drops return.",
      ]}
      faqs={[
        { q: "Why does WiFi go grey before it dies completely?", a: "iOS detects an error code from the wireless chip and disables it to prevent crashes. The grey toggle is a software-level safeguard - the underlying chip has either solder fatigue or a partially failed transceiver." },
        { q: "Is this a real fix or just a temporary one?", a: "Reflow alone is temporary if heat caused the original failure (it'll come back in 6-12 months). A proper repair reballs the chip with fresh solder balls and replaces any damaged shielding. We always recommend the reball - same price, lasts years." },
        { q: "Could it be antenna instead of chip?", a: "Yes, occasionally. Antennas live near the side bezel and corrode after pool exposure. Antenna replacement is cheaper (AED 250) and we'll quote that if it's the actual fault." },
        { q: "Will iPhone 17's N1 chip be more reliable?", a: "Likely yes - Apple-designed silicon tends to run cooler. But it's still a fine-pitch BGA chip, so impact and water failures will still happen. We're already tooled to repair N1." },
        { q: "Why two days, not same-day?", a: "Hot-air rework needs time for the chip to fully cool, then 48-hour bench testing to catch intermittents. Rushing this leads to repeat failures - we'd rather take an extra day than have you back in two months." },
      ]}
      reviewNames={["Tim Quick", "B Parker", "Wellington Academy"]}
      related={[
        { label: "iPhone NFC Repair",          href: "/iphone-nfc-repair-dubai",          description: "Apple Pay and contactless fixes." },
        { label: "iPhone Software Fix",        href: "/iphone-software-fix-dubai",        description: "Rule out iOS issues first." },
        { label: "iPhone Water Damage Repair", href: "/iphone-water-damage-repair-dubai", description: "Common root cause of WiFi failure." },
      ]}
      blogLink={{ label: "Why your iPhone WiFi greys out - and how board-level repair brings it back", href: "/blog" }}
    />
  );
}
