"use client";
import { Link } from "@/lib/router-compat";
import DevicePageTemplate from "@/components/blocks/DevicePageTemplate";

const link = "text-accent font-semibold hover:underline";

export default function IMacScreenRepair() {
  return (
    <DevicePageTemplate
      family="imac"
      seoTitle="iMac Screen Replacement Dubai: 24-inch & 27-inch 5K Repair"
      seoDescription="iMac screen replacement in Dubai for 24-inch M1, M3, M4 and 27-inch 5K iMacs: cracked glass, lines, flickering, no backlight. Free diagnosis. WhatsApp us."
      path="/imac-screen-repair-dubai"
      eyebrow="iMac screen repair"
      h1="iMac Screen Repair and Replacement Dubai: 24-inch and 27-inch 5K"
      subtitle="Cracked glass, lines, flickering, a dark screen or a dead backlight. On every modern iMac the glass and display are one bonded unit, so we cut the adhesive, fit the new panel and re-bond it dust-free. Message us on WhatsApp for a quote on your model."
      startingPrice={800}
      timeline="2-3 days"
      whatsappPrefill="Hi, my iMac screen is damaged. Model, year and what the screen is doing:"
      technician={{ name: "Shafiq", years: 15, specialisation: "Lead technician, screens and displays" }}
      serviceName="iMac Screen Repair Dubai"
      quickAnswer={{
        question: "Can an iMac screen be replaced?",
        answer: "Yes. On every iMac since Late 2012 the glass and LCD are one bonded assembly, so a cracked screen means replacing the whole display: we cut the adhesive, fit the new panel and re-bond it dust-free. We repair 24-inch M1, M3 and M4 iMacs and 21.5-inch and 27-inch Intel models. Flickering is diagnosed first; it is not always the panel.",
      }}
      pricingRows={[
        { model: `iMac 24" M1 (2021)`,                   price: 800,  timeline: "2-3 days" },
        { model: `iMac 24" M3 (2023)`,                   price: 800,  timeline: "2-3 days" },
        { model: `iMac 24" M4 (2024)`,                   price: 850,  timeline: "2-3 days" },
        { model: `iMac 27" 5K Retina (2017-2020 Intel)`, price: 1000, timeline: "3 days" },
        { model: `iMac 21.5" Retina 4K (2017-2019)`,     price: 850,  timeline: "2-3 days" },
        { model: `iMac Pro 27" (2017)`,                  price: 1200, timeline: "3 days" },
      ]}
      pricingCaption="Quotes include the display, new adhesive and re-bonding. The panel is confirmed against your serial number before we open the iMac."
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>iMac screen replacement is a bonded-display job.</strong> Since the slim Late 2012
            design, the front glass and the LCD are laminated into one assembly and held to the aluminium
            body with adhesive strips. There are no screws or clips to undo. A crack in the glass therefore
            means a new display assembly, not new glass on its own.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed mb-md">
            The work is careful rather than complicated: cut the adhesive all the way round without
            cracking the panel, disconnect the display cables, fit the new display, then re-bond it with
            fresh adhesive in a clean area. Any dust caught between the layers shows up later as a dark
            speck on a white page, so cleanliness matters as much as the part.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed">
            The 27-inch iMac with Retina 5K display is the largest and most expensive panel we fit. On the
            24-inch M1, M3 and M4 iMacs the display assembly is different again. Knowing which part belongs
            to which model is half the job, which is why we ask for the serial number first. If the screen
            is black rather than broken, start with our{" "}
            <Link to="/blog/imac-no-display-black-screen-dubai" className={link}>iMac black screen guide</Link>;
            if it is stuck on the loading screen, see{" "}
            <Link to="/blog/imac-running-slow-dubai" className={link}>iMac running slow or stuck on the Apple logo</Link>.
          </p>
        </>
      }
      honestyCallout={
        <div className="text-[15px] leading-relaxed space-y-2">
          <p><strong>Before you book an iMac screen replacement:</strong></p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Take a screenshot (Shift-Command-3) while the flicker or lines are showing. If they appear in the screenshot, the fault is software or graphics, not the panel, and a new screen will not fix it.</li>
            <li>If the iMac is still under Apple&apos;s warranty or AppleCare+, check with Apple first. The standard warranty does not cover accidental damage such as a cracked screen; AppleCare+ covers it with a fee.</li>
            <li>The glass is bonded, not screwed. Removal carries a real risk of cracking a panel that was only flickering, which is why we diagnose before we cut anything.</li>
            <li>Your data stays on your SSD. A screen-only job doesn&apos;t touch the storage.</li>
          </ul>
        </div>
      }
      problems={[
        { title: "Cracked iMac screen, picture still works", body: "On every iMac from Late 2012 the glass and LCD are one laminated part, so a crack means replacing the display assembly. Only the older 2007 to 2011 aluminium iMacs had a separate, magnetically held glass panel." },
        { title: "iMac screen flickering", body: "Take a screenshot while it flickers. If the flicker shows in the screenshot, it is software or the graphics chip; try Safe Mode and a macOS update first. If it doesn't, the display cable, backlight or panel is at fault. We test each before quoting." },
        { title: "Vertical or horizontal lines", body: "Usually damage to the panel or its connection after a knock or a move. A loose display cable is checked first because it is the cheaper fix; if the lines stay, the panel needs replacing." },
        { title: "Backlight gone: image faint under a torch", body: "If you can just see the desktop with a torch against the glass, the backlight or its power supply has failed while the LCD still draws the image. We diagnose whether it is the backlight circuit or the panel." },
        { title: "iMac black screen or white screen at startup", body: "A black or white screen with the chime or fan running is often software, the startup disk or the graphics chip rather than the panel. See our black screen guide, or bring it in for a free diagnosis before paying for a display." },
        { title: "Dust or smudges behind the glass", body: "Usually after an earlier repair elsewhere. We cut the display free, clean the inner surfaces, replace the adhesive and re-bond it in a clean area." },
        { title: "Pink or yellow tint", body: "Reset the display profile in System Settings > Displays first. If whites stay tinted with the default profile, the panel is ageing or damaged and replacement is the fix." },
        { title: "iMac stuck on the loading screen", body: "A progress bar that never finishes is a software or startup-disk problem, not a screen fault. Run Disk Utility First Aid from macOS Recovery, or ask us to check the drive." },
      ]}
      steps={[
        { title: "WhatsApp the model and serial", body: "Send the serial number from About This Mac and a photo of the screen. We confirm the correct display part before quoting." },
        { title: "Free pickup or drop-off", body: "Our driver collects from home or office across Dubai mainland, or bring it to Concord Tower, Dubai Media City." },
        { title: "Diagnosis first", body: "We confirm whether it is the panel, backlight, cable or graphics. Written quote; no work without your approval." },
        { title: "Adhesive cut and display removal", body: "The adhesive is cut around the edge and the display lifted clear without stressing the glass." },
        { title: "New display and dust-free re-bond", body: "The new panel is fitted, the inner surfaces cleaned, and the display re-bonded with new adhesive." },
        { title: "Test before return", body: "Brightness, colour, uniformity and every pixel are checked with the iMac running for an extended test before it goes back to you." },
      ]}
      warrantyDays={90}
      glassNotice
      warrantyBullets={[
        "Covers the display we fitted, the backlight and the adhesive seal.",
        "Dust behind the glass from our re-bond is covered as workmanship.",
        "Excludes new physical impact after collection.",
      ]}
      comparisonRows={[
        ["Quote",               "Free diagnosis, written quote",            "Inspection first"],
        ["Data on your SSD",    "Stays on your original drive",             "Back up before any service"],
        ["Pickup and delivery", "Free, Dubai mainland",                     "Carry the iMac to the store"],
        ["Adhesive re-bond",    "Done in our clean area",                   "Apple process"],
        ["Typical turnaround",  "2-3 days once the part is confirmed",      "Depends on inspection and parts"],
        ["Warranty",            "90 days, written and dated",               "Apple's repair warranty terms"],
      ]}
      faqs={[
        { q: "Can you replace just the glass on my iMac?", a: "Only on the 2007 to 2011 aluminium iMacs, which have a separate glass panel held by magnets. From the slim Late 2012 design onwards, the glass and LCD are laminated into one display assembly, so a cracked screen means replacing the whole display. We confirm which type you have from the serial number." },
        { q: "How much does an iMac screen replacement cost?", a: "It depends mainly on the model: the 27-inch Retina 5K panel is the most expensive part we fit, and the 24-inch M-series displays differ again. Whether only the glass is cracked or the LCD is also damaged doesn't change much, because they are one part. WhatsApp us the serial number for an exact quote." },
        { q: "Why is my iMac screen flickering?", a: "Take a screenshot while it flickers. If the flicker appears in the screenshot, the cause is software or the graphics chip, so try Safe Mode and a macOS update. If the screenshot looks clean, the fault is the display cable, backlight or panel. We test each one before recommending a screen replacement." },
        { q: "Will my data survive an iMac screen repair?", a: "Yes. A screen-only repair doesn't touch the SSD or the logic board, so your files, apps and settings stay as they are. We still recommend a Time Machine backup before any repair, as you would before any hardware work. If the iMac doesn't boot, tell us and we can check the data first." },
        { q: "Can I use my 2017 iMac as a second screen with Target Display Mode?", a: "No. Apple's Target Display Mode only works on iMacs from Late 2009 to Mid 2014. iMacs from 2019 onwards running macOS Monterey or later can act as an AirPlay display for another Mac. If your 2017 iMac's own screen has failed, you can connect an external monitor to keep using it until it is repaired." },
        { q: "Do you repair the 27-inch iMac with Retina 5K display?", a: "Yes, including the 2017, 2019 and 2020 27-inch Intel models and the 2017 iMac Pro. Many are still in daily use, and a new display usually costs far less than replacing the whole computer. We confirm the correct 5K panel for your serial number before ordering and quote it on WhatsApp." },
      ]}
      reviewNames={["Shah nawaz", "Marianne Chehade El Dfouni", "Ali Hassan"]}
      relatedSlugs={[
        "/imac-logic-board-repair-dubai",
        "/imac-not-turning-on-dubai",
      ]}
      relatedExtra={[
        { label: "iMac RAM and SSD upgrade", href: "/imac-ram-upgrade-dubai", description: "Intel iMac? Add memory or an SSD while the screen is off." },
      ]}
    />
  );
}
