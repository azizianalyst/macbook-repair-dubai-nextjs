"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";

export default function MacNotTurningOn() {
  return (
    <SubServicePageTemplate
      seoTitle="Mac Mini, Studio & Pro Not Turning On Dubai | 055 741 3706"
      seoDescription="Mac desktop won't turn on? Power supply, SMC reset, Mac Pro diagnostic LEDs, Mac Studio PSU. From AED 400. 1-3 days. Free diagnostic first."
      path="/mac-not-turning-on-dubai"
      eyebrow="Mac no power"
      h1="Mac Mini, Studio & Pro Not Turning On Dubai"
      subtitle="No fan, no chime, no light - Mac dead. Could be power supply, could be SMC, could be a logic board fault. Mac Pro 2019 has diagnostic LEDs that point us straight at the cause. Free diagnosis first, written quote second, work third."
      startingPrice={400}
      timeline="1-3 days"
      whatsappPrefill="Hi, my Mac won't turn on - model and what's happening:"
      breadcrumb={[
        { name: "Home",            path: "/" },
        { name: "Mac Mini Repair", path: "/mac-mini-repair-dubai" },
        { name: "Not Turning On",  path: "/mac-not-turning-on-dubai" },
      ]}
      technician={{ name: "Mohammed", years: 14, specialisation: "Mac desktop power and board diagnosis" }}
      serviceName="Mac Mini, Studio and Pro Not Turning On Dubai"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>Most "won't turn on" Macs split into three causes.</strong> Failed power supply (cheapest fix). Failed SMC controller or stuck SMC state (often a free reset, sometimes a chip swap). Logic board fault - usually power-delivery components around the SoC (more involved). The diagnostic process tells us which cause yours is, and that diagnostic is free.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed">
            Mac Pro 2019 is unusually transparent because Apple put diagnostic LEDs on the logic board itself - they tell us in seconds whether power is reaching the board, whether the chassis is detecting the SMC, and whether the boot ROM has loaded. Mac Mini and Mac Studio are less verbose but still diagnosable: we have power-rail probing routines that find the fault on most boards within 30 minutes. Honest result either way - sometimes it's a wall socket or cable, sometimes it's a real repair.
          </p>
        </>
      }
      whatWeFix={[
        "Mac Mini that's completely dead - no fan, no light, no chime",
        "Mac Studio dead-on-arrival or after a power event",
        "Mac Pro 2019 with diagnostic LEDs lit (we read what they mean)",
        "Mac that powers but won't complete boot",
        "SMC controller failures - won't power, won't sleep, won't wake",
        "Power supply faults across all Mac desktop models",
      ]}
      steps={[
        { title: "Free intake diagnostic",       body: "Bench test: known-good cable, known-good wall socket. Then we probe inside the chassis. 30 minutes to localise the cause on most Macs." },
        { title: "Identify the failed stage",    body: "Power supply, SMC, main power-delivery, or boot-rom load. The LED pattern on Mac Pro tells us directly. On Mac Mini and Studio we probe the rails." },
        { title: "Quote the fix in writing",     body: "PSU swap, SMC chip replacement, or component-level board work - each has a different price. You see it in writing before any work begins." },
        { title: "Repair + verify",              body: "Component sourced, fitted, board powered on bench, then in chassis, then 24-hour burn-in stress test before you collect." },
      ]}
      warrantyDays={15}
      warrantyBullets={[
        "6-month warranty on power-supply replacements.",
        "6-month warranty on SMC and component-level board work.",
        "Free re-attempt if the same fault recurs inside warranty.",
      ]}
      faqs={[
        { q: "Have I tried everything before bringing it in?", a: "Try a different cable and wall socket. On Mac Mini, hold the power button 10 seconds for an SMC reset. On Mac Pro, check the diagnostic LEDs through the side window. If none of that revives it, bring it in for the free diagnostic." },
        { q: "What do the Mac Pro diagnostic LEDs mean?", a: "They sit near the lower-rear of the logic board and tell you which boot stage the Mac reached. We can read them in 5 seconds and tell you whether the issue is PSU, board power, or boot ROM." },
        { q: "How much does a Mac Mini PSU cost to replace?", a: "Usually AED 400 labor plus AED 350-600 for the PSU depending on model. Total typically AED 750-1,000." },
        { q: "Could it just be the wall socket?", a: "Surprisingly often, yes - especially on multi-strip outlets where one socket has died. Try a different known-good wall outlet first. We've handed Macs back unmodified after this 5-minute check." },
        { q: "Is data safe if it's a power issue?", a: "Yes - power supply faults don't touch the SSD. Once we've fixed the power side, your data is exactly where you left it. The exception is M-series Macs where a board fault has killed the SoC: then SSD recovery becomes much harder." },
        { q: "Free pickup for Mac Pro?", a: "Yes - Mac Pro is heavy and awkward to transport. Free pickup and drop-off across Dubai mainland." },
      ]}
      reviewNames={["Ali Hassan", "Marianne Chehade El Dfouni", "Shah nawaz"]}
      related={[
        { label: "Mac Logic Board Repair", href: "/mac-logic-board-repair-dubai", description: "If the diagnosis points to board-level work." },
        { label: "Mac Data Recovery",      href: "/mac-data-recovery-dubai",      description: "If you also need data off a dead Mac." },
        { label: "Mac Full Diagnostic",    href: "/mac-full-diagnostic-dubai",    description: "Free 25-point check if you're unsure of the cause." },
      ]}
      blogLink={{ label: "What it means when your Mac Pro diagnostic LEDs are lit", href: "/blog/imac-not-turning-on-power-supply-issues" }}
    />
  );
}
