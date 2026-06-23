"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";
import { Link } from "@/lib/router-compat";

export default function MacMiniM1RepairHub() {
  return (
    <SubServicePageTemplate
      seoTitle="Mac mini M1 Repair Dubai - 2020 First Apple Silicon Mini"
      seoDescription="Mac mini M1 repair Dubai (2020, A2348). First Apple Silicon Mac mini. SSD soldered, RAM soldered, 8-16GB. No display port: HDMI 2.0 + Thunderbolt 3. Logic board, port, thermal. From AED 200. Call 055 741 3706."
      path="/mac-mini-m1-repair-dubai"
      eyebrow="Apple M1 · 2020 · first Apple Silicon Mac mini"
      h1="Mac mini M1 Repair Dubai - 2020"
      subtitle="The M1 Mac mini (2020, A2348) - compact, fast, silent. At 5-6 years old, common faults include Thunderbolt port failure, overheating after years of 24/7 use, and fan bearing issues. Logic board repair from AED 600."
      startingPrice={200}
      timeline="Same day (diagnosis + thermal) · 3-5 days (logic board)"
      whatsappPrefill="Hi, I need Mac mini M1 (2020) repair. Issue:"
      breadcrumb={[
        { name: "Home",              path: "/" },
        { name: "Mac mini Repair",   path: "/mac-mini-repair-dubai" },
        { name: "Mac mini M1 Repair", path: "/mac-mini-m1-repair-dubai" },
      ]}
      technician={{ name: "Mohammed", years: 14, specialisation: "Mac mini and Mac Studio upgrades and repair" }}
      serviceName="Mac mini M1 Repair Dubai"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            The M1 Mac mini (A2348) launched in late 2020 as the first Apple Silicon Mac mini. It brought a dramatic performance leap over the previous Intel models while keeping the same footprint. In 2026 these machines are 5 to 6 years old - old enough for real-world faults to appear, young enough to be worth repairing.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed mb-md">
            The M1 ships with 8GB or 16GB of unified memory soldered directly onto the chip package. The SSD is also soldered to the logic board. Neither can be upgraded by any repair shop - this is a hardware reality, not a policy. If you need more storage, a fast Thunderbolt SSD is the practical option.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed mb-md">
            The M1 Mac mini has two Thunderbolt 3 ports and one HDMI 2.0 port (not HDMI 2.1 - that came with M2). Thunderbolt port failure is the most common fault we see on these machines. The HDMI 2.0 port occasionally develops loose connections after years of cable swapping. Both are repairable at board level. For the full dedicated repair page see{" "}
            <Link to="/mac-mini-m1-2020-repair-dubai" className="text-accent hover:underline">Mac mini M1 2020 repair Dubai</Link>.
          </p>
        </>
      }
      whatWeFix={[
        "Thunderbolt 3 port failure - no device detected, no charge",
        "HDMI 2.0 port - loose connection, intermittent display",
        "Thermal paste replacement and fan cleaning - overheating and loud fan",
        "Logic board repair - no power, kernel panics, hardware faults",
        "No display diagnosis - HDMI handshake and Thunderbolt resolution check",
        "USB hub board - USB-A port failure",
        "Full diagnostic - hardware test, SMC, memory, storage health",
      ]}
      steps={[
        { title: "Free diagnosis",    body: "We confirm the exact model by serial number and run Apple Diagnostics plus a hardware scan. No charge for the assessment." },
        { title: "Clear quote",       body: "We tell you the fault, the fix, the cost and the timeline before any work starts. You approve it - or you take the machine back, no fee." },
        { title: "Repair and test",   body: "Port repair, board-level work or thermal service completed in our Dubai Media City workshop. One-hour soak test under load before collection." },
      ]}
      warrantyDays={365}
      warrantyBullets={[
        "Up to 12 months on most hardware repairs (keyboard, ports, hinge, fan, speaker, SSD/RAM).",
        "3 months on screen and battery replacements.",
        "15 days on logic-board, liquid-damage, software and data-recovery work.",
        "Free re-diagnosis if the same fault recurs within the warranty period.",
      ]}
      faqs={[
        { q: "Can the Mac mini M1 RAM be upgraded?", a: "No. The M1 chip has unified memory soldered onto the package. There are no SO-DIMM slots. 8GB and 16GB are the only configurations that exist, and they cannot be changed by any repair centre in the world." },
        { q: "What causes Thunderbolt port failure on the M1 Mac mini?", a: "Daily plug and unplug cycles stress the port connector and the pads on the board. Power surges through connected peripherals can also damage the Thunderbolt controller IC. We see this most on machines used in creative studios where cables are swapped constantly." },
        { q: "Is the M1 Mac mini worth repairing in 2026?", a: "Yes, in most cases. The M1 chip still handles Final Cut, Logic Pro, Xcode and Lightroom with ease. A Thunderbolt port repair or logic board fix is far cheaper than a new M4 machine. We give you a straight cost-benefit answer before you commit." },
        { q: "How long does Mac mini M1 logic board repair take?", a: "3 to 5 working days for board-level work. We source components from our Dubai stock first; international parts take an extra 2 to 3 days. Thermal cleaning and port repairs are usually same day." },
      ]}
      reviewNames={["Ali Hassan", "Binod Shrestha"]}
      related={[
        { label: "Mac mini Repair Dubai",       href: "/mac-mini-repair-dubai",         description: "All Mac mini models and services." },
        { label: "Mac mini M1 2020 Repair",     href: "/mac-mini-m1-2020-repair-dubai", description: "Dedicated A2348 model page with pricing." },
        { label: "Mac mini No Display",         href: "/mac-mini-no-display-dubai",     description: "Black screen when powered on." },
      ]}
      blogLink={{ label: "Mac mini Running Slow in Dubai? Fixes", href: "/blog/mac-mini-running-slow-fix" }}
    />
  );
}
