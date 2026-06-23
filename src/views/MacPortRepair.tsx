"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";

export default function MacPortRepair() {
  return (
    <SubServicePageTemplate
      seoTitle="Mac Mini, Studio & Pro Port Repair Dubai - TB4/TB5, HDMI | 055 741 3706"
      seoDescription="Mac desktop port repair Dubai. Thunderbolt 4/5, HDMI, Ethernet, USB-C/A, Mac Studio front ports. AED 400. 2 days. Free clean if that's all it needs."
      path="/mac-port-repair-dubai"
      eyebrow="Mac port repair"
      h1="Mac Mini, Studio & Pro Port Repair Dubai"
      subtitle="Thunderbolt 4 and 5 ports, HDMI, Ethernet, USB-C/A, the Mac Studio front-panel ports - all of them can fail from wear, debris or a bad cable. We diagnose first, free-clean if that's all it needs, replace the port assembly if it doesn't."
      startingPrice={400}
      timeline="2 days"
      whatsappPrefill="Hi, a port on my Mac isn't working - model and which port:"
      breadcrumb={[
        { name: "Home",            path: "/" },
        { name: "Mac Mini Repair", path: "/mac-mini-repair-dubai" },
        { name: "Port Repair",     path: "/mac-port-repair-dubai" },
      ]}
      technician={{ name: "Mohammed", years: 14, specialisation: "Mac desktop board-level port work" }}
      serviceName="Mac Mini, Studio and Pro Port Repair Dubai"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>Before we charge you for a port replacement we check the obvious.</strong> Roughly half the "broken Thunderbolt port" calls we get turn out to be debris in the port itself or a worn-out cable - five-minute fixes we don't bill for. The other half are real port failures that need the assembly replaced and the work is straightforward.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed">
            Mac Studio M4 Max ships with Thunderbolt 5 (TB5) front ports - newer, faster, and a different physical assembly to TB4. Mac Mini M4 Pro has TB5 too, on the rear. Mac Pro 2019 Intel has eight TB3 ports across MPX modules. We work on all of them. The board-level work is meticulous because Thunderbolt controllers don't tolerate sloppy soldering - we use a hot-air rework station and microscope, not a soldering iron and hope.
          </p>
        </>
      }
      whatWeFix={[
        "Thunderbolt 4 ports on Mac Mini M2 / M4 and Mac Studio M2 / M3 / M4",
        "Thunderbolt 5 ports on Mac Mini M4 Pro and Mac Studio M4 Max",
        "HDMI port on Mac Mini and Mac Studio (HDMI 2.1 on newer models)",
        "Ethernet (10GbE option on Mac Studio and Mac Pro)",
        "USB-C and USB-A on Mac Pro 2019 expansion",
        "Mac Studio front-panel SD card slot and USB-C ports",
      ]}
      steps={[
        { title: "Free port diagnostic",         body: "We check the cable, the device, then the port. Often the cable is the issue. Often debris is the issue. We don't quote a repair until we've ruled both out." },
        { title: "Free clean (if that's all it needs)", body: "Compressed-air clean of the port plus a careful pin inspection under microscope. Many ports are 'fixed' here, no charge." },
        { title: "Port assembly replacement",    body: "If the port itself has failed, we de-solder the old assembly and fit a tested replacement. Hot-air rework, no iron damage to surrounding components." },
        { title: "Cross-test all ports",         body: "After the swap we test every port on the same controller (TB ports come in pairs sharing a controller). Confirms no collateral damage." },
      ]}
      warrantyDays={365}
      warrantyBullets={[
        "warranty of up to 12 months on the port replacement work.",
        "Free clean is covered for 30 days - same debris won't bother you twice.",
        "Honest 'come back if the new port acts up' policy.",
      ]}
      faqs={[
        { q: "Is it really free if it's just dirty?", a: "Yes. Honest diagnosis is how we keep customers for years. About half the port jobs we see don't need a repair - and we tell you so. The other half are real and we quote them in writing." },
        { q: "How do I know it's the port and not the cable?", a: "Try the cable on a different device, and try a different cable on your Mac. If your cable works elsewhere and a different cable doesn't work on your Mac, the port is the issue. Or just bring both to us and we'll tell you in 5 minutes." },
        { q: "Can you fix a Thunderbolt 5 port on the new Mac Mini M4 Pro?", a: "Yes - we have TB5 assemblies in stock for the most common models and source others within 48 hours. The work itself is the same procedure as TB4." },
        { q: "What if the port damage spread to the Thunderbolt controller chip?", a: "Then it becomes a logic-board-level repair (different service, higher cost). We diagnose this for free first and tell you honestly which path you're on before any work begins." },
        { q: "Can a bad cable damage my Mac's port?", a: "Cheap or counterfeit USB-C/Thunderbolt cables can - they sometimes have wrong pin assignments that stress the controller. Stick to Apple, Anker, OWC, Belkin or Cable Matters for Thunderbolt cables." },
        { q: "Will my Mac need to come in for the diagnostic?", a: "Yes - five-minute job at our Media City workshop. For Mac Pro (heavy) we offer free pickup across Dubai mainland." },
      ]}
      reviewNames={["Ali Hassan", "Shah nawaz", "Marianne Chehade El Dfouni"]}
      related={[
        { label: "Mac Logic Board Repair", href: "/mac-logic-board-repair-dubai", description: "If the damage spread past the port itself." },
        { label: "Mac Not Turning On",     href: "/mac-not-turning-on-dubai",     description: "If a port short caused the Mac to die." },
        { label: "Mac Full Diagnostic",    href: "/mac-full-diagnostic-dubai",    description: "Free check across all ports and systems." },
      ]}
      blogLink={{ label: "Thunderbolt 4 vs Thunderbolt 5 - what changed and why it matters", href: "/blog/lightning-vs-usb-c-explained-2026" }}
    />
  );
}
