"use client";
import { Link } from "@/lib/router-compat";
import BlogPostTemplate from "@/components/blocks/BlogPostTemplate";
import { howTo } from "@/lib/schema";

export default function GuideIPadNotCharging() {
  const steps = [
    { name: "Swap the cable", text: "Try a different Lightning or USB-C cable. Cables fail more often than adapters or iPads, a frayed, bent or counterfeit cable will refuse to charge even when it looks fine. Use Apple's own cable or a certified MFi cable." },
    { name: "Try a different power adapter", text: "Plug into a different USB-C or Lightning adapter. The original adapter may have failed, try your MacBook's USB-C charger, a friend's adapter, or plug into a laptop USB port to test." },
    { name: "Clean the charging port", text: "Lint and debris in the Lightning or USB-C port is one of the most common causes of iPad not charging. Use a wooden toothpick or a non-metallic tool to gently clear any visible debris. Never use metal." },
    { name: "Force restart the iPad", text: "A frozen OS can block charging even when the hardware is fine. For iPad with Face ID: press and release Volume Up, press and release Volume Down, then press and hold the Top button until the Apple logo appears. For iPad with Home button: press and hold Home + Top button for 10 seconds." },
    { name: "Check the charging notification", text: "Connect the cable and wait 30 seconds. If you see 'Not Charging' in the status bar rather than nothing at all, the iPad recognises the charger but won't draw power, usually a low-wattage adapter (e.g. 5W into a Pro that wants 18W+). Use a higher-wattage adapter." },
    { name: "Check battery health", text: "Go to Settings → Battery → Battery Health. If maximum capacity is very low (below 80%) or the battery shows a service warning, a degraded battery can refuse to charge past certain thresholds. A replacement restores normal charging." },
    { name: "Try a different wall socket", text: "Rule out the socket: plug into a different outlet or a surge-protected power strip. A socket with unstable voltage can interrupt charging." },
    { name: "Bring it in for a diagnostic", text: "If all the above fail, the charging circuit, USB-C controller, or battery on the logic board may have failed. A component-level diagnostic will pinpoint whether it's the port, the battery, or the board." },
  ];

  return (
    <BlogPostTemplate
      seoTitle="iPad Not Charging? 8 Fixes That Actually Work (2026)"
      seoDescription="iPad not charging is usually a cable, port debris, or adapter fault, not a dead battery. Fixes in order: swap cable, clean port, force restart, different adapter, check battery health."
      path="/why-is-my-ipad-not-charging"
      category="Troubleshooting · iPad"
      h1="Why Is My iPad Not Charging?"
      hook="An iPad that won't charge is almost always a cable, debris in the port, or an adapter that's too weak, not a dead battery. Here's how to fix it in order."
      quickAnswer="Start with the cable, it fails more often than anything else. Try a different MFi-certified cable, then a different adapter, then clean debris from the charging port with a wooden toothpick. Force-restart the iPad to clear any software block. If you see 'Not Charging' in the status bar, your adapter's wattage is too low for that iPad model."
      author={{ name: "Usman", role: "Senior MacBook technician" }}
      datePublished="2026-06-18"
      dateModified="2026-06-18"
      readingMinutes={5}
      featuredImageAlt="iPad charging port being inspected at a Dubai repair workshop"
      extraSchemas={[howTo({
        name: "Fix an iPad that won't charge",
        description: "Step-by-step fixes for an iPad not charging, from cable and adapter checks to port cleaning, force restart, and battery health.",
        steps,
        totalTime: "PT15M",
      })]}
      body={
        <>
          <h2>Most common causes</h2>
          <ul className="list-disc list-inside space-y-xs">
            <li><strong>Faulty or counterfeit cable</strong>: cables degrade or fail internally while looking fine outside. Non-MFi cables often charge unreliably.</li>
            <li><strong>Debris in the charging port</strong>: pocket lint compacts into the Lightning/USB-C port until the connector can't make contact.</li>
            <li><strong>Adapter too weak</strong>: iPad Pro and iPad Air require at least 18–20W to charge properly. A 5W phone charger will show "Not Charging".</li>
            <li><strong>Software freeze</strong>: the OS can hang in a state where charging is blocked. A force restart clears it in 30 seconds.</li>
            <li><strong>Degraded battery</strong>: below ~80% capacity, some iPads refuse to charge past certain percentages or show erratic behaviour.</li>
          </ul>

          <h2>The fixes, fastest first</h2>
          <p><strong>1. Swap the cable.</strong> Use Apple's own cable or a certified MFi cable. A frayed, bent, or counterfeit cable is the single most common cause and takes 10 seconds to rule out.</p>
          <p><strong>2. Try a different adapter.</strong> Plug your cable into your MacBook charger or any USB-C adapter you know works. If that charges it, the original adapter failed.</p>
          <p><strong>3. Clean the port.</strong> Use a wooden toothpick, never metal, to gently remove debris from the Lightning or USB-C port. Look with a torch first. Compacted lint is surprisingly common and prevents the connector from seating properly.</p>
          <p><strong>4. Force restart.</strong> For Face ID iPads: Volume Up → Volume Down → hold Top button. For Home button iPads: hold Home + Top for 10 seconds. This clears any software block on charging and takes under a minute.</p>
          <p><strong>5. Check adapter wattage.</strong> iPad Pro (USB-C) needs 18W+ to charge at a normal rate; with a 5W adapter it'll say "Not Charging" or charge extremely slowly. Use the charger that came with the iPad or a 20W+ USB-C adapter.</p>
          <p><strong>6. Check battery health.</strong> Settings → Battery → Battery Health. A battery below 80% may need replacement before charging behaviour normalises.</p>

          <h2>When to bring it in</h2>
          <p>
            If swapping cable, adapter, cleaning the port, and force-restarting all fail, the fault
            is likely hardware: a damaged charging port, a faulty USB-C controller on the logic board,
            or a battery that has failed beyond what software can show. We offer a{" "}
            <Link to="/ipad-full-diagnostic-dubai" className="text-accent font-semibold hover:underline">
              free iPad diagnostic
            </Link>{" "}
            to pinpoint the exact component before any repair. We're at Concord Tower, Dubai Media City,
            open Mon-Sat 9am–10pm, with free pickup across Dubai. Call or WhatsApp{" "}
            <a href="https://wa.me/971557413706" className="text-accent font-semibold hover:underline">
              055 741 3706
            </a>.
          </p>
        </>
      }
      faqs={[
        {
          q: "Why does my iPad say 'Not Charging' when plugged in?",
          a: "'Not Charging' means the iPad recognises the charger but isn't drawing power, almost always because the adapter's wattage is too low. iPad Pro requires 18W+; a 5W phone charger will trigger this. Switch to the adapter that came with your iPad or any 20W+ USB-C charger.",
        },
        {
          q: "How do I clean my iPad's charging port?",
          a: "Use a wooden toothpick (never metal) to gently loosen and remove compacted debris. Shine a torch into the port first to see what's there. Work around the edges carefully, the pins inside are delicate. Do not use compressed air at high pressure into a Lightning port.",
        },
        {
          q: "My iPad charges very slowly. Is that a problem?",
          a: "Slow charging usually means the adapter is too low-wattage (5W instead of 18–20W+), the cable is degraded, or the battery's capacity has dropped significantly. Try a higher-wattage adapter first. If still slow with a good adapter and cable, check battery health in Settings → Battery → Battery Health.",
        },
        {
          q: "iPad was working fine, then stopped charging overnight. Why?",
          a: "An overnight charging failure is often a software freeze (fix: force restart), a cable that finally gave out (fix: swap the cable), or rarely a tripped protection circuit from a power fluctuation (fix: let it cool, then try again). If none of those work, bring it in for a free diagnostic.",
        },
      ]}
      relatedLinks={[
        { label: "iPad battery replacement Dubai", href: "/ipad-battery-replacement-dubai", description: "Battery below 80% or not holding charge? Same-day replacement with 3-month warranty." },
        { label: "iPad charging port repair Dubai", href: "/ipad-charging-port-repair-dubai", description: "Port damaged or bent? We replace Lightning and USB-C ports on all iPad models." },
        { label: "Free iPad diagnostic Dubai", href: "/ipad-full-diagnostic-dubai", description: "Not sure what's wrong? Free check to confirm cable, port, battery or board fault." },
      ]}
    />
  );
}
