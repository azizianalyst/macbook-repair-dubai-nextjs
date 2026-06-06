// Topical blog lookup: given a page's family + topics, return the most relevant posts.
// Score: +3 family match, +2 per topic match, +1 if the post is a "general" trust/logistics
// piece (relevant on any page). Posts with score 0 are never shown - no irrelevant links.
import { BLOG_INDEX, type BlogIndexEntry } from "@/content/blog-index";

const TOPIC_KEYS: Record<string, string[]> = {
  cost: ["cost", "price"],
  screen: ["screen", "flexgate", "display", "glass"],
  battery: ["battery"],
  water: ["water"],
  charging: ["charging"],
  power: ["not-turning-on", "turning-on", "power-button", "wont-turn"],
  overheating: ["overheating", "heat"],
  data: ["data-recovery", "data"],
  logicboard: ["logic-board"],
  keyboard: ["keyboard"],
  touchbar: ["touch-bar"],
  performance: ["running-slow", "slow", "performance"],
  sell: ["sell", "resale", "worth", "trade", "refurbished"],
  unlock: ["icloud", "unlock", "network-unlock", "locked"],
};

/** Primary device family for a page, from its path slug. */
export function familyFromPath(path: string): string {
  const p = path.toLowerCase();
  if (p.includes("ipad")) return "ipad";
  if (p.includes("iphone")) return "iphone";
  if (p.includes("macbook")) return "macbook";
  if (p.includes("imac")) return "imac";
  if (/mac-(mini|studio|pro)/.test(p) || p === "/mac-repair-dubai") return "mac";
  return "general";
}

/** Topic tags for a page, from its path slug. */
export function topicsFromPath(path: string): string[] {
  const p = path.toLowerCase();
  const out: string[] = [];
  for (const [topic, keys] of Object.entries(TOPIC_KEYS)) {
    if (keys.some((k) => p.includes(k))) out.push(topic);
  }
  return out;
}

export function relatedArticles(opts: {
  family: string;
  topics?: string[];
  excludeSlug?: string;
  limit?: number;
}): BlogIndexEntry[] {
  const { family, topics = [], excludeSlug, limit = 4 } = opts;
  const scored = BLOG_INDEX
    .filter((e) => e.slug !== excludeSlug)
    .map((e) => {
      let score = 0;
      if (e.families.includes(family)) score += 3;
      for (const t of topics) if (e.topics.includes(t)) score += 2;
      if (e.families.includes("general")) score += 1;
      return { e, score };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score || (a.e.date < b.e.date ? 1 : -1))
    .slice(0, limit)
    .map((x) => x.e);
  return scored;
}
