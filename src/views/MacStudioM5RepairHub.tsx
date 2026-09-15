"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";
import { Link } from "@/lib/router-compat";

export default function MacStudioM5RepairHub() {
  return (
    <SubServicePageTemplate
      seoTitle="Mac Studio M5 Max & M5 Ultra Repair Dubai - 2026 Model"
      seoDescription="Mac Studio M5 Max and M5 Ultra (2026) repair Dubai. Apple's most powerful Mac now the Mac Pro is gone. Thunderbolt 5, Wi-Fi 7, up to 512GB RAM. Warranty checked first. Free diagnosis. Call 055 741 3706."
      path="/mac-studio-m5-repair-dubai"
      eyebrow="Apple M5 Max / M5 Ultra · announced 25 Aug 2026 · on sale 22 Sep 2026 · top of the Mac range"
      h1="Mac Studio M5 Max & M5 Ultra Repair Dubai - 2026 Model"
      subtitle="With the Mac Pro discontinued in March 2026, the 2026 Mac Studio is Apple's flagship desktop: M5 Max (18-core CPU) or M5 Ultra (up to 36-core CPU, 512GB RAM). Same chassis as 2025, new silicon. Brand new - warranty checked before any paid work. Free diagnosis."
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
            Apple refreshed the Mac Studio on 25 August 2026 (shipping from 22 September) with two chips. The <strong>M5 Max</strong> has an 18-core CPU (6 &lsquo;super&rsquo; cores plus 12 performance cores), up to a 40-core GPU, 36GB base RAM and a 128GB ceiling. The <strong>M5 Ultra</strong> fuses two M5 Max dies: up to 36 CPU cores, up to 80 GPU cores, 96GB base RAM and up to 512GB (the 512GB build ships from October 2026). Both carry the Apple N1 chip for Wi-Fi 7 and Bluetooth 6, four rear Thunderbolt 5 ports, 10Gb Ethernet and HDMI 2.1. The Ultra adds two front Thunderbolt 5 ports; the Max has USB-C on the front.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed mb-md">
            The chassis, cooling system and power supply are unchanged from the 2025 Studio, which is good news for repair: our fan, thermal-paste and PSU procedures carry over directly. What is new is the silicon - and on a machine this young, factory faults belong with Apple. We check your serial number and AppleCare+ status before quoting. See the dedicated pages for{" "}
            <Link to="/mac-studio-m5-max-2026-repair-dubai" className="text-accent hover:underline">Mac Studio M5 Max 2026 repair</Link>{" "}
            and{" "}
            <Link to="/mac-studio-m5-ultra-2026-repair-dubai" className="text-accent hover:underline">Mac Studio M5 Ultra 2026 repair</Link>.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed mb-md">
            Where independent repair matters on a new Studio: liquid and power-surge damage (excluded from warranty), data recovery from a soldered SSD when the board is dead, Thunderbolt 5 and multi-display faults that turn out to be cable or configuration issues, and preventive thermal service - a 36-core Ultra rendering all day in a Dubai summer pulls dust through its fans faster than any other Mac.
          </p>
        </>
      }
      whatWeFix={[
        "Warranty and AppleCare+ eligibility check - free, before any paid work",
        "Liquid and power-surge damage - board-level repair outside Apple warranty",
        "Data recovery - soldered SSD, chip-off when the logic board has failed",
        "Thunderbolt 5 port and controller faults - rear ports on both, front ports on the Ultra",
        "No display / multi-display diagnosis across up to eight monitors",
        "10Gb Ethernet port faults",
        "Wi-Fi 7 / Bluetooth 6 (N1) connectivity diagnosis",
        "Thermal service - fan cleaning, thermal paste, sustained-load check",
        "Power supply repair - internal PSU in the Studio chassis",
        "Logic board repair - no power, boot loop, hardware fault (out of warranty)",
      ]}
      steps={[
        { title: "AppleCare and warranty check",  body: "Serial number and coverage verified before any quote. Factory faults on a 2026 Studio should go to Apple - we say so for free." },
        { title: "Diagnosis",                     body: "Free hardware test, port and display check, thermal read under load, storage health and software scan." },
        { title: "Repair and 1-hour soak test",   body: "Port, PSU, board, data-recovery or thermal work in our workshop, followed by an hour of sustained-load testing before you collect." },
      ]}
      warrantyDays={365}
      warrantyBullets={[
        "Up to 12 months on most hardware repairs (ports, fan, PSU, board-level work).",
        "15 days on logic-board, liquid-damage, software and data-recovery work.",
        "Free re-diagnosis if the same fault recurs within the warranty period.",
        "Repairs here do not affect a still-valid Apple warranty on unrelated components.",
      ]}
      faqs={[
        { q: "Is the Mac Studio M5 Ultra now Apple's most powerful Mac?", a: "Yes. Apple discontinued the Mac Pro in March 2026 with no successor, so the M5 Ultra Mac Studio - up to 36 CPU cores, 80 GPU cores and 512GB of unified memory - is the top of the range. If you still run a Mac Pro, we continue to service both the 2019 Intel and 2023 M2 Ultra towers." },
        { q: "M5 Max or M5 Ultra - which should I buy for repair-friendliness?", a: "Neither is more repairable; both use soldered RAM and SSD in the same chassis. Unlike the 2025 lineup - where the M3 Ultra was an older chip generation than the M4 Max - the M5 Ultra and M5 Max are the same generation, so the Ultra is simply faster on every workload. Buy by budget and RAM need." },
        { q: "Can the RAM or SSD be upgraded later?", a: "No. Unified memory and storage are soldered on both chips. Choose the configuration up front - 36GB (Max) or 96GB (Ultra) base is generous, but video and AI workloads fill RAM quickly. We can recover data from a failed SSD by chip-off; we cannot make it bigger." },
        { q: "What changed physically versus the 2025 Mac Studio?", a: "Nothing on the outside. Apple kept the 2025 chassis, cooling and power supply and changed the chips and networking (Wi-Fi 7, Bluetooth 6). For repair that means our M4 Max / M3 Ultra thermal and PSU procedures apply directly to the 2026 model." },
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
