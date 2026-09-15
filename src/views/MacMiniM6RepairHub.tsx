"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";
import { Link } from "@/lib/router-compat";

export default function MacMiniM6RepairHub() {
  return (
    <SubServicePageTemplate
      seoTitle="Mac mini M6 & M5 Pro Repair Dubai - 2026 Model"
      seoDescription="Mac mini M6 and M5 Pro (2026) repair Dubai. Apple's first 2nm Mac, Wi-Fi 7, Thunderbolt 5 on the Pro. Brand-new model - we check warranty first. Free diagnosis. Call 055 741 3706."
      path="/mac-mini-m6-repair-dubai"
      eyebrow="Apple M6 / M5 Pro · announced 25 Aug 2026 · on sale 22 Sep 2026 · Wi-Fi 7"
      h1="Mac mini M6 & M5 Pro Repair Dubai - 2026 Model"
      subtitle="The 2026 Mac mini keeps the 5×5-inch chassis and swaps the silicon: M6 (Apple's first 2-nanometre chip) or M5 Pro with Thunderbolt 5. It is brand new - so we check Apple warranty and AppleCare+ before any paid work. Free diagnosis always."
      startingPrice={200}
      timeline="Same day (diagnosis) · 5-7 days (board repair while parts stock builds)"
      whatsappPrefill="Hi, I need Mac mini M6 / M5 Pro (2026) repair. Issue:"
      breadcrumb={[
        { name: "Home",              path: "/" },
        { name: "Mac mini Repair",   path: "/mac-mini-repair-dubai" },
        { name: "Mac mini M6 Repair", path: "/mac-mini-m6-repair-dubai" },
      ]}
      technician={{ name: "Mohammed", years: 14, specialisation: "Mac mini and Mac Studio upgrades and repair" }}
      serviceName="Mac mini M6 Repair Dubai"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            Apple announced the 2026 Mac mini on 25 August 2026, with deliveries from 22 September 2026. There are two chips: the standard <strong>M6</strong> (12-core CPU, 12-core GPU - Apple's first 2-nanometre processor) and the <strong>M5 Pro</strong> (up to 18-core CPU, up to 20-core GPU). Both get the new Apple N1 networking chip with Wi-Fi 7 and Bluetooth 6, and Ethernet moves up to 2.5Gb as standard. The box is unchanged from the 2024 redesign - two USB-C ports and a headphone jack on the front, HDMI 2.1 and three Thunderbolt ports on the back (Thunderbolt 4 on the M6, Thunderbolt 5 on the M5 Pro).
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed mb-md">
            Because this generation is weeks old, almost any hardware fault should be Apple's problem, not yours. We verify your serial number and coverage status first - if Apple should fix it under the 1-year warranty or AppleCare+, we tell you so and charge nothing. For the dedicated model pages see{" "}
            <Link to="/mac-mini-m6-2026-repair-dubai" className="text-accent hover:underline">Mac mini M6 2026 repair</Link>{" "}
            and{" "}
            <Link to="/mac-mini-m5-pro-2026-repair-dubai" className="text-accent hover:underline">Mac mini M5 Pro 2026 repair</Link>.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed mb-md">
            Where we do earn our keep on a new mini: accidental damage that warranty excludes (liquid, drops, power surges - common with cheap UPS units in Dubai), data recovery from a machine Apple would simply replace, Wi-Fi 7 and Thunderbolt 5 setup problems that look like hardware but are configuration, and thermal servicing once the machine has lived a summer in an enclosed TV unit.
          </p>
        </>
      }
      whatWeFix={[
        "Warranty and AppleCare+ eligibility check - free, before any paid work",
        "Liquid and surge damage - excluded by Apple warranty, repaired at board level here",
        "Data recovery - soldered SSD, chip-off if the board is dead",
        "Thunderbolt 5 port (M5 Pro) - no device detected or bandwidth fault",
        "Thunderbolt 4 port (M6) and front USB-C port repair",
        "Wi-Fi 7 / Bluetooth 6 (N1) connectivity diagnosis - router compatibility vs hardware",
        "2.5GbE / 10GbE Ethernet port faults",
        "No display diagnosis - which port drives which monitor",
        "Thermal service - fan cleaning and sustained-load check",
        "Logic board repair - no power, boot loop, hardware fault (out of warranty)",
      ]}
      steps={[
        { title: "AppleCare and warranty check",  body: "We verify your serial number and coverage before quoting. On a 2026 mini Apple should cover most factory faults - we point you there at no charge if so." },
        { title: "Diagnosis",                     body: "Free hardware test, port check, thermal read, network and software scan. We find the root cause before any repair decision." },
        { title: "Repair and 1-hour soak test",   body: "Port, board, data-recovery or thermal work done in our workshop. One hour of load testing confirms the fix before you collect." },
      ]}
      warrantyDays={365}
      warrantyBullets={[
        "Up to 12 months on most hardware repairs (ports, fan, PSU, board-level work).",
        "15 days on logic-board, liquid-damage, software and data-recovery work.",
        "Free re-diagnosis if the same fault recurs within the warranty period.",
        "Repairs here do not affect a still-valid Apple warranty on unrelated components.",
      ]}
      faqs={[
        { q: "My 2026 Mac mini is brand new - should I go to Apple or to you?", a: "For a factory fault on a machine under 1 year old, Apple - and we will tell you that for free after checking your serial number. Come to us for anything warranty excludes: liquid, drops, power surges, and data recovery from a unit Apple would replace rather than repair." },
        { q: "What is the difference between the M6 and M5 Pro Mac mini?", a: "M6 is Apple's first 2nm chip: 12-core CPU, 12-core GPU, up to 32GB RAM, three Thunderbolt 4 ports. M5 Pro is the workstation option: up to 18-core CPU, 20-core GPU, up to 64GB RAM and three Thunderbolt 5 ports at 120Gb/s. Both share the same 5×5-inch chassis, Wi-Fi 7 and 2.5Gb Ethernet." },
        { q: "Can the RAM or SSD in the 2026 Mac mini be upgraded?", a: "No. RAM and SSD are soldered to the package on both the M6 and M5 Pro. Buy the configuration you need. We can recover data from a failed soldered SSD by chip-off, but we cannot enlarge it." },
        { q: "Wi-Fi 7 is dropping on my new Mac mini - is the N1 chip faulty?", a: "Almost never. Most drops we see are older routers negotiating badly with Wi-Fi 7 (802.11be) or Thread. We test the mini on a known-good Wi-Fi 7 network first; hardware faults on the N1 are extremely rare and would be an Apple warranty case." },
        { q: "Did the 2024 M4 Mac mini get discontinued?", a: "Yes - Apple replaced the M4 and M4 Pro Mac mini with the M6 and M5 Pro on 25 August 2026. The M4 generation remains fully serviceable; see our Mac mini M4 repair page." },
      ]}
      reviewNames={["Fatima Al Zaabi", "James Mitchell"]}
      related={[
        { label: "Mac mini Repair Dubai",           href: "/mac-mini-repair-dubai",               description: "All Mac mini models and services." },
        { label: "Mac mini M6 2026 Repair",         href: "/mac-mini-m6-2026-repair-dubai",        description: "Dedicated M6 model page with specs and common faults." },
        { label: "Mac mini M5 Pro 2026 Repair",     href: "/mac-mini-m5-pro-2026-repair-dubai",    description: "Dedicated M5 Pro model page." },
        { label: "Mac mini M4 / M4 Pro Repair",     href: "/mac-mini-m4-repair-dubai",             description: "The 2024 generation this model replaced." },
      ]}
      blogLink={{ label: "Mac mini vs Mac Studio in 2026: Which to Buy", href: "/blog/mac-mini-vs-mac-studio-2026" }}
    />
  );
}
