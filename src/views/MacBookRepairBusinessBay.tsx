"use client";
import { AreaPageTemplate } from "@/components/blocks/AreaPageTemplate";
import { AREAS } from "@/content/areas";

const cfg = AREAS.find((a) => a.slug === "business-bay")!;

export default function MacBookRepairBusinessBay() {
  return <AreaPageTemplate cfg={cfg} />;
}
