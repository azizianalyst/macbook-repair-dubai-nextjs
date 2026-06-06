// Contextual in-copy internal linking — reproduces the old WordPress pattern where
// keyword phrases inside body prose link to the matching page.
//
// Two entry points:
//   linkifyString(text, selfHref?)  → for plain string prose (e.g. the home page copy)
//   <LinkifyProse selfHref>…</LinkifyProse> → wraps authored JSX prose (service/blog
//      bodies); walks the tree, links text nodes, and SKIPS anything already inside an
//      <a>/<Link> or a heading so we never nest links or link a heading.
//
// Rules: first mention of each target is linked once per block, the page's own URL is
// skipped (selfHref), and density is capped so copy stays natural — not keyword-stuffed.
import { cloneElement, isValidElement, Fragment, type ReactNode } from "react";
import { Link } from "@/lib/router-compat";

export const LINK_RULES: { re: RegExp; href: string }[] = [
  { re: /\bscreen replacements?\b/i,   href: "/macbook-screen-repair-dubai" },
  { re: /\bscreen repairs?\b/i,        href: "/macbook-screen-repair-dubai" },
  { re: /\bbattery replacements?\b/i,  href: "/macbook-battery-replacement-dubai" },
  { re: /\blogic[- ]board\b/i,         href: "/macbook-logic-board-repair-dubai" },
  { re: /\bwater[- ]damage\b/i,        href: "/macbook-water-damage-repair-dubai" },
  { re: /\bdata recovery\b/i,          href: "/macbook-data-recovery-dubai" },
  { re: /\bkeyboard repairs?\b/i,      href: "/macbook-keyboard-repair-dubai" },
  { re: /\bkeyboard replacements?\b/i, href: "/macbook-keyboard-repair-dubai" },
  { re: /\btrackpad\b/i,               href: "/macbook-trackpad-repair-dubai" },
  { re: /\bcharging port\b/i,          href: "/macbook-charging-port-repair-dubai" },
  { re: /\boverheating\b/i,            href: "/macbook-overheating-fix-dubai" },
  { re: /\bflexgate\b/i,               href: "/macbook-flexgate-repair-dubai" },
  { re: /\btouch bar\b/i,              href: "/macbook-touch-bar-repair-dubai" },
  { re: /\btouch id\b/i,               href: "/macbook-touch-id-repair-dubai" },
  { re: /\bssd upgrade\b/i,            href: "/macbook-ssd-upgrade-dubai" },
  { re: /\bram upgrade\b/i,            href: "/macbook-ram-upgrade-dubai" },
  { re: /\bvirus removal\b/i,          href: "/macbook-virus-removal-dubai" },
  { re: /\bspeaker repairs?\b/i,       href: "/macbook-speaker-repair-dubai" },
  // High-value service / money pages (specific phrases only, to avoid mis-links).
  { re: /\brepair cost calculator\b/i, href: "/macbook-repair-cost-calculator-dubai" },
  { re: /\bcost calculator\b/i,        href: "/macbook-repair-cost-calculator-dubai" },
  { re: /\bonsite repairs?\b/i,        href: "/onsite-macbook-repair-dubai" },
  { re: /\bon-site repairs?\b/i,       href: "/onsite-macbook-repair-dubai" },
  { re: /\bannual maintenance\b/i,     href: "/annual-maintenance-contract-dubai" },
  { re: /\bMacBook insurance\b/i,      href: "/macbook-insurance-dubai" },
  { re: /\btrade[- ]in\b/i,            href: "/trade-in-macbook-dubai" },
  { re: /\bthermal paste\b/i,          href: "/macbook-thermal-paste-replacement-dubai" },
  { re: /\bhinge\b/i,                  href: "/macbook-hinge-repair-dubai" },
  { re: /\bpower button\b/i,           href: "/macbook-power-button-repair-dubai" },
  { re: /\bmicrophone\b/i,             href: "/macbook-microphone-repair-dubai" },
  { re: /\bsafe mode\b/i,              href: "/macbook-safe-mode-repair-dubai" },
  { re: /\bwebcam\b/i,                 href: "/macbook-camera-repair-dubai" },
];

