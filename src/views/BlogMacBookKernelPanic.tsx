"use client";
import { Link } from "@/lib/router-compat";
import BlogPostTemplate from "@/components/blocks/BlogPostTemplate";
import { howTo } from "@/lib/schema";

export default function BlogMacBookKernelPanic() {
  const steps = [
    { name: "Read the restart message and note the app", text: "When the Mac comes back it shows 'Your computer restarted because of a problem'. Click Report to see the panic log and look for a process or extension name near the top. The same app or kext appearing every time is your prime suspect. Note it before you close the box." },
    { name: "Disconnect every peripheral", text: "Unplug all USB devices, hubs, external drives, docks and secondary displays, and remove any non-Apple adapter. A faulty dock or a failing external drive is one of the most common panic triggers we see. Run the Mac bare for a day and watch whether the restarts stop." },
    { name: "Boot into Safe Mode", text: "On Apple Silicon, hold the power button until 'Loading startup options' shows, pick your disk with Shift held. On Intel, hold Shift at the chime. Safe Mode loads without third-party drivers and runs a disk check. If the panics stop in Safe Mode, a kext or login item is the cause, not the hardware." },
    { name: "Update macOS and remove dodgy extensions", text: "Install any pending macOS and app updates, since many panics are a known driver bug already patched. Then in System Settings, General, Login Items check for old system extensions, and uninstall anything you no longer use, especially VPNs, antivirus and disk tools that load kexts." },
    { name: "Free up disk space and run First Aid", text: "A drive with under 10 percent free panics under load. Clear space, then open Disk Utility and run First Aid on the system volume. A failing file system throws panics, and First Aid flags a disk that's starting to go before it takes your data with it." },
    { name: "Run Apple Diagnostics", text: "Shut down. On Apple Silicon hold the power button to startup options then press Cmd-D; on Intel hold D at the chime. Apple Diagnostics tests the RAM, board and sensors and returns a reference code. A hardware code here tells the technician exactly where to start." },
  ];
  return (
    <BlogPostTemplate
      seoTitle="MacBook Keeps Restarting? Kernel Panic Fixes (2026)"
      seoDescription="MacBook kernel panic or random restarts? Six fixes in order - read the panic log, unplug peripherals, Safe Mode, Apple Diagnostics - then know when it's RAM, the SSD or heat."
      path="/blog/macbook-kernel-panic-restarts-fix"
      wide
      toc={[
        { id: "software-or-hardware", label: "Software or hardware panic" },
        { id: "fixes-in-order", label: "The fixes, in order" },
        { id: "hardware-causes", label: "When it's hardware" },
        { id: "repair-cost", label: "What it costs" },
      ]}
      category="Problem solving · MacBook"
      h1="MacBook Keeps Restarting? Kernel Panic Fixes"
      hook="A MacBook that throws the 'restarted because of a problem' message is shouting software about nine times in ten - a bad driver, a dodgy dock, or a full disk. The panic log usually names the culprit, and the few hardware causes have a clean test each."
      quickAnswer="Random MacBook restarts and kernel panics are usually software: a faulty driver, a failing external drive, or a disk under 10 percent free. Read the panic log for the named process, unplug all peripherals, and test in Safe Mode. If panics continue bare and in Safe Mode, run Apple Diagnostics - the hardware causes are RAM, a failing SSD, heat, or a swollen battery."
      author={{ name: "Usman", role: "Senior MacBook logic-board technician" }}
      datePublished="2026-06-03"
      dateModified="2026-06-03"
      readingMinutes={9}
      featuredImageAlt="MacBook Kernel Panic Restarts Fix. MacBook kernel panic diagnostic in Dubai - technician reading the panic log and running Apple Diagnostics at the Media City workshop"
      extraSchemas={[howTo({
        name: "Fix a MacBook that keeps restarting or kernel panicking in six steps",
        description: "Six diagnostic steps for a MacBook throwing kernel panics or random restarts, in priority order, before booking hardware service.",
        steps,
        totalTime: "PT20M",
      })]}
      body={
        <>
          <h2 id="software-or-hardware">MacBook Kernel Panic Restarts Fix. Software panic or hardware panic?</h2>
          <p>
            A kernel panic is just macOS hitting something it can't recover from and restarting to
            stay safe. The cause is software the overwhelming majority of the time, which is why the
            first move is to read the log rather than reach for your wallet. Most of the panic jobs
            that reach our Dubai Media City bench are a bad driver, a failing external drive, or a disk
            that's run out of room. The hardware ones are real but fewer, and each has a test. If it
            does turn out to be the board or the storage, our{" "}
            <Link to="/macbook-full-diagnostic-dubai" className="text-accent font-semibold hover:underline">
              full MacBook diagnostic
            </Link>{" "}
            pins it down before any quote.
          </p>
          <p>
            <strong>A software panic</strong> usually names something. The log points at a process or
            extension, it happens when you launch one app or plug in one device, and it often stops
            the moment you remove that thing.
          </p>
          <p>
            <strong>A hardware panic</strong> is less fussy. It restarts at random with no pattern,
            gets worse under load or when the Mac is hot, or began after a knock or a spill. These
            don't care which app you're in.
          </p>

          <h2 id="fixes-in-order">The fixes, in order</h2>
          <p>
            Work down the list and watch for the pattern to break. Most random-restart jobs are solved
            before the diagnostic stage.
          </p>
          <ol className="list-decimal list-inside space-y-sm">
            <li>
              <strong>Read the panic log.</strong> Click Report on the restart message and note any
              process or extension named near the top. The repeat offender is your suspect.
            </li>
            <li>
              <strong>Unplug everything.</strong> All USB devices, hubs, drives, docks and adapters. A
              bad dock or dying external drive is a top trigger. Run bare for a day.
            </li>
            <li>
              <strong>Safe Mode.</strong> Loads without third-party drivers and checks the disk. If
              panics stop here, it's a kext or login item.
            </li>
            <li>
              <strong>Update and prune extensions.</strong> Install macOS and app updates, then remove
              old VPNs, antivirus and disk tools that load kexts.
            </li>
            <li>
              <strong>Disk space and First Aid.</strong> Clear space if under 10 percent free, then run
              First Aid in Disk Utility. A failing file system panics.
            </li>
            <li>
              <strong>Apple Diagnostics.</strong> Hold D (Intel) or Cmd-D from startup options (Apple
              Silicon). A reference code points at the hardware fault.
            </li>
          </ol>

          <h3>What the panic log is actually telling you</h3>
          <p>
            The wall of text scares people off, but you only need the top of it. Two lines do the
            work.
          </p>
          <p>
            Look for the line that starts "panicked task" or names a process, and the list of loaded
            kernel extensions just under it. A third-party name there, an antivirus driver, a VPN, a
            virtual-disk tool, is your cause nine times out of ten, and uninstalling it ends the
            panics. If the log instead points at the kernel itself with no third-party name, and it
            happens at random, that's when hardware moves up the list.
          </p>

          <h2 id="hardware-causes">When it's hardware: the common causes</h2>
          <p>
            If the panics survive a bare boot, Safe Mode and an update, it's usually one of four
            things. Here's what we actually find on the bench, roughly in order across Dubai.
          </p>
          <h3>Heat and a dust-clogged fan</h3>
          <p>
            A Mac that panics under load or when it's hot is often throttling against a heatsink packed
            with dust, and Dubai flats collect a lot of it. The fix is a strip, clean and fresh thermal
            paste, not a new part. We walk through the symptoms in our{" "}
            <Link to="/blog/macbook-fan-loud-always-on" className="text-accent font-semibold hover:underline">
              loud-fan guide
            </Link>, and a clean and repaste is AED 280.
          </p>
          <h3>A failing SSD</h3>
          <p>
            A drive on its way out throws panics as macOS fails to read or write. First Aid usually
            flags it. This is the one to act on quickly, because a failing SSD risks your files. Back
            up now and see our{" "}
            <Link to="/macbook-data-recovery-dubai" className="text-accent font-semibold hover:underline">
              data recovery page
            </Link>{" "}
            if the drive is already struggling.
          </p>
          <h3>RAM (Intel and older Macs)</h3>
          <p>
            On Intel MacBooks with removable or socketed memory, a failing RAM module is a classic
            panic cause, and Apple Diagnostics usually catches it. Apple Silicon has the memory built
            into the chip, so this one only applies to the older machines.
          </p>
          <h3>A swollen battery or board fault</h3>
          <p>
            A swollen battery can pressure the board into instability, and a genuine logic-board fault
            panics at random. Both need the bench. A swollen battery is also a safety issue, so stop
            using the Mac until it's replaced.
          </p>

          <h2 id="repair-cost">What it costs to fix in Dubai</h2>
          <p>
            We don't charge to look. Bring it to Concord Tower in Dubai Media City and the diagnostic
            is free, so you'll know whether it's heat, the SSD, the RAM or the board before you commit.
            The prices below are VAT-inclusive and depend on the model.
          </p>
          <p>
            A strip, clean and repaste to cure thermal panics is AED 280. An SSD replacement runs AED
            400 to 1,200 by capacity, and battery replacement is from AED 450. Memory and logic-board
            work starts from AED 800. If the drive is failing, deal with a{" "}
            <Link to="/macbook-data-recovery-dubai" className="text-accent font-semibold hover:underline">
              data recovery
            </Link>{" "}
            backup first, before anything else.
          </p>
          <p>
            Most clean and SSD jobs are same-day if the part's in stock, and we've been doing them at
            this address since 2004. WhatsApp the serial number on 055 741 3706 first, tell us what the
            panic log named, and we'll tell you what's likely before you leave home.
          </p>
        </>
      }
      faqs={[
        {
          q: "Why does my MacBook keep restarting on its own?",
          a: "Random restarts are kernel panics, and about nine in ten are software: a faulty driver, a failing external drive, or a disk under 10 percent free. Read the panic log for the named process, unplug all peripherals, and test in Safe Mode. If it still panics bare and in Safe Mode, run Apple Diagnostics, because then it's pointing at RAM, the SSD, heat or the battery.",
        },
        {
          q: "How much does it cost to fix a MacBook that keeps panicking in Dubai?",
          a: "It depends on the cause, and the diagnostic to find out is free. A clean and repaste for thermal panics is AED 280. An SSD replacement is AED 400 to 1,200 by capacity. Battery replacement is from AED 450, and board or RAM work starts from AED 800. All prices are VAT-inclusive. Most software causes cost nothing once we point you at them.",
        },
        {
          q: "Will reinstalling macOS stop the kernel panics?",
          a: "Often, if the cause is software. A clean reinstall clears a corrupt system file or a stubborn third-party kext that survived an update. Back up first, since a reinstall is a good moment to rule out the disk too. If the panics return on a fresh macOS with nothing installed, that's a strong sign the fault is hardware.",
        },
        {
          q: "Can a swollen battery cause restarts?",
          a: "It can. A battery swelling under the top case puts pressure on the board and can trigger instability and random shutdowns, alongside the keyboard and trackpad symptoms it usually causes. A swollen battery is a safety risk too. Stop using the Mac and have the battery replaced, from AED 450, rather than waiting for it to get worse.",
        },
        {
          q: "Is a kernel panic a sign my MacBook is dying?",
          a: "Not usually. Most panics are a single bad driver or a full disk, both easy fixes, not a dying Mac. The ones to take seriously are random panics that get worse under heat or that First Aid links to the drive. Bring it in for a free diagnostic and we'll tell you honestly whether it's a quick fix or the board.",
        },
        {
          q: "Do you need my password to diagnose the restarts?",
          a: "For a full diagnostic that checks the disk and reproduces the panic, it helps to log in, so yes, usually. We only ever use it on the bench in front of you where you can watch, and we never need your Apple ID password. If you'd rather not share it, we can still run Apple Diagnostics and the hardware tests without it.",
        },
        {
          q: "What if only one app makes my MacBook panic?",
          a: "Then it's that app or its driver, not the Mac itself. Update the app and macOS first, and check whether it installs a system extension you can remove. If a single program reliably triggers the panic, reinstalling it cleanly usually ends it. You won't need any hardware repair for a one-app panic.",
        },
      ]}
      relatedLinks={[
        { label: "Full MacBook diagnostic", href: "/macbook-full-diagnostic-dubai", description: "Free bench diagnostic and a fixed quote." },
        { label: "MacBook data recovery", href: "/macbook-data-recovery-dubai", description: "If a failing SSD is behind the panics." },
        { label: "MacBook running slow guide", href: "/blog/macbook-running-slow-10-fixes", description: "When it's sluggish rather than restarting." },
      ]}
    />
  );
}
