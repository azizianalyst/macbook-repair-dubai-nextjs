// Priced service list for the /pricing page's JSON-LD Offers (server-rendered via
// schemaForPath("/pricing") in src/lib/page-schema.ts so the prices ship in the static HTML
// crawlers + AI engines read).
//
// NOW GENERATED: the list is derived from the admin price store at build time
// (scripts/gen-prices.cjs → src/content/prices.generated.ts) from the SAME rows that render the
// visible /pricing tables (src/views/Pricing.tsx). This finally enforces the old "must stay in
// lockstep" rule automatically, edit a price in /admin/prices, rebuild, and both update together.
// Only store rows that carry a `schema_name` are emitted here. warranty is ISO-8601 (P1Y/P3M/P15D).
export type { PricingService } from "./prices.generated";
export { PRICING_SERVICES } from "./prices.generated";
