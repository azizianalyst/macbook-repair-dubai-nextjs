// Home page - full content parity with the live (ranking) WordPress home page
// macbook-repair-dubai.ae, rebuilt in the dark theme. All headings, service copy,
// price tables, AppleCare table, common issues, AMC, why-choose, process, FAQs and
// the service-area list are transcribed from the live page so rankings transfer.
// Shared light blocks aren't reused here (they're light + used on other pages);
// dark equivalents are inlined. Internal links point to real routes in App.tsx.
//
// SECTION ORDER (2026-06 layout pass): conversion spine first (hero → trust →
// services → pricing → reviews → process → quote), directory/location/coverage
// clusters after. Sections were reordered and visually clustered ONLY, every H2,
// every internal link and all transcribed copy is unchanged and stays in SSR HTML.
import type { ReactNode } from "react";
import {
  Star, MapPin, ArrowRight, Check, Wrench, MessageCircle, Phone, Search,
  Cpu, Clock, Truck, BadgeCheck, ParkingCircle, ExternalLink, ChevronDown,
  Laptop, Headset, Wallet, Users, Tag,
  Monitor, BatteryCharging, Keyboard, CircuitBoard, PlugZap, MousePointer2,
  Volume2, Mic, SlidersHorizontal, Camera, Sparkles, Droplets, Fan, HardDrive,
  Bluetooth, Link2, Power, DatabaseBackup, Code2, ShieldCheck,
  MemoryStick, RefreshCw, Wifi, Gauge, Thermometer, Bug, Snowflake, Cloud, Fingerprint,
  Award, ThumbsUp, Calendar,
  GraduationCap, BookOpen, Package, Gift, Umbrella, Lock, Building2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Link } from "@/lib/router-compat";
import { PageShell } from "@/components/layout/PageShell";
import { RelatedArticles } from "@/components/blocks/RelatedArticles";
import { FAQAccordion } from "@/components/blocks/FAQAccordion";
import { QuoteForm } from "@/components/blocks/QuoteForm";
import { ResponsiveImage } from "@/components/blocks/ResponsiveImage";
import { WorkshopSlider } from "@/components/blocks/WorkshopSlider";
import { Reveal } from "@/components/blocks/Reveal";
import { Button } from "@/components/ui/button";
import { NAP, REVIEW_COUNT, REVIEW_AVERAGE, CONTENT_REVIEWED, PRICING, SITEMAP_LAST_UPDATED } from "@/content/site";
import { REVIEWS } from "@/content/reviews";
import { SITE } from "@/lib/seo";
import { itemList, service as serviceSchema, person, faqPage, localBusinessWithRating, organization, webSite, pageWithSpeakable, licensedImage } from "@/lib/schema";
import { linkifyString as linkify } from "@/lib/linkify";

// TITLE kept identical to the old ranking WordPress home (title is a ranking factor, preserve it).
// Used only by the WebPage JSON-LD below; the <title>/<meta description> themselves come from
// deriveMeta("/") in src/lib/page-meta.ts via metaForPath("/") in app/page.tsx.
const TITLE = "MacBook Repair Dubai | Independent Apple Repair Specialists";

// Visible freshness signal (AEO lever), single source in site.ts (bump there each review).
const LAST_UPDATED = CONTENT_REVIEWED;

// Hero USP chips, concrete, falsifiable claims only (generic fluff like "Friendly
// Team" reads as template filler; "Same Day" undercuts the 30-minute headline).
// Hero USP strip = the OFFER / risk-reversal facts only. Speed (30-min) and warranty
// (12-mo) live once in the dark stats strip below, so they're intentionally not repeated here.
const HERO_FEATURES = [
  { icon: Tag,    label: `Repairs from AED ${PRICING.floor}` },
  { icon: Search, label: "Free diagnosis" },
  { icon: Wallet, label: "No fix, no charge" },
  { icon: Truck,  label: "Free pickup & delivery" },
  { icon: Laptop, label: "Free loaner MacBook" },
] as const;

// Real documentary photos from our Concord Tower lab (Media City). Files live in
// /public/images/real/lab; AVIF/WebP variants via scripts/optimize-images.cjs.
const WORKSHOP_GALLERY: { src: string; alt: string; title: string }[] = [
  { src: "/images/real/team/macbook-bench-repairs-dubai.jpg", title: "MacBook repairs in progress", alt: "Multiple MacBook Pro repairs in progress on the bench at MacBook Repair Dubai in Dubai Media City" },
  { src: "/images/real/team/technician-support-call-dubai.jpg", title: "Customer support on WhatsApp & phone", alt: "Technician on a customer support call while diagnosing a MacBook Air at MacBook Repair Dubai, Dubai Media City" },
  { src: "/images/real/lab/macbook-pro-internals-topdown-dubai.jpg", title: "MacBook Pro logic board & fans", alt: "MacBook Pro opened on the bench showing logic board, twin fans and battery during repair in Dubai" },
  { src: "/images/real/lab/macbook-full-internals-dubai.jpg", title: "Water-damage internal repair", alt: "MacBook bottom case removed showing the full internals during a water-damage repair in Dubai" },
  { src: "/images/real/lab/macbook-cooling-fan-macro-dubai.jpg", title: "MacBook fan cleaning", alt: "Close-up of a MacBook cooling fan during a fan-cleaning and overheating service" },
  { src: "/images/real/lab/macbook-battery-internals-dubai.jpg", title: "MacBook battery replacement", alt: "MacBook battery and logic board exposed during a battery replacement in Dubai" },
  { src: "/images/real/lab/imac-internals-teardown-dubai.jpg", title: "iMac screen & board repair", alt: "iMac opened up for screen and logic board repair in Dubai" },
  { src: "/images/real/lab/repair-workbench-dubai.jpg", title: "Our Media City workspace", alt: "Our Apple repair workspace at Concord Tower, Media City, Dubai" },
];

// Each stat states a UNIQUE fact, warranty/diagnosis/Abdul Aziz live in the link
// row beneath, so nothing in this band says the same thing twice.
// In-page anchor chips (trust band), ids live on the matching sections below.
const PAGE_ANCHORS: { label: string; href: string }[] = [
  { label: "Repair prices", href: "#pricing" },
  { label: "Customer reviews", href: "#reviews" },
  { label: "Free quote", href: "#quote" },
  { label: "Service areas", href: "#areas" },
  { label: "FAQ", href: "#faq" },
];

// Apple-lineup-style tile images (white background, /public/images/devices, AVIF/WebP variants).
// *-product.jpg renders: studio-style product shots generated in-house (June 2026)
// with accurate device proportions. NOT Apple's copyrighted marketing photos.
const MODELS: { label: string; href: string; img: string; alt: string }[] = [
  { label: "MacBook Air",  href: "/macbook-air-repair-dubai",  img: "/images/devices/macbook-air-product.jpg",  alt: "MacBook Air repair in Dubai - slim silver MacBook Air, 13 and 15 inch, M1 to M5" },
  { label: "MacBook Pro",  href: "/macbook-pro-repair-dubai",  img: "/images/devices/macbook-pro-product.jpg",  alt: "MacBook Pro repair in Dubai - space grey MacBook Pro, 14 and 16 inch, M1 to M5 Pro and Max" },
  { label: "iMac",         href: "/imac-repair-dubai",         img: "/images/devices/imac-product.jpg",         alt: "iMac repair in Dubai - 24-inch Apple iMac all-in-one desktop" },
  { label: "Mac Pro",      href: "/mac-pro-repair-dubai",      img: "/images/devices/mac-pro-product.jpg",      alt: "Mac Pro repair in Dubai - Apple Mac Pro tower workstation with lattice front" },
  { label: "Mac Mini",     href: "/mac-mini-repair-dubai",     img: "/images/devices/mac-mini-product.jpg",     alt: "Mac mini repair in Dubai - compact Apple Mac mini desktop" },
  { label: "Mac Studio",   href: "/mac-studio-repair-dubai",   img: "/images/devices/mac-studio-product.jpg",   alt: "Mac Studio repair in Dubai - Apple Mac Studio desktop with front ports" },
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
  { label: "MacBook won't charge fix", href: "/macbook-wont-charge-dubai" },
  { label: "MacBook overheating & shutdown fix", href: "/macbook-overheating-shutting-down-dubai" },
  { label: "MacBook kernel panic repair", href: "/macbook-kernel-panic-dubai" },
  { label: "Corporate & business MacBook repair", href: "/corporate-macbook-repair-dubai" },
  { label: "Apple Watch repair", href: "/apple-watch-repair-dubai" },
];

const AREA_PAGES: { label: string; href: string }[] = [
  { label: "Dubai Marina", href: "/macbook-repair-dubai-marina" },
  { label: "Downtown Dubai", href: "/macbook-repair-downtown-dubai" },
  { label: "Al Barsha", href: "/macbook-repair-barsha" },
  { label: "Palm Jumeirah", href: "/macbook-repair-palm-jumeirah" },
  { label: "Deira", href: "/macbook-repair-deira" },
  { label: "Bur Dubai", href: "/macbook-repair-bur-dubai" },
  { label: "Karama", href: "/macbook-repair-karama" },
  { label: "Mirdif", href: "/macbook-repair-mirdif" },
  { label: "Business Bay", href: "/macbook-repair-business-bay" },
  { label: "JBR", href: "/macbook-repair-jbr" },
  { label: "JLT", href: "/macbook-repair-jlt" },
  { label: "DIFC", href: "/macbook-repair-difc" },
  { label: "Jumeirah", href: "/macbook-repair-jumeirah" },
  { label: "Dubai Silicon Oasis", href: "/macbook-repair-silicon-oasis" },
  { label: "Dubai Internet City", href: "/macbook-repair-internet-city" },
  { label: "Al Sufouh", href: "/macbook-repair-al-sufouh" },
  { label: "Barsha Heights", href: "/macbook-repair-barsha-heights" },
  { label: "The Greens", href: "/macbook-repair-the-greens" },
  { label: "JVC", href: "/macbook-repair-jvc" },
  { label: "Dubai Hills", href: "/macbook-repair-dubai-hills" },
  { label: "Discovery Gardens", href: "/macbook-repair-discovery-gardens" },
  { label: "Motor City", href: "/macbook-repair-motor-city" },
  { label: "Production City", href: "/macbook-repair-production-city" },
  { label: "Arabian Ranches", href: "/macbook-repair-arabian-ranches" },
  { label: "Emirates Living", href: "/macbook-repair-emirates-living" },
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
  { label: "Sell your MacBook in Dubai", href: "/sell-macbook-dubai" },
  { label: "Sell a faulty MacBook", href: "/sell-faulty-macbook-dubai" },
  { label: "Trade in your MacBook", href: "/trade-in-macbook-dubai" },
  { label: "MacBook Pro M4 with Thunderbolt 5 & a portable monitor", href: "/macbook-pro-m4-with-thunderbolt-5-and-portable-monitor" },
  { label: "MacBook Pro M1 kernel panic - closing-lid crash fix", href: "/blog/macbook-pro-m1-kernel-panic-dubai" },
  { label: "MacBook Pro M2 Wi-Fi dropping after sleep - fix", href: "/blog/macbook-pro-m2-wifi-dropping-dubai" },
  { label: "MacBook Pro M3 SD card not showing - fix", href: "/blog/macbook-pro-m3-sd-card-not-showing-dubai" },
  { label: "MacBook Pro M5 fan noise - causes & fix", href: "/blog/macbook-pro-m5-fan-noise-dubai" },
  { label: "MacBook Pro M5 OLED display issues explained", href: "/blog/macbook-pro-m5-oled-display-issues-dubai" },
];

