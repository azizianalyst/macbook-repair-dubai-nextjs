"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";

export default function MacBookSpeakerRepair() {
  return (
    <SubServicePageTemplate
      seoTitle="MacBook Speaker Repair Dubai - AED 400 | 1 Day | All Models"
      seoDescription="MacBook speaker repair Dubai. Blown drivers, distortion, water-damaged speakers, no sound from one side. AED 400, 1 day. Call 055 741 3706."
      path="/macbook-speaker-repair-dubai"
      eyebrow="MacBook speaker repair"
      h1="MacBook Speaker Repair Dubai"
      subtitle="Crackling at high volume, no sound from one side, distortion that wasn't there before. Speaker drivers are replaceable on every MacBook - same-week, AED 400."
      startingPrice={400}
      timeline="1 day"
      whatsappPrefill="Hi, my MacBook speaker has a problem - model and symptom:"
      breadcrumb={[
        { name: "Home",           path: "/" },
        { name: "MacBook Repair", path: "/" },
        { name: "Speaker Repair", path: "/macbook-speaker-repair-dubai" },
      ]}
      technician={{ name: "Shafeeq", years: 12, specialisation: "MacBook audio & speaker repair" }}
      serviceName="MacBook Speaker Repair"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>MacBook speaker repair in Dubai</strong> covers blown drivers (cone damage from sustained high-volume use), distortion at the top of the volume range (voice coil rubbing), no sound from one side (failed driver or cable), and water-damaged speaker assemblies (corrosion on the contacts). On 2016+ MacBook Pros the speakers are bonded to the top case but the drivers themselves are replaceable. AED 400 covers parts, labour and a 90-day warranty.
          </p>
          <p className="text-[16px] text-on-primary-muted leading-relaxed">
            We carry stock for MacBook Air M1/M2/M3, MacBook Pro 13/14/16 (Intel and M-series), and the older 2012-2015 MacBook Pros that still see daily use across Dubai.
          </p>
        </>
      }
      whatWeFix={[
        "No sound from one side (left or right speaker)",
        "Distortion or crackling at high volume",
        "Buzzing or rattling sound on bass-heavy audio",
        "Speakers worked yesterday, dead today",
        "Water-damaged speaker assembly (corroded contacts)",
        "Volume sounds muffled compared to before",
        "Click or pop on system startup",
        "Speakers play but at half normal volume",
      ]}
      steps={[
        { title: "Audio test bench", body: "Frequency sweep across both speakers, identify which driver, which frequency, and whether it's the speaker or the audio codec on the board." },
        { title: "Open the case", body: "Disconnect battery, lift the speaker assembly, inspect for liquid damage and physical impact." },
        { title: "Replace the driver", body: "New speaker module installed, contacts cleaned, cable reseated, gasket replaced for proper acoustic seal." },
        { title: "Verify with reference track", body: "Test with a known reference track on the bench. Both channels balanced, no distortion at full volume." },
      ]}
      warrantyDays={90}
      warrantyBullets={[
        "Covers speaker driver, cable and acoustic seal.",
        "Excludes new liquid contact after delivery.",
        "Free re-fit if distortion returns inside 90 days.",
      ]}
      faqs={[
        { q: "Can you fix just one side of the speakers, or does it have to be both?", a: "Either. If only one driver has failed, we replace that side only and save you money. If both are showing wear we recommend doing both at once - labour is mostly the same and you avoid coming back in 6 months." },
        { q: "Why does my MacBook speaker distort at high volume but not at low?", a: "Voice coil damage. The driver moves further at high volume and the damaged coil scrapes against the magnet - that's the rasp you hear. Driver replacement is the only fix; software EQ is a workaround, not a cure." },
        { q: "Is this water damage or just a dead speaker?", a: "If you've spilled liquid recently - even months ago - corrosion on the speaker contacts is a likely cause. We open and inspect free of charge before quoting." },
        { q: "Can you fix the audio jack at the same time?", a: "Yes. Headphone jack repair is AED 250 and shares the same disassembly, so we package both for AED 550 if you need both." },
        { q: "Will the new speakers sound the same as original?", a: "Yes - we use OEM-spec parts that match the original frequency response. Many shops sell cheap replacements that sound thin; we don't." },
        { q: "How loud should a MacBook Pro speaker be?", a: "Modern MacBook Pros (14\" and 16\") are genuinely loud - easily fill a small meeting room. If yours sounds quiet even at 100%, that's a sign of speaker wear or a software EQ misconfiguration. Free diagnosis." },
      ]}
      reviewNames={["David Boulos", "Anatoliy Tarasenko", "vinay menon"]}
      related={[
        { label: "MacBook Repair Hub",            href: "/",                  description: "All MacBook services in one place." },
        { label: "MacBook Water Damage Repair",   href: "/macbook-water-damage-repair-dubai",     description: "Liquid kills speakers first. From AED 450." },
        { label: "MacBook Logic Board Repair",    href: "/macbook-logic-board-repair-dubai",      description: "Audio codec faults - board-level fix." },
      ]}
      blogLink={{ label: "MacBook speakers crackling? Here's what's going on", href: "/blog/water-damage-macbook-immediate-action" }}
    />
  );
}
