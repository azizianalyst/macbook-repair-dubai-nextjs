"use client";
import { AreaPageTemplate } from "@/components/blocks/AreaPageTemplate";
import { AREAS } from "@/content/areas";

const cfg = AREAS.find((a) => a.slug === "dubai-south")!;

export default function MacBookRepairDubaiSouth() {
  return <AreaPageTemplate cfg={cfg} />;
}
