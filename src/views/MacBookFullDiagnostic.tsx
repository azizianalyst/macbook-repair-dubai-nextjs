"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";

export default function MacBookFullDiagnostic() {
  return (
    <SubServicePageTemplate
      seoTitle="MacBook Full Diagnostic Dubai - FREE 30-Point Check | Report You Keep"
      seoDescription="Free MacBook diagnostic Dubai. 30-point comprehensive check: battery, screen, keyboard, ports, GPU, SSD, RAM, thermals, Wi-Fi. Report you keep. No obligation."
      path="/macbook-full-diagnostic-dubai"
      eyebrow="MacBook full diagnostic"
      h1="MacBook Full Diagnostic Service Dubai - Free"
      subtitle="A proper 30-point health check on your MacBook. Battery, screen, keyboard, ports, GPU, SSD, thermals, Wi-Fi. Written report you keep. No charge, no obligation."
      startingPrice={0}
      timeline="30 minutes"
      whatsappPrefill="Hi, I'd like to book a free MacBook diagnostic - model:"
      breadcrumb={[
        { name: "Home",           path: "/" },
        { name: "MacBook Repair", path: "/" },
        { name: "Full Diagnostic", path: "/macbook-full-diagnostic-dubai" },
      ]}
      technician={{ name: "Shafeeq", years: 12, specialisation: "MacBook diagnosis & QC" }}
      serviceName="MacBook Full Diagnostic (Free)"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>Free MacBook diagnostic in Dubai</strong> - every owner should book this once a year, especially if you're nearing the 3-4 year mark where batteries, fans, and SSDs start to age. We run a 30-point check on your MacBook and hand you a written report. <strong>No charge, no obligation, no upsell pressure.</strong> If everything is healthy, we'll tell you - that's a useful answer too.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed">
            Takes 30 minutes at the bench. Drop in to Internet City or WhatsApp for free pickup if you'd rather not wait in person. The report covers battery health, fan condition, thermal performance, screen pixel test, keyboard scan, port function, speaker test, camera, microphone, trackpad calibration, GPU under load, SSD SMART data, RAM test, Wi-Fi signal, Bluetooth - full checklist below.
          </p>
        </>
      }
      whatWeFix={[
        "Battery cycle count, design vs current capacity, swelling check",
        "Screen - dead pixels, backlight uniformity, True Tone calibration",
        "Keyboard - every key tested, including Touch Bar / Touch ID",
        "All ports - USB-C / Thunderbolt / MagSafe data + power negotiation",
        "Speakers - left, right, frequency sweep test",
        "Camera - image quality, microphone array",
        "Trackpad - click force, Force Touch, gesture detection",
        "Thermals - fan speed, paste condition, sustained-load temperatures",
        "GPU - discrete and integrated under stress test",
        "SSD - SMART health, write cycles, wear levelling, free space",
        "RAM - full memtest pass for stability",
        "Wi-Fi / Bluetooth - signal strength, throughput, connection quality",
      ]}
      steps={[
        { title: "Drop-in or pickup", body: "Walk in to Internet City, or WhatsApp for free pickup anywhere in Dubai mainland." },
        { title: "30-minute bench check", body: "We run our diagnostic suite - Apple Diagnostics, third-party tools, manual inspection. You can wait in our lounge or come back later." },
        { title: "Written report", body: "Printed checklist with pass / warning / fail on every item, plus notes from the technician on anything to watch." },
        { title: "No-pressure conversation", body: "If repairs are needed, we quote them. If not, you take the report and go. No fee either way." },
      ]}
      warrantyDays={15}
      warrantyBullets={[
        "Diagnostic accuracy guarantee - if a fault we cleared shows within 30 days, free re-check.",
        "Report is yours to keep - show it to AppleCare or insurance if needed.",
        "No diagnostic fee, ever - even if you never use us for repairs.",
      ]}
      faqs={[
        { q: "Why do you offer the diagnostic for free?", a: "Honest answer: it builds trust, and most MacBooks that get diagnosed have at least one issue worth knowing about. Some convert to paid repairs - most don't, and that's fine. We'd rather you know your MacBook's health and come back to us when something genuinely needs fixing." },
        { q: "Can I really walk away with the report and never use you again?", a: "Yes. No catch. We don't ask for a deposit, we don't store your card, we don't follow up with sales calls. The report is yours." },
        { q: "What's in the report exactly?", a: "12 main sections covering battery, screen, keyboard, ports, speakers, camera, trackpad, thermals, GPU, SSD, RAM, networking. Each gets pass / warning / fail with a brief note. Hand-signed by the technician who did the work." },
        { q: "Can you do this remotely?", a: "Some of it - battery health, SSD SMART, basic system info via TeamViewer for AED 100. But the full 30-point check needs the MacBook on our bench (port stress test, thermal probe, camera test). We recommend the in-person free version." },
        { q: "Will you find issues that aren't really problems?", a: "We don't pad the report to create work. A 92% capacity battery with 600 cycles gets a \"watch this in 6 months\" note, not a \"replace now\" recommendation. Fan running at 4,200 RPM at idle is a fail; at 1,800 it's a pass." },
        { q: "How accurate is the battery check vs Apple's?", a: "We use coconutBattery + Apple's own Battery Service indicator + cycle count + design capacity ratio + visible swelling check. More thorough than Apple Store's quick scan. We've caught swollen batteries that Apple's tool reported as healthy." },
        { q: "Should I bring my MacBook in even if it seems fine?", a: "If it's over 3 years old, yes - annually. Catches battery wear, dust accumulation, early SSD wear, and degraded thermal paste before they cause symptoms. The cost (zero) makes it worthwhile." },
        { q: "What if you find something I can't afford to fix right now?", a: "We give you the report and the priority order. \"Fix this in 3 months / fix this in a year / monitor this only.\" No pressure, no urgent-sounding language unless it's actually urgent (battery swelling, for example, is an actual fire risk and we'll say so)." },
      ]}
      reviewNames={["Polycarp", "Mariia Chymyrysova", "Saeed Alam"]}
      related={[
        { label: "MacBook Repair Hub",          href: "/",              description: "Parent hub - all MacBook services." },
        { label: "MacBook Battery Replacement", href: "/macbook-battery-replacement-dubai",  description: "Most-common follow-up to a diagnostic. From AED 450." },
        { label: "MacBook Overheating Fix",     href: "/macbook-overheating-fix-dubai",      description: "Second-most-common follow-up. AED 300." },
      ]}
      blogLink={{ label: "How to read a MacBook diagnostic report", href: "/blog/macbook-battery-health-check-guide" }}
    />
  );
}
