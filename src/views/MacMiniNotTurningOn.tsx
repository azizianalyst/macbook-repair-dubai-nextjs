"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";

export default function MacMiniNotTurningOn() {
  return (
    <SubServicePageTemplate
      seoTitle="Mac mini Not Turning On Dubai? Dead Mac mini Fixed - From AED 200"
      seoDescription="Mac mini not turning on in Dubai? Power LED off, fans spin then stop, no chime. Intel PSU failure, M-chip SMC reset, board fault. Free diagnosis. From AED 200. Call 055 741 3706."
      path="/mac-mini-not-turning-on-dubai"
      eyebrow="All models · Intel + M1/M2/M4 · same-day diagnosis"
      h1="Mac mini Not Turning On Dubai? Dead Mac Fixed"
      subtitle="Mac mini won't power on, no power LED, or fans spin then cut? Usually power supply (Intel), SMC firmware (M-chip), or a board fault. Free diagnosis. From AED 200."
      startingPrice={200}
      timeline="Same day (SMC/PSU) · 3-5 days (board)"
      whatsappPrefill="Hi, my Mac mini won't turn on. Model and year:"
      breadcrumb={[
        { name: "Home",              path: "/" },
        { name: "Mac mini Repair",   path: "/mac-mini-repair-dubai" },
        { name: "Not Turning On",    path: "/mac-mini-not-turning-on-dubai" },
      ]}
      technician={{ name: "Shafiq", years: 12, specialisation: "Mac mini logic board and power circuit repair" }}
      serviceName="Mac mini Not Turning On Repair"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            The most common cause of a Mac mini not turning on depends entirely on the chip generation. Intel Mac minis (2018 and earlier) have an internal power supply unit that degrades over time - when the PSU fails, the machine goes completely silent. M-chip Mac minis (M1, M2, M4) route power differently and the most frequent culprit is an SMC firmware state that gets stuck, which a proper reset resolves without any parts.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed mb-md">
            What not to do: do not keep pressing the power button repeatedly, and do not perform PRAM resets back to back. On M-chip machines, aggressive button sequences can put the firmware into a recovery mode that requires a second Mac to exit. If fans spin for a second then stop, or if you see a power LED flash and go dark, stop powering on and bring it to us.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed mb-md">
            Our free diagnosis process: we confirm the model by serial number, test with a known-good power cable and outlet, read the diagnostic LED behaviour, run SMC and Apple Diagnostics where accessible, and identify whether the fault is PSU, board-level, or firmware. You get a written quote before any work starts.
          </p>
        </>
      }
      whatWeFix={[
        "Power supply repair and replacement - Intel Mac mini 2018",
        "SMC reset and firmware recovery - M1, M2, M4 chip models",
        "Board-level power circuit fault - fuse, rail, or controller IC",
        "HDMI handshake check - often mistaken for not turning on when display is the fault",
        "Power cable and outlet verification - eliminated free as part of diagnosis",
        "No-chime diagnosis - whether audio or boot ROM fault",
      ]}
      steps={[
        { title: "Free power diagnosis",     body: "Known-good cable and outlet test first. LED behaviour read. SMC sequence confirmed. Serial number verified for model identification." },
        { title: "Root cause repair",        body: "PSU swap (Intel), SMC firmware recovery (M-chip), or board-level power circuit work. Clear written quote before parts are touched." },
        { title: "1-hour soak test under load", body: "Machine powered on and run under load for 60 minutes. Multiple sleep/wake cycles. Confirmed stable before collection." },
      ]}
      warrantyDays={90}
      warrantyBullets={[
        "90-day written warranty on PSU and board-level repairs.",
        "SMC and firmware work: covered for 90 days on the same fault.",
        "Free re-test if the machine fails to start again within warranty.",
      ]}
      faqs={[
        { q: "Mac mini fans spin then stop - what is this?", a: "A brief fan spin then shutdown usually means the machine is starting a POST (power-on self-test) and failing it. On Intel this points to a PSU delivering insufficient voltage or a RAM fault. On M-chip it is often an SMC state issue or a firmware recovery trigger. Either way, do not keep trying to power it on - bring it in." },
        { q: "Is it the power supply or the logic board?", a: "On Intel Mac minis these are separate components and we can test each in isolation. A PSU failure is typically cheaper to repair than a board fault. On M-chip there is no separate PSU - power management is on the logic board. We tell you which it is, and the cost, before any repair begins." },
        { q: "How do I know if my Mac mini is actually off versus in sleep?", a: "An M-chip Mac mini in sleep shows a white LED (if equipped) or no LED. A completely powered-off machine also shows no LED. The difference: pressing the power button on a sleeping machine wakes it within a second. If there is no response at all after 3 seconds, the machine is off or failed." },
        { q: "Does SMC reset fix a Mac mini that won't boot?", a: "Sometimes, yes. On M-chip machines, pressing and holding the power button for 10 seconds triggers an SMC reset. If the stuck state was the cause, the machine boots normally after. If it does not, the fault is hardware - PSU or board - and we take over from there." },
      ]}
      reviewNames={["Ali Hassan", "David Chen"]}
      related={[
        { label: "Mac mini Repair Dubai",   href: "/mac-mini-repair-dubai",         description: "All Mac mini models and services." },
        { label: "Mac mini No Display",     href: "/mac-mini-no-display-dubai",     description: "Powers on but no picture - different fault." },
        { label: "Mac mini M1 Repair",      href: "/mac-mini-m1-repair-dubai",      description: "M1-specific faults and pricing." },
      ]}
      blogLink={{ label: "Mac mini Not Turning On Dubai? 6 Fixes 2026", href: "/blog/mac-mini-not-turning-on-dubai" }}
    />
  );
}
