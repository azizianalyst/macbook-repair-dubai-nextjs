"use client";
import { Link } from "@/lib/router-compat";
import BlogPostTemplate from "@/components/blocks/BlogPostTemplate";
import { BlogPriceTable } from "@/components/blocks/BlogPriceTable";

export default function BlogMacBookKeyboardRepairCost() {
  return (
    <BlogPostTemplate
      seoTitle="MacBook Keyboard Repair Cost by Model: Dubai 2026"
      seoDescription="Butterfly top-case AED 700, Magic Keyboard single key AED 150. Full MacBook keyboard repair pricing by year and model, plus liquid spills and DIY risks."
      path="/blog/macbook-keyboard-repair-cost-by-model"
      wide
      toc={[
        { id: "keyboard-price-list", label: "Keyboard price list" },
        { id: "butterfly-problem", label: "Butterfly keyboard problem" },
        { id: "service-program", label: "Apple Service Program" },
        { id: "magic-vs-butterfly", label: "Magic vs Butterfly" },
        { id: "single-key-replacement", label: "Single key replacement" },
        { id: "spilled-liquid", label: "Spilled liquid action" },
        { id: "what-to-do-next", label: "What to do next" },
      ]}
      category="Cost guide · MacBook"
      h1="MacBook Keyboard Repair Cost - Every Model 2026"
      hook="Butterfly keyboard (2015-2019)? Top-case swap, AED 700. Magic Keyboard (2019+)? Single key replacement, AED 150. The model year decides everything."
      quickAnswer="MacBook keyboard repair in Dubai costs AED 150 (single Magic Keyboard key replacement, 2019+) up to AED 950 (full top-case for 16″ M5 Pro). Butterfly-keyboard MacBooks (2015-2019) require full top-case replacement at AED 700-800 because individual keys can't be repaired."
      author={{ name: "Usman", role: "Senior MacBook keyboard specialist" }}
      datePublished="2026-04-25"
      dateModified="2026-04-25"
      readingMinutes={10}
      featuredImageAlt="MacBook Keyboard Repair Cost. MacBook keyboard repair Dubai - Magic Keyboard scissor mechanism replacement"
      body={
        <>
          <h2 id="keyboard-price-list">MacBook Keyboard Repair Cost. The full MacBook keyboard price list - April 2026</h2>
          <BlogPriceTable
            caption="MacBook keyboard repair pricing - April 2026"
            rows={[
              { model: "MacBook 12″ Retina (2015-2017) - Butterfly v1/v2", ours: "AED 700", apple: "AED 1,299", note: "Top-case swap only" },
              { model: "MacBook Pro 13/15 (2016-2019) - Butterfly v2/v3", ours: "AED 750", apple: "AED 1,399", note: "Top-case swap; check Service Program first" },
              { model: "MacBook Air 13″ (2018-2019) - Butterfly v3", ours: "AED 700", apple: "AED 1,299", note: "Top-case swap; check Service Program" },
              { model: "MacBook Pro 13/16 (2019-2020) - Magic", ours: "AED 800", apple: "AED 1,499", note: "Single key possible AED 150" },
              { model: "MacBook Air M1/M2/M3/M4/M5 - Magic", ours: "AED 750", apple: "AED 1,349", note: "Single key AED 150" },
              { model: "MacBook Pro 14″ M1 Pro-M5 Max - Magic", ours: "AED 850", apple: "AED 1,599", note: "Single key AED 150" },
              { model: "MacBook Pro 16″ M1 Pro-M5 Max - Magic", ours: "AED 950", apple: "AED 1,799", note: "Single key AED 150" },
              { model: "Single key replacement (any Magic-keyboard MacBook)", ours: "AED 150", apple: "Not offered", note: "When mechanism intact" },
            ]}
          />

          <h2 id="butterfly-problem">Butterfly keyboard problem explained</h2>
          <p>
            Apple's "butterfly" mechanism shipped from 2015 (12″ MacBook) through 2019 (last 13″
            MacBook Pro). It used a scissor-style hinge with a single butterfly-shaped piece for a
            thinner profile and "more uniform key feel". In practice, dust particles smaller than
            a grain of sand could lodge under the dome and cause keys to either stick, repeat
            characters, or stop registering altogether.
          </p>
          <p>
            Apple iterated through three generations (v1 in 2015, v2 in 2016, v3 in 2018 with a
            silicone membrane) - none fully solved it. The class-action lawsuits and customer
            backlash led Apple to abandon butterfly and return to a refined scissor "Magic
            Keyboard" mechanism in late 2019.
          </p>
          <p>
            <strong>Why butterfly keyboards can't be repaired key-by-key:</strong> the keycap, dome,
            and membrane are bonded as a single assembly. Removing one to clean it almost always
            damages the layer below. Apple's official remedy is full top-case replacement (which
            includes the battery and trackpad). We do the same.
          </p>

          <h2 id="service-program">Apple's Keyboard Service Program (still active for some models)</h2>
          <p>
            Apple ran the "Keyboard Service Program for MacBook, MacBook Air, and MacBook Pro" from
            2018 to 2022. It covered free repair of butterfly-keyboard models for 4 years from the
            original purchase date. As of April 2026 the program is officially closed for all
            models.
          </p>
          <p>
            <strong>However:</strong> Apple Stores in UAE will still occasionally honour out-of-program
            repairs as a goodwill gesture, especially if the MacBook has documented butterfly
            symptoms. Worth a 5-minute Genius Bar visit before paying us. Our success rate for
            customers asking Apple is about 1 in 4 - not great, but the question is free.
          </p>

          <h2 id="magic-vs-butterfly">Magic Keyboard (2019+) vs Butterfly - repair difference</h2>
          <p>
            The Magic Keyboard returned to a true scissor mechanism with 1mm of travel (vs 0.5mm
            on butterfly). The keycap, scissor mechanism, and membrane are <strong>three separate
            pieces</strong> - meaning we can replace just one or two of them on a single key
            without touching the rest of the keyboard.
          </p>
          <p>
            For our customers this means a single sticky or unresponsive key on a 2020+ MacBook
            costs AED 150 (we have keycap and scissor stock for every Magic Keyboard MacBook). Only
            if multiple keys fail or the membrane below is damaged does it become a full top-case
            job.
          </p>

          <h2 id="single-key-replacement">Single key replacement - when possible</h2>
          <p>Single key replacement works when:</p>
          <ul className="list-disc list-inside space-y-xs">
            <li>The MacBook is a 2019 or newer Magic Keyboard model</li>
            <li>The membrane (the rubber dome under the scissor) is intact</li>
            <li>The keycap or scissor mechanism is the only damage (most common cause: pet chew, child pry, dropped object)</li>
            <li>The backlight LED beneath is still working</li>
          </ul>
          <p>
            We diagnose at the bench in 5 minutes. If single-key works, AED 150 same-day. If the
            membrane is torn or the LED is dead, it becomes a top-case job (AED 750-950).
          </p>

          <h2 id="spilled-liquid">Spilled liquid on keyboard - emergency action</h2>
          <p>This sequence buys you the best chance of a single-key fix instead of a top-case swap:</p>
          <ol className="list-decimal list-inside space-y-xs">
            <li>Power off in 10 seconds. Hold the power button.</li>
            <li>Unplug the charger.</li>
            <li>Open lid 90°, flip MacBook upside down on a towel. Let it drain 12 hours.</li>
            <li>Do NOT use a hairdryer or rice (see our water-damage post for why).</li>
            <li>Bring to us within 24 hours.</li>
          </ol>
          <p>
            With this routine, we save the keyboard with a single-key or 2-3 key swap in about 60%
            of liquid spills. Without it, 80% become full top-case jobs because the spilled liquid
            corrodes the underlying membrane within 48 hours.
          </p>

          <h2 id="what-to-do-next">What to do next</h2>
          <p>
            <Link to="/macbook-keyboard-repair-dubai" className="text-accent font-semibold hover:underline">
              MacBook keyboard repair service page
            </Link>{" "}
            - or WhatsApp 055 741 3706 with your model year and a photo of the affected key. Quote
            in 4 minutes.
          </p>
        </>
      }
      faqs={[
        {
          q: "Can you replace just one key on a MacBook keyboard?",
          a: "Yes - for any 2019 or later Magic Keyboard MacBook (Pro, Air, or 12″ MacBook). AED 150 same-day if the membrane underneath is intact. For butterfly keyboards (2015-2019), no - Apple's design bonds the layers and individual keys cannot be replaced.",
        },
        {
          q: "Is the Apple Keyboard Service Program still active in 2026?",
          a: "Officially closed in 2022. In practice, Apple Stores in UAE occasionally still honour out-of-program butterfly keyboard repairs as a goodwill gesture - worth asking before paying us. Success rate is about 1 in 4 of customers we send to ask first.",
        },
        {
          q: "Why do I have to replace the whole top-case for a keyboard issue?",
          a: "On butterfly-keyboard MacBooks (2015-2019), the keyboard is riveted into the top-case and not removable as a separate part - Apple's design forces a top-case swap. On Magic Keyboard MacBooks, the keyboard is also riveted but individual keys can be swapped if the membrane is intact.",
        },
        {
          q: "How long does a top-case keyboard replacement take?",
          a: "2-4 hours of bench time. We strip the MacBook completely (battery, logic board, screen all come out), swap the top-case, then reinstall everything. Most jobs are same-day if dropped before 11am. The new top-case includes a fresh keyboard, trackpad, and battery - three repairs for the price of one.",
        },
        {
          q: "Will my MacBook serial number change after top-case replacement?",
          a: "No. The serial number is stored on the logic board, not the top-case. Your AppleCare status, iCloud lock, and warranty record are unaffected.",
        },
      ]}
      relatedLinks={[
        { label: "MacBook keyboard repair hub", href: "/macbook-keyboard-repair-dubai", description: "Full service page - single-key and top-case." },
        { label: "MacBook water damage repair", href: "/macbook-water-damage-repair-dubai", description: "When liquid hits the keyboard." },
        { label: "MacBook screen repair cost guide", href: "/blog/macbook-screen-repair-cost-dubai-2026", description: "Companion price guide." },
      ]}
    />
  );
}
