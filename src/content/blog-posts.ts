// Blog post registry. Import this in Blog.tsx and any category page.
// Add new posts here first; they appear on the blog index and any matching category page.

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  minutes: number;
};

export const POSTS: Post[] = [
  // Problem solving · MacBook (June 2026 - high-intent troubleshooting)
  { slug: "/blog/macbook-kernel-panic-restarts-fix", title: "MacBook Keeps Restarting? Kernel Panic Fixes", excerpt: "The 'restarted because of a problem' message? About nine in ten are software (a bad driver, a dodgy dock, a full disk) and the log usually names the culprit. Six fixes in order, plus the hardware tests for RAM, the SSD, heat and the battery.", category: "Problem solving · MacBook", author: "Usman", date: "June 2026", minutes: 9 },
  { slug: "/blog/macbook-wifi-not-working-fix", title: "MacBook Won't Connect to Wi-Fi? Fixes & Causes", excerpt: "Wi-Fi dropping or won't connect? Nine in ten are the router, a stale setting or a VPN, all free to fix. Six fixes in order, plus the rare hardware causes (disturbed antenna after a screen repair, spill, board) and Dubai pricing.", category: "Problem solving · MacBook", author: "Shafiq", date: "June 2026", minutes: 8 },
  { slug: "/blog/macbook-keyboard-not-working-fix", title: "MacBook Keyboard Not Working? Fixes & Causes", excerpt: "Dead keys or a whole keyboard that won't type? About a third are software (Slow Keys, Mouse Keys, remapping apps) and the rest hardware (debris under a butterfly key, a spill, a swollen battery). Six fixes in order, plus the external-keyboard test that settles it.", category: "Problem solving · MacBook", author: "Ali", date: "June 2026", minutes: 9 },
  { slug: "/blog/macbook-screen-flickering-fix", title: "MacBook Screen Flickering? Causes & Fixes", excerpt: "Flickering screen or flashing horizontal lines? About half are software (macOS update, True Tone, graphics switching) and half hardware (worn flex cable, panel). Six fixes in order, plus the lid-angle test that pinpoints the cable.", category: "Problem solving · MacBook", author: "Usman", date: "June 2026", minutes: 9 },
  { slug: "/blog/macbook-black-screen-fix", title: "MacBook Black Screen? Fixes for 2026", excerpt: "Powers on but the screen stays black? Fix order: external monitor test, SMC/NVRAM reset, Safe Mode, plus the hardware causes (Flexgate, backlight, GPU) with AED ranges.", category: "Problem solving · MacBook", author: "Shafiq", date: "June 2026", minutes: 9 },
  { slug: "/blog/macbook-stuck-on-apple-logo", title: "MacBook Stuck on the Apple Logo? How to Fix It", excerpt: "Stuck on the Apple logo or progress bar? Wait it out, then Safe Mode, NVRAM, Recovery + First Aid, and reinstall without erasing. When it is a failing SSD with data at risk.", category: "Problem solving · MacBook", author: "Shafiq", date: "June 2026", minutes: 9 },
  { slug: "/blog/macbook-fan-loud-always-on", title: "MacBook Fan Always Loud? Causes & Fixes", excerpt: "Fan roaring for no reason? Runaway processes, dust-clogged heatsinks (common in Dubai), dried paste and SMC glitches, in order, plus when a clean and repaste is overdue.", category: "Problem solving · MacBook", author: "Shafiq", date: "June 2026", minutes: 8 },
  { slug: "/blog/macbook-wont-charge-fixes", title: "MacBook Won't Charge? 8 Fixes to Try First", excerpt: "Plugged in but not charging? 8 fixes in order: cable, brick, port lint, SMC reset, battery health and swelling, and how to tell the port from the battery from the charger.", category: "Problem solving · MacBook", author: "Shafiq", date: "June 2026", minutes: 9 },
  { slug: "/blog/macbook-maintenance-checklist-dubai", title: "MacBook Maintenance Checklist - Keep Your Mac Fast in Dubai", excerpt: "Monthly, quarterly and yearly MacBook upkeep for Dubai: storage and update checks, battery health via System Settings, Time Machine backups, Safe Mode, and the once-a-year dust clean (AED 280) that prevents most thermal faults.", category: "Care guide · MacBook", author: "Usman", date: "June 2026", minutes: 7 },
  { slug: "/blog/applecare-vs-independent-repair-dubai", title: "AppleCare vs Independent MacBook Repair in Dubai: Which Is Worth It?", excerpt: "Honest Dubai split: when AppleCare+ or the Apple Store wins (in warranty, accidental cover) and when an independent specialist wins (out of warranty, older models, lower prices). We are independent, not an AASP.", category: "Honest guide · MacBook", author: "Usman", date: "June 2026", minutes: 8 },
  // Final batch (Prompt 45)
  { slug: "/blog/lightning-vs-usb-c-explained-2026", title: "Lightning vs USB-C on iPhone - Where We Are in 2026", excerpt: "iPhone 17, Air, 17e all USB-C. Lightning lives on iPhone 14, SE 2/3, iPad 9. Cable speeds, charging wattage, MagSafe, and what to buy in 2026.", category: "Apple news · Standards", author: "Usman", date: "April 2026", minutes: 9 },
  { slug: "/blog/iphone-screen-repair-voucher-dubai", title: "iPhone Screen Repair Voucher Dubai - Save With Vouchers", excerpt: "Pre-purchase screen repair vouchers - 15% off, valid 12 months, transferable, refundable. How they work, who they're for, comparison with AppleCare+.", category: "Service · Vouchers", author: "Ali", date: "April 2026", minutes: 7 },
  { slug: "/blog/troubleshoot-charging-on-new-iphone", title: "New iPhone Not Charging Right? Troubleshooting Guide", excerpt: "iPhone 17, 17 Pro, 17e, 16e - USB-C era charging issues. 8 fixes - port cleaning, brick wattage, cable spec, liquid alert - before paying for port repair.", category: "Problem solving · iPhone charging", author: "Usman", date: "April 2026", minutes: 8 },
  { slug: "/blog/macbook-repair-near-me-dubai", title: "MacBook Repair Near Me Dubai - Workshop Location & Service Map", excerpt: "Concord Tower, Dubai Media City. 5-min coverage Marina, Internet City, Knowledge Village. Free pickup all of Dubai. Sharjah/Abu Dhabi via paid logistics.", category: "Local · Service area", author: "Ali", date: "April 2026", minutes: 8 },
  { slug: "/blog/iphone-air-what-not-to-do", title: "iPhone Air Care Guide - What NOT to Do", excerpt: "5.6 mm titanium = Apple's most fragile iPhone. 5 habits that wreck it: back-pocket bending, no case, hot car, MagSafe wallet stacks, side-button pressure.", category: "Care guide · iPhone Air", author: "Shafiq", date: "April 2026", minutes: 8 },
  { slug: "/blog/apple-silicon-vs-intel-repair-difference", title: "Apple Silicon vs Intel Mac Repair - The Real Differences", excerpt: "M1 → M5 SoC integration changes everything. Soldered RAM/SSD, board-swap pricing, failure modes that disappeared, and new ones. What it means for buying.", category: "Technical · Mac platform", author: "Ali", date: "April 2026", minutes: 11 },
  // Seasonal & practical (Prompt 44)
  {
    slug: "/blog/protect-macbook-dubai-summer-heat",
    title: "Protect Your MacBook in Dubai's 50°C Summer Heat",
    excerpt: "Apple's safe range is 10-35°C. Dubai breaks that 3 months a year. Battery damage, throttling above 35°C, permanent damage above 45°C. Never leave in a parked car (cabin reaches 70°C+).",
    category: "Seasonal · MacBook care",
    author: "Shafiq",
    date: "April 2026",
    minutes: 9,
  },
  {
    slug: "/blog/iphone-overheating-dubai-summer-fix",
    title: "iPhone Overheating in Dubai Summer - Causes & Solutions",
    excerpt: "Why iPhones overheat at 45°C+ ambient, the 'Temperature: iPhone needs to cool down' message explained, what NOT to do (don't refrigerate), and when overheating means hardware failure.",
    category: "Seasonal · iPhone",
    author: "Usman",
    date: "April 2026",
    minutes: 8,
  },
  {
    slug: "/blog/macbook-back-to-school-dubai",
    title: "MacBook Back to School Dubai 2026 - Buying Guide",
    excerpt: "Right MacBook per grade. Primary: refurb iPad. Secondary: MacBook Air M3 13\". Uni general: M4 Air. Engineering/design: Pro 14\" M4. Education pricing, AppleCare+, trade-in values.",
    category: "Buying guide · Back to school",
    author: "Ali",
    date: "April 2026",
    minutes: 11,
  },
  {
    slug: "/blog/dubai-shopping-festival-apple-deals",
    title: "Dubai Shopping Festival Apple Deals - Best Time to Buy",
    excerpt: "DSF (Dec-Jan) and White Friday (Nov) - when Apple actually discounts. Tax-free 5% VAT refund for tourists. When NOT to buy (Aug-Sept iPhone launch). Resellers vs Apple Store math.",
    category: "Seasonal · Buying",
    author: "Shafiq",
    date: "April 2026",
    minutes: 9,
  },
  {
    slug: "/blog/ramadan-hours-apple-repair-dubai",
    title: "Ramadan Hours - Apple Repair Dubai 2026",
    excerpt: "Ramadan 2026 (17 Feb - 19 Mar) - workshop runs 10am-4pm + 8pm-1am, closed for iftar 5:30-7:30. Pickup/delivery timing, Apple Store Dubai Mall hours, Eid Al Fitr closure schedule.",
    category: "Seasonal · Hours",
    author: "Usman",
    date: "April 2026",
    minutes: 6,
  },
  {
    slug: "/blog/laptop-repair-vs-buy-new-2026",
    title: "MacBook Repair or Buy New? Decision Math 2026",
    excerpt: "Repair if cost < 50% of resale. Year-by-year MacBook decision matrix. M1 Air = best repair ROI. Pre-2017 usually replace. Resale values, trade-in options (Apple, us, Dubizzle).",
    category: "Buying guide · Decision",
    author: "Ali",
    date: "April 2026",
    minutes: 10,
  },
  // Repair process & trust (Prompt 43)
  {
    slug: "/blog/why-21-years-experience-matters",
    title: "Why 21 Years of Apple Repair Experience Matters",
    excerpt: "Founded October 2004 - PowerBook G4 era. 40,000+ devices. Pattern-recognition knowledge across 6 chip generations, AED 380K+ tooling, and team continuity (Shafiq since 2008, Usman since 2012).",
    category: "Trust · About us",
    author: "Ali",
    date: "April 2026",
    minutes: 10,
  },
  {
    slug: "/blog/no-fix-no-charge-policy-explained",
    title: "No Fix No Charge - How Our Promise Works",
    excerpt: "Free diagnosis, free pickup, zero charge if we can't solve your problem. 96.3% acceptance-to-success rate makes the math work. What 'fix' means and how partial-fix edge cases are handled.",
    category: "Trust · Policy",
    author: "Usman",
    date: "April 2026",
    minutes: 8,
  },
  {
    slug: "/blog/free-pickup-delivery-dubai-how-it-works",
    title: "Free MacBook Pickup & Delivery Dubai - How It Works",
    excerpt: "WhatsApp +971 55 741 3706 - courier within 2 hours across Dubai. Diagnosis at workshop, written quote, approval, delivery. Card / cash / transfer / Tabby on delivery. Sharjah & AD via paid logistics.",
    category: "Trust · Logistics",
    author: "Shafiq",
    date: "April 2026",
    minutes: 9,
  },
  {
    slug: "/blog/transparent-repair-pricing-explained",
    title: "How We Calculate Repair Quotes - Full Transparency",
    excerpt: "Quote = parts at chosen tier + labour at AED 100-250/hr + ~10% workshop margin. Free diagnosis, no-fix-no-charge, no surprise additions. The estimate-vs-quote distinction explained.",
    category: "Trust · Pricing",
    author: "Ali",
    date: "April 2026",
    minutes: 9,
  },
  {
    slug: "/blog/genuine-parts-vs-quality-alternative-explained",
    title: "Genuine Apple Parts vs Alternatives - Honest Guide",
    excerpt: "Three tiers: Genuine (AASP-only) → OEM-equivalent (our default) → aftermarket. When genuine matters (Face ID, True Tone), when alternatives are fine (battery, speakers). Performance and warranty differences.",
    category: "Trust · Parts policy",
    author: "Usman",
    date: "April 2026",
    minutes: 10,
  },
  {
    slug: "/blog/macbook-repair-warranty-explained",
    title: "MacBook Repair Warranty Explained - Dubai 2026",
    excerpt: "12-month workmanship + parts warranty (3 months on batteries). Coverage scope, exclusions, claim process, comparison with Apple's warranty, and AppleCare+ interaction. Warranty transfers if you sell.",
    category: "Trust · Warranty",
    author: "Shafiq",
    date: "April 2026",
    minutes: 9,
  },
  // Mac Mini / Pro / Studio deep-dives (Prompt 42)
  {
    slug: "/blog/best-mac-for-developers-dubai-2026",
    title: "Best Mac for Developers in Dubai 2026",
    excerpt: "Web dev: Mac Mini M4. iOS dev: MacBook Pro 14 M4. ML/AI: Mac Studio M3 Ultra. RAM sizing per discipline plus monitor and dock recommendations.",
    category: "Buying guide · Developers",
    author: "Ali",
    date: "April 2026",
    minutes: 11,
  },
  {
    slug: "/blog/mac-mini-running-slow-fix",
    title: "Mac Mini Running Slow? 8 Fixes That Work",
    excerpt: "Diagnostic order - Activity Monitor, storage, NVRAM, browser cache, Disk Utility, updates, fan/thermal, macOS reinstall. Mac Mini-specific tips for compact-chassis heat.",
    category: "Repair guide · Mac Mini",
    author: "Usman",
    date: "April 2026",
    minutes: 9,
  },
  {
    slug: "/blog/mac-pro-2019-still-worth-it",
    title: "Mac Pro 2019 in 2026 - Buying Used Guide",
    excerpt: "Apple killed Mac Pro. PCIe-card workflows still need it (Avid HDX, RED Rocket-X). Used pricing, MPX module costs, repair availability, vs Mac Studio Ultra.",
    category: "Buying guide · Mac Pro",
    author: "Shafiq",
    date: "April 2026",
    minutes: 11,
  },
  {
    slug: "/blog/mac-studio-m3-ultra-vs-m4-max-which",
    title: "Mac Studio M3 Ultra vs M4 Max - 2026 Comparison",
    excerpt: "Apple shipped both at once. M3 Ultra wins multi-core + 512 GB RAM ceiling; M4 Max wins single-thread + price. Workflow-by-workflow verdict including LLM inference.",
    category: "Comparison · Mac Studio",
    author: "Ali",
    date: "April 2026",
    minutes: 11,
  },
  {
    slug: "/blog/mac-mini-vs-mac-studio-2026",
    title: "Mac Mini vs Mac Studio 2026 - Buying Guide",
    excerpt: "Mac Mini M4 Pro AED 4,499 vs Mac Studio M4 Max AED 8,499. When the Studio premium is justified - sustained loads, memory bandwidth, port count, resale.",
    category: "Comparison · Mac desktop",
    author: "Usman",
    date: "April 2026",
    minutes: 10,
  },
  {
    slug: "/blog/mac-mini-m4-worth-it",
    title: "Mac Mini M4 (2024) - Worth Buying in 2026?",
    excerpt: "AED 2,599, 16 GB base RAM, new compact chassis. vs M2, M4 Pro, MacBook Air, iMac. Total cost with display + accessories. Resale and repair expectations.",
    category: "Buying guide · Mac desktop",
    author: "Shafiq",
    date: "April 2026",
    minutes: 10,
  },
  // Selling / Refurb (Prompt 41)
  {
    slug: "/blog/iphone-repair-near-me-dubai",
    title: "iPhone Repair Near Me Dubai - How to Choose Wisely",
    excerpt: "10 questions to ask before handing your iPhone to anyone. Red flags to refuse, why we tick all 10, full directions to our Concord Tower workshop.",
    category: "Honest guide · iPhone",
    author: "Ali",
    date: "April 2026",
    minutes: 10,
  },
  {
    slug: "/blog/iphone-screen-cracked-is-it-urgent",
    title: "iPhone Screen Cracked - How Urgent Is It?",
    excerpt: "Hairline crack: probably wait. Spider web: 7 days. Black bleeding: today. Dubai humidity makes cracks spread faster - full urgency table by symptom.",
    category: "Repair guide · iPhone",
    author: "Usman",
    date: "April 2026",
    minutes: 9,
  },
  {
    slug: "/blog/should-i-buy-refurbished-macbook-dubai",
    title: "Should I Buy Refurbished MacBook in Dubai 2026?",
    excerpt: "Save 30-40% safely - Apple Certified vs our refurbs vs Dubizzle. 10-point pre-purchase check, battery expectations, best refurb picks for 2026.",
    category: "Buying guide · MacBook",
    author: "Shafiq",
    date: "April 2026",
    minutes: 11,
  },
  {
    slug: "/blog/how-to-factory-reset-iphone-before-selling",
    title: "How to Factory Reset iPhone Before Selling",
    excerpt: "5 critical steps with HowTo schema. Sign out iCloud (Activation Lock), iMessage, FaceTime, unpair Apple Watch, Erase All Content. Verify before handing over.",
    category: "How-to · iPhone",
    author: "Ali",
    date: "April 2026",
    minutes: 8,
  },
  {
    slug: "/blog/best-way-to-sell-old-iphone-dubai",
    title: "Best Way to Sell Old iPhone in Dubai 2026",
    excerpt: "Dubizzle (highest, slow), us (instant cash 10-15% less), Apple Trade-In (lowest, easiest). Real prices, scam warnings, best months to sell.",
    category: "Resale guide · iPhone",
    author: "Usman",
    date: "April 2026",
    minutes: 10,
  },
  {
    slug: "/blog/how-much-is-my-iphone-worth-dubai",
    title: "How Much Is My iPhone Worth - Dubai 2026 Resale Guide",
    excerpt: "Full April 2026 Dubai resale prices for every iPhone model - mint, good, cracked. Apple Trade-In comparison and how to maximise sale price.",
    category: "Resale guide · iPhone",
    author: "Shafiq",
    date: "April 2026",
    minutes: 11,
  },
  // iPad / iCloud (Prompt 40)
  {
    slug: "/blog/iphone-repair-vs-applecare-which-better",
    title: "iPhone Repair vs AppleCare+ in UAE - Honest Math",
    excerpt: "AppleCare+ on iPhone 17 Pro Max is AED 1,099 + AED 109 deductibles. Per-user-type math vs our pay-as-you-go pricing. Theft & Loss tier analysed.",
    category: "Cost guide · iPhone",
    author: "Ali",
    date: "April 2026",
    minutes: 10,
  },
  {
    slug: "/blog/data-recovery-broken-macbook-2026",
    title: "Data Recovery from Broken MacBook - Dubai 2026 Guide",
    excerpt: "AED 400-2,000 by damage type. Apple Silicon + FileVault + T2 limits explained. 1,247 case success-rate data from our 2025 records.",
    category: "Repair guide · MacBook",
    author: "Usman",
    date: "April 2026",
    minutes: 11,
  },
  {
    slug: "/blog/icloud-locked-iphone-what-to-do",
    title: "iCloud Locked iPhone in Dubai - Your Real Options",
    excerpt: "Honest guide. Why we don't offer 'iCloud unlock', how Apple's free recovery works, and how to check before buying second-hand iPhone in 5 minutes.",
    category: "Honest guide · iPhone",
    author: "Shafiq",
    date: "April 2026",
    minutes: 10,
  },
  {
    slug: "/blog/ipad-screen-repair-cost-dubai-2026",
    title: "iPad Screen Repair Cost Dubai 2026 - Every Model",
    excerpt: "iPad screen repair prices Dubai 2026: AED 450 (iPad 9) to AED 1,200 (iPad Pro M5). LCD vs mini-LED vs OLED, Apple Store comparison, same-day service.",
    category: "Cost guide · iPad",
    author: "Ali",
    date: "June 2026",
    minutes: 11,
  },
  {
    slug: "/blog/ipad-battery-replacement-cost-dubai",
    title: "iPad Battery Replacement Cost Dubai 2026 - All Models",
    excerpt: "iPad battery replacement Dubai 2026: AED 300 (older models) to AED 550 (iPad Pro M5). When to replace, 80% rule, same-day service, 12-month warranty.",
    category: "Cost guide · iPad",
    author: "Shafiq",
    date: "June 2026",
    minutes: 9,
  },
  {
    slug: "/blog/ipad-water-damage-repair-dubai-guide",
    title: "iPad Water Damage Repair Dubai - Costs & What To Do First",
    excerpt: "iPad water damage repair Dubai: AED 450–1,400 depending on board damage. First 30 minutes matter most. 80% recovery rate. Free pickup, 12-month warranty.",
    category: "Problem solving · iPad",
    author: "Ali",
    date: "June 2026",
    minutes: 10,
  },
  {
    slug: "/blog/ipad-air-m4-vs-pro-m5-2026",
    title: "iPad Air M4 vs iPad Pro M5 - 2026 Comparison",
    excerpt: "Air M4 (AED 2,199) vs Pro M5 (AED 3,899). Tandem OLED, ProMotion, Thunderbolt, and per-use-case picks for Dubai buyers. Repair-cost comparison included.",
    category: "Comparison · iPad",
    author: "Ali",
    date: "April 2026",
    minutes: 10,
  },
  // Industry & Apple News (Prompt 38)
  {
    slug: "/blog/apple-intelligence-on-old-iphones",
    title: "Apple Intelligence - Which iPhones Support It in 2026?",
    excerpt: "13 compatible iPhones from 15 Pro to 17e. Why iPhone 15 (non-Pro) is excluded, battery impact (3-6%), Private Cloud Compute privacy, and iOS 27 roadmap.",
    category: "Industry · Apple Intelligence",
    author: "Usman",
    date: "April 2026",
    minutes: 10,
  },
  {
    slug: "/blog/iphone-air-design-engineering-marvel",
    title: "iPhone Air - Engineering the Thinnest iPhone",
    excerpt: "5.5mm titanium unibody. Single 48 MP camera. 14-hour battery. The engineering tradeoffs and 20-30% repair-complexity premium, with full Dubai pricing.",
    category: "Industry · iPhone Air",
    author: "Shafiq",
    date: "April 2026",
    minutes: 10,
  },
  {
    slug: "/blog/m5-chip-explained-vs-m4",
    title: "Apple M5 Chip vs M4 - What's Actually Different",
    excerpt: "+18% CPU, +28% GPU, ray-tracing v2, 4× AI matmul via new Neural Accelerators, +27% memory bandwidth on M5 base. Three tiers, full Mac compatibility list.",
    category: "Industry · Apple Silicon",
    author: "Ali",
    date: "April 2026",
    minutes: 10,
  },
  {
    slug: "/blog/iphone-fold-2026-what-to-expect",
    title: "iPhone Fold (Sept 2026) - Everything Known So Far",
    excerpt: "~AED 7,500. 7.8″ inner OLED. A20 Pro. Titanium hinge. Credible supply-chain leaks (Kuo, Gurman, DSCC), repair concerns, and whether to wait or buy 17 Pro Max.",
    category: "Industry · iPhone Fold",
    author: "Usman",
    date: "April 2026",
    minutes: 10,
  },
  {
    slug: "/blog/apple-mac-pro-discontinued-what-now",
    title: "Apple Discontinued the Mac Pro - Your 2026 Alternatives",
    excerpt: "Apple killed the Mac Pro on 11 March 2026. Mac Studio M3 Ultra is the new top Mac. PCIe-locked workflows still need the 2019 Intel tower (used AED 11,000-22,000).",
    category: "Industry · Mac Pro",
    author: "Shafiq",
    date: "April 2026",
    minutes: 11,
  },
  // Buying guides (Prompt 37)
  {
    slug: "/blog/macbook-neo-worth-buying-2026",
    title: "MacBook Neo Review - Should You Buy Apple's $599 Mac?",
    excerpt: "A18 Pro chip in a Mac shell at AED 2,199. Honest take on who Neo is for, who should skip, and why a refurbished M1 Air may win.",
    category: "Buying guide · MacBook",
    author: "Ali",
    date: "April 2026",
    minutes: 10,
  },
  {
    slug: "/blog/should-i-buy-iphone-17e-or-iphone-16",
    title: "iPhone 17e or iPhone 16 - Which to Buy in 2026?",
    excerpt: "17e is AED 400 cheaper with newer A19 chip. iPhone 16 has dual cameras and Camera Control. Both run Apple Intelligence - verdict by user.",
    category: "Buying guide · iPhone",
    author: "Usman",
    date: "April 2026",
    minutes: 10,
  },
  {
    slug: "/blog/best-mac-for-creative-pros-dubai",
    title: "Best Mac for Creative Pros in Dubai 2026",
    excerpt: "Photoshop = Air enough. Premiere = Pro 14. DaVinci 4K = Mac Studio Max. 8K = Studio Ultra. Per-discipline picks with RAM sizing.",
    category: "Buying guide · Creative",
    author: "Shafiq",
    date: "April 2026",
    minutes: 11,
  },
  {
    slug: "/blog/best-imac-for-business-dubai",
    title: "Best iMac for Business in Dubai 2026",
    excerpt: "iMac M4 24″ at AED 6,499 fits 90% of UAE SMEs. RAM/SSD sizing, multi-monitor, AppleCare+, and lease-vs-buy with 2023 corporate-tax math.",
    category: "Buying guide · iMac",
    author: "Ali",
    date: "April 2026",
    minutes: 11,
  },
  {
    slug: "/blog/best-refurbished-iphone-dubai",
    title: "Best Refurbished iPhone Dubai 2026",
    excerpt: "iPhone 11 budget (AED 950), iPhone 13/14 sweet spot (AED 1,800), iPhone 15 Pro premium (AED 3,200). 10-point pre-buy checklist + iCloud-lock warning.",
    category: "Buying guide · iPhone",
    author: "Usman",
    date: "April 2026",
    minutes: 11,
  },
  {
    slug: "/blog/best-macbook-for-students-dubai-2026",
    title: "Best MacBook for Students in Dubai 2026",
    excerpt: "AED 2,500 refurb M1 Air, AED 4,500 new Air M3, AED 7,500 Pro 14 M4. Storage and RAM advice for a 4-year-degree purchase.",
    category: "Buying guide · MacBook",
    author: "Shafiq",
    date: "April 2026",
    minutes: 11,
  },
  // Comparison posts (Prompt 36)
  {
    slug: "/blog/imac-vs-mac-mini-vs-mac-studio",
    title: "iMac vs Mac Mini vs Mac Studio - Pick Right in 2026",
    excerpt: "iMac for the family. Mac Mini for value. Mac Studio for pros. Pricing matrix, repair cost, and resale by Mac desktop.",
    category: "Comparison · Mac Desktop",
    author: "Shafiq",
    date: "April 2026",
    minutes: 11,
  },
  {
    slug: "/blog/macbook-air-vs-macbook-pro-2026",
    title: "MacBook Air vs MacBook Pro M5 - 2026 Buyer's Guide",
    excerpt: "Air covers 95% of users at AED 4,499. Pro M5 only justified for video editors, ML devs, and colour-critical work. Used M2 still excellent.",
    category: "Comparison · MacBook",
    author: "Ali",
    date: "April 2026",
    minutes: 11,
  },
  {
    slug: "/blog/iphone-17-vs-iphone-air-which-buy",
    title: "iPhone 17 vs iPhone Air - Dubai Buyer's Guide",
    excerpt: "Same A19 chip. iPhone 17 (AED 3,799) wins on cameras and battery. iPhone Air (AED 4,499) wins on titanium thinness - 5.6mm at 165g.",
    category: "Comparison · iPhone",
    author: "Usman",
    date: "April 2026",
    minutes: 10,
  },
  {
    slug: "/blog/macbook-pro-m4-vs-m5-worth-upgrade",
    title: "MacBook Pro M4 vs M5 - Should You Upgrade?",
    excerpt: "M5 is 18% faster CPU, 28% faster GPU, +1 hour battery. But M4 is AED 1,500 cheaper. Real benchmarks and verdict by user type.",
    category: "Comparison · MacBook",
    author: "Shafiq",
    date: "April 2026",
    minutes: 11,
  },
  {
    slug: "/blog/iphone-screen-replaced-but-issues-after",
    title: "iPhone Screen Replaced But Now Glitchy? Common Causes",
    excerpt: "Cheap screen broke Face ID or True Tone? OEM vs OEM-equivalent vs aftermarket explained - and what we can salvage.",
    category: "Problem solving · iPhone",
    author: "Ali",
    date: "April 2026",
    minutes: 11,
  },
  {
    slug: "/blog/macbook-touch-bar-not-working",
    title: "MacBook Touch Bar Not Working? Fix Guide",
    excerpt: "Terminal command fixes 60% of frozen Touch Bars in 2 seconds. Hardware repair AED 600 - saving AED 1,200 vs Apple Store.",
    category: "Problem solving · MacBook",
    author: "Usman",
    date: "April 2026",
    minutes: 9,
  },
  {
    slug: "/blog/iphone-15-pro-overheating-fix",
    title: "iPhone 15 Pro Overheating? Fix Guide for 2026",
    excerpt: "Why titanium + A17 Pro feel hotter, normal vs concerning heat levels, and 6 software fixes before paying for hardware service.",
    category: "Problem solving · iPhone",
    author: "Shafiq",
    date: "April 2026",
    minutes: 10,
  },
  {
    slug: "/blog/macbook-battery-health-check-guide",
    title: "How to Check MacBook Battery Health - Complete Guide",
    excerpt: "3 methods (Settings, Option-click, Terminal) and the technician's framework for replace-now vs wait-six-months.",
    category: "Problem solving · MacBook",
    author: "Ali",
    date: "April 2026",
    minutes: 10,
  },
  {
    slug: "/blog/iphone-water-damage-action-plan",
    title: "iPhone Water Damage - Your 30-Minute Action Plan",
    excerpt: "Power off, remove SIM, no rice, no charging. iPhones corrode faster than MacBooks - bring in within 4 hours for 85%+ recovery.",
    category: "Emergency · iPhone",
    author: "Usman",
    date: "April 2026",
    minutes: 9,
  },
  // Problem solving guides (Prompt 34)
  {
    slug: "/blog/imac-not-turning-on-power-supply-issues",
    title: "iMac Not Turning On? Power Supply Issues Explained",
    excerpt: "iMac 27″ 2017-2020 PSU failures are widespread by 2026. The LED-count diagnostic, AED 700 fix, and why DIY is dangerous (400V capacitors).",
    category: "Problem solving · iMac",
    author: "Ali",
    date: "April 2026",
    minutes: 9,
  },
  {
    slug: "/blog/iphone-not-charging-7-fixes",
    title: "iPhone Not Charging? 7 Things to Try First",
    excerpt: "Half of 'dead' charging ports are just lint. 7 step-by-step fixes before paying for repair, plus free port cleaning at our workshop.",
    category: "Problem solving · iPhone",
    author: "Usman",
    date: "April 2026",
    minutes: 10,
  },
  {
    slug: "/blog/macbook-flexgate-explained",
    title: "MacBook Flexgate - What It Is and How to Fix It",
    excerpt: "Black backlight strip on your 2016/2017 MacBook Pro? AED 600 cable repair vs AED 800 full display. Apple program closed in 2022.",
    category: "Problem solving · MacBook",
    author: "Shafiq",
    date: "April 2026",
    minutes: 9,
  },
  {
    slug: "/blog/water-damage-macbook-immediate-action",
    title: "Spilled Water on MacBook? Do This Right Now",
    excerpt: "30-second emergency steps: power off, flip upside-down, no rice, no hairdryer. 80-90% recovery if brought in within 24 hours.",
    category: "Emergency · MacBook",
    author: "Ali",
    date: "April 2026",
    minutes: 9,
  },
  {
    slug: "/blog/macbook-running-slow-10-fixes",
    title: "MacBook Running Slow? 10 Fixes That Actually Work",
    excerpt: "Storage, Activity Monitor, login items, battery throttling, malware. 10-minute diagnostic - 80% of slowdowns are software, not hardware.",
    category: "Problem solving · MacBook",
    author: "Usman",
    date: "April 2026",
    minutes: 12,
  },
  {
    slug: "/blog/macbook-not-turning-on-fix-guide",
    title: "MacBook Not Turning On? 7 Fixes Before You Bring It In",
    excerpt: "30% of 'dead MacBook' cases fix in 5 minutes. SMC reset, NVRAM, charger checks, Safe Boot, Recovery - Apple Silicon and Intel covered.",
    category: "Problem solving · MacBook",
    author: "Shafiq",
    date: "April 2026",
    minutes: 11,
  },
  // MacBook cost guides (Prompt 33)
  {
    slug: "/blog/macbook-logic-board-repair-cost-dubai",
    title: "MacBook Logic Board Repair Dubai - Component vs Board Swap",
    excerpt: "Apple swaps the whole board for AED 4,000+. We fix the failing chip for AED 800-1,500. Component-level repair explained.",
    category: "Cost guide · MacBook",
    author: "Ali",
    date: "April 2026",
    minutes: 13,
  },
  {
    slug: "/blog/macbook-keyboard-repair-cost-by-model",
    title: "MacBook Keyboard Repair Cost by Model - Dubai 2026",
    excerpt: "Butterfly keyboard? Top-case swap, AED 700. Magic Keyboard? Single key, AED 150. The model year decides everything.",
    category: "Cost guide · MacBook",
    author: "Usman",
    date: "April 2026",
    minutes: 10,
  },
  {
    slug: "/blog/macbook-water-damage-repair-cost-success-rates",
    title: "MacBook Water Damage Repair Dubai - Cost & Success Rates",
    excerpt: "AED 700 starting. 80-90% recovery rate within 24 hours. Salt water vs fresh, ultrasonic cleaning, and why rice doesn't work.",
    category: "Cost guide · MacBook",
    author: "Shafiq",
    date: "April 2026",
    minutes: 12,
  },
  {
    slug: "/blog/macbook-pro-m5-vs-apple-store-repair-cost",
    title: "MacBook Pro M5 Repair - Us vs Apple Store Dubai (2026)",
    excerpt: "Same M5 MacBook Pro screen: Apple Store AED 2,400, our shop AED 1,000. Side-by-side on 4 services.",
    category: "Cost comparison · MacBook",
    author: "Ali",
    date: "April 2026",
    minutes: 10,
  },
  {
    slug: "/blog/macbook-battery-replacement-cost-2026",
    title: "MacBook Battery Replacement Cost Dubai 2026",
    excerpt: "AED 450 for MacBook Air, up to AED 700 for 16″ Pro. Same-day. How to check battery health and spot swelling early.",
    category: "Cost guide · MacBook",
    author: "Usman",
    date: "April 2026",
    minutes: 11,
  },
  {
    slug: "/blog/macbook-screen-repair-cost-dubai-2026",
    title: "MacBook Screen Repair Cost Dubai 2026 - All Models",
    excerpt: "AED 600 (13″ Air) to AED 1,200 (16″ Pro M5 Max). Liquid Retina XDR explained, Flexgate, Apple Store comparison.",
    category: "Cost guide · MacBook",
    author: "Shafiq",
    date: "April 2026",
    minutes: 11,
  },
  // iPhone cost guides (Prompt 32)
  {
    slug: "/blog/iphone-repair-vs-replace-decision-guide",
    title: "iPhone Repair or Replace? Decision Guide 2026",
    excerpt: "Spend AED 600 on a screen repair, or AED 3,000 on a new iPhone? A model-by-model decision matrix using April 2026 Dubai resale values.",
    category: "Cost guide · iPhone",
    author: "Ali",
    date: "April 2026",
    minutes: 11,
  },
  {
    slug: "/blog/iphone-15-vs-iphone-17-repair-cost-comparison",
    title: "iPhone 15 vs iPhone 17 Repair Costs Compared (2026)",
    excerpt: "Side-by-side: screen, battery, USB-C, camera, vapor chamber. The 17 Pro costs about 25% more to repair than the 15 Pro.",
    category: "Cost comparison · iPhone",
    author: "Shafiq",
    date: "April 2026",
    minutes: 9,
  },
  {
    slug: "/blog/iphone-water-damage-repair-cost-dubai",
    title: "iPhone Water Damage Repair Dubai - Cost & Success Rates",
    excerpt: "AED 400-1,200 depending on board damage. 80% recovery rate at our workshop, with first-24-hour rules that decide the outcome.",
    category: "Cost guide · iPhone",
    author: "Usman",
    date: "April 2026",
    minutes: 10,
  },
  {
    slug: "/blog/iphone-back-glass-repair-cost-dubai",
    title: "iPhone Back Glass Repair Dubai - Cost Guide 2026",
    excerpt: "Apple Store quotes the full chassis swap for back-glass cracks. We laser-separate just the glass - saving AED 1,000+ per phone.",
    category: "Cost guide · iPhone",
    author: "Ali",
    date: "April 2026",
    minutes: 9,
  },
  {
    slug: "/blog/iphone-battery-replacement-cost-dubai-all-models",
    title: "iPhone Battery Replacement Cost Dubai - Every Model 2026",
    excerpt: "AED 250 (older models) to AED 450 (iPhone 17 Pro Max). Why iPhone 15+ batteries cost more, plus the 80% rule explained.",
    category: "Cost guide · iPhone",
    author: "Shafiq",
    date: "April 2026",
    minutes: 10,
  },
  {
    slug: "/blog/iphone-screen-repair-cost-dubai-2026",
    title: "iPhone Screen Repair Cost in Dubai 2026 - Every Model",
    excerpt: "AED 350 to AED 1,400 depending on model. Full price table for every iPhone Apple has shipped since 2014, with OLED vs LCD context.",
    category: "Cost guide · iPhone",
    author: "Usman",
    date: "April 2026",
    minutes: 12,
  },
];

