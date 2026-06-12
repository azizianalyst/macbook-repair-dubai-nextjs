"use client";
import { Link } from "@/lib/router-compat";
import BlogPostTemplate from "@/components/blocks/BlogPostTemplate";

export default function BlogIMacNotTurningOn() {
  return (
    <BlogPostTemplate
      seoTitle="iMac Not Turning On? Power Supply Fix Guide 2026"
      seoDescription="iMac 27″ 2017-2020 power supply failures are common. Symptoms, the LED-count diagnostic trick, and repair from AED 400 plus the PSU part in Dubai."
      path="/blog/imac-not-turning-on-power-supply-issues"
      category="Problem solving · iMac"
      h1="iMac Not Turning On? Power Supply Issues Explained"
      hook="iMac 27-inch 2017-2020 power supply failures are widespread by 2026 - here's how to confirm the diagnosis, the LED count trick, and what the repair costs."
      quickAnswer="If your iMac won't power on with no fan spin and no chime, the usual cause on 27″ 2017-2020 models is a failed internal power supply (PSU). Diagnose by counting the LEDs through the back vent: 1 LED means 12V is present, 0 means the PSU is dead. Repair is AED 400 labour plus AED 250-400 for the part."
      author={{ name: "Ali", role: "Senior iMac repair technician" }}
      datePublished="2026-04-25"
      dateModified="2026-04-25"
      readingMinutes={9}
      featuredImageAlt="iMac 27 inch power supply repair Dubai - diagnostic LED behind logo on logic board"
      body={
        <>
          <h2>Symptoms of a failing iMac power supply</h2>
          <ul className="list-disc list-inside space-y-xs">
            <li>Press the power button - no fan spin, no startup chime, no display</li>
            <li>No diagnostic LED visible through the back lower-right vent slot</li>
            <li>Faint clicking or buzzing sound from the back of the iMac</li>
            <li>Burning electronic smell (act fast - capacitor failure)</li>
            <li>Intermittent: works for 5 minutes then dies, then works again after cooling</li>
            <li>Reboots randomly under load (the dying PSU can't deliver current)</li>
          </ul>

          <h2>Which iMacs have this issue</h2>
          <p>
            By far the most affected: <strong>iMac 27″ Retina 5K (2017, 2019, 2020)</strong> with
            the Delta-made internal PSU. The 2017 model is now 8-9 years old and hitting end-of-life
            on bulk capacitors at scale. We see 4-6 of these per week in our Dubai workshop.
          </p>
          <p>Also affected, less commonly:</p>
          <ul className="list-disc list-inside space-y-xs">
            <li>iMac 27″ Late 2015 - slightly different PSU but same failure mode</li>
            <li>iMac 21.5″ 4K (2017, 2019) - smaller PSU, similar issues</li>
            <li>iMac Pro (2017) - separate enterprise-grade PSU, fails differently</li>
          </ul>
          <p>
            <strong>Not affected:</strong> iMac M1 (2021), M3 (2023), M4 (2024) - Apple Silicon
            iMacs use a much smaller external 143W power brick. PSU failures are rare.
          </p>

          <h2>How to diagnose - the LED count trick</h2>
          <p>
            Apple built four internal diagnostic LEDs onto every Intel iMac 27″ logic board. They
            are visible through the bottom right of the back vent slot if you peer in with a
            flashlight at the right angle. Each LED indicates a power milestone:
          </p>
          <ul className="list-disc list-inside space-y-xs">
            <li><strong>LED 1 only:</strong> PSU is delivering 12V trickle power (PSU is alive). If this LED is OFF, the PSU is dead - that's your fault.</li>
            <li><strong>LED 1 + 2:</strong> SMC has woken and confirmed 12V main rail. If LED 2 fails to light, SMC or main board fault.</li>
            <li><strong>LED 1 + 2 + 3:</strong> GPU is alive and communicating. Failure here = GPU or video cable issue.</li>
            <li><strong>All 4 LEDs:</strong> Display received signal. iMac should now show the boot sequence.</li>
          </ul>
          <p>
            For the "iMac won't turn on at all" scenario, we're checking LED 1. If it doesn't light
            with the power cable plugged in (you don't even need to press the power button to see
            LED 1 - it's always lit on a healthy iMac), the PSU is the fault.
          </p>

          <h2>Why this happens - component aging</h2>
          <p>
            Inside the iMac PSU are bulk electrolytic capacitors rated for roughly 5,000-8,000
            hours at 105°C. UAE summer indoor temperatures push the iMac's internal PSU
            temperature consistently above 70°C - accelerating capacitor degradation.
          </p>
          <p>
            By year 5-7 the electrolyte inside these capacitors has dried out enough that they
            can no longer hold their rated voltage. The PSU's primary side (the part connected to
            the 240V mains) typically fails first because it sees the highest stress. Result: the
            iMac stops powering on.
          </p>
          <p>
            We see a clear seasonal pattern - peak failure rate in August and September after
            summer heat soak. Customers who keep their iMac in air-conditioned rooms year-round
            generally see PSU life of 8-10 years; customers whose iMac sits in unconditioned
            office storerooms see 5-6 years.
          </p>

          <h2>Repair cost - AED 400 labour + PSU part</h2>
          <ul className="list-disc list-inside space-y-xs">
            <li><strong>Labour:</strong> AED 400 (full disassembly: glass, LCD, logic board removal, PSU swap, reassembly with new adhesive seal)</li>
            <li><strong>PSU part - iMac 27″ 2017/2019:</strong> AED 250-350 (refurbished tested) or AED 450 (new old stock)</li>
            <li><strong>PSU part - iMac 27″ 2020:</strong> AED 350-450 (less common, costs more)</li>
            <li><strong>PSU part - iMac 21.5″ 4K:</strong> AED 200-300</li>
            <li><strong>Adhesive re-seal kit:</strong> AED 50 (included)</li>
            <li><strong>Total typical:</strong> AED 700-850 same-day</li>
          </ul>
          <p>
            Compare to Apple Store: out-of-warranty iMac 27″ "Service" cost is AED 2,899 (whole
            logic board + PSU swap whether needed or not). Our component-level approach saves
            AED 2,000+ for the same outcome.
          </p>

          <h2>How long the repair takes</h2>
          <p>
            Same-day if you drop off before 11am and we have the PSU in stock. Bench time is
            120-150 minutes (the iMac display is bonded to the chassis with strong adhesive that
            takes time to release without cracking). We re-seal with new adhesive and do a 4-hour
            stress test before handing back. Returned with a 12-month warranty on the PSU and the
            workmanship.
          </p>

          <h2>Can you DIY this? (No - high voltage, sealed unit)</h2>
          <p>
            Strongly no, for two reasons:
          </p>
          <ol className="list-decimal list-inside space-y-xs">
            <li>
              <strong>Lethal voltage stored after unplugging.</strong> The bulk capacitors inside
              the PSU hold 400V DC and can stay dangerously charged for hours after you unplug
              the iMac. Touching the wrong terminal during disassembly can cause cardiac arrest.
              We discharge through a bleeder resistor before any work.
            </li>
            <li>
              <strong>Display adhesive is unforgiving.</strong> The iMac display is glued to the
              aluminum chassis. DIY removal without a heated separation table almost always
              cracks the LCD or chips the front glass. A AED 250 PSU repair becomes a AED 1,200
              display + PSU repair.
            </li>
          </ol>
          <p>
            iFixit sells a heated table and discharge tools for AED 1,500. If you're an
            experienced electronics technician with a fume hood, sure. For everyone else, the
            AED 700 we charge is genuinely the right answer.
          </p>

          <h2>Apple's stance - won't repair out-of-warranty</h2>
          <p>
            Apple Stores and AASPs in UAE will quote the "iMac whole logic board + PSU + display"
            module replacement at AED 2,899-3,599 because that's the official Apple service tier.
            They won't isolate the PSU. If your iMac is older than 6 years, Apple may decline
            service entirely under "vintage and obsolete products" policy.
          </p>
          <p>
            Our shop is one of about 4 in Dubai that does iMac PSU swap as a standalone service.
            See our{" "}
            <Link to="/imac-repair-dubai" className="text-accent font-semibold hover:underline">
              iMac repair page
            </Link>{" "}
            for all iMac models we service.
          </p>
        </>
      }
      faqs={[
        {
          q: "How do I see the diagnostic LEDs on my iMac?",
          a: "Look at the back of the iMac, bottom right area near the vent slot. With a flashlight angled into the slot, you can see 4 small green LEDs on the logic board. LED 1 should be lit any time the iMac is plugged into a wall socket (no need to press power). If LED 1 is dark, the PSU is dead.",
        },
        {
          q: "Why is my 5-year-old iMac dying when my 10-year-old one still works?",
          a: "Two factors: location (air-conditioned room vs hot storeroom), and luck of the silicon (some PSU batches had higher-quality capacitors than others). UAE indoor heat shortens PSU life significantly versus cooler climates. We see 27″ 2017s start failing at year 5; 2019s and 2020s slightly later.",
        },
        {
          q: "Will replacing the PSU fix all the symptoms?",
          a: "If the LED 1 was off pre-repair and lights up after PSU swap, yes - full fix. If LED 1 was already lit before repair, the issue is downstream (logic board, GPU, or display). We diagnose properly before quoting so you don't pay for the wrong fix.",
        },
        {
          q: "Is it worth repairing a 7-year-old iMac, or should I buy a new one?",
          a: "If the iMac display, SSD, and macOS install are still serving you well, AED 700 PSU repair extends the life by 3-5 years and is genuinely good value. If you're already considering a Mac mini M4 or iMac M3 upgrade for performance reasons, factor that in. We'll give honest advice - sometimes we recommend not repairing.",
        },
        {
          q: "Will my data be safe during the PSU repair?",
          a: "Yes. We don't touch the SSD or hard drive - only the power supply and necessary disassembly to reach it. Your data, settings, and macOS install remain exactly as they were. Time Machine backup recommended as standard precaution.",
        },
      ]}
      relatedLinks={[
        { label: "iMac repair hub", href: "/imac-repair-dubai", description: "All iMac models we service." },
        { label: "iMac 27″ Intel 2017 repair", href: "/imac-27-intel-2017-repair-dubai", description: "Most-affected PSU failure model." },
        { label: "iMac 27″ Intel 2020 repair", href: "/imac-27-intel-2020-repair-dubai", description: "Last Intel iMac, also affected." },
      ]}
    />
  );
}