const OTHER_DEVICES = [
  { t: "Laptop repairs", d: "Our technicians have experience with all laptops and accessories. As well as MacBooks, we repair laptops and desktops from all the major brands - Lenovo, Dell, Microsoft, HP and more - alongside iPads and iPhones." },
  { t: "Desktop repairs", d: "Whatever malfunctions you encounter with your desktops, we handle everything and repair them with high-quality parts. We provide hardware upgrades, virus removal, security setup and more." },
  { t: "Custom Built PCs", d: "If you need custom-built PCs based on your needs, our team can build high-performance PCs for gaming, graphic design, and more. We also provide a complete setup and configuration according to your requirements." },
];

// Services Offered (verbatim from live page). href only where a real route exists.
const SERVICES: { t: string; d: string; href?: string }[] = [
  { t: "Screen Repair and Replacement", href: "/macbook-screen-repair-dubai", d: "We repair malfunctioning MacBook screens, including screen flickering, broken or shattered screens, blue screens of death, dead pixels, and lines on screens. We have expertise in Mac display repair, Apple Mac screen repair, Apple MacBook screen repair and MacBook screen replacement in Dubai, dealing with all complex screen issues. We repair and replace the completely dead screen with the original one and restore a smooth display." },
  { t: "Battery Replacement", href: "/macbook-battery-replacement-dubai", d: "We specialize in diagnosing battery-related issues such as battery not charging, failure to connect with charger, and quickly draining or swelling a battery. We replace them with original batteries and offer a 3-month warranty with an 80% capacity guarantee on battery replacement. Your MacBook increases its lifespan with our high-quality, genuine battery." },
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
  { t: "GPU Repair", href: "/macbook-gpu-repair-dubai", d: "Distorted graphics, artefacts, no boot to the desktop or a failing discrete GPU - we perform board-level GPU rework and replacement so your Mac delivers a smooth, high-resolution display for editing, design and everyday use." },
  { t: "Bluetooth Repair", href: "/macbook-wifi-bluetooth-repair-dubai", d: "If you are facing Bluetooth issues like 'Bluetooth is not working' or 'Bluetooth is not available,' our experts diagnose the problem with your Bluetooth system, whether it is due to software issues or any hardware failure. We replace the damaged components and restore your Bluetooth connectivity." },
  { t: "Hinge Replacement", href: "/macbook-hinge-repair-dubai", d: "Are you facing difficulty with your MacBook's broken hinges? It can limit your device's usability. We provide hinge repair and replacement with high-quality Apple parts for smooth opening and closing of the lid without damaging your Mac screen." },
  { t: "Power Button Repair", href: "/macbook-power-button-repair-dubai", d: "If your MacBook won't power on, the cause can be a stuck, unresponsive or faulty power button. We diagnose and fix these issues efficiently, whether they require delicate soldering work or a complete power button replacement. Our technicians use original power button components for durability and responsiveness in the long term." },
  { t: "Backup Services", href: "/macbook-backup-service-dubai", d: "Do you need to restore your deleted data? Our professionals can recover your important data, either temporarily deleted files or permanently deleted data. We also offer customized backup software systems with proper setup and configuration to save your data on a large scale so you can easily retrieve it when required." },
  { t: "Software Troubleshooting", href: "/macos-reinstall-dubai", d: "If your MacBook becomes unresponsive, certain files or folders appear corrupted, or you encounter connectivity issues, it may indicate a software crash. Our team can restore your MacBook by upgrading its software and troubleshooting any diagnosed performance issues to make your device work perfectly." },
  { t: "Safe Mode Diagnostics & Repair", href: "/macbook-safe-mode-repair-dubai", d: "When you encounter performance issues with your Mac and want to run Apple Diagnostics to identify the exact problem, your MacBook cannot run in safe mode. Reach out to us. We have the expertise to troubleshoot these issues and reset the settings to run your Mac in safe mode so that it can help resolve problems related to system stability." },
];

// Icon per service, keyed by href (keeps the SEO-rich SERVICES copy untouched). Matches the
// service-page template's IconCard treatment. Falls back to Wrench if a service has no mapping.
const SERVICE_ICONS: Record<string, LucideIcon> = {
  "/macbook-screen-repair-dubai": Monitor,
  "/macbook-battery-replacement-dubai": BatteryCharging,
  "/macbook-keyboard-repair-dubai": Keyboard,
  "/macbook-logic-board-repair-dubai": CircuitBoard,
  "/macbook-charging-port-repair-dubai": PlugZap,
  "/macbook-trackpad-repair-dubai": MousePointer2,
  "/macbook-speaker-repair-dubai": Volume2,
  "/macbook-microphone-repair-dubai": Mic,
  "/macbook-touch-bar-repair-dubai": SlidersHorizontal,
  "/macbook-camera-repair-dubai": Camera,
  "/macbook-cleaning-maintenance-dubai": Sparkles,
  "/macbook-water-damage-repair-dubai": Droplets,
  "/mac-fan-cleaning-dubai": Fan,
  "/macbook-data-recovery-dubai": HardDrive,
  "/macbook-gpu-repair-dubai": Cpu,
  "/macbook-wifi-bluetooth-repair-dubai": Bluetooth,
  "/macbook-hinge-repair-dubai": Link2,
  "/macbook-power-button-repair-dubai": Power,
  "/macbook-backup-service-dubai": DatabaseBackup,
  "/macos-reinstall-dubai": Code2,
  "/macbook-safe-mode-repair-dubai": ShieldCheck,
};

const UPGRADES: { label: string; href: string; Icon: LucideIcon }[] = [
  { label: "SSD Upgrade",           href: "/macbook-ssd-upgrade-dubai", Icon: HardDrive },
  { label: "RAM Upgrade",           href: "/macbook-ram-upgrade-dubai", Icon: MemoryStick },
  { label: "macOS Upgrade",         href: "/macos-reinstall-dubai",     Icon: RefreshCw },
  { label: "Graphics Card Upgrade", href: "/macbook-gpu-repair-dubai",  Icon: Cpu },
];

const OFFERS = ["Instant Online Quote", "Quick and Easy Process", "Free Diagnosis", "Free Pickup in Dubai", "Live Chat Support", "Low Repair Prices"];

const DISCOUNTS = [
  { t: "Student Discounts", d: "We offer 10% student discounts on all MacBook repairs, including hardware, software and accidental damage. Show a valid student ID to claim the discount." },
  { t: "Teacher Discounts", d: "As with the student discounts, teachers can also receive special pricing or packages for repairs and maintenance services for their devices." },
  { t: "Military Discounts", d: "We offer a flat-rate discount for military personnel, and our services include diagnostics and repairs." },
  { t: "Bundled Services", d: "We offer bundled repair packages. We save your time and money and combine our services in one repair package, which includes setup, software installation, and ongoing support." },
  { t: "Referral Discounts", d: "Refer a friend, family member or colleague and receive a discount on your next service. Our referral program gives back for each client you refer, with valuable discounts as a token of our appreciation." },
];

const INSURANCE: { t: string; d: string; href?: string }[] = [
  { t: "Accidental Damage", href: "/macbook-insurance-dubai", d: "If your MacBook falls or any heavy object damages your Mac's screen, we swiftly diagnose the severity of the damage and provide reliable repair solutions for broken or shattered screens." },
  { t: "Extended Warranty", href: "/macbook-insurance-dubai", d: "We offer repairs for your MacBook when issues arise after an expired warranty period. Our technicians deal with all the hardware, software, cleaning, and data loss issues under our extended warranty policy." },
  { t: "Theft or Loss Coverage", href: "/macbook-insurance-dubai", d: "If your MacBook is lost or stolen, we guide you through the insurance claim and replacement process, help you secure the missing device remotely with Find My, and restore your files to the replacement machine from your backup." },
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

// Icon per common issue, keyed by title (hrefs repeat across issues, titles are unique).
const COMMON_ISSUE_ICONS: Record<string, LucideIcon> = {
  "MacBook Power Supply Issues": PlugZap,
  "WiFi Connectivity Issues": Wifi,
  "Startup Problems": Power,
  "Slow Performance": Gauge,
  "Overheating": Thermometer,
  "Malware and Virus Removal": Bug,
  "Flexgate / Backlight Issues": Monitor,
  "Freezing After Sleep / Wake": Snowflake,
  "Apple ID and iCloud Sync Issues": Cloud,
  "Touch ID Not Working": Fingerprint,
};

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
  { t: "Genuine & High-Grade Parts", d: "We use genuine Apple parts wherever they're available and high-grade compatible parts when they aren't - and we tell you which your repair uses before we start. Every repair carries a written warranty of up to 12 months, depending on the repair." },
  { t: "Comprehensive Services", d: "We offer a wide range of MacBook repairs based on your specific needs. From hardware and software issues to upgrades and maintenance, no matter the problem, we have the solution!" },
  { t: "Low Pricing", d: "We offer affordable and transparent costs for every MacBook repair or replacement. We discuss our repairs with you before we provide the best solution without any hidden fee." },
  { t: "Same Day Services", d: "We have a dedicated team that provides quick repairs without you waiting. We also prioritize emergencies and offer urgent repairs to our customers." },
  { t: "Customer Satisfaction", d: "Our excellent and genuine repairs make us proud. You have a satisfactory experience throughout the repair process with our superb customer service and support." },
  { t: "Flexible Appointment Scheduling", d: "In your busy routine, we provide convenient scheduling to fit around your lifestyle. We make it convenient to get the support you're looking for." },
  { t: "Trusted by Many", d: "Our satisfied customers across Dubai trust us for their MacBook repair needs, and we are proud to have built a reputation for quality and reliability in the community." },
];

// Distinct icon per "why choose us" point (was all the same BadgeCheck), keyed by title.
const WHY_ICONS: Record<string, LucideIcon> = {
  "Experienced Apple Technicians": Award,
  "Genuine & High-Grade Parts": ShieldCheck,
  "Comprehensive Services": Wrench,
  "Low Pricing": Wallet,
  "Same Day Services": Clock,
  "Customer Satisfaction": ThumbsUp,
  "Flexible Appointment Scheduling": Calendar,
  "Trusted by Many": Users,
};

// Icon per card for the lower informational sections, keyed by title, same icon language
// as the service grids above, so the whole page reads consistently.
const OTHER_DEVICE_ICONS: Record<string, LucideIcon> = {
  "Laptop repairs": Laptop,
  "Desktop repairs": Monitor,
  "Custom Built PCs": Cpu,
};
const AMC_ICONS: Record<string, LucideIcon> = {
  "Regular Maintenance & Diagnostics": Search,
  "Hardware & Software Support": Wrench,
  "Battery Health Check & Replacement": BatteryCharging,
  "Dust & Debris Cleaning": Sparkles,
  "24/7 Customer Support": Headset,
  "Priority Repair Services": Clock,
  "Discounted Repairs & Parts": Tag,
  "Remote Assistance": Wifi,
  "Data Backup & Recovery Support": DatabaseBackup,
};
const INSURANCE_ICONS: Record<string, LucideIcon> = {
  "Accidental Damage": Umbrella,
  "Extended Warranty": BadgeCheck,
  "Theft or Loss Coverage": Lock,
  "Corporate Partnership Plans": Building2,
};
const DISCOUNT_ICONS: Record<string, LucideIcon> = {
  "Student Discounts": GraduationCap,
  "Teacher Discounts": BookOpen,
  "Military Discounts": ShieldCheck,
  "Bundled Services": Package,
  "Referral Discounts": Gift,
};

