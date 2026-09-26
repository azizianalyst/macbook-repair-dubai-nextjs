// Shared facts for the iPad cluster pages: /ipad-repair-dubai/ (hub),
// /ipad-screen-repair-dubai/ and /ipad-battery-replacement-dubai/.
//
// Sources, so nothing here drifts into invention:
//  - Line-up (what Apple sells today): docs/apple-lineup-2026-09-26.md §2.
//  - Display wording (panel type, "Fully laminated", nano-texture option): Apple's own spec
//    pages, apple.com/ae/ipad-pro/specs, /ipad-air/specs, /ipad-mini/specs, /ipad-11/specs,
//    read 26 Sep 2026. The iPad (A16) spec does NOT list "Fully laminated"; the other three do.
//  - Apple's UAE out-of-warranty fees: docs/apple-lineup-2026-09-26.md §4a
//    (support.apple.com/en-ae/ipad/repair, excl. VAT, read 26 Sep 2026). Each figure carries
//    its "(Apple list)" attribution in the same string so the price gates recognise it as
//    Apple's, not ours. Our own prices are never published - quotes go through WhatsApp.
import { NAP } from "@/content/site";

/** wa.me link with a prefilled message, the same shape FloatingBookingCard builds. */
export function ipadWa(message: string): string {
  return `${NAP.whatsappUrl}?text=${encodeURIComponent(message)}`;
}

export type CurrentIpad = {
  name: string;          // as Apple names it
  display: string;       // Apple's display wording
  panel: "Tandem OLED" | "LCD";
  laminated: boolean;    // "Fully laminated" on Apple's spec page
  pages: { label: string; href: string }[];
};

/** Apple's current iPad line-up, 26 Sep 2026 (newest first). */
export const CURRENT_IPADS: CurrentIpad[] = [
  {
    name: "iPad Pro 11-inch and 13-inch (M5)",
    display: "Ultra Retina XDR, tandem OLED",
    panel: "Tandem OLED",
    laminated: true,
    pages: [
      { label: "iPad Pro 11\" M5", href: "/ipad-pro-11-m5-repair-dubai/" },
      { label: "iPad Pro 13\" M5", href: "/ipad-pro-13-m5-repair-dubai/" },
    ],
  },
  {
    name: "iPad Air 11-inch and 13-inch (M4)",
    display: "Liquid Retina, LED-backlit IPS",
    panel: "LCD",
    laminated: true,
    pages: [
      { label: "iPad Air M4 11\"", href: "/ipad-air-m4-11-repair-dubai/" },
      { label: "iPad Air M4 13\"", href: "/ipad-air-m4-13-repair-dubai/" },
    ],
  },
  {
    name: "iPad mini (A17 Pro)",
    display: "8.3-inch Liquid Retina, LED-backlit IPS",
    panel: "LCD",
    laminated: true,
    pages: [{ label: "iPad mini 7 (A17 Pro)", href: "/ipad-mini-7-repair-dubai/" }],
  },
  {
    name: "iPad (A16)",
    display: "11-inch Liquid Retina, LED-backlit IPS",
    panel: "LCD",
    laminated: false,
    pages: [{ label: "iPad 11th gen (A16)", href: "/ipad-11th-gen-repair-dubai/" }],
  },
];

/** Earlier generations that have their own repair page. */
export const OLDER_IPAD_PAGES: { label: string; href: string }[] = [
  { label: "iPad Pro 13\" M4", href: "/ipad-pro-13-m4-repair-dubai/" },
  { label: "iPad Pro 11\" M4", href: "/ipad-pro-11-m4-repair-dubai/" },
  { label: "iPad Pro 12.9\" M2", href: "/ipad-pro-12.9-m2-repair-dubai/" },
  { label: "iPad Pro 12.9\" M1", href: "/ipad-pro-12.9-m1-repair-dubai/" },
  { label: "iPad Pro 11\" M2", href: "/ipad-pro-11-m2-repair-dubai/" },
  { label: "iPad Pro 11\" M1", href: "/ipad-pro-11-m1-repair-dubai/" },
  { label: "iPad Air M3 13\"", href: "/ipad-air-m3-13-repair-dubai/" },
  { label: "iPad Air M3 11\"", href: "/ipad-air-m3-11-repair-dubai/" },
  { label: "iPad Air M2 13\"", href: "/ipad-air-m2-13-repair-dubai/" },
  { label: "iPad Air M2 11\"", href: "/ipad-air-m2-11-repair-dubai/" },
  { label: "iPad Air 5", href: "/ipad-air-5-repair-dubai/" },
  { label: "iPad Air 4", href: "/ipad-air-4-repair-dubai/" },
  { label: "iPad 10th gen", href: "/ipad-10th-gen-repair-dubai/" },
  { label: "iPad 9th gen", href: "/ipad-9th-gen-repair-dubai/" },
  { label: "iPad mini 6", href: "/ipad-mini-6-repair-dubai/" },
  { label: "iPad mini 5", href: "/ipad-mini-5-repair-dubai/" },
  { label: "Older iPads (1st to 8th gen)", href: "/ipad-older-gen-repair-dubai/" },
];

/** Apple's UAE out-of-warranty iPad fees (excl. VAT). Apple lists no separate screen fee. */
export const APPLE_IPAD_FEES: { model: string; battery: string; otherDamage: string }[] = [
  { model: "iPad Pro 13-inch (M5)", battery: "AED 769 (Apple list)", otherDamage: "AED 4,409 (Apple list)" },
  { model: "iPad Pro 11-inch (M5)", battery: "AED 689 (Apple list)", otherDamage: "AED 3,829 (Apple list)" },
  { model: "iPad Air 13-inch (M4)", battery: "AED 575 (Apple list)", otherDamage: "AED 2,679 (Apple list)" },
  { model: "iPad Air 11-inch (M4)", battery: "AED 499 (Apple list)", otherDamage: "AED 2,099 (Apple list)" },
];

export const APPLE_FEES_SOURCE =
  "Apple's figures from support.apple.com/en-ae/ipad/repair, read 26 September 2026, excluding VAT. Apple can change them at any time.";