// ---------------------------------------------------------------------------
// Category hubs. Every post's `category` is "Type · Subtopic"; the Type prefix
// alone decides which hub it belongs to (so posts never need re-tagging here).
// Add a new Type to a hub's `types` list to file its posts under that hub.
// ---------------------------------------------------------------------------

export type BlogCategory = {
  slug: string;   // URL: /blog/<slug>
  name: string;   // display name
  eyebrow: string;
  blurb: string;  // one-line summary for cards
  intro: string;  // SEO intro paragraph on the hub page
  types: string[]; // Type prefixes (before the "·") that map to this hub
};

export const CATEGORIES: BlogCategory[] = [
  {
    slug: "repair-costs",
    name: "Repair Costs",
    eyebrow: "AED pricing · 2026",
    blurb: "What every Apple repair actually costs in Dubai - real AED prices.",
    intro:
      "Honest, technician-written repair cost guides for every Apple device in Dubai. Screen, battery, water damage, logic board and back glass - each with current April 2026 AED pricing, model-by-model tables, and a side-by-side against Apple Store quotes. No call-for-price games: we publish the numbers so you can budget before you book. Every figure here is what our Dubai Media City workshop charges, backed by a 12-month warranty and our no-fix-no-charge promise.",
    types: ["Cost guide", "Cost comparison"],
  },
  {
    slug: "fixes",
    name: "Fixes & Troubleshooting",
    eyebrow: "DIY first · then us",
    blurb: "Step-by-step fixes for MacBook, iPhone, iMac and Mac problems.",
    intro:
      "Before you pay anyone, try these. Our technicians wrote every troubleshooting guide here from real Dubai workshop cases - won't-turn-on, black screen, won't-charge, overheating, water spills, loud fans and more. Each one walks the same diagnostic order we use in-house, tells you honestly which fixes you can do yourself, and flags the exact symptoms that mean it is hardware and worth bringing in. Free diagnosis if it comes to that, with same-day turnaround on most repairs.",
    types: ["Problem solving", "Emergency", "Repair guide"],
  },
  {
    slug: "buying-guides",
    name: "Buying Guides",
    eyebrow: "New, used & compared",
    blurb: "Which Mac or iPhone to buy - by budget, job and model.",
    intro:
      "Choosing your next Apple device in Dubai? These guides compare every current Mac and iPhone by price, performance and who they are actually for - students, developers, creatives, businesses and families. New vs refurbished, Air vs Pro, M4 vs M5, iMac vs Mini vs Studio: we lay out the trade-offs in plain language with UAE pricing, then tell you what we would buy. Written by technicians who repair these machines daily, so the durability and resale advice is real.",
    types: ["Buying guide", "Comparison"],
  },
  {
    slug: "sell-trade-in",
    name: "Sell & Trade-In",
    eyebrow: "Get max value",
    blurb: "Sell or trade your old Apple device for the most money in Dubai.",
    intro:
      "Getting rid of an old iPhone, MacBook or Mac? These guides show you exactly what your device is worth in Dubai right now, the safest way to sell it, and how the options stack up - Dubizzle for the highest price, us for instant cash, Apple Trade-In for convenience. We cover real April 2026 resale values, how to wipe your device safely before handing it over, and the scams to watch for in the UAE second-hand market.",
    types: ["Resale guide"],
  },
  {
    slug: "care-maintenance",
    name: "Care & Maintenance",
    eyebrow: "Make it last",
    blurb: "Keep your Apple device fast, cool and healthy in Dubai's climate.",
    intro:
      "A well-kept Mac lasts a decade; a neglected one dies in three years. These guides cover the upkeep that matters in Dubai specifically - protecting against 50C summer heat, dust-clogged fans, battery health, backups, and the everyday how-tos every owner should know. Practical, seasonal and written by the team that sees what heat and neglect actually do to Apple hardware in the UAE.",
    types: ["Care guide", "Seasonal", "How-to"],
  },
  {
    slug: "apple-news",
    name: "Apple News & Tech",
    eyebrow: "What's new, explained",
    blurb: "New chips, new models and what they mean for repair and buying.",
    intro:
      "Apple ships fast - new chips, new models, discontinued lines. These explainers cut through the launch hype and tell you what actually changed and whether it matters for you: the M5 chip, Apple Intelligence support, the iPhone Air and Fold, the discontinued Mac Pro, and how Apple Silicon changed repair forever. Written from a repair-and-buying angle, not a spec sheet, so you know what each change costs you down the line.",
    types: ["Industry", "Apple news", "Technical"],
  },
  {
    slug: "why-us",
    name: "How We Work",
    eyebrow: "Trust & transparency",
    blurb: "Our pricing, warranty, parts policy and what makes us different.",
    intro:
      "Twenty-one years repairing Apple devices in Dubai, and we put it all in writing. These guides explain exactly how we work - how we calculate quotes, what no-fix-no-charge really means, our 12-month warranty, the difference between genuine and quality-alternative parts, and how free pickup and delivery works across Dubai. Plus honest advice on choosing any repair shop, including the red flags to refuse. Transparency is the whole point.",
    types: ["Trust", "Honest guide", "Service", "Local"],
  },
];

