"use client";
import { Link } from "@/lib/router-compat";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";

const h2 = "text-[24px] md:text-[28px] font-bold text-text mt-lg mb-sm";
const link = "text-accent font-semibold hover:underline";

export default function IMacRamUpgrade() {
  return (
    <SubServicePageTemplate
      seoTitle="iMac Upgrade Dubai: RAM and SSD Upgrades by Model"
      seoDescription="Which iMacs take a RAM or SSD upgrade? The 27-inch 2020 iMac takes up to 128GB, the 2017 and 2019 up to 64GB; M-series RAM is soldered. Free check."
      path="/imac-ram-upgrade-dubai"
      eyebrow="iMac RAM and memory upgrade"
      h1="iMac RAM Upgrade Dubai: Which iMacs Can Be Upgraded?"
      subtitle="27-inch Intel iMacs take more memory through the door on the back. 21.5-inch Retina 4K models from 2017 and 2019 can be upgraded with the screen off. 24-inch M1, M3 and M4 iMacs can't be upgraded at all, and we tell you that before you pay for anything."
      startingPrice={400}
      timeline="Usually same day (Intel) · Not possible (M-series)"
      whatsappPrefill="Hi, I'd like to upgrade my iMac. Model, year and current RAM:"
      breadcrumb={[
        { name: "Home",                path: "/" },
        { name: "iMac Repair",         path: "/imac-repair-dubai" },
        { name: "RAM Upgrade",         path: "/imac-ram-upgrade-dubai" },
      ]}
      technician={{ name: "Mohammed", years: 14, specialisation: "Mac desktop repair and upgrades" }}
      serviceName="iMac RAM Upgrade Dubai"
      quickAnswer={{
        question: "Can my iMac be upgraded?",
        answer: "27-inch Intel iMacs from 2012 to 2020 take a RAM upgrade through the door on the back, up to 64GB on the 2017 and 2019 models and 128GB on the 2020 model. 21.5-inch Retina 4K iMacs from 2017 and 2019 can be upgraded with the screen removed. M1, M3 and M4 iMacs cannot: memory and storage are soldered.",
      }}
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>An iMac upgrade is worth doing on the right model.</strong> A 27-inch Intel iMac that
            shipped with 8GB and struggles with Safari, Office and Lightroom open together can feel like a
            different machine with 32GB or 64GB. Pair it with an SSD in place of an old hard drive or Fusion
            Drive and most of the waiting disappears. On other iMacs the honest answer is that nothing can be
            added, and we will say so before any work starts.
          </p>

          <h2 className={h2}>Which iMacs can be upgraded? RAM and SSD by model</h2>
          <div className="overflow-x-auto mb-md">
            <table className="w-full border-collapse text-[15px]">
              <thead>
                <tr className="bg-bg-card text-text text-left">
                  <th className="border border-border px-3 py-2">iMac</th>
                  <th className="border border-border px-3 py-2">RAM upgrade</th>
                  <th className="border border-border px-3 py-2">SSD upgrade</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-border px-3 py-2">27-inch, 2020</td><td className="border border-border px-3 py-2">Yes, rear door, up to 128GB DDR4</td><td className="border border-border px-3 py-2">Yes, screen off</td></tr>
                <tr><td className="border border-border px-3 py-2">27-inch, 2019</td><td className="border border-border px-3 py-2">Yes, rear door, up to 64GB DDR4</td><td className="border border-border px-3 py-2">Yes, screen off</td></tr>
                <tr><td className="border border-border px-3 py-2">27-inch, 2017</td><td className="border border-border px-3 py-2">Yes, rear door, up to 64GB DDR4</td><td className="border border-border px-3 py-2">Yes, screen off</td></tr>
                <tr><td className="border border-border px-3 py-2">27-inch, Late 2012 to 2015</td><td className="border border-border px-3 py-2">Yes, rear door</td><td className="border border-border px-3 py-2">Yes, screen off</td></tr>
                <tr><td className="border border-border px-3 py-2">21.5-inch Retina 4K, 2017 and 2019</td><td className="border border-border px-3 py-2">Yes, but the screen must come off</td><td className="border border-border px-3 py-2">Yes, screen off</td></tr>
                <tr><td className="border border-border px-3 py-2">21.5-inch non-Retina 2014 to 2017</td><td className="border border-border px-3 py-2">No, memory is soldered</td><td className="border border-border px-3 py-2">Yes, screen off</td></tr>
                <tr><td className="border border-border px-3 py-2">24-inch M1, M3 and M4</td><td className="border border-border px-3 py-2">No, unified memory</td><td className="border border-border px-3 py-2">No, soldered</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-[16px] leading-relaxed mb-md">
            The maximums above are Apple&apos;s published figures for each model. We confirm your exact
            model, memory speed and free slots from the serial number before quoting.
          </p>

          <h2 className={h2}>27-inch iMac memory upgrade</h2>
          <p className="text-[16px] leading-relaxed mb-md">
            Every 27-inch Intel iMac from Late 2012 onwards has four memory slots behind a small door above
            the power socket. That makes it the easiest iMac RAM upgrade: no screen removal, no adhesive,
            and usually done the same day. The 2017 model uses 2400MHz DDR4 and the 2019 and 2020 models use
            2666MHz DDR4. We fit matched modules in the correct slots, because a mixed or badly seated set is
            a common cause of kernel panics and of the iMac not seeing all its memory.
          </p>
          <p className="text-[16px] leading-relaxed mb-md">
            How much? 32GB covers most office and photo work. 64GB suits Logic, Final Cut, large Lightroom
            catalogues and virtual machines. 128GB on a 2020 model only pays off for heavy 3D, big
            code builds or several VMs at once.
          </p>

          <h2 className={h2}>iMac 2017 and 2019 21.5-inch RAM upgrade</h2>
          <p className="text-[16px] leading-relaxed mb-md">
            The 21.5-inch Retina 4K iMacs from 2017 and 2019 use standard memory modules, but Apple put them
            behind the display. The screen has to be cut free, the memory changed, and the display re-bonded with new
            adhesive. It is worth doing, especially together with an SSD so the screen only comes off once.
            The 21.5-inch models without a Retina display, from 2014 to the 2017 base model, have memory soldered to the board and cannot take more.
          </p>

          <h2 className={h2}>iMac SSD upgrade: the other half of a speed upgrade</h2>
          <p className="text-[16px] leading-relaxed mb-md">
            If your Intel iMac still boots from a hard drive or Fusion Drive, the drive is often the bigger
            bottleneck than memory. Every Intel iMac SSD upgrade needs the display removed. We clone your
            data across, or install a clean macOS if you prefer. Model-by-model details are on our{" "}
            <Link to="/imac-ssd-upgrade-dubai" className={link}>iMac SSD upgrade</Link> page.
          </p>

          <h2 className={h2}>M1, M3 and M4 iMacs: what you can still do</h2>
          <p className="text-[16px] leading-relaxed mb-md">
            The memory in a 24-inch Apple-silicon iMac is part of the chip package, and the SSD is soldered
            to the board. No workshop can add either. If you are short of space, an external USB-C or
            Thunderbolt SSD works well for libraries and archives. If you are short of memory, the realistic
            route is to sell the iMac and buy a higher-spec model. Apple has said macOS Tahoe is the last
            major release for Intel Macs, so before upgrading an older Intel iMac, check that the macOS it
            can run suits your apps. If your iMac is simply slow, read{" "}
            <Link to="/blog/imac-running-slow-dubai" className={link}>why your iMac is running slow</Link>{" "}
            first; sometimes the fix is free.
          </p>
        </>
      }
      whatWeFix={[
        "27-inch iMac 2020 memory upgrades up to 128GB",
        "27-inch iMac 2017 and 2019 memory upgrades up to 64GB",
        "27-inch iMac Late 2012 to 2015 memory upgrades",
        "21.5-inch Retina 4K iMac 2017 and 2019 RAM upgrade with display re-bond",
        "Faulty or mismatched modules causing kernel panics",
        "RAM and SSD upgraded together in one visit",
        "Honest no-upgrade answer for 24-inch M-series iMacs",
      ]}
      steps={[
        { title: "Confirm model and ceiling",   body: "Send the serial number from About This Mac. We confirm the maximum memory, the speed and how many slots are free." },
        { title: "Matched modules",             body: "We use branded DDR4 or DDR3 SO-DIMM modules matched to Apple's specification for your model, fitted in matched sets." },
        { title: "Fit the memory",              body: "27-inch: through the rear door. 21.5-inch Retina 4K 2017 and 2019: display removed, memory fitted, display re-bonded with new adhesive." },
        { title: "Test before you collect",     body: "We run an extended memory test, confirm the full amount shows in About This Mac, and load-test the iMac before handing it back." },
      ]}
      warrantyDays={730}
      warrantyBullets={[
        "Written warranty of 15 days to 2 years on the memory and the fitting.",
        "A module that fails a test inside the warranty is replaced.",
        "Free diagnosis before any work; no upgrade, no charge.",
      ]}
      faqs={[
        { q: "Can you upgrade the RAM in a 24-inch M1, M3 or M4 iMac?", a: "No. On Apple-silicon iMacs the memory is part of the chip package, so nobody can add more after purchase. The SSD is soldered too. If you need more memory, the practical route is selling it and buying a higher-spec model. For storage, an external USB-C or Thunderbolt SSD works well for photo libraries and archives." },
        { q: "What is the maximum RAM for my 27-inch iMac?", a: "Apple configured the 2017 and 2019 27-inch iMacs with up to 64GB and the 2020 model with up to 128GB, using four DDR4 slots behind the rear door. Earlier 27-inch models from Late 2012 onwards also have the door, with lower maximums. Send us your serial number and we will confirm the ceiling for your exact model." },
        { q: "Can the 21.5-inch iMac be upgraded?", a: "The 21.5-inch Retina 4K iMacs from 2017 and 2019 can, but the memory sits behind the display, so the screen has to be removed and re-bonded. It makes sense to add an SSD in the same visit. The non-Retina 21.5-inch models from 2014 to 2017 have soldered memory and cannot take more RAM, though an SSD upgrade is still possible." },
        { q: "Is it worth upgrading an Intel iMac in 2026?", a: "Often, yes, if the rest of the iMac is healthy and your apps run on the macOS version it supports. A 27-inch 2019 or 2020 iMac with more memory and an SSD is still a capable desk machine. Apple has said macOS Tahoe is the last major release for Intel Macs, so factor that into the decision." },
        { q: "Does a RAM upgrade void the warranty on my iMac?", a: "On 27-inch iMacs the rear memory door is designed for owner upgrades, so fitting memory there does not affect Apple's coverage. On 21.5-inch models the display has to be removed, which is different. Most Intel iMacs are long out of Apple warranty anyway. Our work carries a written warranty of 15 days to 2 years." },
        { q: "How long does an iMac RAM upgrade take?", a: "A 27-inch memory upgrade through the rear door is usually done the same day, including a memory test. A 21.5-inch upgrade takes longer because the display is removed and re-bonded, and we let the adhesive set before handing it back. We give you a time when we confirm the parts for your model." },
      ]}
      reviewNames={["Shah nawaz", "Ali Hassan", "Marianne Chehade El Dfouni"]}
      related={[
        { label: "iMac SSD Upgrade",      href: "/imac-ssd-upgrade-dubai",      description: "Replace a hard drive or Fusion Drive with an SSD." },
        { label: "iMac Full Diagnostic",  href: "/imac-full-diagnostic-dubai",  description: "Free check before any upgrade decision." },
        { label: "iMac Repair Dubai",     href: "/imac-repair-dubai",           description: "All iMac repairs in one place." },
      ]}
      blogLink={{ label: "iMac running slow? 8 checks before you upgrade", href: "/blog/imac-running-slow-dubai" }}
    />
  );
}
