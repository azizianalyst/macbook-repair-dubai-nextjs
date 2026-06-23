"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";
import { Link } from "@/lib/router-compat";

export default function MacBookAirM2ChargingPortRepair() {
  return (
    <SubServicePageTemplate
      path="/macbook-air-m2-charging-port-repair-dubai"
      seoTitle="MacBook Air M2 Charging Port Repair Dubai - MagSafe 3 from AED 220"
      seoDescription="MacBook Air M2, M3, and M4 charging port repair Dubai. MagSafe 3 board replacement from AED 220. USB-C port also repairable. Same-day 1-2 hours. 3-month warranty. Call 055 741 3706."
      eyebrow="M2 / M3 / M4 · MagSafe 3 + USB-C · same-day"
      h1="MacBook Air M2 Charging Port Repair Dubai"
      subtitle="MacBook Air M2, M3, and M4 introduced MagSafe 3 alongside two USB-C ports. MagSafe 3 board faults (won't click, intermittent, not charging) fixed from AED 220 same-day. USB-C port on M2 and later is also repairable."
      startingPrice={220}
      timeline="Same day (1-2 hours) · M4 1-2 days"
      whatsappPrefill="Hi, my MacBook Air M2/M3/M4 has a charging port issue:"
      breadcrumb={[
        { name: "Home", path: "/" },
        { name: "MacBook Repair", path: "/macbook-repair-dubai" },
        { name: "MacBook Air Repair", path: "/macbook-air-repair-dubai" },
        { name: "Charging Port Repair", path: "/macbook-air-charging-port-repair-dubai" },
        { name: "M2 MagSafe 3", path: "/macbook-air-m2-charging-port-repair-dubai" },
      ]}
      technician={{ name: "Shafiq", years: 15, specialisation: "MacBook board and port repair specialist" }}
      serviceName="MacBook Air M2 Charging Port Repair"
      intro={
        <>
          <p className="text-[16px] leading-relaxed mb-md">
            The MacBook Air M2 (2022) brought a major redesign and the return of MagSafe, now in its third generation. MagSafe 3 uses a small magnetic board connected to the logic board by a ribbon cable, making it a separate replaceable component. When the MagSafe board fails, whether from a bent pin, IC failure, or corrosion, the entire board is replaced without touching the logic board. This keeps the repair affordable (from AED 220) and risk-free for your data. The M3 Air (2024) uses the same MagSafe 3 system and is priced identically. The M4 Air (2025) introduced a new chassis; parts are available but supply is still building, so M4 repairs take 1 to 2 business days rather than same-day.
          </p>
          <p className="text-[16px] leading-relaxed">
            Alongside MagSafe 3, all M2, M3, and M4 Air models retain two USB-C ports (Thunderbolt / USB 4). Dubai's fine dust can block the MagSafe 3 connector pins or pack into the USB-C ports. MagSafe pins blocked by debris often look like a board failure but can sometimes be cleared with a soft brush or compressed air at low pressure. Free diagnosis at MacBook Repair Dubai determines whether the issue is a blocked connector, a failed MagSafe board, or a USB-C board fault before any repair is quoted.
          </p>
        </>
      }
      whatWeFix={[
        "MagSafe 3 pins bent, corroded, or blocked by Dubai dust",
        "MagSafe 3 board IC failure (LED does not light, no charge from MagSafe at all)",
        "USB-C charging board fault on M2, M3, or M4 Air (one or both USB-C ports not charging)",
        "Intermittent MagSafe charging (cuts in and out, charger falls away easily)",
        "MacBook Air not recognising the charger at all (no battery icon response)",
      ]}
      steps={[
        {
          title: "Free diagnosis",
          body: "We test the MagSafe 3 port, both USB-C ports, and the battery voltage to isolate the fault. Blocked pins, board IC failure, and cable damage all present differently on our test bench. Written quote before any work.",
        },
        {
          title: "MagSafe board or USB-C board replacement",
          body: "The MagSafe 3 board is disconnected from the logic board ribbon and replaced with a new board. If the USB-C charging board is also faulty, it is replaced in the same session. Bench time: 1 to 2 hours for M2 and M3; 1 to 2 days for M4.",
        },
        {
          title: "Charge test and burn-in",
          body: "After reassembly we test both MagSafe and USB-C charging paths with a power meter to confirm correct wattage. The laptop runs a 30-minute charge burn-in before return. 3-month warranty issued on the replaced board.",
        },
      ]}
      warrantyDays={90}
      warrantyBullets={[
        "3-month written warranty on the replacement MagSafe 3 or USB-C charging board",
        "Covers: MagSafe not charging, intermittent charging, USB-C port not powering",
        "Does not cover: new physical damage to the port, liquid damage after repair, or debris re-ingress after return",
      ]}
      faqs={[
        {
          q: "Is the MagSafe 3 fault on MacBook Air M2 the MagSafe board or the logic board?",
          a: "In most cases it is the MagSafe board, not the logic board. The MagSafe 3 connector on M2, M3, and M4 Air is a separate daughter board connected by a ribbon cable. We confirm this with free diagnosis before quoting. If the logic board is involved, we tell you before starting any work.",
        },
        {
          q: "Can Dubai dust block MagSafe 3 pins and stop charging?",
          a: "Yes. MagSafe 3 uses five spring-loaded pogo pins that can be blocked by very fine particles. If the MagSafe LED does not light at all or lights intermittently, try gently brushing the connector opening with a soft dry toothbrush before booking. If charging still does not restore, bring the laptop in for a free diagnosis.",
        },
        {
          q: "Does the MagSafe 3 board on M3 Air differ from M2?",
          a: "The M3 Air MagSafe 3 board is functionally and physically similar to the M2 Air board and the repair approach is identical. Pricing is the same: AED 220 for 13-inch, AED 220 for 15-inch. Same-day service on both M2 and M3 models.",
        },
        {
          q: "My MacBook Air M2 charges via USB-C but not MagSafe. Is the battery the issue?",
          a: "No. If the laptop charges over USB-C, the battery and logic board are fine. The issue is almost certainly the MagSafe 3 board or connector. AED 220, same-day. Free diagnosis confirms before any repair starts.",
        },
        {
          q: "How long does MacBook Air M2 MagSafe repair take in Dubai?",
          a: "Same-day 1 to 2 hours for M2 and M3 Air models. We stock MagSafe 3 boards for M2 and M3 at our Dubai Media City workshop. M4 Air (2025) takes 1 to 2 business days as parts supply builds. Call 055 741 3706 to confirm availability before visiting.",
        },
      ]}
      reviewNames={["Marianne Chehade El Dfouni", "Priya Nair", "David Chen"]}
      related={[
        {
          label: "MacBook Air Charging Port Repair Dubai",
          href: "/macbook-air-charging-port-repair-dubai",
          description: "All Air generations: MagSafe 3 and USB-C, pricing and gen table.",
        },
        {
          label: "MacBook Air M2 Battery Replacement Dubai",
          href: "/macbook-air-m2-battery-replacement-dubai",
          description: "52.6 Wh (13-inch) or 66.5 Wh (15-inch) cell from AED 450.",
        },
        {
          label: "MacBook Not Charging Dubai",
          href: "/macbook-wont-charge-dubai",
          description: "Troubleshooting guide and repair options for all Mac models.",
        },
      ]}
      blogLink={{
        label: "MacBook Air Not Charging Dubai?",
        href: "/blog/macbook-air-not-charging-dubai",
      }}
    />
  );
}
