"use client";
// Home page - full content parity with the live (ranking) WordPress home page
// macbook-repair-dubai.ae, rebuilt in the dark theme. All headings, service copy,
// price tables, AppleCare table, common issues, AMC, why-choose, process, FAQs and
// the service-area list are transcribed from the live page so rankings transfer.
// Shared light blocks aren't reused here (they're light + used on other pages);
// dark equivalents are inlined. Internal links point to real routes in App.tsx.
import { useState, type ReactNode } from "react";
import {
  Star, MapPin, ArrowRight, Check, Wrench, MessageCircle, Phone, Search,
  Cpu, Clock, Truck, BadgeCheck, ParkingCircle, ExternalLink, ChevronDown,
  Laptop, Headset, Wallet, Users,
} from "lucide-react";
import { Link } from "@/lib/router-compat";
import { PageShell } from "@/components/layout/PageShell";
import { RelatedArticles } from "@/components/blocks/RelatedArticles";
import { QuickAnswer } from "@/components/blocks/QuickAnswer";
import { ResponsiveImage } from "@/components/blocks/ResponsiveImage";
import { CountUp } from "@/components/blocks/CountUp";
import { Reveal } from "@/components/blocks/Reveal";
import { Button } from "@/components/ui/button";
import { NAP, REVIEW_COUNT, REVIEW_AVERAGE, CONTENT_REVIEWED } from "@/content/site";
import { REVIEWS } from "@/content/reviews";
import { useSeo } from "@/hooks/use-seo";
import { SITE } from "@/lib/seo";
import { itemList, service as serviceSchema, person, faqPage, localBusiness, breadcrumbs, aggregateRating, organization, webSite, pageWithSpeakable } from "@/lib/schema";
import { linkifyString as linkify } from "@/lib/linkify";

// TITLE kept identical to the old ranking WordPress home (title is a ranking factor — preserve it).
// DESC refreshed 2026: widened Intel→M5 (shop now repairs M5) + CTR rewrite. Meta descriptions are
// not a ranking factor, so this is upside-only. Keep in sync with deriveMeta("/") in page-meta.ts.
const TITLE = "MacBook Repair Dubai | Certified Apple Technicians in UAE";
const DESC =
  "Expert MacBook repair in Dubai since 2004. Screen, battery, keyboard & water-damage fixes for Intel to M5 Macs. Same-day service, 90-day warranty.";

// Visible freshness signal (AEO lever) — single source in site.ts (bump there each review).
const LAST_UPDATED = CONTENT_REVIEWED;

const HERO_FEATURES = ["Professional Services", "Customer Satisfaction", "Same Day Service", "Friendly Team"];

// Real documentary photos from our Concord Tower lab (Media City). Files live in
// /public/images/real/lab; AVIF/WebP variants via scripts/optimize-images.cjs.
const WORKSHOP_GALLERY: { src: string; alt: string; title: string }[] = [
  { src: "/images/real/lab/macbook-pro-internals-topdown-dubai.jpg", title: "MacBook Pro logic board & fans", alt: "MacBook Pro opened on the bench showing logic board, twin fans and battery during repair in Dubai" },
  { src: "/images/real/lab/macbook-full-internals-dubai.jpg", title: "Water-damage internal repair", alt: "MacBook bottom case removed showing the full internals during a water-damage repair in Dubai" },
  { src: "/images/real/lab/macbook-cooling-fan-macro-dubai.jpg", title: "MacBook fan cleaning", alt: "Close-up of a MacBook cooling fan during a fan-cleaning and overheating service" },
  { src: "/images/real/lab/macbook-battery-internals-dubai.jpg", title: "MacBook battery replacement", alt: "MacBook battery and logic board exposed during a battery replacement in Dubai" },
  { src: "/images/real/lab/imac-internals-teardown-dubai.jpg", title: "iMac screen & board repair", alt: "iMac opened up for screen and logic board repair in Dubai" },
  { src: "/images/real/lab/repair-workbench-dubai.jpg", title: "Our Media City workspace", alt: "Our Apple repair workspace at Concord Tower, Media City, Dubai" },
];

const STATS = [
  { value: "21+",   label: "Years of Experience" },
  { value: "90-Day", label: "Written Warranty" },
  { value: "Free",  label: "Pickup & Delivery" },
  { value: "1 Hour", label: "Fast Repair Time" },
  { value: "24/7",  label: "Support Services" },
  { value: "99%",   label: "Customer Satisfaction" },
];

const MODELS: { label: string; href: string }[] = [
  { label: "MacBook Air",  href: "/macbook-air-repair-dubai" },
  { label: "MacBook Pro",  href: "/macbook-pro-repair-dubai" },
  { label: "iMac",         href: "/imac-repair-dubai" },
  { label: "Mac Pro",      href: "/mac-pro-repair-dubai" },
  { label: "Mac Mini",     href: "/mac-mini-repair-dubai" },
  { label: "Mac Studio",   href: "/mac-studio-repair-dubai" },
];

// ── Internal-link hub data - every href verified against public/sitemap.xml ──
// Home is the site's strongest page; these grids pass equity to model, device,
// area, guide and sell pages it previously left orphaned. Anchors are varied and
// keyword-rich (exact-match "macbook repair dubai" is reserved for the H1).
const MODEL_DIRECTORY: { group: string; hub: string; items: { label: string; href: string }[] }[] = [
  { group: "MacBook Pro", hub: "/macbook-pro-repair-dubai", items: [
    { label: "MacBook Pro 14\" M5 (2025)", href: "/macbook-pro-14-m5-2025-repair-dubai" },
    { label: "MacBook Pro 14\" M4 (2024)", href: "/macbook-pro-14-m4-2024-repair-dubai" },
    { label: "MacBook Pro 16\" M4 (2024)", href: "/macbook-pro-16-m4-2024-repair-dubai" },
    { label: "MacBook Pro 14\" M3 (2023)", href: "/macbook-pro-14-m3-2023-repair-dubai" },
  ] },
  { group: "MacBook Air", hub: "/macbook-air-repair-dubai", items: [
    { label: "MacBook Air 15\" M4 (2025)", href: "/macbook-air-15-m4-2025-repair-dubai" },
    { label: "MacBook Air 13\" M3 (2024)", href: "/macbook-air-13-m3-2024-repair-dubai" },
    { label: "MacBook Air 13\" M2 (2022)", href: "/macbook-air-13-m2-2022-repair-dubai" },
    { label: "MacBook Air 13\" M1 (2020)", href: "/macbook-air-13-m1-2020-repair-dubai" },
  ] },
  { group: "iMac & Mac desktop", hub: "/mac-repair-dubai", items: [
    { label: "iMac 24\" M4 (2024)", href: "/imac-24-m4-2024-repair-dubai" },
    { label: "iMac 27\" 5K (2020)", href: "/imac-27-intel-2020-repair-dubai" },
    { label: "Mac mini M4 (2024)", href: "/mac-mini-m4-2024-repair-dubai" },
    { label: "Mac Studio M4 Max (2025)", href: "/mac-studio-m4-max-2025-repair-dubai" },
    { label: "Mac Pro M2 Ultra (2023)", href: "/mac-pro-m2-ultra-2023-repair-dubai" },
  ] },
  { group: "iPhone & iPad", hub: "/iphone-repair-dubai", items: [
    { label: "iPhone 17 Pro Max", href: "/iphone-17-pro-max-repair-dubai" },
    { label: "iPhone 16 Pro", href: "/iphone-16-pro-repair-dubai" },
    { label: "iPhone 15", href: "/iphone-15-repair-dubai" },
    { label: "iPhone 14 Pro", href: "/iphone-14-pro-repair-dubai" },
    { label: "iPad Pro 13\" M5", href: "/ipad-pro-13-m5-repair-dubai" },
    { label: "iPad Air 13\" (M4)", href: "/ipad-air-m4-13-repair-dubai" },
    { label: "iPad mini 7", href: "/ipad-mini-7-repair-dubai" },
  ] },
];

const DEVICE_HUB: { label: string; href: string }[] = [
  { label: "Apple repair in Dubai", href: "/apple-repair-dubai" },
  { label: "Mac repair in Dubai", href: "/mac-repair-dubai" },
  { label: "iPhone repair in Dubai", href: "/iphone-repair-dubai" },
  { label: "iPad repair in Dubai", href: "/ipad-repair-dubai" },
  { label: "Our Apple service centre, Media City", href: "/apple-service-center-dubai" },
  { label: "Apple & Studio Display repair", href: "/apple-display-repair-dubai" },
  { label: "iPhone screen repair Dubai", href: "/iphone-screen-repair-dubai" },
  { label: "iPhone battery replacement", href: "/iphone-battery-replacement-dubai" },
  { label: "iPhone water-damage repair", href: "/iphone-water-damage-repair-dubai" },
  { label: "iPad screen repair Dubai", href: "/ipad-screen-repair-dubai" },
  { label: "iPad battery replacement", href: "/ipad-battery-replacement-dubai" },
  { label: "iMac 5K screen repair", href: "/imac-screen-repair-dubai" },
  { label: "iMac logic board repair", href: "/imac-logic-board-repair-dubai" },
  { label: "Mac data recovery", href: "/mac-data-recovery-dubai" },
  { label: "Mac Activation Lock & firmware unlock", href: "/mac-activation-lock-unlock-dubai" },
  { label: "iPod touch repair", href: "/ipod-touch-7-repair-dubai" },
];

const AREA_PAGES: { label: string; href: string }[] = [
  { label: "Dubai Marina", href: "/macbook-repair-dubai-marina" },
  { label: "Downtown Dubai", href: "/macbook-repair-downtown-dubai" },
  { label: "Business Bay", href: "/macbook-repair-business-bay" },
  { label: "JBR", href: "/macbook-repair-jbr" },
  { label: "JLT", href: "/macbook-repair-jlt" },
  { label: "DIFC", href: "/macbook-repair-difc" },
  { label: "Jumeirah", href: "/macbook-repair-jumeirah" },
  { label: "Dubai Silicon Oasis", href: "/macbook-repair-silicon-oasis" },
  { label: "Dubai Internet City", href: "/macbook-repair-internet-city" },
];

const GUIDES: { label: string; href: string }[] = [
  { label: "MacBook screen repair cost in Dubai (2026)", href: "/blog/macbook-screen-repair-cost-dubai-2026" },
  { label: "MacBook battery replacement cost", href: "/blog/macbook-battery-replacement-cost-2026" },
  { label: "MacBook logic board repair cost", href: "/blog/macbook-logic-board-repair-cost-dubai" },
  { label: "Water-damage repair cost & success rates", href: "/blog/macbook-water-damage-repair-cost-success-rates" },
  { label: "Why your MacBook won't turn on - fix guide", href: "/blog/macbook-not-turning-on-fix-guide" },
  { label: "First steps after a MacBook water spill", href: "/blog/water-damage-macbook-immediate-action" },
  { label: "Recovering data from a broken MacBook", href: "/blog/data-recovery-broken-macbook-2026" },
  { label: "iPhone screen repair cost in Dubai", href: "/blog/iphone-screen-repair-cost-dubai-2026" },
  { label: "MacBook running slow - 10 fixes", href: "/blog/macbook-running-slow-10-fixes" },
  { label: "Protect your MacBook in Dubai summer heat", href: "/blog/protect-macbook-dubai-summer-heat" },
  { label: "Genuine vs grade-A parts explained", href: "/blog/genuine-parts-vs-quality-alternative-explained" },
  { label: "How our transparent pricing works", href: "/blog/transparent-repair-pricing-explained" },
  { label: "Our no-fix-no-charge policy", href: "/blog/no-fix-no-charge-policy-explained" },
  { label: "Our MacBook repair warranty explained", href: "/blog/macbook-repair-warranty-explained" },
  { label: "Why 21 years of Apple repair matters", href: "/blog/why-21-years-experience-matters" },
  { label: "Repair vs replace - when to fix a MacBook", href: "/blog/laptop-repair-vs-buy-new-2026" },
  { label: "M5 chip vs M4 explained", href: "/blog/m5-chip-explained-vs-m4" },
  { label: "Best Mac for developers in Dubai", href: "/blog/best-mac-for-developers-dubai-2026" },
  { label: "iCloud-locked iPhone - what to do", href: "/blog/icloud-locked-iphone-what-to-do" },
];

