"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";
import { Link } from "@/lib/router-compat";

export default function MacProM2UltraRepairHub() {
  return (
    <SubServicePageTemplate
      seoTitle="Mac Pro M2 Ultra Repair Dubai - 2023 First Apple Silicon Mac Pro"
      seoDescription="Mac Pro M2 Ultra repair Dubai (2023, A2915). First Apple Silicon Mac Pro. Thunderbolt 4, HDMI 2.1, no MPX slots. Logic board, port repair, fan service. From AED 400. Call 055 741 3706."
      path="/mac-pro-m2-ultra-repair-dubai"
      eyebrow="Apple M2 Ultra · 2023 · first Apple Silicon Mac Pro · no MPX GPU slots"
      h1="Mac Pro M2 Ultra Repair Dubai - 2023"
      subtitle="The M2 Ultra Mac Pro (2023) looks like the Intel model but inside it is completely different: M2 Ultra chip, no MPX GPU slots, no PCIe GPU expansion, no user-installed RAM. At 2 to 3 years old, check AppleCare+ first. Logic board repair from AED 3,250."
      startingPrice={400}
      timeline="Same day (diagnosis) · 5-10 days (board)"
      whatsappPrefill="Hi, I have a Mac Pro M2 Ultra 2023 and need help with:"
      breadcrumb={[
        { name: "Home", path: "/" },
        { name: "Mac Pro Repair", path: "/mac-pro-repair-dubai" },
        { name: "Mac Pro M2 Ultra Repair", path: "/mac-pro-m2-ultra-repair-dubai" },
      ]}
      technician={{ name: "Mohammed", years: 14, specialisation: "Mac Pro and high-end Mac repair specialist" }}
      serviceName="Mac Pro M2 Ultra Repair Dubai"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            The 2023 Mac Pro looks identical to the 2019 Intel model on the outside but is completely different inside. The M2 Ultra chip integrates the CPU and GPU onto a single SoC.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed mb-md">
            There are no MPX GPU slots and no PCIe GPU expansion. RAM is also soldered and not user-replaceable (up to 192GB unified memory, configured at purchase). PCIe slots are present but restricted to approved expansion cards.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed mb-md">
            The most common misunderstanding: customers expect to swap the GPU as they could on the Intel model. This is not possible on the M2 Ultra.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed">
            At 2 to 3 years old, check AppleCare+ status before booking any repair. See our <Link to="/mac-pro-m2-ultra-2023-repair-dubai">M2 Ultra 2023 dedicated repair page</Link> for model-specific detail.
          </p>
        </>
      }
      whatWeFix={[
        "Thunderbolt 4 port repair (8 ports, any can develop faults)",
        "HDMI 2.1 port repair",
        "USB-A port repair",
        "Fan service (dual fans, bearing wear common over time)",
        "Logic board component-level repair",
        "Full diagnostic",
        "GPU upgrade consultation (honest answer: not possible on this model)",
        "Data recovery from soldered SSD",
      ]}
      steps={[
        {
          title: "Intake and AppleCare check",
          body: "We verify AppleCare+ status first. If still covered, we can guide you to the right channel. If not, we proceed with our own diagnostic.",
        },
        {
          title: "Diagnosis",
          body: "Full port test (all 8 Thunderbolt 4, HDMI, USB-A), fan bearing check, logic board health scan. Written result same day.",
        },
        {
          title: "Repair and test",
          body: "Board-level repair or port replacement. 48-hour soak test before handover.",
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
          q: "Can I upgrade the GPU in the M2 Ultra Mac Pro?",
          a: "No. The GPU in the M2 Ultra is integrated into the M2 Ultra chip (SoC). It cannot be replaced or upgraded separately. Anyone offering a GPU upgrade for this model is not accurate.",
        },
        {
          q: "Can I add more RAM to the M2 Ultra Mac Pro?",
          a: "No. RAM is soldered to the M2 Ultra SoC and configured at purchase. The maximum is 192GB unified memory. It cannot be expanded after purchase.",
        },
        {
          q: "How is M2 Ultra Mac Pro repair different from Intel Mac Pro repair?",
          a: "Significantly different. Intel: modular GPU, replaceable RAM, serviceable PSU. M2 Ultra: SoC-integrated GPU, soldered RAM, board-level power delivery. Most repairs on the M2 Ultra are Thunderbolt or HDMI port issues, fan service, or logic board component work.",
        },
        {
          q: "Is the M2 Ultra Mac Pro still under warranty?",
          a: "If purchased in 2023, the standard one-year warranty may have lapsed. Check your AppleCare+ status at mysupport.apple.com before booking a repair. We will check this with you at intake.",
        },
      ]}
      reviewNames={["Binod Shrestha", "David Chen"]}
      related={[
        {
          label: "Mac Pro Repair Dubai",
          href: "/mac-pro-repair-dubai",
          description: "Hub page for all Mac Pro repair services.",
        },
        {
          label: "Mac Pro Intel Repair Dubai",
          href: "/mac-pro-intel-repair-dubai",
          description: "Intel Mac Pro 2019 with MPX GPU modules and PCIe expansion.",
        },
        {
          label: "Mac Pro M2 Ultra 2023 Repair Dubai",
          href: "/mac-pro-m2-ultra-2023-repair-dubai",
          description: "Dedicated repair guide for the 2023 M2 Ultra Mac Pro.",
        },
      ]}
      blogLink={{ label: "Mac Pro SSD Upgrade Dubai 2026: Storage Expansion Cost", href: "/blog/mac-pro-ssd-upgrade-dubai" }}
    />
  );
}
