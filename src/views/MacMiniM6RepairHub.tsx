"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";
import { Link } from "@/lib/router-compat";

export default function MacMiniM6RepairHub() {
  return (
    <SubServicePageTemplate
      seoTitle="Mac mini M6 & M5 Pro Repair Dubai - 2026 Model"
      seoDescription="Mac mini M6 and M5 Pro (2026) repair Dubai. M6 is Apple's first 2nm Mac chip. Brand-new model - we check warranty first. Free diagnosis. Call 055 741 3706."
      path="/mac-mini-m6-repair-dubai"
      eyebrow="Apple M6 / M5 Pro · announced 25 Aug 2026 · on sale 22 Sep 2026"
      h1="Mac mini M6 & M5 Pro Repair Dubai - 2026 Model"
      subtitle="The 2026 Mac mini comes with one of two chips: M6 (Apple's first 2-nanometre Mac chip) or M5 Pro. It is brand new - so we check Apple warranty and AppleCare+ before any paid work. Free diagnosis always."
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
            Apple announced the 2026 Mac mini on 25 August 2026, and it went on sale on 22 September 2026. There are two chips: the <strong>M6</strong>, Apple&apos;s first 2-nanometre Mac chip, and the higher-performance <strong>M5 Pro</strong>. In the UAE, Apple lists the Mac mini from AED 3,799 with M6 and from AED 7,299 with M5 Pro. For core counts, memory and port options, Apple&apos;s own spec page for your exact configuration is the reference - on the bench we work from your serial number, not a brochure.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed mb-md">
            Because this generation is weeks old, almost any hardware fault should be Apple's problem, not yours. We verify your serial number and coverage status first - if Apple should fix it under the 1-year warranty or AppleCare+, we tell you so and charge nothing. For the dedicated model pages see{" "}
            <Link to="/mac-mini-m6-2026-repair-dubai" className="text-accent underline underline-offset-2 hover:no-underline">Mac mini M6 2026 repair</Link>{" "}
            and{" "}
            <Link to="/mac-mini-m5-pro-2026-repair-dubai" className="text-accent underline underline-offset-2 hover:no-underline">Mac mini M5 Pro 2026 repair</Link>.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed mb-md">
            Where we do earn our keep on a new mini: accidental damage that warranty excludes (liquid, drops, power surges - common with cheap UPS units in Dubai), data recovery from a machine Apple would simply replace, network, display and dock setup problems that look like hardware but are configuration, and thermal servicing once the machine has lived a summer in an enclosed TV unit.
          </p>
        </>
      }
      whatWeFix={[
        "Warranty and AppleCare+ eligibility check - free, before any paid work",
        "Liquid and surge damage - excluded by Apple warranty, repaired at board level here",
        "Data recovery - the SSD is encrypted and tied to the chip, so we repair the board until it runs again (no chip-off)",
        "Thunderbolt and USB-C port faults - no device detected, charging or bandwidth problems",
        "Wi-Fi and Bluetooth connectivity diagnosis - router or settings vs hardware",
        "Ethernet port faults",
        "No display diagnosis - which port drives which monitor",
        "Thermal service - fan cleaning and sustained-load check",
        "Logic board repair - no power, boot loop, hardware fault (out of warranty)",
      ]}
      steps={[
        { title: "AppleCare and warranty check",  body: "We verify your serial number and coverage before quoting. On a 2026 mini Apple should cover most factory faults - we point you there at no charge if so." },
        { title: "Diagnosis",                     body: "Free hardware test, port check, thermal read, network and software scan. We find the root cause before any repair decision." },
        { title: "Repair and 1-hour soak test",   body: "Port, board, data-recovery or thermal work done in our workshop. One hour of load testing confirms the fix before you collect." },
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
        { q: "My 2026 Mac mini is brand new - should I go to Apple or to you?", a: "For a factory fault on a machine under 1 year old, Apple - and we will tell you that for free after checking your serial number. Come to us for anything warranty excludes: liquid, drops, power surges, and data recovery from a unit Apple would replace rather than repair." },
        { q: "What is the difference between the M6 and M5 Pro Mac mini?", a: "The M6 is Apple's first 2nm Mac chip and powers the entry model; the M5 Pro is the higher-performance option. Apple lists them in the UAE from AED 3,799 (M6) and AED 7,299 (M5 Pro). For core counts, memory and ports, check Apple's spec page for your exact configuration. For repair we treat both the same way: serial check first, then a free diagnosis." },
        { q: "Can the RAM or SSD in the 2026 Mac mini be upgraded?", a: "No. Memory and storage are soldered on Apple silicon Macs, including both the M6 and M5 Pro, so buy the configuration you need. The SSD is also encrypted and tied to the chip: if the board fails, recovering data means repairing the board until it runs again. Chip-off recovery does not work on Apple silicon." },
        { q: "Wi-Fi keeps dropping on my new Mac mini - is it faulty?", a: "Rarely. Most drops we see are router, mesh or settings problems rather than a hardware fault. We test the mini on a known-good network first; a genuine wireless hardware fault on a machine this new is an Apple warranty case, and we will tell you so." },
        { q: "Did the 2024 M4 Mac mini get discontinued?", a: "Yes - Apple replaced the M4 and M4 Pro Mac mini with the M6 and M5 Pro on 25 August 2026. The M4 generation remains fully serviceable; see our Mac mini M4 repair page." },
      ]}
      reviewNames={["Fatima Al Zaabi", "James Mitchell"]}
      related={[
        { label: "Mac mini Repair Dubai",           href: "/mac-mini-repair-dubai",               description: "All Mac mini models and services." },
        { label: "Mac mini M6 2026 Repair",         href: "/mac-mini-m6-2026-repair-dubai",        description: "Dedicated M6 model page." },
        { label: "Mac mini M5 Pro 2026 Repair",     href: "/mac-mini-m5-pro-2026-repair-dubai",    description: "Dedicated M5 Pro model page." },
        { label: "Mac mini M4 / M4 Pro Repair",     href: "/mac-mini-m4-repair-dubai",             description: "The 2024 generation this model replaced." },
      ]}
      blogLink={{ label: "Mac mini vs Mac Studio in 2026: Which to Buy", href: "/blog/mac-mini-vs-mac-studio-2026" }}
    />
  );
}
