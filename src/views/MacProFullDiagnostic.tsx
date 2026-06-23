"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";

export default function MacProFullDiagnostic() {
  return (
    <SubServicePageTemplate
      seoTitle="Mac Pro Full Diagnostic Dubai - Pre-Purchase & Fault Check - AED 200"
      seoDescription="Mac Pro full diagnostic Dubai. Pre-purchase check, second opinion, fault isolation. Intel 2019 and M2 Ultra 2023. AED 200, waived if we do the repair. Free pickup. Call 055 741 3706."
      path="/mac-pro-full-diagnostic-dubai"
      eyebrow="Intel + M2 Ultra · AED 200 · waived on repair · pre-purchase check available"
      h1="Mac Pro Full Diagnostic Dubai - Pre-Purchase and Fault Check"
      subtitle="Mac Pro diagnostic in Dubai: AED 200, waived if we do the repair. Pre-purchase check for used Mac Pros. Fault isolation if something's wrong. Full written report. Free pickup from Dubai Media City."
      startingPrice={200}
      timeline="Same day (3-4 hours for full diagnostic)"
      whatsappPrefill="Hi, I would like a Mac Pro diagnostic. Model and reason:"
      breadcrumb={[
        { name: "Home", path: "/" },
        { name: "Mac Pro Repair", path: "/mac-pro-repair-dubai" },
        { name: "Mac Pro Full Diagnostic", path: "/mac-pro-full-diagnostic-dubai" },
      ]}
      technician={{ name: "Mohammed", years: 14, specialisation: "Mac Pro and high-end Mac repair specialist" }}
      serviceName="Mac Pro Full Diagnostic Dubai"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            A full Mac Pro diagnostic in Dubai is AED 200, waived if we carry out the repair, and takes 3 to 4 hours. Used Mac Pros circulate heavily in Dubai's creative and broadcast sector, so a pre-purchase check is the cheapest insurance available.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed mb-md">
            We check everything: PSU health (Intel), GPU module function (Intel), all PCIe slots, every Thunderbolt port, RAM health per DIMM (Intel) or unified memory health (M2 Ultra), storage health and read/write speed, thermals, and fan RPMs.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed">
            You get a written report with findings and repair recommendations. If we find nothing wrong, you pay AED 200 and leave with confidence. If we find something and you book the repair with us, the AED 200 is waived.
          </p>
        </>
      }
      whatWeFix={[
        "PSU voltage rails and output quality (Intel)",
        "MPX GPU module full function test (Intel)",
        "All Thunderbolt 3 ports (Intel) or Thunderbolt 4 ports (M2 Ultra)",
        "RAM integrity test per DIMM (Intel models)",
        "SSD health report with read/write speed",
        "Thermal sensor readings and fan RPMs",
        "Bluetooth and WiFi board function",
        "Display output quality and port handshake test",
      ]}
      steps={[
        {
          title: "Machine intake and pre-check",
          body: "We photograph the machine, note any existing cosmetic damage, and review the serial number for AppleCare status.",
        },
        {
          title: "Full diagnostic run",
          body: "3 to 4 hours. GPU, PSU, RAM, storage, thermals, ports, wireless. No repair is done at this stage without your approval.",
        },
        {
          title: "Written report and debrief",
          body: "We walk you through the findings, explain any faults, and provide repair pricing. You decide what to proceed with.",
        },
      ]}
      warrantyDays={0}
      warrantyBullets={[
        "Diagnostic fee AED 200.",
        "Fee waived if you book a repair with us in the same visit.",
        "Written report provided - keep it for your records.",
      ]}
      faqs={[
        {
          q: "What does the Mac Pro diagnostic cover?",
          a: "Intel Mac Pro: PSU, MPX GPU module, all Thunderbolt 3 ports, all 12 RAM slots, SSD, thermals, fans, PCIe slots, and display output. M2 Ultra Mac Pro: Thunderbolt 4 ports, HDMI 2.1, USB-A, fans, SSD, thermals, and M2 Ultra health indicators.",
        },
        {
          q: "Is the AED 200 fee waived if I get a repair?",
          a: "Yes. If you book any repair with us in the same visit, the AED 200 diagnostic fee is waived. You pay for the repair only.",
        },
        {
          q: "Can you do a pre-purchase check on a used Mac Pro I haven't bought yet?",
          a: "Yes. Bring the machine (and the seller if possible) and we run the full diagnostic. We will tell you what is wrong before you commit to buying. Many customers save thousands by discovering hidden faults before purchase.",
        },
        {
          q: "How long does the full diagnostic take?",
          a: "3 to 4 hours, same day. We do not rush the diagnostic. A thorough check takes time. Most customers drop off in the morning and collect in the afternoon.",
        },
      ]}
      reviewNames={["Binod Shrestha", "James Mitchell"]}
      related={[
        {
          label: "Mac Pro Repair Dubai",
          href: "/mac-pro-repair-dubai",
          description: "All Mac Pro repairs in Dubai.",
        },
        {
          label: "Mac Pro GPU Repair Dubai",
          href: "/mac-pro-gpu-repair-dubai",
          description: "MPX GPU module repair for Intel Mac Pro.",
        },
        {
          label: "Mac Pro Not Turning On Dubai",
          href: "/mac-pro-not-turning-on-dubai",
          description: "Dead Mac Pro power and PSU repair.",
        },
      ]}
      blogLink={{ label: "Mac Pro 2019: Still Worth It in 2026?", href: "/blog/mac-pro-2019-still-worth-it" }}
    />
  );
}
