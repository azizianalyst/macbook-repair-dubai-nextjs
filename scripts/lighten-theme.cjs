#!/usr/bin/env node
/* One-shot codemod: translate the hardcoded dark-design class vocabulary into the
 * codebase's existing LIGHT token vocabulary. Mechanical + reviewable.
 *
 * Scope: src/views, src/components/blocks, src/components/layout (.tsx).
 * EXCLUDES src/components/ui (theme-driven primitives) and a few files with
 * tone LOGIC or colored-surface buttons that are hand-edited separately.
 *
 * Leaves alone (intentional): plain `bg-white`, `text-white*`, `bg-black/*`
 * image overlays, `border-primary` (near-black outline reads fine on light),
 * `bg-primary/NN` + `from/via-primary/NN` scrims/gradients, `bg-accent/NN` glows.
 */
const fs = require("fs");
const path = require("path");

const ROOTS = ["src/views", "src/components/blocks", "src/components/layout"];
const EXCLUDE = new Set([
  "src/components/blocks/Hero.tsx",            // onDark tone logic — hand-edited
  "src/components/layout/NavBar.tsx",          // scroll-state + scrims — hand-edited
  "src/components/layout/StickyMobileCTA.tsx", // colored CTA buttons — hand-edited
]);

// Ordered: specific before general.
const RULES = [
  // hero tone attribute → navbar reads this to pick dark vs white nav text
  [/data-hero-tone="dark"/g, 'data-hero-tone="light"'],

  // on-primary (white-on-dark) text → normal text tokens
  [/text-on-primary-muted/g, "text-text-muted"],
  [/text-on-primary-faint/g, "text-text-faint"],
  [/text-on-primary(?![\w-])/g, "text-text"],

  // the brighter on-dark green → the standard accent green
  [/accent-bright/g, "accent"],

  // translucent white surfaces → opaque light tokens (preserve elevation:
  // faint tint → bg-alt, card-weight → bg-card)
  [/hover:bg-white\/\[0\.0[0-9]\]/g, "hover:bg-bg-alt"],
  [/hover:bg-white\/(?:10|90)\b/g, "hover:bg-bg-alt"],
  [/bg-white\/\[0\.0[23]\]/g, "bg-bg-alt"],
  [/bg-white\/\[0\.0[45678]\]/g, "bg-bg-card"],
  [/bg-white\/10\b/g, "bg-bg-card"],
  [/bg-white\/90\b/g, "bg-bg-card"],

  // translucent white borders → border tokens
  [/hover:border-white\/30\b/g, "hover:border-border-strong"],
  [/border-white\/(?:20|30)\b/g, "border-border-strong"],
  [/border-white\/\[0\.12\]/g, "border-border"],
  [/border-white\/(?:5|8|10|12|15)\b/g, "border-border"],
  [/border-white(?![\/\w-])/g, "border-border"],

  // dark brand band → light raised band
  [/bg-primary-2\b/g, "bg-bg-card"],
  [/bg-primary(?![-\/\w])/g, "bg-bg-alt"],
];

function walk(dir, out) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name.endsWith(".tsx")) out.push(p);
  }
}

const files = [];
for (const r of ROOTS) walk(r, files);

let changed = 0;
const perRule = Object.fromEntries(RULES.map((_, i) => [i, 0]));
for (const f of files) {
  const rel = f.replace(/\\/g, "/");
  if (EXCLUDE.has(rel)) continue;
  let src = fs.readFileSync(f, "utf8");
  const before = src;
  RULES.forEach(([re, to], i) => {
    src = src.replace(re, (m) => { perRule[i]++; return to; });
  });
  if (src !== before) {
    fs.writeFileSync(f, src);
    changed++;
  }
}

console.log(`files scanned: ${files.length}, changed: ${changed}`);
RULES.forEach(([re], i) => console.log(`  ${perRule[i]}\t${re}`));
