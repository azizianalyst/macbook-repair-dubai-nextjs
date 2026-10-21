"use client";
import { AreaPageTemplate } from "@/components/blocks/AreaPageTemplate";
import { AREAS } from "@/content/areas";

const cfg = AREAS.find((a) => a.slug === "al-warqa")!;

export default function MacBookRepairAlWarqa() {
  return <AreaPageTemplate cfg={cfg} />;
}
