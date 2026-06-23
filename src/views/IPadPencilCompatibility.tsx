"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";

export default function IPadPencilCompatibility() {
  return (
    <SubServicePageTemplate
      seoTitle="iPad Apple Pencil Compatibility Dubai - Pencil-Safe Screens"
      seoDescription="iPad screen replacements that preserve Apple Pencil compatibility. Pencil 1, 2, USB-C and Pro all tested. Dubai's most honest iPad screen specialist."
      path="/ipad-pencil-compatibility-dubai"
      eyebrow="iPad Pencil compatibility"
      h1="iPad Apple Pencil Compatibility Dubai - After Screen Repair"
      subtitle="Cheap iPad screens kill Apple Pencil. Ours don't. Read why this matters more than any other choice you make about your iPad screen repair."
      startingPrice={0}
      timeline="Part of screen repair"
      whatsappPrefill="Hi, I want a Pencil-safe iPad screen replacement - model and Pencil generation:"
      breadcrumb={[
        { name: "Home",                path: "/" },
        { name: "iPad Repair",         path: "/ipad-repair-dubai" },
        { name: "Pencil Compatibility",path: "/ipad-pencil-compatibility-dubai" },
      ]}
      technician={{ name: "Mohammed", years: 14, specialisation: "iPad screen and Pencil digitiser systems" }}
      serviceName="iPad Pencil-Safe Screen Replacement Dubai"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>This is the page Dubai iPad shops don't want you to read.</strong> When an iPad screen is replaced, there's a hidden component most customers never hear about: the active digitiser layer that talks to Apple Pencil. Cheap copy screens (which most Dubai shops fit because they cost AED 80 each) often skip the Pencil digitiser layer entirely - the iPad still shows pictures, touch still works for fingers, but Apple Pencil stops working forever.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed">
            We use only Pencil-compatible digitisers on every iPad screen we replace. The cost difference to us is significant; we absorb it because customers who paid for an iPad Pro with Apple Pencil deserve to keep using both. This page exists so you know what to ask when comparing quotes around Dubai - and why ours are higher than the cheapest option you'll see.
          </p>
        </>
      }
      whatWeFix={[
        "Apple Pencil 1 (Lightning charging) compatibility on iPad 6-9, Pro 9.7\", Pro 10.5\", Pro 12.9\" 1st/2nd gen, Air 3, mini 5",
        "Apple Pencil 2 (magnetic charging) on iPad Pro 11\"/12.9\" 3rd-6th gen, Air 4/5, mini 6",
        "Apple Pencil USB-C on iPad 10, iPad Air M2, iPad Pro M4",
        "Apple Pencil Pro on iPad Air M2/M3 and iPad Pro M4",
        "Pressure sensitivity preservation",
        "Tilt sensitivity preservation",
        "Palm rejection preservation",
        "Hover preview (Pencil 2 on M2+ iPads, Pencil Pro)",
      ]}
      steps={[
        { title: "Identify your Pencil",          body: "We confirm which Apple Pencil generation your iPad supports - Apple has shipped four different Pencils with overlapping iPad compatibility." },
        { title: "Source Pencil-compatible screen",body: "We never use copy screens that skip the digitiser. Our screens come from suppliers that include the full Pencil-compatible digitiser layer." },
        { title: "Calibration after install",     body: "Once the screen is installed, we test pressure, tilt, palm rejection and hover (where supported) with the actual Pencil before handover." },
        { title: "Written compatibility guarantee",body: "Your repair invoice explicitly states 'Apple Pencil compatibility preserved - 3-month guarantee'. If Pencil stops working, we re-do the screen at no charge." },
      ]}
      warrantyDays={90}
      warrantyBullets={[
        "Apple Pencil function explicitly guaranteed for 3 months.",
        "Pressure, tilt and palm rejection all covered.",
        "Free re-screen if Pencil function fails (cheap shops won't do this).",
      ]}
      faqs={[
        { q: "How can I tell if a Dubai shop is using a Pencil-safe screen?", a: "Ask them to write 'Apple Pencil compatibility guaranteed' on the invoice. Most won't. The cheapest screens (under AED 250 fitted) almost certainly skip the digitiser layer." },
        { q: "Why is the Pencil digitiser separate from the touchscreen?", a: "Apple Pencil uses an active electromagnetic resonance system separate from the capacitive touchscreen used by your finger. The digitiser layer sits between the LCD and the front glass and contains an antenna grid the Pencil resonates with. It costs ~AED 100 per screen at supplier price - hence the temptation to skip it." },
        { q: "Will my Pencil work normally with your screen?", a: "Yes - pressure, tilt, palm rejection, latency, hover (where your iPad supports it). We test every Pencil function in front of you at handover." },
        { q: "What if I bought a screen elsewhere and Pencil now doesn\u2019t work?", a: "Bring it in. We diagnose the digitiser - if it\u2019s a non-Pencil screen, the only honest fix is to replace it with a Pencil-compatible one. We charge for the new screen but credit your time - we\u2019ve seen this scenario hundreds of times." },
        { q: "How much more do Pencil-safe screens cost?", a: "Roughly AED 80-150 more depending on iPad model. We absorb most of that cost; our screen prices are 15-20% higher than the cheapest Dubai shops, not 50%. Worth it." },
        { q: "Does this apply to USB-C Pencil and Pencil Pro?", a: "Yes - newer Pencils use the same digitiser standard plus extra hover and barrel-roll features. Pencil-safe screens preserve all of it." },
      ]}
      reviewNames={["Anatoliy Tarasenko", "Anastasiia Goncia", "Ana Undricova"]}
      related={[
        { label: "iPad Screen Repair Dubai",  href: "/ipad-screen-repair-dubai",  description: "Pencil-safe screens from AED 139." },
        { label: "iPad Full Diagnostic",      href: "/ipad-full-diagnostic-dubai",description: "Pencil compatibility verified free." },
        { label: "iPad Camera Repair",        href: "/ipad-camera-repair-dubai",  description: "Often combined with screen work." },
      ]}
      blogLink={{ label: "Why your Apple Pencil stopped working after a Dubai screen repair", href: "/blog/iphone-screen-replaced-but-issues-after" }}
    />
  );
}
