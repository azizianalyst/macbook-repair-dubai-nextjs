"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";
import { Link } from "@/lib/router-compat";

export default function MacBookAirIntelChargingPortRepair() {
  return (
    <SubServicePageTemplate
      path="/macbook-air-intel-charging-port-repair-dubai"
      seoTitle="MacBook Air Intel USB-C Charging Port Repair Dubai - From AED 280"
      seoDescription="MacBook Air Intel (2018-2020) USB-C charging port repair Dubai from AED 280. Thunderbolt 3 port corrosion, bent tab, debris. Same-day 1-2 hours. 3-month warranty. Call 055 741 3706."
      eyebrow="Intel 2018-2020 · USB-C only · no MagSafe · same-day"
      h1="MacBook Air Intel Charging Port Repair Dubai"
      subtitle="MacBook Air Intel models (2018 to 2020) charge exclusively over USB-C, with no MagSafe. Both left-side Thunderbolt 3 ports share a single board. We replace the board same-day from AED 280."
      startingPrice={280}
      timeline="Same day (1-2 hours)"
      whatsappPrefill="Hi, my MacBook Air Intel won't charge from the USB-C port:"
      breadcrumb={[
        { name: "Home", path: "/" },
        { name: "MacBook Repair", path: "/macbook-repair-dubai" },
        { name: "MacBook Air Repair", path: "/macbook-air-repair-dubai" },
        { name: "Charging Port Repair", path: "/macbook-air-charging-port-repair-dubai" },
        { name: "Intel USB-C", path: "/macbook-air-intel-charging-port-repair-dubai" },
      ]}
      technician={{ name: "Shafiq", years: 15, specialisation: "MacBook board and port repair specialist" }}
      serviceName="MacBook Air Intel Charging Port Repair"
      intro={
        <>
          <p className="text-[16px] leading-relaxed mb-md">
            The MacBook Air Intel 2018, 2019, and 2020 models use two Thunderbolt 3 USB-C ports on the left side as their only power input. Apple removed MagSafe entirely on the Intel Air line. Both ports sit on a single small charging board that connects to the logic board via a ribbon cable. When one port stops charging, the board is usually the culprit rather than the logic board itself, keeping repair cost and risk low.
          </p>
          <p className="text-[16px] leading-relaxed">
            Dubai's high summer humidity (regularly above 80%) combined with rapidly air-conditioned interiors creates condensation cycles that corrode USB-C contacts over time. Fine desert sand in pockets and bags also packs into the port, either blocking the cable or abrading the contacts. MacBook Repair Dubai carries Intel Air USB-C charging boards in stock and replaces them same-day in 1 to 2 hours. Free diagnosis confirms the fault before any work begins.
          </p>
        </>
      }
      whatWeFix={[
        "USB-C port corrosion from Dubai humidity (green or white residue on contacts)",
        "Bent or broken USB-C connector tab from dropped cable or lateral cable stress",
        "Debris packed inside USB-C port (lint, fine sand) preventing cable seating",
        "USB-C charging board failure (both ports dead or intermittent on one port)",
        "One USB-C port charges but the other does not (single-port board trace fault)",
      ]}
      steps={[
        {
          title: "Free diagnosis",
          body: "We test both USB-C ports with a calibrated charger and USB-C tester to identify whether the fault is port debris, corrosion, the charging board, or the logic board. Written quote before any work begins.",
        },
        {
          title: "USB-C board replacement",
          body: "The charging board is disconnected from the logic board ribbon, removed, and replaced with a new board. Both ports are on the same board so both are restored simultaneously. Total bench time: 1 to 2 hours.",
        },
        {
          title: "Charge test and return",
          body: "We test both USB-C ports with two different chargers (61W and 96W) and verify charging current is correct via a USB-C power meter. The laptop is returned fully charged with a 3-month warranty on the new board.",
        },
      ]}
      warrantyDays={90}
      warrantyBullets={[
        "3-month written warranty on the replacement USB-C charging board",
        "Covers: port not charging, loose cable fit, intermittent connection",
        "Does not cover: new physical damage, liquid damage after repair, or debris ingress after return",
      ]}
      faqs={[
        {
          q: "How much does MacBook Air Intel USB-C charging port repair cost in Dubai?",
          a: "MacBook Air Intel (2018-2020) USB-C charging port repair is AED 280 at MacBook Repair Dubai. This includes the replacement board, labour, and a 3-month warranty. Free diagnosis confirms the fault before any cost is committed. Same-day 1 to 2 hours.",
        },
        {
          q: "Does the MacBook Air Intel have MagSafe?",
          a: "No. The MacBook Air Intel 2018, 2019, and 2020 models charge exclusively over USB-C (Thunderbolt 3). Apple removed MagSafe from the Intel Air line. MagSafe 3 returned with the M2 Air in 2022.",
        },
        {
          q: "Can debris in the USB-C port cause the MacBook Air Intel to stop charging?",
          a: "Yes, and it is the most common cause on Intel Air models. Lint from pockets and fine sand from Dubai pack into the port over time and lift the USB-C cable off the contacts. Try a non-metal dental pick or short burst of compressed air first. If charging does not restore, book a free diagnosis.",
        },
        {
          q: "My Intel Air charges from one USB-C port but not the other. Do I need a new logic board?",
          a: "No. Both USB-C ports on the Intel Air share a single charging board. A fault on one port's trace kills that port while the other remains functional. Board replacement (AED 280) restores both ports without touching the logic board.",
        },
        {
          q: "How long does MacBook Air Intel charging port repair take in Dubai?",
          a: "Same-day 1 to 2 hours. We carry Intel Air charging boards in stock at our Dubai Media City workshop. Drop in before 11am, collect by 1pm. Call 055 741 3706 to confirm stock before visiting.",
        },
      ]}
      reviewNames={["Ali Hassan", "Binod Shrestha", "Sarah Johnson"]}
      related={[
        {
          label: "MacBook Air Charging Port Repair Dubai",
          href: "/macbook-air-charging-port-repair-dubai",
          description: "All Air generations: MagSafe 3 and USB-C covered.",
        },
        {
          label: "MacBook Air Intel Battery Replacement Dubai",
          href: "/macbook-air-intel-battery-replacement-dubai",
          description: "49.9 Wh cell replacement for 2018-2020 Intel Air from AED 450.",
        },
        {
          label: "MacBook Air Screen Repair Dubai",
          href: "/macbook-air-screen-repair-dubai",
          description: "All Air screen generations from AED 600.",
        },
      ]}
      blogLink={{
        label: "MacBook Air Not Charging Dubai? Fixes and Cost 2026",
        href: "/blog/macbook-air-not-charging-dubai",
      }}
    />
  );
}
