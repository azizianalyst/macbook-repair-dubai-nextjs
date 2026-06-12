"use client";
import { AreaPageTemplate } from "@/components/blocks/AreaPageTemplate";
import { AREAS } from "@/content/areas";

const cfg = AREAS.find((a) => a.slug === "mirdif")!;

export default function MacBookRepairMirdif() {
  return <AreaPageTemplate cfg={cfg} />;
}
