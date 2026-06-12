"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";

export default function MacBookOverheatingFix() {
  return (
    <SubServicePageTemplate
      seoTitle="MacBook Overheating Fix Dubai - AED 300 | Same-Day | Call 055 741 3706"
      seoDescription="MacBook overheating fix Dubai - thermal paste replacement, fan clean, throttling cure. Dubai-dust specialists. AED 300, same day. Call 055 741 3706."
      path="/macbook-overheating-fix-dubai"
      eyebrow="MacBook overheating fix"
      h1="MacBook Overheating Fix Dubai"
      subtitle="Fans roaring, palm-rest scorching, render times doubling. Most overheating is dust, dried paste and clogged vents - fixed in a single visit. AED 300, same day."
      startingPrice={300}
      timeline="Same day"
      whatsappPrefill="Hi, my MacBook is overheating - model and year:"
      breadcrumb={[
        { name: "Home",            path: "/" },
        { name: "MacBook Repair",  path: "/" },
        { name: "Overheating Fix", path: "/macbook-overheating-fix-dubai" },
      ]}
      technician={{ name: "Mohammed", years: 14, specialisation: "MacBook thermal & component repair" }}
      serviceName="MacBook Overheating Fix"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>MacBook overheating in Dubai</strong> is rarely a hardware fault - it's almost always dust accumulation in the fan blades and dried-out thermal paste between the CPU and the heatsink. The Dubai climate (fine sand carried indoors, high ambient temperature, AC running constantly) is brutal on MacBook cooling. The good news: a full thermal service brings sustained-load temperatures down 15-25°C and restores normal fan behaviour. Same day, AED 300.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed">
            Most common on 2016-2019 Intel MacBook Pros (the i7/i9 quad-core models that ran hot from new). Apple Silicon MacBooks throttle less aggressively but still benefit from a clean and re-paste after 3-4 years.
          </p>
        </>
      }
      whatWeFix={[
        "Constant fan noise even on light tasks",
        "Palm-rest hot to the touch within minutes",
        "CPU throttling - slow exports, beach-balling",
        "Dust packed inside fan blades and heatsink fins",
        "Dried-out thermal paste between CPU/GPU and heatsink",
        "Worn thermal pads on VRM and memory chips",
        "Fan bearing whine or rattle",
        "Auto-shutdown under sustained load",
      ]}
      steps={[
        { title: "Diagnose under load", body: "Run iStat thermal probe + Cinebench. Confirm whether it's dust, paste, or a deeper fault." },
        { title: "Strip the bottom case", body: "Disconnect battery, remove logic board access. Document with photos for warranty." },
        { title: "Clean & re-paste", body: "Compressed air on fans, ultrasonic on heatsink fins, fresh Honeywell PTM7950 phase-change pad on CPU/GPU." },
        { title: "Reassemble + 30-min stress test", body: "Verify temperatures stay below 85°C under sustained Cinebench load. Sign QC sheet." },
      ]}
      warrantyDays={15}
      warrantyBullets={[
        "Covers thermal pad, paste application and fan reseat.",
        "Excludes new dust ingress from external sources.",
        "Free re-clean if temps creep back inside 12 months.",
      ]}
      faqs={[
        { q: "How much will my MacBook cool down after a re-paste?", a: "On 2016-2019 Intel MacBook Pros we routinely see a 15-25°C drop in sustained-load temperatures and 30-40% lower fan speed for the same workload. On Apple Silicon, a 5-10°C drop and noticeably quieter operation." },
        { q: "Why does Honeywell PTM7950 last longer than normal paste?", a: "It's a phase-change pad - solid at room temperature, melts to fill the gap when warm. It doesn't pump out under thermal cycling like liquid paste does. Lasts 5+ years versus 18 months for standard paste." },
        { q: "Will this void my AppleCare?", a: "If you're under AppleCare, take it to Apple first - they cover thermal under warranty. We service MacBooks that are out of warranty or whose owners would rather skip the wait." },
        { q: "Is overheating ever a sign of something worse?", a: "Yes - failing fan motor, swollen battery pressing on the heatsink, or in rare cases a logic board fault. We diagnose first; if it's deeper than dust + paste, we tell you and quote separately. No surprise bills." },
        { q: "Can you do this same day?", a: "Yes. Drop in by 1 PM, collect by 6 PM. Or WhatsApp for free pickup and we run it within the same day." },
        { q: "Do you clean the keyboard at the same time?", a: "Yes - included free with the thermal service. Compressed air through the keyboard, no extra charge." },
      ]}
      reviewNames={["Saeed Alam", "Anatoliy Tarasenko", "Daniel Vyskoc"]}
      related={[
        { label: "MacBook Repair Hub",          href: "/",            description: "All MacBook services in one place." },
        { label: "MacBook Battery Replacement", href: "/macbook-battery-replacement-dubai", description: "Swollen batteries cause heat. From AED 450." },
        { label: "MacBook Logic Board Repair",  href: "/macbook-logic-board-repair-dubai", description: "Component-level work when thermal isn't enough." },
      ]}
      blogLink={{ label: "Why your MacBook overheats in Dubai (and what actually fixes it)", href: "/blog/protect-macbook-dubai-summer-heat" }}
    />
  );
}