const LINK_CLASS = "text-accent-bright underline-offset-2 hover:underline";

// Link the first occurrence of each (non-self, not-yet-used) keyword in a string.
export function linkifyString(text: string, selfHref?: string, max = 4): ReactNode {
  const used = new Set<string>();
  const out: ReactNode[] = [];
  let rest = text;
  let key = 0;
  while (rest.length) {
    if (used.size >= max) { out.push(rest); break; }
    let best: { idx: number; len: number; href: string; text: string } | null = null;
    for (const { re, href } of LINK_RULES) {
      if (used.has(href) || href === selfHref) continue;
      const m = re.exec(rest);
      if (m && (!best || m.index < best.idx)) best = { idx: m.index, len: m[0].length, href, text: m[0] };
    }
    if (!best) { out.push(rest); break; }
    if (best.idx > 0) out.push(rest.slice(0, best.idx));
    out.push(<Link key={`lk-${key++}`} to={best.href} className={LINK_CLASS}>{best.text}</Link>);
    used.add(best.href);
    rest = rest.slice(best.idx + best.len);
  }
  return out.length === 1 && typeof out[0] === "string" ? text : out;
}

// Element types we must NOT linkify inside: existing links + headings.
const SKIP_TAGS = new Set(["a", "h1", "h2", "h3", "h4"]);

// Walk an authored JSX subtree and linkify text nodes. `state` carries the per-block
// "used hrefs" set so density/first-mention rules apply across the whole block, not per node.
function walk(node: ReactNode, selfHref: string | undefined, state: { used: Set<string>; max: number }, keyHint: string): ReactNode {
  if (typeof node === "string") {
    if (state.used.size >= state.max) return node;
    const before = state.used.size;
    // Reuse linkifyString but share the used-set: do it inline so the shared set is honoured.
    const out: ReactNode[] = [];
    let rest = node;
    let key = 0;
    while (rest.length) {
      if (state.used.size >= state.max) { out.push(rest); break; }
      let best: { idx: number; len: number; href: string; text: string } | null = null;
      for (const { re, href } of LINK_RULES) {
        if (state.used.has(href) || href === selfHref) continue;
        const m = re.exec(rest);
        if (m && (!best || m.index < best.idx)) best = { idx: m.index, len: m[0].length, href, text: m[0] };
      }
      if (!best) { out.push(rest); break; }
      if (best.idx > 0) out.push(rest.slice(0, best.idx));
      out.push(<Link key={`${keyHint}-${key++}`} to={best.href} className={LINK_CLASS}>{best.text}</Link>);
      state.used.add(best.href);
      rest = rest.slice(best.idx + best.len);
    }
    return state.used.size === before ? node : out;
  }
  if (Array.isArray(node)) {
    // Wrap each walked item in a keyed Fragment so React has stable, unique keys
    // for the mapped array (the walked result itself may be a string or element).
    return node.map((child, i) => (
      <Fragment key={`${keyHint}-${i}`}>{walk(child, selfHref, state, `${keyHint}-${i}`)}</Fragment>
    ));
  }
  if (isValidElement(node)) {
    const type = node.type;
    const props = node.props as { children?: ReactNode };
    // Fragments (<>…</>): recurse into children, keep the fragment.
    if (type === Fragment) {
      return <Fragment key={node.key ?? keyHint}>{walk(props.children, selfHref, state, keyHint)}</Fragment>;
    }
    // Skip into existing links + headings so we never nest links or link a heading.
    if (typeof type === "string" && SKIP_TAGS.has(type)) return node;
    if (props.children == null) return node;
    // Only recurse through host elements (string tag, e.g. p/li/span/strong). Custom
    // components are left untouched to avoid breaking their internal rendering.
    if (typeof type !== "string") return node;
    return cloneElement(node, undefined, walk(props.children, selfHref, state, keyHint));
  }
  return node;
}

export function LinkifyProse({ children, selfHref, max = 6 }: { children: ReactNode; selfHref?: string; max?: number }) {
  const state = { used: new Set<string>(), max };
  return <>{walk(children, selfHref, state, "lp")}</>;
}
