"use client";
import { Link } from "@/lib/router-compat";
import BlogPostTemplate from "@/components/blocks/BlogPostTemplate";
import { howTo } from "@/lib/schema";

export default function BlogMacBookNotTurningOn() {
  const steps = [
    { name: "Check the power adapter and cable", text: "Try a different USB-C cable and a different wall adapter (ideally a known-good 67W or 96W). 35% of 'dead MacBook' calls are a failed cable or charger." },
    { name: "Reset the SMC (System Management Controller)", text: "On Apple Silicon Macs: shut down, then hold the power button for 10 seconds, release, wait 5 seconds, press power. On Intel MacBooks: shut down, hold Shift+Control+Option+Power for 10 seconds." },
    { name: "Reset NVRAM / PRAM", text: "Apple Silicon resets NVRAM automatically. On Intel: shut down, then hold Option+Command+P+R while pressing the power button until you hear the second startup chime." },
    { name: "Drain and recharge cycle", text: "If the battery is deeply discharged, the MacBook may need 15+ minutes connected to a charger before it shows any sign of life. Be patient - leave it plugged in." },
    { name: "Boot in Safe Mode", text: "On Apple Silicon: hold the power button until 'Loading startup options' appears, select your disk, then hold Shift and click 'Continue in Safe Mode'. On Intel: hold Shift while pressing power." },
    { name: "Internet Recovery boot", text: "On Intel: hold Command+Option+R at startup. On Apple Silicon: hold the power button until startup options appear, then click Options. Lets you reinstall macOS or run Disk Utility." },
    { name: "External display test", text: "Connect a known-good USB-C or HDMI external monitor. If you see the macOS desktop on the external, the MacBook is alive - your built-in display, backlight, or Flexgate cable has failed." },
  ];

  return (
    <BlogPostTemplate
      seoTitle="MacBook Not Turning On: 7 Fixes to Try First (2026)"
      seoDescription="MacBook won't turn on? 7 step-by-step fixes: SMC reset, NVRAM, charger checks, Safe Boot, Recovery mode. Apple Silicon and Intel covered, then bring it in."
      path="/blog/macbook-not-turning-on-fix-guide"
      wide
      toc={[
        { id: "check-power-adapter", label: "Step 1. Check the power adapter" },
        { id: "smc-reset", label: "Step 2. SMC reset" },
        { id: "nvram-reset", label: "Step 3. NVRAM / PRAM reset" },
        { id: "drain-recharge", label: "Step 4. Drain and recharge" },
        { id: "safe-boot", label: "Step 5. Safe Boot" },
        { id: "recovery-boot", label: "Step 6. Internet Recovery boot" },
        { id: "external-display", label: "Step 7. External display test" },
        { id: "when-to-bring-in", label: "When to stop and bring it in" },
        { id: "what-we-do", label: "What we'll do" },
      ]}
      category="Problem solving · MacBook"
      h1="MacBook Not Turning On? 7 Fixes Before You Bring It In"
      hook="Before you call us, try these 7 steps. About 30% of 'dead MacBook' cases are fixable in 5 minutes - saving you a service ticket entirely."
      quickAnswer="If your MacBook won't turn on, in order: try a different charger and cable, reset the SMC (Apple Silicon: hold power 10 seconds; Intel: Shift+Control+Option+Power 10 seconds), reset NVRAM, charge it 15 minutes, try Safe Boot, try Recovery boot, then connect an external display. If none work, it's hardware."
      author={{ name: "Shafiq", role: "Senior MacBook diagnostics technician" }}
      datePublished="2026-04-25"
      dateModified="2026-04-25"
      readingMinutes={11}
      featuredImageAlt="MacBook not turning on Dubai - diagnostics steps with charger and SMC reset"
      extraSchemas={[howTo({
        name: "Fix a MacBook that won't turn on",
        description: "Seven self-diagnostic steps for a MacBook that won't power on, covering both Apple Silicon and Intel models.",
        steps,
        totalTime: "PT30M",
      })]}
      body={
        <>
          <h2 id="check-power-adapter">MacBook Not Turning On. Step 1 - Check the power adapter (most common cause)</h2>
          <p>
            About 35% of "dead MacBook" cases that come to our workshop are actually a failed
            charger, a failed cable, or a wall socket with no current. Before assuming the MacBook
            itself is dead, swap the cable and the brick separately. Borrow from a friend or
            colleague if you don't have a spare.
          </p>
          <p>
            On a healthy MacBook with a healthy charger you should see a small green or amber LED
            on the MagSafe (older models) or hear a faint "click" when plugging in USB-C. No sign
            at all on either side = check a different wall socket first, then a different cable
            and brick.
          </p>

          <h2 id="smc-reset">Step 2 - SMC reset (Intel vs Apple Silicon are different)</h2>
          <p>
            The SMC (System Management Controller) handles power, battery, fans, and the sleep/wake
            cycle. A stuck SMC is the most common reason a healthy MacBook refuses to power on.
          </p>
          <ul className="list-disc list-inside space-y-xs">
            <li>
              <strong>Apple Silicon (M1, M2, M3, M4, M5):</strong> simply shut the MacBook down,
              hold the power button for 10 full seconds, release, wait 5 seconds, then press
              power normally. That's the entire "SMC reset" - Apple folded the SMC into the M-chip.
            </li>
            <li>
              <strong>Intel MacBook (T2 chip, 2018-2020):</strong> shut down, then hold
              Shift+Control+Option (left side) + Power for 10 seconds. Release all four together,
              wait, then press power.
            </li>
            <li>
              <strong>Intel MacBook (pre-T2, 2017 and older):</strong> if removable battery,
              disconnect battery, hold power 10 seconds, reconnect. Otherwise same as T2.
            </li>
          </ul>

          <h2 id="nvram-reset">Step 3 - NVRAM / PRAM reset</h2>
          <p>
            NVRAM stores small settings like volume, display resolution, and startup disk choice.
            A corrupted NVRAM occasionally hangs the boot before the screen lights up.
          </p>
          <p>
            Apple Silicon Macs reset NVRAM automatically at every boot, so this step only applies
            to Intel MacBooks. Shut down, then immediately hold Option+Command+P+R while pressing
            power. Keep holding for about 20 seconds (you'll hear the startup chime twice on older
            models).
          </p>

          <h2 id="drain-recharge">Step 4 - Drain and recharge cycle</h2>
          <p>
            If the MacBook battery is deeply discharged (sat unused for weeks, or the cell is at
            the end of its life), the protection circuit refuses to allow the SoC to start until
            a minimum charge is reached. Plug into a known-good charger, leave for 15-20 minutes
            untouched, then try power.
          </p>

          <h2 id="safe-boot">Step 5 - Safe Boot</h2>
          <p>
            Safe Boot loads only the minimum drivers and skips third-party kernel extensions.
            Useful if the MacBook starts but freezes at the Apple logo.
          </p>
          <ul className="list-disc list-inside space-y-xs">
            <li>
              <strong>Apple Silicon:</strong> hold the power button until "Loading startup options"
              appears (about 10 seconds), select your disk, then hold Shift and click
              "Continue in Safe Mode".
            </li>
            <li>
              <strong>Intel:</strong> press power, immediately hold Shift, release at the login
              screen.
            </li>
          </ul>

          <h2 id="recovery-boot">Step 6 - Internet Recovery boot</h2>
          <p>
            If your SSD is corrupted but the rest of the MacBook is fine, Internet Recovery lets
            you reinstall macOS over WiFi. On Apple Silicon: hold the power button until startup
            options appear, click "Options", connect to WiFi. On Intel: Command+Option+R at
            startup.
          </p>

          <h2 id="external-display">Step 7 - External display test</h2>
          <p>
            Connect a known-good external display via USB-C or HDMI (with adapter). If the
            external lights up and shows the macOS desktop or login screen, the MacBook is alive
            - your built-in display, backlight driver, or display flex cable has failed. That's
            an AED 600-1,200 repair, not a board-level problem.
          </p>

          <h2 id="when-to-bring-in">When to stop trying and bring it in</h2>
          <p>If after all 7 steps the MacBook shows zero signs of life - no fan spin, no chime,
          no display, no current draw on a USB-C power meter - the issue is one of: failed
          charging IC, failed power management IC, deep liquid damage, or a dead M-chip. All
          require bench-level diagnosis.</p>

          <h2 id="what-we-do">What we'll do when you bring it in</h2>
          <ol className="list-decimal list-inside space-y-xs">
            <li>Bench power supply test - measure current draw at boot</li>
            <li>Open MacBook, inspect logic board under microscope</li>
            <li>Check voltage rails against schematic</li>
            <li>Quote you the exact component repair before proceeding</li>
            <li>Free diagnostic, no obligation</li>
          </ol>
          <p>
            <Link to="/macbook-logic-board-repair-dubai" className="text-accent font-semibold hover:underline">
              MacBook logic board repair page
            </Link>{" "}
            for full board-level diagnostic process.
          </p>

          <figure className="my-md flex flex-col items-center">
            <img
              src="/images/infographics/4-signs-macbook-needs-repair.png"
              alt="Four signs your MacBook needs repair: cracked or flickering screen, swollen or fast-draining battery, overheating and loud fan noise, and won't power on or boot"
              loading="lazy"
              decoding="async"
              width={512}
              height={640}
              className="rounded-md border border-border w-full max-w-[420px] h-auto"
            />
            <figcaption className="mt-xs text-[13px] text-text-muted text-center">
              The four warning signs that mean it&apos;s time for a professional MacBook diagnostic.
            </figcaption>
          </figure>
        </>
      }
      faqs={[
        {
          q: "How do I reset the SMC on an Apple Silicon MacBook?",
          a: "There is no separate SMC reset on M1/M2/M3/M4/M5 MacBooks. Apple folded the SMC functionality into the M-chip. Just shut down, hold the power button for 10 full seconds, release, wait 5 seconds, then press power. That's the equivalent action.",
        },
        {
          q: "My MacBook charges but won't turn on - what's wrong?",
          a: "Charging confirms the battery and charging IC are fine. The fault is downstream: the power management IC, the SoC start sequence, or the display. After SMC reset and NVRAM reset, try the external-display test (Step 7). If external works, your built-in display has failed.",
        },
        {
          q: "How long should I leave a discharged MacBook on the charger before testing?",
          a: "15-20 minutes minimum on a 67W or 96W Apple charger. Some deeply discharged batteries (sat unused 2+ months) need 30-45 minutes before the protection circuit allows the M-chip to boot. Do not press power repeatedly - it does nothing.",
        },
        {
          q: "Can I bring my MacBook in if it has water damage and won't turn on?",
          a: "Yes - and time matters. Don't try the 7 steps if liquid is the cause; they involve power-on attempts which accelerate corrosion. Bring it within 24 hours for the best 80-90% recovery rate. See our water-damage guide for full first-24-hour rules.",
        },
        {
          q: "What's the cost if it turns out to be a hardware fault?",
          a: "Diagnostic is free. Common causes and prices: charging IC AED 800-1,000, power management IC AED 1,000-1,300, display assembly AED 700-1,200, water damage cleanup AED 700-2,500. We quote in writing before any work begins.",
        },
        {
          q: "Will I lose my data if the logic board needs replacement?",
          a: "On M-series MacBooks the SSD is soldered to the board, so a board swap means data loss. We do component-level repair (fix the failed chip on your board) which preserves the SSD and your data in 80% of cases. See our logic-board guide for details.",
        },
      ]}
      relatedLinks={[
        { label: "MacBook logic board repair", href: "/macbook-logic-board-repair-dubai", description: "When self-diagnosis isn't enough." },
        { label: "Spilled water on MacBook - emergency action", href: "/blog/water-damage-macbook-immediate-action", description: "If liquid is the cause, do this first." },
        { label: "MacBook water damage cost & success rates", href: "/blog/macbook-water-damage-repair-cost-success-rates", description: "Pricing and recovery odds." },
      ]}
    />
  );
}
