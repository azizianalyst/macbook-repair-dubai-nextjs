"use client";
import { Link } from "@/lib/router-compat";
import BlogPostTemplate from "@/components/blocks/BlogPostTemplate";

export default function GuideMacBookHorizontalLines() {
  return (
    <BlogPostTemplate
      seoTitle="White or Grey Horizontal Lines on MacBook Screen (Fix)"
      seoDescription="Horizontal lines on a MacBook screen point to a loose display cable, Flexgate on 2016–2019 MacBook Pro, or a GPU fault. Diagnosis guide and Dubai repair cost."
      path="/white-or-grey-horizontal-lines-appearing-on-macbook-screen"
      category="Troubleshooting · MacBook Display"
      h1="White or Grey Horizontal Lines Appearing on MacBook Screen"
      hook="Horizontal lines on a MacBook screen are almost always a hardware fault, here's how to identify which one before you book a repair."
      quickAnswer="White or grey horizontal lines on a MacBook screen are almost always hardware: a failing display flex cable (most common), Flexgate damage on 2016–2019 MacBook Pro models, or a GPU fault on older Intel models. If the lines persist after a restart, software is not the cause, the display or its connection needs physical inspection."
      author={{ name: "Usman", role: "Senior MacBook technician" }}
      datePublished="2026-06-18"
      dateModified="2026-06-18"
      readingMinutes={6}
      featuredImageAlt="MacBook screen showing horizontal lines at a Dubai repair workshop diagnostic bench"
      body={
        <>
          <h2>What causes horizontal lines on a MacBook screen?</h2>
          <p>
            Horizontal lines, white, grey, or coloured, that span all or part of the MacBook
            display are almost always a hardware problem. The three most common causes, in order
            of frequency:
          </p>

          <h3>1. Loose or damaged display flex cable</h3>
          <p>
            The display flex cable (also called the LVDS cable on older models, or eDP cable on
            newer ones) carries the video signal from the logic board to the display panel. On
            MacBooks that have been previously opened, dropped, or subjected to stress, this cable
            can loosen from its connector or develop a micro-fracture. The result is horizontal
            noise lines, flickering, or a screen that works only at certain lid angles.
          </p>
          <p>
            <strong>How to test:</strong> open and close the lid slowly at different angles. If the
            lines appear or disappear at specific angles, or if gently flexing the hinge area changes
            the display, the cable is the suspect. This is a straightforward repair, reseating or
            replacing the cable typically costs AED 300–500.
          </p>

          <h3>2. Flexgate on 2016–2019 MacBook Pro</h3>
          <p>
            The 2016, 2017, 2018, and 2019 MacBook Pro 13" and 15" used a display flex cable that
            Apple routed over a sharp edge inside the hinge. With repeated lid opening and closing,
            the cable fatigues and fails. The typical progression:
          </p>
          <ul className="list-disc list-inside space-y-xs">
            <li>A backlight that fades from the bottom of the screen, especially at wide-open angles.</li>
            <li>A thin line of lighter colour at the bottom edge.</li>
            <li>Eventually, horizontal lines or a dead backlight.</li>
          </ul>
          <p>
            Apple acknowledged this issue and ran a{" "}
            <Link to="/apple-repair-programs-dubai" className="text-accent font-semibold hover:underline">
              free repair programme
            </Link>{" "}
            for affected 2016 and 2017 13" MacBook Pro models. Check if your serial number qualifies
           , we can verify this in the workshop for free. For models not covered, the display
            assembly replacement costs AED 800–1,400.
          </p>

          <h3>3. GPU fault on older Intel MacBooks</h3>
          <p>
            The 2011 MacBook Pro 15" and 17" had a known GPU fault where the discrete AMD Radeon
            GPU's solder connections fail with heat cycling. Symptoms include: horizontal lines
            across the full screen, a screen that goes grey and lines appear before a crash, or lines
            that appear only after the Mac warms up. Apple ran a free repair programme for this model
            which has since ended, but the GPU can be reflowed or replaced by a logic board repair
            specialist.
          </p>
          <p>
            The 2013 MacBook Pro 15" with Nvidia GPU had a similar issue. If your MacBook is from
            this era and lines appear only when hot, GPU is the prime suspect.
          </p>

          <h3>4. Physical damage to the LCD panel</h3>
          <p>
            If the MacBook was dropped or had something pressed between the lid and keyboard (a pen,
            earphone cable), the LCD panel can be physically damaged. Cracked or pressure-damaged
            LCDs typically show coloured or white lines in a specific area that don't change with
            lid angle. The panel needs replacement.
          </p>

          <h2>Software causes: very rare, but worth ruling out</h2>
          <p>
            True horizontal lines that are caused by software are unusual, but:
          </p>
          <ul className="list-disc list-inside space-y-xs">
            <li>Restart the Mac and check if lines appear on the startup screen before macOS loads. If lines appear in the startup screen, it's hardware. If they only appear in macOS, it could be a GPU driver issue, try a macOS reinstall or Safe Mode boot.</li>
            <li>Connect an external monitor. If the external display is clean and only the built-in screen has lines, it's the internal display or its cable, not the GPU.</li>
          </ul>

          <h2>Repair cost for horizontal lines in Dubai</h2>
          <ul className="list-disc list-inside space-y-xs">
            <li><strong>Display cable reseat:</strong> AED 200–300</li>
            <li><strong>Display flex cable replacement:</strong> AED 350–500</li>
            <li><strong>Full display assembly (Flexgate or panel damage):</strong> AED 800–1,800 depending on model</li>
            <li><strong>Logic board GPU repair:</strong> AED 600–1,200</li>
          </ul>
          <p>
            We diagnose first at no charge and give you a fixed price before any work starts.
            Bring it to Concord Tower, Dubai Media City, or use our{" "}
            <Link to="/macbook-repair-near-me" className="text-accent font-semibold hover:underline">
              free pickup service
            </Link>. Call or WhatsApp{" "}
            <a href="https://wa.me/971557413706" className="text-accent font-semibold hover:underline">
              055 741 3706
            </a>.
          </p>
        </>
      }
      faqs={[
        {
          q: "Why do horizontal lines appear on my MacBook screen after a drop?",
          a: "A drop can loosen the display flex cable connector, crack the LCD panel, or damage the GPU solder joints. The lines will persist after restart, if they were there immediately after the drop and a restart doesn't clear them, bring it in for a physical inspection.",
        },
        {
          q: "My MacBook Pro 2017 has a light band at the bottom and now horizontal lines. What is it?",
          a: "This is the classic Flexgate pattern, the display flex cable has fatigued over the hinge. It starts as a backlight fade at the bottom at wide-open angles and progresses to lines and eventual display failure. Apple ran a free repair for 2016 13\" MacBook Pro models; your 2017 model may qualify. Bring it in and we'll check your serial number.",
        },
        {
          q: "The lines only appear when the MacBook gets hot. Is that the GPU?",
          a: "Yes, lines that appear only after the machine warms up, especially on 2011–2013 MacBook Pros, are a classic sign of GPU solder joint failure. The solder expands and contracts with heat, and a cracked joint makes intermittent contact. The GPU needs reflowing or the board needs repair.",
        },
        {
          q: "Can I fix horizontal lines myself?",
          a: "A loose display cable can technically be reseated by someone comfortable opening a MacBook, but it requires the right screwdrivers (P5 pentalobe, T5 Torx) and care with the fragile connectors. Any mistake can cause further damage. We'd recommend a professional repair, the diagnostic is free and the cable reseat is inexpensive.",
        },
      ]}
      relatedLinks={[
        { label: "MacBook screen repair Dubai", href: "/macbook-screen-repair-dubai", description: "Display cable, panel and full assembly replacement, same-day service." },
        { label: "Apple repair programmes Dubai", href: "/apple-repair-programs-dubai", description: "Check if your MacBook qualifies for a free Apple repair on Flexgate or other known faults." },
        { label: "MacBook full diagnostic Dubai", href: "/macbook-full-diagnostic-dubai", description: "Free assessment, we confirm the exact cause before quoting." },
      ]}
    />
  );
}