const SELL_OPTIONS: { label: string; href: string; d: string }[] = [
  { label: "Sell your MacBook in Dubai", href: "/sell-macbook-dubai", d: "Get a fair, same-day cash quote for your working Mac." },
  { label: "Trade in your Mac for credit", href: "/trade-in-macbook-dubai", d: "Put the value of your old Mac toward a repair or upgrade." },
  { label: "We buy faulty or water-damaged Macs", href: "/sell-faulty-macbook-dubai", d: "Dead logic board or liquid damage? We'll still pay for it." },
];

const OTHER_DEVICES = [
  { t: "Laptop repairs", d: "Our technicians have experience with all laptops and accessories. Rather than MacBooks we also repair laptops, desktops, iPads, and iPhones. We repair laptops from all major brands, such as Lenovo, Dell, Microsoft, HP etc." },
  { t: "Desktop repairs", d: "Whatever malfunctions you encounter with your desktops, we handle everything and repair them with high-quality parts. We provide hardware upgrades, virus removal, security setup and more." },
  { t: "Custom Built PCs", d: "If you need custom-built PCs based on your needs, our team can build high-performance PCs for gaming, graphic design, and more. We also provide a complete setup and configuration according to your requirements." },
];

// Services Offered (verbatim from live page). href only where a real route exists.
const SERVICES: { t: string; d: string; href?: string }[] = [
  { t: "Screen Repair and Replacement", href: "/macbook-screen-repair-dubai", d: "We repair malfunctioning MacBook screens, including screen flickering, broken or shattered screens, blue screens of death, dead pixels, and lines on screens. We have expertise in Mac display repair, Apple Mac screen repair, Apple MacBook screen repair and MacBook screen replacement in Dubai, dealing with all complex screen issues. We repair and replace the completely dead screen with the original one and restore a smooth display." },
  { t: "Battery Replacement", href: "/macbook-battery-replacement-dubai", d: "We specialize in diagnosing battery-related issues such as battery not charging, failure to connect with charger, and quickly draining or swelling a battery. We replace them with original batteries and offer a 90-day warranty on battery replacement service. Your MacBook increases its lifespan with our high-quality, genuine battery." },
  { t: "Keyboard Repair", href: "/macbook-keyboard-repair-dubai", d: "If your MacBook keyboard is not working and shows some issues with sticky or damaged keys, unresponsive functional keys, double typing on a single press, and a completely disconnected keyboard. We repair its keys and restore its functionality by thorough cleaning. We also replace it with the original keyboard at affordable prices." },
  { t: "Logic Board Repair", href: "/macbook-logic-board-repair-dubai", d: "Screen freezing, overheating, unexpected shutdowns, failure to connect peripherals, and boot loop problems can be associated with your MacBook's motherboard. Our experts efficiently assess all the motherboard issues and fix them quickly. Our expert technicians repair the motherboard and replace its impaired components to make it perfect for working smoothly." },
  { t: "Charging Port Repair", href: "/macbook-charging-port-repair-dubai", d: "If your MacBook fails to connect with the charger or has an intermittent connection, we will diagnose its root cause as it may be due to a defective charging cable, charging adapter, or charging port. We replace the charging port or cable with the original one and repair the charging adapter to restore the proper charging connection." },
  { t: "Trackpad Repair", href: "/macbook-trackpad-repair-dubai", d: "Are you dealing with a malfunctioning trackpad? Whether unresponsive to touch, overly sensitive, or not registering clicks, we can restore its smooth functionality. If it's been damaged by liquid spills or has lost functionality, we'll replace it with a new one and enhance your performance." },
  { t: "Speaker Repair", href: "/macbook-speaker-repair-dubai", d: "We diagnose and fix speaker issues if you hear a distorted sound or your MacBook's speaker does not produce any sound. Whether the problem is due to high usage or accidental damage, we replace the original one to restore clear and high-quality audio. Contact us for Mac speaker replacement cost." },
  { t: "Microphone Repair", href: "/macbook-microphone-repair-dubai", d: "If nobody can hear you on Teams or FaceTime, your voice sounds muffled, or the input meter stays flat, we diagnose whether it's the mic array, the flex cable or the audio codec on the board. We rule out the free software fixes first, then repair the hardware and restore clear input." },
  { t: "Touch Bar Repair", href: "/macbook-touch-bar-repair-dubai", d: "Dead strip, flickering, half the bar lit, or ghost taps firing on their own on your MacBook Pro Touch Bar. We replace the OLED strip and its flex on 2016-2022 models, restore Touch ID at the end where the original sensor allows, and test every zone before it leaves the bench." },
  { t: "Camera Repair", href: "/macbook-camera-repair-dubai", d: "If your camera has blurry or poor image quality or isn't working during video calls due to hardware malfunctions, we will replace it with a new one if it's completely non-functional." },
  { t: "Cleaning and Maintenance Services", href: "/macbook-cleaning-maintenance-dubai", d: "We clean your device internally and externally from dust or debris and protect its internal hardware components from corrosion. We offer regular maintenance for your MacBook to increase its longevity and enhance performance." },
  { t: "Water Damage Repair", href: "/macbook-water-damage-repair-dubai", d: "We rescue liquid-damaged MacBooks that would otherwise be written off. We restore your MacBook's functionality after liquid spills by cleaning and drying affected components. If any components are not to be repaired, we replace them with high-quality original Apple parts. Contact now for MacBook water damage repair." },
  { t: "Fan Repair", href: "/mac-fan-cleaning-dubai", d: "If your MacBook is making loud noises that limit its usage, we can fix it. Our team has all the technical knowledge to fix all types of fan or ventilation issues. We clean the fans to help them run quietly again, and if they're too damaged, we can replace them with new ones. Contact us for MacBook fan cleaning service." },
  { t: "Data Recovery", href: "/macbook-data-recovery-dubai", d: "If you have lost your important files or documents from your MacBook, our data recovery experts recover your lost data in a secure environment by keeping your personal information confidential. Our expert technicians use advanced tools and techniques to recover your data safely without losing any file or information, whether it's due to accidental deletion, hardware failure, or a system crash." },
  { t: "Thermal Paste Replacement", href: "/macbook-thermal-paste-replacement-dubai", d: "Overheating and throttling are often caused by dried-out thermal paste. We carefully strip the old compound from the CPU/GPU and reapply high-grade thermal paste, restoring efficient heat transfer so your Mac stays cool and performs at full speed." },
  { t: "GPU Repair", href: "/macbook-gpu-repair-dubai", d: "Distorted graphics, artefacts, no boot to the desktop or a failing discrete GPU - we perform board-level GPU rework and replacement so your Mac delivers a smooth, high-resolution display for editing, design and everyday use." },
  { t: "Bluetooth Repair", href: "/macbook-wifi-bluetooth-repair-dubai", d: "If you are facing Bluetooth issues like 'Bluetooth is not working' or 'Bluetooth is not available,' our experts diagnose the problem with your Bluetooth system, whether it is due to software issues or any hardware failure. We replace the damaged components and restore your Bluetooth connectivity." },
  { t: "Hinge Replacement", href: "/macbook-hinge-repair-dubai", d: "Are you facing difficulty with your MacBook's broken hinges? It can limit your device's usability. We provide hinge repair and replacement with high-quality Apple parts for smooth opening and closing of the lid without damaging your Mac screen." },
  { t: "Power Button Repair", href: "/macbook-power-button-repair-dubai", d: "If your MacBook won't power on, it can be due to a power button stuck, unresponsive, or faulty power button. We diagnose and fix these issues efficiently, whether they require delicate soldering work or a complete power button replacement. Our technicians use original power button components for durability and responsiveness in the long term." },
  { t: "Backup Services", href: "/macbook-backup-service-dubai", d: "Do you need to restore your deleted data? Our professionals can recover your important data, either temporarily deleted files or permanently deleted data. We also offer customized backup software systems with proper setup and configuration to save your data on a large scale so you can easily retrieve it when required." },
  { t: "Software Troubleshooting", href: "/macos-reinstall-dubai", d: "If your MacBook becomes unresponsive, certain files or folders appear corrupted, or you encounter connectivity issues, it may indicate a software crash. Our team can restore your MacBook by upgrading its software and troubleshooting any diagnosed performance issues to make your device work perfectly." },
  { t: "Safe Mode Diagnostics & Repair", href: "/macbook-safe-mode-repair-dubai", d: "When you encounter performance issues with your Mac and want to run Apple Diagnostics to identify the exact problem, your MacBook cannot run in safe mode. Reach out to us. We have the expertise to troubleshoot these issues and reset the settings to run your Mac in safe mode so that it can help resolve problems related to system stability." },
];

const UPGRADES: { label: string; href?: string }[] = [
  { label: "SSD Upgrade",          href: "/macbook-ssd-upgrade-dubai" },
  { label: "RAM Upgrade",          href: "/macbook-ram-upgrade-dubai" },
  { label: "macOS Upgrade",        href: "/macos-reinstall-dubai" },
  { label: "Graphics Card Upgrade", href: "/macbook-gpu-repair-dubai" },
];

const OFFERS = ["Instant Online Quote", "Quick and Easy Process", "Free Diagnosis", "Free Pickup in Dubai", "Live Chat Support", "Low Repair Prices"];

const DISCOUNTS = [
  { t: "Student Discounts", d: "We offer 10% student discounts on all MacBook repairs, including hardware, software, and other accidental damage. Students can avail of our offer by displaying their valid student IDs." },
  { t: "Teacher Discounts", d: "As with the student discounts, teachers can also receive special pricing or packages for repairs and maintenance services for their devices." },
  { t: "Military Discounts", d: "We offer a flat-rate discount for military personnel, and our services include diagnostics and repairs." },
  { t: "Bundled Services", d: "We offer bundled repair packages. We save your time and money and combine our services in one repair package, which includes setup, software installation, and ongoing support." },
  { t: "Referral Discounts", d: "You can refer a friend, family member, or colleague, and receive a discount on your next service. Our referral program is designed to give back for each client you refer, with valuable discounts as a token of our appreciation." },
];

const INSURANCE: { t: string; d: string; href?: string }[] = [
  { t: "Accidental Damage", href: "/macbook-insurance-dubai", d: "If your MacBook falls or any heavy object damages your Mac's screen, we swiftly diagnose the severity of the damage and provide reliable repair solutions for broken or shattered screens." },
  { t: "Extended Warranty", href: "/macbook-insurance-dubai", d: "We offer repairs for your MacBook when issues arise after an expired warranty period. Our technicians deal with all the hardware, software, cleaning, and data loss issues under our extended warranty policy." },
  { t: "Theft or Loss Coverage", href: "/macbook-insurance-dubai", d: "When you have a stolen or lost MacBook device, we track and locate it if it goes missing, or we offer customer support to guide you through the claim and replacement process. We offer backup services for your lost devices and retrieve your data if it was deleted." },
  { t: "Corporate Partnership Plans", href: "/macbook-insurance-dubai", d: "We offer insurance packages customized for large businesses and companies looking for discounted rates on bulk repairs, workplace device maintenance, and support for multiple devices simultaneously." },
];

