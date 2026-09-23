"use client";
import { AreaPageTemplate } from "@/components/blocks/AreaPageTemplate";
import { AREAS } from "@/content/areas";

const cfg = AREAS.find((a) => a.slug === "al-furjan")!;

export default function MacBookRepairAlFurjan() {
  return <AreaPageTemplate cfg={cfg} />;
}
