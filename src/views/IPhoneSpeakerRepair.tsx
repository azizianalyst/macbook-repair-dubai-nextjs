"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";

export default function IPhoneSpeakerRepair() {
  return (
    <SubServicePageTemplate
      seoTitle="iPhone Speaker Repair Dubai - AED 250 | Same-Day | 055 741 3706"
      seoDescription="iPhone loudspeaker repair Dubai. Crackling, muffled or no sound. Free mesh clean first - most cases don't need a new speaker. AED 250 if replacement needed."
      path="/iphone-speaker-repair-dubai"
      eyebrow="iPhone speaker repair"
      h1="iPhone Speaker Repair Dubai"
      subtitle="Music sounds blown, ringtone is faint, speakerphone unusable. Often it's just lint and dust packed in the mesh - we clean for free first. If a new speaker is needed: AED 250, same day."
      startingPrice={250}
      timeline="Same day"
      whatsappPrefill="Hi, my iPhone speaker is faulty - model and symptom:"
      breadcrumb={[
        { name: "Home",          path: "/" },
        { name: "iPhone Repair", path: "/iphone-screen-repair-dubai" },
        { name: "Speaker Repair",path: "/iphone-speaker-repair-dubai" },
      ]}
      technician={{ name: "Shafeez", years: 12, specialisation: "iPhone audio and Face ID modules" }}
      serviceName="iPhone Speaker Repair"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>The honest first step</strong>: about 40% of "broken" iPhone speakers in Dubai are actually just packed with pocket lint, sand and dust. We clean the speaker mesh under a microscope free of charge before quoting any replacement. If sound returns, you walk out with no bill - only a clean phone and a recommendation to keep it out of dusty pockets.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed">
            If the speaker driver itself has failed (water damage, blown coil, dropped impact), AED 250 covers a fresh OEM-grade loudspeaker module, gasket reseat and a 90-day warranty. Same day on every iPhone from 7 through 17 Pro Max.
          </p>
        </>
      }
      whatWeFix={[
        "Crackling or distorted music playback",
        "Muffled, faint or one-sided ringtone",
        "Speakerphone calls unreadable",
        "No sound from bottom (loudspeaker) grille",
        "Stereo imbalance - one channel quieter than the other",
        "Water-damaged speaker after pool or beach",
        "Sand and lint clogging the speaker mesh",
        "Speakerphone cuts out under volume",
      ]}
      steps={[
        { title: "Microscope mesh inspection", body: "Free. We look at the speaker grille at 40× magnification. If it's lint, we extract it with a fine pick - no bill." },
        { title: "Driver test",                body: "If clean and still faulty, we drive a sweep tone through the speaker to confirm the coil is dead, not the audio IC on the board." },
        { title: "Replace loudspeaker module", body: "OEM-grade replacement, new gasket, torque-controlled screws to maintain water resistance on iPhone 7+." },
        { title: "Sound test + warranty card", body: "Music, ringtone, speakerphone all tested. 90-day written warranty handed to you with the phone." },
      ]}
      warrantyDays={90}
      warrantyBullets={[
        "Covers the speaker module and seal.",
        "Excludes new water damage after repair.",
        "Free re-clean within 90 days if mesh re-clogs.",
      ]}
      faqs={[
        { q: "How do I know if it's the speaker or the audio chip?", a: "If the earpiece (top) speaker also sounds wrong, or if the phone won't recognise headphones, it's likely the audio IC on the logic board - a different repair (around AED 600). The bottom speaker alone failing is almost always the speaker module itself." },
        { q: "Will a third-party speaker sound as good as original?", a: "Honestly, 95% as good. We use OEM-grade modules from the same Foxconn supplier chain. The 5% gap is the boost firmware Apple uses on factory speakers; tiny, only audible on side-by-side A/B with bass-heavy music." },
        { q: "Why did mine fail in Dubai specifically?", a: "Beach trips, pool exposure and the fine airborne dust here are the three killers. Even without water, sand grains work into the voice coil over a year or two and grind it." },
        { q: "Can you do the cleaning while I wait?", a: "Yes - 15 minutes. Walk-in to our Media City workshop, watch the inspection, walk out clean." },
        { q: "Does the speaker swap affect water resistance?", a: "Yes, slightly - we reseat with a fresh adhesive gasket but the original IP rating cannot be re-certified by anyone outside Apple. Treat the phone as splash-resistant, not pool-proof, after any speaker work." },
      ]}
      reviewNames={["Tim Quick", "B Parker", "Saeed Alam"]}
      related={[
        { label: "iPhone Earpiece Repair",       href: "/iphone-earpiece-repair-dubai",        description: "Top speaker, no sound on calls." },
        { label: "iPhone Microphone Repair",     href: "/iphone-microphone-repair-dubai",      description: "Other party can't hear you." },
        { label: "iPhone Water Damage Repair",   href: "/iphone-water-damage-repair-dubai",    description: "Salt and pool water specialists." },
      ]}
      blogLink={{ label: "Why Dubai sand kills iPhone speakers (and how to prevent it)", href: "/blog" }}
    />
  );
}