// Driven by the canonical PRICING export in site.ts, the same figures the FAQ answers
// and the JSON-LD OfferCatalog quote. Never hand-edit numbers here; change PRICING.
const aed = (n: number) => n.toLocaleString("en-US");
const range = (p: { from: number; to: number }) => `${aed(p.from)} - ${aed(p.to)}`;
const PRICE_TABLE = [
  { r: "Screen Replacement", c: range(PRICING.screen), n: "Air 13\" / Pro 13\" from 600 · Pro 14\" 800 · Pro 16\" 1,200." },
  { r: "Battery Replacement", c: range(PRICING.battery), n: "Air from 450 · Pro 13\" 500 · Pro 14\"/16\" 600. 3-month warranty." },
  { r: "Keyboard Replacement", c: range(PRICING.keyboard), n: "Single key 150 · Magic Keyboard swap 350 · butterfly top case 700." },
  { r: "Logic Board Repair", c: range(PRICING.logicBoard), n: "Component-level repair; depends on the fault and model." },
  { r: "Hard Drive Replacement (HDD to SSD)", c: range(PRICING.ssdUpgrade), n: "Includes SSD cost and installation." },
  { r: "Water Damage Repair", c: range(PRICING.waterDamage), n: "Depends on the extent of damage. No fix, no charge." },
  { r: "Software Issues (OS Install, Virus Removal)", c: range(PRICING.software), n: "Simple fixes are usually less expensive." },
];

const EXPERT = [
  { t: "Initial Setup Assistance", d: "We offer an initial setup for your MacBook. We provide configuration based on your needs and requirements, such as settings for mail accounts, WiFi or VPN. We create new user accounts, set passwords, connect macOS to wireless networks, and set up Microsoft Office and Outlook connected with storage like iCloud." },
  { t: "Software Installation and Updates", d: "We offer software installation for MacBook in Dubai. We update the software to be compatible with your Mac model. Our team installs new versions of software without losing your important data, takes backups through Time Machine and provides MacBook data migration services to other external devices as needed." },
  { t: "Ongoing Support and Optimization", d: "We provide continuous support, including software troubleshooting and performance optimization. We delete unnecessary files and clear the cache to optimize your system through proven methods." },
];

const PROCESS: { t: string; d: string; Icon: typeof Search }[] = [
  { Icon: Search,     t: "Consultation",       d: "We start with an initial consultation. We apply different diagnostic tools and make a thorough assessment to identify the issues related to your device." },
  { Icon: Check,      t: "Approval",           d: "After diagnosis, we discuss the problems your Mac has. We brief you on our repair/replacement process and estimated expenses. We take your consent first before moving forward." },
  { Icon: Wrench,     t: "Repair / Replacement", d: "We use high-quality, latest tools and techniques to repair your MacBook issues. We troubleshoot minor issues and perform a step-by-step replacement for major damage using original Apple parts for satisfactory repair and longevity." },
  { Icon: BadgeCheck, t: "Testing",            d: "Once repair or replacement is done, we implement multiple tests to analyze the performance and test our repair quality." },
  { Icon: Truck,      t: "Return",             d: "Once everything is complete, we notify you that your device is ready for use. For those using our delivery service, we safely return the device to your location." },
];

const FAQS = [
  { q: "How much does MacBook repair cost in Dubai?", a: "MacBook repair at MacBook Repair Dubai starts from AED 150 for a single key, with the exact price set by the fault and the model. Screen repair is from AED 600, battery replacement from AED 450, keyboard from AED 150, logic board from AED 299, and water damage from AED 299. Diagnosis is always free and the price is confirmed in writing on WhatsApp before any work begins. All prices are VAT-inclusive." },
  { q: "How much is a MacBook screen replacement in Dubai?", a: "MacBook screen replacement at MacBook Repair Dubai starts at AED 600 for the Air 13\" and the Pro 13\". The 14\" Pro is AED 1,000 and the 16\" Pro is AED 1,200. Flexgate backlight failure on the 2016 to 2017 Pro is a AED 600 cable swap rather than a full panel. Most screens are done the same day, and True Tone stays intact when you choose the genuine Apple panel at quote time." },
  { q: "How much does it cost to replace a MacBook battery in Dubai?", a: "A MacBook battery replacement starts at AED 450 for the Air 11\", 13\", and 15\" on both Intel and Apple Silicon. The Pro 13\" is AED 500 and the Pro 14\" and 16\" are AED 600. The price covers a tier-1 cell, the labour, the firmware re-pair on Apple Silicon, and the calibration cycle, with a 3-month warranty and an 80% capacity guarantee. The job takes about 2 hours on the bench at the Concord Tower workshop in Dubai Media City." },
  { q: "Is it worth repairing an old MacBook or should I replace it?", a: "It is usually worth repairing if the fix costs less than half the price of a comparable replacement. A AED 450 battery or a AED 600 screen on a MacBook still worth AED 3,000 to AED 5,000 is an easy decision. Component-level logic board repair from AED 299 beats a full Apple board swap that runs AED 4,000 or more. MacBook Repair Dubai gives an honest opinion after the free diagnosis, and if the board is unrecoverable you pay AED 0 under the no-fix-no-charge policy." },
  { q: "How long does a MacBook repair take?", a: "Most MacBook repairs at MacBook Repair Dubai are done the same day. Screen, battery, and keyboard jobs can be completed in 30 minutes on an appointment. WhatsApp the model and serial number, confirm the part is in stock, book a slot, and the repair is done in 30 minutes guaranteed or it is free. Walk-in screen and battery jobs take 2 to 4 hours. Logic board work takes 3 to 5 days because it includes a burn-in test, and water damage runs 1 to 5 days depending on the spill." },
  { q: "Do you offer a guaranteed 30-minute MacBook repair in Dubai?", a: "Yes. MacBook Repair Dubai offers a guaranteed 30-minute appointment repair for screen replacement, battery replacement, and keyboard replacement on compatible models. WhatsApp 055 741 3706 with your model and serial number, confirm the part is in stock and the price, then book a time slot at the Dubai Media City workshop or request a doorstep visit. The part is pre-ordered for your exact model and the repair is completed in 30 minutes from the time you arrive. If we run over 30 minutes, the repair is free. No other MacBook repair service in Dubai offers this guarantee." },
  { q: "Do you offer same-day MacBook screen repair in Dubai?", a: "Same-day MacBook screen repair is standard for the most common models, including the Air 13\", the Pro 13\" Touch Bar, and the Pro 14\". MacBook Repair Dubai stocks panels for these, so the screen is fitted and returned the same day from the Dubai Media City workshop. The 16\" Pro can take 1 to 2 days. Send your model to 055 741 3706 to confirm the panel is in stock before you travel in." },
  { q: "Can I wait at the workshop while my MacBook is repaired?", a: "You can wait at the Concord Tower workshop in Dubai Media City for same-day jobs like battery, screen, and single-key replacements, which finish in roughly 2 to 4 hours. There is parking on site and the workshop is across from Media City Metro. The workshop is open Monday to Saturday, 9am to 10pm, closed Sundays. For longer jobs like logic board or water damage, free pickup and delivery across Dubai mainland is the easier option." },
  { q: "Do you use genuine Apple parts?", a: "MacBook Repair Dubai uses genuine Apple parts where they are available and A-grade OEM-spec parts from the same factory lines as Apple where they are not. Which one your repair uses is labelled clearly on the WhatsApp quote before work starts. On screens, the genuine Apple panel keeps True Tone, while aftermarket panels carry a calibration chip programmed to your logic board serial. Both options carry the written warranty." },
  { q: "Do you offer a warranty on MacBook repairs?", a: "Yes, and the length depends on the repair. Hardware repairs such as screen, keyboard, trackpad and charging-port replacement carry a written warranty of up to 12 months. Battery replacements are covered for 3 months with an 80% capacity guarantee. Software work, diagnostics, data recovery, and logic-board and liquid-damage repairs carry a 15-day warranty, because their long-term outcome is harder to guarantee. Every warranty is dated, signed, lists the part batch number, and is transferable once free of charge if you sell the MacBook. It covers manufacturing defects and premature failure, but not fresh physical or liquid damage after the repair." },
  { q: "Do you offer a loaner MacBook while mine is being repaired?", a: "Yes. MacBook Repair Dubai provides a free loaner MacBook for any repair that takes longer than 2 hours, so you are never without a working machine. The loaner is available at the Dubai Media City workshop, just mention it when you book or drop in. Availability is on a first-come basis, so WhatsApp 055 741 3706 in advance to reserve one." },
  { q: "Will I lose my data when you repair my MacBook?", a: "Your data stays on the SSD for standard repairs like screen, battery, and keyboard, since the storage is never touched. For logic board and water damage work the data is preserved wherever the board survives. If the board is dead, separate data recovery is available from AED 299, with strong odds on Intel logic boards and lower odds on T2 and Apple Silicon models, where the SSD is encrypted to the secure enclave and recovery depends on the chip surviving. MacBook Repair Dubai gives every customer a signed data-privacy guarantee on intake: your data is never accessed, copied, or shared for any reason." },
  { q: "Can you fix a water-damaged MacBook in Dubai?", a: "MacBook Repair Dubai recovers liquid-damaged MacBooks from AED 299 with full ultrasonic cleaning and corrosion removal. The workshop logbook shows a 90% recovery rate when the MacBook arrives within 24 hours and was not powered on after the spill, dropping to about 60% at 72 hours. Power it off, do not charge it, skip the rice, and WhatsApp 055 741 3706 for same-hour free emergency pickup across Dubai mainland. No fix, no charge if the board is beyond saving." },
  { q: "My MacBook won't turn on, can you fix it?", a: "A MacBook that won't power on is most often a dead battery, a failed DC-in charging board, or a logic board fault, and MacBook Repair Dubai diagnoses all three for free. A battery or charging board swap runs AED 350 to AED 600, while component-level board repair starts at AED 299. The fault is confirmed before any charge, so you know the price up front. Bring it in or book free pickup across Dubai mainland." },
  { q: "What should I do about a swollen MacBook battery?", a: "Stop using the MacBook immediately and do not charge it or try to power it on, because a swollen lithium pack is a fire risk and can crack the trackpad. MacBook Repair Dubai replaces swollen batteries from AED 450, same day in about 2 hours, with a 3-month warranty. WhatsApp 055 741 3706 for same-hour free emergency pickup across Dubai mainland. If the swelling has already cracked the trackpad, the combined battery and trackpad job is AED 800." },
  { q: "How much does it cost to fix a MacBook keyboard in Dubai?", a: "MacBook keyboard repair starts at AED 150 for a single key cap on the Magic Keyboard and AED 350 for a full Magic Keyboard swap on Apple Silicon. The 2016 to 2019 butterfly top case is AED 700, because Apple bonded the keyboard, battery, and speakers into one unit, against Apple's own list price of AED 1,829 to AED 2,449. Arabic, Russian, or French layout swaps are AED 450. Most are same day at MacBook Repair Dubai." },
  { q: "Which MacBook models and years do you repair?", a: "MacBook Repair Dubai services every MacBook from the 2010 Intel Air through the latest M5, including the Air 11\", 13\", and 15\", and the Pro 13\", 14\", 15\", and 16\". This covers Intel, M1, M2, M3, M4, and M5 on Air and Pro, plus iMac, Mac mini, Mac Studio, and Mac Pro. The workshop also carries parts for models Apple lists as vintage or obsolete, since 2004. Send your model from About This Mac for a confirmed quote." },
  { q: "Can you repair a MacBook bought outside the UAE?", a: "MacBook Repair Dubai repairs MacBooks bought anywhere in the world, since the repair does not depend on local Apple warranty status. A unit purchased in the US, UK, India, or anywhere else is serviced the same as one bought in Dubai, at the same prices. Layout swaps to Arabic, English, or Russian are AED 450 if you want to change the keyboard. WhatsApp the model and serial to 055 741 3706 for a quote." },
  { q: "Do you offer free pickup and delivery in Dubai?", a: "MacBook Repair Dubai offers free pickup and delivery anywhere on Dubai mainland, with same-hour collection from Internet City, Knowledge Park, JLT, and Al Barsha, and same-day from Marina, Downtown, JBR, and Palm Jumeirah. WhatsApp 055 741 3706 and a courier is usually with you within a couple of hours. Liquid damage gets priority same-hour pickup." },
  { q: "Where is your MacBook repair workshop located?", a: `MacBook Repair Dubai is at Office #45, 10th Floor, Concord Tower, Al Sufouh, Dubai Media City, across from Media City Metro and near The Palm Jumeirah, with parking on site. The workshop is open Monday to Saturday, 9am to 10pm, and closed on Sundays. It has been at the heart of Dubai's Apple repair scene since 2004, with ${REVIEW_COUNT}+ five-star Google reviews. Call or WhatsApp 055 741 3706.` },
  { q: "What payment methods do you accept?", a: "MacBook Repair Dubai accepts cash and all major cards, including Visa, Mastercard, and American Express. Buy-now-pay-later is available through Tabby and Tamara, so you can split a repair into interest-free instalments. You only pay once you approve the written quote, and there is no diagnostic fee. All prices are VAT-inclusive in AED." },
  { q: "How do I book a MacBook repair?", a: "Booking takes one message. WhatsApp the model, the year, and a short description or video of the fault to 055 741 3706, and you get a confirmed price and timeline within minutes during business hours. From there, drop the MacBook at the Concord Tower workshop in Dubai Media City or book free pickup across Dubai mainland. Diagnosis is free and you approve the quote before any work starts." },
  { q: "Are you an Apple Authorised Service Provider?", a: "MacBook Repair Dubai is an independent Apple repair specialist, not an Apple Authorised Service Provider, working in Dubai since 2004. Its technicians are Apple Certified Mac Technicians (ACMT), an Apple credential held by the people on the bench, while the workshop itself is independent rather than Apple-authorised. The workshop services in-warranty, AppleCare-eligible, and out-of-warranty MacBooks, and offers component-level board repair that Apple does not. When an Apple Store or AppleCare+ claim is genuinely the better route, you get told honestly. The trade-off is faster turnaround and lower prices, backed by a written warranty of up to 12 months." },
  { q: "How does your pricing compare to the Apple Store?", a: "MacBook Repair Dubai is consistently below Apple's UAE list prices, with no upfront service fee. A Magic Keyboard swap is AED 350 against Apple's AED 1,449, a butterfly top case is AED 700 against AED 1,829 to AED 2,449, and a component-level board repair from AED 299 replaces an AED 4,000-plus Apple board swap. Diagnosis is free and the price range across all services runs from AED 150 to AED 3,500. Same outcome, a fraction of the cost." },
  { q: "Do you offer business or bulk MacBook repair for companies in Dubai?", a: "MacBook Repair Dubai handles business and fleet repairs for offices across Dubai Media City, Internet City, and the wider Dubai mainland, with free pickup and delivery for multiple machines. Companies get one point of contact on WhatsApp, written quotes per device, and VAT invoices for accounting. Turnaround is the same as single units, often same day for screens and batteries. Message 055 741 3706 with the number of MacBooks and the faults." },
];

