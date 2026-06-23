"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";

export default function MacBookWifiBluetoothRepair() {
  return (
    <SubServicePageTemplate
      seoTitle="MacBook Wi-Fi & Bluetooth Repair Dubai - AED 250 | Fast Fix"
      seoDescription="MacBook Wi-Fi & Bluetooth repair Dubai. 'No hardware installed', dropping connection, Bluetooth won't pair. From AED 250, 1-2 days, warranty of up to 12 months. Call 055 741 3706."
      path="/macbook-wifi-bluetooth-repair-dubai"
      eyebrow="MacBook Wi-Fi & Bluetooth repair"
      h1="MacBook Wi-Fi & Bluetooth Repair Dubai"
      subtitle="'Wi-Fi: No hardware installed', constant drop-outs, or Bluetooth that won't pair? We diagnose and repair MacBook wireless faults - from AED 250, most done in 1-2 days."
      startingPrice={250}
      timeline="1-2 days"
      whatsappPrefill="Hi, my MacBook Wi-Fi / Bluetooth has a problem - model and symptom:"
      breadcrumb={[
        { name: "Home",                    path: "/" },
        { name: "MacBook Repair",          path: "/" },
        { name: "Wi-Fi & Bluetooth Repair", path: "/macbook-wifi-bluetooth-repair-dubai" },
      ]}
      technician={{ name: "Shafiq", years: 21, specialisation: "MacBook wireless & board-level repair" }}
      serviceName="MacBook Wi-Fi & Bluetooth Repair Dubai"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>MacBook Wi-Fi and Bluetooth repair in Dubai</strong> covers the "Wi-Fi: No hardware installed" message, connections that keep dropping, weak signal next to the router, and Bluetooth that won't turn on or stay paired. Wi-Fi and Bluetooth share the same wireless module and antennas, routed through the display hinge - so the cause can be macOS, a damaged antenna cable, a failed module, or a board-level power fault. We pinpoint the real issue so you're not paying to replace parts that work. AED 250 covers parts, labour and a warranty of up to 12 months.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed">
            We service MacBook Air M1/M2/M3, MacBook Pro 13/14/16 (Intel and M-series), including liquid-damaged wireless circuits and post-repair antenna faults.
          </p>
        </>
      }
      whatWeFix={[
        "\"Wi-Fi: No hardware installed\" message",
        "Wi-Fi keeps dropping or won't hold a connection",
        "Very slow or weak signal next to the router",
        "Bluetooth won't turn on or pair with devices",
        "Bluetooth mouse, keyboard or trackpad keep disconnecting",
        "Wireless stopped working after a spill or screen repair",
      ]}
      steps={[
        { title: "Free diagnosis", body: "We rule out macOS and network config first, then test the antennas, the wireless module and the board power rails." },
        { title: "Written quote", body: "Software fix, antenna/module repair, or board-level work - the price is agreed before any work begins." },
        { title: "Repair", body: "Antenna or wireless module replaced, or board-level micro-soldering, then the display is resealed properly." },
        { title: "Quality test", body: "We confirm stable Wi-Fi throughput and reliable Bluetooth pairing before pickup." },
      ]}
      warrantyDays={365}
      warrantyBullets={[
        "Covers the antenna / wireless module and fitment.",
        "Excludes new liquid or impact damage after delivery.",
        "Free re-check if the fault returns inside 12 months.",
      ]}
      faqs={[
        { q: "How much does MacBook Wi-Fi or Bluetooth repair cost in Dubai?", a: "A software or settings fix is often done free during the diagnosis. Antenna or wireless-module repair starts at AED 250; board-level wireless repairs start at AED 450. You get an exact quote after a free diagnosis." },
        { q: "Why does my MacBook say \"No hardware installed\"?", a: "That usually means macOS can't see the wireless module - which can be a software glitch, a loose or damaged antenna, or a failed chip. Our free diagnosis tells you which it is before you commit to a repair." },
        { q: "Wi-Fi and Bluetooth both stopped - is that one fault?", a: "Often yes. On MacBooks they share a single module and antenna path, so one hardware fault can take out both. That also means a single repair frequently restores both." },
        { q: "How long does it take?", a: "Software fixes are same day. Antenna or module replacement and board-level repairs typically take 1-2 days depending on parts." },
        { q: "It started after a screen replacement elsewhere - can you fix it?", a: "Yes. The Wi-Fi antennas run through the display hinge and are easy to pinch or unseat during a screen repair. We re-seat or replace the antenna and verify signal strength on the bench." },
      ]}
      reviewNames={["David Boulos", "Anatoliy Tarasenko", "vinay menon"]}
      related={[
        { label: "MacBook Logic Board Repair", href: "/macbook-logic-board-repair-dubai", description: "Board-level wireless power faults." },
        { label: "MacBook Water Damage Repair", href: "/macbook-water-damage-repair-dubai", description: "Liquid hit the wireless card? From AED 700." },
        { label: "macOS Reinstall & Software",  href: "/macos-reinstall-dubai",          description: "Software-side network fixes." },
      ]}
    />
  );
}
