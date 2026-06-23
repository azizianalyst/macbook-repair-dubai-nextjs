// Shared sibling selection for device-model pages ("Other <family> models we repair" grids).
//
// Each model template previously picked a circular window over the model's SUB-group (iMac "pro"
// vs "intel" vs "m", iPad "pro" vs "older", MacBook family, …) and then backfilled cross-group with
// a STATIC slice(0,N). That left two gaps: a sub-group SINGLETON (e.g. the lone iMac Pro 2017) was
// never the successor of anyone in its group, and the static backfill always picked the same first
// models so the tail got nothing — leaving legacy models on a single inbound link (the hub).
//
// relatedModels() closes a single ring over the FULL family list: model at index i always includes
// model i+1, so every model — singleton or tail — is exactly one predecessor's pick and can't be
// orphaned. The global successor is placed first so it survives any downstream trim; same-group
// neighbours follow for relevance. This is independent of the service coverage ring, so lifting the
// model tail never steals from the service tail.
export function relatedModels<T extends { slug: string }>(
  slug: string,
  all: T[],
  groupOf: (m: T) => string,
  limit = 4,
): T[] {
  const g = all.findIndex((m) => m.slug === slug);
  if (g < 0 || all.length < 2) return [];
  const me = all[g];
  const out: T[] = [];
  const push = (m?: T) => { if (m && m.slug !== slug && !out.some((x) => x.slug === m.slug)) out.push(m); };

  // 1. Global-ring successor — the coverage guarantee (kept first so a trim can't drop it).
  push(all[(g + 1) % all.length]);
  // 2. Same-group neighbours, circular, for relevance.
  const group = all.filter((m) => groupOf(m) === groupOf(me));
  const gi = group.findIndex((m) => m.slug === slug);
  for (let k = 1; k <= limit && k < group.length; k++) push(group[(gi + k) % group.length]);
  // 3. Fill the block by rotating around the full family.
  for (let k = 1; k < all.length && out.length < limit; k++) push(all[(g + k) % all.length]);
  return out.slice(0, limit);
}
