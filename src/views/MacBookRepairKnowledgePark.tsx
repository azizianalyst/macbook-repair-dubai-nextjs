"use client";
import { AreaPageTemplate } from "@/components/blocks/AreaPageTemplate";
import { AREAS } from "@/content/areas";

const cfg = AREAS.find((a) => a.slug === "knowledge-park")!;

export default function MacBookRepairKnowledgePark() {
  return <AreaPageTemplate cfg={cfg} />;
}
