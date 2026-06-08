"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";

export default function IPhonePowerButtonRepair() {
  return (
    <SubServicePageTemplate
      seoTitle="iPhone Power Button Repair Dubai - AED 280 | 1 Day"
      seoDescription="iPhone side/power button repair Dubai. Stuck, mushy or non-clicking. Apple Pay double-click restored. AED 280, 1 day. Call 055 741 3706."
      path="/iphone-power-button-repair-dubai"
      eyebrow="iPhone power button repair"
      h1="iPhone Power Button Repair Dubai"
      subtitle='Side button stuck, mushy or completely dead - also kills Apple Pay double-click confirmation. We replace the side-button flex and restore the click. AED 280, 1 day.'
      startingPrice={280}
      timeline="1 day"
      whatsappPrefill="Hi, my iPhone power/side button isn't clicking - model:"
      breadcrumb={[
        { name: "Home",              path: "/" },
        { name: "iPhone Repair",     path: "/iphone-repair-dubai" },
        { name: "Power Button",      path: "/iphone-power-button-repair-dubai" },
      ]}
      technician={{ name: "Shafeez", years: 12, specialisation: "iPhone mechanical and flex repair" }}
      serviceName="iPhone Power Button Repair"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>The side button on a modern iPhone does a lot</strong>: lock screen, double-press for Apple Pay, side+volume for screenshots, side+volume hold for emergency SOS, and on iPhone 16+ the new Action and Camera Controls live near it on a shared flex. When the click goes mushy or dies, all of these go with it. We replace the flex, AED 280, with a 90-day warranty.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed">
            Most failures are mechanical - the dome inside the button collapses after years of use, or impact damage from a drop has bent the metal frame around the button. We straighten the frame where possible (no extra charge) and replace the flex with the click mechanism in one visit.
          </p>
        </>
      }
      whatWeFix={[
        "Side button doesn't click",
        "Mushy or unresponsive press",
        "Sticks down after a drop",
        "Apple Pay double-click no longer works",
        "Screenshot combo (side + volume) fails",
        "Emergency SOS hold not registering",
        "Camera Control button on iPhone 16+ unresponsive",
        "Action button on iPhone 15 Pro / 16+ stuck",
      ]}
      steps={[
        { title: "Click test + frame check", body: "We feel the click and inspect the frame around the button for impact damage. Free." },
        { title: "Open and replace flex",    body: "Pentalobe screws out, screen lifted with care, side-button flex assembly removed and replaced." },
        { title: "Frame straightening",      body: "If the chassis around the button is bent, we gently restore it before installing the new flex - no extra charge." },
        { title: "Function tests",           body: "Lock, Apple Pay double-click, screenshot, SOS hold all verified. 90-day warranty card with the phone." },
      ]}
      warrantyDays={90}
      warrantyBullets={[
        "Covers the new side-button flex and click mechanism.",
        "Excludes further impact damage.",
        "Free re-fit if click softens within 90 days.",
      ]}
      faqs={[
        { q: "Will Apple Pay work again after this?", a: "Yes. Apple Pay double-click is purely a side-button function - restoring the click restores Apple Pay. Face ID and the Wallet app are not affected by the repair." },
        { q: "What about iPhone 15 Pro Action button?", a: "We replace the same flex assembly that includes the Action button. Your custom Action button mapping in Settings is preserved." },
        { q: "Can you fix a stuck-pressed button without replacing?", a: "Sometimes - if it's a piece of debris under the button cap, we extract it free. If the metal dome inside has collapsed, only replacement restores a proper click." },
        { q: "How long does the new mechanism last?", a: "OEM-grade flex with a metal dome rated for 100,000+ presses. In normal use, that's 5-7 years." },
        { q: "Will you damage the screen taking it apart?", a: "No - opening for side-button work doesn't require disconnecting the screen on most iPhones. We use suction, heat and patience. Original display preserved." },
      ]}
      reviewNames={["Tim Quick", "B Parker", "Wellington Academy"]}
      related={[
        { label: "iPhone Volume Button Repair", href: "/iphone-volume-button-repair-dubai", description: "Often shares the same flex strategy." },
        { label: "iPhone Vibration Motor Repair", href: "/iphone-vibration-motor-repair-dubai", description: "Taptic Engine repairs from AED 350." },
        { label: "iPhone Battery Replacement",   href: "/iphone-battery-replacement-dubai",   description: "OEM-cell batteries from AED 220." },
      ]}
      blogLink={{ label: "Side, Action, Camera Control: every button on your modern iPhone", href: "/blog" }}
    />
  );
}
