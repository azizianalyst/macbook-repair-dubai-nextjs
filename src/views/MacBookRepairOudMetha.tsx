"use client";
import { AreaPageTemplate } from "@/components/blocks/AreaPageTemplate";
import { AREAS } from "@/content/areas";

const cfg = AREAS.find((a) => a.slug === "oud-metha")!;

export default function MacBookRepairOudMetha() {
  return <AreaPageTemplate cfg={cfg} />;
}
