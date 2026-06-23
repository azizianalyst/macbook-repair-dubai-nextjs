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

// Admin-authored markdown posts (from /admin/blog), baked at build by scripts/gen-blog.cjs.
// Prepended below so they lead the index/sitemap/RSS (newest first) without touching the hand-built
// posts. Type-only coupling is one-way (this file owns `Post`); no runtime import cycle.
import { ADMIN_POSTS } from "./posts.generated";

// Blog taxonomy (categories + tags) is now edited in /admin/categories and baked by
// scripts/gen-categories.cjs → blog-taxonomy.generated.ts. This file still OWNS the BlogCategory type
// + all the helpers below and re-exports the data. Slugs are locked to the hub route folders.
import { CATEGORIES, TAGS } from "./blog-taxonomy.generated";
export { CATEGORIES, TAGS };

// Hand-built TSX posts (each also has its own /blog/<slug>/page.tsx). Never edited by the admin.
const HAND_POSTS: Post[] = [
  { slug: "/blog/imac-overheating-fan-noise-dubai", title: "iMac Overheating and Loud Fan in Dubai? Causes and Fixes 2026", excerpt: "An iMac running hot with a loud fan in Dubai is usually dust-clogged vents or dried thermal paste. A full thermal service starts from AED 300 at our Media City workshop.", category: "Fix guide \u00b7 iMac", author: "Memona", date: "June 2026", minutes: 7 },
  { slug: "/blog/imac-no-display-black-screen-dubai", title: "iMac No Display or Black Screen in Dubai? 6 Fixes 2026", excerpt: "An iMac that powers on with a black screen is usually a failed backlight, a GPU fault, or a loose display cable. Our Dubai workshop diagnoses every model free with repair from AED 600.", category: "Fix guide \u00b7 iMac", author: "Memona", date: "June 2026", minutes: 7 },
  { slug: "/blog/imac-ssd-upgrade-dubai", title: "iMac SSD Upgrade Dubai 2026: Fusion Drive to SSD Cost", excerpt: "Replacing a slow Fusion Drive or hard disk with an SSD is the single biggest speed upgrade for an Intel iMac, starting from AED 500 with data migrated at our Media City workshop.", category: "Cost guide \u00b7 iMac", author: "Memona", date: "June 2026", minutes: 7 },
  { slug: "/blog/mac-mini-no-display-hdmi-dubai", title: "Mac mini No Display Over HDMI in Dubai? 6 Fixes 2026", excerpt: "A Mac mini that powers on with no picture is usually an HDMI cable or port issue, a wrong resolution handshake, or a display IC fault. Our Dubai workshop diagnoses every model free with repair from AED 200.", category: "Fix guide \u00b7 Mac mini", author: "Memona", date: "June 2026", minutes: 7 },
  { slug: "/blog/mac-mini-overheating-dubai", title: "Mac mini Overheating or Loud Fan in Dubai? Fixes 2026", excerpt: "A Mac mini running hot with a loud fan in Dubai is usually a dust-clogged vent or dried thermal paste. A thermal service starts from AED 250 at our Media City workshop.", category: "Fix guide \u00b7 Mac mini", author: "Memona", date: "June 2026", minutes: 7 },
  { slug: "/blog/mac-mini-ssd-ram-upgrade-dubai", title: "Mac mini SSD and RAM Upgrade Dubai 2026: Cost Guide", excerpt: "On Intel Mac mini models, a RAM and SSD upgrade transforms a sluggish machine, with RAM from AED 400 and SSD from AED 500 at our Media City workshop.", category: "Cost guide \u00b7 Mac mini", author: "Memona", date: "June 2026", minutes: 7 },
  { slug: "/blog/mac-studio-not-turning-on-dubai", title: "Mac Studio Not Turning On in Dubai? 6 Fixes 2026", excerpt: "A Mac Studio that will not power on is usually a power cable or outlet issue, a tripped SMC, or a board-level fault. Our Dubai workshop diagnoses every model free with board repair from AED 600.", category: "Fix guide \u00b7 Mac Studio", author: "Memona", date: "June 2026", minutes: 7 },
  { slug: "/blog/mac-studio-overheating-dubai", title: "Mac Studio Overheating or Loud Fan in Dubai? Fixes 2026", excerpt: "A Mac Studio running hot with loud fans in Dubai is usually a dust-clogged intake or sustained heavy workload. A thermal service starts from AED 350 at our Media City workshop.", category: "Fix guide \u00b7 Mac Studio", author: "Memona", date: "June 2026", minutes: 7 },
  { slug: "/blog/mac-studio-no-display-dubai", title: "Mac Studio No Display in Dubai? 6 Fixes for Black Screen 2026", excerpt: "A Mac Studio that powers on with no picture is usually a Thunderbolt or HDMI cable issue, a monitor input problem, or a display IC fault. Our Dubai workshop diagnoses every model free with repair from AED 400.", category: "Fix guide \u00b7 Mac Studio", author: "Memona", date: "June 2026", minutes: 7 },
  { slug: "/blog/mac-pro-not-turning-on-dubai", title: "Mac Pro Not Turning On in Dubai? 6 Fixes 2026", excerpt: "A Mac Pro that will not power on is usually a power supply fault, a tripped SMC, or a board-level issue. Our Dubai workshop diagnoses tower and rack models free with board repair from AED 700.", category: "Fix guide \u00b7 Mac Pro", author: "Memona", date: "June 2026", minutes: 7 },
  { slug: "/blog/mac-pro-gpu-repair-dubai", title: "Mac Pro GPU Repair and Upgrade Dubai 2026: MPX Module Cost", excerpt: "Graphics crashes, artifacts, or a dead display on a 2019 Mac Pro usually trace to an MPX GPU module fault. Our Dubai workshop diagnoses and repairs or upgrades MPX modules with free diagnosis.", category: "Fix guide \u00b7 Mac Pro", author: "Memona", date: "June 2026", minutes: 7 },
  { slug: "/blog/mac-pro-no-display-dubai", title: "Mac Pro No Display in Dubai? 6 Fixes for Black Screen 2026", excerpt: "A Mac Pro that powers on with no picture usually traces to the GPU module, a cable or port, or a display handshake issue. Our Dubai workshop diagnoses every model free with repair from AED 250.", category: "Fix guide \u00b7 Mac Pro", author: "Memona", date: "June 2026", minutes: 7 },
  { slug: "/blog/mac-pro-ssd-upgrade-dubai", title: "Mac Pro SSD Upgrade Dubai 2026: Storage Expansion Cost", excerpt: "The 2019 Mac Pro takes paired Apple SSD modules and PCIe storage cards. Our Dubai workshop fits and configures storage upgrades with free diagnosis and same-day turnaround on most jobs.", category: "Cost guide \u00b7 Mac Pro", author: "Memona", date: "June 2026", minutes: 7 },
  // Fix guide · MacBook Air posts (June 2026)
  { slug: "/blog/macbook-air-m5-common-problems-dubai", title: "MacBook Air M5 Common Problems Dubai 2026: Fix Guide", excerpt: "MacBook Air M5 in Dubai: battery below 30h rated life, thermal throttle, WiFi Tahoe driver drops, USB-C charging confusion. All faults with fixes. Repair from AED 350.", category: "Fix guide · MacBook Air", author: "Memona", date: "June 2026", minutes: 9 },
  { slug: "/blog/macbook-air-m4-common-problems-dubai", title: "MacBook Air M4 Common Problems Dubai 2025: Fix Guide", excerpt: "MacBook Air M4 in Dubai: battery drain, thermal throttle, keyboard double-typing, WiFi drops, and charging faults explained with fixes. Hardware repairs from AED 350.", category: "Fix guide · MacBook Air", author: "Memona", date: "June 2026", minutes: 9 },
  { slug: "/blog/macbook-air-m3-screen-flickering-dubai", title: "MacBook Air M3 Screen Flickering Dubai? Causes & Fix 2026", excerpt: "MacBook Air M3 screen flickering in Dubai? True Tone conflicts, display cable, software bugs, backlight issues. Free diagnosis. Repair from AED 700 same-day.", category: "Fix guide · MacBook Air", author: "Memona", date: "June 2026", minutes: 8 },
  { slug: "/blog/macbook-air-m2-screen-lines-dubai", title: "MacBook Air M2 Screen Lines Dubai? Horizontal & Vertical Fix 2026", excerpt: "Horizontal or vertical lines on MacBook Air M2 screen in Dubai? Display cable, panel fault, or GPU. Free diagnosis. Repair from AED 600 (13-inch) same-day.", category: "Fix guide · MacBook Air", author: "Memona", date: "June 2026", minutes: 9 },
  { slug: "/blog/macbook-air-m3-common-problems-dubai", title: "MacBook Air M3 Common Problems Dubai 2024: Fix Guide", excerpt: "MacBook Air M3 in Dubai: second display not working, battery drain, backlight glow, MagSafe 3 dust. All faults with fixes. Repair from AED 350.", category: "Fix guide · MacBook Air", author: "Memona", date: "June 2026", minutes: 9 },
  { slug: "/blog/macbook-air-m2-common-problems-dubai", title: "MacBook Air M2 Common Problems Dubai: 13-inch & 15-inch Fix Guide 2026", excerpt: "MacBook Air M2 in Dubai: 256GB SSD degradation, battery swelling, hinge crack, MagSafe dust. All faults with AED prices. Repair from AED 350.", category: "Fix guide · MacBook Air", author: "Memona", date: "June 2026", minutes: 10 },
  { slug: "/blog/macbook-air-m1-common-problems-dubai", title: "MacBook Air M1 Common Problems Dubai: A2337 Fix Guide 2026", excerpt: "MacBook Air M1 at 5 years: battery below 80%, USB-C port wear, GPU crash lines on display, Sequoia sleep-wake issues. All fixes and AED prices.", category: "Fix guide · MacBook Air", author: "Memona", date: "June 2026", minutes: 9 },
  { slug: "/blog/macbook-air-intel-common-problems-dubai", title: "MacBook Air Intel Common Problems Dubai: 2017 to 2020 Fix Guide 2026", excerpt: "MacBook Air Intel 2017-2020: butterfly keyboard failure, battery at 60-70% after 5 years, backlight dimming, USB-C wear. Repair from AED 200.", category: "Fix guide · MacBook Air", author: "Memona", date: "June 2026", minutes: 9 },
  { slug: "/blog/macbook-air-running-slow-fix-dubai", title: "MacBook Air Running Slow Fix Dubai 2026: M1 to M5 Speed Restore Guide", excerpt: "MacBook Air slow in Dubai? Thermal throttling, RAM pressure, full SSD, and startup item bloat explained. Free fixes and performance service from AED 300.", category: "Fix guide · MacBook Air", author: "Memona", date: "June 2026", minutes: 10 },
  { slug: "/blog/macbook-air-wont-turn-on-fix-dubai", title: "MacBook Air Won't Turn On Fix Dubai 2026: Dead, Black Screen, No Power Guide", excerpt: "MacBook Air not turning on? Dead vs black screen diagnosis, deep discharge, SMC reset, torch test, and board repair explained. Logic board repair from AED 350.", category: "Fix guide · MacBook Air", author: "Memona", date: "June 2026", minutes: 9 },
  { slug: "/blog/macbook-air-wifi-bluetooth-fix-dubai", title: "MacBook Air WiFi Bluetooth Fix Dubai 2026: Dropping, Slow, Won't Connect", excerpt: "MacBook Air WiFi dropping or Bluetooth failing? Dubai building congestion, NVRAM reset, pref file fix, and board-level wireless repair explained. Repair from AED 400.", category: "Fix guide · MacBook Air", author: "Memona", date: "June 2026", minutes: 9 },
  { slug: "/blog/macbook-air-keyboard-not-working-dubai", title: "MacBook Air Keyboard Not Working Dubai 2026: Butterfly vs Scissor Fix Guide", excerpt: "MacBook Air keyboard not working? Butterfly (Intel 2018-2019) vs scissor (Intel 2020, M-series) explained. Dubai desert dust damage, top-case repair from AED 300.", category: "Fix guide · MacBook Air", author: "Memona", date: "June 2026", minutes: 9 },
  // Fix guide · M5 chip-specific posts (June 2026)
  { slug: "/blog/macbook-pro-m5-oled-display-issues-dubai", title: "MacBook Pro M5 OLED Display Problems Dubai 2026: Lines, Flicker, Burn-In Fix", excerpt: "MacBook Pro M5 OLED flickering, lines, colour shift, or burn-in in Dubai? What is normal OLED behaviour and what needs repair. Screen replacement from AED 700.", category: "Fix guide · MacBook Pro", author: "Memona", date: "June 2026", minutes: 9 },
  { slug: "/blog/macbook-pro-m5-not-turning-on-dubai", title: "MacBook Pro M5 Not Turning On Dubai 2026: Dead or Black Screen Fix Guide", excerpt: "MacBook Pro M5 not turning on in Dubai? Force restart sequence, deep discharge recovery, black screen vs dead diagnosis, and Recovery Mode guide. Repair from AED 350.", category: "Fix guide · MacBook Pro", author: "Memona", date: "June 2026", minutes: 9 },
  { slug: "/blog/macbook-pro-m5-battery-replacement-cost-dubai", title: "MacBook Pro M5 Battery Replacement Cost Dubai 2026: AED Prices and Guide", excerpt: "MacBook Pro M5 battery replacement costs AED 650 (14-inch) to AED 700 (16-inch) in Dubai. When to replace, signs of failure, and what to expect after replacement.", category: "Fix guide · MacBook Pro", author: "Memona", date: "June 2026", minutes: 9 },
  { slug: "/blog/macbook-pro-m5-screen-repair-cost-dubai", title: "MacBook Pro M5 Screen Repair Cost Dubai 2026: OLED Replacement Prices", excerpt: "MacBook Pro M5 OLED screen repair in Dubai from AED 700. Cracked display, vertical lines, backlight issues, and burn-in explained. Same-day repair available.", category: "Fix guide · MacBook Pro", author: "Memona", date: "June 2026", minutes: 9 },
  { slug: "/blog/macbook-pro-m5-fan-noise-dubai", title: "MacBook Pro M5 Fan Noise Dubai 2026: Crackling, Clicking, Grinding Fix", excerpt: "MacBook Pro M5 fan crackling, clicking, or grinding in Dubai? Debris, bearing fault, or Tahoe firmware bug explained. Fan cleaning AED 150, replacement from AED 200.", category: "Fix guide · MacBook Pro", author: "Memona", date: "June 2026", minutes: 8 },
  { slug: "/blog/macbook-pro-m5-wont-charge-past-80-dubai", title: "MacBook Pro M5 Won't Charge Past 80%? Dubai 2026: Optimised Charging Explained", excerpt: "MacBook Pro M5 stuck at 80% charge in Dubai? Optimised Battery Charging explained, how to override it, and how to tell when 80% is a genuine fault. Battery from AED 650.", category: "Fix guide · MacBook Pro", author: "Memona", date: "June 2026", minutes: 8 },
  { slug: "/blog/macbook-pro-m5-throttling-fix-dubai", title: "MacBook Pro M5 Throttling Fix Dubai 2026: Why It Slows Down and How to Stop It", excerpt: "MacBook Pro M5 slowing to 600 MHz under load in Dubai? Blocked vents, fan firmware bug, and wrong Power Mode explained. Fan replacement from AED 200.", category: "Fix guide · MacBook Pro", author: "Memona", date: "June 2026", minutes: 9 },
  { slug: "/blog/macbook-pro-m5-battery-draining-overnight-dubai", title: "MacBook Pro M5 Battery Draining Overnight? DarkWake Fix Dubai 2026", excerpt: "MacBook Pro M5 battery draining overnight in Dubai? DarkWake, Power Nap, and background tasks drain 20-40% while sleeping. Step-by-step fix guide. Battery replacement from AED 650.", category: "Fix guide · MacBook Pro", author: "Memona", date: "June 2026", minutes: 10 },
  { slug: "/blog/macbook-pro-m5-external-monitor-not-working-dubai", title: "MacBook Pro M5 External Monitor Not Working Dubai? Fix Guide 2026", excerpt: "MacBook Pro M5 external monitor not working? Third display limit explained, Thunderbolt 5 dock firmware fix, fullscreen black screen bug. Free diagnosis in Dubai.", category: "Fix guide · MacBook Pro", author: "Memona", date: "June 2026", minutes: 10 },
  { slug: "/blog/macbook-pro-m5-wifi-slow-fix-dubai", title: "MacBook Pro M5 Wi-Fi Slow Fix Dubai 2026: MCS NSS 0 Kernel Error", excerpt: "MacBook Pro M5 Wi-Fi slow in Dubai? MCS/NSS 0 kernel error drops speeds to under 20 Mbps. Step-by-step fix for 6GHz drops, sleep reconnect issues, and UAE router settings.", category: "Fix guide · MacBook Pro", author: "Memona", date: "June 2026", minutes: 9 },
  // Fix guide · M4 chip-specific posts (June 2026)
  { slug: "/blog/macbook-pro-m4-external-monitor-not-detected-dubai", title: "MacBook Pro M4 External Monitor Not Detected Dubai 2026: Thunderbolt 5 Fix", excerpt: "MacBook Pro M4 external monitor not detected in Dubai? Thunderbolt 5 dock firmware issues, display limit (M4 Pro=2, M4 Max=4), and Detect Displays fix. Free diagnosis.", category: "Fix guide · MacBook Pro", author: "Memona", date: "June 2026", minutes: 9 },
  { slug: "/blog/macbook-pro-m4-gets-hot-lid-closed-dubai", title: "MacBook Pro M4 Gets Hot with Lid Closed Dubai 2026: Clamshell Fix Guide", excerpt: "MacBook Pro M4 overheating with lid closed in Dubai? Clamshell airflow restriction, Sequoia 15.0 fan delay bug fixed in 15.2, and Dubai heat headroom explained.", category: "Fix guide · MacBook Pro", author: "Memona", date: "June 2026", minutes: 8 },
  { slug: "/blog/macbook-pro-m4-keyboard-not-working-dubai", title: "MacBook Pro M4 Keyboard Not Working Dubai 2026: Keys Stuck, Double-Typing Fix", excerpt: "MacBook Pro M4 keyboard not working in Dubai? Single keys stuck, double-typing, or entire keyboard unresponsive. Scissor mechanism fix, force restart, and repair from AED 300.", category: "Fix guide · MacBook Pro", author: "Memona", date: "June 2026", minutes: 8 },
  { slug: "/blog/macbook-pro-m4-screen-repair-cost-dubai", title: "MacBook Pro M4 Screen Repair Cost Dubai 2026: OLED Replacement Prices", excerpt: "MacBook Pro M4 OLED screen repair in Dubai from AED 700. First OLED on MacBook Pro: cracked display, lines, flickering. Same-day repair with 12-month warranty.", category: "Fix guide · MacBook Pro", author: "Memona", date: "June 2026", minutes: 9 },
  { slug: "/blog/macbook-pro-m4-battery-draining-fast-dubai", title: "MacBook Pro M4 Battery Draining Fast Dubai 2026: Fix Guide", excerpt: "MacBook Pro M4 battery draining fast in Dubai? OLED at full brightness, background processes, and Sequoia bugs. Activity Monitor fix and battery replacement from AED 600.", category: "Fix guide · MacBook Pro", author: "Memona", date: "June 2026", minutes: 9 },
  { slug: "/blog/macbook-pro-m4-wifi-dropping-dubai", title: "MacBook Pro M4 Wi-Fi Dropping Dubai 2026: Fix for Disconnects After Sleep", excerpt: "MacBook Pro M4 Wi-Fi dropping in Dubai? 6GHz auth failures fixed in Sequoia 15.2, sleep reconnect fix, and UAE router settings (WPA3, separate SSIDs). Repair from AED 200.", category: "Fix guide · MacBook Pro", author: "Memona", date: "June 2026", minutes: 8 },
  { slug: "/blog/macbook-pro-m4-memory-pressure-16gb-dubai", title: "MacBook Pro M4 16GB Not Enough Memory Dubai 2026: Memory Pressure Fix", excerpt: "MacBook Pro M4 16GB showing memory pressure in Dubai? How unified memory works, Activity Monitor diagnosis, swap vs SSD health, and whether you need to upgrade.", category: "Fix guide · MacBook Pro", author: "Memona", date: "June 2026", minutes: 8 },
  { slug: "/blog/macbook-pro-m4-battery-replacement-cost-dubai", title: "MacBook Pro M4 Battery Replacement Cost Dubai 2026: AED Prices and Guide", excerpt: "MacBook Pro M4 battery replacement costs AED 600 (14-inch) to AED 650 (16-inch) in Dubai. When to replace, swollen battery signs, and what to expect after replacement.", category: "Fix guide · MacBook Pro", author: "Memona", date: "June 2026", minutes: 8 },
  { slug: "/blog/macbook-pro-m4-not-turning-on-dubai", title: "MacBook Pro M4 Not Turning On Dubai 2026: Dead or Black Screen Fix Guide", excerpt: "MacBook Pro M4 not turning on in Dubai? Force restart sequence, deep discharge fix, black screen vs dead diagnosis, and DFU restore guide. Repair from AED 350.", category: "Fix guide · MacBook Pro", author: "Memona", date: "June 2026", minutes: 9 },
  // Fix guide · M1 chip-specific posts (June 2026)
  { slug: "/blog/macbook-pro-m1-touch-bar-failing-dubai", title: "MacBook Pro M1 Touch Bar Failing Dubai 2026: Dead, Frozen, or Blank Fix", excerpt: "MacBook Pro M1 Touch Bar dead or frozen in Dubai? T1 chip restart command, NVRAM reset, flex cable fault at 4-5 years, and Touch Bar replacement from AED 500.", category: "Fix guide · MacBook Pro", author: "Memona", date: "June 2026", minutes: 8 },
  { slug: "/blog/macbook-pro-m1-battery-swelling-dubai", title: "MacBook Pro M1 Battery Swelling Dubai 2026: Urgent Replacement Guide", excerpt: "MacBook Pro M1 battery swelling in Dubai? Raised trackpad, bowed case. Stop using now. Dubai heat accelerates M1 swelling at 4-5 years. Same-day urgent replacement from AED 550.", category: "Fix guide · MacBook Pro", author: "Memona", date: "June 2026", minutes: 8 },
  { slug: "/blog/macbook-pro-m1-kernel-panic-dubai", title: "MacBook Pro M1 Kernel Panic Dubai 2026: Crash When Closing Lid Fix", excerpt: "MacBook Pro M1 crashing when lid closes in Dubai? Monterey sleep regression fixed in 12.3, kext conflicts, and aging hardware ECC faults. Read crash report and fix. Repair from AED 200.", category: "Fix guide · MacBook Pro", author: "Memona", date: "June 2026", minutes: 8 },
  { slug: "/blog/macbook-pro-m1-screen-flickering-dubai", title: "MacBook Pro M1 Screen Flickering Dubai 2026: Display and Trackpad Fix", excerpt: "MacBook Pro M1 screen flickering in Dubai? Big Sur/Monterey rendering bugs, display cable at 5 years, True Tone conflicts. Screenshot and lid-angle tests. Screen repair from AED 450.", category: "Fix guide · MacBook Pro", author: "Memona", date: "June 2026", minutes: 8 },
  { slug: "/blog/macbook-pro-m1-battery-replacement-cost-dubai", title: "MacBook Pro M1 Battery Replacement Cost Dubai 2026: AED Prices Guide", excerpt: "MacBook Pro M1 battery replacement from AED 550 in Dubai. 5-6 year old M1s at peak replacement wave in UAE. Cycle check, swelling guide, and when to upgrade vs replace.", category: "Fix guide · MacBook Pro", author: "Memona", date: "June 2026", minutes: 8 },
  { slug: "/blog/macbook-pro-m1-screen-repair-cost-dubai", title: "MacBook Pro M1 Screen Repair Cost Dubai 2026: LCD and mini-LED Prices", excerpt: "MacBook Pro M1 screen repair from AED 450 in Dubai. M1 13-inch IPS LCD, M1 Pro 14-inch mini-LED. Display cable fault now appearing at 5 years. Same-day service.", category: "Fix guide · MacBook Pro", author: "Memona", date: "June 2026", minutes: 8 },
  { slug: "/blog/macbook-pro-m1-not-turning-on-dubai", title: "MacBook Pro M1 Not Turning On Dubai 2026: Dead or Black Screen Fix", excerpt: "MacBook Pro M1 not turning on in Dubai? No MagSafe on M1 13-inch: USB-C left ports only. Deep discharge, DFU Revive, and battery cell failure diagnosis. Repair from AED 350.", category: "Fix guide · MacBook Pro", author: "Memona", date: "June 2026", minutes: 8 },
  // Fix guide · Intel chip-specific posts (June 2026)
  { slug: "/blog/macbook-pro-butterfly-keyboard-failing-dubai", title: "MacBook Pro Butterfly Keyboard Failing Dubai 2026: Dust Fix and Repair Cost", excerpt: "MacBook Pro butterfly keyboard failing in Dubai? 2016-2019 butterfly mechanism jams from Dubai dust. Key stuck, repeating, or not responding. Top case repair from AED 300.", category: "Fix guide · MacBook Pro", author: "Memona", date: "June 2026", minutes: 8 },
  { slug: "/blog/macbook-pro-intel-gpu-failure-dubai", title: "MacBook Pro Intel AMD GPU Failure Dubai 2026: 2017-2019 15-inch Fix", excerpt: "MacBook Pro 15-inch 2017-2019 AMD Radeon Pro dGPU solder failure in Dubai. GPU switching workaround, BGA reball diagnosis, and repair from AED 800.", category: "Fix guide · MacBook Pro", author: "Memona", date: "June 2026", minutes: 9 },
  { slug: "/blog/macbook-pro-intel-flexgate-dubai", title: "MacBook Pro Flexgate Display Cable Dubai 2026: Backlight Stage Effect Fix", excerpt: "MacBook Pro Flexgate on 2016-2017 Intel models in Dubai. Stage-light backlight effect at 40 degrees lid angle. Display cable replacement from AED 250: cheaper than full panel.", category: "Fix guide · MacBook Pro", author: "Memona", date: "June 2026", minutes: 8 },
  { slug: "/blog/macbook-pro-intel-battery-replacement-cost-dubai", title: "MacBook Pro Intel Battery Replacement Cost Dubai 2026: AED Price Guide", excerpt: "MacBook Pro Intel battery replacement in Dubai: 2016-2020 models now 6-10 years old. From AED 400 with 3-month warranty. Swollen battery same-day urgent service.", category: "Fix guide · MacBook Pro", author: "Memona", date: "June 2026", minutes: 8 },
  { slug: "/blog/macbook-pro-intel-screen-repair-cost-dubai", title: "MacBook Pro Intel Screen Repair Cost Dubai 2026: All Models Price Guide", excerpt: "MacBook Pro Intel screen repair in Dubai: Flexgate cable AED 250, 13-inch LCD AED 400, 15-inch LCD AED 500, 16-inch AED 550. Free diagnosis. 12-month warranty.", category: "Fix guide · MacBook Pro", author: "Memona", date: "June 2026", minutes: 8 },
  { slug: "/blog/macbook-pro-intel-not-turning-on-dubai", title: "MacBook Pro Intel Not Turning On Dubai 2026: Dead or Random Shutdown Fix", excerpt: "MacBook Pro Intel dead in Dubai? SMC reset, NVRAM, T2 DFU restore, and deep battery discharge guide. Random shutdown = thermal paste or battery fault. Repair from AED 400.", category: "Fix guide · MacBook Pro", author: "Memona", date: "June 2026", minutes: 9 },
  // Fix guide · M2 chip-specific posts (June 2026)
  { slug: "/blog/macbook-pro-m2-ssd-degrading-fast-dubai", title: "MacBook Pro M2 SSD Degrading Fast Dubai 2026: Write Amplification Fix", excerpt: "MacBook Pro M2 SSD degrading in Dubai? M2 13-inch Ventura swap bug caused 100x excess writes. Check TBW with smartmontools, understand SSD health, and plan replacement from AED 500.", category: "Fix guide · MacBook Pro", author: "Memona", date: "June 2026", minutes: 9 },
  { slug: "/blog/macbook-pro-m2-logic-board-failure-dubai", title: "MacBook Pro M2 Logic Board Failure Dubai 2026: Sudden Death Fix Guide", excerpt: "MacBook Pro M2 suddenly dead in Dubai? Charging IC or PMIC failure at 2-4 years old. DFU restore, data recovery, and component-level board repair from AED 700.", category: "Fix guide · MacBook Pro", author: "Memona", date: "June 2026", minutes: 9 },
  { slug: "/blog/macbook-pro-m2-screen-lines-dubai", title: "MacBook Pro M2 Screen Lines or Black Screen Dubai 2026: Fix Guide", excerpt: "MacBook Pro M2 screen lines in Dubai? M2 13-inch display cable fault, GPU rendering bug diagnosis, or panel fault. Screenshot test and lid-angle test explained. Repair from AED 450.", category: "Fix guide · MacBook Pro", author: "Memona", date: "June 2026", minutes: 8 },
  { slug: "/blog/macbook-pro-m2-battery-draining-fast-dubai", title: "MacBook Pro M2 Battery Draining Fast Dubai 2026: Ventura Fix Guide", excerpt: "MacBook Pro M2 battery draining fast in Dubai? Ventura swap bug, kernel_task CPU inflation, and Dubai heat all reduce M2 battery life. Activity Monitor fix, battery from AED 500.", category: "Fix guide · MacBook Pro", author: "Memona", date: "June 2026", minutes: 8 },
  { slug: "/blog/macbook-pro-m2-wifi-dropping-dubai", title: "MacBook Pro M2 Wi-Fi Dropping Dubai 2026: Ventura Fix Guide", excerpt: "MacBook Pro M2 Wi-Fi dropping in Dubai? Ventura 13.0-13.2 Wi-Fi regression, 5GHz congestion, no 6GHz on M2. Update to Ventura 13.3+ and change UAE router channels.", category: "Fix guide · MacBook Pro", author: "Memona", date: "June 2026", minutes: 8 },
  { slug: "/blog/macbook-pro-m2-screen-repair-cost-dubai", title: "MacBook Pro M2 Screen Repair Cost Dubai 2026: LCD and mini-LED Prices", excerpt: "MacBook Pro M2 screen repair in Dubai from AED 450. M2 13-inch uses IPS LCD, M2 Pro/Max uses mini-LED. Same-day service, 12-month warranty, free diagnosis.", category: "Fix guide · MacBook Pro", author: "Memona", date: "June 2026", minutes: 8 },
  { slug: "/blog/macbook-pro-m2-battery-replacement-cost-dubai", title: "MacBook Pro M2 Battery Replacement Cost Dubai 2026: AED Prices Guide", excerpt: "MacBook Pro M2 battery replacement from AED 500 in Dubai. M2 13-inch (AED 500), M2 Pro 14-inch (AED 600), M2 Max 16-inch (AED 650). 3-month warranty, same-day service.", category: "Fix guide · MacBook Pro", author: "Memona", date: "June 2026", minutes: 8 },
  { slug: "/blog/macbook-pro-m2-not-turning-on-dubai", title: "MacBook Pro M2 Not Turning On Dubai 2026: Dead or Black Screen Fix", excerpt: "MacBook Pro M2 not turning on in Dubai? Deep discharge recovery, DFU Revive, force restart, and board fault diagnosis. M2 13-inch USB-C vs M2 Pro MagSafe differences explained.", category: "Fix guide · MacBook Pro", author: "Memona", date: "June 2026", minutes: 8 },
  // Fix guide · M3 chip-specific posts (June 2026)
  { slug: "/blog/macbook-pro-m3-screen-going-dark-dubai", title: "MacBook Pro M3 Screen Goes Dark Randomly Dubai 2026: Fix Guide", excerpt: "MacBook Pro M3 screen going dark randomly in Dubai? Sonoma 14.0-14.2 display driver bug, auto-brightness, or thermal dimming. Fixed in Sonoma 14.3. Screen repair from AED 500.", category: "Fix guide · MacBook Pro", author: "Memona", date: "June 2026", minutes: 8 },
  { slug: "/blog/macbook-pro-m3-battery-draining-when-not-in-use-dubai", title: "MacBook Pro M3 Battery Draining When Not in Use Dubai 2026: Fix Guide", excerpt: "MacBook Pro M3 losing 15-30% overnight in Dubai? backgroundtaskmanagerd bug in Sonoma 14.0-14.1 prevented deep sleep. Fixed in Sonoma 14.2. Battery from AED 550.", category: "Fix guide · MacBook Pro", author: "Memona", date: "June 2026", minutes: 9 },
  { slug: "/blog/macbook-pro-m3-hdmi-wrong-resolution-dubai", title: "MacBook Pro M3 HDMI Wrong Resolution Dubai 2026: External Display Fix", excerpt: "MacBook Pro M3 HDMI showing wrong resolution in Dubai? HDMI 2.1 vs 2.0 cable difference, Sonoma 14.0 negotiation bug fixed in 14.1, and overscan fix for UAE TVs.", category: "Fix guide · MacBook Pro", author: "Memona", date: "June 2026", minutes: 8 },
  { slug: "/blog/macbook-pro-m3-sd-card-not-showing-dubai", title: "MacBook Pro M3 SD Card Not Showing Dubai 2026: SD Reader Fix Guide", excerpt: "MacBook Pro M3 SD card not detected in Dubai? Sonoma 14.0-14.3 SD driver bug fixed in 14.4. Format incompatibility and card seating fix. Reader repair from AED 250.", category: "Fix guide · MacBook Pro", author: "Memona", date: "June 2026", minutes: 8 },
  { slug: "/blog/macbook-pro-m3-wifi-dropping-dubai", title: "MacBook Pro M3 Wi-Fi Dropping Dubai 2026: 6GHz Fix Guide", excerpt: "MacBook Pro M3 Wi-Fi dropping in Dubai? First MacBook Pro with Wi-Fi 6E had 6GHz authentication failure in Sonoma 14.0-14.1, fixed in 14.2. UAE router settings included.", category: "Fix guide · MacBook Pro", author: "Memona", date: "June 2026", minutes: 8 },
  { slug: "/blog/macbook-pro-m3-screen-repair-cost-dubai", title: "MacBook Pro M3 Screen Repair Cost Dubai 2026: mini-LED Replacement Prices", excerpt: "MacBook Pro M3 screen repair in Dubai from AED 500. Last MacBook Pro with mini-LED LCD: backlight-only repair option saves money vs M4 OLED. Same-day service.", category: "Fix guide · MacBook Pro", author: "Memona", date: "June 2026", minutes: 8 },
  { slug: "/blog/macbook-pro-m3-battery-replacement-cost-dubai", title: "MacBook Pro M3 Battery Replacement Cost Dubai 2026: AED Prices and Guide", excerpt: "MacBook Pro M3 battery replacement costs AED 550 (14-inch) to AED 600 (16-inch) in Dubai. M3 machines hitting first replacement wave at 1.5-2 years old in UAE.", category: "Fix guide · MacBook Pro", author: "Memona", date: "June 2026", minutes: 8 },
  { slug: "/blog/macbook-pro-m3-not-turning-on-dubai", title: "MacBook Pro M3 Not Turning On Dubai 2026: Dead or Black Screen Fix Guide", excerpt: "MacBook Pro M3 not turning on in Dubai? Force restart, deep discharge fix, Sonoma update DFU Revive, and black screen vs dead diagnosis. Repair from AED 350.", category: "Fix guide · MacBook Pro", author: "Memona", date: "June 2026", minutes: 8 },
  // Fix guide · chip-specific MacBook Pro problems (June 2026)
  { slug: "/blog/macbook-pro-m5-common-problems-dubai", title: "MacBook Pro M5 Common Problems? Fix Guide Dubai 2026", excerpt: "MacBook Pro M5 common problems in Dubai? OLED display issues, Thunderbolt 5 faults, thermal throttling, and memory pressure. Step-by-step fixes. Screen repair from AED 700.", category: "Fix guide · MacBook Pro", author: "Memona", date: "June 2026", minutes: 10 },
  { slug: "/blog/macbook-pro-m4-common-problems-dubai", title: "MacBook Pro M4 Common Problems? Fix Guide Dubai 2026", excerpt: "MacBook Pro M4 common problems in Dubai? First OLED display issues, Thunderbolt 5 dock faults, 16GB memory pressure. Step-by-step fixes. Screen repair from AED 700.", category: "Fix guide · MacBook Pro", author: "Memona", date: "June 2026", minutes: 10 },
  { slug: "/blog/macbook-pro-m3-common-problems-dubai", title: "MacBook Pro M3 Common Problems? Fix Guide Dubai 2026", excerpt: "MacBook Pro M3 common problems in Dubai? Wi-Fi 6E drops, display flickering at low brightness, MagSafe port debris, thermal throttling. Step-by-step fixes.", category: "Fix guide · MacBook Pro", author: "Memona", date: "June 2026", minutes: 10 },
  { slug: "/blog/macbook-pro-m2-common-problems-dubai", title: "MacBook Pro M2 Common Problems? Fix Guide Dubai 2026", excerpt: "MacBook Pro M2 common problems in Dubai? 13-inch SSD write amplification, charging IC faults at 2-4 years old, HDMI negotiation glitches. Step-by-step fixes.", category: "Fix guide · MacBook Pro", author: "Memona", date: "June 2026", minutes: 10 },
  { slug: "/blog/macbook-pro-m1-common-problems-dubai", title: "MacBook Pro M1 Common Problems? Fix Guide Dubai 2026", excerpt: "MacBook Pro M1 common problems in Dubai? Touch Bar failure, battery swelling at 4-5 years, charging IC faults. Step-by-step fixes. Battery from AED 600.", category: "Fix guide · MacBook Pro", author: "Memona", date: "June 2026", minutes: 10 },
  { slug: "/blog/macbook-pro-intel-common-problems-dubai", title: "MacBook Pro Intel Common Problems? Fix Guide Dubai 2026", excerpt: "MacBook Pro Intel common problems: butterfly keyboard dropout, AMD GPU solder failure on 15-inch 2017-2019, Flexgate display cable, T2 chip faults. Repair from AED 150.", category: "Fix guide · MacBook Pro", author: "Memona", date: "June 2026", minutes: 11 },
  // Fix guide · MacBook Pro M4/M5 problems (June 2026)
  { slug: "/blog/macbook-pro-m4-m5-common-problems-dubai", title: "MacBook Pro M4 M5 Common Problems? Fix Guide Dubai 2026", excerpt: "MacBook Pro M4 and M5 common problems in Dubai? We cover display flickering, Wi-Fi drops, memory pressure, thermal throttling, USB-C faults, with step-by-step fixes and repair costs.", category: "Fix guide · MacBook Pro", author: "Memona", date: "June 2026", minutes: 10 },
  // Fix guide · MacBook Pro charging (June 2026)
  { slug: "/blog/macbook-pro-not-charging-fix-dubai", title: "MacBook Pro Not Charging? Fix Guide Dubai 2026", excerpt: "MacBook Pro not charging in Dubai? We cover every cause from faulty cables to charging IC failure, with step-by-step fixes for MagSafe and USB-C models. Repair from AED 350.", category: "Fix guide · MacBook Pro", author: "Memona", date: "June 2026", minutes: 10 },
  // Cost guide · MacBook Pro screen (June 2026)
  { slug: "/blog/macbook-pro-screen-replacement-cost-dubai", title: "MacBook Pro Screen Replacement Cost Dubai: 2026 Price Guide", excerpt: "MacBook Pro screen replacement cost in Dubai ranges from AED 750 to AED 1,400 depending on model. Full price breakdown by model, what affects the bill, and same-day service details.", category: "Cost guide · MacBook Pro", author: "Memona", date: "June 2026", minutes: 9 },
  // Data study · original first-party pricing data (AEO/GEO citation asset)
  { slug: "/blog/apple-repair-cost-dubai", title: "Apple Repair Cost in Dubai 2026: 991 Real Repairs", excerpt: "A first-party data study from our own workshop ledger: real prices customers paid across 500 Apple repairs (2023–2026). MacBook screen AED 1,050–1,400, battery AED 400–675, plus the faults that break most (screen 44%, battery 15%, logic-board 13%) and the most-repaired models.", category: "Data study · Apple repair", author: "Shafiq", date: "June 2026", minutes: 9 },
  // Problem solving · MacBook (June 2026 - high-intent troubleshooting)
  { slug: "/blog/macbook-pro-battery-draining-fast", title: "MacBook Pro Battery Draining Fast? Causes & Fixes. Dubai 2026", excerpt: "MacBook Pro losing charge in 2–3 hours instead of 10+? Five causes, rogue processes, screen brightness, degraded cell, macOS bugs, Dubai heat, with step-by-step fixes and when to replace the battery.", category: "Fix guide · MacBook Pro", author: "Usman", date: "June 2026", minutes: 10 },
  { slug: "/blog/macbook-pro-overheating-fix-dubai", title: "MacBook Pro Overheating Fix Dubai: M1 to M5 Guide 2026", excerpt: "MacBook Pro running hot in Dubai? We cover every cause from background processes to clogged vents and Dubai heat damage, with step-by-step fixes and when you need a thermal paste replacement.", category: "Fix guide · MacBook Pro", author: "Memona", date: "June 2026", minutes: 10 },
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
    excerpt: "iPad battery replacement Dubai 2026: AED 300 (older models) to AED 550 (iPad Pro M5). When to replace, 80% rule, same-day service, warranty of up to 12 months.",
    category: "Cost guide · iPad",
    author: "Shafiq",
    date: "June 2026",
    minutes: 9,
  },
  {
    slug: "/blog/ipad-water-damage-repair-dubai-guide",
    title: "iPad Water Damage Repair Dubai - Costs & What To Do First",
    excerpt: "iPad water damage repair Dubai: AED 450–1,400 depending on board damage. First 30 minutes matter most. 80% recovery rate. Free pickup, warranty of up to 12 months.",
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
  { slug: "/blog/macbook-air-battery-drain-dubai", title: "MacBook Air Battery Draining Fast? 7 Causes and Fixes Dubai 2026", excerpt: "Dubai heat accelerates MacBook Air battery degradation faster than Apple estimates. Battery replacement starts from AED 350 and covers M1, M2, M3, M4 and Intel models.", category: "Fix guide · MacBook Air", author: "Memona", date: "June 2026", minutes: 7 },
  { slug: "/blog/macbook-air-not-charging-dubai", title: "MacBook Air Not Charging? 6 Fixes and Costs Dubai 2026", excerpt: "A MacBook Air that refuses to charge is usually a dirty USB-C port, a failed charging IC, or a dead adapter. Our Dubai workshop fixes most charging faults same day from AED 300.", category: "Fix guide · MacBook Air", author: "Memona", date: "June 2026", minutes: 7 },
  { slug: "/blog/macbook-air-screen-repair-cost-dubai", title: "MacBook Air Screen Repair Cost Dubai 2026: Prices by Model", excerpt: "MacBook Air screen replacement in Dubai costs from AED 500 for M1 models to AED 750 for M3. Most repairs are completed same day at our Concord Tower workshop.", category: "Cost guide · MacBook Air", author: "Memona", date: "June 2026", minutes: 7 },
  { slug: "/blog/macbook-air-overheating-dubai", title: "MacBook Air Overheating in Dubai? Causes and Fixes 2026", excerpt: "MacBook Air runs passively cooled with no fan on M-series, so Dubai summer heat above 35°C causes thermal throttling. Thermal repair on Intel models starts from AED 200.", category: "Fix guide · MacBook Air", author: "Memona", date: "June 2026", minutes: 7 },
  { slug: "/blog/iphone-cracked-screen-repair-dubai", title: "iPhone Cracked Screen Repair Dubai 2026: Costs by Model", excerpt: "iPhone cracked screen repair in Dubai starts from AED 149 for older LCD models and rises to AED 599 for iPhone 15 Pro Ma...", category: "Cost guide · iPhone", author: "Memona", date: "June 2026", minutes: 7 },
  { slug: "/blog/iphone-battery-replacement-cost-dubai", title: "iPhone Battery Replacement Cost Dubai 2026: AED Prices by Model", excerpt: "iPhone battery replacement in Dubai costs AED 99 to AED 399 depending on the model, and our workshop replaces cells from...", category: "Cost guide · iPhone", author: "Memona", date: "June 2026", minutes: 7 },
  { slug: "/blog/iphone-water-damage-repair-dubai", title: "iPhone Water Damage Repair Dubai 2026: What to Do First", excerpt: "iPhone water damage repair in Dubai starts from AED 249 and the first 10 minutes after exposure are critical: power off,...", category: "Fix guide · iPhone", author: "Memona", date: "June 2026", minutes: 7 },
  { slug: "/blog/iphone-not-turning-on-dubai", title: "iPhone Not Turning On? 7 Fixes to Try in Dubai 2026", excerpt: "An iPhone that will not turn on is usually a dead battery, a frozen iOS crash, or a logic board fault, and our Dubai wor...", category: "Fix guide · iPhone", author: "Memona", date: "June 2026", minutes: 7 },
  { slug: "/blog/ipad-screen-repair-cost-dubai", title: "iPad Screen Repair Cost Dubai 2026: Prices by Model", excerpt: "iPad screen repair in Dubai costs from AED 250 for standard iPad models to AED 1,200 for iPad Pro M4 OLED, with most rep...", category: "Cost guide · iPad", author: "Memona", date: "June 2026", minutes: 7 },
  { slug: "/blog/ipad-battery-drain-dubai", title: "iPad Battery Draining Fast? 6 Fixes and Costs Dubai 2026", excerpt: "iPad battery drain in Dubai is accelerated by 35°C+ summer heat pushing lithium cells past their 45°C limit, and battery...", category: "Fix guide · iPad", author: "Memona", date: "June 2026", minutes: 7 },
  { slug: "/blog/ipad-not-charging-dubai", title: "iPad Not Charging? 5 Fixes and Repair Costs Dubai 2026", excerpt: "An iPad that refuses to charge is usually a lint-clogged port, a damaged USB-C or Lightning cable, or a failed charging ...", category: "Fix guide · iPad", author: "Memona", date: "June 2026", minutes: 7 },
  { slug: "/blog/imac-running-slow-dubai", title: "iMac Running Slow in Dubai? 8 Fixes for M and Intel Models 2026", excerpt: "An iMac running slow in Dubai is usually a near-full startup SSD, a RAM shortage with heavy swap usage, or a macOS corru...", category: "Fix guide · iMac", author: "Memona", date: "June 2026", minutes: 7 },
  { slug: "/blog/imac-screen-repair-cost-dubai", title: "iMac Screen Repair Cost Dubai 2026: 21.5\" and 27\" Prices", excerpt: "iMac screen repair in Dubai costs from AED 800 for 21.5-inch models to AED 1,400 for the 27-inch 5K Retina, and most dis...", category: "Cost guide · iMac", author: "Memona", date: "June 2026", minutes: 7 },
  { slug: "/blog/mac-mini-not-turning-on-dubai", title: "Mac mini Not Turning On? 6 Fixes and Repair Costs Dubai 2026", excerpt: "A Mac mini that will not power on is usually a failed power supply, a tripped SMC, or a board-level fault, and our Dubai...", category: "Fix guide · Mac mini", author: "Memona", date: "June 2026", minutes: 7 },
];

// Admin markdown posts lead (newest first), then the hand-built posts. One registry → the blog
// index, category hubs, sitemap and RSS all include admin posts automatically.
export const POSTS: Post[] = [...ADMIN_POSTS, ...HAND_POSTS];

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

