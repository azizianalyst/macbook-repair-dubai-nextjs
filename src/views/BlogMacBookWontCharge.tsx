"use client";
import { Link } from "@/lib/router-compat";
import BlogPostTemplate from "@/components/blocks/BlogPostTemplate";
import { howTo } from "@/lib/schema";

export default function BlogMacBookWontCharge() {
  const steps = [
    { name: "Swap the charger and cable", text: "Try a different known-good charger AND a different USB-C or MagSafe cable. The cable or brick is the single most common cause of a MacBook that won't charge. Borrow a friend's, or test yours on another Mac. If a different charger works, the original is your fault." },
    { name: "Check the port for lint and debris", text: "Shine a light into the USB-C or MagSafe port. Pocket lint, dust, and carpet fibres pack into the recess and stop the connector seating. Switch the Mac off, then clean gently with a wooden toothpick or a blast of dry compressed air. Never use metal." },
    { name: "Try a different port", text: "On many MacBook Pro models the left and right USB-C ports route through different controllers. If the left side is dead, plug into the right. A port that charges on one side but not the other points at a board-level fault, not the charger." },
    { name: "Test the wall outlet", text: "Plug a phone charger or lamp into the same socket to confirm it's live. Skip the extension lead and power strip; plug straight into the wall. A loose Dubai wall socket or a tripped MCB has fooled plenty of people into thinking their MacBook was broken." },
    { name: "Let it cool down", text: "A hot battery pauses charging by design. If the Mac has been in a hot car or under heavy load, the optimised-charging logic stops the cell topping up until it drops below roughly 35°C. Move it to an air-conditioned room, wait twenty minutes, then retry." },
    { name: "Reset the SMC on Intel Macs", text: "On Intel MacBooks the System Management Controller handles charging. With the Mac off, hold Control + Option (left) + Shift (right) for 7 seconds, then add the power button for another 7 seconds, release all, and power on. Apple Silicon Macs have no SMC; just restart instead." },
    { name: "Check Battery Health", text: "Open System Settings → Battery → Battery Health (or hold Option and click the battery menu). If it reads Service Recommended, the cell has degraded and may refuse a full charge. Note whether it says Normal, Service Recommended, or Service Battery." },
    { name: "Inspect for swelling", text: "Press on the trackpad and look for a lid that no longer sits flat or a case that bulges. A swollen battery lifts the trackpad and bottom cover. Stop using and charging the Mac immediately and book a battery replacement; a swollen lithium cell is a fire and pressure risk." },
  ];
  return (
    <BlogPostTemplate
      seoTitle="MacBook Won't Charge? 8 Fixes Before You Pay"
      seoDescription="MacBook won't charge in Dubai? Work through 8 fixes in order: charger, port, cooling, SMC reset, battery health. Plus when it's the charge IC or a swollen cell."
      path="/blog/macbook-wont-charge-fixes"
      wide
      toc={[
        { id: "read-the-symptom", label: "First, read the symptom" },
        { id: "eight-fixes", label: "The 8 fixes, in order" },
        { id: "charger-port-or-battery", label: "Charger, port, or battery?" },
        { id: "chargers-in-dubai", label: "A word on chargers in Dubai" },
        { id: "what-next", label: "What to do next" },
      ]}
      category="Problem solving · MacBook"
      h1="MacBook Won't Charge? 8 Fixes to Try First"
      hook="Most MacBooks that won't charge aren't broken at all. Nine times out of ten it's the cable, the brick, or lint in the port. Work through these eight checks before you pay anyone."
      quickAnswer="Try a different charger and cable first, then clean the port and swap to the other side. Check the wall socket, let a hot Mac cool, and on Intel models reset the SMC. Then read Battery Health and check for trackpad lift from a swollen cell."
      author={{ name: "Shafiq", role: "Senior MacBook board-level technician" }}
      datePublished="2026-06-03"
      dateModified="2026-06-03"
      readingMinutes={9}
      featuredImageAlt="MacBook Won't Charge. MacBook not charging diagnostic on the bench in Dubai Media City - USB-C charging port inspection"
      extraSchemas={[howTo({
        name: "Fix a MacBook that won't charge in 8 steps",
        description: "Eight checks in priority order for a MacBook that won't charge, from the charger and port to the battery, before booking a repair.",
        steps,
        totalTime: "PT30M",
      })]}
      body={
        <>
          <p>
            A MacBook that won't charge sends most people straight to a search for a new logic board.
            It's almost never that. In our Concord Tower workshop the most common "dead" MacBook turns
            out to have a frayed cable or a port packed with pocket lint. Before you spend a dirham,
            walk these eight checks in order, they're the same ones we run on the bench before we
            ever pick up a screwdriver. If you reach step eight and it's still flat, our{" "}
            <Link to="/macbook-charging-port-repair-dubai" className="text-accent font-semibold hover:underline">
              charging port repair
            </Link>{" "}
            page covers what happens next.
          </p>

          <h2 id="read-the-symptom">MacBook Won't Charge. First, read the symptom</h2>
          <p>
            What the Mac tells you narrows the cause fast. There are three common states and they
            mean different things.
          </p>
          <ul className="list-disc list-inside space-y-xs">
            <li>
              <strong>Not Charging</strong>: the cable is connected and the Mac sees power, but the
              battery isn't taking it. Often heat, a degraded cell, or optimised charging holding off.
            </li>
            <li>
              <strong>Plugged in, not charging</strong> (or no charging icon at all), usually the
              charger, cable, or port. The Mac isn't getting clean power through.
            </li>
            <li>
              <strong>Charging slowly</strong>: an underpowered brick, a worn cable, or a USB-C port
              that's lost a few of its power pins. A 30W brick on a 16″ Pro will charge slowly by design.
            </li>
          </ul>

          <h2 id="eight-fixes">The 8 fixes, in order</h2>

          <h3>1. Swap the charger and the cable</h3>
          <p>
            Start here. The brick or the cable is the single most common reason a MacBook stops
            charging, and the cable fails far more often than the brick. USB-C cables wear at the
            strain relief and the internal power lines break before the cosmetic jacket does. Borrow
            a known-good charger and cable, ideally a friend's that you've seen work. If a different
            charger brings the Mac back to life, you've found it. Done.
          </p>

          <h3>2. Check the port for lint and debris</h3>
          <p>
            Switch the Mac off and shine a torch into the USB-C or MagSafe port. Dubai pockets and
            bags carry a lot of fine dust, and it compacts into the recess until the connector can't
            seat. Clean it gently with a wooden toothpick or a short blast of dry compressed air.
            Never poke metal in there, you can bridge the contacts and do real damage.
          </p>

          <h3>3. Try the other port</h3>
          <p>
            On many MacBook Pro models the left and right USB-C ports run through separate controllers.
            If the left pair is dead, plug into the right. When one side charges and the other doesn't,
            that's not the charger, that's a board-level fault on the dead side, and it's worth a
            proper diagnostic.
          </p>

          <h3>4. Test the wall outlet</h3>
          <p>
            Plug a phone charger or a lamp into the same socket to prove it's live. Skip the extension
            lead and the power strip entirely; go straight into the wall. A loose socket or a tripped
            MCB in the breaker box has convinced plenty of customers their MacBook had died.
          </p>

          <h3>5. Let it cool down</h3>
          <p>
            Heat stops charging on purpose. If the Mac has sat in a hot car or run a heavy export, the
            battery management pauses charging until the cell drops back below roughly 35°C. Move it
            somewhere air-conditioned, leave it twenty minutes, and try again. In a Dubai summer this
            one catches people out constantly.
          </p>

          <h3>6. Reset the SMC (Intel Macs only)</h3>
          <p>
            On Intel MacBooks the System Management Controller governs charging, and it can glitch.
            With the Mac shut down, hold Control, the left Option, and the right Shift for seven
            seconds, then keep holding and add the power button for another seven. Release everything,
            wait, and power on. Apple Silicon Macs (M1 onward) have no SMC, a normal restart does the
            same job.
          </p>

          <h3>7. Check Battery Health</h3>
          <p>
            Open System Settings → Battery → Battery Health, or hold Option and click the battery icon
            in the menu bar. If it reads <strong>Service Recommended</strong> or <strong>Service Battery</strong>,
            the cell has worn down and may refuse a full charge or cut out under load. Our{" "}
            <Link to="/blog/macbook-battery-health-check-guide" className="text-accent font-semibold hover:underline">
              battery health check guide
            </Link>{" "}
            walks through what each reading actually means.
          </p>

          <h3>8. Look for swelling</h3>
          <p>
            Press on the trackpad. Does it click evenly, or does it feel raised and stiff? A lid that
            won't sit flat or a bottom case that bulges means the battery has swollen. Stop using and
            charging the Mac straight away, a swollen lithium cell is a genuine fire and pressure
            hazard. Book a{" "}
            <Link to="/macbook-battery-replacement-dubai" className="text-accent font-semibold hover:underline">
              battery replacement
            </Link>{" "}
            and bring it in flat; don't try to keep topping it up.
          </p>

          <h2 id="charger-port-or-battery">So is it the charger, the port, or the battery?</h2>
          <p>
            By this point you usually know. Here's how the three break down.
          </p>
          <p>
            <strong>The charger.</strong> If a different brick and cable fixes it, that was the whole
            problem. Buy a genuine Apple charger or a reputable USB-C PD one rated for your model's
            wattage. More on that below.
          </p>
          <p>
            <strong>The charging port.</strong> If no charger works, the port looks bent or scorched,
            or one side charges and the other doesn't, it's a port or charge-IC fault. The USB-C/MagSafe
            connector and its FPC flex cable wear out or crack; on logic-board models the charging IC
            and surrounding components can fail. A port or FPC repair runs <strong>AED 300–600</strong>,
            and a board-level charge IC job <strong>AED 350–800</strong> depending on the model and what
            else got hit.
          </p>
          <p>
            <strong>The battery.</strong> If Battery Health says Service Recommended, the Mac dies the
            moment you unplug it, or the trackpad is lifting, it's the cell. A MacBook battery
            replacement runs <strong>AED 450–950</strong> by model, with the larger Pros at the top end.
          </p>
          <p>
            The honest answer is that you often can't tell the charge IC from the battery from the
            port without putting a meter on it. That's what our free diagnostic is for, we measure the
            charging line at the connector and the board in about fifteen minutes and tell you exactly
            which of the three it is before you commit to anything.
          </p>

          <h2 id="chargers-in-dubai">A word on chargers in Dubai</h2>
          <p>
            The market here is full of cheap USB-C bricks. Most are fine for a phone and risky for a
            MacBook. A genuine Apple charger is the safe default. If you go third-party, pick a known
            brand with proper USB-C Power Delivery and the right wattage, 30W for an Air, 67W or 96W
            for the Pros. The trouble with the dirham-store bricks is they cut corners on the power
            negotiation, so the Mac either charges slowly or refuses the handshake altogether. A bad
            charger can also stress the charging IC over time, which turns a cheap mistake into an
            expensive one.
          </p>

          <h2 id="what-next">What to do next</h2>
          <p>
            If you've worked through all eight and the Mac still won't charge, bring it to our Dubai
            Media City workshop for a free diagnostic. We've been fixing Apple hardware at Concord Tower
            since 2004, most charging jobs are turned around the same day, and there's no-fix-no-charge
            if we can't sort it. WhatsApp the model and what you're seeing on screen and we'll tell you
            what's likely before you make the trip.
          </p>
        </>
      }
      faqs={[
        {
          q: "Why does my MacBook say plugged in but not charging?",
          a: "The most common cause is the charger or cable, not the Mac. USB-C cables break internally at the strain relief long before they look worn. Swap in a known-good charger and cable first. If that fails, check the port for lint and try the other side. Heat and a tired battery are the next suspects.",
        },
        {
          q: "Is it the charging port or the battery that's failed?",
          a: "If no charger works and the port looks damaged, or one USB-C side charges and the other doesn't, it's the port or charge IC. If Battery Health says Service Recommended or the Mac dies the second you unplug, it's the cell. Often you can't tell without a meter, which is what our free diagnostic does in about fifteen minutes.",
        },
        {
          q: "Is a swollen MacBook battery dangerous?",
          a: "Yes. A swollen lithium cell is a real fire and pressure risk, and the pressure can crack the trackpad, lid, or screen. If the trackpad is lifting or the case bulges, stop charging and using the Mac right away. Bring it in flat for a battery replacement; don't keep topping it up or try to press it back down.",
        },
        {
          q: "How much does it cost to fix a MacBook charging port in Dubai?",
          a: "A charging port or FPC flex repair runs AED 300 to 600. A board-level charge IC fault, where the chip that manages charging has failed, runs AED 350 to 800 depending on the model and any collateral damage. The free diagnostic tells you which one it is before you decide, and all prices are VAT-inclusive.",
        },
        {
          q: "Are third-party chargers safe for a MacBook?",
          a: "A reputable USB-C Power Delivery charger at the right wattage is fine; a genuine Apple one is the safe default. The cheap Dubai-market bricks are the problem, since they cut corners on power negotiation and either charge slowly or stress the charging IC over time. Match the wattage to your model: 30W for an Air, 67W or 96W for the Pros.",
        },
        {
          q: "Can you fix a charging fault the same day?",
          a: "Most charging repairs are same-day at our Media City workshop. Port and FPC jobs are usually done within a few hours, and we stock batteries for the common models. Board-level charge IC work can take a little longer if we need to order a part. WhatsApp the serial first so we can confirm stock.",
        },
        {
          q: "Do you really do a free diagnostic?",
          a: "Yes, the diagnostic is free and there's no obligation. We put a meter on the charging line at the connector and the board and tell you whether it's the charger, the port, the charge IC, or the battery. From there you get a fixed quote with no-fix-no-charge, so you only pay if we actually solve it.",
        },
      ]}
      relatedLinks={[
        { label: "MacBook charging port repair", href: "/macbook-charging-port-repair-dubai", description: "USB-C and MagSafe port, FPC, and charge IC repairs." },
        { label: "MacBook battery replacement", href: "/macbook-battery-replacement-dubai", description: "Swollen and worn battery replacement by model." },
        { label: "Battery health check guide", href: "/blog/macbook-battery-health-check-guide", description: "What each Battery Health reading means." },
      ]}
    />
  );
}
