"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";

export default function IMacRamUpgrade() {
  return (
    <SubServicePageTemplate
      seoTitle="iMac RAM Upgrade Dubai - 27-inch Intel up to 128GB | 055 741 3706"
      seoDescription="iMac RAM upgrade Dubai. 27-inch Intel iMac up to 128GB via back panel. 24-inch M-series RAM is soldered - we'll tell you honestly. AED 400 labor. Same day."
      path="/imac-ram-upgrade-dubai"
      eyebrow="iMac RAM upgrade"
      h1="iMac RAM Upgrade Dubai - 27-inch Intel up to 128GB"
      subtitle="27-inch Intel iMacs (2017-2020) take a real RAM upgrade through the back access door - up to 128GB on some models. 24-inch M1/M2/M3/M4 iMac RAM is soldered to the chip and cannot be upgraded by anyone. We tell you the truth before we touch anything."
      startingPrice={400}
      timeline="Same day (Intel) · Not possible (M-series)"
      whatsappPrefill="Hi, I'd like to upgrade RAM on my iMac - model and year:"
      breadcrumb={[
        { name: "Home",                path: "/" },
        { name: "iMac Repair",         path: "/imac-screen-repair-dubai" },
        { name: "RAM Upgrade",         path: "/imac-ram-upgrade-dubai" },
      ]}
      technician={{ name: "Mohammed", years: 14, specialisation: "iMac upgrades and board-level repair" }}
      serviceName="iMac RAM Upgrade"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>If you have a 27" Intel iMac from 2017, 2019 or 2020, RAM is one of the best upgrades you can buy.</strong> Apple ships these machines with as little as 8GB but they accept up to 64GB or 128GB depending on model. Doubling or quadrupling RAM transforms multitasking, Lightroom, Logic, virtualisation and Safari with twenty tabs.
          </p>
          <p className="text-[16px] text-on-primary-muted leading-relaxed">
            On the 24" M1, M2, M3 and M4 iMac the story is different. RAM is on the same package as the M-series chip - soldered, not upgradeable, ever. No shop in the world can change it. If you bought 8GB and need 16GB, the only honest path is selling it and buying a higher-RAM model. We will tell you that face to face rather than charge you for impossible work.
          </p>
        </>
      }
      whatWeFix={[
        "iMac 27-inch 2017 - upgrade up to 64GB DDR4",
        "iMac 27-inch 2019 / 2020 - upgrade up to 128GB DDR4",
        "iMac 21.5-inch 2017 - RAM door removed by Apple, board-level service possible",
        "Mixed-stick installations causing kernel panics",
        "Replacing failing RAM stick diagnosed by hardware test",
        "Free honest assessment if you have a 24-inch M-series iMac",
      ]}
      steps={[
        { title: "Confirm model and ceiling",     body: "We check your exact iMac via serial number and confirm the maximum supported RAM, the speed (2400 / 2666 MHz) and the recommended kit configuration." },
        { title: "Quality DDR4 sourced",          body: "We use Crucial, Kingston or Corsair DDR4 SO-DIMM modules matched to Apple's spec. No grey-market sticks." },
        { title: "Install through access door",   body: "Tilt the iMac, open the small RAM door behind the stand, install in matched pairs in the correct slots, refit the door." },
        { title: "Memory test + boot verify",     body: "We run an extended memory diagnostic, confirm the iMac sees the full amount in About This Mac, and stress-test before you collect." },
      ]}
      warrantyDays={365}
      warrantyBullets={[
        "1-year warranty on the RAM modules themselves.",
        "90-day warranty on the install workmanship.",
        "Free swap if a stick fails diagnostics inside warranty.",
      ]}
      faqs={[
        { q: "Can you upgrade RAM in my 24-inch M1, M2, M3 or M4 iMac?", a: "No, and nobody can. The RAM is fused to the M-series chip package. Anyone who claims otherwise is misleading you. We'll show you the teardown and explain your options honestly." },
        { q: "What's the maximum RAM for my 27-inch iMac?", a: "iMac 27-inch 2017 supports 64GB officially (some users run 128GB unofficially). iMac 27-inch 2019 and 2020 support 128GB officially with 32GB sticks. We'll confirm exactly for your serial." },
        { q: "Should I max it out or buy what I need?", a: "For Lightroom, Logic, Final Cut, virtual machines or heavy Safari use, 64GB is the sweet spot. 128GB is for Xcode, large 3D scenes or running multiple VMs." },
        { q: "Does upgrading RAM void Apple warranty?", a: "27-inch iMacs have a user-accessible RAM door - Apple explicitly allows owner upgrades. No warranty impact." },
        { q: "How long does the install take?", a: "Same day. Walk in, 30 minutes for the install, 30 minutes for the memory test. Total under an hour at our Media City workshop." },
        { q: "Can you bring the RAM to me?", a: "Yes - we offer a free home or office visit anywhere in Dubai mainland for iMac RAM installs. The desktop stays on your desk." },
      ]}
      reviewNames={["Shah nawaz", "Ali Hassan", "Marianne Chehade El Dfouni"]}
      related={[
        { label: "iMac SSD Upgrade",      href: "/imac-ssd-upgrade-dubai",      description: "Pair with RAM for the biggest speed jump." },
        { label: "iMac Full Diagnostic",  href: "/imac-full-diagnostic-dubai",  description: "Free check before any upgrade decision." },
        { label: "iMac Repair Hub",       href: "/imac-screen-repair-dubai",    description: "All iMac services in one place." },
      ]}
      blogLink={{ label: "27-inch iMac RAM ceilings - what each year really takes", href: "/blog" }}
    />
  );
}
