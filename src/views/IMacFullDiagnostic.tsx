"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";

export default function IMacFullDiagnostic() {
  return (
    <SubServicePageTemplate
      seoTitle="iMac Full Diagnostic Dubai - Free 30-Point Check + Home Visit | 055 741 3706"
      seoDescription="Free iMac diagnostic Dubai with optional free home visit. 30-point hardware and macOS check. No obligation. Heavy iMac? We come to you."
      path="/imac-full-diagnostic-dubai"
      eyebrow="iMac diagnostic"
      h1="iMac Full Diagnostic Dubai - Free 30-Point Check, Home Visit Available"
      subtitle="iMacs are heavy, awkward to transport, and live on desks attached to a working setup. So we offer the diagnostic two ways: bring it to our Media City workshop, or book a free home visit anywhere in Dubai mainland and we run the 30-point check on your desk."
      startingPrice={0}
      timeline="60 minutes (workshop or home)"
      whatsappPrefill="Hi, I'd like a free iMac diagnostic - workshop or home visit, model and main concern:"
      breadcrumb={[
        { name: "Home",            path: "/" },
        { name: "iMac Repair",     path: "/imac-repair-dubai" },
        { name: "Free Diagnostic", path: "/imac-full-diagnostic-dubai" },
      ]}
      technician={{ name: "Mohammed", years: 14, specialisation: "iMac diagnostics across all years" }}
      serviceName="iMac Free Full Diagnostic"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>Free, no obligation, on your desk if you prefer.</strong> iMacs aren't laptops - moving a 27" 5K iMac across town for a diagnostic that might say "you don't need a repair" is a waste of everyone's afternoon. So we offer the same 30-point check at your home or office for free, anywhere in Dubai mainland. If we find something, we quote in writing and you decide what happens next.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed">
            The check covers everything that goes wrong on an iMac: PSU health, fan and thermal behaviour under load, display brightness uniformity and colour, GPU stress test, every port, both speakers, the camera, drive SMART data and Fusion Drive split health, RAM hardware test, macOS support ceiling for your model, malware quick-scan, and a check for original vs replaced display. You walk away (or sit down at your own desk) with a written one-page report.
          </p>
        </>
      }
      whatWeFix={[
        "'Just doesn't feel right' performance issues",
        "Multiple symptoms - figure out the root cause",
        "Pre-purchase check on a used iMac",
        "Post-third-party-repair sanity check",
        "Drive health and Fusion Drive cache wear",
        "Display originality and uniformity check",
        "macOS support ceiling for your specific model and year",
        "Honest 'this is end-of-life' or 'this has years left' verdict",
      ]}
      steps={[
        { title: "Choose workshop or home visit", body: "Workshop: walk in to our Media City workshop, 60 minutes, coffee on us. Home visit: we book a 90-minute slot anywhere in Dubai mainland - free." },
        { title: "Hardware bench tests",          body: "PSU voltage check, fan thermal load, GPU stress (Radeon or M-series), drive SMART data, RAM extended test." },
        { title: "Display + sensor check",        body: "Brightness uniformity across the 5K panel, original-vs-replacement detection, camera, Bluetooth, Wi-Fi, both speakers." },
        { title: "Software audit",                body: "macOS version vs your model's ceiling, malware quick-scan, login items audit, profiles audit, storage health." },
        { title: "Written report + price",        body: "One-page summary you can keep. If repair is needed, prices listed in writing. If not, we say so and leave you in peace." },
      ]}
      warrantyDays={90}
      warrantyBullets={[
        "Diagnostic itself is free - no warranty needed.",
        "Any repair you book carries our standard 90-day warranty.",
        "Home visit slot is genuinely free - no minimum spend, no obligation.",
      ]}
      faqs={[
        { q: "Is the home visit really free with no minimum?", a: "Yes. We'd rather come and tell you 'your iMac is fine, save your money' than have you transport it across town for a paid diagnostic. Honest first contact builds long-term trust." },
        { q: "How long is the home visit?", a: "We book a 90-minute slot - usually need 60 of those. Allow 90 in case the diagnostic surfaces something we want to investigate further." },
        { q: "Can you fix anything on the home visit?", a: "Software-side things yes - virus removal, macOS reinstall, fan-noise software diagnosis. Anything that needs the iMac opened (PSU, GPU, SSD, RAM) we book a workshop slot or free pickup." },
        { q: "Where in Dubai do you cover for free home visits?", a: "All Dubai mainland: Marina, JBR, Downtown, Business Bay, Jumeirah, Mirdif, Al Barsha, JLT, Discovery Gardens, Springs, Meadows, Arabian Ranches and others. Outside the mainland we charge transport at cost." },
        { q: "Do you keep a copy of my data during the diagnostic?", a: "No. Diagnostic is read-only - we don't reset, restore or copy anything from the iMac." },
        { q: "What if you find something I didn't expect?", a: "We tell you. Sometimes good news (Fusion Drive healthy, GPU fine, display original). Sometimes not. Either way, the report is in writing and you keep it whether you book a repair or not." },
      ]}
      reviewNames={["Shah nawaz", "Marianne Chehade El Dfouni", "Binod Shrestha"]}
      related={[
        { label: "iMac Not Turning On",    href: "/imac-not-turning-on-dubai",    description: "If the iMac is dead, this is the most common diagnosis route." },
        { label: "iMac Fan Cleaning",      href: "/imac-fan-cleaning-dubai",      description: "Most common follow-up after a noisy-fan diagnostic." },
        { label: "iMac SSD Upgrade",       href: "/imac-ssd-upgrade-dubai",       description: "Most common follow-up for slow Fusion Drive iMacs." },
      ]}
      blogLink={{ label: "What our 30-point iMac diagnostic actually checks", href: "/blog/imac-not-turning-on-power-supply-issues" }}
    />
  );
}
