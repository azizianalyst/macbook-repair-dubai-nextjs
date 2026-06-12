"use client";
import { Link } from "@/lib/router-compat";
import BlogPostTemplate from "@/components/blocks/BlogPostTemplate";
import { howTo } from "@/lib/schema";

export default function GuideChangeMacBookName() {
  const steps = [
    { name: "Open System Settings", text: "Click the Apple logo in the top-left corner of the screen, then choose System Settings (called System Preferences on macOS Monterey and earlier)." },
    { name: "Go to General → About", text: "In the sidebar click General, then About. On older macOS versions, open the Sharing pane instead, where the Computer Name field sits at the top." },
    { name: "Click the current name", text: "Find the Name field near the top of the About panel. Click directly on the existing computer name to make it editable." },
    { name: "Type the new name", text: "Replace it with your new name. Stick to letters, numbers, and hyphens, and avoid special characters such as / \\ * ? which can break network sharing." },
    { name: "Press Return to save", text: "Hit Return (Enter). The change is instant - no restart needed - and propagates within seconds to AirDrop, Finder sharing, your iCloud device list, and Bluetooth." },
  ];

  return (
    <BlogPostTemplate
      seoTitle="How to Change Your MacBook's Name (2026 Guide)"
      seoDescription="Rename your MacBook in 30 seconds via System Settings, General, About. Plus computer name vs hostname vs Bonjour name, and changing it in Terminal."
      path="/how-to-change-macbook-name"
      category="How-to · macOS"
      h1="How to Change Your MacBook's Name"
      hook="Renaming your MacBook takes about 30 seconds and instantly updates AirDrop, Finder sharing, and your iCloud device list - here's the simple way, plus the Terminal trick for the technical hostname."
      quickAnswer="To rename your MacBook: open System Settings → General → About, click the current Name field, type the new name, and press Return. The change is instant - no restart - and updates AirDrop, Finder, and your iCloud device list within seconds."
      author={{ name: "Usman", role: "Senior MacBook technician" }}
      datePublished="2026-05-30"
      dateModified="2026-05-30"
      readingMinutes={5}
      featuredImageAlt="Changing a MacBook computer name in System Settings General About in Dubai"
      extraSchemas={[howTo({
        name: "Change a MacBook's name",
        description: "Rename the computer name of any MacBook through System Settings so it shows correctly in AirDrop, Finder sharing, and the iCloud device list.",
        steps,
        totalTime: "PT1M",
      })]}
      body={
        <>
          <h2>The 30-second way - change the computer name</h2>
          <p>
            On any modern MacBook running macOS Ventura, Sonoma, Sequoia, or later, open the
            Apple menu in the top-left corner and choose <strong>System Settings → General →
            About</strong>. Click the <strong>Name</strong> field at the top, type whatever you
            like, and press Return. That's it - the change is instant, survives without a
            restart, and you can rename as many times as you want with no data loss.
          </p>
          <p>
            On older Macs running macOS Monterey or earlier, the menu is called
            <strong> System Preferences</strong>, and the field lives under
            <strong> Sharing</strong> - the <strong>Computer Name</strong> box sits right at the
            top of that pane.
          </p>

          <h2>Why the name matters</h2>
          <p>
            The computer name is how your MacBook identifies itself everywhere it talks to other
            devices. A clear, recognisable name saves confusion when several Apple devices are on
            the same network. It shows up in:
          </p>
          <ul className="list-disc list-inside space-y-xs">
            <li><strong>AirDrop</strong> - so friends and colleagues pick the right Mac</li>
            <li><strong>Finder sharing</strong> - under "Locations" on other Macs on your network</li>
            <li><strong>Your iCloud device list</strong> and <strong>Find My</strong></li>
            <li><strong>Wi-Fi and network settings</strong>, including your router's client list</li>
            <li><strong>Bluetooth</strong> pairing prompts</li>
          </ul>

          <h2>Computer name vs hostname vs Bonjour name vs local hostname</h2>
          <p>
            macOS actually tracks <em>three</em> related names. When you edit the field in
            About, macOS usually keeps them in sync automatically - but it helps to know the
            difference:
          </p>
          <ul className="list-disc list-inside space-y-xs">
            <li><strong>Computer name</strong> - the friendly, human-readable name you set in About/Sharing. Spaces and capitals are fine (e.g. "Usman's MacBook Pro").</li>
            <li><strong>Local hostname (Bonjour name)</strong> - the network name ending in <code>.local</code> that Macs, printers, and AirPlay use to find each other. macOS derives it from the computer name, swapping spaces for hyphens (e.g. <code>Usmans-MacBook-Pro.local</code>).</li>
            <li><strong>Hostname (HostName)</strong> - the low-level Unix hostname seen in Terminal and over SSH. By default it's unset and macOS falls back to the local hostname, but you can set it explicitly.</li>
          </ul>

          <h2>Change the hostname in Terminal with scutil</h2>
          <p>
            If you manage your Mac over SSH or want full control, set all three names directly.
            Open <strong>Terminal</strong> (Applications → Utilities) and run these one at a time,
            replacing the value in quotes. They need administrator rights, so each
            <code> sudo</code> command will ask for your password:
          </p>
          <ul className="list-disc list-inside space-y-xs">
            <li><code>sudo scutil --set ComputerName "New Name"</code> - the friendly computer name</li>
            <li><code>sudo scutil --set LocalHostName "New-Name"</code> - the Bonjour/.local name (no spaces or special characters)</li>
            <li><code>sudo scutil --set HostName "New-Name"</code> - the Unix hostname for Terminal and SSH</li>
          </ul>
          <p>
            Setting all three keeps everything consistent. The change takes effect immediately;
            a new Terminal window will show the updated prompt.
          </p>

          <h2>Heads up - this is not the same as your user account name</h2>
          <p>
            Renaming the MacBook does <strong>not</strong> rename your user account or its
            <strong> short name</strong> (the name of your Home folder). The account short name
            is baked into file paths and permissions across the system, so changing it is fiddly
            and risky - done carelessly it can break apps, logins, or even lock you out. If you
            genuinely need to change the account short name, back up first and follow Apple's
            advanced-user steps exactly, or let a technician handle it. For most people, the
            computer name above is the only thing they ever need to change.
          </p>

          <h2>Name won't stick or AirDrop still shows the old one?</h2>
          <p>
            Occasionally a name change won't propagate - usually a stale Bonjour cache or a
            network glitch. Toggle Wi-Fi off and on, or restart the Mac, and the new name
            appears everywhere. If your MacBook is also feeling sluggish while you're in there,
            our{" "}
            <Link to="/blog/macbook-running-slow-10-fixes" className="text-accent font-semibold hover:underline">
              10 fixes for a slow MacBook
            </Link>{" "}
            are a quick read. And if the screen, keyboard, or anything else is misbehaving, our{" "}
            <Link to="/" className="text-accent font-semibold hover:underline">
              MacBook repair team in Dubai
            </Link>{" "}
            offers free pickup, free diagnosis, and a 12-month warranty.
          </p>
        </>
      }
      faqs={[
        {
          q: "How do I change my MacBook's name?",
          a: "Open the Apple menu → System Settings → General → About, click the Name field, type the new name, and press Return. On macOS Monterey and earlier it's under System Preferences → Sharing → Computer Name. The change is instant and needs no restart.",
        },
        {
          q: "Do I need to restart my MacBook after renaming it?",
          a: "No. The new computer name applies immediately and propagates to AirDrop, Finder sharing, your iCloud device list, and Bluetooth within seconds. You can rename your Mac as many times as you like without losing any data.",
        },
        {
          q: "What's the difference between the computer name and the hostname?",
          a: "The computer name is the friendly name you see in About (spaces and capitals allowed). The local hostname (Bonjour name) ends in .local and is used for network discovery. The hostname is the low-level Unix name used in Terminal and SSH. macOS usually keeps all three in sync.",
        },
        {
          q: "How do I change the hostname on a Mac using Terminal?",
          a: "Open Terminal and run, one at a time: sudo scutil --set ComputerName \"New Name\", sudo scutil --set LocalHostName \"New-Name\", and sudo scutil --set HostName \"New-Name\". Setting all three keeps the friendly name, Bonjour name, and Unix hostname consistent.",
        },
        {
          q: "What is the Bonjour name on a Mac?",
          a: "The Bonjour name is the local hostname ending in .local that Apple devices, printers, and AirPlay use to find each other on a network. macOS derives it from your computer name, replacing spaces with hyphens - for example Usmans-MacBook-Pro.local.",
        },
        {
          q: "Does renaming my MacBook change my user account name?",
          a: "No. The computer name and your user account (and its short Home-folder name) are separate. Changing the account short name is advanced and risky because it's tied to file paths and permissions, so most people should leave it alone and only change the computer name.",
        },
        {
          q: "Can special characters in the name cause problems?",
          a: "Yes. Stick to letters, numbers, and hyphens. Characters like / \\ * ? can break network sharing and the .local Bonjour name, so it's safest to avoid them when naming your MacBook.",
        },
        {
          q: "My new MacBook name isn't showing in AirDrop - why?",
          a: "It's usually a stale Bonjour cache. Toggle Wi-Fi off and on, or restart the Mac, and the updated name appears across AirDrop, Finder, and Find My. If it still won't update, our Dubai team can take a look.",
        },
      ]}
      relatedLinks={[
        { label: "MacBook repair Dubai", href: "/", description: "Free pickup, free diagnosis, 12-month warranty across Dubai." },
        { label: "macOS reinstall Dubai", href: "/mac-os-reinstall-dubai", description: "Clean install if your Mac's software is acting up." },
        { label: "MacBook running slow? 10 fixes", href: "/blog/macbook-running-slow-10-fixes", description: "Quick wins to speed up a sluggish MacBook." },
      ]}
    />
  );
}
