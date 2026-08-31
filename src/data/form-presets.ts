/**
 * Topic presets for the on-page lead form (Azizi template, module 20).
 *
 * WHY THIS EXISTS
 * ---------------
 * `LeadForm` shipped with one hardcoded `ISSUES` list used on every page. Land
 * on /mac-data-recovery-dubai and the chips read "Screen / display", "Battery",
 * "Keyboard / trackpad" — seven of nine irrelevant to somebody whose drive has
 * failed, and the one thing they actually need to be told (stop powering it on)
 * is nowhere on the form.
 *
 * This site sells Apple repair across ~395 routes. Those do not need 395 forms
 * — they collapse into FIVE buying motions. Two visitors belong in the same
 * preset when the questions you would ask them are the same. All the device
 * repair pages share one preset for exactly that reason: the questions are
 * always "which device", "what's wrong" and "how urgent", whether the visitor
 * arrived on a MacBook screen page or an iPad battery page.
 *
 * ADAPTED, NOT COPIED
 * -------------------
 * The azizitechnologies.ae original drives arbitrary chip questions straight
 * into a free-text Supabase row. This project validates leads server-side with
 * `LeadSchema` (src/lib/lead-schema.ts) and `deviceType` is a zod enum, so a
 * preset offering "MacBook Air" as a device chip would fail validation at the
 * API. Presets therefore restrict and relabel the EXISTING typed fields rather
 * than inventing new ones:
 *
 *   devices   → narrows the deviceType enum chips (never widens it)
 *   issues    → replaces the generic ISSUES list, written into `issue`
 *   qualifier → an optional third chip row, appended to `details`
 *
 * That keeps /api/lead's contract unchanged, which is what makes rolling this
 * out page by page safe.
 *
 * Adding a sixth motion is an entry in PRESETS plus a line in RESOLVERS.
 * Never a second form component.
 */
import type { DEVICE_TYPES } from "@/lib/lead-schema";

type DeviceType = (typeof DEVICE_TYPES)[number];

/** Which team picks the lead up. Declared, never inferred from free text. */
export type LeadRoute = "repair" | "buyback" | "business";

export interface FormQualifier {
  /** Key used in the composed details line, e.g. "- [urgency] Today". */
  name: string;
  label: string;
  /** Rendered as tappable chips, not a <select>. 3-5 reads best on mobile. */
  options: string[];
}

export interface FormPreset {
  id: string;
  /** Replaces LeadForm's default heading. */
  heading: string;
  /** Replaces LeadForm's default description. */
  description: string;
  /**
   * Subset of DEVICE_TYPES shown as chips. Omit to show all six. Must only ever
   * contain real enum members — anything else fails LeadSchema at the API.
   */
  devices?: readonly DeviceType[];
  /** Replaces the generic ISSUES chips. Written into `issue` (max 120 chars). */
  issues: readonly string[];
  /** Optional third chip row, revealed after `issue` is answered. */
  qualifier?: FormQualifier;
  route: LeadRoute;
  /**
   * "whatsapp" promotes the WhatsApp link to the primary button. Reserved for
   * urgent intent — somebody whose only copy of their data is on a failing
   * drive should not be waiting on email.
   */
  primaryCta: "form" | "whatsapp";
  /** Prefixes the subject line on the lead email. */
  subjectPrefix: string;
}

const URGENCY: FormQualifier = {
  name: "urgency",
  label: "How urgent is it?",
  options: ["Today", "This week", "Just getting a quote"],
};

