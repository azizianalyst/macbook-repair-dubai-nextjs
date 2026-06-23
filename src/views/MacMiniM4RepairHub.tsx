"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";
import { Link } from "@/lib/router-compat";

export default function MacMiniM4RepairHub() {
  return (
    <SubServicePageTemplate
      seoTitle="Mac mini M4 Repair Dubai - Redesigned 2024 Compact Mini"
      seoDescription="Mac mini M4 repair Dubai (2024). Completely redesigned - smallest Mac mini ever. M4 and M4 Pro. Thunderbolt 5 (Pro only). 1-2 years old, likely under warranty. Free diagnosis. Call 055 741 3706."
      path="/mac-mini-m4-repair-dubai"
      eyebrow="Apple M4 / M4 Pro · 2024 · smallest Mac mini ever · 2 front USB-C ports"
      h1="Mac mini M4 Repair Dubai - 2024 Redesigned"
      subtitle="The M4 Mac mini (2024) is Apple's most redesigned mini in a decade - smaller chassis, 2 front USB-C ports, Thunderbolt 5 on the Pro. At 1-2 years old, check AppleCare+ first. Free diagnosis always."
      startingPrice={200}
      timeline="Same day (diagnosis) · 3-5 days (board repair)"
      whatsappPrefill="Hi, I need Mac mini M4 (2024) repair. Issue:"
      breadcrumb={[
        { name: "Home",              path: "/" },
        { name: "Mac mini Repair",   path: "/mac-mini-repair-dubai" },
        { name: "Mac mini M4 Repair", path: "/mac-mini-m4-repair-dubai" },
      ]}
      technician={{ name: "Mohammed", years: 14, specialisation: "Mac mini and Mac Studio upgrades and repair" }}
      serviceName="Mac mini M4 Repair Dubai"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            The M4 Mac mini (2024) is a complete physical redesign - the smallest Mac mini Apple has ever made, roughly the size of an iPhone Pro box. The front carries two USB-C ports (USB 3) plus a headphone jack. The standard M4 has two Thunderbolt 4 ports and one HDMI 2.1 on the back. The M4 Pro instead has three Thunderbolt 5 ports on the back, supporting up to 120Gb/s for demanding storage and display setups.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed mb-md">
            At 1 to 2 years old in 2026, your M4 Mac mini is very likely still covered by the standard 1-year Apple warranty or an AppleCare+ plan (which extends coverage to 3 years). We check your serial number and coverage status before we do any paid work - if Apple should fix it, we tell you. For dedicated model pages see{" "}
            <Link to="/mac-mini-m4-2024-repair-dubai" className="text-accent hover:underline">Mac mini M4 2024 repair</Link>{" "}
            and{" "}
            <Link to="/mac-mini-m4-pro-2024-repair-dubai" className="text-accent hover:underline">Mac mini M4 Pro 2024 repair</Link>.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed mb-md">
            Even on new machines, faults do occur: the two front USB-C ports see heavy daily use on creative desks, software issues can prevent boot, and in Dubai's climate thermal management matters. Our free diagnosis covers all of this with no obligation to proceed with a paid repair.
          </p>
        </>
      }
      whatWeFix={[
        "Thunderbolt 5 port - M4 Pro only, no device detected or bandwidth fault",
        "USB-C front port repair - either of the two front ports",
        "Thunderbolt 4 back port - M4 standard model",
        "No display diagnosis - which port to use for which monitor",
        "Thermal service - fan cleaning, sustained-load check",
        "Logic board repair - no power, boot loop, hardware fault",
        "Full diagnostic - hardware test, storage health, AppleCare status check",
        "AppleCare+ eligibility check - free, before any paid work",
      ]}
      steps={[
        { title: "AppleCare and warranty check",  body: "We verify your serial number and coverage before quoting. M4 units are often still under warranty - we will direct you to Apple at no charge if they should cover it." },
        { title: "Diagnosis",                     body: "Free hardware test, port check, thermal read, and software scan. We find the root cause before any repair decision." },
        { title: "Repair and 1-hour soak test",   body: "Port, board, or thermal work done in our workshop. One hour of load testing confirms the fix before you collect." },
      ]}
      warrantyDays={365}
      warrantyBullets={[
        "Up to 12 months on most hardware repairs (keyboard, ports, hinge, fan, speaker, SSD/RAM).",
        "3 months on screen and battery replacements.",
        "15 days on logic-board, liquid-damage, software and data-recovery work.",
        "Free re-diagnosis if the same fault recurs within the warranty period.",
      ]}
      faqs={[
        { q: "Is the M4 Mac mini likely under warranty?", a: "Very likely. The M4 Mac mini launched in late 2024. Standard Apple warranty runs 1 year; AppleCare+ extends to 3 years. We check your serial number first - if Apple covers it, we tell you and point you to the right channel at no charge." },
        { q: "What is Thunderbolt 5 and why does it matter for repair?", a: "Thunderbolt 5 (on the M4 Pro only) supports up to 120Gb/s, double Thunderbolt 4's 40Gb/s. For repair, it means the port and controller are a different generation. We carry M4 Pro-specific tools and components for this." },
        { q: "Can the M4 Mac mini RAM or SSD be upgraded?", a: "No. RAM and SSD are soldered onto the M4 chip package. No repair shop in the world can upgrade them. Choose the right configuration when buying - 16GB is the minimum we recommend for any creative use." },
        { q: "What can fail on a brand-new M4 Mac mini?", a: "Front USB-C ports see heavy use and can loosen. Software issues can cause boot failure. Thermal problems arise from placement in enclosed spaces (common in Dubai home setups). Factory defects, while rare, also occur. All are diagnosed free." },
      ]}
      reviewNames={["Fatima Al Zaabi", "James Mitchell"]}
      related={[
        { label: "Mac mini Repair Dubai",       href: "/mac-mini-repair-dubai",           description: "All Mac mini models and services." },
        { label: "Mac mini M4 2024 Repair",     href: "/mac-mini-m4-2024-repair-dubai",   description: "Dedicated M4 model page with pricing." },
        { label: "Mac mini M4 Pro 2024 Repair", href: "/mac-mini-m4-pro-2024-repair-dubai", description: "Dedicated M4 Pro model page." },
      ]}
      blogLink={{ label: "Mac mini M4: Is It Worth It in 2026?", href: "/blog/mac-mini-m4-worth-it" }}
    />
  );
}
