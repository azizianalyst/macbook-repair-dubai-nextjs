"use client";
import { Link } from "@/lib/router-compat";
import BlogPostTemplate from "@/components/blocks/BlogPostTemplate";
import { howTo } from "@/lib/schema";

export default function BlogMacBookKeyboardNotWorking() {
  const steps = [
    { name: "Restart and look for a stuck key", text: "Save your work and restart. A single frozen process can lock the whole keyboard, and a restart clears it. While it boots, run a finger across the keys and feel for one sitting lower than the rest or not springing back. A stuck key can block the entire row around it." },
    { name: "Check the accessibility settings", text: "Open System Settings, Accessibility, Keyboard. If Slow Keys is on, the Mac ignores quick taps and the keyboard feels dead. If Mouse Keys is on, the number pad moves the pointer instead of typing. Both get switched on by accident with a key combo, and both make a working keyboard look broken." },
    { name: "Remove keyboard-remapping apps", text: "If you've installed Karabiner-Elements, a custom layout, or any app that remaps keys, quit it and test. A bad remap or a crashed helper can swallow keystrokes. Boot with these closed before you assume the hardware has failed." },
    { name: "Boot into Safe Mode", text: "On Apple Silicon, hold the power button until 'Loading startup options' appears, pick your disk while holding Shift. On Intel, hold Shift at the chime. Safe Mode loads without third-party drivers. If the keyboard types fine here, a piece of software is the culprit, not the keys." },
    { name: "Reset SMC and NVRAM (Intel Macs)", text: "On an Intel MacBook, reset the SMC, which manages the keyboard and power, then reset NVRAM with Cmd-Option-P-R held through two chimes. Apple Silicon handles both automatically, so skip this on M1 and later and move to the external-keyboard test." },
    { name: "Test a USB or Bluetooth keyboard", text: "Plug in any USB keyboard, or pair a Bluetooth one. If the external keyboard types perfectly while the built-in one doesn't, the fault is the internal keyboard or its ribbon cable, not macOS. That's the single test that tells you whether this is a software fix or a hardware repair." },
  ];
  return (
    <BlogPostTemplate
      seoTitle="MacBook Keyboard Not Working? Fixes (2026)"
      seoDescription="MacBook keys not typing or a dead row? Six fixes in order - restart, Slow Keys check, Safe Mode, external-keyboard test - then know when it's debris, a spill, or a swollen battery."
      path="/blog/macbook-keyboard-not-working-fix"
      category="Problem solving · MacBook"
      h1="MacBook Keyboard Not Working? Fixes & Causes"
      hook="A dead MacBook keyboard is a software setting about a third of the time, a speck of debris under one key a good slice of the rest, and a spill or a swollen battery for the stubborn cases. You can sort out which in a few minutes before paying anyone."
      quickAnswer="If your MacBook keyboard stops typing, restart first, then check Accessibility for Slow Keys or Mouse Keys switched on by accident. Test in Safe Mode and with an external keyboard. If the external one types fine but the built-in keys don't, it's the internal keyboard or its ribbon - usually debris, a spill, or a swollen battery pressing from below."
      author={{ name: "Ali", role: "Senior MacBook hardware technician" }}
      datePublished="2026-06-03"
      dateModified="2026-06-03"
      readingMinutes={9}
      featuredImageAlt="MacBook keyboard repair in Dubai - technician testing the keyboard ribbon and top case at the Media City workshop"
      extraSchemas={[howTo({
        name: "Fix a MacBook keyboard that isn't working in six steps",
        description: "Six diagnostic steps for a MacBook keyboard with dead keys or no typing at all, in priority order, before booking hardware service.",
        steps,
        totalTime: "PT15M",
      })]}
      body={
        <>
          <h2>Is it the software or the keys?</h2>
          <p>
            Before you write off the keyboard, find out which side the fault is on, because the fix
            splits right here. A surprising number of dead-keyboard jobs that come into our Dubai
            Media City workshop turn out to be a setting toggled on by accident or a stray remapping
            app, both free to fix. The rest are genuine hardware: debris under a key, an old spill, or
            a battery swelling up underneath. If it does need the keyboard replaced, our{" "}
            <Link to="/macbook-keyboard-repair-dubai" className="text-accent font-semibold hover:underline">
              MacBook keyboard repair
            </Link>{" "}
            starts at AED 150 for a single key.
          </p>
          <p>
            <strong>A software fault</strong> usually hits everything at once or behaves oddly. The
            whole keyboard goes dead, keys type the wrong characters, or quick taps get ignored. It
            often clears on a restart and almost always types fine with an external keyboard plugged
            in.
          </p>
          <p>
            <strong>A hardware fault</strong> is more local and more permanent. One key or one row
            stops while the rest work, a key feels mushy or stuck, or the keyboard quit right after a
            spill. These don't come back on a reboot.
          </p>

          <h2>The fixes, in order</h2>
          <p>
            Work down the list and stop when the keys come back. Most people who think the keyboard's
            finished are two steps from typing again.
          </p>
          <ol className="list-decimal list-inside space-y-sm">
            <li>
              <strong>Restart and check for a stuck key.</strong> A frozen process can lock the whole
              keyboard. Feel for a key sitting low or not springing back.
            </li>
            <li>
              <strong>Accessibility settings.</strong> Settings, Accessibility, Keyboard. Slow Keys
              makes the keyboard ignore quick taps; Mouse Keys turns the number pad into a pointer.
              Both get switched on by accident.
            </li>
            <li>
              <strong>Remapping apps.</strong> Quit Karabiner-Elements or any custom-layout tool and
              test. A bad remap swallows keystrokes.
            </li>
            <li>
              <strong>Safe Mode.</strong> Loads without third-party drivers. If typing works here,
              it's software, not the keys.
            </li>
            <li>
              <strong>SMC and NVRAM reset (Intel only).</strong> Resets the controller that manages
              the keyboard. Apple Silicon does this for you.
            </li>
            <li>
              <strong>External keyboard test.</strong> If a USB or Bluetooth keyboard types fine while
              the built-in one doesn't, the fault is the internal keyboard or its ribbon.
            </li>
          </ol>

          <h3>What the external keyboard test tells you</h3>
          <p>
            This is the test that settles it, so it's worth a minute. Plug in any USB keyboard and
            type.
          </p>
          <p>
            If the external keyboard works perfectly, your Mac, macOS and the logic board are all
            fine, and the fault is entirely in the built-in keyboard or the ribbon cable that connects
            it to the board. That's a hardware repair, but a contained one. If the external keyboard
            also misbehaves, the problem is software or, rarely, the board itself, and the fix path
            goes back to a clean macOS install rather than a keyboard swap.
          </p>

          <h2>When it's hardware: the common causes</h2>
          <p>
            If you've run the list and a row is still dead, it's usually one of three things. Here's
            what we actually find when we open the case, roughly in the order we see it across Dubai.
          </p>
          <h3>Debris under a butterfly key</h3>
          <p>
            The 2016 to 2019 MacBook Pro and the 12″ MacBook used Apple's butterfly keyboard, and a
            single crumb or grain of sand under a key kills it. Desert dust doesn't help. Sometimes a
            careful clean brings the key back; often the key mechanism is damaged and the fix is a
            keyboard or top-case replacement. We see these most weeks.
          </p>
          <h3>A liquid spill</h3>
          <p>
            Coffee, water or juice across the keyboard seeps under the keys and corrodes the membrane
            or the ribbon. The keyboard might half-work for a day, then fade. Speed matters here. Power
            it off, don't charge it, and bring it in fast. We cover the first steps in our{" "}
            <Link to="/macbook-water-damage-repair-dubai" className="text-accent font-semibold hover:underline">
              MacBook water damage repair
            </Link>{" "}
            page, and the sooner it reaches the bench the better the outcome.
          </p>
          <h3>A swollen battery pressing up</h3>
          <p>
            On a Mac that's three or more years old, a battery swelling beneath the top case pushes up
            on the keyboard and trackpad. Keys stop pressing properly and the trackpad clicks on its
            own. A swollen battery is also a safety issue, so stop using the Mac and get it replaced
            rather than waiting.
          </p>

          <h2>What it costs to fix in Dubai</h2>
          <p>
            We don't charge to look. Bring it to Concord Tower in Dubai Media City and the diagnostic
            is free, so you'll know whether it's a clean, a key, a spill or the battery before you
            commit. Prices below are VAT-inclusive and depend on the model.
          </p>
          <p>
            A single Magic Keyboard key is from AED 150. A full keyboard or top-case replacement on a
            butterfly-era Pro runs about AED 700, because Apple bonds the keyboard to the top case.
            Spill cleaning and ribbon work starts from AED 400 depending on the damage. Battery
            replacement to stop the swelling is from AED 450. The full model-by-model breakdown is in
            our{" "}
            <Link to="/blog/macbook-keyboard-repair-cost-by-model" className="text-accent font-semibold hover:underline">
              keyboard repair cost guide
            </Link>.
          </p>
          <p>
            Most key and clean jobs are same-day if the part's in stock, and we've been doing them at
            this address since 2004. WhatsApp the serial number on 055 741 3706 first, tell us which
            keys are out, and we'll tell you what's likely before you leave home.
          </p>
        </>
      }
      faqs={[
        {
          q: "Why has my MacBook keyboard stopped working?",
          a: "About a third of the time it's a setting, usually Slow Keys or Mouse Keys switched on by accident, or a key-remapping app. The rest is hardware: debris under a key, an old spill, or a swollen battery pressing up on the keyboard. Test in Safe Mode and with an external keyboard to tell which side it's on.",
        },
        {
          q: "How much does a MacBook keyboard repair cost in Dubai?",
          a: "A single Magic Keyboard key is from AED 150. A full keyboard or top-case replacement on a butterfly-era Pro is about AED 700, since Apple bonds the keyboard to the top case. Spill cleaning starts from AED 400, and the diagnostic to find out is free. All prices are VAT-inclusive. WhatsApp the serial first for a tighter figure.",
        },
        {
          q: "Will cleaning fix a dead key on a butterfly keyboard?",
          a: "Sometimes. A crumb or grain of sand under a 2016 to 2019 butterfly key can be cleared with a careful clean and compressed air. But the mechanism is fragile, and often the key is damaged and needs a keyboard or top-case swap. Bring it in and we'll try the clean first, free, before quoting anything bigger.",
        },
        {
          q: "Can you repair a MacBook keyboard after a spill?",
          a: "Usually, if it reaches us quickly. A spill corrodes the membrane and ribbon under the keys, so speed decides the outcome. Power off, don't charge it, and get it to the bench fast. We clean the corrosion and replace what's damaged. Most spills are recoverable inside the first day, less so after the liquid has dried in.",
        },
        {
          q: "Do my keys click on their own and feel stiff together?",
          a: "That's the classic sign of a swollen battery pushing up on the top case from below. It presses the keyboard and trackpad, so keys stop pressing cleanly and the trackpad clicks by itself. A swollen battery is a safety risk too. Stop using the Mac and have the battery replaced, from AED 450, rather than waiting.",
        },
        {
          q: "Is it worth replacing the keyboard or should I buy a new MacBook?",
          a: "On most Macs three to five years old, a AED 700 keyboard repair is well worth it against a new machine, especially if everything else works. On older butterfly Pros that have failed twice, we'll be honest about whether to repair or trade in. The free diagnostic includes that advice, with no pressure either way.",
        },
        {
          q: "What if only the external keyboard works?",
          a: "Then the fault is confirmed as the built-in keyboard or its ribbon cable, not macOS, which is actually good news because it's a contained hardware fix. Keep using the external keyboard in the meantime. Bring the Mac to our Dubai Media City workshop and we'll quote the internal repair after a free diagnostic.",
        },
      ]}
      relatedLinks={[
        { label: "MacBook keyboard repair Dubai", href: "/macbook-keyboard-repair-dubai", description: "Single keys, full keyboards and top-case swaps." },
        { label: "Keyboard repair cost by model", href: "/blog/macbook-keyboard-repair-cost-by-model", description: "Butterfly vs Magic Keyboard pricing, model by model." },
        { label: "MacBook water damage repair", href: "/macbook-water-damage-repair-dubai", description: "First steps and recovery rates after a spill." },
      ]}
    />
  );
}
