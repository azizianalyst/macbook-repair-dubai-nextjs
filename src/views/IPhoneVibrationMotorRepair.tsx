"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";

export default function IPhoneVibrationMotorRepair() {
  return (
    <SubServicePageTemplate
      seoTitle="iPhone Vibration Motor Repair Dubai - Taptic Engine | AED 350"
      seoDescription="iPhone Taptic Engine replacement Dubai. No vibration, no haptic feedback, rattle inside. AED 350, 1 day, warranty of up to 12 months. Call 055 741 3706."
      path="/iphone-vibration-motor-repair-dubai"
      eyebrow="iPhone Taptic Engine"
      h1="iPhone Vibration Motor Repair Dubai - Taptic Engine"
      subtitle="No buzz on calls, no haptic on keyboard taps, or a worrying rattle when you shake the phone - that's the Taptic Engine. AED 350, 1 day, warranty of up to 12 months."
      startingPrice={350}
      timeline="1 day"
      whatsappPrefill="Hi, my iPhone vibration / Taptic Engine is broken - model:"
      breadcrumb={[
        { name: "Home",              path: "/" },
        { name: "iPhone Repair",     path: "/iphone-repair-dubai" },
        { name: "Taptic Engine",     path: "/iphone-vibration-motor-repair-dubai" },
      ]}
      technician={{ name: "Shafiq", years: 15, specialisation: "iPhone Taptic and haptic systems" }}
      serviceName="iPhone Taptic Engine Replacement Dubai"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>The Taptic Engine</strong> in every iPhone since the 7 is a precision linear actuator - far more sophisticated than the spinning eccentric motors of older phones. It produces every vibration, every keyboard tap haptic, every Apple Pay confirmation buzz. When it fails you don't just lose vibration on calls; you lose the entire feel of iOS.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed">
            Common failure modes: dropped phone shakes the magnet loose (you'll hear a rattle), water damage corrodes the coil contacts, or the unit simply ages out after 5+ years of constant use. Replacement is a 45-minute job with the phone open from the bottom. AED 350, including a warranty of up to 12 months.
          </p>
        </>
      }
      whatWeFix={[
        "No vibration on incoming calls",
        "No haptic feedback on keyboard typing",
        "Rattle sound when shaking the phone",
        "Apple Pay confirmation buzz missing",
        "Notification haptics dead",
        "Weak or distorted vibration",
        "Taptic Engine after water exposure",
        "After-drop Taptic looseness",
      ]}
      steps={[
        { title: "Settings + diagnostic test", body: "First we confirm Settings → Sounds & Haptics is on (about 8% of cases are software). Then run iOS Taptic test." },
        { title: "Open from bottom",           body: "Battery disconnect first, Taptic Engine sits next to it on the lower edge - direct access without lifting the screen." },
        { title: "Replace and align",          body: "OEM-grade Taptic Engine installed, screws torqued to spec to avoid vibration transfer to the chassis." },
        { title: "Test every haptic",          body: "Ringtone, keyboard, Apple Pay, system haptic. Warranty up to 12 months card with the phone." },
      ]}
      warrantyDays={365}
      warrantyBullets={[
        "Covers the new Taptic Engine module.",
        "Excludes water damage occurring after repair.",
        "Free retest within 12 months if vibration weakens.",
      ]}
      faqs={[
        { q: "Why does Taptic Engine cost more than older vibration motors?", a: "It's a high-precision component - a linear actuator with magnet, coil and tuned mass spring. The part itself costs us 4× a basic ERM motor, plus the calibration matters more on newer iPhones." },
        { q: "Is the rattle dangerous?", a: "Not immediately, but a loose Taptic Engine can damage adjacent flex cables over time and may eventually break free. Replace it sooner rather than later." },
        { q: "Will third-party haptic feel the same as original?", a: "Honestly, 90% identical. The waveform Apple uses is calibrated in iOS firmware, not the motor itself, so haptic patterns transfer correctly. The 10% difference is in peak G - slightly weaker on aftermarket parts." },
        { q: "Could it just be a software issue?", a: "Yes - Settings → Sounds & Haptics has separate toggles for ringer, system haptics and keyboard haptics. We always check first; if your settings just need toggling on, we don't charge." },
        { q: "Same day or next day?", a: "Next day - Taptic Engine alignment is delicate and we don't rush it. Drop in any time, collect the next afternoon." },
      ]}
      reviewNames={["Tim Quick", "B Parker", "Wellington Academy"]}
      related={[
        { label: "iPhone Battery Replacement",  href: "/iphone-battery-replacement-dubai",  description: "Often replaced on the same visit." },
        { label: "iPhone Volume Button Repair", href: "/iphone-volume-button-repair-dubai", description: "Adjacent flex, often related fault." },
        { label: "iPhone Water Damage Repair",  href: "/iphone-water-damage-repair-dubai",  description: "Common cause of Taptic failure." },
      ]}
      blogLink={{ label: "Taptic Engine: the unsung hero of iPhone feel", href: "/blog/iphone-air-design-engineering-marvel" }}
    />
  );
}
