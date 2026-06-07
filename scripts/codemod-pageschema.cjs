// One-off codemod: wire server-side <PageSchema/> into every canonical thin route page.
// Only rewrites files that EXACTLY match the canonical pattern:
//   import type { Metadata } from "next";
//   import { metaForPath } from "@/lib/page-meta";
//   export const metadata: Metadata = metaForPath("<PATH>");
//   export { default } from "@/views/<VIEW>";
// Anything else (blog indexes, admin, the noindex demo, already-migrated files) is skipped.
const fs = require("fs");
const path = require("path");
const APP = path.join(__dirname, "..", "src", "app");

const CANONICAL = /^import type \{ Metadata \} from "next";\s*\nimport \{ metaForPath \} from "@\/lib\/page-meta";\s*\n+export const metadata: Metadata = metaForPath\("([^"]+)"\);\s*\nexport \{ default \} from "@\/views\/([^"]+)";\s*$/;

function walk(dir) {
  let out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out = out.concat(walk(p));
    else if (e.name === "page.tsx") out.push(p);
  }
  return out;
}

let changed = 0, skipped = 0;
const skippedList = [];
for (const file of walk(APP)) {
  const src = fs.readFileSync(file, "utf8");
  if (src.includes("PageSchema")) { skipped++; continue; } // idempotent
  const m = src.trim().match(CANONICAL);
  if (!m) { skipped++; skippedList.push(path.relative(APP, file)); continue; }
  const [, routePath, view] = m;
  const next =
`import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/${view}";

export const metadata: Metadata = metaForPath("${routePath}");

export default function Page() {
  return (
    <>
      <PageSchema path="${routePath}" />
      <View />
    </>
  );
}
`;
  fs.writeFileSync(file, next);
  changed++;
}

console.log(`codemod: rewrote ${changed} page.tsx, skipped ${skipped}`);
console.log("skipped (non-canonical) files:");
skippedList.forEach((f) => console.log("  - " + f));
