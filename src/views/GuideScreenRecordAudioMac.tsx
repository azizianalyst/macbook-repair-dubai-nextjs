"use client";
import { Link } from "@/lib/router-compat";
import BlogPostTemplate from "@/components/blocks/BlogPostTemplate";
import { howTo } from "@/lib/schema";

export default function GuideScreenRecordAudioMac() {
  const steps = [
    { name: "Download a virtual audio driver", text: "Install BlackHole (free, github.com/ExistentialAudio/BlackHole) or Loopback by Rogue Amoeba. This creates a virtual audio device macOS can treat as both an output and an input, which is the missing piece that lets you capture system sound." },
    { name: "Open Audio MIDI Setup", text: "Go to Applications → Utilities → Audio MIDI Setup. This is the macOS app where you combine real and virtual audio devices into custom routing setups." },
    { name: "Create a Multi-Output Device", text: "Click the + button in the bottom-left and choose 'Create Multi-Output Device'. Tick both your speakers/headphones AND BlackHole. This sends sound to your ears and to BlackHole at the same time, so you can still hear what you record." },
    { name: "Set the Multi-Output Device as system output", text: "Open System Settings → Sound → Output and select your new Multi-Output Device. Now every system sound is also being routed into BlackHole, ready to be recorded." },
    { name: "Pick BlackHole as the recording source", text: "Open the Screenshot toolbar with Command + Shift + 5, click Options, and under Microphone choose 'BlackHole 2ch'. The recorder now captures system audio instead of (or alongside) the mic." },
    { name: "Record mic and system audio together", text: "To capture your voice AND system sound, create an Aggregate Device in Audio MIDI Setup combining your microphone and BlackHole, then select that Aggregate Device as the microphone in the Command + Shift + 5 Options menu." },
    { name: "Record and verify", text: "Click Record, do your screen capture, then stop from the menu bar icon. Open the saved .mov and confirm both system audio and voice are present before you rely on it." },
  ];

  return (
    <BlogPostTemplate
      seoTitle="How to Record Audio While Screen Recording on Mac"
      seoDescription="No system sound when screen recording on Mac? Why Cmd-Shift-5 and QuickTime catch only the mic, and how BlackHole plus a Multi-Output Device grab it."
      path="/how-can-i-record-audio-while-screen-recording-on-mac"
      category="How-to · macOS"
      h1="How to Record Audio While Screen Recording on a Mac"
      hook="The built-in screen recorder grabs your microphone but silently drops all internal sound - here's the catch, and the free fix that captures system audio and your voice together."
      quickAnswer="The macOS Screenshot toolbar (Cmd-Shift-5) and QuickTime record your microphone but NOT internal system audio by default. To capture system sound, install a free virtual audio driver like BlackHole, route it through a Multi-Output Device in Audio MIDI Setup, then select BlackHole as the recording source."
      author={{ name: "Usman", role: "Senior MacBook technician" }}
      datePublished="2026-05-30"
      dateModified="2026-05-30"
      readingMinutes={8}
      featuredImageAlt="Recording system audio while screen recording on a MacBook in Dubai using BlackHole and a Multi-Output Device in Audio MIDI Setup"
      extraSchemas={[howTo({
        name: "Record system audio while screen recording on a Mac",
        description: "Capture internal/system sound plus your microphone during a Mac screen recording using a free virtual audio driver and a Multi-Output Device.",
        steps,
        totalTime: "PT10M",
      })]}
      body={
        <>
          <h2>The catch: macOS won't record system audio by default</h2>
          <p>
            This is the single thing that trips up almost everyone. When you press
            <strong> Command + Shift + 5</strong> to open the Screenshot toolbar and start a screen
            recording, macOS will happily capture your <strong>microphone</strong> - but it will
            not record the <strong>internal/system audio</strong> playing through your speakers. So
            the music in a video, the sound from a game, a Zoom call, or a YouTube clip you're
            demonstrating all come out completely silent in the saved file.
          </p>
          <p>
            QuickTime Player has the exact same limitation. File → New Screen Recording lets you
            pick a microphone, but there is no option for "internal audio" anywhere in stock macOS.
            Apple leaves system-audio capture out for privacy and licensing reasons, which is why
            so many people end up with a perfect video and no sound.
          </p>

          <h2>Why this happens</h2>
          <p>
            macOS treats audio inputs (microphones) and outputs (speakers) as separate worlds.
            The screen recorder can only listen to an <em>input</em> device. Your system sound is an
            <em> output</em>, so there's simply no input for the recorder to grab. The fix is to
            create a virtual device that is both an output and an input at the same time - that way
            system sound flows out into it, and the recorder reads it back in.
          </p>

          <h2>The fix: a virtual audio driver</h2>
          <p>
            You need a small piece of software called a virtual audio driver. The two most popular:
          </p>
          <ul className="list-disc list-inside space-y-xs">
            <li><strong>BlackHole</strong> - free and open source (from Existential Audio). It installs a silent virtual device called "BlackHole 2ch". This is the option we recommend to most people.</li>
            <li><strong>Loopback</strong> - paid, by Rogue Amoeba. More polished with a visual routing interface, drag-and-drop sources, and per-app capture. Worth it if you do this regularly.</li>
          </ul>
          <p>
            Either one solves the same problem: it gives macOS an audio device that can carry your
            system sound into the screen recorder.
          </p>

          <h2>Setting up BlackHole with a Multi-Output Device</h2>
          <p>
            After installing BlackHole, the key step is building a <strong>Multi-Output Device</strong>
            in <strong>Audio MIDI Setup</strong> (Applications → Utilities → Audio MIDI Setup). A
            Multi-Output Device sends sound to two places at once - your real speakers (so you can
            still hear) and BlackHole (so it can be recorded). Without this step, switching your
            output to BlackHole alone would make your Mac go silent.
          </p>
          <ul className="list-disc list-inside space-y-xs">
            <li>Click the <strong>+</strong> at the bottom-left → <strong>Create Multi-Output Device</strong>.</li>
            <li>Tick both your <strong>built-in speakers / headphones</strong> and <strong>BlackHole 2ch</strong>.</li>
            <li>Set your real speakers as the <strong>Primary Device</strong> for clean clock sync.</li>
            <li>In System Settings → Sound → Output, choose the new <strong>Multi-Output Device</strong>.</li>
          </ul>

          <h2>Choosing the source in the Options menu</h2>
          <p>
            Now open the recorder with <strong>Command + Shift + 5</strong> and click
            <strong> Options</strong>. Under the <strong>Microphone</strong> heading you'll now see
            "BlackHole 2ch" listed. Select it, and your recording will capture system audio. To grab
            your <em>voice and system sound together</em>, create an <strong>Aggregate Device</strong>
            in Audio MIDI Setup that combines your microphone and BlackHole, then pick that Aggregate
            Device in the Options menu instead.
          </p>

          <h2>macOS Sequoia 15 and later: a built-in option</h2>
          <p>
            Good news if you're on a newer Mac. Starting with <strong>macOS Sequoia 15</strong>,
            Apple has begun adding native system-audio capture in some places - certain apps and the
            newer screen-recording flow now offer a "Microphone + System Audio" style choice without
            any virtual driver. It isn't everywhere yet, so if your version of the
            Command + Shift + 5 toolbar still only lists microphones, the BlackHole method above is
            still the reliable route. Always keep macOS updated via System Settings → General →
            Software Update so you get these features as they roll out.
          </p>

          <h2>Common problem: no sound in the recording</h2>
          <p>
            The most frequent complaint is opening the finished .mov and hearing nothing. Work
            through these in order:
          </p>
          <ul className="list-disc list-inside space-y-xs">
            <li><strong>Wrong source selected:</strong> in Command + Shift + 5 → Options, the Microphone is probably still set to "None" or the built-in mic. Switch it to BlackHole or your Aggregate Device.</li>
            <li><strong>Output not routed:</strong> System Settings → Sound → Output must be set to your Multi-Output Device, not plain speakers, or no sound reaches BlackHole.</li>
            <li><strong>Volume at zero:</strong> a Multi-Output Device can't be volume-controlled with the keyboard keys - set app and system volume before you start.</li>
            <li><strong>Device renamed or removed:</strong> if you deleted BlackHole from Audio MIDI Setup, recreate the Multi-Output Device from scratch.</li>
            <li><strong>You can't hear yourself:</strong> that's normal - the Multi-Output Device sends to BlackHole silently; check the recording afterwards to confirm sound was captured.</li>
            <li><strong>Hardware fault:</strong> if no app records any audio - even a normal mic - the issue may be the audio controller or speakers, not your setup. Our <Link to="/macbook-speaker-repair-dubai" className="text-accent-bright font-semibold hover:underline">MacBook speaker and audio repair in Dubai</Link> can diagnose it.</li>
          </ul>

          <h2>If audio still won't work after a clean setup</h2>
          <p>
            A botched audio driver install, a corrupt Core Audio configuration, or a left-over
            virtual device from an old app can break sound system-wide - sometimes to the point where
            even Zoom or Music play nothing. A clean macOS reinstall clears these conflicts without
            touching your files. We handle <Link to="/mac-os-reinstall-dubai" className="text-accent-bright font-semibold hover:underline">macOS reinstall in Dubai</Link> if you'd
            rather not risk it, or run a <Link to="/macbook-full-diagnostic-dubai" className="text-accent-bright font-semibold hover:underline">full MacBook diagnostic</Link> to
            rule out a hardware fault. If recordings only stutter when the Mac is under load, it may
            be a performance issue - see our <Link to="/blog/macbook-running-slow-10-fixes" className="text-accent-bright font-semibold hover:underline">10 fixes for a slow MacBook</Link>.
          </p>

          <h2>Quick recap</h2>
          <ul className="list-disc list-inside space-y-xs">
            <li>Cmd-Shift-5 and QuickTime record the mic only - never system audio by default.</li>
            <li>Install BlackHole (free) or Loopback (paid) to add a virtual audio device.</li>
            <li>Build a Multi-Output Device in Audio MIDI Setup so you still hear your Mac.</li>
            <li>Select BlackHole - or an Aggregate Device for mic + system - in the Options menu.</li>
            <li>On macOS Sequoia 15+, watch for the new built-in system-audio option in some apps.</li>
          </ul>
        </>
      }
      faqs={[
        {
          q: "Why does my Mac screen recording have no sound?",
          a: "Because the macOS Screenshot toolbar (Cmd-Shift-5) and QuickTime only record your microphone, not internal/system audio. If you didn't select a mic - or you were trying to capture music or a video's sound - the recording comes out silent. You need a virtual audio driver like BlackHole to capture system audio.",
        },
        {
          q: "Can the built-in Cmd-Shift-5 recorder capture system audio?",
          a: "Not by itself in most macOS versions - it can only record a microphone input. To capture internal sound you route system audio through a virtual device (BlackHole) and select it as the microphone in the Options menu. macOS Sequoia 15 and later are starting to add a native system-audio option in some apps.",
        },
        {
          q: "What is BlackHole and is it safe?",
          a: "BlackHole is a free, open-source virtual audio driver from Existential Audio. It creates a silent audio device that macOS can use as both an output and an input, which is how it carries your system sound into the screen recorder. It's widely used and safe; download it only from the official GitHub page.",
        },
        {
          q: "Do I need a Multi-Output Device, or just BlackHole?",
          a: "You need both for a usable setup. If you set BlackHole alone as your output, your Mac goes silent because sound only goes to BlackHole. A Multi-Output Device in Audio MIDI Setup sends sound to your speakers AND BlackHole at once, so you can hear and record at the same time.",
        },
        {
          q: "How do I record my voice and system audio together?",
          a: "Create an Aggregate Device in Audio MIDI Setup that combines your microphone and BlackHole. Then in the Cmd-Shift-5 Options menu, select that Aggregate Device as the microphone. The recording will capture both your voice and the Mac's internal sound.",
        },
        {
          q: "Does macOS Sequoia let me record system audio without extra apps?",
          a: "Partly. Starting with macOS Sequoia 15, Apple began adding a built-in 'Microphone + System Audio' style option in some apps and the newer recording flow. It isn't available everywhere yet, so if your Cmd-Shift-5 toolbar still only lists microphones, use the BlackHole and Multi-Output Device method.",
        },
        {
          q: "Why can't I hear anything while recording with BlackHole?",
          a: "If you routed output only to BlackHole instead of a Multi-Output Device, no sound reaches your speakers. Build a Multi-Output Device that includes both your speakers and BlackHole, and set that as the output. You'll hear audio normally while it's still captured.",
        },
        {
          q: "My Mac records no audio at all, even the microphone - what's wrong?",
          a: "If no app can record even a normal mic, the problem is likely a software audio conflict or a hardware fault rather than your routing. Try a macOS reinstall to clear Core Audio issues, or book a full diagnostic. Our team in Dubai can confirm whether it's the audio controller or speakers.",
        },
      ]}
      relatedLinks={[
        { label: "MacBook speaker & audio repair Dubai", href: "/macbook-speaker-repair-dubai", description: "No sound at all, even from a normal mic? We diagnose and fix it." },
        { label: "macOS reinstall in Dubai", href: "/mac-os-reinstall-dubai", description: "Clears Core Audio conflicts from broken audio driver installs." },
        { label: "MacBook full diagnostic", href: "/macbook-full-diagnostic-dubai", description: "Rule out a hardware audio fault before you keep troubleshooting." },
      ]}
    />
  );
}
