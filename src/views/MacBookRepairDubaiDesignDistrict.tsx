"use client";
import { AreaPageTemplate } from "@/components/blocks/AreaPageTemplate";
import { AREAS } from "@/content/areas";

const cfg = AREAS.find((a) => a.slug === "dubai-design-district")!;

export default function MacBookRepairDubaiDesignDistrict() {
  return <AreaPageTemplate cfg={cfg} />;
}
