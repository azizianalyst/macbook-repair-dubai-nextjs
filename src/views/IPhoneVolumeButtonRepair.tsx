"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";

export default function IPhoneVolumeButtonRepair() {
  return (
    <SubServicePageTemplate
      seoTitle="iPhone Volume Button Repair Dubai - AED 250 | 1 Day"
      seoDescription="iPhone volume up/down + ringer switch repair Dubai. Single flex covers all three - replaced together. AED 250, 1 day. Call 055 741 3706."
      path="/iphone-volume-button-repair-dubai"
      eyebrow="iPhone volume button repair"
      h1="iPhone Volume Button Repair Dubai"
      subtitle="Volume up, volume down and the ringer/silent switch all share one flex cable. When one fails, we replace the whole strip - no need to come back twice. AED 250, 1 day."
      startingPrice={250}
      timeline="1 day"
      whatsappPrefill="Hi, my iPhone volume buttons aren't working - model:"
      breadcrumb={[
        { name: "Home",            path: "/" },
        { name: "iPhone Repair",   path: "/iphone-screen-repair-dubai" },
        { name: "Volume Buttons",  path: "/iphone-volume-button-repair-dubai" },
      ]}
      technician={{ name: "Shafeez", years: 12, specialisation: "iPhone mechanical and flex repair" }}
      serviceName="iPhone Volume Button Repair"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>Volume up, volume down and the ringer/silent toggle</strong> all live on a single flex cable on the left side of every iPhone (iPhone 15 Pro and 16+ replace the toggle with a programmable Action button - same flex idea). When one button stops responding the others usually follow within weeks, so we replace the whole strip in one visit. AED 250, 90-day warranty.
          </p>
          <p className="text-[16px] text-on-primary-muted leading-relaxed">
            Common causes: a drop on the left edge bends the metal rail; long-term wear collapses the click dome; on iPhone 13 and later the ringer switch tab snaps off if forced past its detent. All fixed with one flex swap.
          </p>
        </>
      }
      whatWeFix={[
        "Volume up / down not responding",
        "Volume button stuck pressed",
        "Ringer / silent switch broken or stuck",
        "Action button (iPhone 15 Pro, 16+) unresponsive",
        "Volume buttons feel mushy",
        "Screenshot combo failing on the volume side",
        "Drop damage to the left edge",
        "After-water-damage button corrosion",
      ]}
      steps={[
        { title: "Test all three controls",  body: "Volume up, volume down, ringer toggle (or Action button). We confirm which are dead - usually all on the same flex." },
        { title: "Open and replace flex",    body: "Volume flex sits along the left side; we lift the screen, disconnect, swap the assembly." },
        { title: "Frame and rail check",     body: "If the chassis is bent from impact we restore it before installing the new flex - included." },
        { title: "Function tests + warranty",body: "Confirm volume slider responds, ringer toggle works, Action button mapping preserved. 90-day warranty card." },
      ]}
      warrantyDays={90}
      warrantyBullets={[
        "Covers the new volume flex and click mechanisms.",
        "Excludes new impact damage.",
        "Free re-test if buttons soften within 90 days.",
      ]}
      faqs={[
        { q: "Why replace the whole flex if only one button is dead?", a: "All three share one connector and one ribbon. Replacing only the dead button would mean splicing a flex - unreliable and not warranted by anyone reputable. The whole-flex swap costs the same as the part and gives you a like-new control set." },
        { q: "Will the Action button keep my custom mapping?", a: "Yes. The mapping lives in iOS settings, not in the flex. After the new hardware boots, your shortcut works exactly as before." },
        { q: "What if it's the ringer switch that broke off?", a: "Same flex. We replace it including the slider tab. AED 250 unchanged." },
        { q: "Can software cause this?", a: "Rarely. iOS volume HUD glitches can make the buttons appear unresponsive - we always restart and test before opening the phone. About 5% of cases are software-only and don't need a repair." },
        { q: "Same day possible?", a: "We schedule volume flex jobs for next-day to ensure we have your model's part in stock and a calm workbench. Faster than next-day risks rushing a delicate alignment." },
      ]}
      reviewNames={["Tim Quick", "Wellington Academy", "B Parker"]}
      related={[
        { label: "iPhone Power Button Repair",   href: "/iphone-power-button-repair-dubai",   description: "Side button + Apple Pay double-click." },
        { label: "iPhone Vibration Motor Repair",href: "/iphone-vibration-motor-repair-dubai",description: "Taptic Engine for haptics and ringer feedback." },
        { label: "iPhone Speaker Repair",        href: "/iphone-speaker-repair-dubai",        description: "If the ringer is silent even with toggle off." },
      ]}
      blogLink={{ label: "iPhone volume buttons explained: one flex, three controls", href: "/blog" }}
    />
  );
}
