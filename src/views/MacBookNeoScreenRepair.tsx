"use client";
// MacBook Neo screen repair spoke. Facts only from docs/apple-lineup-2026-09-26.md: 13-inch
// A18 Pro MacBook (Apple, Mar 2026); iFixit: display swappable without parts-pairing warnings,
// pentalobe screws; Apple UAE: no published out-of-warranty screen price ("needs inspection"),
// AppleCare+ screen fee; owner reports of external-display scaling; Apple display troubleshooting page.
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";
import { Link } from "@/lib/router-compat";

export default function MacBookNeoScreenRepair() {
  return (
    <SubServicePageTemplate
      seoTitle="MacBook Neo Screen Repair Dubai - 13-inch Display"
      seoDescription="MacBook Neo screen repair in Dubai: cracked, lines, dead areas or no picture. Free diagnosis, AppleCare+ checked first, 90-day warranty. WhatsApp us."
      path="/macbook-neo-screen-repair-dubai"
      eyebrow="MacBook Neo · 13-inch display · A18 Pro"
      h1="MacBook Neo Screen Repair Dubai"
      subtitle="Cracked screen, lines, dead areas or no picture on your MacBook Neo? We replace the 13-inch display at our Dubai Media City workshop, after a free diagnosis and an AppleCare+ check."
      startingPrice={0}
      timeline="Free diagnosis same day · repair time confirmed with your quote"
      whatsappPrefill="Hi, I need a MacBook Neo screen repair:"
      breadcrumb={[
        { name: "Home",               path: "/" },
        { name: "MacBook Repair",     path: "/macbook-repair-dubai" },
        { name: "MacBook Neo Repair", path: "/macbook-neo-repair-dubai" },
        { name: "Screen Repair",      path: "/macbook-neo-screen-repair-dubai" },
      ]}
      technician={{ name: "Shafiq", years: 15, specialisation: "MacBook screens, batteries and water damage" }}
      serviceName="MacBook Neo Screen Repair Dubai"
      glassNotice
      quickAnswer={{
        question: "Can you replace a MacBook Neo screen in Dubai?",
        answer:
          "Yes. We replace cracked or faulty MacBook Neo displays in Dubai Media City after a free diagnosis. iFixit found the Neo's display can be swapped without parts-pairing warnings. Apple publishes no out-of-warranty Neo screen price; with AppleCare+, Apple lists screen damage at AED 189. We confirm part availability and quote on WhatsApp.",
      }}
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>A broken screen is the repair a MacBook Neo is best designed for.</strong> The Neo is Apple&apos;s
            13-inch A18 Pro MacBook, on sale since 11 March 2026, and iFixit&apos;s teardown found that its display is
            one of the parts that can be swapped without triggering parts-pairing warnings. In plain terms, a
            replacement display is not flagged by macOS as an unknown part. That is not true of every Apple product,
            and it makes an independent screen repair on the Neo a straightforward proposition.
          </p>

          <h2 className="text-[24px] md:text-[28px] mb-md mt-lg">Is it the screen, or something else?</h2>
          <p className="text-[15px] leading-relaxed mb-md">
            Before you pay for a display, two minutes of checks can save the cost:
          </p>
          <ul className="space-y-2 text-[15px] mb-md">
            <li>• <strong>Connect an external monitor.</strong> If the picture appears there, the Mac itself is running
              and the fault is in the display or its connection. If nothing appears anywhere, the problem is more likely
              power or the logic board; see{" "}
              <Link to="/macbook-neo-a18-repair-dubai" className="text-accent underline underline-offset-2 hover:no-underline">MacBook Neo A18 Pro repair</Link>.</li>
            <li>• <strong>Cracks, lines or dead areas</strong> that stay in the same place are physical panel damage.
              A replacement display is the fix.</li>
            <li>• <strong>Flicker or a dim picture</strong> can be a setting. Apple publishes troubleshooting steps for
              MacBook Neo display problems, and they are worth trying first.</li>
            <li>• <strong>Blurry or oddly scaled external displays</strong> are a known owner complaint on the Neo.
              That is usually a settings or cable matter, not a reason to replace the built-in screen.</li>
          </ul>
          <p className="text-[15px] leading-relaxed mb-lg">
            Still not sure? Send us a photo or a short video on WhatsApp and we will tell you what it looks like before
            you make the trip.
          </p>

          <h2 className="text-[24px] md:text-[28px] mb-md">AppleCare+ first, then us</h2>
          <p className="text-[15px] leading-relaxed mb-md">
            Apple does not publish an out-of-warranty screen price for the MacBook Neo in the UAE; for screen damage it
            says it needs to inspect the machine. It does publish AppleCare+ fees, excluding VAT:
          </p>
          <ul className="space-y-1 text-[15px] mb-md">
            <li>• With AppleCare+, Apple lists MacBook Neo screen damage at AED 189.</li>
            <li>• With AppleCare+, Apple lists enclosure damage at AED 189.</li>
          </ul>
          <p className="text-[15px] leading-relaxed mb-lg">
            If you have AppleCare+, that is almost always the better deal and we will say so after a free serial-number
            check. Apple&apos;s standard one-year warranty covers manufacturing defects, not a drop or a crushed lid. If
            you have no cover, we quote the display on WhatsApp once we have confirmed the part.
          </p>

          <h2 className="text-[24px] md:text-[28px] mb-md">How we replace a MacBook Neo display</h2>
          <p className="text-[15px] leading-relaxed mb-md">
            The case is closed with pentalobe screws, so the job starts with the right drivers and a battery disconnect
            before anything else is touched. The damaged display is removed and the replacement fitted and routed, then
            the Neo is closed up and tested with the lid open and shut: brightness, colour uniformity, a dead-pixel
            scan, and sleep and wake when the lid closes. You see it working before you pay.
          </p>
          <p className="text-[15px] leading-relaxed mb-lg">
            Because the Neo is a 2026 model, display parts reach independent workshops in stages. We confirm
            availability and turnaround when you WhatsApp us your serial number, rather than promising same-day stock
            we have not seen. For every other MacBook, see{" "}
            <Link to="/macbook-screen-repair-dubai" className="text-accent underline underline-offset-2 hover:no-underline">MacBook screen repair</Link>.
          </p>

          <h2 className="text-[24px] md:text-[28px] mb-md">What the free diagnosis checks, and your data</h2>
          <p className="text-[15px] leading-relaxed mb-lg">
            A drop rarely damages only the glass. During the free diagnosis we check the hinge action, whether the lid
            still sits flush when closed, whether the case is bent near the impact, and whether the keyboard, trackpad
            and ports still respond. That way the quote covers everything the drop affected, not just the panel. A
            display replacement does not touch the soldered storage, so your files stay where they are; we still
            recommend a Time Machine or iCloud backup first, as with any repair. If a new display alone will not fix
            the Mac, we tell you before any part is ordered.
          </p>
        </>
      }
      whatWeFix={[
        "Cracked or shattered display",
        "Lines, dead areas or dead pixels",
        "Display that stays black while an external monitor works",
        "Flicker or dim picture that survives Apple's troubleshooting steps",
        "Display damaged by a spill (with a board check)",
        "Lid and display damage after a drop",
      ]}
      steps={[
        { title: "Photo on WhatsApp",           body: "Send a photo or short video. We tell you whether it looks like the panel, and confirm part availability." },
        { title: "Free diagnosis + warranty",   body: "External-display test, damage check and an AppleCare+ lookup. If Apple should do it, we say so." },
        { title: "Display replacement",         body: "Written quote first, then the display is replaced with the battery disconnected throughout." },
        { title: "Test + return",               body: "Brightness, uniformity, dead-pixel scan and lid sleep/wake checked before collection." },
      ]}
      warrantyDays={90}
      warrantyBullets={[
        "90 days on the replacement display and the fitting.",
        "Dead pixels or display faults that appear within 90 days are covered.",
        "New accidental damage after the repair is not covered.",
        "Written on your invoice.",
      ]}
      faqs={[
        {
          q: "Can you replace a MacBook Neo screen in Dubai?",
          a: "Yes. We replace MacBook Neo displays at our Dubai Media City workshop after a free diagnosis. The Neo went on sale in March 2026, so we confirm part availability on WhatsApp before you book. Screen replacements carry our 90-day warranty.",
        },
        {
          q: "Does AppleCare+ cover a cracked MacBook Neo screen?",
          a: "Yes, for a fee. With AppleCare+, Apple lists MacBook Neo screen damage at AED 189, excluding VAT, on its UAE support site. Apple's standard one-year warranty does not cover accidental damage. We check your coverage for free and send you to Apple when that is the better deal.",
        },
        {
          q: "Will a replacement MacBook Neo screen show a parts warning?",
          a: "iFixit's teardown found the MacBook Neo display can be swapped without parts-pairing warnings, along with the trackpad, battery and Touch ID. That is one reason iFixit scored the Neo 6 out of 10 and called it the most repairable MacBook in 14 years.",
        },
        {
          q: "My external monitor looks blurry on the MacBook Neo. Is the screen faulty?",
          a: "No. Scaling problems on external displays are a known owner complaint on the Neo, and they involve the external monitor, not the built-in screen. Check display settings and try another cable first. If the built-in display itself shows lines or dead areas, that is a hardware fault.",
        },
        {
          q: "How much does Apple charge for a MacBook Neo screen out of warranty?",
          a: "Apple does not publish one. On its UAE support site, the only out-of-warranty MacBook Neo price Apple lists is battery service; for screens it says the machine needs inspection. We quote on WhatsApp after a photo and a free diagnosis.",
        },
      ]}
      reviewNames={["David Boulos", "Nihilius Nyx"]}
      related={[
        { label: "MacBook Neo Repair Dubai",              href: "/macbook-neo-repair-dubai",               description: "Every MacBook Neo repair in one place." },
        { label: "MacBook Neo Battery Replacement Dubai", href: "/macbook-neo-battery-replacement-dubai",  description: "18-screw battery tray, no pairing warnings." },
        { label: "MacBook Screen Repair Dubai",           href: "/macbook-screen-repair-dubai",            description: "Screen repair for every MacBook Air and Pro." },
      ]}
      blogLink={{ label: "MacBook Neo: worth buying in 2026?", href: "/blog/macbook-neo-worth-buying-2026" }}
    />
  );
}
