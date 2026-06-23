"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";

export default function IPhoneMicrophoneRepair() {
  return (
    <SubServicePageTemplate
      seoTitle="iPhone Microphone Repair Dubai - AED 300 | 1-Day Turnaround"
      seoDescription="iPhone microphone repair Dubai. Modern iPhones have 4 mics - we isolate which is broken. Often water-damage related. AED 300, 1 day. Call 055 741 3706."
      path="/iphone-microphone-repair-dubai"
      eyebrow="iPhone microphone repair"
      h1="iPhone Microphone Repair Dubai"
      subtitle={`"They can't hear me on calls" - but every modern iPhone has four microphones. We isolate which one has died before charging you. AED 300, 1 day, warranty of up to 12 months.`}
      startingPrice={300}
      timeline="1 day"
      whatsappPrefill="Hi, my iPhone microphone isn't working - model and when it happens:"
      breadcrumb={[
        { name: "Home",              path: "/" },
        { name: "iPhone Repair",     path: "/iphone-repair-dubai" },
        { name: "Microphone Repair", path: "/iphone-microphone-repair-dubai" },
      ]}
      technician={{ name: "Shafiq", years: 15, specialisation: "iPhone audio and water-damage repair" }}
      serviceName="iPhone Microphone Repair Dubai"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>Modern iPhones (X onwards) have four microphones</strong>: bottom (calls), back (video and noise capture), front above the camera (FaceTime), and a noise-cancelling mic near the SIM tray. The other party "not hearing you" can be any one of them depending on context - Voice Memos uses the bottom mic, FaceTime uses the front, video recording uses the back, and active noise cancellation routes through the noise mic.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed">
            We run a four-mic test in iOS to isolate the dead one before quoting. The bottom mic dies most often (water and lint). Back-camera mic comes second (drops). AED 300 covers any single microphone replacement, same workshop visit.
          </p>
        </>
      }
      whatWeFix={[
        "Voice Memos records silence (bottom mic)",
        "FaceTime calls - they can't hear you (front mic)",
        "Video has no sound (back mic)",
        "Active noise cancellation no longer working (noise mic)",
        "Siri can't hear you in a quiet room",
        "Speakerphone - your voice sounds underwater",
        "Mic-cutting after water exposure",
        "Mic intermittent - works some calls, not others",
      ]}
      steps={[
        { title: "Four-mic isolation test", body: "Voice Memos, FaceTime, video and Siri tests in front of you. We pinpoint which microphone(s) failed - free." },
        { title: "Open and clean",          body: "Open the phone, inspect mic ports for lint/sand. Free clean if debris is the cause." },
        { title: "Targeted replacement",    body: "Replace only the failed mic flex (often combined with charging port flex on iPhone X+ - same labour, no extra cost)." },
        { title: "Re-test all four",        body: "Confirm every mic working, log the results, hand over with warranty of up to 12 months." },
      ]}
      warrantyDays={365}
      warrantyBullets={[
        "Covers the replaced microphone module(s).",
        "Re-test free within 12 months if it cuts again.",
        "Excludes new water damage after the repair.",
      ]}
      faqs={[
        { q: "Could it be a software issue?", a: "Yes - about 10% of cases. Settings → Privacy → Microphone may have toggled an app off, or a stuck app permission can mute Voice Memos. We check this free before opening the phone." },
        { q: "Why is bottom mic so common?", a: "It sits next to the Lightning/USB-C port and is exposed to pocket lint, sweat and incidental water every day. The mesh clogs first, the membrane perforates next." },
        { q: "Are they all replaceable separately?", a: "On most iPhones the bottom mic is part of the charging port flex - replacing one replaces the other (same price). The front and back mics come with their respective camera/Face ID assemblies. We charge per repair, not per part." },
        { q: "Will Active Noise Cancellation work as before?", a: "Yes, with one caveat: if a non-OEM noise mic is installed, the algorithm calibration may be 5-10% less effective. We use OEM-grade parts only." },
        { q: "Can you save the data?", a: "We don't touch your data - microphone repair doesn't require any reset. Phone goes home with your apps, photos and settings exactly as you left it." },
      ]}
      reviewNames={["Tim Quick", "B Parker", "Wellington Academy"]}
      related={[
        { label: "iPhone Charging Port Repair", href: "/iphone-charging-port-repair-dubai", description: "Bottom mic often replaced with the port." },
        { label: "iPhone Water Damage Repair",  href: "/iphone-water-damage-repair-dubai",  description: "Most mic failures start here." },
        { label: "iPhone Speaker Repair",       href: "/iphone-speaker-repair-dubai",       description: "Two-way audio on the same visit." },
      ]}
      blogLink={{ label: "Four mics, one problem: diagnosing iPhone audio faults", href: "/blog/iphone-water-damage-action-plan" }}
    />
  );
}
