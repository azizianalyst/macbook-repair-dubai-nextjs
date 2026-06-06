"use client";
import { Link } from "@/lib/router-compat";
import BlogPostTemplate from "@/components/blocks/BlogPostTemplate";
import { howTo } from "@/lib/schema";

export default function BlogIPhoneNotCharging() {
  const steps = [
    { name: "Clean the Lightning or USB-C port", text: "Pocket lint and dust block the connector pins. Use a wooden toothpick (never metal) to gently scrape compressed lint from the port. About 50% of 'dead port' cases are fixed in 60 seconds." },
    { name: "Try a different cable", text: "Lightning and USB-C cables fail internally without visible damage. Borrow a known-good cable from someone before assuming the iPhone is the problem." },
    { name: "Try a different power adapter", text: "USB-C PD chargers and old 5W bricks behave differently. Test with at least one Apple-branded 20W or higher adapter, plus a different wall socket." },
    { name: "Force restart the iPhone", text: "iPhone 8 and later: press Volume Up, press Volume Down, then hold the Side button until the Apple logo appears (about 10 seconds). Forces a fresh charging IC handshake." },
    { name: "Check Battery Health and Low Power Mode", text: "Settings → Battery → Battery Health & Charging. If 'Service Recommended' or capacity below 70%, the battery itself may refuse fast charging. Toggle Low Power Mode off." },
    { name: "Restart in DFU mode", text: "Connect to a Mac, force-restart while holding Side button until you see 'Recovery Mode'. Useful if a bad iOS update is preventing charging." },
    { name: "Try MagSafe wireless charging (iPhone 12+)", text: "If MagSafe charges but the cable doesn't, your USB-C/Lightning port is dead - book a port repair. If MagSafe also fails, the issue is the battery or charging IC." },
  ];

  return (
    <BlogPostTemplate
      seoTitle="iPhone Not Charging? 7 Fixes to Try Before Repair"
      seoDescription="iPhone won't charge? 7 step-by-step fixes: lint cleaning (50% of cases), cable swap, force restart and MagSafe test. Free port cleaning at our Dubai workshop."
      path="/blog/iphone-not-charging-7-fixes"
      category="Problem solving · iPhone"
      h1="iPhone Not Charging? 7 Things to Try First"
      hook="Before assuming the port is broken, try these 7 things. About half of 'dead' charging ports are actually just compressed pocket lint."
      quickAnswer="If your iPhone won't charge, in priority order: clean the Lightning/USB-C port with a wooden toothpick (50% of cases solved here), try a different cable, try a different adapter, force-restart the iPhone, check Battery Health, try DFU mode, then test MagSafe. If MagSafe works but the cable doesn't, the port needs a AED 250-400 repair."
      author={{ name: "Usman", role: "Senior iPhone repair technician" }}
      datePublished="2026-04-25"
      dateModified="2026-04-25"
      readingMinutes={10}
      featuredImageAlt="iPhone not charging Dubai - Lightning port lint cleaning and cable test diagnostic"
      extraSchemas={[howTo({
        name: "Fix an iPhone that won't charge",
        description: "Seven self-diagnostic steps to identify why an iPhone won't charge and which fixes work without service.",
        steps,
        totalTime: "PT15M",
      })]}
      body={
        <>
          <h2>Step 1 - Clean the port (free fix, 50% of cases)</h2>
          <p>
            Dubai's combination of pocket lint, AC dust, and beach sand fills iPhone charging
            ports faster than almost anywhere. Compressed lint at the bottom of the connector
            stops the cable from seating fully - the iPhone reads it as "no charger connected".
            About 50% of customers who walk in with a "dead charging port" leave 5 minutes later
            after we cleaned the port.
          </p>
          <p>
            DIY: shine a flashlight into the port. If you see grey-brown fluff, scrape it gently
            with a wooden toothpick (never metal - you can short the data pins). Try the cable
            again. We do this for free at the workshop too - walk in, no appointment.
          </p>

          <h2>Step 2 - Try a different cable</h2>
          <p>
            Lightning and USB-C cables fail internally without visible damage - broken strands,
            corroded connectors inside the moulding. Before assuming the iPhone, borrow a known-good
            cable. MFi-certified or genuine Apple cables only - uncertified ones often handshake
            poorly with newer iOS versions.
          </p>

          <h2>Step 3 - Try a different power adapter</h2>
          <p>
            5W bricks (the old "iPhone charger") work but charge very slowly on iPhone 12 and
            later. USB-C PD adapters at 20W or higher are the standard since 2020. If you've
            been using a no-name brick from a hotel or rental, swap to an Apple-branded 20W and
            test in a different wall socket.
          </p>

          <h2>Step 4 - Force restart</h2>
          <p>The charging IC sometimes hangs. Force-restart re-initialises it without losing data:</p>
          <ul className="list-disc list-inside space-y-xs">
            <li><strong>iPhone 8 and later:</strong> press Volume Up, press Volume Down, then hold the Side button until the Apple logo appears (about 10 seconds).</li>
            <li><strong>iPhone 7 / 7 Plus:</strong> hold Volume Down + Side button together for 10 seconds.</li>
            <li><strong>iPhone 6s and earlier:</strong> hold Home + Side button for 10 seconds.</li>
          </ul>

          <h2>Step 5 - Software check (Battery Health, Low Power Mode)</h2>
          <p>
            Settings → Battery → Battery Health & Charging. If you see "Service Recommended" or
            "This iPhone has experienced an unexpected shutdown", the battery cell can no longer
            deliver peak charging current - replacement is needed.
          </p>
          <p>
            Also check: Settings → Battery → toggle Low Power Mode off (it slows charging on some
            models). Settings → Battery → Battery Health → Optimised Battery Charging may pause
            charging at 80% if the iPhone thinks you don't need a full charge yet.
          </p>

          <h2>Step 6 - DFU mode</h2>
          <p>
            DFU (Device Firmware Update) mode bypasses iOS entirely. Useful if a bad iOS update
            corrupted charging logic. Connect iPhone to a Mac with USB-C, open Finder, force-restart
            the iPhone but keep holding Side button until "Recovery Mode" appears. From here you
            can update iOS without erasing data.
          </p>

          <h2>Step 7 - Try MagSafe / wireless charging (iPhone 12+)</h2>
          <p>
            This is the diagnostic split. If MagSafe (or Qi wireless) successfully charges your
            iPhone but the cable does not, you have a hardware port problem - Lightning/USB-C
            connector or charging flex cable. AED 250-400 repair, same day.
          </p>
          <p>
            If MagSafe also fails, the problem is downstream of the port: charging IC on the
            logic board, battery cell, or main power management chip. Bench diagnosis required -
            AED 400-1,200 depending on the failed component.
          </p>

          <h2>When to bring it in</h2>
          <p>If after all 7 steps the iPhone still won't charge:</p>
          <ul className="list-disc list-inside space-y-xs">
            <li>Port replacement - AED 250-400 (most common, same-day)</li>
            <li>Battery replacement - AED 250-450 depending on model (same-day)</li>
            <li>Charging IC repair on logic board - AED 400-700 (1-2 days)</li>
            <li>Free walk-in diagnostic, no charge if we can't fix it</li>
          </ul>

          <h2>Lint cleaning - we do this for free</h2>
          <p>
            Walk into our Concord Tower workshop in Dubai Media City, no appointment needed. We
            clean the port under a 10× magnifier with proper picks (not toothpicks) in 5 minutes.
            No charge. We figure if your iPhone walks out working, you'll come back to us next
            time something actually breaks.
          </p>
        </>
      }
      faqs={[
        {
          q: "Why does my iPhone say 'Liquid Detected in Lightning Connector'?",
          a: "iOS detects moisture in the port and refuses charging to prevent corrosion. Dry the port with a microfiber cloth, leave the iPhone port-down for 30 minutes, then try again. If the warning persists after the iPhone is genuinely dry, the moisture sensor may be stuck - port cleaning fixes it.",
        },
        {
          q: "Can pocket lint really stop an iPhone from charging?",
          a: "Yes - it's the #1 cause we see in our Dubai workshop. Compressed lint at the bottom of the port stops the cable from making full contact with the data and power pins. 60 seconds with a wooden toothpick (never metal) usually fixes it.",
        },
        {
          q: "Why does my iPhone charge slowly even with a fast charger?",
          a: "Most likely: low battery health (Settings → Battery → Battery Health below 80%), Optimised Battery Charging is throttling at 80%, or you're using a non-PD adapter. iPhone 12+ needs a USB-C PD adapter at 20W+ for full speed.",
        },
        {
          q: "Will the 'Liquid Detection' warning go away on its own?",
          a: "Usually within 24 hours of complete drying. If the iPhone has been wet, leave it port-down for 24 hours before next charging attempt. If the warning persists after 48 hours, the moisture sensor inside the port is stuck - bring it in for cleaning.",
        },
        {
          q: "Can I damage my iPhone by cleaning the port myself?",
          a: "Yes if you use metal tools (paperclip, SIM ejector). Wooden toothpick or plastic dental pick only. Do not push too deep - the data pins sit only 6mm in. If unsure, bring it to us for free professional cleaning.",
        },
        {
          q: "Why does my iPhone charge from a power bank but not the wall?",
          a: "Two possibilities: your wall adapter is dead (try another), or the wall outlet has no current (test with another device). Power banks deliver 5V regardless of outlet conditions, which can mask a wall-side problem.",
        },
      ]}
      relatedLinks={[
        { label: "iPhone charging port repair", href: "/iphone-charging-port-repair-dubai", description: "Same-day port replacement service." },
        { label: "iPhone battery replacement cost guide", href: "/blog/iphone-battery-replacement-cost-dubai-all-models", description: "Pricing for every model." },
        { label: "iPhone water damage repair guide", href: "/blog/iphone-water-damage-repair-cost-dubai", description: "If liquid is involved." },
      ]}
    />
  );
}
