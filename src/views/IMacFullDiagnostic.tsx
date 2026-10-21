"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";

export default function IMacFullDiagnostic() {
  return (
    <SubServicePageTemplate
      seoTitle="iMac Full Diagnostic Dubai - Free 30-Point Check"
      seoDescription="Free iMac diagnostic in Dubai Media City: a 30-point hardware and macOS check with a written report and no obligation. Walk in or WhatsApp us today."
      path="/imac-full-diagnostic-dubai"
      eyebrow="iMac diagnostic"
      h1="Free iMac Full Diagnostic in Dubai: 30-Point Bench Check"
      subtitle="iMacs are heavy and awkward to move, so make the one trip count. WhatsApp us the model and symptoms first, then bring it to our Media City workshop - parking on site, 3 minutes from the Palm Jumeirah tram stop - and we run the 30-point check while you wait. A paid onsite visit is also possible, subject to technician availability and quoted on WhatsApp before booking."
      startingPrice={0}
      timeline="60 minutes at the workshop"
      whatsappPrefill="Hi, I'd like a free iMac diagnostic at your workshop - model and main concern:"
      breadcrumb={[
        { name: "Home",            path: "/" },
        { name: "iMac Repair",     path: "/imac-repair-dubai" },
        { name: "Free Diagnostic", path: "/imac-full-diagnostic-dubai" },
      ]}
      technician={{ name: "Mohammed", years: 14, specialisation: "iMac diagnostics across all years" }}
      serviceName="iMac Free Full Diagnostic Dubai"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>Free, no obligation, done while you wait.</strong> iMacs aren't laptops - nobody wants to move a 27" 5K iMac across town twice. Send us the model, serial and a short video of the fault on WhatsApp first and we tell you whether it sounds worth the trip. Bring it in, park on site at Concord Tower, and the 30-point check takes about an hour. If we find something, we quote in writing and you decide what happens next.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed">
            The check covers everything that goes wrong on an iMac: PSU health, fan and thermal behaviour under load, display brightness uniformity and colour, GPU stress test, every port, both speakers, the camera, drive SMART data and Fusion Drive split health, RAM hardware test, macOS support ceiling for your model, malware quick-scan, and a check for original vs replaced display. You walk away with a written one-page report.
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
        { title: "WhatsApp first, then walk in",  body: "Send the model and symptoms on WhatsApp, then walk in to our Media City workshop. No appointment needed, about 60 minutes, coffee on us." },
        { title: "Hardware bench tests",          body: "PSU voltage check, fan thermal load, GPU stress (Radeon or M-series), drive SMART data, RAM extended test." },
        { title: "Display + sensor check",        body: "Brightness uniformity across the 5K panel, original-vs-replacement detection, camera, Bluetooth, Wi-Fi, both speakers." },
        { title: "Software audit",                body: "macOS version vs your model's ceiling, malware quick-scan, login items audit, profiles audit, storage health." },
        { title: "Written report + price",        body: "One-page summary you can keep. If repair is needed, prices listed in writing. If not, we say so and leave you in peace." },
      ]}
      warrantyDays={15}
      warrantyBullets={[
        "Diagnostic itself is free - no warranty needed.",
        "Any repair you book carries our standard warranty of 15 days to 2 years.",
        "The check is genuinely free - no minimum spend, no obligation.",
      ]}
      faqs={[
        { q: "Is the diagnostic really free with no minimum?", a: "Yes. We'd rather tell you 'your iMac is fine, save your money' than charge you for an hour on the bench. Honest first contact builds long-term trust." },
        { q: "How long does the diagnostic take?", a: "Usually 60 minutes at the workshop. Allow 90 in case the check surfaces something we want to investigate further." },
        { q: "Can you fix it the same visit?", a: "At the workshop, software-side things often yes - virus removal, macOS reinstall, fan-noise software diagnosis. Anything that needs the iMac opened (PSU, GPU, SSD, RAM) we quote in writing first and start only once you agree." },
        { q: "Where do I bring the iMac, and is there parking?", a: "Office #45, 10th Floor, Concord Tower, Al Sufouh, Dubai Media City - a 3-minute walk from the Palm Jumeirah tram stop, with parking on site. Open Mon-Thu and Sat 9 am-7 pm, Friday 9 am-12 pm and 2 pm-7 pm, closed Sunday. If moving the iMac is not practical, we can quote a paid onsite visit on WhatsApp, subject to technician availability." },
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
