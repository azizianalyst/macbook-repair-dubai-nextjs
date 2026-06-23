"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";

export default function IPadDataRecovery() {
  return (
    <SubServicePageTemplate
      seoTitle="iPad Data Recovery Dubai - Dead, Broken or Won't Turn On | From AED 349"
      seoDescription="iPad data recovery Dubai. Photos, notes and files off a dead, water-damaged or boot-looping iPad. Board-level repair-to-boot and chip-off. From AED 349. Call 055 741 3706."
      path="/ipad-data-recovery-dubai"
      eyebrow="iPad data recovery"
      h1="iPad Data Recovery Dubai"
      subtitle="Photos, notes and files trapped on a dead, water-damaged or boot-looping iPad. We repair the board just enough to boot and offload your data. From AED 349, 1-5 days."
      startingPrice={349}
      timeline="1-5 days"
      whatsappPrefill="Hi, I need data recovered from my iPad - model and what happened:"
      breadcrumb={[
        { name: "Home",          path: "/" },
        { name: "iPad Repair",   path: "/ipad-repair-dubai" },
        { name: "Data Recovery", path: "/ipad-data-recovery-dubai" },
      ]}
      technician={{ name: "Shafiq Ahmed", years: 21, specialisation: "Chip-off recovery & micro-soldering" }}
      serviceName="iPad Data Recovery Dubai"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>iPad data recovery in Dubai</strong> gets your photos, notes, documents and app data off an iPad that won&apos;t turn on, has water damage, or is stuck in a boot loop. Most of the time the storage itself is fine - it&apos;s the board around it that failed. We repair the power, charging or backlight fault just enough to boot the device once, then offload everything to a drive you keep. From AED 349, typically 1-5 days.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed">
            Free assessment first, and an honest one: modern iPads are hardware-encrypted, so recovery means getting <em>your</em> board running, not cloning a chip onto another device. If the data is genuinely unrecoverable - a failed NAND or a Secure-Enclave fault - we tell you before you spend a dirham.
          </p>
        </>
      }
      whatWeFix={[
        "iPad won't turn on - recover after a board-level power or charging fault",
        "Water-damaged iPad - clean the corrosion, boot once, offload the data",
        "Stuck on the Apple logo / boot loop - recover before any DFU restore",
        "Cracked / dead screen but iPad still runs - extract via the board",
        "Won't charge so it died with files on it - charging IC repair, then recovery",
        "Photos and notes not backed up to iCloud - the only copy is on the device",
        "iPad disabled after wrong passcodes (when you have the Apple ID to re-enable)",
      ]}
      steps={[
        { title: "Free assessment", body: "We diagnose why it won't boot and tell you, honestly, whether the data is recoverable and at what realistic success rate - before any charge." },
        { title: "Open quote", body: "A WhatsApp voice note with the plan, the price, and the success likelihood. You approve before any work starts." },
        { title: "Repair-to-boot", body: "We fix the board fault - power rail, charging IC, backlight or liquid corrosion - just enough to power the iPad up one stable time under microscope." },
        { title: "Offload + handover", body: "Your data is copied to a drive you keep, verified against the source, and handed back with the iPad. Nothing leaves the workshop." },
      ]}
      warrantyDays={15}
      warrantyBullets={[
        "No-recovery, no-fee on the recovery portion - if we get nothing, you pay nothing for it.",
        "We verify the recovered data is readable before you collect.",
        "Your data is wiped from our drives once you confirm you have it.",
      ]}
      faqs={[
        { q: "My iPad won't turn on at all - can you still recover the data?", a: "Usually, yes. A dead iPad is most often a board fault - a failed power rail, charging IC or backlight - not a failed storage chip. We repair the board enough to boot the device once and offload everything. We confirm at the free assessment whether yours is recoverable." },
        { q: "What does it cost?", a: "From AED 349, with the final price quoted after the free assessment. Simple cases (a charging or power fault) sit near the floor; complex liquid damage or board-level recovery runs higher. You approve the exact figure before any work - and the recovery itself is no-recovery, no-fee." },
        { q: "Is iPad data recovery guaranteed?", a: "No honest shop guarantees 100%. Modern iPads are hardware-encrypted, so recovery means getting your own board to boot - if the NAND or Secure Enclave itself has failed, the data may be unrecoverable. We're upfront about the odds before you commit." },
        { q: "Can you recover an iCloud-locked or disabled iPad?", a: "Only when you can prove ownership and have the Apple ID to re-enable it. We do not and cannot bypass Activation Lock or Secure-Enclave encryption - that protection is exactly what keeps a stolen iPad worthless, and we won't touch a device you can't show is yours." },
        { q: "My iPad got wet - what should I do right now?", a: "Power it off, don't charge it, and don't put it in rice (that does nothing). Bring it in as soon as you can - the sooner we clean the corrosion, the better the odds of both recovering the data and saving the iPad. See iPad water damage repair." },
        { q: "Will my photos and notes come back, or just some files?", a: "If the board boots, you get everything that was on the device - photos, notes, documents, messages and app data - copied to a drive you keep. Partial recovery only happens when the storage itself is degrading, which we'd flag at assessment." },
      ]}
      reviewNames={["Saeed Alam", "Wellington Academy", "Janna Nurahmetova"]}
      related={[
        { label: "iPad Repair Hub",          href: "/ipad-repair-dubai",                 description: "Every iPad service in one place." },
        { label: "iPad Water Damage Repair", href: "/ipad-water-damage-repair-dubai",     description: "Liquid damage is the #1 cause of lost iPad data." },
        { label: "iPad Logic Board Repair",  href: "/ipad-logic-board-repair-dubai",      description: "Fix the board fault behind a dead iPad. From AED 449." },
      ]}
      blogLink={{ label: "Recovering data from a dead device: what's actually possible", href: "/blog/data-recovery-broken-macbook-2026" }}
    />
  );
}
