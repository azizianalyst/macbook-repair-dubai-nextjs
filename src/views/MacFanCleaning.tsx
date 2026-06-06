"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";

export default function MacFanCleaning() {
  return (
    <SubServicePageTemplate
      seoTitle="Mac Mini, Studio & Pro Fan Cleaning Dubai | 055 741 3706"
      seoDescription="Mac desktop fan cleaning Dubai. Mac Studio big fan, Mac Pro dual fans, Mac Mini blower. Dubai dust deep clean. AED 250. Same day."
      path="/mac-fan-cleaning-dubai"
      eyebrow="Mac fan cleaning"
      h1="Mac Mini, Studio & Pro Fan Cleaning Dubai"
      subtitle="Mac Studio is loud, Mac Pro fans are roaring, Mac Mini chassis is hot to touch. Almost always Dubai dust packed into the cooling stack. Open, vacuum, brush clean, refit - same day, and the difference is immediate."
      startingPrice={250}
      timeline="Same day"
      whatsappPrefill="Hi, my Mac is loud / hot - model:"
      breadcrumb={[
        { name: "Home",            path: "/" },
        { name: "Mac Mini Repair", path: "/mac-mini-repair-dubai" },
        { name: "Fan Cleaning",    path: "/mac-fan-cleaning-dubai" },
      ]}
      technician={{ name: "Mohammed", years: 14, specialisation: "Mac thermal restoration" }}
      serviceName="Mac Mini, Studio and Pro Fan Cleaning"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>Dubai is hard on Mac cooling.</strong> Fine outdoor dust pulled in through air conditioning, plus 24/7 indoor circulation, builds a felt-like dust mat across the heatsink fins of any Mac that's been on a desk for two-plus years. The fan ramps up to push air through a choked stack and you hear it.
          </p>
          <p className="text-[16px] text-on-primary-muted leading-relaxed">
            Mac Studio is the worst affected - its big fan pulls a lot of air, and a lot of dust comes with it. Mac Pro 2019 has dual top fans plus the chassis impellers, all of which collect dust. Even the supposedly-passive Mac Mini Pro models have a fan that gets dirty. The fix is the same on all three: open, vacuum, brush, compressed air through cleared fins, refit. Cheaper and faster than a full thermal-paste service, and on most desktop Macs that's all that's needed.
          </p>
        </>
      }
      whatWeFix={[
        "Mac Studio M1 / M2 / M3 / M4 Max and Ultra fan noise",
        "Mac Pro 2019 dual top fans and chassis impellers",
        "Mac Mini M2 / M4 Pro low-profile fan",
        "Older Intel Mac Mini blower fan dust buildup",
        "Loud-fan diagnosis (mechanical vs runaway software process)",
        "Pre-emptive clean every 2-3 years on heavy-use desktops",
      ]}
      steps={[
        { title: "Confirm cause is dust",      body: "Quick Activity Monitor check - if CPU is idle but fan is loud, it's mechanical. If a process is pegging the CPU, fan cleaning won't fix it (we'll tell you the real cause)." },
        { title: "Open the chassis",            body: "Mac Mini: bottom plate, antenna shield, fan exposed. Mac Studio: rear cover, fan housing accessed. Mac Pro: side panel, both top fans accessed." },
        { title: "Deep clean",                  body: "Vacuum, soft brush, compressed air through cleared fins. Fan blades cleaned individually. Intake and exhaust paths cleared." },
        { title: "Reassemble + verify",         body: "Chassis closed, Mac powered on, fan profile measured. The difference in idle noise is immediately audible." },
      ]}
      warrantyDays={90}
      warrantyBullets={[
        "90-day workmanship warranty.",
        "If fan noise returns inside 6 months we re-clean for free.",
        "Free pickup for Mac Pro across Dubai mainland - they're heavy.",
      ]}
      faqs={[
        { q: "How often should I have this done?", a: "In Dubai, every 2-3 years for a Mac Studio or Mac Pro in normal home or office use. Sooner if you're in a high-dust area or run heavy sustained loads (rendering, compiling, mining)." },
        { q: "Can I just blow it out with compressed air through the vents?", a: "External venting yes - quarterly soft-brushing won't hurt. The internal heatsink usually needs the chassis open to clean properly because the dust mat is too compacted for vent-side air to dislodge." },
        { q: "Will it run cooler too, or just quieter?", a: "Both. With clean fins the fan moves more air per RPM, so the same cooling happens at lower speed. CPU temperatures typically drop 5-10°C at idle and 8-15°C under sustained load." },
        { q: "Is fan cleaning enough or do I need new thermal paste too?", a: "On Mac desktops under 4 years old, fan cleaning is usually enough. On older Intel Mac Minis (2014, 2018) the thermal paste is often dried out and we recommend the full service. We'll inspect and tell you on intake." },
        { q: "What's the difference vs the iMac fan cleaning?", a: "Same idea, different procedure. iMac requires display removal which is delicate. Mac desktop chassis access is much simpler and cheaper. Same outcome - quieter Mac." },
        { q: "Why is my Mac Studio fan loud after macOS update?", a: "Different cause - usually a runaway background process (Spotlight reindex, Photos analysis, Time Machine). Check Activity Monitor first. If CPU is idle but fan is loud, it's mechanical and needs cleaning." },
      ]}
      reviewNames={["Binod Shrestha", "Shah nawaz", "Marianne Chehade El Dfouni"]}
      related={[
        { label: "Mac Performance Tune",   href: "/mac-performance-tune-dubai",   description: "Software-side speed and thermal optimisation." },
        { label: "Mac Full Diagnostic",    href: "/mac-full-diagnostic-dubai",    description: "Free check first if you're unsure of the cause." },
        { label: "Mac Logic Board Repair", href: "/mac-logic-board-repair-dubai", description: "If overheating already caused damage." },
      ]}
      blogLink={{ label: "Why your Mac Studio is loud - Dubai dust and what cleaning achieves", href: "/blog/mac-mini-running-slow-fix" }}
    />
  );
}
