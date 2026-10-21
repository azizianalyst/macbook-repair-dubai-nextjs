"use client";
import { AreaPageTemplate } from "@/components/blocks/AreaPageTemplate";
import { AREAS } from "@/content/areas";

const cfg = AREAS.find((a) => a.slug === "dubai-creek-harbour")!;

export default function MacBookRepairDubaiCreekHarbour() {
  return <AreaPageTemplate cfg={cfg} />;
}
