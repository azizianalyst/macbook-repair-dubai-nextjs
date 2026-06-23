// Mobile-view audit: renders key page archetypes in a real Chromium at an
// iPhone viewport and flags the things that actually break on mobile —
// horizontal overflow, small tap targets, tiny text, missing viewport meta,
// and images wider than the screen. Screenshots land in .mobile-audit/.
//
// Usage: node scripts/mobile-audit.mjs            (uses BASE=http://localhost:3010)
//        BASE=http://localhost:3000 node scripts/mobile-audit.mjs
import { chromium } from "playwright-core";
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const BASE = process.env.BASE || "http://localhost:3010";
const OUT = ".mobile-audit";
mkdirSync(OUT, { recursive: true });

// iPhone 14 Pro-ish: 393 CSS px wide, DPR 3, touch, iOS Safari UA.
const VIEWPORT = { width: 393, height: 852 };
const UA =
  "Mozilla/5.0 (iPhone; CPU iPhone OS 17_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Mobile/15E148 Safari/604.1";

// One representative URL per page archetype.
const PAGES = [
  ["home", "/"],
  ["services-hub", "/apple-repair-dubai"],
  ["service", "/macbook-screen-repair-dubai"],
  ["device", "/macbook-pro-16-m1-pro-2021-repair-dubai"],
  ["iphone-device", "/iphone-17-repair-dubai"],
  ["ipad-category", "/ipad-repair-dubai"],
  ["area", "/macbook-repair-jlt"],
  ["guides-hub", "/macbook-guides"],
  ["article", "/how-to-clean-a-macbook-screen"],
  ["cost-calculator", "/macbook-repair-cost-calculator-dubai"],
  ["contact", "/contact"],
  ["transactional", "/sell-macbook-dubai"],
];

