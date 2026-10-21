"use client";
import { AreaPageTemplate } from "@/components/blocks/AreaPageTemplate";
import { AREAS } from "@/content/areas";

const cfg = AREAS.find((a) => a.slug === "the-greens")!;

export default function MacBookRepairTheGreens() {
  return <AreaPageTemplate cfg={cfg} />;
}
