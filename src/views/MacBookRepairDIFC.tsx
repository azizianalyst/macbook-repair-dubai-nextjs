"use client";
import { AreaPageTemplate } from "@/components/blocks/AreaPageTemplate";
import { AREAS } from "@/content/areas";

const cfg = AREAS.find((a) => a.slug === "difc")!;

export default function MacBookRepairDIFC() {
  return <AreaPageTemplate cfg={cfg} />;
}
