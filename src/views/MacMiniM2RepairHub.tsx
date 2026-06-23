"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";
import { Link } from "@/lib/router-compat";

export default function MacMiniM2RepairHub() {
  return (
    <SubServicePageTemplate
      seoTitle="Mac mini M2 Repair Dubai - M2 and M2 Pro 2023"
      seoDescription="Mac mini M2 repair Dubai (2023, A2686 M2 / A2687 M2 Pro). Thunderbolt 4 on both; HDMI 2.1 on the M2 Pro. Logic board repair from AED 1,040. Known HDMI audio bug (M2 Pro) and Thunderbolt drops documented. From AED 200. Call 055 741 3706."
      path="/mac-mini-m2-repair-dubai"
      eyebrow="Apple M2 / M2 Pro · 2023 · Thunderbolt 4 (HDMI 2.1 on M2 Pro)"
      h1="Mac mini M2 Repair Dubai - M2 and M2 Pro 2023"
      subtitle="The M2 Mac mini (2023) added Thunderbolt 4 on both models, with HDMI 2.1 and two extra Thunderbolt ports on the M2 Pro. Known issues: HDMI 2.1 audio dropout bug on the M2 Pro (firmware), Thunderbolt bandwidth drops, fan noise. Logic board repair from AED 1,040."
      startingPrice={200}
      timeline="Same day (diagnosis + thermal) · 3-5 days (logic board)"
      whatsappPrefill="Hi, I need Mac mini M2 (2023) repair. Issue:"
      breadcrumb={[
        { name: "Home",              path: "/" },
        { name: "Mac mini Repair",   path: "/mac-mini-repair-dubai" },
        { name: "Mac mini M2 Repair", path: "/mac-mini-m2-repair-dubai" },
      ]}
      technician={{ name: "Mohammed", years: 14, specialisation: "Mac mini and Mac Studio upgrades and repair" }}
      serviceName="Mac mini M2 Repair Dubai"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            The 2023 Mac mini comes in two chip configurations: the M2 (A2686) for everyday use and the M2 Pro (A2687) for heavier workloads. The key hardware upgrade shared by both is Thunderbolt 4 (a step up over the M1's Thunderbolt 3 / USB 4). The base M2 keeps HDMI 2.0 (4K at 60Hz) and two Thunderbolt 4 ports; the M2 Pro steps up to HDMI 2.1 and two additional Thunderbolt 4 ports (four total).
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed mb-md">
            A documented Apple firmware issue on some M2 Pro Mac minis (the model with HDMI 2.1) causes audio to drop over HDMI when driving high-refresh displays. The base M2 uses HDMI 2.0 and is not affected. This is a software bug, not hardware failure - a firmware update resolves it. We check for this first before any hardware diagnosis to avoid unnecessary repairs. See{" "}
            <Link to="/mac-mini-m2-2023-repair-dubai" className="text-accent hover:underline">Mac mini M2 2023 repair Dubai</Link>{" "}
            and{" "}
            <Link to="/mac-mini-m2-pro-2023-repair-dubai" className="text-accent hover:underline">Mac mini M2 Pro 2023 repair Dubai</Link>{" "}
            for model-specific pages.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed mb-md">
            These machines are approximately 2 to 3 years old in 2026. If yours is still under AppleCare+ (3-year plan), we recommend checking that first - we will tell you honestly whether Apple covers your fault before we quote. For out-of-warranty repairs, logic board work starts from AED 1,040.
          </p>
        </>
      }
      whatWeFix={[
        "HDMI 2.1 port - audio dropout, no signal, physical port damage",
        "Thunderbolt 4 port - bandwidth drops, no device detected",
        "Thermal service - fan noise, sustained-load throttling",
        "Logic board repair - no power, kernel panics, hardware faults",
        "Full diagnostic - hardware test, memory, storage health",
        "No display diagnosis - resolution handshake, HDMI vs Thunderbolt check",
        "HDMI firmware check - rule out software cause before hardware repair",
      ]}
      steps={[
        { title: "AppleCare check first",  body: "We confirm your serial and check AppleCare+ status. If it's covered, we tell you before doing any paid work." },
        { title: "Firmware and software",  body: "HDMI audio dropout is a known firmware bug. We update and test before opening the machine - avoids unnecessary repairs." },
        { title: "Hardware repair",        body: "Port, board-level, or thermal work completed in our workshop with a 1-hour load test before collection." },
      ]}
      warrantyDays={365}
      warrantyBullets={[
        "Up to 12 months on most hardware repairs (keyboard, ports, hinge, fan, speaker, SSD/RAM).",
        "3 months on screen and battery replacements.",
        "15 days on logic-board, liquid-damage, software and data-recovery work.",
        "Free re-diagnosis if the same fault recurs within the warranty period.",
      ]}
      faqs={[
        { q: "What is the HDMI audio bug on the M2 Mac mini?", a: "It affects the M2 Pro, which is the 2023 model with HDMI 2.1 - some units drop audio over HDMI when connected to high-refresh monitors. The base M2 uses HDMI 2.0 (4K at 60Hz) and is not affected. Apple acknowledged this and released firmware fixes in macOS 13.3 and later. We always check firmware version first - no point paying for a hardware repair when a free update resolves it." },
        { q: "Can the Mac mini M2 Pro SSD be upgraded?", a: "No. Like all M-series Mac minis, the SSD is soldered to the logic board. No repair shop can upgrade it. If you need more storage, a fast Thunderbolt 4 external SSD is the practical solution." },
        { q: "Is the M2 Mac mini worth repairing?", a: "Yes. At 2 to 3 years old it still has years of productive life. The M2 handles demanding creative workloads well. A logic board repair is significantly cheaper than buying an M4 replacement." },
        { q: "What is the difference between Thunderbolt 4 on M2 and Thunderbolt 3 on M1?", a: "Thunderbolt 4 doubles the guaranteed minimum bandwidth requirements (40Gb/s in both directions), mandates USB4 compatibility, and is stricter on hub interoperability. For most peripherals the practical difference is small, but TB4 hubs and docks work more reliably." },
      ]}
      reviewNames={["Sarah Johnson", "Ahmad Khalid"]}
      related={[
        { label: "Mac mini Repair Dubai",         href: "/mac-mini-repair-dubai",             description: "All Mac mini models and services." },
        { label: "Mac mini M2 2023 Repair",       href: "/mac-mini-m2-2023-repair-dubai",     description: "Dedicated M2 model page with pricing." },
        { label: "Mac mini M2 Pro 2023 Repair",   href: "/mac-mini-m2-pro-2023-repair-dubai", description: "Dedicated M2 Pro model page with pricing." },
      ]}
      blogLink={{ label: "Mac mini No Display Over HDMI in Dubai? 6 Fixes", href: "/blog/mac-mini-no-display-hdmi-dubai" }}
    />
  );
}
