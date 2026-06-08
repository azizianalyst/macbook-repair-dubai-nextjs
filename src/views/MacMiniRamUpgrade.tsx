"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";

export default function MacMiniRamUpgrade() {
  return (
    <SubServicePageTemplate
      seoTitle="Mac Mini RAM Upgrade Dubai - 2018 Intel Only | 055 741 3706"
      seoDescription="Mac Mini RAM upgrade Dubai. The 2018 Intel Mac Mini is the last upgradeable model - up to 64GB. M1/M2/M4 RAM is soldered. Honest answer first. AED 400."
      path="/mac-mini-ram-upgrade-dubai"
      eyebrow="Mac Mini RAM upgrade"
      h1="Mac Mini RAM Upgrade Dubai - 2018 Intel Only"
      subtitle="The 2018 Intel Mac Mini is the last Mac Mini Apple ever made with user-accessible RAM - and we still upgrade them every week. M1, M2, M2 Pro, M4 and M4 Pro Mac Minis have RAM fused to the chip and cannot be upgraded by anyone. We tell you the truth before we touch the machine."
      startingPrice={400}
      timeline="Same day (2018 Intel) · Not possible (M-series)"
      whatsappPrefill="Hi, I'd like a Mac Mini RAM upgrade - model and current RAM:"
      breadcrumb={[
        { name: "Home",            path: "/" },
        { name: "Mac Mini Repair", path: "/mac-mini-repair-dubai" },
        { name: "RAM Upgrade",     path: "/mac-mini-ram-upgrade-dubai" },
      ]}
      technician={{ name: "Mohammed", years: 14, specialisation: "Mac Mini and Mac Studio upgrades" }}
      serviceName="Mac Mini RAM Upgrade"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>If you have a Mac Mini 2018 Intel, you are in luck.</strong> Apple shipped these with as little as 8GB but the SO-DIMM slots accept up to 64GB of DDR4 SO-DIMM memory. We open the bottom shield, lift the antenna plate, swap both sticks in matched pairs and you walk out the same afternoon with quadrupled RAM.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed">
            For every other Mac Mini - M1, M2, M2 Pro, M4 and M4 Pro - the answer is short and honest: not possible. The RAM sits on the same package as the M-series chip, soldered down, and no shop in the world can change it. If you bought 8GB and need 16GB, the only paths are selling and buying the right model, or adding a fast Thunderbolt SSD as a swap-file workaround. We will tell you that face to face rather than charge you for impossible work.
          </p>
        </>
      }
      whatWeFix={[
        "Mac Mini 2018 Intel - upgrade up to 64GB DDR4 SO-DIMM",
        "Replacing failing RAM stick diagnosed by hardware test",
        "Mixed-stick installations causing kernel panics",
        "Free honest diagnosis if you have an M-series Mac Mini",
        "Recommendations on Thunderbolt SSD swap-file workarounds for soldered models",
        "Help choosing the right RAM kit (speed and timings)",
      ]}
      steps={[
        { title: "Confirm 2018 Intel by serial",   body: "Many M-series Mac Minis look identical from outside. We confirm the model by serial number before quoting." },
        { title: "Source matched DDR4 kit",        body: "Crucial, Kingston or Corsair DDR4-2666 SO-DIMMs in matched pairs. We avoid grey-market sticks." },
        { title: "Open shield + antenna plate",    body: "Bottom rubber base, metal shield, antenna plate and fan all come off carefully. RAM cage exposed." },
        { title: "Install + memory test",          body: "Sticks installed in correct slots. Reassembly. Then an extended memory test runs before you collect - confirms full amount visible and stable." },
      ]}
      warrantyDays={365}
      warrantyBullets={[
        "1-year warranty on the RAM modules themselves.",
        "90-day warranty on the install workmanship.",
        "Free swap if a stick fails diagnostics inside warranty.",
      ]}
      faqs={[
        { q: "Can you upgrade RAM in my M1, M2 or M4 Mac Mini?", a: "No, and nobody can. The RAM is on the M-series chip package, soldered. Anyone who claims they can do this is misleading you. We will show you the teardown photos and explain your honest options." },
        { q: "What's the maximum on the 2018 Intel Mac Mini?", a: "Officially 64GB. Two 32GB DDR4-2666 SO-DIMMs. We've never seen this configuration fail to boot." },
        { q: "Should I max it out?", a: "For Lightroom, Logic, Final Cut, virtual machines or running multiple Adobe apps, 32GB is the sweet spot. 64GB is for Xcode, large 3D scenes or running multiple VMs." },
        { q: "Does upgrading RAM void Apple warranty?", a: "Apple no longer covers the 2018 Intel Mac Mini under standard warranty (it's out of warranty by age). AppleCare ended years ago for these machines, so there's nothing to void." },
        { q: "How long does the install take?", a: "Same day. Walk in mid-morning, collect by late afternoon. The actual swap takes 30 minutes; the memory test runs another 60." },
        { q: "What if my fan or antenna gets damaged in the process?", a: "We use proper torque, anti-static handling and Apple's service guide. We've done hundreds of these without damage. If anything were to break in our hands, we replace it at our cost." },
      ]}
      reviewNames={["Shah nawaz", "Ali Hassan", "Marianne Chehade El Dfouni"]}
      related={[
        { label: "Mac SSD Upgrade",         href: "/mac-ssd-upgrade-dubai",         description: "Pair with SSD where the model allows it." },
        { label: "Mac Full Diagnostic",     href: "/mac-full-diagnostic-dubai",     description: "Free check before any upgrade decision." },
        { label: "Mac Mini Repair Hub",     href: "/mac-mini-repair-dubai",         description: "All Mac Mini services in one place." },
      ]}
      blogLink={{ label: "The honest list - which Mac Minis can be RAM-upgraded and which cannot", href: "/blog/mac-mini-running-slow-fix" }}
    />
  );
}
