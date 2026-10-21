"use client";
import { AreaPageTemplate } from "@/components/blocks/AreaPageTemplate";
import { AREAS } from "@/content/areas";

const cfg = AREAS.find((a) => a.slug === "arabian-ranches")!;

export default function MacBookRepairArabianRanches() {
  return <AreaPageTemplate cfg={cfg} />;
}