const COMMON_ISSUES: { t: string; d: string; href?: string }[] = [
  { t: "MacBook Power Supply Issues", href: "/macbook-charging-port-repair-dubai", d: "Power supply issues are commonly faced by MacBook users, such as MacBook not charging properly, shutting down unexpectedly, or losing power quickly. Our technicians can diagnose the root cause, repair or replace the damaged components and restore a smooth power supply." },
  { t: "WiFi Connectivity Issues", href: "/macbook-wifi-bluetooth-repair-dubai", d: "If you experience connection drops or failure to connect to WiFi networks, WiFi problems occur due to hardware failure or sometimes software issues. We diagnose the issues and troubleshoot all the WiFi connectivity problems, including a few additional issues like poor signals and interference." },
  { t: "Startup Problems", href: "/macbook-safe-mode-repair-dubai", d: "If your MacBook resists powering on or is stuck on the loading screen, failing to boot up, our professionals efficiently assess the startup issues, which may be software or hardware related. We troubleshoot all the startup screen issues and restore a proper startup." },
  { t: "Slow Performance", href: "/mac-performance-tune-dubai", d: "If your MacBook is running slowly, it could be due to outdated software, insufficient memory, or hard drive issues, which can affect the productivity and efficiency of your Mac. We upgrade your macOS, install additional RAM, and replace the hard drive based on your device's compatibility to restore optimal speed and performance." },
  { t: "Overheating", href: "/macbook-overheating-fix-dubai", d: "Overheating can affect the performance and lifespan of your device. It usually occurs due to blocked ventilation, dust buildup, heavy background processes, or a failing cooling system. Our experts clean internal components, optimize cooling systems, and identify hardware or software issues causing the problem." },
  { t: "Malware and Virus Removal", href: "/macbook-virus-removal-dubai", d: "If your system runs slow, has a particular application crash or corrupted documents, it means your system has a virus attack. We conduct thorough scans to identify and remove harmful software. Our experienced team also guides you to save your device from future infections." },
  { t: "Flexgate / Backlight Issues", href: "/macbook-flexgate-repair-dubai", d: "If you have uneven brightness or no backlight, it occurs due to faulty display backlight cables from the most repeated lid opening and closing. We restore all the flexgate issues with perfect brightness on all edges." },
  { t: "Freezing After Sleep / Wake", href: "/macbook-safe-mode-repair-dubai", d: "If your Mac freezes, crashes or becomes unresponsive after waking up from sleep, either due to software bugs or hardware issues, we can fix it. Our technicians efficiently diagnose the actual cause and restore it through multiple processes, including NVRAM and SMC resets." },
  { t: "Apple ID and iCloud Sync Issues", href: "/macos-reinstall-dubai", d: "If you encounter errors while logging into your Apple ID or face iCloud syncing issues, we have professional MacBook troubleshooting techniques, and we fix these syncing issues using account recovery methods, updating software or adjusting settings." },
  { t: "Touch ID Not Working", href: "/macbook-touch-id-repair-dubai", d: "If Touch ID isn't working on your MacBook Pro or MacBook Air M1, it may be due to software issues or sensor damage. We diagnose the root cause and adjust system settings or replace necessary components to restore its smooth functionality." },
];

const APPLECARE_TABLE = [
  { s: "AppleCare Warranty Extension", d: "Extends coverage beyond the standard warranty, protecting against hardware defects and failures.", b: "Extended support, original parts replacement", e: "Available for newer models" },
  { s: "Standard Warranty Repairs", d: "Covers eligible repairs for MacBook issues within the manufacturer's warranty period.", b: "Cost-effective repairs for covered issues", e: "Devices within warranty" },
  { s: "Accidental Damage Repair", d: "Provides repair for accidental damage (drops, spills) outside of standard warranty coverage.", b: "Peace of mind for accidental incidents", e: "AppleCare+ or additional fees" },
  { s: "Battery Replacement", d: "Battery service for MacBooks with low performance or defective batteries under warranty.", b: "Improved device lifespan and performance", e: "AppleCare or warranty-covered" },
  { s: "Screen and Display Repairs", d: "Fixes for issues such as screen flickering, black spots, or Flexgate-related backlight issues.", b: "Clear display, enhanced user experience", e: "Warranty or AppleCare+" },
  { s: "Logic Board Repair & Replacement", d: "Covers repairs for logic board issues under warranty or AppleCare.", b: "Ensures MacBook stability and functionality", e: "AppleCare+ or additional fees" },
  { s: "Power Adapter Replacement", d: "Replacement of malfunctioning power adapters covered under warranty or AppleCare.", b: "Safe and efficient charging solutions", e: "Warranty-covered" },
  { s: "Software Diagnostics and Support", d: "Resolves software issues, including OS-related problems and app malfunctions, covered under warranty.", b: "Smooth and efficient MacBook performance", e: "AppleCare or warranty" },
  { s: "Priority Repair Service", d: "Expedited repair service for critical MacBook issues.", b: "Fast service for minimal downtime", e: "AppleCare+ coverage" },
  { s: "Annual Check-Up and Maintenance", d: "Comprehensive diagnostics and maintenance checks for long-term performance.", b: "Preventive care for extended device lifespan", e: "AppleCare or additional cost" },
];

const OOW_ISSUES = ["Failed MacBook battery", "Failed MacBook logic board", "Failed MacBook optical drive", "Failed MacBook memory chip", "Failed MacBook MagSafe DC board", "Failed MacBook hard drive or SSD drive"];

const AMC: { t: string; d: string; href?: string }[] = [
  { t: "Regular Maintenance & Diagnostics", href: "/macbook-cleaning-maintenance-dubai", d: "We regularly check and run diagnostics to identify the malfunctioning of your MacBook components. We provide repair or replacement if needed, so your MacBook maintains its optimal performance and increases the lifespan of its components." },
  { t: "Hardware & Software Support", href: "/annual-maintenance-contract-dubai", d: "We continuously monitor your device performance and provide support according to your device's needs. Whether you require hardware maintenance or fixes for software bugs, we handle all the complexities and restore your MacBook to its optimum performance." },
  { t: "Battery Health Check & Replacement", href: "/macbook-battery-replacement-dubai", d: "We regularly check your battery health, and if we find a notification that indicates battery wear, we will replace it with a high-quality original battery before further damage occurs." },
  { t: "Dust & Debris Cleaning", href: "/macbook-cleaning-maintenance-dubai", d: "Our AMC includes cleaning dust and debris to help protect your device. We clean the keyboard to prevent sticky keys and maintain the internal components for smooth ventilation, which can help avoid overheating." },
  { t: "24/7 Customer Support", href: "/annual-maintenance-contract-dubai", d: "When we have an agreement with our clients, we provide 24/7 support for their malfunctioning devices. Our team is always available to assist you whenever you need to repair your MacBook." },
  { t: "Priority Repair Services", href: "/annual-maintenance-contract-dubai", d: "We prioritize our AMC members and provide urgent support for their issues. We address their needs without any unnecessary delays." },
  { t: "Discounted Repairs & Parts", href: "/annual-maintenance-contract-dubai", d: "For our AMC members, we offer repair and replacement services for their MacBook components at discounted rates with authentic Apple parts to maintain your device's integrity." },
  { t: "Remote Assistance", href: "/annual-maintenance-contract-dubai", d: "Our technical support team is available to provide remote assistance to troubleshoot and resolve your issues without visiting our MacBook repair shop." },
  { t: "Data Backup & Recovery Support", href: "/macbook-backup-service-dubai", d: "When you accidentally delete data, we can retrieve it and offer backup solutions to protect against future loss. We also provide professional configuration and setup services to store data on a larger scale." },
];

const WHY_CHOOSE = [
  { t: "Experienced Apple Technicians", d: "Our lead technician Abdul Aziz has over 21 years of Mac repair experience, and our bench knows the latest Apple hardware and board-level techniques to handle every complex issue across MacBook models." },
  { t: "Genuine & High-Grade Parts", d: "We use genuine Apple parts wherever they're available and high-grade compatible parts when they aren't - and we tell you which your repair uses before we start. Every repair carries our 90-day written warranty." },
  { t: "Comprehensive Services", d: "We offer a wide range of MacBook repairs based on your specific needs. From hardware and software issues to upgrades and maintenance, no matter the problem, we have the solution!" },
  { t: "Low Pricing", d: "We offer affordable and transparent costs for every MacBook repair or replacement. We discuss our repairs with you before we provide the best solution without any hidden fee." },
  { t: "Same Day Services", d: "We have a dedicated team that provides quick repairs without you waiting. We also prioritize emergencies and offer urgent repairs to our customers." },
  { t: "Customer Satisfaction", d: "Our excellent and genuine repairs make us proud. You have a satisfactory experience throughout the repair process with our superb customer service and support." },
  { t: "Flexible Appointment Scheduling", d: "In your busy routine, we provide convenient scheduling to fit around your lifestyle. We make it convenient to get the support you're looking for." },
  { t: "Trusted by Many", d: "Our satisfied customers across Dubai trust us for their MacBook repair needs, and we are proud to have built a reputation for quality and reliability in the community." },
];

const PRICE_TABLE = [
  { r: "Screen Replacement", c: "1,199 - 2,499", n: "Prices vary by size and model." },
  { r: "Battery Replacement", c: "399 - 799", n: "Varies based on model and battery type." },
  { r: "Keyboard Replacement", c: "499 - 999", n: "Cost may vary based on assembly requirements." },
  { r: "Logic Board Repair", c: "999 - 2,999", n: "Highly dependent on specific issues and models." },
  { r: "Hard Drive Replacement (HDD to SSD)", c: "599 - 1,499", n: "Includes SSD cost and installation." },
  { r: "Water Damage Repair", c: "799 - 2,499", n: "Cost varies with the extent of damage and repairs." },
  { r: "Software Issues (OS Install, Virus Removal)", c: "199 - 499", n: "Simple fixes are usually less expensive." },
];

const EXPERT = [
  { t: "Initial Setup Assistance", d: "We offer an initial setup for your MacBook. We provide configuration based on your needs and requirements, such as settings for mail accounts, WiFi or VPN. We create new user accounts, set passwords, connect macOS to wireless networks, and set up Microsoft Office and Outlook connected with storage like iCloud." },
  { t: "Software Installation and Updates", d: "We offer software installation for MacBook in Dubai. We update the software to be compatible with your Mac model. Our team installs new versions of software without losing your important data, takes backups through Time Machine and provides MacBook data migration services to other external devices as needed." },
  { t: "Ongoing Support and Optimization", d: "We provide continuous support, including software troubleshooting and performance optimization. We delete unnecessary files and clear the cache to optimize your system through proven methods." },
];

const PROCESS = [
  { t: "Consultation", d: "We start with an initial consultation. We apply different diagnostic tools and make a thorough assessment to identify the issues related to your device." },
  { t: "Approval", d: "After diagnosis, we discuss the problems your Mac has. We brief you on our repair/replacement process and estimated expenses. We take your consent first before moving forward." },
  { t: "Repair / Replacement", d: "We use high-quality, latest tools and techniques to repair your MacBook issues. We troubleshoot minor issues and perform a step-by-step replacement for major damage using original Apple parts for satisfactory repair and longevity." },
  { t: "Testing", d: "Once repair or replacement is done, we implement multiple tests to analyze the performance and test our repair quality." },
  { t: "Return", d: "Once everything is complete, we notify you that your device is ready for use. For those using our delivery service, we safely return the device to your location." },
];

