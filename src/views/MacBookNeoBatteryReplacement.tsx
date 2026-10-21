"use client";
// MacBook Neo battery replacement spoke. Facts only from docs/apple-lineup-2026-09-26.md:
// iFixit - battery in a tray held by 18 screws, swappable without parts-pairing warnings;
// Apple UAE battery service prices for Neo / Air M5 / Pro M5 (excl. VAT); iFixit MacBook Pro M5
// and MacBook Air M5 battery notes; Apple battery troubleshooting page for the Neo.
// NB: the old copy claimed a "BMS re-pair" step - iFixit found no pairing warnings, so it is gone.
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";
import { Link } from "@/lib/router-compat";

export default function MacBookNeoBatteryReplacement() {
  return (
    <SubServicePageTemplate
      seoTitle="MacBook Neo Battery Replacement Dubai - Free Health Check"
      seoDescription="MacBook Neo battery replacement in Dubai: free battery health check, warranty status first, 3-month warranty with 80% guarantee. WhatsApp 055 741 3706."
      path="/macbook-neo-battery-replacement-dubai"
      eyebrow="MacBook Neo · A18 Pro · 18-screw battery tray"
      h1="MacBook Neo Battery Replacement Dubai"
      subtitle="Battery draining fast, shutting down early or showing Service Recommended? We check battery health and Apple warranty for free, then replace the MacBook Neo battery at our Dubai Media City workshop."
      startingPrice={0}
      timeline="Free health check same day · repair time confirmed with your quote"
      whatsappPrefill="Hi, I need a MacBook Neo battery replacement:"
      breadcrumb={[
        { name: "Home",                path: "/" },
        { name: "MacBook Repair",      path: "/macbook-repair-dubai" },
        { name: "MacBook Neo Repair",  path: "/macbook-neo-repair-dubai" },
        { name: "Battery Replacement", path: "/macbook-neo-battery-replacement-dubai" },
      ]}
      technician={{ name: "Shafiq", years: 15, specialisation: "MacBook screens, batteries and water damage" }}
      serviceName="MacBook Neo Battery Replacement Dubai"
      quickAnswer={{
        question: "How much is a MacBook Neo battery replacement in Dubai?",
        answer:
          "Apple lists MacBook Neo battery service at AED 589, excluding VAT, in the UAE. We replace it in Dubai Media City after a free battery health check and quote on WhatsApp. iFixit found the battery sits in a tray held by 18 screws and swaps without parts-pairing warnings. Our warranty is 3 months with an 80% guarantee.",
      }}
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>Battery replacement is where the MacBook Neo&apos;s design pays off.</strong> iFixit&apos;s
            teardown found the battery sits in a tray held by 18 screws, and that it can be swapped without
            parts-pairing warnings, so a new battery is not flagged by macOS as an unknown part. You may read elsewhere
            that a Neo battery has to be &quot;paired&quot; to the logic board. iFixit found no pairing warning after a
            battery swap, so there is no pairing step in our quote.
          </p>

          <h2 className="text-[24px] md:text-[28px] mb-md mt-lg">How the Neo compares with other MacBooks</h2>
          <p className="text-[15px] leading-relaxed mb-md">
            On the MacBook Air M5, the battery is held with stretch-release adhesive and screws, and the logic board has
            to come out to reach it. On the 14-inch MacBook Pro M5, iFixit called battery replacement
            &quot;absurdly complex&quot;, because nearly every component has to come out first. Apple&apos;s own UAE
            battery prices, which exclude VAT, reflect the gap:
          </p>
          <div className="overflow-x-auto border border-border rounded-md bg-bg-card mb-md">
            <table className="w-full text-[14px] min-w-[420px]">
              <thead>
                <tr className="text-left border-b border-border">
                  <th className="px-md py-sm font-semibold">Model</th>
                  <th className="px-md py-sm font-semibold">Apple UAE battery service (excl. VAT)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border"><td className="px-md py-sm">MacBook Neo (13-inch, A18 Pro)</td><td className="px-md py-sm">AED 589 (Apple list)</td></tr>
                <tr className="border-b border-border"><td className="px-md py-sm">MacBook Air 13-inch (M5)</td><td className="px-md py-sm">AED 689 (Apple list)</td></tr>
                <tr className="border-b border-border"><td className="px-md py-sm">MacBook Air 15-inch (M5)</td><td className="px-md py-sm">AED 759 (Apple list)</td></tr>
                <tr><td className="px-md py-sm">MacBook Pro 14-inch (M5)</td><td className="px-md py-sm">AED 879 (Apple list)</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-[14px] text-text-muted mb-lg">
            Source: support.apple.com/en-ae, read on 26 September 2026. For other models see{" "}
            <Link to="/macbook-battery-replacement-dubai" className="text-accent underline underline-offset-2 hover:no-underline">MacBook battery replacement</Link>.
            Our own price is quoted on WhatsApp.
          </p>

          <h2 className="text-[24px] md:text-[28px] mb-md">Check first: is it really the battery?</h2>
          <p className="text-[15px] leading-relaxed mb-md">
            Open the Apple menu, then System Settings, then Battery, and look at Battery Health. You will see a
            maximum-capacity figure and a status of Normal or Service Recommended. A few rules of thumb:
          </p>
          <ul className="space-y-2 text-[15px] mb-md">
            <li>• <strong>Service Recommended, or capacity below 80%:</strong> the battery is worn and a replacement is
              justified.</li>
            <li>• <strong>Healthy reading but short runtime:</strong> look at what is running in the background and at
              screen brightness first. Apple publishes troubleshooting steps for MacBook Neo battery problems.</li>
            <li>• <strong>Sudden shutdowns with charge left:</strong> a sign of a failing cell, or of a charging fault,
              which we test separately.</li>
            <li>• <strong>Not charging at all:</strong> try another charger and cable. If nothing changes, see{" "}
              <Link to="/macbook-neo-a18-repair-dubai" className="text-accent underline underline-offset-2 hover:no-underline">MacBook Neo logic board repair</Link>{" "}
              for charging-path faults.</li>
          </ul>
          <p className="text-[15px] leading-relaxed mb-lg">
            WhatsApp us a screenshot of the Battery Health screen with your purchase date, and we will tell you whether
            it looks like a warranty claim, a paid replacement or a settings issue.
          </p>

          <h2 className="text-[24px] md:text-[28px] mb-md">Warranty before anything else</h2>
          <p className="text-[15px] leading-relaxed mb-lg">
            Apple put the MacBook Neo on sale on 11 March 2026, so most machines are still inside Apple&apos;s
            one-year limited warranty. A battery that fails early is a manufacturing defect, and Apple should handle it;
            we check your serial number for free and tell you if that is the case. Out of warranty, or with a battery
            that has simply worn, we fit a new one, charge it, confirm that macOS reads its health and cycle count
            correctly, and run it under load before you collect.
          </p>

          <h2 className="text-[24px] md:text-[28px] mb-md">Your data, and a swelling battery</h2>
          <p className="text-[15px] leading-relaxed mb-lg">
            A battery swap does not touch storage. The Neo&apos;s SSD is soldered to the logic board and stays where it
            is, so replacing the battery does not erase your files. We still ask for a Time Machine or iCloud backup
            before any repair, because a Mac that has been shutting down suddenly can have more than one fault. If the
            case is lifting, the trackpad feels stiff to click or the machine rocks on a flat desk, the battery may be
            swelling. Stop charging it, do not press on the case, and mention it when you message us so it is handled
            as a swollen cell. We assess it first, then quote.
          </p>
        </>
      }
      whatWeFix={[
        "Battery replacement (battery tray held by 18 screws)",
        "Free battery health and cycle-count check",
        "Service Recommended status on an out-of-warranty Neo",
        "Sudden shutdowns with charge remaining",
        "Not charging: charger, cable and charging-path diagnosis",
        "Fast drain: settings and background activity checked before any part",
      ]}
      steps={[
        { title: "Free health check",       body: "We read capacity, cycle count and Apple warranty status. If it is a warranty case, we send you to Apple." },
        { title: "Written quote",           body: "If the battery needs replacing, you get the price and time before anything is opened." },
        { title: "Battery replacement",     body: "Pentalobe case screws out, battery disconnected, the 18-screw tray removed and the new battery fitted." },
        { title: "Charge and load test",    body: "Full charge, health and cycle-count reading confirmed in macOS, and a load test before collection." },
      ]}
      warrantyDays={90}
      warrantyBullets={[
        "3 months on the replacement battery and the fitting.",
        "80% capacity guarantee within the warranty period.",
        "Physical and liquid damage after the repair are not covered.",
        "Written on your invoice.",
      ]}
      faqs={[
        {
          q: "How much does Apple charge to replace a MacBook Neo battery?",
          a: "Apple lists MacBook Neo battery service at AED 589, excluding VAT, on its UAE support site, on 26 September 2026. That is lower than Apple's figures for the MacBook Air M5 and MacBook Pro M5. We quote our own price on WhatsApp after a free health check.",
        },
        {
          q: "Does a new MacBook Neo battery need to be paired to the logic board?",
          a: "No. iFixit's teardown found the MacBook Neo battery, display, trackpad and Touch ID can be swapped without parts-pairing warnings. There is no pairing step in our quote, and we confirm that macOS reads the new battery's health and cycle count before you collect.",
        },
        {
          q: "How do I check my MacBook Neo battery health?",
          a: "Open the Apple menu, then System Settings, then Battery, and check Battery Health. It shows the maximum capacity and a status of Normal or Service Recommended. Below 80%, or Service Recommended, means a replacement is justified. Send us a screenshot on WhatsApp and we will advise.",
        },
        {
          q: "Is a MacBook Neo battery covered by Apple's warranty?",
          a: "A battery that fails because of a manufacturing defect is covered by Apple's one-year limited warranty, and the Neo only went on sale on 11 March 2026, so most are still covered. We check your serial number for free and send you to Apple when that is the right route.",
        },
        {
          q: "How long does a MacBook Neo battery replacement take?",
          a: "The battery sits in a tray held by 18 screws, so the job is far simpler than on the MacBook Air M5 or MacBook Pro M5. Because the Neo is a 2026 model, we confirm part availability first and give you the turnaround with the quote on WhatsApp.",
        },
      ]}
      reviewNames={["Henry Choong", "Jeanne Maingueux"]}
      related={[
        { label: "MacBook Neo Repair Dubai",          href: "/macbook-neo-repair-dubai",          description: "Every MacBook Neo repair in one place." },
        { label: "MacBook Neo Screen Repair Dubai",   href: "/macbook-neo-screen-repair-dubai",   description: "13-inch display replacement, AppleCare+ checked first." },
        { label: "MacBook Battery Replacement Dubai", href: "/macbook-battery-replacement-dubai", description: "Battery replacement for every MacBook Air and Pro." },
      ]}
      blogLink={{ label: "MacBook Neo battery replacement cost in the UAE", href: "/blog/macbook-neo-battery-replacement-cost-uae/" }}
    />
  );
}
