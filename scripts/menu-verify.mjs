// Verifies the mobile drawer after the easy-browse changes: opens the menu,
// screenshots it, measures every interactive row's tap size, and checks that
// the section for the current page auto-expands.
import { chromium } from "playwright-core";
import { mkdirSync } from "node:fs";
import { join } from "node:path";

const BASE = process.env.BASE || "http://localhost:3011";
const OUT = ".mobile-audit";
mkdirSync(OUT, { recursive: true });
const UA = "Mozilla/5.0 (iPhone; CPU iPhone OS 17_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Mobile/15E148 Safari/604.1";

const measure = () => {
  const drawer = document.querySelector('aside[aria-label="Mobile menu"]');
  const items = Array.from(drawer.querySelectorAll("a, button")).map((el) => {
    const r = el.getBoundingClientRect();
    return { label: (el.textContent || el.getAttribute("aria-label") || "").trim().slice(0, 28), w: Math.round(r.width), h: Math.round(r.height) };
  }).filter((x) => x.h > 0);
  const expandedToggle = Array.from(drawer.querySelectorAll('button[aria-expanded="true"]')).map((b) => b.getAttribute("aria-label"));
  return { items, expandedToggle };
};

(async () => {
  const browser = await chromium.launch({ headless: true });
  const ctx = await browser.newContext({ viewport: { width: 393, height: 852 }, deviceScaleFactor: 3, isMobile: true, hasTouch: true, userAgent: UA });

  for (const [name, path] of [["home", "/"], ["service-context", "/macbook-screen-repair-dubai"]]) {
    const page = await ctx.newPage();
    await page.goto(BASE + path, { waitUntil: "networkidle" });
    await page.click('button[aria-label="Open menu"]');
    await page.waitForTimeout(450); // drawer slide-in
    const data = await page.evaluate(measure);
    await page.screenshot({ path: join(OUT, `menu-${name}.png`) });
    const under44 = data.items.filter((i) => i.h < 44 || i.w < 44);
    console.log(`\n=== ${name} (${path}) — drawer open ===`);
    console.log(`auto-expanded section: ${data.expandedToggle.length ? data.expandedToggle.join(", ") : "(none)"}`);
    console.log(`interactive rows: ${data.items.length} | under 44px: ${under44.length}`);
    if (under44.length) under44.forEach((i) => console.log(`   ⚠ ${i.w}x${i.h} "${i.label}"`));
    else console.log("   ✓ every drawer tap target ≥ 44px");
    await page.close();
  }
  await browser.close();
})();
