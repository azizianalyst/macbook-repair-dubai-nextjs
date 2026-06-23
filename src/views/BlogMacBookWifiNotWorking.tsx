"use client";
import { Link } from "@/lib/router-compat";
import BlogPostTemplate from "@/components/blocks/BlogPostTemplate";
import { howTo } from "@/lib/schema";

export default function BlogMacBookWifiNotWorking() {
  const steps = [
    { name: "Toggle Wi-Fi and rejoin the network", text: "Click the Wi-Fi icon, turn it off, wait ten seconds, turn it back on. Then open System Settings, Wi-Fi, click the i next to your network, Forget This Network, and join again with the password. A stale connection is the most common cause and this clears it." },
    { name: "Restart the router and the Mac", text: "Power the router off at the wall for 30 seconds, then back on, and give it two minutes to come up. Restart the Mac too. Half the Wi-Fi calls we take are the router, not the laptop. If your phone also struggles on the same network, the router is the suspect." },
    { name: "Check whether it's only this Mac", text: "Connect a phone or another laptop to the same network. If everything else is fine and only the Mac drops, the fault is on the Mac. If every device is slow or offline, it's the router or the connection from your provider, and that's a call to du or Etisalat, not us." },
    { name: "Renew the DHCP lease and set a clean DNS", text: "In Settings, Wi-Fi, Details, TCP/IP, click Renew DHCP Lease. Then under DNS add 1.1.1.1 and 8.8.8.8. This fixes a Mac that's connected to Wi-Fi but won't load pages, which is usually an address or DNS problem, not the radio." },
    { name: "Boot into Safe Mode", text: "On Apple Silicon, hold the power button until 'Loading startup options' shows, pick your disk with Shift held. On Intel, hold Shift at the chime. Safe Mode loads clean networking. If Wi-Fi works here, a VPN, security app or login item is breaking it, not the hardware." },
    { name: "Reset NVRAM, then make a new network location", text: "On Intel, reset NVRAM with Cmd-Option-P-R through two chimes. Then in Settings, Network, add a new Location and reconnect, which rebuilds the network config from scratch. Apple Silicon resets NVRAM on its own, so go straight to the new-location step." },
  ];
  return (
    <BlogPostTemplate
      seoTitle="MacBook Won't Connect to Wi-Fi? Fixes (2026)"
      seoDescription="MacBook Wi-Fi not connecting or dropping out? Six fixes in order - forget the network, restart the router, renew DHCP, Safe Mode - then know when it's the antenna or the board."
      path="/blog/macbook-wifi-not-working-fix"
      wide
      toc={[
        { id: "mac-router-or-setting", label: "Mac, router, or setting?" },
        { id: "fixes-in-order", label: "The fixes, in order" },
        { id: "hardware-causes", label: "When it's hardware" },
        { id: "repair-cost-dubai", label: "What it costs in Dubai" },
      ]}
      category="Problem solving · MacBook"
      h1="MacBook Won't Connect to Wi-Fi? Fixes & Causes"
      hook="Nine times in ten a MacBook that won't hold Wi-Fi is the router, a stale network setting, or a VPN getting in the way - all free to fix from your sofa. The hardware faults are rare, and a quick test tells you if you're in that unlucky tenth."
      quickAnswer="If your MacBook won't connect to Wi-Fi, forget the network and rejoin, then restart the router and the Mac. Check whether other devices work on the same network - if they do, the fault is the Mac. Renew the DHCP lease, set DNS to 1.1.1.1, and test Safe Mode. Hardware faults like a loose antenna are rare and need the bench."
      author={{ name: "Shafiq", role: "Senior MacBook hardware technician" }}
      datePublished="2026-06-03"
      dateModified="2026-06-03"
      readingMinutes={8}
      featuredImageAlt="MacBook Wifi Not Working Fix. MacBook Wi-Fi repair in Dubai - technician checking the antenna cable and wireless module at the Media City workshop"
      extraSchemas={[howTo({
        name: "Fix a MacBook that won't connect to Wi-Fi in six steps",
        description: "Six diagnostic steps for a MacBook that won't connect to Wi-Fi or keeps dropping out, in priority order, before booking hardware service.",
        steps,
        totalTime: "PT15M",
      })]}
      body={
        <>
          <h2 id="mac-router-or-setting">MacBook Wifi Not Working Fix. Is it the Mac, the router, or a setting?</h2>
          <p>
            Almost every Wi-Fi problem is software or the router, not a broken laptop, so the trick is
            to rule those out before you worry about hardware. The good news is that genuine wireless
            hardware faults are unusual on a MacBook. The radio is built into the logic board and
            rarely fails on its own. When a Wi-Fi job does reach our Dubai Media City bench, it's
            almost always after a spill or a clumsy screen repair that disturbed the antenna. If it
            does turn out to be hardware, our{" "}
            <Link to="/macbook-wifi-bluetooth-repair-dubai" className="text-accent font-semibold hover:underline">
              MacBook Wi-Fi and Bluetooth repair
            </Link>{" "}
            covers it after a free diagnostic.
          </p>
          <p>
            <strong>A software or router problem</strong> usually hits more than the Mac. Pages won't
            load on the phone either, the network drops for everyone, or it started right after a
            macOS update or a new VPN. These are the easy ones.
          </p>
          <p>
            <strong>A hardware problem</strong> is narrower. The Mac can't see any networks at all,
            Wi-Fi shows "No hardware installed", or it died straight after a spill or a lid repair.
            That's when the antenna or the board comes into it.
          </p>

          <h2 id="fixes-in-order">The fixes, in order</h2>
          <p>
            Run these top to bottom and stop the moment you're back online. Most Wi-Fi jobs never get
            past step three.
          </p>
          <ol className="list-decimal list-inside space-y-sm">
            <li>
              <strong>Forget and rejoin.</strong> Turn Wi-Fi off and on, then Forget This Network and
              join again with the password. Clears a stale connection.
            </li>
            <li>
              <strong>Restart the router and the Mac.</strong> Router off at the wall for 30 seconds,
              two minutes to come back. Half of all Wi-Fi calls end here.
            </li>
            <li>
              <strong>Check other devices.</strong> If your phone is fine and only the Mac drops, the
              fault is the Mac. If everything's slow, it's the router or your provider.
            </li>
            <li>
              <strong>Renew DHCP and set DNS.</strong> Renew the lease, add 1.1.1.1 and 8.8.8.8. Fixes
              a Mac that's connected but won't load pages.
            </li>
            <li>
              <strong>Safe Mode.</strong> Loads clean networking. If Wi-Fi works here, a VPN or
              security app is the cause.
            </li>
            <li>
              <strong>New network location.</strong> Rebuilds the config from scratch. Pair it with an
              NVRAM reset on Intel Macs.
            </li>
          </ol>

          <h3>"Connected but no internet" is a different problem</h3>
          <p>
            It's worth splitting these two, because people fix the wrong one. A Mac that can't see or
            join any network is a connection problem. A Mac that joins fine but won't load a page is
            an address problem.
          </p>
          <p>
            That second one, full Wi-Fi bars but nothing loading, is almost never the hardware. It's a
            DHCP lease that didn't renew, a DNS server that's down, or a VPN that grabbed the
            connection and didn't let go. Renew the lease, switch DNS to 1.1.1.1, and disconnect any
            VPN. If pages come back, the radio was working the whole time.
          </p>

          <h2 id="hardware-causes">When it's hardware: the rare causes</h2>
          <p>
            If you've run the list and the Mac still can't see a single network, it's one of three
            things, and none of them is common. Here's what we actually find on the bench.
          </p>
          <h3>A disturbed antenna cable</h3>
          <p>
            The Wi-Fi antennas sit in the screen and run down through the hinge to the board. A screen
            or hinge repair done without care can pinch or unseat that cable, and Wi-Fi range
            collapses or drops to nothing. If your Wi-Fi died right after a display repair somewhere
            else, this is the first thing we check.
          </p>
          <h3>Liquid damage to the module</h3>
          <p>
            A spill that reaches the board can corrode the wireless module or its connector. Wi-Fi and
            Bluetooth often go together because they share a chip. We cover the first steps after a
            spill in our{" "}
            <Link to="/blog/macbook-fan-loud-always-on" className="text-accent font-semibold hover:underline">
              MacBook cleaning and thermal guide
            </Link>{" "}
            and on the water-damage service page.
          </p>
          <h3>A logic-board fault</h3>
          <p>
            On Apple Silicon the Wi-Fi is part of the main board, so a true module failure means
            board-level work. This is the least common of the three and needs a proper diagnostic
            before any quote.
          </p>

          <h2 id="repair-cost-dubai">What it costs to fix in Dubai</h2>
          <p>
            We don't charge to look. Bring it to Concord Tower in Dubai Media City and the diagnostic
            is free, so you'll know whether it's the antenna, a spill or the board before you commit.
            The prices below are VAT-inclusive and depend on the model.
          </p>
          <p>
            Re-seating or replacing an antenna cable runs AED 300 to 600. Spill cleaning around the
            wireless module starts from AED 400 depending on the corrosion. Board-level module repair
            starts from AED 800. If you'd rather we check it first, book a{" "}
            <Link to="/macbook-full-diagnostic-dubai" className="text-accent font-semibold hover:underline">
              full MacBook diagnostic
            </Link>{" "}
            and we'll give you a fixed quote.
          </p>
          <p>
            Most antenna jobs are same-day if the part's in stock, and we've been doing them at this
            address since 2004. WhatsApp the serial number on 055 741 3706 first, tell us whether it
            sees any networks at all, and we'll tell you what's likely before you leave home.
          </p>
        </>
      }
      faqs={[
        {
          q: "Why won't my MacBook connect to Wi-Fi when other devices can?",
          a: "If only the Mac drops while the phone is fine, the fault is on the Mac, and it's almost always software. Forget the network and rejoin, renew the DHCP lease, and set DNS to 1.1.1.1. Test in Safe Mode to rule out a VPN or security app. Genuine Wi-Fi hardware faults are rare and usually follow a spill or a screen repair.",
        },
        {
          q: "How much does a MacBook Wi-Fi repair cost in Dubai?",
          a: "It depends what it is, and the diagnostic to find out is free. Re-seating or replacing the antenna cable is AED 300 to 600. Spill cleaning around the module starts from AED 400. Board-level wireless repair starts from AED 800. All prices are VAT-inclusive. Most software causes cost nothing to fix once we point you at them.",
        },
        {
          q: "Will a Mac say connected to Wi-Fi but have no internet?",
          a: "Yes, and that's a different problem from a Mac that can't join at all. Full bars with nothing loading is usually a DHCP or DNS issue, or a VPN that grabbed the connection. Renew the lease, set DNS to 1.1.1.1, and disconnect any VPN. If pages return, the Wi-Fi radio was working the whole time.",
        },
        {
          q: "Did my Wi-Fi break because of a screen repair?",
          a: "It can. The Wi-Fi antennas run through the screen and down the hinge, so a display or hinge repair done carelessly can pinch or unseat the antenna cable. If your Wi-Fi range collapsed right after a screen job done elsewhere, bring it in. Re-seating the antenna is usually a quick, same-day fix at our Dubai Media City workshop.",
        },
        {
          q: "Can you fix MacBook Wi-Fi the same day?",
          a: "Most antenna and connector jobs are same-day at our Dubai Media City workshop when the part's in stock, and the common antennas we keep on hand. Spill and board-level work can take longer because of the cleaning and parts sourcing. We'll give you a realistic timeline after the free diagnostic, before you commit to anything.",
        },
        {
          q: "Do you need to wipe my Mac to fix Wi-Fi?",
          a: "No. An antenna or connector repair never touches your storage, so your data stays exactly where it is. Even a board-level wireless fix leaves the drive alone. The only time data comes up is a heavy spill that also threatens the SSD, and we'd flag that and offer a backup before starting any work.",
        },
        {
          q: "What if my MacBook says No hardware installed for Wi-Fi?",
          a: "That message means macOS can't see the wireless card at all, which points at the antenna connector, a spill, or the board. Try an NVRAM reset and a restart first, since it's occasionally a glitch. If it persists, bring it to Concord Tower for a free diagnostic and we'll tell you whether it's a connector reseat or board work.",
        },
      ]}
      relatedLinks={[
        { label: "MacBook Wi-Fi & Bluetooth repair", href: "/macbook-wifi-bluetooth-repair-dubai", description: "Antenna, connector and module repair." },
        { label: "Full MacBook diagnostic", href: "/macbook-full-diagnostic-dubai", description: "Free bench diagnostic and a fixed quote." },
        { label: "MacBook running slow guide", href: "/blog/macbook-running-slow-10-fixes", description: "If it's speed, not the connection, that's the issue." },
      ]}
    />
  );
}