const FAQ_GROUPS = [
  {
    category: "Pricing & cost",
    items: [FAQS[0], FAQS[1], FAQS[2], FAQS[15], FAQS[23]],
  },
  {
    category: "Speed & turnaround",
    items: [FAQS[3], FAQS[4], FAQS[5], FAQS[6], FAQS[7]],
  },
  {
    category: "Parts, warranty & data",
    items: [FAQS[8], FAQS[9], FAQS[10], FAQS[11]],
  },
  {
    category: "Specific repairs",
    items: [FAQS[12], FAQS[13], FAQS[14], FAQS[16], FAQS[17]],
  },
  {
    category: "Booking & location",
    items: [FAQS[18], FAQS[19], FAQS[20], FAQS[21], FAQS[22], FAQS[24]],
  },
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
// First N areas visible; the rest stay in the SSR DOM inside a <details> (mobile scroll relief).
const AREAS_VISIBLE = 16;

// Verified Google Business Profile embed (pins the actual "MacBook Repair Dubai" listing,
// not a generic building search) + the public profile short-link for reviews/directions.
const MAPS_EMBED = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.1195460985773!2d55.1561949!3d25.097814300000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43c31b8db573%3A0xb173481de4640678!2sMacBook%20Repair%20Dubai!5e0!3m2!1sen!2sae!4v1780646408543!5m2!1sen!2sae";
const GBP_URL = "https://maps.app.goo.gl/X5easM2GnxoZnqhU7";
const DIRECTIONS = "https://www.google.com/maps/dir/?api=1&destination=Concord+Tower+Dubai+Media+City";

export default function Home() {
  return (
    <PageShell>
      <div className="bg-bg-alt text-text -mb-[4rem]">

        {/* ════ CONVERSION ZONE: hero → trust → fix → price → proof → process → ask ════ */}

        {/* ── 1 · Hero ───────────────────────────────────────────── */}
        <section data-hero-tone="light" className="relative overflow-hidden pt-[120px] pb-3xl md:pb-4xl">
          <div aria-hidden className="pointer-events-none absolute -top-32 -left-24 h-[34rem] w-[34rem] rounded-full bg-accent/10 blur-3xl" />
          <div className="relative mx-auto max-w-content px-5 md:px-6 grid gap-2xl md:grid-cols-12 items-start">
            <div className="md:col-span-6">
              <p className="m-0 inline-flex items-center gap-2 rounded-full border border-border/70 bg-bg-card ring-1 ring-black/[0.03] px-3.5 py-1.5 text-[13px] font-medium text-text-muted">
                {/* static dot, the photo's "Real repair in progress" badge owns the single live pulse */}
                <span className="inline-flex h-2 w-2 rounded-full bg-accent" aria-hidden />
                Independent Apple Repair · Dubai Media City · Since 2004
              </p>
              {/* H1 lockup: brand line + qualified, scannable promise subline. The speed
                  hook is kept but qualified (same-day default; 30-min by appointment) so it
                  reads believable rather than too-good-to-be-true. */}
              <h1 className="mt-lg font-bold tracking-[-0.02em] text-text">
                <span className="block text-[clamp(2.1rem,4.6vw,3.4rem)] leading-[1.05]">MacBook Repair Dubai</span>
                <span className="sr-only"> - </span>
                <span className="mt-2 block text-[clamp(1.3rem,2.7vw,1.9rem)] font-semibold leading-[1.3]">
                  <span className="text-text-muted">{REVIEW_AVERAGE.toFixed(1)} from {REVIEW_COUNT}+ reviews.</span>{" "}
                  <span className="text-accent">Most repairs same-day</span>
                  <span className="text-text-muted"> - 30-min screen, battery &amp; keyboard by appointment.</span>
                </span>
              </h1>
              {/* proof adjacent to the claim, tappable, jumps to the review cards */}
              <a href="#reviews" className="group mt-md inline-flex min-h-[44px] items-center gap-2.5">
                <span className="flex items-center gap-0.5" aria-hidden>
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} size={16} className="fill-star text-star" />
                  ))}
                </span>
                <span className="text-[14px] text-text-muted transition-colors group-hover:text-accent">
                  <strong className="text-text">{REVIEW_AVERAGE.toFixed(1)}</strong> rating on Google
                </span>
              </a>
              {/* Price anchor in the hero: price-shoppers must see a number without scrolling. */}
              <div className="mt-md flex flex-wrap gap-2 text-[13px] font-medium">
                <span className="inline-flex items-center rounded-full border border-border/70 bg-bg-card ring-1 ring-black/[0.03] px-3 py-1 text-text">Screen repair from&nbsp;<span className="font-semibold text-accent">AED 600</span></span>
                <span className="inline-flex items-center rounded-full border border-border/70 bg-bg-card ring-1 ring-black/[0.03] px-3 py-1 text-text-muted">Free diagnosis</span>
                <span className="inline-flex items-center rounded-full border border-border/70 bg-bg-card ring-1 ring-black/[0.03] px-3 py-1 text-text-muted">Same-day on most models</span>
              </div>
              {/* AEO answer as plain hero copy under the H1 (no boxed capsule). Keeps the
                  .quick-answer speakable target + Question/AcceptedAnswer microdata; the
                  question is screen-reader-only so the hero reads as normal lead copy. */}
              {/* <section> (not <div>) so the SpeakableSpecification XPath
                  //section[contains(@class,'quick-answer')] in schema.ts still matches. */}
              <section className="quick-answer mt-lg" itemScope itemType="https://schema.org/Question">
                <h2 className="sr-only" itemProp="name">Where can I get my MacBook repaired in Dubai?</h2>
                <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                  <p className="max-w-[60ch] text-[17px] leading-relaxed text-text-muted m-0" itemProp="text">
                    {linkify(
                      "MacBook Repair Dubai is an independent Apple repair specialist in Concord Tower, Dubai Media City, working since 2004. The workshop repairs every Mac, iPhone and iPad, Intel through M5, with guaranteed 30-minute screen, battery and keyboard replacement by appointment (or the repair is free), expert water-damage recovery, free diagnosis, free citywide pickup, and a written warranty of up to 12 months. All prices are VAT-inclusive and confirmed on WhatsApp before any work begins."
                    )}
                  </p>
                </div>
              </section>
              {/* single whitespace crescendo before the action group */}
              <div className="mt-2xl flex flex-wrap gap-sm">
                <Button asChild variant="whatsapp" size="lg">
                  <a href={NAP.whatsappUrl} target="_blank" rel="noopener noreferrer" data-track="hero-whatsapp"><MessageCircle aria-hidden /> WhatsApp a Technician</a>
                </Button>
                <Button asChild size="lg" variant="secondary" className="border border-border-strong bg-bg-card text-text hover:bg-bg-alt">
                  <a href={`tel:${NAP.phoneE164}`} data-track="hero-call"><Phone aria-hidden /> Call {NAP.phoneDisplay}</a>
                </Button>
              </div>
              <p className="mt-sm m-0 text-[13px]">
                <a href="#quote" className="text-text-faint underline-offset-4 transition-colors hover:text-accent hover:underline">Prefer a form? Request a written quote ↓</a>
              </p>
            </div>

            {/* hero image: nudged down on desktop so its top aligns with the H1, not the badge */}
            <div className="md:col-span-6 relative md:mt-[57px]">
              {/* Real workshop photo - our technicians at the Concord Tower bench */}
              <div className="relative overflow-hidden rounded-2xl border border-border shadow-[0_20px_50px_-24px_rgba(0,0,0,0.25)]">
                <ResponsiveImage
                  src="/images/real/team/team-workshop-dubai.jpg"
                  alt="MacBook Repair Dubai technicians at the Concord Tower workshop in Dubai Media City - MacBook Air diagnostics and customer support"
                  title="MacBook Repair Dubai - our technicians at the Dubai Media City workshop"
                  width={1360}
                  height={1020}
                  priority
                  sizes="(max-width: 414px) 360px, (max-width: 768px) 90vw, 480px"
                  imgClassName="block w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── 1b · USP strip: clean centered band under the hero, matches the service-page template ── */}
        <div className="border-y border-border">
          <ul className="mx-auto max-w-content px-5 md:px-6 py-md flex flex-wrap justify-center gap-x-xl gap-y-sm list-none m-0">
            {HERO_FEATURES.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-xs text-[14px] font-medium text-text">
                <Icon size={15} className="text-accent shrink-0" aria-hidden /> {label}
              </li>
            ))}
          </ul>
        </div>

        {/* ── 3 · Trust band (stats + trust links + in-page nav) ──── */}
        <section className="border-y border-border">
          {/* Dark stats strip */}
          <div
            style={{
              background: "#2C3137",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06), inset 0 -1px 0 rgba(0,0,0,0.15)",
            }}
          >
            <div className="mx-auto max-w-content px-5 md:px-6">
              <div className="grid grid-cols-2 md:grid-cols-4">
                {[
                  { stat: "21+",               label: "Years in Dubai" },
                  { stat: `${REVIEW_COUNT}+`,  label: "Google reviews" },
                  { stat: "30 min",             label: "Appointment repair" },
                  { stat: "12 mo",              label: "Written warranty" },
                ].map(({ stat, label }, i) => (
                  <div
                    key={label}
                    className="py-lg px-xl flex flex-col justify-center"
                    style={{
                      borderRight: i < 3 ? "1px solid rgba(255,255,255,0.07)" : undefined,
                      textShadow: "0 2px 12px rgba(0,0,0,0.6)",
                    }}
                  >
                    <p className="text-[32px] md:text-[40px] font-bold leading-none tracking-tight text-white m-0">{stat}</p>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.15em] text-on-primary-muted m-0">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Link row + anchor nav */}
          <div className="bg-bg mx-auto max-w-content px-5 md:px-6 py-lg">
            {/* Trimmed to the one non-duplicated trust signal: the named technician + credential (E-E-A-T).
                Warranty, free diagnosis and no-fix-no-charge live once each in the stats strip / USP strip above. */}
            <div className="flex flex-wrap items-center justify-center gap-x-xl gap-y-2 text-[13.5px] text-text-muted">
              <Link to="/about" className="inline-flex min-h-[44px] items-center gap-2 transition-colors hover:text-accent"><Users size={16} className="text-accent" aria-hidden /> Led by Abdul Aziz · Apple Certified Mac Technician (ACMT)</Link>
            </div>
            <nav aria-label="On this page" className="mt-lg flex flex-wrap justify-center gap-2.5">
              {PAGE_ANCHORS.map((a) => (
                <a key={a.href} href={a.href} className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-bg-card ring-1 ring-black/[0.03] px-3.5 py-1.5 text-[13px] font-medium text-text-muted transition-colors hover:border-accent/40 hover:text-accent">
                  {a.label} <ChevronDown size={13} aria-hidden />
                </a>
              ))}
            </nav>
          </div>
        </section>

        {/* ── 4 · Services offered ───────────────────────────────── */}
        <section className="mx-auto max-w-content px-5 md:px-6 py-4xl">
          <SectionHead
            eyebrow="What we fix"
            title="Apple MacBook Repair Services in Dubai"
            intro="From MacBook screen repair and battery replacement to logic board repair, water damage recovery, keyboard replacement, charging port and trackpad faults, our Dubai Media City workshop fixes every issue with a warranty of up to 12 months - and recovers your files with professional data recovery when a drive or board fails."
          />
          <div className="grid gap-lg md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => {
              const Icon = (s.href && SERVICE_ICONS[s.href]) || Wrench;
              return (
              <Reveal key={s.t} delay={(i % 3) * 60}>
                {s.href ? (
                  <Link
                    to={s.href}
                    className="group flex h-full flex-col rounded-2xl border border-border/70 bg-bg-card ring-1 ring-black/[0.03] p-lg transition-all duration-200 motion-safe:hover:-translate-y-1 hover:border-accent/40 hover:bg-bg-alt focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    <div className="mb-md flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 transition-colors duration-200 group-hover:bg-accent">
                      <Icon size={22} className="text-accent transition-colors duration-200 group-hover:text-white" strokeWidth={1.75} aria-hidden />
                    </div>
                    <h3 className="m-0 mb-2 text-text text-[18px] transition-colors group-hover:text-accent">{s.t}</h3>
                    <p className="m-0 text-[14px] text-text-muted leading-relaxed line-clamp-3 md:line-clamp-none">{s.d}</p>
                    <span className="mt-auto pt-md inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-accent">
                      Learn more
                      <ArrowRight size={14} aria-hidden className="transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                ) : (
                  <Card className="h-full">
                    <div className="mb-md flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 transition-colors duration-200 group-hover:bg-accent">
                      <Icon size={22} className="text-accent transition-colors duration-200 group-hover:text-white" strokeWidth={1.75} aria-hidden />
                    </div>
                    <h3 className="m-0 mb-2 text-text text-[18px]">{s.t}</h3>
                    <p className="m-0 text-[14px] text-text-muted leading-relaxed line-clamp-3 md:line-clamp-none">{s.d}</p>
                  </Card>
                )}
              </Reveal>
              );
            })}
          </div>

          <CtaRow />
        </section>

        {/* ── 5 · Upgrades ───────────────────────────────────────── */}
        <section className="mx-auto max-w-content px-5 md:px-6 py-3xl">
          <SectionHead eyebrow="Make an old Mac fast again" title="MacBook Upgraded Services in Dubai" intro="When your MacBook starts acting up, it may need a system upgrade. We offer many upgrade options to boost your MacBook's speed, storage and overall performance - optimised with the latest technology." />
          <div className="grid gap-lg grid-cols-2 lg:grid-cols-4">
            {UPGRADES.map((u) => (
              <Link key={u.label} to={u.href} className="group rounded-2xl border border-border/70 bg-bg-card ring-1 ring-black/[0.03] p-lg transition-all duration-200 motion-safe:hover:-translate-y-1 hover:border-accent/40 hover:bg-bg-alt">
                <div className="mb-md flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 transition-colors duration-200 group-hover:bg-accent">
                  <u.Icon size={22} className="text-accent transition-colors duration-200 group-hover:text-white" strokeWidth={1.75} aria-hidden />
                </div>
                <span className="font-semibold text-[15px] text-text group-hover:text-accent">{u.label}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* ── 6 · Common issues ──────────────────────────────────── */}
        <section className="bg-bg border-y border-border">
          <div className="mx-auto max-w-content px-5 md:px-6 py-4xl">
            <SectionHead eyebrow="Sound familiar?" title="Common MacBook Issues We Fix" />
            <div className="grid gap-lg md:grid-cols-2 lg:grid-cols-3">
              {COMMON_ISSUES.map((c) => {
                const Icon = COMMON_ISSUE_ICONS[c.t] || Wrench;
                return c.href ? (
                  <Link
                    key={c.t}
                    to={c.href}
                    className="group flex h-full flex-col rounded-2xl border border-border/70 bg-bg-card ring-1 ring-black/[0.03] p-lg transition-all duration-200 motion-safe:hover:-translate-y-1 hover:border-accent/40 hover:bg-bg-alt focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    <div className="mb-md flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 transition-colors duration-200 group-hover:bg-accent">
                      <Icon size={22} className="text-accent transition-colors duration-200 group-hover:text-white" strokeWidth={1.75} aria-hidden />
                    </div>
                    <h3 className="m-0 mb-2 text-text text-[17px] transition-colors group-hover:text-accent">{c.t}</h3>
                    <p className="m-0 text-[14px] text-text-muted leading-relaxed line-clamp-3 md:line-clamp-none">{c.d}</p>
                    <span className="mt-auto pt-md inline-flex items-center gap-1.5 text-[13px] font-semibold text-accent">
                      Learn more
                      <ArrowRight size={14} aria-hidden className="transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                ) : (
                  <Card key={c.t}>
                    <div className="mb-md flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 transition-colors duration-200 group-hover:bg-accent">
                      <Icon size={22} className="text-accent transition-colors duration-200 group-hover:text-white" strokeWidth={1.75} aria-hidden />
                    </div>
                    <h3 className="m-0 mb-2 text-text text-[17px]">{c.t}</h3>
                    <p className="m-0 text-[14px] text-text-muted leading-relaxed line-clamp-3 md:line-clamp-none">{c.d}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── 7 · Pricing (+ price/service details) ──────────────── */}
        <section id="pricing" className="scroll-mt-24 mx-auto max-w-content px-5 md:px-6 py-4xl">
          <SectionHead eyebrow="Transparent pricing" title="How Much Does a MacBook Repair Cost?" intro={`Our repair price starts from AED ${PRICING.floor} for a single key, and the cost varies with the type of repair, the MacBook model, any additional repairs, and current discounts. Here's a general price list of common repairs.`} />
          <ul className="mb-xl grid gap-2 sm:grid-cols-2 lg:grid-cols-4 list-none p-0 m-0 text-[15px] text-text-muted">
            <li className="flex items-start gap-2"><Wallet size={18} className="text-accent mt-0.5 shrink-0" aria-hidden /> <span><strong className="text-text">Price:</strong> Starts from AED {PRICING.floor}</span></li>
            <li className="flex items-start gap-2"><Search size={18} className="text-accent mt-0.5 shrink-0" aria-hidden /> <span><strong className="text-text">Diagnosis time:</strong> 20 minutes</span></li>
            <li className="flex items-start gap-2"><Clock size={18} className="text-accent mt-0.5 shrink-0" aria-hidden /> <span><strong className="text-text">Repair time:</strong> 2 - 4 hours (depending on the problem)</span></li>
            <li className="flex items-start gap-2"><Truck size={18} className="text-accent mt-0.5 shrink-0" aria-hidden /> <span><strong className="text-text">Site visit charge:</strong> FREE</span></li>
          </ul>
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
          <p className="mt-lg text-[15px] text-text-muted m-0">See our full <Link to="/pricing" className="text-accent underline underline-offset-2">transparent MacBook repair price list</Link> - fixed quotes, no hidden fees - or get an instant figure with our <Link to="/macbook-repair-cost-calculator-dubai" className="text-accent underline underline-offset-2">MacBook repair cost calculator</Link>.</p>
          <p className="m-0 mt-sm text-[12.5px] text-text-faint">Pricing reviewed {LAST_UPDATED} · VAT-inclusive · diagnosis always free.</p>
        </section>

        {/* ── 8 · Reviews ────────────────────────────────────────── */}
        <section id="reviews" className="scroll-mt-24 bg-bg border-y border-border">
          <div className="mx-auto max-w-content px-5 md:px-6 py-4xl">
            <SectionHead eyebrow={`${REVIEW_AVERAGE.toFixed(1)} average · Google verified`} title="What Customers Say" />
            <div className="-mt-2xl mb-2xl flex flex-wrap items-center justify-center gap-lg">
              <a href={GBP_URL} target="_blank" rel="noopener noreferrer" className="text-[15px] font-semibold text-accent hover:underline inline-flex items-center gap-1">Read our {REVIEW_COUNT}+ reviews on Google <ExternalLink size={14} aria-hidden /></a>
              <Link to="/reviews" className="text-[15px] font-semibold text-accent hover:underline inline-flex items-center gap-1">All reviews <ArrowRight size={15} aria-hidden /></Link>
            </div>
            <div className="grid gap-lg md:grid-cols-2 lg:grid-cols-3">
              {REVIEWS.slice(0, 6).map((r) => (
                <Reveal key={r.name} className="flex h-full flex-col rounded-2xl border border-border/70 bg-bg-card ring-1 ring-black/[0.03] p-lg">
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

        {/* ── 9 · Inside our workshop (real photos) ──────────────── */}
        <section className="mx-auto max-w-content px-5 md:px-6 py-4xl">
          <SectionHead
            eyebrow="Inside our lab"
            title="Real repairs at our Dubai workshop"
            intro="No stock photos - these are genuine MacBook, iMac and logic-board repairs on our bench in Concord Tower, Media City."
          />
          <Reveal>
            <WorkshopSlider slides={WORKSHOP_GALLERY} />
          </Reveal>
          {/* Image SEO: every workshop photo is a geo-anchored, licensed ImageObject
              (real photos taken at the Dubai Media City workshop). */}
          {WORKSHOP_GALLERY.map((g) => (
            <script
              key={g.src}
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(licensedImage({ src: g.src, alt: g.alt, pagePath: "/", geo: true })) }}
            />
          ))}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(licensedImage({ src: "/images/real/team/team-workshop-dubai.jpg", alt: "MacBook Repair Dubai technicians at the Concord Tower workshop in Dubai Media City - MacBook Air diagnostics and customer support", pagePath: "/", geo: true, width: 1360, height: 1020 })) }}
          />
        </section>

        {/* ── 10 · Process ───────────────────────────────────────── */}
        <section className="bg-bg border-y border-border">
          <div className="mx-auto max-w-content px-5 md:px-6 py-4xl">
            <SectionHead eyebrow="Simple & transparent" title="How Our MacBook Repair Process Works" />
            <ol className="grid gap-lg md:grid-cols-3 lg:grid-cols-5 list-none p-0 m-0">
              {PROCESS.map((p, i) => (
                <li key={p.t} className="flex flex-col">
                  <p aria-hidden className="text-[64px] font-bold leading-none text-accent/15 mb-md select-none">0{i + 1}</p>
                  <div className="mb-md flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10">
                    <p.Icon size={20} className="text-accent transition-colors duration-200 group-hover:text-white" strokeWidth={1.75} aria-hidden />
                  </div>
                  <h3 className="text-[17px] font-semibold text-text mb-sm m-0">{p.t}</h3>
                  <p className="text-[14px] text-text-muted leading-relaxed m-0">{p.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── 11 · Request a quote ───────────────────────────────── */}
        <section id="quote" className="scroll-mt-24 mx-auto max-w-content px-5 md:px-6 py-4xl grid gap-2xl md:grid-cols-2 items-start">
          <div>
            <SectionHead align="left" eyebrow="No obligation" title="Request a Free Quote" intro="Tell us your device and the issue. We'll reply with an honest estimate - free diagnosis, no fix, no charge." />
            <ul className="grid gap-sm list-none p-0 m-0 text-[15px] text-text-muted">
              <li className="flex items-center gap-2"><Headset size={18} className="text-accent shrink-0" aria-hidden /> WhatsApp answered 24/7 · workshop Mon-Sat, 9 am-10 pm</li>
              <li className="flex items-center gap-2"><Truck size={18} className="text-accent shrink-0" aria-hidden /> Free pickup &amp; delivery across Dubai</li>
              <li className="flex items-center gap-2"><Users size={18} className="text-accent shrink-0" aria-hidden /> Trusted by hundreds of Dubai customers</li>
            </ul>
          </div>
          <QuoteForm />
        </section>

        {/* ════ REASSURANCE ZONE: why us + expert setup ════ */}

        {/* ── 12 · Why choose us ─────────────────────────────────── */}
        <section className="bg-bg border-t border-border">
          <div className="mx-auto max-w-content px-5 md:px-6 py-3xl">
            <SectionHead eyebrow="The difference" title="Why Choose Us for Apple Laptop Repair in Dubai?" />
            <div className="grid gap-lg grid-cols-2 lg:grid-cols-4">
              {WHY_CHOOSE.map((w) => {
                const Icon = WHY_ICONS[w.t] || BadgeCheck;
                return (
                  <Card key={w.t}>
                    <div className="mb-md flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 transition-colors duration-200 group-hover:bg-accent">
                      <Icon size={22} className="text-accent transition-colors duration-200 group-hover:text-white" strokeWidth={1.75} aria-hidden />
                    </div>
                    <h3 className="m-0 mb-1 text-text text-[16px]">{w.t}</h3>
                    <p className="m-0 text-[13.5px] text-text-muted leading-relaxed">{w.d}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── 13 · Expert / setup ────────────────────────────────── */}
        <section className="bg-bg border-b border-border">
          <div className="mx-auto max-w-content px-5 md:px-6 py-3xl">
            <SectionHead eyebrow="Back to work fast" title="Expert MacBook Repair Dubai. Why We're Different" />
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

        {/* ════ DIRECTORY ZONE: find your exact model / device ════ */}

        {/* ── 14 · Models we repair ──────────────────────────────── */}
        <section className="mx-auto max-w-content px-5 md:px-6 py-3xl">
          <SectionHead eyebrow="Mac models" title="Models We Repair" />
          <div className="grid gap-lg grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
            {MODELS.map((m) => (
              <Link key={m.label} to={m.href} className="group flex flex-col items-center rounded-2xl border border-border bg-white p-md text-center transition-all duration-200 motion-safe:hover:-translate-y-1 hover:border-accent/40">
                <ResponsiveImage
                  src={m.img}
                  alt={m.alt}
                  title={`${m.label} repair in Dubai`}
                  width={360}
                  height={360}
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 170px"
                  className="block w-full"
                  imgClassName="w-full h-[96px] md:h-[110px] object-contain transition-transform duration-300 group-hover:scale-[1.06]"
                />
                <span className="mt-2 font-semibold text-[15px] text-text transition-colors group-hover:text-accent">{m.label}</span>
              </Link>
            ))}
          </div>
          <div className="mt-xl grid gap-lg sm:grid-cols-2">
            {[
              {
                href: "/macbook-air-repair-dubai",
                img: "/images/devices/macbook-air-13-15-repair-dubai.jpg",
                alt: "MacBook Air 13-inch and 15-inch repair in Dubai - latest-generation sky blue MacBook Air, Intel through M5 models serviced",
                title: 'MacBook Air 13", 15" Repair',
                sub: "Intel, M1, M2, M3, M4, M5 chip",
              },
              {
                href: "/macbook-pro-repair-dubai",
                img: "/images/devices/macbook-pro-14-16-repair-dubai.jpg",
                alt: "MacBook Pro 14-inch and 16-inch repair in Dubai - latest-generation space black MacBook Pro, Intel through M5 Pro and Max models serviced",
                title: 'MacBook Pro 14", 16" Repair',
                sub: "Intel, M1-M5 Pro & Max chip",
              },
            ].map((c) => (
              <Link key={c.href} to={c.href} className="group overflow-hidden rounded-2xl border border-border/70 bg-bg-card ring-1 ring-black/[0.03] transition-all duration-200 motion-safe:hover:-translate-y-1 hover:border-accent/40">
                <ResponsiveImage
                  src={c.img}
                  alt={c.alt}
                  title={c.title}
                  width={800}
                  height={500}
                  sizes="(max-width: 640px) 92vw, 560px"
                  className="block bg-bg-alt"
                  imgClassName="w-full h-[190px] md:h-[230px] object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="p-lg">
                  <p className="m-0 font-semibold text-text text-[17px] transition-colors group-hover:text-accent">{c.title}</p>
                  <p className="m-0 mt-1 text-text-faint text-[14px]">{c.sub}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── 15 · Browse Apple repair by model ──────────────────── */}
        <section className="mx-auto max-w-content px-5 md:px-6 py-3xl">
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

        {/* ── 16 · Repair any Apple device (device hubs) ─────────── */}
        <section className="mx-auto max-w-content px-5 md:px-6 py-3xl">
          <SectionHead eyebrow="Beyond the MacBook" title="We Repair Every Apple Device in Dubai" intro="MacBook is our speciality, but our bench covers the whole Apple line-up - Mac, iPhone, iPad, iMac and Apple displays, in and out of warranty." />
          <div className="flex flex-wrap gap-2.5">
            {DEVICE_HUB.map((l) => (
              <Link key={l.href} to={l.href} className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-bg-card ring-1 ring-black/[0.03] px-4 py-2 text-[14px] text-text-muted transition-colors hover:border-accent/40 hover:text-text">
                <ArrowRight size={14} className="text-accent shrink-0" aria-hidden /> {l.label}
              </Link>
            ))}
          </div>
        </section>

        {/* ── 17 · Other devices ─────────────────────────────────── */}
        <section className="bg-bg border-y border-border">
          <div className="mx-auto max-w-content px-5 md:px-6 py-3xl">
            <SectionHead eyebrow="Beyond Apple" title="Other Devices We Repair" intro="Laptops · Desktops · Displays · Custom Built PCs" />
            <div className="grid gap-lg md:grid-cols-3">
              {OTHER_DEVICES.map((o) => {
                const Icon = OTHER_DEVICE_ICONS[o.t] || Laptop;
                return (
                  <Card key={o.t}>
                    <div className="mb-md flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 transition-colors duration-200 group-hover:bg-accent">
                      <Icon size={22} className="text-accent transition-colors duration-200 group-hover:text-white" strokeWidth={1.75} aria-hidden />
                    </div>
                    <h3 className="m-0 mb-2 text-text text-[18px]">{o.t}</h3>
                    <p className="m-0 text-[14px] text-text-muted leading-relaxed">{o.d}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* ════ LOCATION ZONE: areas → near me → UAE → onsite → map ════ */}

        {/* ── 18 · MacBook repair near you in Dubai (area pages) ─── */}
        <section id="areas" className="scroll-mt-24 mx-auto max-w-content px-5 md:px-6 py-3xl">
          <SectionHead eyebrow="Local to you" title="MacBook Repair Near You in Dubai" intro="We collect, repair and return across Dubai free of charge. Tap your area for local turnaround times and pickup details." />
          <div className="grid gap-lg grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
            {AREA_PAGES.map((a) => (
              <Link key={a.href} to={a.href} className="group flex items-center gap-2 rounded-2xl border border-border/70 bg-bg-card ring-1 ring-black/[0.03] p-lg transition-all duration-200 motion-safe:hover:-translate-y-1 hover:border-accent/40 hover:bg-bg-alt">
                <MapPin size={18} className="text-accent shrink-0" aria-hidden />
                <span className="font-semibold text-[15px] text-text group-hover:text-accent">MacBook repair in {a.label}</span>
              </Link>
            ))}
          </div>
          <p className="mt-lg text-[14px] text-text-muted m-0">Outside these areas? <Link to="/macbook-repair-near-me" className="text-accent underline underline-offset-2">See MacBook repair near me</Link> - we cover 60+ Dubai communities.</p>
        </section>

        {/* ── 19 · Near me ───────────────────────────────────────── */}
        <section className="mx-auto max-w-content px-5 md:px-6 py-3xl">
          <SectionHead align="left" eyebrow="Right around the corner" title="Looking for a MacBook Repair Near Me? Get Quick Fixes by Certified Technicians!" />
          <div className="max-w-[78ch] space-y-md text-[16px] text-text-muted leading-relaxed">
            <p className="m-0">If you are searching for a MacBook repair shop nearby in Dubai, or wondering where to get your MacBook fixed, we are easy to reach: the workshop sits across from Media City Metro, and free pickup covers the whole of Dubai mainland. Whether you have a broken screen, battery issues, motherboard or software glitches, our experienced technicians are just around the corner to diagnose and fix your device with genuine parts.</p>
            <p className="m-0">We offer onsite services that fit your schedule. Don't let a faulty MacBook hold you back - contact us now for fast, professional repairs near you!</p>
          </div>
        </section>

        {/* ── 20 · MacBook repair across the UAE (other emirates) ── */}
        <section className="mx-auto max-w-content px-5 md:px-6 py-3xl">
          <SectionHead eyebrow="Beyond Dubai" title="MacBook Repair Across the UAE" intro="Outside Dubai? We don't have branches elsewhere, we collect your MacBook by free courier from any emirate, repair it at our Media City workshop, and return it. Same-day from Sharjah & Ajman; 1-2 days by courier further out." />
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
              <Link key={c.href} to={c.href} className="group flex items-center gap-2 rounded-2xl border border-border/70 bg-bg-card ring-1 ring-black/[0.03] p-lg transition-all duration-200 motion-safe:hover:-translate-y-1 hover:border-accent/40 hover:bg-bg-alt">
                <Truck size={18} className="text-accent shrink-0" aria-hidden />
                <span className="font-semibold text-[15px] text-text group-hover:text-accent">MacBook repair in {c.label}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* ── 21 · Onsite ────────────────────────────────────────── */}
        <section className="mx-auto max-w-content px-5 md:px-6 py-3xl">
          <SectionHead align="left" eyebrow="We come to you" title="Onsite MacBook Repair and Support" />
          <div className="max-w-[78ch] space-y-md text-[16px] text-text-muted leading-relaxed">
            <p className="m-0">If you need support for your malfunctioning MacBook but don't have the time to leave your location, we have the perfect solution! We offer fast and reliable MacBook repairs right at your doorstep, whether it's your office or home. Our experienced technician will come to your location, pick up your device, repair it, and return it safely to you.</p>
            <p className="m-0">Whether you are experiencing software crashes, hardware failures or need upgrades, our expert technicians provide efficient troubleshooting, repairs and maintenance. Schedule your onsite MacBook support today and enjoy quick, professional service at your convenience.</p>
            <p className="m-0">See how collection works and which areas we cover on our <Link to="/onsite-macbook-repair-dubai" className="text-accent underline underline-offset-2">onsite MacBook repair in Dubai</Link> page.</p>
          </div>
          <CtaRow />
        </section>

        {/* ── 22 · Distance / areas + map + NAP ──────────────────── */}
        <section className="mx-auto max-w-content px-5 md:px-6 py-3xl">
          <SectionHead eyebrow="Free pickup across the city" title="What's the Distance Between Us?" intro="We cover 60+ Dubai communities with free pickup and delivery. Approximate drive time from our Media City workshop:" />
          <div className="grid gap-x-lg gap-y-2 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 text-[14px]">
            {AREAS_DISTANCE.slice(0, AREAS_VISIBLE).map(([name, dist]) => (
              <span key={name} className="flex items-center gap-2 text-text-muted">
                <MapPin size={14} className="text-accent shrink-0" aria-hidden />
                <span className="flex-1">{name}</span>
                <span className="mono text-text-faint">{dist.replace(/m$/, " min")}</span>
              </span>
            ))}
          </div>
          {/* remaining areas stay in the SSR DOM, <details> only trims the visual scroll */}
          <details className="group mt-md">
            <summary className="flex w-fit cursor-pointer items-center gap-1.5 list-none text-[14px] font-semibold text-accent hover:underline [&::-webkit-details-marker]:hidden">
              Show all 60+ areas <ChevronDown size={15} className="transition-transform group-open:rotate-180" aria-hidden />
            </summary>
            <div className="mt-md grid gap-x-lg gap-y-2 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 text-[14px]">
              {AREAS_DISTANCE.slice(AREAS_VISIBLE).map(([name, dist]) => (
                <span key={name} className="flex items-center gap-2 text-text-muted">
                  <MapPin size={14} className="text-accent shrink-0" aria-hidden />
                  <span className="flex-1">{name}</span>
                  <span className="mono text-text-faint">{dist.replace(/m$/, " min")}</span>
                </span>
              ))}
            </div>
          </details>
          <div className="mt-2xl grid gap-lg md:grid-cols-2 items-stretch">
            <div className="overflow-hidden rounded-2xl border border-border">
              <iframe src={MAPS_EMBED} title={`Map to ${NAP.name}`} width="100%" height="320" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="block w-full h-[320px] border-0" />
            </div>
            <div className="flex flex-col gap-md">
              <h3 className="m-0 text-text">Find us in Media City</h3>
              {/* Consolidated NAP unit (Name + Address + Phone), matches LocalBusiness schema + GBP for local-entity consistency. */}
              <p className="flex items-start gap-sm text-[15px] text-text-muted m-0"><MapPin size={18} className="text-accent mt-1 shrink-0" aria-hidden /><span><strong className="text-text">{NAP.name}</strong><br />{NAP.street}<br />{NAP.area}<br />{NAP.city}, UAE</span></p>
              <p className="flex items-start gap-sm text-[15px] text-text-muted m-0"><Phone size={18} className="text-accent mt-1 shrink-0" aria-hidden /><a href={`tel:${NAP.phoneE164}`} className="hover:text-accent transition-colors">{NAP.phoneDisplay}</a></p>
              <p className="flex items-start gap-sm text-[15px] text-text-muted m-0"><Clock size={18} className="text-accent mt-1 shrink-0" aria-hidden /><span><strong className="text-text">Business Hours:</strong> Monday - Saturday, 09:00 AM - 10:00 PM · Sunday closed - WhatsApp support stays open and we'll book you in for Monday.</span></p>
              <p className="flex items-start gap-sm text-[14px] text-text-faint m-0"><ParkingCircle size={18} className="text-accent mt-1 shrink-0" aria-hidden /> Paid parking on-site and nearby. Across from Media City Metro.</p>
              <div className="flex flex-wrap gap-lg">
                <a href={DIRECTIONS} target="_blank" rel="noopener noreferrer" className="inline-flex w-fit items-center gap-2 text-[14px] font-semibold text-accent hover:underline">Get directions <ExternalLink size={14} aria-hidden /></a>
                <a href={GBP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex w-fit items-center gap-2 text-[14px] font-semibold text-accent hover:underline">View on Google <ExternalLink size={14} aria-hidden /></a>
              </div>
            </div>
          </div>
        </section>

        {/* ════ COVERAGE ZONE: AppleCare → AMC → insurance → discounts ════ */}

        {/* ── 23 · AppleCare & out-of-warranty ───────────────────── */}
        <section className="bg-bg border-t border-border">
          <div className="mx-auto max-w-content px-5 md:px-6 py-3xl">
            <SectionHead eyebrow="In or out of warranty" title="AppleCare and Out-of-Warranty Repairs" />
            <div className="grid gap-lg md:grid-cols-2 mb-xl">
              <Card>
                <h3 className="m-0 mb-2 text-text text-[18px]">AppleCare &amp; In-Warranty Macs</h3>
                <p className="m-0 text-[14px] text-text-muted leading-relaxed">We're an <strong className="text-text">independent Apple repair specialist - not an Apple Authorised Service Provider</strong>. If your Mac is still covered by Apple's warranty or AppleCare, we'll tell you honestly when an Apple Store claim is the better route so you don't risk your cover. For everything else we repair AppleCare-expired and out-of-warranty Macs using genuine parts where available and high-grade compatible parts otherwise - all backed by our own <Link to="/warranty" className="text-accent underline underline-offset-2">written warranty of up to 12 months</Link>.</p>
                <p className="m-0 mt-md text-[13.5px] text-text-muted">More on <Link to="/applecare-macbook-repair-dubai" className="text-accent underline underline-offset-2">AppleCare and in-warranty MacBook repair</Link>.</p>
              </Card>
              <Card>
                <h3 className="m-0 mb-2 text-text text-[18px]">Out-of-Warranty Repairs</h3>
                <p className="m-0 text-[14px] text-text-muted leading-relaxed">If your AppleCare has expired, we provide reliable out-of-warranty MacBook repairs. Our expert technicians diagnose your MacBook issues, provide solutions for software problems, and offer high-quality replacement services at reasonable prices. We address common issues such as:</p>
                <ul className="mt-sm grid gap-1.5 sm:grid-cols-2 list-none p-0 text-[13.5px] text-text-muted">
                  {OOW_ISSUES.map((i) => <li key={i} className="flex items-start gap-2"><Check size={15} className="text-accent mt-0.5 shrink-0" aria-hidden /> {i}</li>)}
                </ul>
                <p className="m-0 mt-md text-[13.5px] text-text-muted">More on <Link to="/out-of-warranty-apple-repair-dubai" className="text-accent underline underline-offset-2">out-of-warranty Apple repair</Link>, <Link to="/apple-repair-programs-dubai" className="text-accent underline underline-offset-2">Apple repair programmes &amp; recalls</Link>, or <Link to="/where-to-repair-macbook-dubai" className="text-accent underline underline-offset-2">where to repair your MacBook in Dubai</Link>.</p>
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
          </div>
        </section>

        {/* ── 24 · AMC ───────────────────────────────────────────── */}
        <section className="bg-bg">
          <div className="mx-auto max-w-content px-5 md:px-6 py-3xl">
            <SectionHead eyebrow="Year-round care" title="Annual Maintenance Contract (AMC) for MacBook" intro="Do you need an Annual Maintenance Contract for your MacBook? We offer expert support throughout the year with customized plans to keep your device safe from malfunctioning and prevent issues before they arise. Our AMC services include:" />
            <div className="grid gap-lg md:grid-cols-2 lg:grid-cols-3">
              {AMC.map((a) => {
                const Icon = AMC_ICONS[a.t] || ShieldCheck;
                return a.href ? (
                  <Link key={a.t} to={a.href} className="group flex h-full flex-col rounded-2xl border border-border/70 bg-bg-card ring-1 ring-black/[0.03] p-lg transition-all duration-200 motion-safe:hover:-translate-y-1 hover:border-accent/40 hover:bg-bg-alt focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
                    <div className="mb-md flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 transition-colors duration-200 group-hover:bg-accent"><Icon size={22} className="text-accent transition-colors duration-200 group-hover:text-white" strokeWidth={1.75} aria-hidden /></div>
                    <h3 className="m-0 mb-2 text-text text-[17px] transition-colors group-hover:text-accent">{a.t}</h3>
                    <p className="m-0 text-[14px] text-text-muted leading-relaxed line-clamp-3 md:line-clamp-none">{a.d}</p>
                    <span className="mt-auto pt-md inline-flex items-center gap-1.5 text-[13px] font-semibold text-accent">Learn more <ArrowRight size={14} aria-hidden className="transition-transform group-hover:translate-x-0.5" /></span>
                  </Link>
                ) : (
                  <Card key={a.t}>
                    <div className="mb-md flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 transition-colors duration-200 group-hover:bg-accent"><Icon size={22} className="text-accent transition-colors duration-200 group-hover:text-white" strokeWidth={1.75} aria-hidden /></div>
                    <h3 className="m-0 mb-2 text-text text-[17px]">{a.t}</h3>
                    <p className="m-0 text-[14px] text-text-muted leading-relaxed line-clamp-3 md:line-clamp-none">{a.d}</p>
                  </Card>
                );
              })}
            </div>
            <p className="mt-xl text-[15px] text-text-muted m-0">See full plans and pricing on our <Link to="/annual-maintenance-contract-dubai" className="text-accent underline underline-offset-2">MacBook Annual Maintenance Contract</Link> page.</p>
          </div>
        </section>

        {/* ── 25 · Insurance ─────────────────────────────────────── */}
        <section className="bg-bg">
          <div className="mx-auto max-w-content px-5 md:px-6 py-3xl">
            <SectionHead eyebrow="Protect your device" title="Complete Apple Laptop Insurance in Dubai" intro="We do not just repair your devices but also offer MacBook insurance to protect them from accidental damage or emergency repairs - liquid damage, broken screens, software crashes or hardware failure. We provide full-coverage plans for individuals and custom insurance packages for larger companies." />
            <div className="grid gap-lg md:grid-cols-2 lg:grid-cols-4">
              {INSURANCE.map((i) => {
                const Icon = INSURANCE_ICONS[i.t] || ShieldCheck;
                return i.href ? (
                  <Link key={i.t} to={i.href} className="group flex h-full flex-col rounded-2xl border border-border/70 bg-bg-card ring-1 ring-black/[0.03] p-lg transition-all duration-200 motion-safe:hover:-translate-y-1 hover:border-accent/40 hover:bg-bg-alt focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
                    <div className="mb-md flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 transition-colors duration-200 group-hover:bg-accent"><Icon size={22} className="text-accent transition-colors duration-200 group-hover:text-white" strokeWidth={1.75} aria-hidden /></div>
                    <h3 className="m-0 mb-2 text-text text-[17px] transition-colors group-hover:text-accent">{i.t}</h3>
                    <p className="m-0 text-[14px] text-text-muted leading-relaxed">{i.d}</p>
                    <span className="mt-auto pt-md inline-flex items-center gap-1.5 text-[13px] font-semibold text-accent">Learn more <ArrowRight size={14} aria-hidden className="transition-transform group-hover:translate-x-0.5" /></span>
                  </Link>
                ) : (
                  <Card key={i.t}>
                    <div className="mb-md flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 transition-colors duration-200 group-hover:bg-accent"><Icon size={22} className="text-accent transition-colors duration-200 group-hover:text-white" strokeWidth={1.75} aria-hidden /></div>
                    <h3 className="m-0 mb-2 text-text text-[17px]">{i.t}</h3>
                    <p className="m-0 text-[14px] text-text-muted leading-relaxed">{i.d}</p>
                  </Card>
                );
              })}
            </div>
            <p className="mt-xl text-[15px] text-text-muted m-0">See cover types and how plans are quoted on our <Link to="/macbook-insurance-dubai" className="text-accent underline underline-offset-2">MacBook insurance in Dubai</Link> page.</p>
          </div>
        </section>

        {/* ── 26 · Discounts ─────────────────────────────────────── */}
        <section className="bg-bg border-b border-border">
          <div className="mx-auto max-w-content px-5 md:px-6 py-3xl">
            <SectionHead eyebrow="Save more" title="Discounted MacBook Repairs Dubai" intro="We provide reasonable repairs and discounts for students, teachers and military personnel. We do not compromise on quality and offer high-quality MacBook repair services in Dubai." />
            <div className="mb-xl flex flex-wrap gap-2.5">
              {OFFERS.map((o) => (
                <span key={o} className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-bg-card ring-1 ring-black/[0.03] px-3 py-1.5 text-[13px] text-text-muted"><Check size={14} className="text-accent" aria-hidden /> {o}</span>
              ))}
            </div>
            <div className="grid gap-lg md:grid-cols-2 lg:grid-cols-3">
              {DISCOUNTS.map((d) => {
                const Icon = DISCOUNT_ICONS[d.t] || Tag;
                return (
                  <Card key={d.t}>
                    <div className="mb-md flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 transition-colors duration-200 group-hover:bg-accent"><Icon size={22} className="text-accent transition-colors duration-200 group-hover:text-white" strokeWidth={1.75} aria-hidden /></div>
                    <h3 className="m-0 mb-2 text-text text-[17px]">{d.t}</h3>
                    <p className="m-0 text-[14px] text-text-muted leading-relaxed">{d.d}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* ════ TAIL ZONE: guides → FAQ → final CTA ════ */}

        {/* ── 27 · Popular repair guides & costs ─────────────────── */}
        <section className="bg-bg border-y border-border">
          <div className="mx-auto max-w-content px-5 md:px-6 py-3xl">
            <SectionHead eyebrow="Know before you book" title="Popular Repair Guides & Cost Breakdowns" intro="Real Dubai prices, fix-it walkthroughs and honest advice from our workshop - written by the technicians who do the repairs." />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {GUIDES.map((g) => (
                <Link
                  key={g.href}
                  to={g.href}
                  className="group flex items-start justify-between gap-2 rounded-xl border border-border/70 bg-bg-card ring-1 ring-black/[0.03] p-4 transition-colors hover:border-accent/50"
                >
                  <span className="text-[14px] font-medium text-text leading-snug group-hover:text-accent">{g.label}</span>
                  <ArrowRight size={15} className="mt-0.5 shrink-0 text-accent transition-transform group-hover:translate-x-0.5" aria-hidden />
                </Link>
              ))}
            </div>
            <p className="mt-xl text-center text-[14px] text-text-muted m-0"><Link to="/blog" className="text-accent underline underline-offset-2">Browse all MacBook &amp; Apple repair guides →</Link></p>
          </div>
        </section>

        {/* ── 29 · FAQ ───────────────────────────────────────────── */}
        <section id="faq" className="scroll-mt-24 mx-auto max-w-content px-5 md:px-6 py-4xl">
          <div className="grid lg:grid-cols-[280px_1fr] gap-10 items-start">
            {/* sticky sidebar */}
            <div className="lg:sticky lg:top-24 rounded-xl border border-border/70 bg-bg-card ring-1 ring-black/[0.03] p-6">
              <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-3">FAQ</p>
              <h2 className="text-[22px] font-bold tracking-tight text-text leading-snug mb-3">
                Frequently asked questions
              </h2>
              <p className="text-[14px] text-text-muted leading-relaxed">
                Everything you need to know before booking your MacBook repair in Dubai.
              </p>
              <div className="mt-5 pt-5 border-t border-border flex flex-col gap-2 text-[13px] text-text-muted">
                <span>✓ Free diagnosis</span>
                <span>✓ No fix, no charge</span>
                <span>✓ Warranty up to 12 months</span>
                <span>✓ Free pickup Dubai-wide</span>
              </div>
              <div className="mt-5 pt-5 border-t border-border flex flex-col gap-2">
                {FAQ_GROUPS.map((g) => (
                  <a key={g.category} href={`#faq-${g.category.replace(/\s+/g, "-").toLowerCase()}`}
                    className="text-[13px] text-accent hover:underline capitalize">
                    {g.category}
                  </a>
                ))}
              </div>
            </div>
            {/* grouped accordions */}
            <div className="flex flex-col gap-[48px]">
              {FAQ_GROUPS.map((g) => (
                <div key={g.category} id={`faq-${g.category.replace(/\s+/g, "-").toLowerCase()}`}>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-4">{g.category}</p>
                  {/* schema injected once at page level via faqPage(FAQS) below (all 25 Q&As) */}
                  <FAQAccordion items={g.items} injectSchema={false} tone="light" />
                </div>
              ))}
            </div>
          </div>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage(FAQS)) }} />
          {/* Entity graph: Organization (#organization) + WebSite (#website) resolve the @id refs in
              localBusiness/person/webPage. WebPage carries SpeakableSpecification → .quick-answer (AEO). */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization()) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webSite()) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageWithSpeakable({ url: SITE.url, name: TITLE, dateModified: SITEMAP_LAST_UPDATED })) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessWithRating(REVIEW_AVERAGE, REVIEW_COUNT)) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person({ name: "Abdul Aziz", jobTitle: "Lead Repair Technician", yearsExperience: 21, knowsAbout: ["MacBook logic board repair", "Water damage recovery", "Screen replacement"], credentials: ["Apple Certified Mac Technician (ACMT)"] })) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList({ name: "Apple repair services in Dubai", items: SERVICES.filter((s) => s.href).map((s) => ({ name: s.t, url: s.href as string, description: s.d })) })) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: "MacBook Repair", price: PRICING.floor, url: SITE.url, warranty: "P1Y", description: `MacBook Repair Dubai offers professional MacBook repair services in Dubai, including screen replacement, battery repair, and general troubleshooting. Pricing starts from AED ${PRICING.floor}.` })) }} />
        </section>

        {/* ── 30 · Final CTA ─────────────────────────────────────── */}
        <section className="border-t border-border" style={{ background: "#2C3137" }}>
          <div className="mx-auto max-w-content px-5 md:px-6 py-3xl flex flex-col md:flex-row md:items-center md:justify-between gap-xl">
            <div className="max-w-[60ch]">
              <p className="text-[11px] uppercase tracking-widest text-on-primary-muted mb-2 m-0">Ready to fix your Mac?</p>
              <h2 className="text-[26px] md:text-[32px] font-bold text-white leading-tight m-0 mb-3">Book Your 30-Minute Repair Slot</h2>
              <p className="text-on-primary-muted text-[16px] leading-relaxed m-0">Fixed in 30 minutes by appointment or it's free. Free diagnosis, free pickup across Dubai, and a written warranty of up to 12 months. WhatsApp is answered 24/7 and the workshop is open Mon-Sat, 9 am-10 pm.</p>
            </div>
            <div className="flex flex-wrap gap-sm shrink-0">
              <Button asChild variant="whatsapp" size="lg"><a href={NAP.whatsappUrl} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden /> WhatsApp Us</a></Button>
              <Button asChild size="lg" variant="secondary" className="bg-white/10 text-white border-white/30 hover:bg-white/20"><a href={`tel:${NAP.phoneE164}`}><Phone aria-hidden /> Call Now</a></Button>
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
  return <div className={`rounded-2xl border border-border/70 bg-bg-card ring-1 ring-black/[0.03] p-lg ${className}`}>{children}</div>;
}

// Centered by default (template SectionHeading style). align="left" reproduces the
// original left-aligned heading, used where the heading binds directly to left-aligned
// prose or sits in one column of an asymmetric 2-col layout (centering looks detached there).
function SectionHead({ eyebrow, title, intro, align = "center" }: { eyebrow: string; title: string; intro?: string; align?: "center" | "left" }) {
  if (align === "left") {
    return (
      <div className="mb-2xl max-w-[60ch]">
        <Reveal as="p" className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-4">{eyebrow}</Reveal>
        <Reveal as="h2" className="text-[36px] md:text-[52px] font-bold tracking-tight text-text leading-[1.1] m-0">{title}</Reveal>
        {intro && <Reveal as="p" className="mt-5 text-[17px] text-text-muted leading-relaxed">{intro}</Reveal>}
      </div>
    );
  }
  return (
    <div className="text-center mb-[56px]">
      {/* mx-auto so the global `p { max-width: 70ch }` cap doesn't left-hug the eyebrow */}
      <Reveal as="p" className="mx-auto max-w-none text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-4">{eyebrow}</Reveal>
      <Reveal as="h2" className="text-[36px] md:text-[52px] font-bold tracking-tight text-text leading-[1.1] m-0">{title}</Reveal>
      {intro && <Reveal as="p" className="mt-5 text-[17px] text-text-muted max-w-[60ch] mx-auto leading-relaxed">{intro}</Reveal>}
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