export const PRESETS: Record<string, FormPreset> = {
  /**
   * The bulk of the site. Every repair page — Mac, iPhone, iPad, by model or by
   * fault — lands here, because the qualifying questions never change.
   */
  repair: {
    id: "repair",
    heading: "Tell us what needs fixing",
    description:
      "Three taps and your number. We reply with a quote and a turnaround. Diagnosis is free, and there is no charge if we cannot fix it.",
    route: "repair",
    primaryCta: "form",
    subjectPrefix: "Repair",
    issues: [
      "Screen / display",
      "Battery",
      "Won't turn on / no power",
      "Keyboard / trackpad",
      "Liquid damage",
      "Charging / port",
      "Overheating / loud fans",
      "Slow / crashing",
      "Something else",
    ],
    qualifier: URGENCY,
  },

  /**
   * Split from `repair` deliberately. A data-loss visitor is not asking for a
   * repair quote — they are asking whether their files still exist, and the
   * single most useful thing the form can do is tell them to stop powering the
   * device on. Asking them "screen or battery?" wastes the one screen where
   * that warning lands. WhatsApp leads because every power-on costs them.
   */
  "data-recovery": {
    id: "data-recovery",
    heading: "What happened to the data?",
    description:
      "If the drive has failed, stop using the device and message us — every power-on can cost you another file. Assessment is free, and there is no charge if we cannot recover it.",
    route: "repair",
    primaryCta: "whatsapp",
    subjectPrefix: "Data recovery",
    issues: [
      "Device won't turn on",
      "Drive not detected",
      "Deleted or lost files",
      "Liquid damage",
      "Won't boot past the logo",
      "Failed during an update",
      "Not sure",
    ],
    qualifier: {
      name: "backup",
      label: "Do you have a backup?",
      options: ["No backup at all", "An old backup", "Partial backup", "Not sure"],
    },
  },

  /**
   * Not a fault. Asking "what's wrong?" of somebody who wants more storage
   * reads as though the form has not understood why they came.
   */
  upgrade: {
    id: "upgrade",
    heading: "What are you upgrading?",
    description:
      "Three taps and your number. We reply with what your exact model supports and what it would cost — some Macs are soldered, and we will tell you when yours is.",
    route: "repair",
    primaryCta: "form",
    subjectPrefix: "Upgrade",
    issues: [
      "More storage (SSD)",
      "More memory (RAM)",
      "It has become slow",
      "Running out of space",
      "Not sure what it needs",
    ],
    qualifier: {
      name: "capacity",
      label: "What capacity are you after?",
      options: ["256GB", "512GB", "1TB", "2TB or more", "Not sure"],
    },
  },

  /**
   * The opposite direction of travel: the visitor is selling a device to us.
   * Condition and accessories decide the price; "what's wrong" is only one part
   * of that and "how urgent" is meaningless.
   */
  "sell-tradein": {
    id: "sell-tradein",
    heading: "Tell us what you're selling",
    description:
      "Three taps and your number. We reply with a valuation. Bring it in or we will collect it free anywhere in Dubai, and you are paid on the spot once we have checked it.",
    route: "buyback",
    primaryCta: "form",
    subjectPrefix: "Sell / trade-in",
    issues: [
      "Working, excellent condition",
      "Working, some wear",
      "Screen damaged",
      "Battery worn",
      "Not turning on",
      "Liquid damaged",
    ],
    qualifier: {
      name: "extras",
      label: "Do you have the box and charger?",
      options: ["Both", "Charger only", "Neither", "Not sure"],
    },
  },

  /**
   * Fleet motion. A company with 40 Macs is not answering "how urgent" about
   * one device, and the questions that matter — how many, and can we come to
   * you — are ones the repair preset never asks.
   */
  business: {
    id: "business",
    heading: "Tell us about your fleet",
    description:
      "Three taps and your number. We reply with a written scope for onsite support, collection or an annual contract — no sales call unless you ask for one.",
    route: "business",
    primaryCta: "form",
    subjectPrefix: "Business / fleet",
    issues: [
      "Repairs for several devices",
      "Annual maintenance contract",
      "Onsite support",
      "Collection and delivery",
      "Setup for new staff",
      "Something else",
    ],
    qualifier: {
      name: "fleet",
      label: "How many devices?",
      options: ["2–5", "6–20", "21–50", "50+"],
    },
  },
};

