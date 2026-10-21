// Self-test for the two price gates. Run it before trusting either to certify a file.
//
// WHY THIS EXISTS
// The hide-prices exemption (Apple's published figures stay, ours go) was rewritten four
// times in one session and each version passed a casual read while being wrong:
//   1. line-level      — cleared OUR figure whenever "Apple" appeared anywhere on the line
//   2. forward strip   — missed trailing attribution, "AED 1,449 (Apple list)"
//   3. greedy-to-".";  — swallowed our figure in "Apple charges AED 900; ours is AED 600"
//   4. weak markers    — "from" in the OURS list stole "Apple lists from AED 4,999" back
// Each was only caught by deliberately feeding the gate a string and checking the verdict.
// A regex that silently matches nothing passes forever and you believe you are protected.
//
// KNOWN AND DELIBERATE: the SOURCE gate cannot see a numeric field rendered through a
// formatter (`price: 640` -> `{aed(r.price)}`). That is not fixable in a line scanner —
// it is why the RENDERED gate exists and why it is the authoritative one. The test below
// asserts that split rather than pretending the source gate is complete.
//
// Usage: node scripts/audit-prices-selftest.mjs
import { readFileSync } from "node:fs";

const rendered = readFileSync("scripts/audit-prices-rendered.mjs", "utf8");
const source   = readFileSync("scripts/audit-prices-src.mjs", "utf8");
const slice = (s, a, b) => s.slice(s.indexOf(a), s.indexOf(b));

const mod = await import("data:text/javascript," + encodeURIComponent(
  slice(rendered, "const PRICE_RE", "// High-risk") + "\n" +
  slice(rendered, "function surfaces", "// src/proxy.ts") + "\n" +
  slice(source, "const ATTRIB", "const leaks = []") + "\n" +
  "export { PRICE_RE, SCHEMA_PRICE_RE, GARBLE_RE, surfaces, allFiguresAreApple };"
));

let pass = 0, fail = 0;
const check = (ok, label) => { ok ? pass++ : fail++; console.log(`  ${ok ? "✅" : "❌"} ${label}`); };

console.log("SOURCE gate — attribution logic");
for (const [line, exempt, label] of [
  ["Screen replacement is AED 777.",                          false, "plain our-price is flagged"],
  ["Screen from AED 600",                                     false, "bare 'from AED n' is flagged"],
  ["costs AED 450 at our workshop",                           false, "'at our workshop' is flagged"],
  ["costs AED 450 at our workshop, versus AED 899 at Apple",  false, "mixed sentence: ours still flagged"],
  ["Apple charges AED 899-999 for the same job",              true,  "'Apple charges' is exempt"],
  ["AED 1,449 (Apple list)",                                  true,  "trailing '(Apple list)' is exempt"],
  ["the Apple Store charges AED 1,099",                       true,  "'Apple Store charges' is exempt"],
  ["a new M5 Air, which Apple lists from AED 4,999",          true,  "'Apple lists from' is exempt"],
]) check(mod.allFiguresAreApple(line) === exempt, label);

console.log("\nRENDERED gate — surface coverage");
for (const [html, shouldFail, label] of [
  ["<td>AED 640</td>",                                                                       true,  "numeric field in a table cell"],
  ["<td>AED <!-- -->600</td>",                                                               true,  "React split text node"],
  [`<script>self.__next_f.push([1,"battery AED 450"])</script><p>clean</p>`,                  true,  "hydration payload only"],
  [`<script type="application/ld+json">{"price":"600","priceCurrency":"AED"}</script><p>x</p>`, true, "structured JSON-LD price"],
  [`<head><meta name="description" content="from AED 450"></head><body>x</body>`,             true,  "meta description only"],
  ["<p>Request a quote7 today</p>",                                                           true,  "garbled partial mask"],
  ["<p>Free diagnosis, then a quote.</p>",                                                    false, "genuinely clean page"],
]) {
  const s = mod.surfaces(html);
  let hit = false;
  for (const t of Object.values(s)) { mod.PRICE_RE.lastIndex = 0; if (mod.PRICE_RE.test(t)) hit = true; }
  mod.SCHEMA_PRICE_RE.lastIndex = 0; mod.GARBLE_RE.lastIndex = 0;
  check((hit || mod.SCHEMA_PRICE_RE.test(s.schema) || mod.GARBLE_RE.test(s.body)) === shouldFail, label);
}

console.log(`\n${fail === 0 ? "✓ PASS" : "✗ FAIL"} — ${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
