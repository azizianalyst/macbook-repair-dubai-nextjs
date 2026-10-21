"use client";
import { AreaPageTemplate } from "@/components/blocks/AreaPageTemplate";
import { AREAS } from "@/content/areas";

const cfg = AREAS.find((a) => a.slug === "damac-hills")!;

export default function MacBookRepairDamacHills() {
  return <AreaPageTemplate cfg={cfg} />;
}
