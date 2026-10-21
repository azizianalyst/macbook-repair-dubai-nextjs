"use client";
import { AreaPageTemplate } from "@/components/blocks/AreaPageTemplate";
import { AREAS } from "@/content/areas";

const cfg = AREAS.find((a) => a.slug === "emirates-living")!;

export default function MacBookRepairEmiratesLiving() {
  return <AreaPageTemplate cfg={cfg} />;
}
