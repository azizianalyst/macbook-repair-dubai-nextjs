"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";

export default function MacBookMicrophoneRepair() {
  return (
    <SubServicePageTemplate
      seoTitle="MacBook Microphone Repair Dubai - AED 350 | Mic Not Working"
      seoDescription="MacBook microphone repair Dubai. Others can't hear you on calls, muffled mic, no sound input, water-damaged mic array. AED 350, 1-2 days. WhatsApp 055 741 3706."
      path="/macbook-microphone-repair-dubai"
      eyebrow="MacBook microphone repair"
      h1="MacBook Microphone Repair Dubai"
      subtitle="Nobody can hear you on Teams or FaceTime, your voice sounds muffled, or the input meter sits dead flat. The mic is fixable on every MacBook. From AED 350, usually 1-2 days."
      startingPrice={350}
      timeline="1-2 days"
      whatsappPrefill="Hi, my MacBook microphone isn't working - model and what happens on calls:"
      breadcrumb={[
        { name: "Home",            path: "/" },
        { name: "MacBook Repair",  path: "/" },
        { name: "Microphone Repair", path: "/macbook-microphone-repair-dubai" },
      ]}
      technician={{ name: "Shafiq", years: 21, specialisation: "MacBook audio & board-level repair" }}
      serviceName="MacBook Microphone Repair Dubai"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>MacBook microphone repair in Dubai</strong> covers the lot: nobody can hear you on a call, your voice comes through muffled or far away, the input level meter in System Settings never moves, or the mic worked fine until a spill. Every MacBook since 2018 uses a three-mic array near the speaker grilles, wired through a flex to the logic board. When one element fails or corrodes, input drops or distorts. We test it, find whether it's the mic module, the cable or the audio codec on the board, and fix it from <strong>AED 350</strong> with a warranty of up to 12 months.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed">
            Here's the catch, a dead mic isn't always hardware. Sometimes it's a macOS input setting, an app permission, or the audio codec rather than the mic itself. We diagnose before we quote, so you don't pay for a part you don't need. We've been on Apple hardware at Concord Tower, Dubai Media City since 2004, with 215+ Google reviews behind the bench.
          </p>
        </>
      }
      whatWeFix={[
        "Others can't hear you on Teams, Zoom or FaceTime",
        "Voice sounds muffled, distant or robotic",
        "Input level meter stays flat - no signal",
        "Mic cuts in and out during calls",
        "Built-in mic dead after a liquid spill",
        "Loud background hiss or static on recordings",
        "Mic works in one app but not another (after we rule out permissions)",
        "Voice memos and dictation pick up nothing",
      ]}
      steps={[
        { title: "Input test bench", body: "We check the mic array against a reference recording and confirm whether it's hardware or a macOS / codec issue. Free, before any quote." },
        { title: "Rule out the cheap fixes", body: "Input settings, app permissions and a codec reset get checked first. If software fixes it, you owe nothing for parts." },
        { title: "Replace the mic module", body: "If it's the array or flex, we fit a new module, clean any corrosion, and reseat the cable to the board." },
        { title: "Verify on a real call", body: "Tested with a live recording and a call before it leaves the bench - clear input, no hiss, full level." },
      ]}
      warrantyDays={365}
      warrantyBullets={[
        "Covers the microphone module, flex cable and the fit.",
        "Excludes new liquid contact after delivery.",
        "Free re-check if input drops again inside 12 months.",
      ]}
      faqs={[
        { q: "Is my MacBook mic broken, or is it just a setting?", a: "Could be either, and we check the free stuff first. macOS input source, app microphone permissions, and a stuck audio codec cause maybe a third of the 'dead mic' jobs we see. If it's one of those, we sort it and you pay nothing for parts. If the array's actually failed, repair starts at AED 350." },
        { q: "How much does MacBook microphone repair cost in Dubai?", a: "From AED 350 for a mic module replacement, parts and labour included and VAT-inclusive. If the fault is the audio codec on the logic board rather than the mic, that's a board-level repair quoted after diagnosis. Either way you get the written price on WhatsApp before we start." },
        { q: "Can you fix the mic if it stopped after a water spill?", a: "Usually yes. Liquid corrodes the mic contacts and the flex first because they sit near the speaker vents. We open it, clean the corrosion, replace the module, and check the board for spread - liquid never stops at one component, so we look wider before closing it up." },
        { q: "Will I lose my data during a microphone repair?", a: "No. A mic repair doesn't touch your SSD or macOS install - your files, apps and settings stay exactly as they are. We still recommend a backup before any hardware work as standard practice, and we can set one up for you if you haven't got one." },
        { q: "Do you repair the mic on older Intel MacBooks too?", a: "Yes. The single-mic and dual-mic setups on 2012-2017 MacBook Air and Pro are still serviceable, and we keep parts for them. Plenty of those machines are still in daily use across Dubai, and a mic fix is far cheaper than replacing the laptop." },
        { q: "How long does it take?", a: "Most microphone repairs are done in 1-2 days once we have the part, and we stock the common Air and Pro modules. Free pickup and delivery across Dubai mainland - WhatsApp the model and we'll arrange collection the same day." },
      ]}
      reviewNames={["Jen Hernandez", "Habeeb Rahman", "Matt White"]}
      related={[
        { label: "MacBook Speaker Repair",     href: "/macbook-speaker-repair-dubai",     description: "No sound out? Driver replacement from AED 400." },
        { label: "MacBook Water Damage Repair", href: "/macbook-water-damage-repair-dubai", description: "Spills kill the mic array first. From AED 450." },
        { label: "MacBook Logic Board Repair", href: "/macbook-logic-board-repair-dubai",  description: "Audio codec faults - board-level fix." },
      ]}
    />
  );
}
