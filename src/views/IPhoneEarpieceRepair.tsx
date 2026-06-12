"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";

export default function IPhoneEarpieceRepair() {
  return (
    <SubServicePageTemplate
      seoTitle="iPhone Earpiece Repair Dubai - No Sound on Calls | AED 280"
      seoDescription="iPhone earpiece repair Dubai. Top-speaker fix for no sound on calls. Face ID-safe extraction on iPhone X and later. AED 280, 1 day. Call 055 741 3706."
      path="/iphone-earpiece-repair-dubai"
      eyebrow="iPhone earpiece repair"
      h1="iPhone Earpiece Repair Dubai - No Sound on Calls"
      subtitle="The other person sounds fine on speakerphone, but you can't hear them on a normal call. That's the earpiece - and on iPhone X+ it sits inside the Face ID assembly. We work around Face ID without breaking it. AED 280, 1 day."
      startingPrice={280}
      timeline="1 day"
      whatsappPrefill="Hi, no sound from my iPhone earpiece - model:"
      breadcrumb={[
        { name: "Home",            path: "/" },
        { name: "iPhone Repair",   path: "/iphone-repair-dubai" },
        { name: "Earpiece Repair", path: "/iphone-earpiece-repair-dubai" },
      ]}
      technician={{ name: "Shafiq", years: 15, specialisation: "iPhone Face ID & audio modules" }}
      serviceName="iPhone Earpiece Repair"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>The earpiece on iPhone X and later is sandwiched into the Face ID flex assembly</strong> at the top of the screen. Removing it carelessly - which is what most Dubai shops do - kills Face ID permanently. We use a Face ID-preserving extraction technique that keeps the original dot projector and flood illuminator in place. If we can't preserve Face ID, we tell you before opening the phone.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed">
            On iPhone 8 and earlier the earpiece is a separate part - easier and cheaper. On all models we charge AED 280 because the labour and care needed on iPhone X+ is significant; we don't bait-and-switch with a "from AED 150" headline.
          </p>
        </>
      }
      whatWeFix={[
        "No sound on phone calls (speakerphone works)",
        "Earpiece crackling or whispering",
        "Distorted voice from the top of the screen",
        "Face ID-adjacent earpiece replacement on iPhone X-17",
        "Earpiece dust mesh blockage (free clean first)",
        "Water-damaged earpiece after rain or sweat",
        "Earpiece flex damage after non-genuine screen install",
      ]}
      steps={[
        { title: "Confirm it's the earpiece",   body: "Plug in headphones - if voice is clear there, it's the earpiece, not the modem. We do this test free, in front of you." },
        { title: "Free mesh clean first",        body: "We extract dust from the earpiece grille at 40× magnification. About 25% of cases are solved here - no charge." },
        { title: "Face ID-safe extraction",      body: "On iPhone X+ we use heated thin tools to lift the earpiece without disturbing the dot projector cable. Patient, slow work." },
        { title: "Test calls + warranty",        body: "Test inbound and outbound calls, Face ID re-verified, 12-month warranty card handed to you." },
      ]}
      warrantyDays={365}
      warrantyBullets={[
        "Covers the new earpiece and proximity sensor area.",
        "Face ID protected - if we damage it, we pay for repair.",
        "Free re-test within 12 months if call audio degrades.",
      ]}
      faqs={[
        { q: "Why is the earpiece more expensive than the bottom speaker?", a: "Two reasons: it sits inside the Face ID assembly on iPhone X+ which requires careful handling, and the proximity-sensor flex runs alongside it. Mistakes here are expensive - we charge for the labour, not the part." },
        { q: "Will Face ID still work after the repair?", a: "Yes, on every job we've done in 2025 - we use a Face ID-preserving method. If for any reason we can't preserve it (e.g., previous botched repair already damaged the dot projector), we tell you before touching the phone and refund the diagnostic." },
        { q: "Could it be a software issue instead?", a: "Possible. We always update iOS and reset network/audio settings before opening the phone. About 5% of 'no earpiece sound' cases are fixed by a software reset - free of charge." },
        { q: "Same as the proximity sensor?", a: "On many iPhones the proximity sensor sits on the same flex. If both are failing, it's almost always the flex - we replace the whole assembly rather than guess." },
        { q: "Can I still hear ringtones?", a: "Ringtones come from the bottom loudspeaker, so usually yes. If you can't hear ringtones either, you've got two faults - see our speaker repair page." },
      ]}
      reviewNames={["Tim Quick", "Wellington Academy", "B Parker"]}
      related={[
        { label: "iPhone Speaker Repair",     href: "/iphone-speaker-repair-dubai",     description: "Bottom loudspeaker - ringtone and music." },
        { label: "iPhone Face ID Repair",     href: "/iphone-face-id-repair-dubai",     description: "Full Face ID diagnostic and repair." },
        { label: "iPhone Microphone Repair",  href: "/iphone-microphone-repair-dubai",  description: "When the other party can't hear you." },
      ]}
      blogLink={{ label: "Face ID and earpiece repair: how to avoid the Dubai shop trap", href: "/blog/iphone-screen-replaced-but-issues-after" }}
    />
  );
}
