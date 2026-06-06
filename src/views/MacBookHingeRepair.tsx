"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";

export default function MacBookHingeRepair() {
  return (
    <SubServicePageTemplate
      seoTitle="MacBook Hinge Repair Dubai - AED 300 | Clutch & Lid Fix"
      seoDescription="MacBook hinge & clutch repair Dubai. Loose lid, stiff or broken hinge, cracked case. From AED 300, 1-2 days, 90-day warranty. Call 055 741 3706."
      path="/macbook-hinge-repair-dubai"
      eyebrow="MacBook hinge repair"
      h1="MacBook Hinge & Clutch Repair Dubai"
      subtitle="Lid won't stay up, hinge grinds, or the case is cracking near the clutch? We rebuild and replace MacBook hinge assemblies - from AED 300, most done in 1-2 days."
      startingPrice={300}
      timeline="1-2 days"
      whatsappPrefill="Hi, my MacBook hinge has a problem - model and symptom:"
      breadcrumb={[
        { name: "Home",           path: "/" },
        { name: "MacBook Repair", path: "/" },
        { name: "Hinge Repair",   path: "/macbook-hinge-repair-dubai" },
      ]}
      technician={{ name: "Shafiq", years: 21, specialisation: "MacBook chassis & hinge repair" }}
      serviceName="MacBook Hinge Repair"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>MacBook hinge repair in Dubai</strong> covers a lid that won't stay open, a stiff or grinding clutch, a screen that won't close flush, and cracked bottom cases around the hinge mounts. The hinge (clutch) assembly also routes the delicate display flex cable - so a failing hinge often turns into a screen fault if left too long. We diagnose whether you need a hinge tightening, a new clutch assembly, or housing repair, and protect the cable in the process. AED 300 covers parts, labour and a 90-day warranty.
          </p>
          <p className="text-[16px] text-on-primary-muted leading-relaxed">
            We carry hinge hardware for MacBook Air M1/M2/M3, MacBook Pro 13/14/16 (Intel and M-series), and the older 2012-2015 Retina Pros where seized hinges are common.
          </p>
        </>
      }
      whatWeFix={[
        "Lid won't stay open / flops backward on its own",
        "Hinge feels stiff, grinds, or clicks when opening",
        "Screen won't close flush or sits uneven",
        "Cracked or lifting bottom case near the hinge",
        "Screen flickers when adjusting the angle (cable strain)",
        "Loose, wobbly screen that tilts side to side",
      ]}
      steps={[
        { title: "Free diagnosis", body: "We check hinge tension, the screw mounts, bottom case and the display flex cable for strain or damage." },
        { title: "Written quote", body: "Tighten, replace the clutch assembly, or repair the housing - you approve the exact price before any work starts." },
        { title: "Repair", body: "New clutch assembly or hinge hardware fitted, cracked mounts reinforced, and the flex cable re-routed and protected." },
        { title: "Quality test", body: "We cycle the lid through its full range and confirm a steady, flush close with no cable interference." },
      ]}
      warrantyDays={90}
      warrantyBullets={[
        "Covers the hinge/clutch assembly and fitment.",
        "Excludes fresh drop or impact damage after delivery.",
        "Free re-adjust if the lid loosens inside 90 days.",
      ]}
      faqs={[
        { q: "How much does MacBook hinge repair cost in Dubai?", a: "Hinge tightening and minor clutch work starts at AED 300. A full clutch/hinge assembly replacement runs AED 450-900 depending on model. If the bottom case is cracked around the mounts, housing repair is quoted separately after a free diagnosis." },
        { q: "Can a loose MacBook hinge damage the screen?", a: "Yes. A failing hinge strains the display flex cable that runs through the clutch, which can cause flickering, backlight issues or Flexgate-style faults. Fixing it early avoids a far costlier screen repair later." },
        { q: "Do you repair the hinge or replace the whole screen?", a: "In most cases we repair or replace just the hinge/clutch assembly - far cheaper than a full display. We only recommend a screen replacement if the panel or cable is already damaged." },
        { q: "How long does it take?", a: "Most hinge repairs are done in 1-2 days. If we need to order a model-specific clutch assembly it may take a little longer - we'll tell you up front." },
        { q: "My MacBook case is cracking near the hinge - is that related?", a: "Usually yes. A stiff or seized hinge puts stress on the bottom case until the mounts crack. We repair the housing and replace the hinge together so the problem doesn't return." },
      ]}
      reviewNames={["David Boulos", "Anatoliy Tarasenko", "vinay menon"]}
      related={[
        { label: "MacBook Screen Repair",     href: "/macbook-screen-repair-dubai",     description: "Cable strain from a bad hinge. From AED 600." },
        { label: "MacBook Logic Board Repair", href: "/macbook-logic-board-repair-dubai", description: "Board-level fixes when the cable damages more." },
        { label: "MacBook Full Diagnostic",   href: "/macbook-full-diagnostic-dubai",    description: "Not sure what's wrong? Free diagnosis." },
      ]}
    />
  );
}
