"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";
import { Link } from "@/lib/router-compat";

export default function MacStudioM5RepairHub() {
  return (
    <SubServicePageTemplate
      seoTitle="Mac Studio M5 Max & M5 Ultra Repair Dubai - 2026 Model"
      seoDescription="Mac Studio M5 Max and M5 Ultra (2026) repair Dubai. Apple's top desktop now the Mac Pro is discontinued, configurable up to 512GB. Warranty checked first. Free diagnosis. Call 055 741 3706."
      path="/mac-studio-m5-repair-dubai"
      eyebrow="Apple M5 Max / M5 Ultra · announced 25 Aug 2026 · on sale 22 Sep 2026 · top of the Mac range"
      h1="Mac Studio M5 Max & M5 Ultra Repair Dubai - 2026 Model"
      subtitle="With the Mac Pro discontinued in March 2026, the 2026 Mac Studio is Apple's flagship desktop: M5 Max or M5 Ultra, configurable up to 512GB. Brand new - warranty checked before any paid work. Free diagnosis."
      startingPrice={200}
      timeline="Same day (diagnosis) · 5-7 days (board repair while parts stock builds)"
      whatsappPrefill="Hi, I need Mac Studio M5 Max / M5 Ultra (2026) repair. Issue:"
      breadcrumb={[
        { name: "Home",                 path: "/" },
        { name: "Mac Studio Repair",    path: "/mac-studio-repair-dubai" },
        { name: "Mac Studio M5 Repair", path: "/mac-studio-m5-repair-dubai" },
      ]}
      technician={{ name: "Mohammed", years: 14, specialisation: "Mac mini and Mac Studio upgrades and repair" }}
      serviceName="Mac Studio M5 Repair Dubai"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            Apple announced the new Mac Studio on 25 August 2026, and it went on sale on 22 September 2026, with a choice of two chips: the <strong>M5 Max</strong> or the <strong>M5 Ultra</strong>, configurable up to 512GB. In the UAE, Apple lists it from AED 10,499 with M5 Max and from AED 23,999 with M5 Ultra. For core counts, memory options and ports, Apple&apos;s own spec page for your exact configuration is the reference - on the bench we work from your serial number.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed mb-md">
            We do not assume a new Studio opens, cools or powers up exactly like the last one: fan, thermal-paste and power-supply work is confirmed on the bench before we quote it. And on a machine this young, factory faults belong with Apple. We check your serial number and AppleCare+ status before quoting. This page covers both the M5 Max and the M5 Ultra; the repair approach is the same, and the difference on the bench is the chip and memory in your configuration.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed mb-md">
            Where independent repair matters on a new Studio: liquid and power-surge damage (excluded from warranty), data recovery when the board is dead (the SSD is encrypted and tied to the chip, so that means repairing the board until it runs again), Thunderbolt and multi-display faults that turn out to be cable or configuration issues, and preventive thermal service - an Ultra rendering all day in a Dubai summer pulls dust through its fans quickly.
          </p>
          <h2 className="text-[24px] md:text-[28px] mb-md mt-lg">Why do Thunderbolt devices lose power on the Mac Studio M5 when an 8K display is connected?</h2>
          <p className="text-[16px] text-text-muted leading-relaxed mb-md">
            The first M5 Studio hardware thread on Apple Community, from October 2026, is about this. An owner connected a Dell UP3218K 8K monitor on two Thunderbolt ports and an OWC bus-powered NVMe enclosure on a third. The enclosure would not power up while the display was connected, and the Mac kernel-panicked; afterwards the enclosure stayed dark. The same setup did the same thing on a MacBook Pro M4.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed mb-md">
            It is not a faulty Studio. An 8K display over DisplayPort 1.4 needs two cables, and any Thunderbolt-to-DisplayPort adapters on those cables are themselves bus-powered devices competing for the same budget. OWC documents it in the enclosure&apos;s own spec sheet: it does not mount when it is the third bus-powered device on an M4 Mac mini or Mac Studio. The M5 Studio inherits that rule. What we check before anyone talks about a port repair:
          </p>
          <ul className="space-y-2 text-[15px] text-text-muted mb-md">
            <li>• <strong className="text-text">Count the bus-powered devices</strong>, adapters included. Two display cables with active adapters plus a bus-powered SSD is already three.</li>
            <li>• <strong className="text-text">Give the enclosure its own power</strong> or move it behind a self-powered Thunderbolt dock. If it then mounts and the panics stop, the Studio is fine.</li>
            <li>• <strong className="text-text">Test the display alone, then the drive alone.</strong> A panic that only happens with both connected is a budget problem; a panic with one device on a port, on every port, is when we look at the Thunderbolt controller on the board.</li>
          </ul>
          <p className="text-[16px] text-text-muted leading-relaxed">
            The related MacBook Pro M5 fault, a kernel panic the moment a monitor is plugged into a Thunderbolt 5 dock, is covered in our{" "}
            <Link to="/blog/macbook-pro-m5-external-monitor-not-working-dubai" className="text-accent font-semibold hover:underline">MacBook Pro M5 external monitor guide</Link>.
          </p>
        </>
      }
      whatWeFix={[
        "Warranty and AppleCare+ eligibility check - free, before any paid work",
        "Liquid and power-surge damage - board-level repair outside Apple warranty",
        "Data recovery - the SSD is encrypted and tied to the chip, so we repair the board until it runs again (no chip-off)",
        "Thunderbolt and USB-C port and controller faults",
        "No display / multi-display diagnosis",
        "Ethernet port faults",
        "Wi-Fi and Bluetooth connectivity diagnosis",
        "Thermal service - fan cleaning, thermal paste, sustained-load check",
        "Power supply faults - no power, random shutdowns",
        "Logic board repair - no power, boot loop, hardware fault (out of warranty)",
      ]}
      steps={[
        { title: "AppleCare and warranty check",  body: "Serial number and coverage verified before any quote. Factory faults on a 2026 Studio should go to Apple - we say so for free." },
        { title: "Diagnosis",                     body: "Free hardware test, port and display check, thermal read under load, storage health and software scan." },
        { title: "Repair and 1-hour soak test",   body: "Port, PSU, board, data-recovery or thermal work in our workshop, followed by an hour of sustained-load testing before you collect." },
      ]}
      warrantyDays={730}
      warrantyHeadline
      warrantyBullets={[
        "Up to 2 years on most hardware repairs (ports, fan, PSU, SSD).",
        "15 days on logic-board, liquid-damage, software and data-recovery work.",
        "Free re-diagnosis if the same fault recurs within the warranty period.",
        "Repairs here do not affect a still-valid Apple warranty on unrelated components.",
      ]}
      faqs={[
        { q: "Is the Mac Studio M5 Ultra now Apple's most powerful Mac?", a: "It is the top of Apple's desktop range. Apple discontinued the Mac Pro in March 2026 and says there is no future model, so the Mac Studio with M5 Ultra, configurable up to 512GB, now leads the lineup. If you still run a Mac Pro, we continue to service both the 2019 Intel and 2023 M2 Ultra towers." },
        { q: "M5 Max or M5 Ultra - which should I buy for repair-friendliness?", a: "Neither is more repairable: memory and storage are soldered on both, so what you buy is what you keep. Both chips are the same M5 generation, so choose by budget and memory need. Apple lists the Mac Studio in the UAE from AED 10,499 (M5 Max) and AED 23,999 (M5 Ultra)." },
        { q: "Can the RAM or SSD be upgraded later?", a: "No. Unified memory and storage are soldered on both chips, so choose the configuration up front - video and AI workloads fill memory quickly. The SSD is also encrypted and tied to the chip: if the board fails, recovering data means repairing the board until it runs again. Chip-off recovery does not work on Apple silicon, and we cannot make storage bigger." },
        { q: "Is the 2026 Mac Studio repaired the same way as the 2025 model?", a: "We do not assume so. Apple's announcement is about the new M5 Max and M5 Ultra chips, so we confirm how each new unit opens, cools and powers up on the bench before quoting fan, thermal or power-supply work. On sale since 22 September 2026, it is also still inside Apple's one-year warranty, which we check first." },
        { q: "My bus-powered SSD will not power up on the Mac Studio M5 when my 8K monitor is connected. Is a port broken?", a: "Almost certainly not. An 8K display over DisplayPort 1.4 uses two cables, and their adapters count as bus-powered devices. OWC's own spec sheet says its enclosure does not mount as the third bus-powered device on an M4 Mac mini or Mac Studio, and the M5 follows the same budget. Power the enclosure separately or put it behind a self-powered dock. If a device still fails alone on every port, bring it in and we test the Thunderbolt controller." },
        { q: "My new Studio is under warranty - why would I come to you?", a: "For anything Apple excludes: liquid, surge or physical damage, data recovery from a dead board (Apple replaces rather than recovers), and diagnosis when you are not sure whether a fault is hardware or configuration. Our diagnosis is free and we tell you honestly when Apple is the right route." },
      ]}
      reviewNames={["Fatima Al Zaabi", "James Mitchell"]}
      related={[
        { label: "Mac Studio Repair Dubai",            href: "/mac-studio-repair-dubai",                description: "All Mac Studio generations and services." },
        { label: "Mac Studio Overheating Fix",         href: "/mac-studio-overheating-fix-dubai",       description: "Fan, dust and thermal service." },
        { label: "Mac Studio Data Recovery",           href: "/mac-studio-data-recovery-dubai",         description: "When the board is dead and the data matters." },
        { label: "Mac Pro Repair Dubai",               href: "/mac-pro-repair-dubai",                   description: "Discontinued March 2026 - still fully supported here." },
      ]}
      blogLink={{ label: "Apple Discontinued the Mac Pro - What Now?", href: "/blog/apple-mac-pro-discontinued-what-now" }}
    />
  );
}
