"use client";
import { AreaPageTemplate } from "@/components/blocks/AreaPageTemplate";
import { AREAS } from "@/content/areas";

const cfg = AREAS.find((a) => a.slug === "rashidiya")!;

export default function MacBookRepairRashidiya() {
  return <AreaPageTemplate cfg={cfg} />;
}
