"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";

export default function MacProNotTurningOnService() {
  return (
    <SubServicePageTemplate
      seoTitle="Mac Pro Not Turning On Dubai? Tower & Rack Fix - From AED 700"
      seoDescription="Mac Pro not turning on in Dubai? No power LED, power button does nothing, fans spin then stop. Intel PSU, M2 Ultra power board, Xeon W power delivery. Free diagnosis. From AED 700. Call 055 741 3706."
      path="/mac-pro-not-turning-on-dubai"
      eyebrow="Intel + M2 Ultra · PSU and power board · same-day diagnosis"
      h1="Mac Pro Not Turning On Dubai? Tower and Rack Fix"
      subtitle="Mac Pro not turning on in Dubai? Intel models have a modular, user-serviceable PSU (one of the only Macs where this is true). M2 Ultra power delivery is on the main board. Free diagnosis. From AED 700."
      startingPrice={700}
      timeline="Same day (diagnosis) · 3-7 days (PSU or board)"
      whatsappPrefill="Hi, my Mac Pro won't turn on. Model (Intel or M2 Ultra) and year:"
      breadcrumb={[
        { name: "Home", path: "/" },
        { name: "Mac Pro Repair", path: "/mac-pro-repair-dubai" },
        { name: "Mac Pro Not Turning On", path: "/mac-pro-not-turning-on-dubai" },
      ]}
      technician={{ name: "Mohammed", years: 14, specialisation: "Mac Pro and high-end Mac repair specialist" }}
      serviceName="Mac Pro Not Turning On Repair Dubai"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            Intel Mac Pro 2019: the PSU is a modular, field-replaceable unit. PSU failure is the most common cause of a dead Intel Mac Pro. The good news: replacing it does not require soldering.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed mb-md">
            M2 Ultra Mac Pro: power delivery is handled on the main logic board. Board-level component repair is possible but more involved.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed mb-md">
            Free diagnosis. Board-level power-fault repair starts at AED 700; full PSU replacement (Intel) is from AED 1,040; M2 Ultra board-level power repair from AED 1,200. The AED 700 floor covers board-level power-fault work where no PSU swap is needed.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed">
            Before anything else: check the power cable, surge protector, and wall outlet. Mac Pro draws significant current and a weak outlet or surge protector can cause a no-power symptom. We check these first, at no charge.
          </p>
        </>
      }
      whatWeFix={[
        "Intel Mac Pro PSU diagnosis and replacement",
        "M2 Ultra power board component-level repair",
        "Power cable and outlet check (free, no appointment needed)",
        "SMC reset (Intel)",
        "Board-level power fault repair",
        "Thunderbolt power fault (M2 Ultra)",
      ]}
      steps={[
        {
          title: "Power delivery diagnostic",
          body: "We measure PSU voltage rails (Intel) or board power rails (M2 Ultra). Result within 2 hours.",
        },
        {
          title: "PSU or board repair",
          body: "Intel: PSU replaced with compatible unit. M2 Ultra: faulty power components reflowed or replaced at board level.",
        },
        {
          title: "Load soak test",
          body: "1-hour test under full CPU and GPU load before handover to confirm stable power delivery.",
        },
      ]}
      warrantyDays={90}
      warrantyBullets={[
        "3 months parts and labour",
        "No fix no charge on diagnosis",
        "Intel PSU replacement carries 6-month warranty",
      ]}
      faqs={[
        {
          q: "How can I tell if it's the PSU or the logic board on an Intel Mac Pro?",
          a: "A failed PSU usually gives no power LED at all, no fan spin, and no chime. A board fault can give partial symptoms: fans spin briefly then stop, or power LED flickers. Our diagnostic measures voltage rails to isolate the fault.",
        },
        {
          q: "Can the Mac Pro power supply be replaced?",
          a: "Yes, on Intel Mac Pro 2019 models. The PSU is a discrete, modular unit. On the M2 Ultra Mac Pro, power delivery is integrated into the main board and cannot be replaced as a single unit.",
        },
        {
          q: "How much does Mac Pro PSU replacement cost in Dubai?",
          a: "Intel Mac Pro PSU replacement is from AED 1,040 including labour and 6-month warranty. Board-level power repair on M2 Ultra starts at AED 1,200.",
        },
        {
          q: "Mac Pro power button does nothing. Is that the PSU or the board?",
          a: "Usually the PSU on Intel models, or the power button cable. Our same-day diagnostic will isolate the exact component. Most 'does nothing' faults are PSU on Intel.",
        },
      ]}
      reviewNames={["Ali Hassan", "James Mitchell"]}
      related={[
        {
          label: "Mac Pro Repair Dubai",
          href: "/mac-pro-repair-dubai",
          description: "All Mac Pro repairs in Dubai.",
        },
        {
          label: "Mac Pro Intel Repair Dubai",
          href: "/mac-pro-intel-repair-dubai",
          description: "Intel Mac Pro 2019 repair hub including PSU and GPU.",
        },
        {
          label: "Mac Pro Full Diagnostic Dubai",
          href: "/mac-pro-full-diagnostic-dubai",
          description: "Comprehensive diagnostic for any Mac Pro fault.",
        },
      ]}
      blogLink={{
        label: "Mac Pro Not Turning On in Dubai? 6 Fixes 2026",
        href: "/blog/mac-pro-not-turning-on-dubai",
      }}
    />
  );
}
