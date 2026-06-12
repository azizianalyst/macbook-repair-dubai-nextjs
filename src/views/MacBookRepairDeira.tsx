"use client";
import { AreaPageTemplate } from "@/components/blocks/AreaPageTemplate";
import { AREAS } from "@/content/areas";

const cfg = AREAS.find((a) => a.slug === "deira")!;

export default function MacBookRepairDeira() {
  return <AreaPageTemplate cfg={cfg} />;
}