const FAQS = [
  { q: "How much does MacBook repair cost in Dubai?", a: "MacBook repair at MacBook Repair Dubai starts from AED 150 for a single key, with the exact price set by the fault and the model. Screen repair is from AED 600, battery replacement from AED 450, keyboard from AED 150, logic board from AED 800, and water damage from AED 700. Diagnosis is always free and the price is confirmed in writing on WhatsApp before any work begins. All prices are VAT-inclusive." },
  { q: "How much is a MacBook screen replacement in Dubai?", a: "MacBook screen replacement at MacBook Repair Dubai starts at AED 600 for the Air 13\" and the Pro 13\". The 14\" Pro is AED 800 and the 16\" Pro is AED 1,200. Flexgate backlight failure on the 2016 to 2017 Pro is a AED 600 cable swap rather than a full panel. Most screens are done the same day, and True Tone stays intact when you choose the genuine Apple panel at quote time." },
  { q: "How much does it cost to replace a MacBook battery in Dubai?", a: "A MacBook battery replacement starts at AED 450 for the Air 11\", 13\", and 15\" on both Intel and Apple Silicon. The Pro 13\" is AED 500 and the Pro 14\" and 16\" are AED 600. The price covers a tier-1 cell, the labour, the firmware re-pair on Apple Silicon, and the calibration cycle, with a 6-month warranty and an 80% capacity guarantee. The job takes about 2 hours on the bench at the Concord Tower workshop in Dubai Media City." },
  { q: "Is it worth repairing an old MacBook or should I replace it?", a: "It is usually worth repairing if the fix costs less than half the price of a comparable replacement. A AED 450 battery or a AED 600 screen on a MacBook still worth AED 3,000 to AED 5,000 is an easy decision. Component-level logic board repair from AED 800 beats a full Apple board swap that runs AED 4,000 or more. MacBook Repair Dubai gives an honest opinion after the free diagnosis, and if the board is unrecoverable you pay AED 0 under the no-fix-no-charge policy." },
  { q: "How long does a MacBook repair take?", a: "Most MacBook repairs at MacBook Repair Dubai are done the same day. Screen and battery jobs finish in about 2 to 4 hours, keyboard swaps run from 30 minutes to 2 days, and logic board work takes 3 to 5 days because it includes a burn-in test. Water damage runs 1 to 5 days depending on the spill. WhatsApp the model and serial number to 055 741 3706 for a confirmed timeline in a few minutes." },
  { q: "Do you offer same-day MacBook screen repair in Dubai?", a: "Same-day MacBook screen repair is standard for the most common models, including the Air 13\", the Pro 13\" Touch Bar, and the Pro 14\". MacBook Repair Dubai stocks panels for these, so the screen is fitted and returned the same day from the Dubai Media City workshop. The 16\" Pro can take 1 to 2 days. Send your model to 055 741 3706 to confirm the panel is in stock before you travel in." },
  { q: "Can I wait at the workshop while my MacBook is repaired?", a: "You can wait at the Concord Tower workshop in Dubai Media City for same-day jobs like battery, screen, and single-key replacements, which finish in roughly 2 to 4 hours. There is parking on site and the workshop is across from Media City Metro. The workshop is open Monday to Saturday, 9am to 10pm, closed Sundays. For longer jobs like logic board or water damage, free pickup and delivery across Dubai mainland is the easier option." },
  { q: "Do you use genuine Apple parts?", a: "MacBook Repair Dubai uses genuine Apple parts where they are available and A-grade OEM-spec parts from the same factory lines as Apple where they are not. Which one your repair uses is labelled clearly on the WhatsApp quote before work starts. On screens, the genuine Apple panel keeps True Tone, while aftermarket panels carry a calibration chip programmed to your logic board serial. Both options carry the written warranty." },
  { q: "Do you offer a warranty on MacBook repairs?", a: "Every MacBook repair at MacBook Repair Dubai carries a 90-day written warranty on parts and labour, with batteries covered for 6 months plus an 80% capacity guarantee. The warranty is dated, signed, and lists the part batch number, and it is transferable once free of charge if you sell the MacBook. It covers manufacturing defects and premature failure, but not fresh physical or liquid damage after the repair." },
  { q: "Will I lose my data when you repair my MacBook?", a: "Your data stays on the SSD for standard repairs like screen, battery, and keyboard, since the storage is never touched. For logic board and water damage work the data is preserved wherever the board survives. If the board is dead, separate data recovery is available from AED 1,000, with strong odds on Intel logic boards and lower odds on T2 and Apple Silicon models, where the SSD is encrypted to the secure enclave and recovery depends on the chip surviving. Your files are kept confidential at all times." },
  { q: "Can you fix a water-damaged MacBook in Dubai?", a: "MacBook Repair Dubai recovers liquid-damaged MacBooks from AED 700 with full ultrasonic cleaning and corrosion removal. The workshop logbook shows a 90% recovery rate when the MacBook arrives within 24 hours and was not powered on after the spill, dropping to about 60% at 72 hours. Power it off, do not charge it, skip the rice, and WhatsApp 055 741 3706 for same-hour free emergency pickup across Dubai mainland. No fix, no charge if the board is beyond saving." },
  { q: "My MacBook won't turn on, can you fix it?", a: "A MacBook that won't power on is most often a dead battery, a failed DC-in charging board, or a logic board fault, and MacBook Repair Dubai diagnoses all three for free. A battery or charging board swap runs AED 350 to AED 600, while component-level board repair starts at AED 800. The fault is confirmed before any charge, so you know the price up front. Bring it in or book free pickup across Dubai mainland." },
  { q: "What should I do about a swollen MacBook battery?", a: "Stop using the MacBook immediately and do not charge it or try to power it on, because a swollen lithium pack is a fire risk and can crack the trackpad. MacBook Repair Dubai replaces swollen batteries from AED 450, same day in about 2 hours, with a 6-month warranty. WhatsApp 055 741 3706 for same-hour free emergency pickup across Dubai mainland. If the swelling has already cracked the trackpad, the combined battery and trackpad job is AED 800." },
  { q: "How much does it cost to fix a MacBook keyboard in Dubai?", a: "MacBook keyboard repair starts at AED 150 for a single key cap on the Magic Keyboard and AED 350 for a full Magic Keyboard swap on Apple Silicon. The 2016 to 2019 butterfly top case is AED 700, because Apple bonded the keyboard, battery, and speakers into one unit, against Apple's own list price of AED 1,829 to AED 2,449. Arabic, Russian, or French layout swaps are AED 450. Most are same day at MacBook Repair Dubai." },
  { q: "Which MacBook models and years do you repair?", a: "MacBook Repair Dubai services every MacBook from the 2010 Intel Air through the latest M5, including the Air 11\", 13\", and 15\", and the Pro 13\", 14\", 15\", and 16\". This covers Intel, M1, M2, M3, M4, and M5 on Air and Pro, plus iMac, Mac mini, Mac Studio, and Mac Pro. The workshop also carries parts for models Apple lists as vintage or obsolete, since 2004. Send your model from About This Mac for a confirmed quote." },
  { q: "Can you repair a MacBook bought outside the UAE?", a: "MacBook Repair Dubai repairs MacBooks bought anywhere in the world, since the repair does not depend on local Apple warranty status. A unit purchased in the US, UK, India, or anywhere else is serviced the same as one bought in Dubai, at the same prices. Layout swaps to Arabic, English, or Russian are AED 450 if you want to change the keyboard. WhatsApp the model and serial to 055 741 3706 for a quote." },
  { q: "Do you offer free pickup and delivery in Dubai?", a: "MacBook Repair Dubai offers free pickup and delivery anywhere on Dubai mainland, with same-hour collection from Internet City, Knowledge Park, JLT, and Al Barsha, and same-day from Marina, Downtown, JBR, and Palm Jumeirah. WhatsApp 055 741 3706 and a courier is usually with you within a couple of hours. Liquid damage gets priority same-hour pickup." },
  { q: "Where is your MacBook repair workshop located?", a: "MacBook Repair Dubai is at Office #45, 10th Floor, Concord Tower, Al Sufouh, Dubai Media City, across from Media City Metro and near The Palm Jumeirah, with parking on site. The workshop is open Monday to Saturday, 9am to 10pm, and closed on Sundays. It has been at the heart of Dubai's Apple repair scene since 2004, with 215+ five-star Google reviews. Call or WhatsApp 055 741 3706." },
  { q: "What payment methods do you accept?", a: "MacBook Repair Dubai accepts cash and all major cards, including Visa, Mastercard, and American Express. Buy-now-pay-later is available through Tabby and Tamara, so you can split a repair into interest-free instalments. You only pay once you approve the written quote, and there is no diagnostic fee. All prices are VAT-inclusive in AED." },
  { q: "How do I book a MacBook repair?", a: "Booking takes one message. WhatsApp the model, the year, and a short description or video of the fault to 055 741 3706, and you get a confirmed price and timeline within minutes during business hours. From there, drop the MacBook at the Concord Tower workshop in Dubai Media City or book free pickup across Dubai mainland. Diagnosis is free and you approve the quote before any work starts." },
  { q: "Are you an Apple Authorised Service Provider?", a: "MacBook Repair Dubai is an independent Apple repair specialist, not an Apple Authorised Service Provider, working in Dubai since 2004. Its technicians are Apple Certified Mac Technicians (ACMT) — an Apple credential held by the people on the bench — while the workshop itself is independent rather than Apple-authorised. The workshop services in-warranty, AppleCare-eligible, and out-of-warranty MacBooks, and offers component-level board repair that Apple does not. When an Apple Store or AppleCare+ claim is genuinely the better route, you get told honestly. The trade-off is faster turnaround and lower prices, backed by the 90-day warranty." },
  { q: "How does your pricing compare to the Apple Store?", a: "MacBook Repair Dubai is consistently below Apple's UAE list prices, with no upfront service fee. A Magic Keyboard swap is AED 350 against Apple's AED 1,449, a butterfly top case is AED 700 against AED 1,829 to AED 2,449, and a component-level board repair from AED 800 replaces an AED 4,000-plus Apple board swap. Diagnosis is free and the price range across all services runs from AED 49 to AED 3,500. Same outcome, a fraction of the cost." },
  { q: "Do you offer business or bulk MacBook repair for companies in Dubai?", a: "MacBook Repair Dubai handles business and fleet repairs for offices across Dubai Media City, Internet City, and the wider Dubai mainland, with free pickup and delivery for multiple machines. Companies get one point of contact on WhatsApp, written quotes per device, and VAT invoices for accounting. Turnaround is the same as single units, often same day for screens and batteries. Message 055 741 3706 with the number of MacBooks and the faults." },
];

const AREAS_DISTANCE = [
  ["Deira", "29m"], ["DIFC", "27m"], ["Mirdif", "31m"], ["Satwa", "28m"], ["Tecom", "12m"], ["Jebel Ali", "24m"],
  ["The Villa", "33m"], ["Al Sufouh", "10m"], ["Bur Dubai", "24m"], ["Meadows", "14m"], ["Motor City", "22m"], ["Remraam", "26m"],
  ["The Greens", "11m"], ["Silicon Oasis", "33m"], ["The Views", "12m"], ["Sports City", "21m"], ["Studio City", "22m"], ["Dubai Pearl", "7m"],
  ["Dubai South", "33m"], ["Dubai Land", "25m"], ["Al Barsha", "19m"], ["Al Barari", "30m"], ["Al Furjan", "19m"], ["Al Jaddaf", "25m"],
  ["Al Karama", "24m"], ["Al Jafiliya", "27m"], ["Al Warqa", "35m"], ["Al Quoz", "18m"], ["Al Nahda", "31m"], ["Al Mizhar", "40m"],
  ["Dubai Metal", "25m"], ["Dubai Marina", "14m"], ["Umm Suqeim", "18m"], ["Nad Al Sheba", "34m"], ["Business Bay", "23m"], ["Palm Jumeirah", "15m"],
  ["Emirates Living", "12m"], ["Dubai Media City", "6m"], ["Dubai Motor City", "22m"], ["Downtown Dubai", "21m"], ["International City", "33m"], ["Sustainable City", "27m"],
  ["Jumeirah Heights", "14m"], ["Jumeirah Islands", "16m"], ["Dubai Hills Estate", "21m"], ["Arabian Ranches", "23m"], ["Dubai Science Park", "18m"], ["Dubai Healthcare City", "26m"],
  ["Dubai Hills View", "22m"], ["Sheikh Zayed Road", "9m"], ["Discovery Gardens", "16m"], ["Jumeirah Village Circle", "20m"], ["Dubai Knowledge Park", "7m"], ["Dubai Design District (d3)", "26m"],
  ["Dubai Investment Park (DIP)", "24m"], ["Dubai Production City (IMPZ)", "24m"], ["Jumeirah Lakes Towers (JLT)", "12m"], ["Jumeirah Beach Residence (JBR)", "16m"],
];

// Verified Google Business Profile embed (pins the actual "MacBook Repair Dubai" listing,
// not a generic building search) + the public profile short-link for reviews/directions.
const MAPS_EMBED = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.1195460985773!2d55.1561949!3d25.097814300000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43c31b8db573%3A0xb173481de4640678!2sMacBook%20Repair%20Dubai!5e0!3m2!1sen!2sae!4v1780646408543!5m2!1sen!2sae";
const GBP_URL = "https://maps.app.goo.gl/X5easM2GnxoZnqhU7";
const DIRECTIONS = "https://www.google.com/maps/dir/?api=1&destination=Concord+Tower+Dubai+Media+City";

