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
            We do not assume a new Studio opens, cools or powers up exactly like the last one: fan, thermal-paste and power-supply work is confirmed on the bench before we quote it. And on a machine this young, factory faults belong with Apple. We check your serial number and AppleCare+ status before quoting. See the dedicated pages for{" "}
            <Link to="/mac-studio-m5-max-2026-repair-dubai" className="text-accent underline underline-offset-2 hover:no-underline">Mac Studio M5 Max 2026 repair</Link>{" "}
            and{" "}
            <Link to="/mac-studio-m5-ultra-2026-repair-dubai" className="text-accent underline underline-offset-2 hover:no-underline">Mac Studio M5 Ultra 2026 repair</Link>.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed mb-md">
            Where independent repair matters on a new Studio: liquid and power-surge damage (excluded from warranty), data recovery when the board is dead (the SSD is encrypted and tied to the chip, so that means repairing the board until it runs again), Thunderbolt and multi-display faults that turn out to be cable or configuration issues, and preventive thermal service - an Ultra rendering all day in a Dubai summer pulls dust through its fans quickly.
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
        { q: "My new Studio is under warranty - why would I come to you?", a: "For anything Apple excludes: liquid, surge or physical damage, data recovery from a dead board (Apple replaces rather than recovers), and diagnosis when you are not sure whether a fault is hardware or configuration. Our diagnosis is free and we tell you honestly when Apple is the right route." },
      ]}
      reviewNames={["Fatima Al Zaabi", "James Mitchell"]}
      related={[
        { label: "Mac Studio Repair Dubai",            href: "/mac-studio-repair-dubai",                description: "All Mac Studio generations and services." },
        { label: "Mac Studio M5 Max 2026 Repair",      href: "/mac-studio-m5-max-2026-repair-dubai",    description: "Dedicated M5 Max model page." },
        { label: "Mac Studio M5 Ultra 2026 Repair",    href: "/mac-studio-m5-ultra-2026-repair-dubai",  description: "Dedicated M5 Ultra model page." },
        { label: "Mac Pro Repair Dubai",               href: "/mac-pro-repair-dubai",                   description: "Discontinued March 2026 - still fully supported here." },
      ]}
      blogLink={{ label: "Apple Discontinued the Mac Pro - What Now?", href: "/blog/apple-mac-pro-discontinued-what-now" }}
    />
  );
}
