"use client";
import { Link } from "@/lib/router-compat";
import BlogPostTemplate from "@/components/blocks/BlogPostTemplate";
import { howTo } from "@/lib/schema";

const link = "text-accent font-semibold hover:underline";

export default function BlogMacBookKeyboardNotWorking() {
  const steps = [
    { name: "Restart and look for a stuck key", text: "Save your work and restart. A frozen process can lock the whole keyboard, and a restart clears it. Then run a finger across the keys and feel for one sitting lower than the rest or not springing back. A key held down by debris can stop the keys around it from registering." },
    { name: "Check Mouse Keys, Slow Keys and Sticky Keys", text: "Open System Settings, Accessibility. Under Pointer Control, turn off Mouse Keys: when it is on, keys such as 7, 8, 9, U, I, O, J, K, L and M move the pointer instead of typing. Under Keyboard, turn off Slow Keys (it ignores quick taps) and Sticky Keys (it holds modifier keys)." },
    { name: "Check function keys, input source and remapping apps", text: "In System Settings, Keyboard, check whether F1, F2 and so on are set to act as standard function keys, which makes the volume and brightness keys need Fn. Check the input source is the layout printed on your keys, and quit any key-remapping app before testing again." },
    { name: "Boot into Safe Mode", text: "On Apple silicon, shut down, hold the power button until startup options appear, select your disk, hold Shift and click Continue in Safe Mode. On Intel, restart and hold Shift until the login window. Safe Mode loads without third-party extensions, so if the keyboard types here, software is the cause." },
    { name: "Reset SMC and NVRAM on Intel Macs", text: "On an Intel MacBook, reset the SMC using Apple's steps for your model, then reset NVRAM by holding Option-Command-P-R for about 20 seconds at startup. Apple silicon Macs have no SMC reset and check NVRAM themselves, so a full shutdown and restart does the same job." },
    { name: "Test a USB or Bluetooth keyboard", text: "Plug in any USB keyboard or pair a Bluetooth one. If the external keyboard types perfectly while the built-in one doesn't, the fault is the internal keyboard or its cable, not macOS. That single test tells you whether you need a settings fix or a hardware repair." },
  ];
  return (
    <BlogPostTemplate
      seoTitle="MacBook Keyboard Not Working or Some Keys Dead? Fixes 2026"
      seoDescription="Some MacBook keys not working, no backlight, or keyboard and trackpad dead? Step-by-step fixes, spill first aid and when to repair. WhatsApp for a quote."
      path="/blog/macbook-keyboard-not-working-fix"
      wide
      toc={[
        { id: "software-or-keys", label: "Software or hardware?" },
        { id: "fixes-in-order", label: "The fixes, in order" },
        { id: "some-keys", label: "Some keys not working: read the pattern" },
        { id: "backlight", label: "Keyboard light not working" },
        { id: "keyboard-trackpad", label: "Keyboard and trackpad both dead" },
        { id: "spill", label: "Water or juice on the keyboard" },
        { id: "hardware-causes", label: "When it's hardware" },
        { id: "repair", label: "Repair in Dubai" },
      ]}
      category="Problem solving · MacBook"
      h1="MacBook Keyboard Not Working? Fixes When Some Keys Stop Typing"
      hook="When some MacBook keys stop working, the pattern of dead keys usually tells you the cause. Work through the checks below in order: most settings problems are fixed in five minutes, and you will know whether it needs a repair before you pay anyone."
      quickAnswer="If some MacBook keys stop working, restart first, then check System Settings > Accessibility for Mouse Keys, Slow Keys or Sticky Keys switched on. Test in Safe Mode and with an external keyboard. If an external keyboard works but the built-in keys don't, the fault is hardware: debris, a liquid spill, a worn key mechanism or a swollen battery."
      author={{ name: "Shafiq", role: "Lead technician" }}
      datePublished="2026-06-03"
      dateModified="2026-09-26"
      readingMinutes={9}
      featuredImageAlt="MacBook keyboard not working, technician testing the keyboard and top case at our Dubai Media City workshop"
      extraSchemas={[howTo({
        name: "Fix a MacBook keyboard when some keys are not working",
        description: "Six checks for a MacBook keyboard with dead keys or no typing at all, in priority order, before booking a hardware repair.",
        steps,
        totalTime: "PT15M",
      })]}
      body={
        <>
          <h2 id="software-or-keys">Is it software or the keys?</h2>
          <p>
            Find out which side the fault is on first. A setting toggled on by accident or a key-remapping
            app costs nothing to fix. Debris, a spill or a swollen battery needs the case opened.
          </p>
          <p>
            <strong>A software fault</strong> usually hits everything at once or behaves oddly: the whole
            keyboard goes dead, keys type the wrong characters, quick taps get ignored, or a set of keys moves
            the pointer. It often clears on a restart and an external keyboard usually misbehaves the same way.
          </p>
          <p>
            <strong>A hardware fault</strong> is local and permanent. One key or one row stops while the rest
            work, a key feels mushy or stuck, or the keyboard quit right after a spill. A reboot doesn&apos;t
            bring it back.
          </p>

          <h2 id="fixes-in-order">The fixes, in order</h2>
          <p>Work down the list and stop when the keys come back.</p>
          <ol className="list-decimal list-inside space-y-sm">
            {steps.map((s) => (
              <li key={s.name}><strong>{s.name}.</strong> {s.text}</li>
            ))}
          </ol>
          <p>
            Step 6 settles it. If the external keyboard works, macOS and the logic board are fine and the
            fault is in the built-in keyboard or its cable, which is a contained repair. If the external
            keyboard also misbehaves, go back to software: a macOS update or reinstall, not a keyboard swap.
          </p>

          <h2 id="some-keys">MacBook keyboard: some keys not working? Read the pattern</h2>
          <p>
            Which keys have died is the best clue we get on the bench. Match your symptom:
          </p>
          <ul className="list-disc list-inside space-y-xs">
            <li><strong>7, 8, 9, U, I, O, J, K, L, M don&apos;t type:</strong> almost always Mouse Keys. Turn it off in Accessibility &gt; Pointer Control. If the Option key is pressed five times with the shortcut enabled, it can switch itself back on.</li>
            <li><strong>One letter not working:</strong> debris under that key or a worn key mechanism. On a butterfly keyboard (2016 to 2019 MacBook Pro, 2018 to 2019 MacBook Air) a single crumb is enough.</li>
            <li><strong>A row or block of keys dead:</strong> usually liquid that reached the keyboard circuit, or a damaged cable. This rarely fixes itself.</li>
            <li><strong>Numbers not working on the MacBook keyboard:</strong> Mouse Keys first (it takes over 7, 8 and 9), then liquid, which often runs down the top row.</li>
            <li><strong>Volume or brightness keys not working:</strong> check System Settings &gt; Keyboard &gt; Keyboard Shortcuts &gt; Function Keys. If F1, F2 are set as standard function keys, you need to hold Fn.</li>
            <li><strong>Keys typing twice or repeating:</strong> a classic butterfly keyboard fault. Cleaning helps for a while; the lasting fix is a replacement.</li>
            <li><strong>Wrong characters appear:</strong> the input source is set to another layout, common on Arabic and English keyboards. Check the input menu in the menu bar.</li>
          </ul>

          <h2 id="backlight">MacBook keyboard light not working</h2>
          <p>
            First check it isn&apos;t a model without one: MacBook Neo has no keyboard backlight at all, so
            that is a design limit, not a fault. On other models:
          </p>
          <ul className="list-disc list-inside space-y-xs">
            <li>Raise it from Control Centre &gt; Keyboard Brightness, or with F5 and F6 on older Intel models.</li>
            <li>In System Settings &gt; Keyboard, turn off automatic brightness in low light and check the setting that turns the backlight off after a few seconds of inactivity.</li>
            <li>In a bright room the ambient light sensor may keep it off. Test in the dark.</li>
            <li>On Intel Macs, an SMC reset (step 5 above) restores a backlight stuck off.</li>
          </ul>
          <p>
            If the light still won&apos;t come on, or only part of the keyboard lights up, the backlight
            layer or its cable is damaged, often after a spill. That is a{" "}
            <Link to="/macbook-keyboard-repair-dubai" className={link}>MacBook keyboard repair</Link> job.
          </p>

          <h2 id="keyboard-trackpad">MacBook keyboard and trackpad not working together</h2>
          <p>
            When both fail at once, look for something they share. If an external keyboard and mouse also
            freeze, macOS has hung: hold the power button to force a restart. If only the built-in ones are
            dead, the usual causes are liquid that reached the top-case connectors, or a swollen battery
            pushing up from underneath. Signs of swelling: the trackpad clicks on its own or feels stiff, the
            case no longer sits flat, or the keys feel raised. Stop using and charging the Mac if you see
            those, because a swollen battery is a safety risk. See{" "}
            <Link to="/macbook-battery-swollen-repair-dubai" className={link}>swollen MacBook battery repair</Link>{" "}
            and{" "}
            <Link to="/macbook-trackpad-repair-dubai" className={link}>MacBook trackpad repair</Link>.
          </p>

          <h2 id="spill">Water or juice on the MacBook keyboard: the first hour</h2>
          <p>
            What you do in the first few minutes decides most spill repairs. Water is kinder than coffee,
            juice or soft drinks, which leave sugar and acid behind that keep corroding after the liquid
            dries. That is why spilled juice leads to sticky keys days later.
          </p>
          <ol className="list-decimal list-inside space-y-xs">
            <li>Shut it down immediately and unplug the charger. Don&apos;t keep typing to see if it works.</li>
            <li>Disconnect every accessory, then open the lid wide and stand the MacBook upside down in a tent shape so liquid drains away from the board.</li>
            <li>Blot the keys with a lint-free cloth. Don&apos;t use a hair dryer, and don&apos;t bury it in rice.</li>
            <li>Don&apos;t switch it on or charge it to test it. Power running through wet circuits is what causes most of the damage.</li>
          </ol>
          <p>
            <strong>How to clean a MacBook keyboard after a spill:</strong> with the Mac off, wipe the
            keycaps with a cloth lightly dampened with water or 70% isopropyl alcohol, never dripping. For
            debris, Apple advises holding the Mac at a 75-degree angle and using compressed air in short
            bursts across the keys. That is as far as you should go at home. Liquid under the keys needs the
            board out and cleaned; our{" "}
            <Link to="/macbook-water-damage-repair-dubai" className={link}>MacBook water damage repair</Link>{" "}
            page explains how that works.
          </p>

          <h2 id="hardware-causes">When it&apos;s hardware: butterfly keys, spills and batteries</h2>
          <p>
            <strong>Butterfly keyboards.</strong> The 2016 to 2019 MacBook Pro, the 2018 to 2019 MacBook Air
            and the 12-inch MacBook used Apple&apos;s butterfly design, where a crumb or grain of sand under a
            key stops it working. Apple&apos;s free keyboard service programme covered each Mac for four years
            after first sale, so it has run out for these models. A careful clean sometimes revives a key; often
            the mechanism is damaged and the keyboard needs replacing.
          </p>
          <p>
            <strong>Magic Keyboard models (2020 onwards).</strong> These scissor-switch keyboards are far more
            reliable. Most faults we see on them come from liquid or a knock to one key, and a single key
            mechanism can often be replaced.
          </p>
          <p>
            <strong>Apple vs an independent repair.</strong> Apple replaces the whole top case, which
            includes the battery on many models; an independent workshop can often replace just the keyboard
            or a single key. For the MacBook Air specifically, see our{" "}
            <Link to="/blog/macbook-air-keyboard-not-working-dubai" className={link}>MacBook Air keyboard guide</Link>.
          </p>

          <h2 id="repair">Getting it repaired in Dubai</h2>
          <p>
            Bring it to Concord Tower in Dubai Media City, or send it with our free pickup. The diagnosis is
            free, so you&apos;ll know whether it&apos;s a clean, a single key, a full keyboard, spill damage
            or the battery before you commit. The job might be one key mechanism, a keyboard replacement, spill
            cleaning, or a battery replacement to stop the swelling. Keyboard work carries a 15-day warranty.
          </p>
          <p>
            WhatsApp us the model or serial number, tell us which keys are out, and we&apos;ll tell you
            what&apos;s likely before you leave home. For model-by-model detail, see the{" "}
            <Link to="/blog/macbook-keyboard-repair-cost-by-model" className={link}>keyboard repair cost guide</Link>.
          </p>
        </>
      }
      faqs={[
        {
          q: "Why are only some keys on my MacBook keyboard not working?",
          a: "If the dead keys are 7, 8, 9, U, I, O, J, K, L and M, Mouse Keys is switched on; turn it off in Accessibility. A single dead letter is usually debris or a worn key mechanism. A dead row or block of keys usually means liquid or a damaged keyboard cable, which needs a workshop repair.",
        },
        {
          q: "How do I fix a MacBook keyboard that won't type at all?",
          a: "Restart, then check Accessibility for Mouse Keys, Slow Keys and Sticky Keys. Try Safe Mode, and on an Intel Mac reset the SMC and NVRAM. Finally plug in a USB keyboard. If that works but the built-in one doesn't, the internal keyboard or its cable has failed and needs repair. Keep using the external keyboard meanwhile.",
        },
        {
          q: "Why is my MacBook keyboard light not working?",
          a: "Check the model first: MacBook Neo has no keyboard backlight. On other MacBooks, raise the brightness from the keys or Control Centre, turn off automatic low-light adjustment and the inactivity timer in Keyboard settings, and test in a dark room. On Intel Macs reset the SMC. If it still stays dark, the backlight layer is damaged.",
        },
        {
          q: "I spilled water on my MacBook keyboard. What should I do?",
          a: "Shut it down, unplug it and disconnect accessories. Stand it upside down in a tent shape to drain, blot the keys, and don't switch it on or charge it to test. Don't use rice or a hair dryer. Bring it in as soon as you can; sugary drinks like juice and coffee need cleaning quickly before corrosion spreads.",
        },
        {
          q: "Can one key be replaced, or does the whole keyboard need changing?",
          a: "On Magic Keyboard MacBooks from 2020 onwards, a single damaged key mechanism can often be replaced. On butterfly keyboards a failed key frequently means the keyboard needs replacing. Apple replaces the whole top case; an independent workshop can usually replace just the keyboard. We confirm which applies after a free diagnosis.",
        },
        {
          q: "Is it worth repairing a MacBook keyboard or buying a new MacBook?",
          a: "On most MacBooks under five or six years old, a keyboard repair costs far less than a new machine, especially if everything else works. On an older butterfly MacBook Pro that has already had keyboard trouble, we will tell you honestly whether repairing, selling it as faulty or trading it in makes more sense. WhatsApp us for a quote.",
        },
      ]}
      relatedLinks={[
        { label: "MacBook keyboard repair Dubai", href: "/macbook-keyboard-repair-dubai", description: "Single keys, full keyboards and top-case work." },
        { label: "Keyboard repair cost by model", href: "/blog/macbook-keyboard-repair-cost-by-model", description: "Butterfly vs Magic Keyboard, model by model." },
        { label: "MacBook water damage repair", href: "/macbook-water-damage-repair-dubai", description: "What happens after a spill and how the board is cleaned." },
        { label: "Swollen MacBook battery", href: "/macbook-battery-swollen-repair-dubai", description: "Keys raised or trackpad clicking on its own? Check the battery." },
      ]}
    />
  );
}
