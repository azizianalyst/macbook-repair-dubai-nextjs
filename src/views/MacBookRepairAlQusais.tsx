"use client";
import { AreaPageTemplate } from "@/components/blocks/AreaPageTemplate";
import { AREAS } from "@/content/areas";

const cfg = AREAS.find((a) => a.slug === "al-qusais")!;

export default function MacBookRepairAlQusais() {
  return <AreaPageTemplate cfg={cfg} />;
}
