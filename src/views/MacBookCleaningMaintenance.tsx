"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";

export default function MacBookCleaningMaintenance() {
  return (
    <SubServicePageTemplate
      seoTitle="MacBook Cleaning & Maintenance Dubai | MacBook Repair Dubai"
      seoDescription="MacBook cleaning and maintenance in Dubai from AED 280. Dust and corrosion removal, fan and vent clean, free pickup, 90-day warranty. Call 055 741 3706."
      path="/macbook-cleaning-maintenance-dubai"
      eyebrow="MacBook cleaning & maintenance"
      h1="MacBook Cleaning and Maintenance in Dubai"
      subtitle="Dust builds up fast in Dubai. A full internal and external clean clears the fans, vents and ports, checks thermals, and keeps your MacBook running cool. AED 280, same day."
      startingPrice={280}
      timeline="Same day"
      whatsappPrefill="Hi, I'd like to book a MacBook clean and service - here's my model and what I'm seeing:"
      breadcrumb={[
        { name: "Home",                     path: "/" },
        { name: "MacBook Repair",           path: "/apple-repair-dubai" },
        { name: "Cleaning & Maintenance",   path: "/macbook-cleaning-maintenance-dubai" },
      ]}
      technician={{ name: "Abdul Aziz", years: 21, specialisation: "Mac servicing and maintenance" }}
      serviceName="MacBook Cleaning and Maintenance"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>MacBook cleaning and maintenance at MacBook Repair Dubai</strong> is a full internal and external service: we open the chassis, clear dust and debris from the heatsink and fan blades, clean the vents and ports, wipe down the keyboard and screen, and check for early corrosion before it spreads. Dubai's heat, fine sand and humidity push dust into a MacBook faster than most cities, and that dust is the main reason fans run loud and chips run hot. The clean is AED 280, and diagnosis is free.
          </p>
          <p className="text-[16px] text-on-primary-muted leading-relaxed">
            It's preventive work, not a repair. Done once a year it keeps temperatures down, protects the logic board, and adds years to the machine. We service every model from the 2012 MacBook Pro through to the M3 and M4 Air and Pro.
          </p>
        </>
      }
      whatWeFix={[
        "Dust and debris removed from the heatsink, fan housing and internal vents",
        "Fan blades cleaned and tested for noise, vibration and bearing wear",
        "Thermal check under load - we confirm temperatures drop after the clean",
        "Charging port and USB-C / Thunderbolt ports cleared of lint and grit",
        "Keyboard, trackpad and screen cleaned (no harsh solvents near the coating)",
        "Early corrosion spotted and treated before it reaches the logic board",
        "macOS health check - storage, battery cycle count and background load reviewed",
      ]}
      steps={[
        { title: "Book on WhatsApp or free pickup", body: "Message us the model and we arrange a slot, or collect the MacBook free across Dubai mainland. Sharjah and Abu Dhabi pickup is AED 100 each way." },
        { title: "Free inspection", body: "We open the machine, check dust levels, fan condition and any corrosion, and confirm the AED 280 clean is all you need before any work starts." },
        { title: "Deep clean and thermal check", body: "Heatsink, fans, vents and ports cleared, fresh thermal paste if temperatures warrant it, then a load test to verify the machine runs cooler." },
        { title: "Report and same-day return", body: "You get a short report on what we found and the before-and-after temperatures, then the MacBook goes back the same day in most cases." },
      ]}
      warrantyDays={90}
      warrantyBullets={[
        "Covers the cleaning work and any fan re-fit for 90 days.",
        "If fan noise returns inside 90 days, we re-clean at no charge.",
        "Excludes new dust build-up from heavy outdoor or workshop use.",
      ]}
      faqs={[
        { q: "How much does a MacBook clean and service cost?", a: "A full internal and external clean is AED 280, VAT-inclusive, at our Concord Tower workshop in Dubai Media City. That covers dust removal from the fans and heatsink, port cleaning, a thermal check and a macOS health review. If we spot a separate fault like a worn battery, we quote that before touching it - no surprises." },
        { q: "How often should I clean my MacBook in Dubai?", a: "Once a year is the right cycle for most people in Dubai, where fine sand and humidity load the fans faster than cooler climates. If you work outdoors, near a building site, or notice the fans running loud at idle, every 6 to 9 months is better. The clean is AED 280 and takes a day, so it's cheap insurance against a thermal-related logic-board fault." },
        { q: "Does dust really cause my MacBook to overheat?", a: "Yes - dust is the single most common cause of overheating we see. It clogs the heatsink fins and coats the fan blades, so the fan spins faster, gets louder, and still can't move enough air. The chip then throttles to protect itself and the machine slows down. A clean usually drops idle temperatures by 10 to 20 degrees, and we show you the before-and-after numbers." },
        { q: "Do you actually open the MacBook to clean it?", a: "Yes. Blowing canned air through the vents only pushes dust deeper. We remove the bottom case, lift the fan assembly, and clean the heatsink and blades directly, then clear the ports. On machines from 2016 onward we're careful with the bonded internals. The full strip-and-clean is what makes the AED 280 service actually drop temperatures rather than just move the dust around." },
        { q: "Is opening my MacBook safe, and will it void anything?", a: "It's safe in trained hands - Abdul Aziz has 21 years on Apple hardware and we've serviced thousands of machines since 2004. Most MacBooks in Dubai are well out of Apple's warranty, so there's nothing to void. If yours is still under AppleCare we'll tell you before we open it. We back our own work with a 90-day warranty." },
        { q: "Do you collect the MacBook, or do I bring it in?", a: "Both. We offer free pickup and delivery across Dubai mainland - Marina, JLT, Business Bay, Downtown, Al Barsha and the rest. Sharjah and Abu Dhabi pickup is AED 100 each way. Or drop it at Concord Tower, Dubai Media City, where there's free parking. WhatsApp 055 741 3706 to arrange a slot." },
        { q: "How long does the cleaning take?", a: "Same day for most models. A standard MacBook Air or Pro clean is done within a few hours once it's on the bench, and we return it the same day across Dubai. If we apply fresh thermal paste it needs a short settling period, but that doesn't add to your wait. Drop it in the morning and you'll usually have it back by evening." },
        { q: "Can you service older or vintage MacBooks?", a: "Yes. We service every MacBook from the 2012 Pro onward, including the 2015 to 2019 models that Apple now treats as vintage and won't touch. Older machines benefit the most from a clean and fresh thermal paste, since years of Dubai dust and dried paste are usually why they run hot and loud. The service is still AED 280 regardless of age." },
        { q: "Will cleaning fix a MacBook that keeps shutting down?", a: "Often, yes - random shutdowns under load are frequently a thermal problem from clogged fans and old paste. We diagnose for free first. If the clean and re-paste solves it, you pay AED 280 and nothing more. If the shutdown is a battery or logic-board fault instead, we'll show you the evidence and quote the actual repair before doing anything." },
      ]}
      reviewNames={["Neil Morecraft", "Ihor Fedorenko", "Jasdeep kondal", "Nihilius Nyx"]}
      related={[
        { label: "MacBook Fan Cleaning",          href: "/mac-fan-cleaning-dubai",              description: "Loud fans or constant whirring? Targeted fan strip and clean." },
        { label: "MacBook Battery Replacement",   href: "/macbook-battery-replacement-dubai",   description: "Genuine-capacity cell, cycle count reset, often same day." },
        { label: "MacBook Water Damage Repair",   href: "/macbook-water-damage-repair-dubai",   description: "Spilled liquid? Full clean and corrosion treatment from AED 450." },
      ]}
      quickAnswer={{
        question: "How much is a MacBook clean and service in Dubai?",
        answer: "A full internal and external MacBook clean is AED 280 at MacBook Repair Dubai in Concord Tower, Dubai Media City. It covers dust removal from the fans and heatsink, port cleaning, a thermal check and a macOS health review, with free diagnosis and a 90-day warranty. Most jobs are done the same day, with free pickup across Dubai mainland.",
      }}
    />
  );
}