/**
 * Slug → preset, first match wins. ORDER IS LOAD-BEARING; read before editing.
 *
 * Traps this ordering deliberately avoids:
 *  - `mac-data-recovery-dubai` and `macbook-data-recovery-dubai` are recovery
 *    jobs, but `ssd-data-recovery-dubai` is too. All three must beat the repair
 *    rule, which matches a bare "macbook"/"mac". Recovery is therefore tested
 *    first.
 *  - `macbook-ssd-upgrade-dubai` contains both "macbook" and "upgrade". Upgrade
 *    is tested before repair so it does not get asked "what's wrong?".
 *  - `sell-faulty-macbook-dubai` contains "faulty" and "macbook" but the visitor
 *    is selling, not repairing. The sell rule precedes repair.
 *  - `corporate-macbook-repair-dubai` and `annual-maintenance-contract-dubai`
 *    are fleet motions wearing repair words, so business precedes repair too.
 *  - `macbook-insurance-dubai` is none of these — it falls through on purpose.
 */
const RESOLVERS: Array<[RegExp, string]> = [
  // Recovery before repair: these slugs all contain a device word.
  [/data-recovery|file-recovery|recover-data|activation-lock|icloud-unlock/, "data-recovery"],

  // Selling to us, before repair: "sell-faulty-macbook" is not a repair lead.
  [/^sell-|^trade-in|buy-back|buyback|sell-my|how-much-is-my/, "sell-tradein"],

  // Fleet, before repair: "corporate-macbook-repair" is a contract conversation.
  [/corporate|business-|annual-maintenance|amc|bulk-|fleet|school|office-/, "business"],

  // Upgrades, before repair: not a fault, so "what's wrong?" is the wrong question.
  [/ssd-upgrade|ram-upgrade|storage-upgrade|memory-upgrade|speed-up|performance-tune/, "upgrade"],

  // Everything else in the repair cluster.
  // `ipod`, `mac-port`, `mac-not-turning-on` and `reinstall` are listed
  // explicitly: verified against all 393 non-admin routes, each was a real
  // repair page falling through to the generic chip list.
  [
    /macbook|imac|ipod|mac-mini|mac-studio|mac-pro|mac-repair|mac-port|mac-not-turning-on|iphone|ipad|apple-watch|airpods|apple-repair|apple-display|apple-service|screen-repair|battery-replacement|keyboard-repair|water-damage|logic-board|charging-port|trackpad|overheating|fan-cleaning|virus-removal|reinstall|diagnostic|repair-near-me|same-day|onsite|out-of-warranty|applecare/,
    "repair",
  ],
];

/**
 * DELIBERATELY UNMATCHED — these fall back to the generic chip list, which is
 * the honest answer for them:
 *
 * Verified against all 393 non-admin routes on 2026-08-30: 375 matched,
 * 18 deliberate misses.
 *
 *   /                       — homepage, has its own conversion path
 *   /contact                — destination page, its own form is the point
 *   /about, /reviews        — no buying motion to qualify
 *   /warranty, /terms, /privacy, /cookies, /refund, /pricing,
 *   /image-usage-license    — policy pages
 *   /blog, /landing-template-demo, and the four /how-to-* guides
 *                           — informational. A guide reader has not decided to
 *                             buy anything yet; pushing a qualifying form at
 *                             them is the mismatch this system exists to stop.
 *   /the-server-gave-an-error-during-download-403-forbidden
 *                           — ranks for iOS-developer queries, wrong audience
 *                             entirely (see docs/gsc-insights-2026-06.md §5).
 *   /mac-setup-data-migration-dubai
 *                           — new-Mac setup, not a fault. "What's wrong?" would
 *                             read as wrong on it, and none of the other four
 *                             fits either. Seed for a sixth preset if setup work
 *                             ever earns one.
 *   /macbook-insurance-dubai — insurance is neither a repair, an upgrade, a
 *                              sale nor a fleet contract. Same reasoning.
 */

/**
 * Returns the preset for a page slug, or null to fall back to LeadForm's
 * generic list. Null is a valid, safe answer — an unmatched page keeps exactly
 * the behaviour it has today.
 *
 * Accepts a slug or a full path; leading and trailing slashes are stripped.
 */
export function presetForSlug(slug: string | null | undefined): FormPreset | null {
  if (!slug) return null;
  const s = slug.replace(/^\/+|\/+$/g, "").toLowerCase();
  if (!s) return null;
  for (const [pattern, id] of RESOLVERS) {
    if (pattern.test(s)) return PRESETS[id] ?? null;
  }
  return null;
}