export default function Home() {
  // All JSON-LD is rendered SERVER-SIDE below (as JSX <script> in the FAQ block) so it
  // reaches the static HTML Google indexes. useSeo here no longer injects schema (that was
  // client-only via useEffect and never reached the prerendered HTML).
  useSeo({ title: TITLE, description: DESC, path: "/" }, []);

  return (
    <PageShell>
      <div className="bg-bg-alt text-text -mb-[4rem]">

        {/* ── Hero ───────────────────────────────────────────────── */}
        <section data-hero-tone="light" className="relative overflow-hidden pt-[120px] pb-3xl md:pb-4xl">
          <div aria-hidden className="pointer-events-none absolute -top-32 -left-24 h-[34rem] w-[34rem] rounded-full bg-accent/15 blur-3xl" />
          <div aria-hidden className="pointer-events-none absolute top-1/3 -right-16 h-[26rem] w-[26rem] rounded-full bg-accent/10 blur-3xl" />
          <div className="relative mx-auto max-w-content px-5 md:px-6 grid gap-2xl md:grid-cols-12 items-start">
            <div className="md:col-span-7">
              <p className="m-0 inline-flex items-center gap-2 rounded-full border border-border bg-bg-card px-3.5 py-1.5 text-[13px] font-medium text-text-muted">
                <span className="relative flex h-2 w-2" aria-hidden>
                  <span className="absolute inline-flex h-full w-full motion-safe:animate-ping rounded-full bg-accent opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                Independent Apple Repair · Dubai Media City · Since 2004
              </p>
              <h1 className="mt-lg text-[clamp(2rem,4.6vw,3.4rem)] font-bold leading-[1.08] tracking-[-0.01em] text-text">
                MacBook Repair Dubai - <span className="text-accent">Same-Day Service</span> by Independent Apple Specialists
              </h1>
              <p className="mt-lg max-w-[60ch] text-[17px] leading-relaxed text-text-muted">
                Cracked screen, swollen battery, a liquid spill or a Mac that won't boot? We fix it, usually the same
                day. Independent Apple repair in Dubai Media City since 2004, on every model from the 2010 Intel Air
                through the latest M5 - both Air and Pro.
              </p>
              <p className="mt-md max-w-[60ch] text-[15px] leading-relaxed text-text-faint">
                {linkify(
                  "Free diagnosis and a written quote on WhatsApp before any work starts, backed by a 90-day warranty on every MacBook repair. We handle screen replacement, battery replacement, keyboard repair, water-damage recovery and board-level logic board work."
                )}{" "}
                Free pickup and delivery anywhere on Dubai mainland, or visit the workshop in Concord Tower, Al Sufouh -
                near The Palm and Media City Metro.
              </p>
              <div className="mt-lg flex items-center gap-2.5">
                <span className="flex items-center gap-0.5" aria-hidden>
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} size={17} className="fill-accent text-accent" />
                  ))}
                </span>
                <span className="text-[14px] text-text-muted">
                  <strong className="text-text">{REVIEW_AVERAGE.toFixed(1)}</strong> from {REVIEW_COUNT}+ Google reviews
                </span>
              </div>
              <div className="mt-xl flex flex-wrap gap-sm">
                <Button asChild variant="whatsapp" size="lg">
                  <a href={NAP.whatsappUrl} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden /> WhatsApp a Technician</a>
                </Button>
                <Button asChild size="lg" variant="secondary" className="border border-border-strong bg-bg-card text-text hover:bg-bg-alt">
                  <a href={`tel:${NAP.phoneE164}`}><Phone aria-hidden /> Call {NAP.phoneDisplay}</a>
                </Button>
              </div>
              <div className="mt-xl flex flex-wrap gap-2.5">
                {HERO_FEATURES.map((f) => (
                  <span key={f} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-bg-card px-3 py-1.5 text-[13px] font-medium text-text-muted">
                    <Check size={14} className="text-accent" aria-hidden /> {f}
                  </span>
                ))}
              </div>
            </div>

            {/* hero image + floating spec card */}
            <div className="md:col-span-5 relative">
              <div className="relative overflow-hidden rounded-2xl border border-border shadow-2xl">
                <ResponsiveImage
                  src="/images/real/lab/macbook-pro-internals-clean-dubai.jpg"
                  alt="MacBook Repair Dubai technician servicing a MacBook Pro cooling fan and logic board at the Media City workshop"
                  title="MacBook logic board and fan repair in Dubai"
                  width={1600}
                  height={1200}
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority
                  className="block"
                  imgClassName="w-full h-[280px] md:h-[420px] object-cover"
                />
                <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg-alt/80 via-bg-alt/10 to-transparent" />
                <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-[12px] font-medium text-white backdrop-blur-md">
                  <span className="relative flex h-2 w-2" aria-hidden>
                    <span className="absolute inline-flex h-full w-full motion-safe:animate-ping rounded-full bg-accent opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                  </span>
                  Real repair in progress
                </span>
              </div>
              <Reveal delay={120} className="relative z-10 -mt-10 mx-3 rounded-2xl border border-border bg-bg-card/90 p-md shadow-lg backdrop-blur-xl md:mx-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-accent"><Wrench size={20} aria-hidden /></span>
                  <div className="min-w-0">
                    <p className="m-0 font-semibold leading-tight text-text">Get a price in minutes</p>
                    <p className="m-0 text-[12px] text-text-faint">Free diagnosis · no fix, no charge</p>
                  </div>
                </div>
                <ul className="mt-md grid grid-cols-2 gap-x-4 gap-y-2.5 list-none p-0 border-t border-border pt-md">
                  {[["Price", "From AED 49"], ["Diagnosis", "20 minutes"], ["Repair time", "3 - 4 hours"], ["Pickup", "FREE in Dubai"]].map(([k, v]) => (
                    <li key={k} className="flex flex-col text-[13.5px]">
                      <span className="text-text-faint">{k}</span>
                      <span className="font-semibold text-text">{v}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-md flex items-center justify-between gap-2 border-t border-border pt-md text-[12.5px]">
                  <span className="inline-flex items-center gap-1.5 text-text-faint"><Clock size={13} aria-hidden /> Mon-Sat · 9 am - 10 pm</span>
                  <a href={NAP.whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-semibold text-accent hover:underline"><MessageCircle size={13} aria-hidden /> WhatsApp now</a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── Answer-first capsule (AEO/BLUF) ────────────────────────
            40-60 word, entity-dense, pronoun-free quotable answer in the first
            screen so AI Overviews / ChatGPT / Perplexity can lift it cleanly.
            The .quick-answer wrapper is the SpeakableSpecification xpath target. */}
        <QuickAnswer
          tone="dark"
          question="Where can I get my MacBook repaired in Dubai?"
          answer="MacBook Repair Dubai is an independent Apple repair specialist in Concord Tower, Dubai Media City, working since 2004. The workshop repairs every Mac, iPhone and iPad — Intel through M5 — with same-day screen, battery, keyboard and water-damage service, free diagnosis, free citywide pickup, and a 90-day written warranty. All prices are VAT-inclusive and confirmed on WhatsApp before any work begins."
        />

        {/* ── Trust strip ────────────────────────────────────────── */}
        <section className="border-y border-border bg-bg-alt">
          <div className="mx-auto max-w-content px-5 md:px-6 py-md flex flex-wrap items-center justify-center gap-x-xl gap-y-2 text-[13.5px] text-text-muted">
            <Link to="/warranty" className="inline-flex items-center gap-2 transition-colors hover:text-accent"><BadgeCheck size={16} className="text-accent" aria-hidden /> 90-day written warranty</Link>
            <span className="inline-flex items-center gap-2"><Check size={16} className="text-accent" aria-hidden /> Free diagnosis · no fix, no charge</span>
            <span className="inline-flex items-center gap-2"><Clock size={16} className="text-accent" aria-hidden /> Independent Apple specialist since 2004</span>
            <Link to="/about" className="inline-flex items-center gap-2 transition-colors hover:text-accent"><Users size={16} className="text-accent" aria-hidden /> Led by Abdul Aziz · 21 years at the bench</Link>
            <Link to="/contact" className="inline-flex items-center gap-2 transition-colors hover:text-accent"><Truck size={16} className="text-accent" aria-hidden /> Free pickup &amp; delivery in Dubai</Link>
          </div>
        </section>

        {/* ── Stats ──────────────────────────────────────────────── */}
        <section className="border-y border-border bg-bg-alt">
          <div className="mx-auto max-w-content px-5 md:px-6 py-2xl grid gap-xl grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 text-center">
            {STATS.map((s) => (
              <Reveal key={s.label}>
                <p className="mono text-[28px] md:text-[32px] font-bold text-text leading-none mb-1"><CountUp value={s.value} /></p>
                <p className="text-[13px] text-text-muted m-0">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── Hours + price/service details ──────────────────────── */}
        <section className="mx-auto max-w-content px-5 md:px-6 py-3xl grid gap-lg md:grid-cols-2">
          <Card>
            <h2 className="m-0 mb-md text-text text-[24px]">Business Hours</h2>
            <p className="m-0 text-text-muted"><strong className="text-text">Monday - Saturday:</strong> 09:00 AM - 10:00 PM</p>
            <p className="m-0 mt-2 text-text-muted"><strong className="text-text">Sunday:</strong> Closed - WhatsApp support stays open and we'll book you in for Monday.</p>
          </Card>
          <Card>
            <h2 className="m-0 mb-md text-text text-[24px]">Price &amp; Service Details</h2>
            <ul className="grid gap-2 list-none p-0 m-0 text-[15px] text-text-muted">
              <li className="flex items-start gap-2"><Wallet size={18} className="text-accent mt-0.5 shrink-0" aria-hidden /> <span><strong className="text-text">Price:</strong> Starts from AED 49</span></li>
              <li className="flex items-start gap-2"><Search size={18} className="text-accent mt-0.5 shrink-0" aria-hidden /> <span><strong className="text-text">Diagnosis time:</strong> 20 minutes</span></li>
              <li className="flex items-start gap-2"><Clock size={18} className="text-accent mt-0.5 shrink-0" aria-hidden /> <span><strong className="text-text">Repair time:</strong> 3 - 4 hours (depending on the problem)</span></li>
              <li className="flex items-start gap-2"><Truck size={18} className="text-accent mt-0.5 shrink-0" aria-hidden /> <span><strong className="text-text">Site visit charge:</strong> FREE</span></li>
            </ul>
            <p className="m-0 mt-md text-[12.5px] text-text-faint">Pricing reviewed {LAST_UPDATED} · VAT-inclusive · diagnosis always free.</p>
          </Card>
        </section>

        {/* ── Models we repair ───────────────────────────────────── */}
        <section className="bg-bg-alt border-y border-border">
          <div className="mx-auto max-w-content px-5 md:px-6 py-4xl">
            <SectionHead eyebrow="Mac models" title="Models We Repair" />
            <div className="grid gap-lg grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
              {MODELS.map((m) => (
                <Link key={m.label} to={m.href} className="group flex flex-col items-center justify-center rounded-2xl border border-border bg-bg-card p-lg text-center transition-all duration-200 motion-safe:hover:-translate-y-1 hover:border-accent/40 hover:bg-bg-alt">
                  <Laptop size={22} className="mb-2 text-accent" aria-hidden />
                  <span className="font-semibold text-[15px] text-text group-hover:text-accent">{m.label}</span>
                </Link>
              ))}
            </div>
            <div className="mt-xl grid gap-lg sm:grid-cols-2">
              <Card><p className="m-0 font-semibold text-text text-[17px]">MacBook Air 13", 15" Repair</p><p className="m-0 mt-1 text-text-faint text-[14px]">Intel, M1, M2, M3, M4 chip</p></Card>
              <Card><p className="m-0 font-semibold text-text text-[17px]">MacBook Pro 14", 16" Repair</p><p className="m-0 mt-1 text-text-faint text-[14px]">Intel, M5, M5 Pro, M5 Max chip</p></Card>
            </div>
          </div>
        </section>

        {/* ── Browse Apple repair by model ───────────────────────── */}
        <section className="mx-auto max-w-content px-5 md:px-6 py-4xl">
          <SectionHead eyebrow="Find your exact model" title="Browse Apple Repair by Model" intro="Pick your exact MacBook, iMac, iPhone or iPad for model-specific pricing, parts and turnaround - every Apple device we service in Dubai, Intel through M5." />
          <div className="grid gap-lg sm:grid-cols-2 lg:grid-cols-4">
            {MODEL_DIRECTORY.map((col) => (
              <Card key={col.group}>
                <h3 className="m-0 mb-3 text-text text-[16px]"><Link to={col.hub} className="hover:text-accent">{col.group} repair</Link></h3>
                <ul className="grid gap-1.5 list-none p-0 m-0">
                  {col.items.map((it) => (
                    <li key={it.href}><Link to={it.href} className="text-[14px] text-text-muted hover:text-accent">{it.label} repair in Dubai</Link></li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>

        {/* ── Other devices ──────────────────────────────────────── */}
        <section className="mx-auto max-w-content px-5 md:px-6 py-4xl">
          <SectionHead eyebrow="Beyond Apple" title="Other Devices We Repair" intro="Laptops · Desktops · Displays · Custom Built PCs" />
          <div className="grid gap-lg md:grid-cols-3">
            {OTHER_DEVICES.map((o) => (
              <Card key={o.t}><h3 className="m-0 mb-2 text-text text-[18px]">{o.t}</h3><p className="m-0 text-[14px] text-text-muted leading-relaxed">{o.d}</p></Card>
            ))}
          </div>
        </section>

        {/* ── Repair any Apple device (device hubs) ───────────────── */}
        <section className="bg-bg-alt border-y border-border">
          <div className="mx-auto max-w-content px-5 md:px-6 py-4xl">
            <SectionHead eyebrow="Beyond the MacBook" title="We Repair Every Apple Device in Dubai" intro="MacBook is our speciality, but our bench covers the whole Apple line-up - Mac, iPhone, iPad, iMac and Apple displays, in and out of warranty." />
            <div className="flex flex-wrap gap-2.5">
              {DEVICE_HUB.map((l) => (
                <Link key={l.href} to={l.href} className="inline-flex items-center gap-2 rounded-full border border-border bg-bg-card px-4 py-2 text-[14px] text-text-muted transition-colors hover:border-accent/40 hover:text-text">
                  <ArrowRight size={14} className="text-accent shrink-0" aria-hidden /> {l.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Services offered ───────────────────────────────────── */}
        <section className="bg-bg-alt border-y border-border">
          <div className="mx-auto max-w-content px-5 md:px-6 py-4xl">
            <SectionHead eyebrow="What we fix" title="Services Offered at Our Apple MacBook Repair in Dubai" />
            <p className="mx-auto mb-2xl max-w-[80ch] text-[15px] leading-relaxed text-text-muted">
              {linkify(
                "From MacBook screen repair and battery replacement to logic board repair, water damage recovery, keyboard replacement, charging port and trackpad faults, our Dubai Media City workshop fixes every issue with a 90-day warranty - and recovers your files with professional data recovery when a drive or board fails."
              )}
            </p>
            <div className="grid gap-lg md:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((s, i) => (
                <Reveal key={s.t} delay={(i % 3) * 60}>
                  {s.href ? (
                    <Link
                      to={s.href}
                      className="group flex h-full flex-col rounded-2xl border border-border bg-bg-card p-lg transition-all duration-200 motion-safe:hover:-translate-y-1 hover:border-accent/40 hover:bg-bg-alt focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      <h3 className="m-0 mb-2 text-text text-[18px] transition-colors group-hover:text-accent">{s.t}</h3>
                      <p className="m-0 text-[14px] text-text-muted leading-relaxed">{s.d}</p>
                      <span className="mt-auto pt-md inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-accent">
                        Learn more
                        <ArrowRight size={14} aria-hidden className="transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </Link>
                  ) : (
                    <Card className="h-full">
                      <h3 className="m-0 mb-2 text-text text-[18px]">{s.t}</h3>
                      <p className="m-0 text-[14px] text-text-muted leading-relaxed">{s.d}</p>
                    </Card>
                  )}
                </Reveal>
              ))}
            </div>
            <CtaRow />
          </div>
        </section>

        {/* ── Upgrades ───────────────────────────────────────────── */}
        <section className="mx-auto max-w-content px-5 md:px-6 py-4xl">
          <SectionHead eyebrow="Make an old Mac fast again" title="MacBook Upgraded Services in Dubai" intro="When your MacBook starts acting up, it may need a system upgrade. We offer many upgrade options to boost your MacBook's speed, storage and overall performance - optimised with the latest technology." />
          <div className="grid gap-lg grid-cols-2 lg:grid-cols-4">
            {UPGRADES.map((u) => (
              <Link key={u.label} to={u.href || "#"} className="group rounded-2xl border border-border bg-bg-card p-lg transition-colors hover:border-accent/40 hover:bg-bg-alt">
                <Cpu size={20} className="mb-2 text-accent" aria-hidden />
                <span className="font-semibold text-[15px] text-text group-hover:text-accent">{u.label}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Discounts ──────────────────────────────────────────── */}
        <section className="bg-bg-alt border-y border-border">
          <div className="mx-auto max-w-content px-5 md:px-6 py-4xl">
            <SectionHead eyebrow="Save more" title="Discounted MacBook Repairs Dubai" intro="We provide reasonable repairs and discounts for students, teachers and military personnel. We do not compromise on quality and offer high-quality MacBook repair services in Dubai." />
            <div className="mb-xl flex flex-wrap gap-2.5">
              {OFFERS.map((o) => (
                <span key={o} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-bg-card px-3 py-1.5 text-[13px] text-text-muted"><Check size={14} className="text-accent" aria-hidden /> {o}</span>
              ))}
            </div>
            <div className="grid gap-lg md:grid-cols-2 lg:grid-cols-3">
              {DISCOUNTS.map((d) => (
                <Card key={d.t}><h3 className="m-0 mb-2 text-text text-[17px]">{d.t}</h3><p className="m-0 text-[14px] text-text-muted leading-relaxed">{d.d}</p></Card>
              ))}
            </div>
          </div>
        </section>

        {/* ── Insurance ──────────────────────────────────────────── */}
        <section className="mx-auto max-w-content px-5 md:px-6 py-4xl">
          <SectionHead eyebrow="Protect your device" title="Complete Apple Laptop Insurance in Dubai" intro="We do not just repair your devices but also offer MacBook insurance to protect them from accidental damage or emergency repairs - liquid damage, broken screens, software crashes or hardware failure. We provide full-coverage plans for individuals and custom insurance packages for larger companies." />
          <div className="grid gap-lg md:grid-cols-2 lg:grid-cols-4">
            {INSURANCE.map((i) => (
              i.href ? (
                <Link key={i.t} to={i.href} className="group flex h-full flex-col rounded-2xl border border-border bg-bg-card p-lg transition-all duration-200 motion-safe:hover:-translate-y-1 hover:border-accent/40 hover:bg-bg-alt focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
                  <h3 className="m-0 mb-2 text-text text-[17px] transition-colors group-hover:text-accent">{i.t}</h3>
                  <p className="m-0 text-[14px] text-text-muted leading-relaxed">{i.d}</p>
                  <span className="mt-auto pt-md inline-flex items-center gap-1.5 text-[13px] font-semibold text-accent">Learn more <ArrowRight size={14} aria-hidden className="transition-transform group-hover:translate-x-0.5" /></span>
                </Link>
              ) : (
                <Card key={i.t}><h3 className="m-0 mb-2 text-text text-[17px]">{i.t}</h3><p className="m-0 text-[14px] text-text-muted leading-relaxed">{i.d}</p></Card>
              )
            ))}
          </div>
          <p className="mt-xl text-[15px] text-text-muted m-0">See cover types and how plans are quoted on our <Link to="/macbook-insurance-dubai" className="text-accent hover:underline">MacBook insurance in Dubai</Link> page.</p>
        </section>

        {/* ── Common issues ──────────────────────────────────────── */}
        <section className="bg-bg-alt border-y border-border">
          <div className="mx-auto max-w-content px-5 md:px-6 py-4xl">
            <SectionHead eyebrow="Sound familiar?" title="Common MacBook Issues We Fix" />
            <div className="grid gap-lg md:grid-cols-2 lg:grid-cols-3">
              {COMMON_ISSUES.map((c) => (
                c.href ? (
                  <Link
                    key={c.t}
                    to={c.href}
                    className="group flex h-full flex-col rounded-2xl border border-border bg-bg-card p-lg transition-all duration-200 motion-safe:hover:-translate-y-1 hover:border-accent/40 hover:bg-bg-alt focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    <h3 className="m-0 mb-2 text-text text-[17px] transition-colors group-hover:text-accent">{c.t}</h3>
                    <p className="m-0 text-[14px] text-text-muted leading-relaxed">{c.d}</p>
                    <span className="mt-auto pt-md inline-flex items-center gap-1.5 text-[13px] font-semibold text-accent">
                      Learn more
                      <ArrowRight size={14} aria-hidden className="transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                ) : (
                  <Card key={c.t}>
                    <h3 className="m-0 mb-2 text-text text-[17px]">{c.t}</h3>
                    <p className="m-0 text-[14px] text-text-muted leading-relaxed">{c.d}</p>
                  </Card>
                )
              ))}
            </div>
          </div>
        </section>

        {/* ── Near me ────────────────────────────────────────────── */}
        <section className="mx-auto max-w-content px-5 md:px-6 py-4xl">
          <SectionHead eyebrow="Right around the corner" title="Looking for a MacBook Repair Near Me? Get Quick Fixes by Certified Technicians!" />
          <div className="max-w-[78ch] space-y-md text-[16px] text-text-muted leading-relaxed">
            <p className="m-0">If you are searching for a MacBook repair shop in Dubai nearby - within 8.1 km - or wondering where to get your MacBook fixed, we are located at your convenience and provide a variety of repair services for your impaired or defective MacBook devices. Whether you have a broken screen, battery issues, motherboard or software glitches, our experienced technicians are just around the corner to diagnose and fix your device with genuine parts.</p>
            <p className="m-0">We offer onsite services that fit your schedule. Don't let a faulty MacBook hold you back - contact us now for fast, professional repairs near you!</p>
          </div>
        </section>

        {/* ── MacBook repair near you in Dubai (area pages) ───────── */}
        <section className="mx-auto max-w-content px-5 md:px-6 py-4xl">
          <SectionHead eyebrow="Local to you" title="MacBook Repair Near You in Dubai" intro="We collect, repair and return across Dubai free of charge. Tap your area for local turnaround times and pickup details." />
          <div className="grid gap-lg grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
            {AREA_PAGES.map((a) => (
              <Link key={a.href} to={a.href} className="group flex items-center gap-2 rounded-2xl border border-border bg-bg-card p-lg transition-all duration-200 motion-safe:hover:-translate-y-1 hover:border-accent/40 hover:bg-bg-alt">
                <MapPin size={18} className="text-accent shrink-0" aria-hidden />
                <span className="font-semibold text-[15px] text-text group-hover:text-accent">MacBook repair in {a.label}</span>
              </Link>
            ))}
          </div>
          <p className="mt-lg text-[14px] text-text-muted m-0">Outside these areas? <Link to="/macbook-repair-near-me" className="text-accent hover:underline">See MacBook repair near me</Link> - we cover 60+ Dubai communities.</p>
        </section>

        {/* ── MacBook repair across the UAE (other emirates) ────── */}
        <section className="bg-bg-alt border-y border-border">
          <div className="mx-auto max-w-content px-5 md:px-6 py-4xl">
            <SectionHead eyebrow="Beyond Dubai" title="MacBook Repair Across the UAE" intro="Outside Dubai? We don't have branches elsewhere — we collect your MacBook by free courier from any emirate, repair it at our Media City workshop, and return it. Same-day from Sharjah & Ajman; 1–2 days by courier further out." />
            <div className="grid gap-lg grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
              {[
                { label: "Sharjah",        href: "/macbook-repair-sharjah" },
                { label: "Ajman",          href: "/macbook-repair-ajman" },
                { label: "Abu Dhabi",      href: "/macbook-repair-abu-dhabi" },
                { label: "Al Ain",         href: "/macbook-repair-al-ain" },
                { label: "Ras Al Khaimah", href: "/macbook-repair-ras-al-khaimah" },
                { label: "Fujairah",       href: "/macbook-repair-fujairah" },
                { label: "Umm Al Quwain",  href: "/macbook-repair-umm-al-quwain" },
                { label: "Khor Fakkan",    href: "/macbook-repair-khor-fakkan" },
                { label: "Kalba",          href: "/macbook-repair-kalba" },
              ].map((c) => (
                <Link key={c.href} to={c.href} className="group flex items-center gap-2 rounded-2xl border border-border bg-bg-card p-lg transition-all duration-200 motion-safe:hover:-translate-y-1 hover:border-accent/40 hover:bg-bg-alt">
                  <Truck size={18} className="text-accent shrink-0" aria-hidden />
                  <span className="font-semibold text-[15px] text-text group-hover:text-accent">MacBook repair in {c.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Onsite ─────────────────────────────────────────────── */}
        <section className="bg-bg-alt border-y border-border">
          <div className="mx-auto max-w-content px-5 md:px-6 py-4xl">
            <SectionHead eyebrow="We come to you" title="Onsite MacBook Repair and Support" />
            <div className="max-w-[78ch] space-y-md text-[16px] text-text-muted leading-relaxed">
              <p className="m-0">If you need support for your malfunctioning MacBook but don't have the time to leave your location, we have the perfect solution! We offer fast and reliable MacBook repairs right at your doorstep, whether it's your office or home. Our experienced technician will come to your location, pick up your device, repair it, and return it safely to you.</p>
              <p className="m-0">Whether you are experiencing software crashes, hardware failures or need upgrades, our expert technicians provide efficient troubleshooting, repairs and maintenance. Schedule your onsite MacBook support today and enjoy quick, professional service at your convenience.</p>
              <p className="m-0">See how collection works and which areas we cover on our <Link to="/onsite-macbook-repair-dubai" className="text-accent hover:underline">onsite MacBook repair in Dubai</Link> page.</p>
            </div>
            <CtaRow />
          </div>
        </section>

        {/* ── AppleCare & out-of-warranty ────────────────────────── */}
        <section className="mx-auto max-w-content px-5 md:px-6 py-4xl">
          <SectionHead eyebrow="In or out of warranty" title="AppleCare and Out-of-Warranty Repairs" />
          <div className="grid gap-lg md:grid-cols-2 mb-xl">
            <Card>
              <h3 className="m-0 mb-2 text-text text-[18px]">AppleCare &amp; In-Warranty Macs</h3>
              <p className="m-0 text-[14px] text-text-muted leading-relaxed">We're an <strong className="text-text">independent Apple repair specialist - not an Apple Authorised Service Provider</strong>. If your Mac is still covered by Apple's warranty or AppleCare, we'll tell you honestly when an Apple Store claim is the better route so you don't risk your cover. For everything else we repair AppleCare-expired and out-of-warranty Macs using genuine parts where available and high-grade compatible parts otherwise - all backed by our own 90-day written warranty.</p>
              <p className="m-0 mt-md text-[13.5px] text-text-muted">More on <Link to="/applecare-macbook-repair-dubai" className="text-accent hover:underline">AppleCare and in-warranty MacBook repair</Link>.</p>
            </Card>
            <Card>
              <h3 className="m-0 mb-2 text-text text-[18px]">Out-of-Warranty Repairs</h3>
              <p className="m-0 text-[14px] text-text-muted leading-relaxed">If your AppleCare has expired, we provide reliable out-of-warranty MacBook repairs. Our expert technicians diagnose your MacBook issues, provide solutions for software problems, and offer high-quality replacement services at reasonable prices. We address common issues such as:</p>
              <ul className="mt-sm grid gap-1.5 sm:grid-cols-2 list-none p-0 text-[13.5px] text-text-muted">
                {OOW_ISSUES.map((i) => <li key={i} className="flex items-start gap-2"><Check size={15} className="text-accent mt-0.5 shrink-0" aria-hidden /> {i}</li>)}
              </ul>
              <p className="m-0 mt-md text-[13.5px] text-text-muted">More on <Link to="/out-of-warranty-apple-repair-dubai" className="text-accent hover:underline">out-of-warranty Apple repair</Link>, <Link to="/apple-repair-programs-dubai" className="text-accent hover:underline">Apple repair programmes &amp; recalls</Link>, or <Link to="/where-to-repair-macbook-dubai" className="text-accent hover:underline">where to repair your MacBook in Dubai</Link>.</p>
            </Card>
          </div>
          <Reveal className="overflow-x-auto rounded-2xl border border-border bg-bg-alt">
            <table className="w-full border-collapse text-left text-[13.5px] min-w-[720px]">
              <thead>
                <tr className="border-b border-border text-accent">
                  <th className="px-md py-md font-semibold">Service</th>
                  <th className="px-md py-md font-semibold">Description</th>
                  <th className="px-md py-md font-semibold">Benefits</th>
                  <th className="px-md py-md font-semibold">Eligibility</th>
                </tr>
              </thead>
              <tbody>
                {APPLECARE_TABLE.map((r) => (
                  <tr key={r.s} className="border-b border-border last:border-0 align-top">
                    <td className="px-md py-sm font-semibold text-text">{r.s}</td>
                    <td className="px-md py-sm text-text-muted">{r.d}</td>
                    <td className="px-md py-sm text-text-muted">{r.b}</td>
                    <td className="px-md py-sm text-text-muted">{r.e}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </section>

        {/* ── AMC ────────────────────────────────────────────────── */}
        <section className="bg-bg-alt border-y border-border">
          <div className="mx-auto max-w-content px-5 md:px-6 py-4xl">
            <SectionHead eyebrow="Year-round care" title="Annual Maintenance Contract (AMC) for MacBook" intro="Do you need an Annual Maintenance Contract for your MacBook? We offer expert support throughout the year with customized plans to keep your device safe from malfunctioning and prevent issues before they arise. Our AMC services include:" />
            <div className="grid gap-lg md:grid-cols-2 lg:grid-cols-3">
              {AMC.map((a) => (
                a.href ? (
                  <Link key={a.t} to={a.href} className="group flex h-full flex-col rounded-2xl border border-border bg-bg-card p-lg transition-all duration-200 motion-safe:hover:-translate-y-1 hover:border-accent/40 hover:bg-bg-alt focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
                    <h3 className="m-0 mb-2 text-text text-[17px] transition-colors group-hover:text-accent">{a.t}</h3>
                    <p className="m-0 text-[14px] text-text-muted leading-relaxed">{a.d}</p>
                    <span className="mt-auto pt-md inline-flex items-center gap-1.5 text-[13px] font-semibold text-accent">Learn more <ArrowRight size={14} aria-hidden className="transition-transform group-hover:translate-x-0.5" /></span>
                  </Link>
                ) : (
                  <Card key={a.t}><h3 className="m-0 mb-2 text-text text-[17px]">{a.t}</h3><p className="m-0 text-[14px] text-text-muted leading-relaxed">{a.d}</p></Card>
                )
              ))}
            </div>
            <p className="mt-xl text-[15px] text-text-muted m-0">See full plans and pricing on our <Link to="/annual-maintenance-contract-dubai" className="text-accent hover:underline">MacBook Annual Maintenance Contract</Link> page.</p>
          </div>
        </section>

        {/* ── Why choose us ──────────────────────────────────────── */}
        <section className="mx-auto max-w-content px-5 md:px-6 py-4xl">
          <SectionHead eyebrow="The difference" title="Why Choose Us for Apple Laptop Repair in Dubai?" />
          <div className="grid gap-lg md:grid-cols-2 lg:grid-cols-4">
            {WHY_CHOOSE.map((w) => (
              <Card key={w.t}><BadgeCheck size={20} className="mb-2 text-accent" aria-hidden /><h3 className="m-0 mb-1 text-text text-[16px]">{w.t}</h3><p className="m-0 text-[13.5px] text-text-muted leading-relaxed">{w.d}</p></Card>
            ))}
          </div>
        </section>

        {/* ── Request a quote ────────────────────────────────────── */}
        <section className="bg-bg-alt border-y border-border">
          <div className="mx-auto max-w-content px-5 md:px-6 py-4xl grid gap-2xl md:grid-cols-2 items-start">
            <div>
              <SectionHead eyebrow="No obligation" title="Request a Free Quote" intro="Tell us your device and the issue. We'll reply with an honest estimate - free diagnosis, no fix, no charge." />
              <ul className="grid gap-sm list-none p-0 m-0 text-[15px] text-text-muted">
                <li className="flex items-center gap-2"><Headset size={18} className="text-accent shrink-0" aria-hidden /> 24/7 live chat &amp; WhatsApp support</li>
                <li className="flex items-center gap-2"><Truck size={18} className="text-accent shrink-0" aria-hidden /> Free pickup &amp; delivery across Dubai</li>
                <li className="flex items-center gap-2"><Users size={18} className="text-accent shrink-0" aria-hidden /> Trusted by hundreds of Dubai customers</li>
              </ul>
            </div>
            <QuoteForm />
          </div>
        </section>

        {/* ── Pricing ────────────────────────────────────────────── */}
        <section className="mx-auto max-w-content px-5 md:px-6 py-4xl">
          <SectionHead eyebrow="Transparent pricing" title="How Much Does a MacBook Repair Cost?" intro="Our repair price usually starts from AED 49, but the cost varies depending on the type of repair, the MacBook model, any additional repairs, and current discounts. Here's a general price list of common repairs." />
          <Reveal className="overflow-x-auto rounded-2xl border border-border bg-bg-alt">
            <table className="w-full border-collapse text-left text-[14px] min-w-[560px]">
              <thead>
                <tr className="border-b border-border text-accent">
                  <th className="px-lg py-md font-semibold">Repair Type</th>
                  <th className="px-lg py-md font-semibold whitespace-nowrap">Estimated Cost (AED)</th>
                  <th className="px-lg py-md font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                {PRICE_TABLE.map((p) => (
                  <tr key={p.r} className="border-b border-border last:border-0">
                    <td className="px-lg py-sm font-medium text-text">{p.r}</td>
                    <td className="px-lg py-sm mono whitespace-nowrap text-accent font-semibold">{p.c}</td>
                    <td className="px-lg py-sm text-text-muted">{p.n}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
          <p className="mt-lg text-[15px] text-text-muted m-0">See our full <Link to="/pricing" className="text-accent hover:underline">transparent MacBook repair price list</Link> - fixed quotes, no hidden fees - or get an instant figure with our <Link to="/macbook-repair-cost-calculator-dubai" className="text-accent hover:underline">MacBook repair cost calculator</Link>.</p>
        </section>

        {/* ── Sell, trade-in or recycle ──────────────────────────── */}
        <section className="bg-bg-alt border-y border-border">
          <div className="mx-auto max-w-content px-5 md:px-6 py-4xl">
            <SectionHead eyebrow="Upgrading instead?" title="Sell, Trade-In or Recycle Your Apple Device" intro="Not worth repairing, or ready for the latest model? We buy working and faulty Macs and offer trade-in credit toward your next repair or upgrade." />
            <div className="grid gap-lg md:grid-cols-3">
              {SELL_OPTIONS.map((s) => (
                <Card key={s.href}>
                  <Wallet size={20} className="mb-2 text-accent" aria-hidden />
                  <h3 className="m-0 mb-1 text-text text-[17px]"><Link to={s.href} className="hover:text-accent">{s.label}</Link></h3>
                  <p className="m-0 text-[14px] text-text-muted leading-relaxed">{s.d}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ── Expert / setup ─────────────────────────────────────── */}
        <section className="bg-bg-alt border-y border-border">
          <div className="mx-auto max-w-content px-5 md:px-6 py-4xl">
            <SectionHead eyebrow="Back to work fast" title="Expert MacBook Repairs in Dubai" />
            <div className="grid gap-lg md:grid-cols-3 mb-2xl">
              {EXPERT.map((e) => (
                <Card key={e.t}><h3 className="m-0 mb-2 text-text text-[17px]">{e.t}</h3><p className="m-0 text-[14px] text-text-muted leading-relaxed">{e.d}</p></Card>
              ))}
            </div>
            <div className="max-w-[78ch] space-y-md text-[16px] text-text-muted leading-relaxed">
              <h3 className="m-0 text-text text-[20px]">MacBook Setup and Configuration Services</h3>
              <p className="m-0">We are proud to provide reliable, quick repairs customized to your needs. Our skilled team uses high-quality parts and the latest tools to repair your MacBook to the highest standards. With transparent pricing and quick turnaround times, you won't have to wait long to return to what you love.</p>
            </div>
            <CtaRow />
          </div>
        </section>

        {/* ── Process ────────────────────────────────────────────── */}
        <section className="mx-auto max-w-content px-5 md:px-6 py-4xl">
          <SectionHead eyebrow="Simple & transparent" title="How Our MacBook Repair Process Works" />
          <ol className="grid gap-lg md:grid-cols-3 lg:grid-cols-5 list-none p-0 m-0">
            {PROCESS.map((p, i) => (
              <Reveal as="li" key={p.t} delay={i * 70} className="rounded-2xl border border-border bg-bg-card p-lg">
                <span aria-hidden className="mb-md flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 font-heading text-[18px] font-bold text-accent">{i + 1}</span>
                <p className="font-semibold text-[16px] m-0 mb-1 text-text">{p.t}</p>
                <p className="text-[13.5px] text-text-muted leading-relaxed m-0">{p.d}</p>
              </Reveal>
            ))}
          </ol>
        </section>

        {/* ── Reviews ────────────────────────────────────────────── */}
        <section className="bg-bg-alt border-y border-border">
          <div className="mx-auto max-w-content px-5 md:px-6 py-4xl">
            <div className="mb-2xl flex items-end justify-between gap-md flex-wrap">
              <div>
                <p className="mono text-[12px] uppercase tracking-wider text-accent mb-3">{REVIEW_AVERAGE.toFixed(1)} average · Google verified</p>
                <h2 className="m-0 text-text">What customers say</h2>
              </div>
              <div className="flex items-center gap-lg flex-wrap">
                <a href={GBP_URL} target="_blank" rel="noopener noreferrer" className="text-[15px] font-semibold text-accent hover:underline inline-flex items-center gap-1">Read our {REVIEW_COUNT}+ reviews on Google <ExternalLink size={14} aria-hidden /></a>
                <Link to="/reviews" className="text-[15px] font-semibold text-accent hover:underline inline-flex items-center gap-1">All reviews <ArrowRight size={15} aria-hidden /></Link>
              </div>
            </div>
            <div className="grid gap-lg md:grid-cols-2 lg:grid-cols-3">
              {REVIEWS.slice(0, 6).map((r) => (
                <Reveal key={r.name} className="flex h-full flex-col rounded-2xl border border-border bg-bg-card p-lg">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-semibold text-text">{r.name}</span>
                    <span className="flex" aria-hidden>{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={13} className="fill-star text-star" />)}</span>
                  </div>
                  <p className="mt-2 text-[14px] leading-relaxed text-text-muted m-0 flex-1">“{r.text}”</p>
                  <p className="mt-md mb-0 text-[12px] text-text-faint">{r.date} · Google review</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Popular repair guides & costs ──────────────────────── */}
        <section className="bg-bg-alt border-y border-border">
          <div className="mx-auto max-w-content px-5 md:px-6 py-4xl">
            <SectionHead eyebrow="Know before you book" title="Popular Repair Guides & Cost Breakdowns" intro="Real Dubai prices, fix-it walkthroughs and honest advice from our workshop - written by the technicians who do the repairs." />
            <div className="grid gap-x-2xl gap-y-1 md:grid-cols-2 lg:grid-cols-3">
              {GUIDES.map((g) => (
                <Link key={g.href} to={g.href} className="group flex items-start gap-2 py-2 text-[14px] text-text-muted hover:text-accent">
                  <ArrowRight size={15} className="mt-1 shrink-0 text-accent" aria-hidden /> {g.label}
                </Link>
              ))}
            </div>
            <p className="mt-lg text-[14px] text-text-muted m-0"><Link to="/blog" className="text-accent hover:underline">Browse all MacBook &amp; Apple repair guides →</Link></p>
          </div>
        </section>

        {/* ── FAQ ────────────────────────────────────────────────── */}
        <section className="mx-auto max-w-content px-5 md:px-6 py-4xl">
          <SectionHead eyebrow="Before you ask" title="Frequently Asked Questions" />
          <ul className="grid md:grid-cols-2 md:gap-x-2xl border-t border-border list-none p-0 m-0">
            {FAQS.map((f, i) => (
              <li key={i} className="border-b border-border">
                <details className="group">
                  <summary className="flex cursor-pointer items-start justify-between gap-md py-md list-none [&::-webkit-details-marker]:hidden">
                    <span className="text-[16px] md:text-[17px] font-semibold text-text">{f.q}</span>
                    <ChevronDown size={18} className="mt-1 shrink-0 text-accent transition-transform group-open:rotate-180" aria-hidden />
                  </summary>
                  <p className="pb-md text-[15px] leading-relaxed text-text-muted max-w-[70ch] m-0">{f.a}</p>
                </details>
              </li>
            ))}
          </ul>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage(FAQS)) }} />
          {/* Entity graph: Organization (#organization) + WebSite (#website) resolve the @id refs in
              localBusiness/person/webPage. WebPage carries SpeakableSpecification → .quick-answer (AEO). */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization()) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webSite()) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageWithSpeakable({ url: SITE.url, name: TITLE })) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness()) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person({ name: "Abdul Aziz", jobTitle: "Lead Repair Technician", yearsExperience: 21, knowsAbout: ["MacBook logic board repair", "Water damage recovery", "Screen replacement"], credentials: ["Apple Certified Mac Technician (ACMT)"] })) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs([{ name: "Home", path: "/" }])) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList({ name: "Apple repair services in Dubai", items: SERVICES.filter((s) => s.href).map((s) => ({ name: s.t, url: s.href as string, description: s.d })) })) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: "MacBook Repair", price: 49, url: SITE.url, warranty: "P90D", description: "MacBook Repair Dubai offers professional MacBook repair services in Dubai, including screen replacement, battery repair, and general troubleshooting. Pricing starts from 49 AED." })) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRating({ value: REVIEW_AVERAGE, count: REVIEW_COUNT })) }} />
        </section>

        {/* ── Distance / areas ───────────────────────────────────── */}
        <section className="bg-bg-alt border-y border-border">
          <div className="mx-auto max-w-content px-5 md:px-6 py-4xl">
            <SectionHead eyebrow="Free pickup across the city" title="What's the Distance Between Us?" intro="We cover 60+ Dubai communities with free pickup and delivery. Approximate distance from our Media City workshop:" />
            <div className="grid gap-x-lg gap-y-2 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 text-[14px]">
              {AREAS_DISTANCE.map(([name, dist]) => (
                <span key={name} className="flex items-center gap-2 text-text-muted">
                  <MapPin size={14} className="text-accent shrink-0" aria-hidden />
                  <span className="flex-1">{name}</span>
                  <span className="mono text-text-faint">{dist}</span>
                </span>
              ))}
            </div>
            <div className="mt-2xl grid gap-lg md:grid-cols-2 items-stretch">
              <div className="overflow-hidden rounded-2xl border border-border">
                <iframe src={MAPS_EMBED} title={`Map to ${NAP.name}`} width="100%" height="320" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="block w-full h-[320px] border-0" />
              </div>
              <div className="flex flex-col gap-md">
                <h3 className="m-0 text-text">Find us in Media City</h3>
                {/* Consolidated NAP unit (Name + Address + Phone) — matches LocalBusiness schema + GBP for local-entity consistency. */}
                <p className="flex items-start gap-sm text-[15px] text-text-muted m-0"><MapPin size={18} className="text-accent mt-1 shrink-0" aria-hidden /><span><strong className="text-text">{NAP.name}</strong><br />{NAP.street}<br />{NAP.area}<br />{NAP.city}, UAE</span></p>
                <p className="flex items-start gap-sm text-[15px] text-text-muted m-0"><Phone size={18} className="text-accent mt-1 shrink-0" aria-hidden /><a href={`tel:${NAP.phoneE164}`} className="hover:text-accent transition-colors">{NAP.phoneDisplay}</a></p>
                <p className="flex items-start gap-sm text-[14px] text-text-faint m-0"><ParkingCircle size={18} className="text-accent mt-1 shrink-0" aria-hidden /> Paid parking on-site and nearby. Across from Media City Metro.</p>
                <div className="flex flex-wrap gap-lg">
                  <a href={DIRECTIONS} target="_blank" rel="noopener noreferrer" className="inline-flex w-fit items-center gap-2 text-[14px] font-semibold text-accent hover:underline">Get directions <ExternalLink size={14} aria-hidden /></a>
                  <a href={GBP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex w-fit items-center gap-2 text-[14px] font-semibold text-accent hover:underline">View on Google <ExternalLink size={14} aria-hidden /></a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Inside our workshop (real photos) ──────────────────── */}
        <section className="mx-auto max-w-content px-5 md:px-6 py-4xl">
          <SectionHead
            eyebrow="Inside our lab"
            title="Real repairs at our Dubai workshop"
            intro="No stock photos - these are genuine MacBook, iMac and logic-board repairs on our bench in Concord Tower, Media City."
          />
          <div className="grid gap-3 grid-cols-2 lg:grid-cols-3">
            {WORKSHOP_GALLERY.map((g, i) => (
              <Reveal key={g.src} delay={i * 60}>
                <figure className="group relative m-0 overflow-hidden rounded-xl border border-border bg-bg-card">
                  <ResponsiveImage
                    src={g.src}
                    alt={g.alt}
                    title={g.title}
                    width={520}
                    height={390}
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 380px"
                    className="block"
                    imgClassName="w-full h-[160px] md:h-[230px] object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-3 text-[13px] md:text-[14px] font-medium text-white">
                    {g.title}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── Final CTA ──────────────────────────────────────────── */}
        <section className="relative overflow-hidden border-t border-border">
          <div aria-hidden className="pointer-events-none absolute -bottom-24 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-accent/18 blur-3xl" />
          <div className="relative mx-auto max-w-content px-5 md:px-6 py-4xl text-center">
            <h2 className="text-text m-0 mb-md">Contact Us!</h2>
            <p className="text-text-muted max-w-[60ch] mx-auto mb-xl text-[18px]">Contact us today to schedule your repair or get a free consultation. Our friendly team is available 24/7. Let us help you get your MacBook back in working condition.</p>
            <div className="flex flex-wrap justify-center gap-sm">
              <Button asChild variant="whatsapp" size="lg"><a href={NAP.whatsappUrl} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden /> WhatsApp Us</a></Button>
              <Button asChild size="lg" variant="secondary" className="bg-white"><a href={`tel:${NAP.phoneE164}`}><Phone aria-hidden /> Call Now</a></Button>
            </div>
          </div>
        </section>
      </div>
    <RelatedArticles path="/" />
    </PageShell>
  );
}

/* ── local helpers (dark) ──────────────────────────────────── */
function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-2xl border border-border bg-bg-card p-lg ${className}`}>{children}</div>;
}

function SectionHead({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="mb-2xl max-w-[60ch]">
      <Reveal as="p" className="mono text-[12px] uppercase tracking-wider text-accent mb-3">{eyebrow}</Reveal>
      <Reveal as="h2" className="m-0 text-text">{title}</Reveal>
      {intro && <Reveal as="p" className="mt-md text-[17px] text-text-muted leading-relaxed">{intro}</Reveal>}
    </div>
  );
}

function CtaRow() {
  return (
    <div className="mt-2xl flex flex-wrap gap-sm">
      <Button asChild variant="whatsapp" size="lg"><a href={NAP.whatsappUrl} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden /> WhatsApp Us</a></Button>
      <Button asChild size="lg" variant="secondary" className="border border-border-strong bg-bg-card text-text hover:bg-bg-alt"><a href={`tel:${NAP.phoneE164}`}><Phone aria-hidden /> Call Now</a></Button>
    </div>
  );
}

function QuoteForm() {
  const [v, setV] = useState({ first: "", last: "", email: "", phone: "", device: "", message: "" });
  const set = (k: keyof typeof v) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setV({ ...v, [k]: e.target.value });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi, I'd like a free quote.\nName: ${v.first} ${v.last}\nEmail: ${v.email}\nPhone: ${v.phone}\nDevice: ${v.device}\nIssue: ${v.message}`;
    window.open(`${NAP.whatsappUrl}?text=${encodeURIComponent(msg)}`, "_blank", "noopener,noreferrer");
  };
  const field = "w-full rounded-md border border-border bg-bg-card px-3.5 h-11 text-[15px] text-text placeholder:text-text-faint focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent";
  return (
    <form onSubmit={submit} className="rounded-2xl border border-border bg-bg-card p-lg grid gap-md">
      <div className="grid gap-md sm:grid-cols-2">
        <input className={field} placeholder="First name" value={v.first} onChange={set("first")} aria-label="First name" />
        <input className={field} placeholder="Last name" value={v.last} onChange={set("last")} aria-label="Last name" />
      </div>
      <input className={field} type="email" placeholder="Email (optional)" value={v.email} onChange={set("email")} aria-label="Email (optional)" />
      <input className={field} required placeholder="Phone number" value={v.phone} onChange={set("phone")} aria-label="Phone number" />
      <input className={field} required placeholder="Device model" value={v.device} onChange={set("device")} aria-label="Device model" />
      <textarea className={`${field} h-auto py-2.5`} rows={3} placeholder="Your message" value={v.message} onChange={set("message")} aria-label="Your message" />
      <Button type="submit" variant="whatsapp" size="lg" className="w-full"><MessageCircle aria-hidden /> Submit &amp; chat on WhatsApp</Button>
    </form>
  );
}