/** The "Type" half of a post's "Type · Subtopic" category string. */
export function postType(p: Post): string {
  return p.category.split("·")[0].trim();
}

/** The hub a post belongs to (by its Type prefix), or undefined if unmapped. */
export function categoryForPost(p: Post): BlogCategory | undefined {
  const t = postType(p);
  return CATEGORIES.find((c) => c.types.includes(t));
}

/** Look up a hub by its URL slug. */
export function categoryBySlug(slug: string): BlogCategory | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}

/** All posts that belong to a hub, in registry (newest-first) order. */
export function postsInCategory(slug: string): Post[] {
  const c = categoryBySlug(slug);
  if (!c) return [];
  return POSTS.filter((p) => c.types.includes(postType(p)));
}

/** Device tags derived from the subtopic half of "Type · Subtopic". */
export const TAGS = [
  { slug: "macbook", name: "MacBook" },
  { slug: "iphone", name: "iPhone" },
  { slug: "ipad", name: "iPad" },
  { slug: "imac", name: "iMac" },
  { slug: "mac", name: "Mac (Mini · Studio · Pro)" },
] as const;

export type TagSlug = (typeof TAGS)[number]["slug"];

/** Subtopic half of the category string, lowercased for matching. */
function postSubtopic(p: Post): string {
  const parts = p.category.split("·");
  return parts.length > 1 ? parts[1].trim().toLowerCase() : "";
}

/** All posts that match a device tag slug. */
export function postsByTag(slug: TagSlug): Post[] {
  return POSTS.filter((p) => {
    const sub = postSubtopic(p);
    if (slug === "macbook") return sub.startsWith("macbook");
    if (slug === "iphone") return sub.startsWith("iphone");
    if (slug === "ipad") return sub.startsWith("ipad");
    if (slug === "imac") return sub === "imac";
    if (slug === "mac") return (
      sub === "mac desktop" ||
      sub === "mac mini" ||
      sub === "mac studio" ||
      sub === "mac pro" ||
      sub === "mac platform"
    );
    return false;
  });
}

/** Look up a tag by slug. */
export function tagBySlug(slug: string): (typeof TAGS)[number] | undefined {
  return TAGS.find((t) => t.slug === slug);
}

/** Post count per hub slug, for badges. */
export function categoryCounts(): Record<string, number> {
  const counts: Record<string, number> = {};
  for (const c of CATEGORIES) counts[c.slug] = 0;
  for (const p of POSTS) {
    const c = categoryForPost(p);
    if (c) counts[c.slug] += 1;
  }
  return counts;
}

