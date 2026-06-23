"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";

export default function MacMiniNoDisplay() {
  return (
    <SubServicePageTemplate
      seoTitle="Mac mini No Display Dubai? HDMI & Thunderbolt Fix - From AED 200"
      seoDescription="Mac mini powers on but no display? HDMI 2.0/2.1 port, Thunderbolt resolution handshake, display IC fault. All models. Free diagnosis. From AED 200. Call 055 741 3706."
      path="/mac-mini-no-display-dubai"
      eyebrow="All models · HDMI + Thunderbolt · same-day in most cases"
      h1="Mac mini No Display in Dubai? Black Screen Fix"
      subtitle="Mac mini powers on (LED lit, fan running) but monitor shows nothing? Usually the HDMI or Thunderbolt resolution handshake, not a dead Mac. 80% of cases fixed same-day."
      startingPrice={200}
      timeline="Same day (handshake/port) · 3-5 days (display IC)"
      whatsappPrefill="Hi, my Mac mini powers on but shows no display. Model and monitor type:"
      breadcrumb={[
        { name: "Home",              path: "/" },
        { name: "Mac mini Repair",   path: "/mac-mini-repair-dubai" },
        { name: "No Display",        path: "/mac-mini-no-display-dubai" },
      ]}
      technician={{ name: "Shafiq", years: 12, specialisation: "Mac mini logic board and power circuit repair" }}
      serviceName="Mac mini No Display Repair"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            When a Mac mini powers on but shows nothing on the display, the machine itself is almost always working. The power LED lights, the fan runs, and the login chime plays - but the monitor stays black. In the vast majority of cases this is a resolution handshake failure between the Mac mini and the monitor, not a dead machine.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed mb-md">
            The M2 Mac mini introduced HDMI 2.1 (the M1 uses HDMI 2.0). Some older monitors and HDMI switches cannot negotiate 2.1 correctly, resulting in a black screen. Switching to a Thunderbolt-to-DisplayPort cable often resolves this immediately. We test with our own reference cables before touching the hardware.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed mb-md">
            When cable and handshake tests fail, we move to port diagnosis. Physical HDMI port damage (from repeated cable changes or a bent connector) prevents signal entirely. Display IC faults on the logic board are less common but do occur on older Intel models. We identify the root cause and quote before any parts work begins.
          </p>
        </>
      }
      whatWeFix={[
        "HDMI port repair - physical damage, loose connector, no signal",
        "Thunderbolt port diagnosis - no display detected, resolution failure",
        "Display IC fault - board-level video output circuit",
        "HDMI cable test - we use our reference cables to isolate cable vs port vs monitor",
        "Resolution reset via SSH - recover access without display to change resolution",
        "GPU and display output circuit - Intel Mac mini graphics faults",
        "Monitor compatibility check - HDMI 2.0 vs 2.1 handshake troubleshooting",
      ]}
      steps={[
        { title: "Cable and monitor swap test",  body: "We test with our known-good HDMI and Thunderbolt cables, and a reference monitor. Isolates cable, port, and monitor faults quickly." },
        { title: "Port and resolution diagnosis", body: "Physical port inspection and resolution check via SSH if needed. Thunderbolt vs HDMI preference confirmed per model." },
        { title: "Hardware repair",              body: "Port repair or board-level display circuit work where needed. Load test and multi-monitor check before collection." },
      ]}
      warrantyDays={90}
      warrantyBullets={[
        "90-day written warranty on port and display circuit repairs.",
        "Free re-test if the same display fault recurs within warranty.",
        "Cable test included - no charge for the initial diagnosis.",
      ]}
      faqs={[
        { q: "How do I know if my Mac mini is on but the display is just off?", a: "Listen for the startup chime (or connect headphones). If you hear macOS boot sounds, the Mac is working. You can also SSH into the machine from another device on the same network to confirm it is running. If both confirm it is on, the fault is display output - not the machine itself." },
        { q: "Does a firmware reset fix no display on Mac mini?", a: "Sometimes. On M-chip machines, an SMC reset (hold power button 10 seconds) can clear a stuck display state. On Intel, an NVRAM reset (Cmd+Option+P+R at startup) can restore a corrupted display resolution setting. We try both before any hardware work." },
        { q: "HDMI vs Thunderbolt - which port works better on the M2 Mac mini?", a: "Thunderbolt via a USB-C to DisplayPort cable is generally more reliable for high-refresh monitors because it bypasses HDMI protocol negotiation entirely. The M2 Pro HDMI 2.1 port supports up to 8K at 60Hz, or 4K at up to 240Hz, when working correctly, but its handshake with older monitors can be temperamental. The base M2 uses HDMI 2.0 (4K at 60Hz)." },
        { q: "My M4 Mac mini has 2 front USB-C ports - which one do I use for the display?", a: "The 2 front USB-C ports on the M4 Mac mini support USB 3 data only - not video output. For display, use the two Thunderbolt 4 ports or the HDMI 2.1 port on the back. On the M4 Pro, use the three Thunderbolt 5 ports or HDMI on the back." },
      ]}
      reviewNames={["Ali Hassan", "Sarah Johnson"]}
      related={[
        { label: "Mac mini Repair Dubai",        href: "/mac-mini-repair-dubai",         description: "All Mac mini models and services." },
        { label: "Mac mini Not Turning On",      href: "/mac-mini-not-turning-on-dubai", description: "No power at all - different fault." },
        { label: "Mac mini M2 Repair",           href: "/mac-mini-m2-repair-dubai",      description: "M2-specific HDMI 2.1 issues." },
      ]}
      blogLink={{ label: "Mac mini No Display Over HDMI in Dubai?", href: "/blog/mac-mini-no-display-hdmi-dubai" }}
    />
  );
}
