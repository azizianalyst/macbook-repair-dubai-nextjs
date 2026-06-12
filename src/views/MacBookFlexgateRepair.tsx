"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";

export default function MacBookFlexgateRepair() {
  return (
    <SubServicePageTemplate
      seoTitle="MacBook Flexgate Repair Dubai - AED 450 | Backlight & Stage Light Fix"
      seoDescription="MacBook flexgate repair Dubai. Stage-light effect, backlight dies past 40 degrees, uneven brightness on 2016-2017 Pro. Display flex cable fixed from AED 450, 1-2 days."
      path="/macbook-flexgate-repair-dubai"
      eyebrow="MacBook flexgate repair"
      h1="MacBook Flexgate Repair Dubai"
      subtitle="Stage-light effect along the bottom, backlight that cuts out when you open the lid past 40 degrees, or a screen that's gone dark but still faintly shows an image. That's flexgate, and it's fixable. From AED 450."
      startingPrice={450}
      timeline="1-2 days"
      whatsappPrefill="Hi, I think my MacBook has flexgate - model year and what the screen does:"
      breadcrumb={[
        { name: "Home",            path: "/" },
        { name: "MacBook Repair",  path: "/" },
        { name: "Flexgate Repair", path: "/macbook-flexgate-repair-dubai" },
      ]}
      technician={{ name: "Shafiq", years: 21, specialisation: "MacBook display & board-level repair" }}
      serviceName="MacBook Flexgate Repair"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>Flexgate</strong> is a known display fault on the 2016 and 2017 MacBook Pro 13″ and 15″. Apple ran the display flex cables over the bottom bezel so they bend every time you open and close the lid. After a couple of years the cable cracks, and you get the classic signs: a row of bright vertical bars along the bottom of the screen (the "stage light" effect), or the backlight cutting out entirely once the lid passes roughly 40 degrees. The image is still there - shine a torch on a dark screen and you'll see your desktop. The fix is the display flex cable, and we do it from <strong>AED 450</strong> with a 3-month warranty.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed">
            Worth knowing: on the 2016-2017 models the flex is short by design, so a quality replacement cable solves it for good. On some later bonded panels the cable isn't separately serviceable and the full display assembly is the proper fix - we tell you which camp your MacBook is in before quoting. We've sorted these at Concord Tower, Dubai Media City since the fault first appeared, and it's one of the most satisfying repairs on the bench because the laptop looks written off and isn't.
          </p>
        </>
      }
      whatWeFix={[
        "Stage-light effect - bright vertical bars along the bottom",
        "Backlight cuts out when the lid opens past ~40 degrees",
        "Screen dark but image faintly visible under a torch",
        "Uneven brightness, brighter at the bottom edge",
        "Backlight flickering as you move the lid",
        "Display works on an external monitor but not the built-in screen",
        "Intermittent black screen that comes back when you tilt the lid",
        "Display assembly damaged from a previous bad repair",
      ]}
      steps={[
        { title: "Confirm it's flexgate", body: "We check the flex cable against the stage-light and lid-angle symptoms, and rule out the panel and backlight driver. Free diagnosis." },
        { title: "Quote on WhatsApp", body: "Written price first. Flex cable repair from AED 450; if your model needs a full display assembly instead, we quote that separately and honestly." },
        { title: "Replace the display flex", body: "New flex cable fitted with proper routing and slack so it doesn't crack again, or full assembly swap where the cable isn't serviceable." },
        { title: "Backlight and angle test", body: "Tested through the full lid range - flat brightness, no stage-light, backlight holding past 90 degrees - before it goes back to you." },
      ]}
      warrantyDays={90}
      warrantyBullets={[
        "Covers the display flex cable and the fit.",
        "Excludes new physical or liquid damage after delivery.",
        "Free re-fit if the backlight fault returns inside 3 months.",
      ]}
      faqs={[
        { q: "What exactly is flexgate on a MacBook Pro?", a: "It's a cracked display flex cable. On the 2016 and 2017 Pro, Apple ran the backlight cable over the lower bezel where it flexes every time you open the lid. The cable eventually fatigues and breaks, giving you the stage-light bars or a backlight that dies at certain lid angles. It's a design fault, not something you did wrong." },
        { q: "How much does flexgate repair cost in Dubai?", a: "From AED 450 for the display flex cable repair on the 2016-2017 Pro, parts and labour included and VAT-inclusive. Apple's fix was a full display assembly, which runs into the thousands. If your model genuinely needs the full assembly, we'll tell you and quote it - but most flexgate cases are the cable alone." },
        { q: "Will the stage-light effect come back after repair?", a: "Not with a proper repair. We fit a revised flex with enough slack that it doesn't bend over a sharp edge the way the original did. Apple themselves lengthened the cable on later builds for the same reason. You get our 3-month warranty on the fit, and we've had these hold for years." },
        { q: "My screen looks black - is it flexgate or a dead panel?", a: "Easy test: shine a phone torch at the dark screen. If you can faintly see your desktop, the panel and image are fine and it's the backlight - classic flexgate. If there's nothing at all, it may be the panel or the board. Bring it in or WhatsApp a video; the free diagnosis tells us for certain." },
        { q: "Do newer MacBooks get flexgate too?", a: "The 2016-2017 Pro is the worst affected. Apple quietly lengthened the flex on 2018-onward models, so it's rare after that. If a newer MacBook shows backlight problems, it's more likely the backlight driver on the board or panel damage - different fix, and we diagnose it the same free way." },
        { q: "How long does it take and do you collect?", a: "Most flexgate repairs are done in 1-2 days, and we stock the 13″ and 15″ flex cables. Free pickup and delivery across Dubai mainland - WhatsApp the serial and a photo of the screen fault, and we'll arrange collection the same day from Marina, JLT, Downtown or wherever you are." },
      ]}
      reviewNames={["Nicholas Dent", "Vasily Kuzminov", "Louis Austin"]}
      related={[
        { label: "MacBook Screen Repair",      href: "/macbook-screen-repair-dubai",      description: "Cracked or dead panel? From AED 600." },
        { label: "MacBook Hinge Repair",       href: "/macbook-hinge-repair-dubai",       description: "Stiff or broken lid hinge fixed." },
        { label: "MacBook Logic Board Repair", href: "/macbook-logic-board-repair-dubai", description: "Backlight driver faults, board-level." },
      ]}
      blogLink={{ label: "MacBook flexgate explained - causes, signs and the real fix", href: "/blog/macbook-flexgate-explained" }}
    />
  );
}
