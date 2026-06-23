"use client";
import { AreaPageTemplate } from "@/components/blocks/AreaPageTemplate";
import { AREAS } from "@/content/areas";

const cfg = AREAS.find((a) => a.slug === "discovery-gardens")!;

export default function MacBookRepairDiscoveryGardens() {
  return <AreaPageTemplate cfg={cfg} />;
}
