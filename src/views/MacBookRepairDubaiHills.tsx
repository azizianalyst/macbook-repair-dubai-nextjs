"use client";
import { AreaPageTemplate } from "@/components/blocks/AreaPageTemplate";
import { AREAS } from "@/content/areas";

const cfg = AREAS.find((a) => a.slug === "dubai-hills")!;

export default function MacBookRepairDubaiHills() {
  return <AreaPageTemplate cfg={cfg} />;
}
