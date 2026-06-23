"use client";
import { AreaPageTemplate } from "@/components/blocks/AreaPageTemplate";
import { AREAS } from "@/content/areas";

const cfg = AREAS.find((a) => a.slug === "barsha-heights")!;

export default function MacBookRepairBarshaHeights() {
  return <AreaPageTemplate cfg={cfg} />;
}
