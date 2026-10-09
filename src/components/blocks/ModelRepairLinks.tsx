"use client";
// "Other repairs for this model" block, rendered by PageShell on per-chip Mac pages and Mac fault
// pages. Links each page to its siblings (same chip, other repair; same repair, neighbouring chip;
// related Mac faults) so no model page depends on a single inbound link. Built from ROUTES only:
// a link is added only when the target route exists. Anchors name the model and the repair, and
// each target is the owner page of exactly that model + repair.
import { usePathname } from "next/navigation";
import { Link } from "@/lib/router-compat";
import { ROUTES } from "@/lib/routes.generated";

const FAMILIES: Record<string, string> = {
  "macbook-air": "MacBook Air", "macbook-pro": "MacBook Pro", "mac-mini": "Mac mini",
  "mac-studio": "Mac Studio", imac: "iMac",
};
const SERVICES: Record<string, string> = {
  "repair": "repair", "screen-repair": "screen repair", "battery-replacement": "battery replacement",
  "keyboard-repair": "keyboard repair", "charging-port-repair": "charging port repair",
};
const CHIPS = ["intel", "m1", "m2", "m3", "m4", "m5", "m6"];
const ROUTE_SET = new Set(ROUTES.map((r) => r.replace(/\/$/, "")));
const PATTERN = /^\/(macbook-air|macbook-pro|mac-mini|mac-studio|imac)-(intel|m\d)-(repair|screen-repair|battery-replacement|keyboard-repair|charging-port-repair)-dubai$/;

// Mac fault pages that belong together (each group links among itself).
const FAULT_GROUPS: { title: string; items: [string, string][] }[] = [
  { title: "Other iMac models we repair", items: [
    ["/imac-24-m4-2024-repair-dubai", "iMac 24-inch M4 (2024) repair"],
    ["/imac-24-m3-2023-repair-dubai", "iMac 24-inch M3 (2023) repair"],
    ["/imac-24-m1-2021-repair-dubai", "iMac 24-inch M1 (2021) repair"],
    ["/imac-27-intel-2020-repair-dubai", "iMac 27-inch Intel 2020 repair"],
    ["/imac-27-intel-2019-repair-dubai", "iMac 27-inch Intel 2019 repair"],
    ["/imac-27-intel-2017-repair-dubai", "iMac 27-inch Intel 2017 repair"],
    ["/imac-27-pro-2017-repair-dubai", "iMac Pro 2017 repair"],
    ["/imac-intel-repair-dubai", "Intel iMac repair (21.5- and 27-inch)"],
  ] },
  { title: "Other MacBook faults we diagnose", items: [
    ["/macbook-kernel-panic-dubai", "MacBook kernel panic and random restarts"],
    ["/macbook-freezing-repair-dubai", "MacBook freezing"],
    ["/macbook-system-crashing-repair-dubai", "MacBook system crashing"],
    ["/macbook-wont-charge-dubai", "MacBook won't charge"],
    ["/macbook-overheating-shutting-down-dubai", "MacBook overheating and shutting down"],
    ["/macbook-battery-swollen-repair-dubai", "Swollen MacBook battery"],
  ] },
  { title: "Other desktop Mac faults we diagnose", items: [
    ["/mac-studio-no-display-dubai", "Mac Studio no display"],
    ["/mac-studio-not-turning-on-dubai", "Mac Studio not turning on"],
    ["/mac-studio-overheating-fix-dubai", "Mac Studio overheating"],
    ["/mac-mini-no-display-dubai", "Mac mini no display"],
    ["/mac-pro-no-display-dubai", "Mac Pro no display"],
  ] },
];

const chipLabel = (c: string) => (c === "intel" ? "Intel" : c.toUpperCase());
const label = (fam: string, chip: string, svc: string) => `${FAMILIES[fam]} ${chipLabel(chip)} ${SERVICES[svc]}`;
const href = (fam: string, chip: string, svc: string) => `/${fam}-${chip}-${svc}-dubai`;

function linksFor(path: string): { title: string; items: [string, string][] } | null {
  const m = PATTERN.exec(path);
  if (m) {
    const [, fam, chip, svc] = m;
    const sameChip: [string, string][] = Object.keys(SERVICES)
      .filter((s) => s !== svc && ROUTE_SET.has(href(fam, chip, s)))
      .map((s) => [href(fam, chip, s), label(fam, chip, s)]);
    const i = CHIPS.indexOf(chip);
    const sameSvc: [string, string][] = CHIPS
      .filter((c) => c !== chip && ROUTE_SET.has(href(fam, c, svc)))
      .sort((a, b) => Math.abs(CHIPS.indexOf(a) - i) - Math.abs(CHIPS.indexOf(b) - i))
      .slice(0, 4)
      .map((c) => [href(fam, c, svc), label(fam, c, svc)]);
    const items = [...sameChip, ...sameSvc];
    return items.length ? { title: `Other repairs for the ${FAMILIES[fam]} ${chipLabel(chip)} and nearby models`, items } : null;
  }
  for (const g of FAULT_GROUPS) {
    if (g.items.some(([h]) => h === path)) {
      const items = g.items.filter(([h]) => h !== path && ROUTE_SET.has(h));
      return items.length ? { title: g.title, items } : null;
    }
  }
  return null;
}

export function ModelRepairLinks() {
  const path = (usePathname() || "").replace(/\/$/, "");
  const block = linksFor(path);
  if (!block) return null;
  return (
    <nav aria-label={block.title} className="mx-auto max-w-content px-5 md:px-6 pb-2xl">
      <h2 className="text-[20px] md:text-[22px] font-bold text-text mb-md">{block.title}</h2>
      <ul className="flex flex-wrap gap-sm m-0 p-0 list-none">
        {block.items.map(([h, l]) => (
          <li key={h}>
            <Link to={h} className="inline-block rounded-full border border-border bg-bg-card px-3.5 py-1.5 text-[14px] text-text hover:text-accent hover:border-accent underline-offset-2">
              {l}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
