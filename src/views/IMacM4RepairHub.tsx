"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";
import { Link } from "@/lib/router-compat";

export default function IMacM4RepairHub() {
  const intro = (
    <>
      <p>
        The{" "}
        <Link to="/imac-24-m4-2024-repair-dubai">iMac 24-inch M4 (late 2024)</Link> is the
        most recent iMac generation, powered by Apple's second-generation 3nm chip. The M4 brings
        a faster CPU and GPU over the M3, hardware ray tracing, and a new nano-texture glass
        option on higher-end configurations. It also introduced hardware support for Apple
        Intelligence. The chassis and 4.5K Retina display are unchanged from the M1 and M3
        generations.
      </p>
      <p>
        At 1 to 2 years old, the M4 iMac is almost certainly still covered by Apple's standard
        one-year warranty or an AppleCare+ plan. We strongly recommend checking your coverage
        status before booking any third-party repair, as a manufacturer warranty claim costs
        nothing for covered faults. You can check at checkcoverage.apple.com or in Settings,
        General, About on the machine itself. If your machine is out of warranty or has accidental
        damage that AppleCare+ covers with an excess, bring it in for a free diagnosis and we will
        advise on the most cost-effective path. The nano-texture glass option on premium M4 iMac
        configurations adds complexity to screen repairs, as the panel must be sourced and matched
        to avoid a visible difference in surface finish.
      </p>
    </>
  );

  return (
    <SubServicePageTemplate
      seoTitle="iMac M4 Repair Dubai - 24-inch 2024 Retina 4.5K"
      seoDescription="iMac M4 repair Dubai. 24-inch 4.5K Retina iMac with M4 chip (late 2024), nano-texture glass option. Free diagnosis. Almost certainly under Apple warranty - check first. Screen from AED 850. Call 055 741 3706."
      path="/imac-m4-repair-dubai"
      eyebrow="Apple M4 · 24-inch · Nano-texture glass option · 2024"
      h1="iMac M4 Repair Dubai - 24-inch 2024"
      subtitle="The M4 iMac (late 2024) is 1 to 2 years old and almost certainly under Apple warranty or AppleCare+. Free diagnosis first. If out of warranty, screen repair from AED 850."
      startingPrice={400}
      timeline="Same day (diagnosis) · 2-3 days (screen)"
      whatsappPrefill="Hi, I have an iMac M4 (24-inch 2024) and need help with:"
      breadcrumb={[
        { name: "Home", path: "/" },
        { name: "iMac Repair", path: "/imac-repair-dubai" },
        { name: "iMac M4 Repair", path: "/imac-m4-repair-dubai" },
      ]}
      technician={{ name: "Shafiq", years: 12, specialisation: "iMac and Mac desktop lead technician" }}
      serviceName="iMac M4 Repair Dubai"
      intro={intro}
      whatWeFix={[
        "Free diagnostic to check warranty status and identify the fault",
        "Screen repair and replacement - standard panel from AED 850, nano-texture from AED 1,050",
        "Logic board diagnosis and repair - from AED 1,100",
        "USB hub board replacement - rear port failures from AED 400",
        "Speaker replacement - from AED 500",
        "Nano-texture glass panel sourcing and matching",
        "Power supply board replacement - from AED 600",
      ]}
      steps={[
        {
          title: "Free diagnosis and warranty check",
          body: "We inspect the iMac and confirm your warranty status. For M4 machines, we always verify Apple coverage first. If you are covered, we advise you to use the Apple warranty at no charge. If not, we provide a written repair quote.",
        },
        {
          title: "Component repair or replacement",
          body: "For out-of-warranty machines, USB hub board and speaker work completes in 1 to 2 days. Screen replacements take 2 to 3 days, longer if a nano-texture panel must be sourced. All work is quoted in writing before it begins.",
        },
        {
          title: "Final quality test and cleanup",
          body: "All ports, speakers, and display output are verified before return. Nano-texture surface finish is inspected under directional light to confirm the match.",
        },
      ]}
      warrantyDays={365}
      warrantyBullets={[
        "Up to 12 months on most hardware repairs (keyboard, ports, hinge, fan, speaker, SSD/RAM).",
        "3 months on screen and battery replacements.",
        "15 days on logic-board, liquid-damage, software and data-recovery work.",
        "Free re-diagnosis if the same fault recurs within the warranty period.",
      ]}
      faqs={[
        {
          q: "Is my M4 iMac still under Apple warranty?",
          a: "Almost certainly yes if purchased in late 2024. The standard Apple one-year warranty runs to late 2025. AppleCare+ extends coverage by one or two years. Check at checkcoverage.apple.com using your serial number. We verify this as part of every free diagnosis for M4 machines.",
        },
        {
          q: "What can go wrong with an M4 iMac?",
          a: "At this age, most faults are accidental - cracked or scratched screen from an impact, port damage from a connector being forced in at an angle, or liquid ingress from a spill. Hardware failures are rare but do occur: some early units reported intermittent connectivity issues and unusual fan behaviour after software updates. Bring it in for a free diagnosis and we will identify the cause.",
        },
        {
          q: "Does the nano-texture glass option cost more to repair?",
          a: "Yes. The nano-texture glass panel is an etched finish applied to the display and is a different part from the standard glass. If the screen needs replacement, we must source a matching nano-texture panel, which carries a higher parts cost and longer lead time. The price premium is typically AED 200 to AED 300 over a standard panel replacement.",
        },
        {
          q: "What does MacBook Repair Dubai charge for M4 iMac diagnosis?",
          a: "Diagnosis is free. We inspect the machine, verify warranty status, and provide a written quote at no cost. If you decide not to proceed with a repair, there is no charge. Our workshop is in Dubai Media City, call 055 741 3706 or message on WhatsApp to book.",
        },
      ]}
      reviewNames={["Fatima Al Zaabi", "James Mitchell"]}
      related={[
        {
          label: "iMac Screen Repair Dubai",
          href: "/imac-screen-repair-dubai",
          description: "4.5K Retina and nano-texture display repair.",
        },
        {
          label: "iMac Data Recovery Dubai",
          href: "/imac-data-recovery-dubai",
          description: "Recover files from a non-starting iMac.",
        },
        {
          label: "iMac Full Diagnostic Dubai",
          href: "/imac-full-diagnostic-dubai",
          description: "Comprehensive hardware and software check.",
        },
      ]}
      blogLink={{ label: "iMac vs Mac mini vs Mac Studio: Which to Buy", href: "/blog/imac-vs-mac-mini-vs-mac-studio" }}
    />
  );
}