// Runs inside the page. Returns all mobile findings for the current viewport.
function inPageAudit(vw) {
  const out = {
    viewportMeta: null,
    doc: null,
    overflowers: [],
    smallTaps: [],
    tinyText: [],
    wideImages: [],
  };

  const meta = document.querySelector('meta[name="viewport"]');
  out.viewportMeta = meta ? meta.getAttribute("content") : null;

  const de = document.documentElement;
  out.doc = {
    scrollWidth: de.scrollWidth,
    clientWidth: de.clientWidth,
    overflowPx: de.scrollWidth - de.clientWidth,
  };

  const sel = (el) => {
    if (el.id) return `#${el.id}`;
    const cls = (el.getAttribute("class") || "").trim().split(/\s+/).filter(Boolean).slice(0, 2).join(".");
    return el.tagName.toLowerCase() + (cls ? "." + cls : "");
  };
  const visible = (el, r) => {
    const cs = getComputedStyle(el);
    if (cs.display === "none" || cs.visibility === "hidden" || cs.opacity === "0") return false;
    if (r.width === 0 || r.height === 0) return false;
    return true;
  };

  const all = Array.from(document.body.querySelectorAll("*"));

  // 1) Elements whose right edge spills past the viewport (real overflow culprits,
  //    not just full-bleed sections — must be narrower than the doc but extend past vw).
  for (const el of all) {
    const r = el.getBoundingClientRect();
    if (!visible(el, r)) continue;
    const cs = getComputedStyle(el);
    if (cs.position === "fixed" || cs.position === "sticky") continue;
    if (r.right > vw + 1 && r.width <= vw + 1) {
      out.overflowers.push({ sel: sel(el), right: Math.round(r.right), width: Math.round(r.width), text: (el.textContent || "").trim().slice(0, 40) });
    }
  }
  // De-dupe + cap.
  out.overflowers = out.overflowers.filter((v, i, a) => a.findIndex((x) => x.sel === v.sel && x.right === v.right) === i).slice(0, 15);

  // 2) Tap targets < 44x44 (Apple HIG) — block-ish interactive controls only,
  //    skipping inline text links where small size is expected.
  const interactive = Array.from(document.querySelectorAll('a, button, [role="button"], input, select, textarea, [onclick]'));
  for (const el of interactive) {
    const r = el.getBoundingClientRect();
    if (!visible(el, r)) continue;
    const cs = getComputedStyle(el);
    const inlineLink = el.tagName === "A" && cs.display.startsWith("inline") && (el.closest("p, li") !== null);
    if (inlineLink) continue;
    if (el.type === "hidden") continue;
    if (r.height < 44 || r.width < 44) {
      out.smallTaps.push({ sel: sel(el), w: Math.round(r.width), h: Math.round(r.height), label: (el.textContent || el.getAttribute("aria-label") || el.getAttribute("name") || "").trim().slice(0, 30) });
    }
  }
  out.smallTaps = out.smallTaps.filter((v, i, a) => a.findIndex((x) => x.sel === v.sel && x.label === v.label) === i).slice(0, 20);

  // 3) Tiny text (< 12px) on visible elements with their own direct text.
  for (const el of all) {
    const r = el.getBoundingClientRect();
    if (!visible(el, r)) continue;
    const direct = Array.from(el.childNodes).some((n) => n.nodeType === 3 && n.textContent.trim().length > 1);
    if (!direct) continue;
    const fs = parseFloat(getComputedStyle(el).fontSize);
    if (fs && fs < 12) {
      out.tinyText.push({ sel: sel(el), px: Math.round(fs * 10) / 10, text: (el.textContent || "").trim().slice(0, 40) });
    }
  }
  out.tinyText = out.tinyText.filter((v, i, a) => a.findIndex((x) => x.sel === v.sel && x.text === v.text) === i).slice(0, 15);

  // 4) Images rendered wider than the viewport.
  for (const img of Array.from(document.images)) {
    const r = img.getBoundingClientRect();
    if (r.width > vw + 1) out.wideImages.push({ src: (img.currentSrc || img.src || "").split("/").pop().slice(0, 50), w: Math.round(r.width) });
  }
  out.wideImages = out.wideImages.slice(0, 10);

  return out;
}

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: VIEWPORT,
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent: UA,
  });
  const results = [];

  for (const [name, path] of PAGES) {
    const page = await context.newPage();
    const consoleErrors = [];
    page.on("console", (m) => { if (m.type() === "error") consoleErrors.push(m.text().slice(0, 120)); });
    let status = 0;
    try {
      const resp = await page.goto(BASE + path, { waitUntil: "networkidle", timeout: 30000 });
      status = resp ? resp.status() : 0;
      await page.waitForTimeout(400);
      const audit = await page.evaluate(inPageAudit, VIEWPORT.width);
      const shot = join(OUT, `${name}.png`);
      await page.screenshot({ path: shot, fullPage: true });
      results.push({ name, path, status, ...audit, consoleErrors: consoleErrors.slice(0, 5), shot });
    } catch (e) {
      results.push({ name, path, status, error: String(e).slice(0, 160), consoleErrors });
    }
    await page.close();
  }

  await browser.close();
  writeFileSync(join(OUT, "report.json"), JSON.stringify(results, null, 2));

  // Console summary.
  const pad = (s, n) => String(s).padEnd(n);
  console.log("\n=== MOBILE VIEW AUDIT @ 393x852 (iPhone), DPR 3 ===  base:", BASE, "\n");
  console.log(pad("PAGE", 16), pad("HTTP", 5), pad("OVERFLOW", 12), pad("OVERFLO-EL", 11), pad("SMALL-TAP", 10), pad("TINY-TXT", 9), "WIDE-IMG");
  console.log("-".repeat(80));
  for (const r of results) {
    if (r.error) { console.log(pad(r.name, 16), pad(r.status, 5), "ERROR:", r.error); continue; }
    const of = r.doc.overflowPx > 1 ? `${r.doc.overflowPx}px` : "ok";
    console.log(
      pad(r.name, 16), pad(r.status, 5), pad(of, 12),
      pad(r.overflowers.length, 11), pad(r.smallTaps.length, 10),
      pad(r.tinyText.length, 9), r.wideImages.length
    );
  }

  console.log("\n--- DETAIL (issues only) ---");
  for (const r of results) {
    if (r.error) continue;
    const lines = [];
    if (r.viewportMeta == null) lines.push("  ✗ MISSING <meta name=viewport>");
    if (r.doc.overflowPx > 1) {
      lines.push(`  ✗ Horizontal overflow: page is ${r.doc.scrollWidth}px wide vs ${r.doc.clientWidth}px viewport (+${r.doc.overflowPx}px)`);
      for (const o of r.overflowers.slice(0, 6)) lines.push(`      ↳ ${o.sel} right=${o.right}px w=${o.width}px "${o.text}"`);
    }
    if (r.smallTaps.length) {
      lines.push(`  ⚠ ${r.smallTaps.length} tap target(s) < 44px:`);
      for (const t of r.smallTaps.slice(0, 6)) lines.push(`      ↳ ${t.sel} ${t.w}x${t.h} "${t.label}"`);
    }
    if (r.tinyText.length) {
      lines.push(`  ⚠ ${r.tinyText.length} element(s) with text < 12px:`);
      for (const t of r.tinyText.slice(0, 5)) lines.push(`      ↳ ${t.sel} ${t.px}px "${t.text}"`);
    }
    if (r.wideImages.length) {
      lines.push(`  ✗ ${r.wideImages.length} image(s) wider than viewport:`);
      for (const w of r.wideImages.slice(0, 4)) lines.push(`      ↳ ${w.src} ${w.w}px`);
    }
    if (r.consoleErrors.length) lines.push(`  ⚠ console errors: ${r.consoleErrors.length} (${r.consoleErrors[0]})`);
    if (lines.length) {
      console.log(`\n[${r.name}] ${r.path}  (HTTP ${r.status})`);
      console.log(lines.join("\n"));
    }
  }
  console.log(`\nScreenshots + report.json written to ${OUT}/`);
})();
