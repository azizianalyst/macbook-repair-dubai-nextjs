"use client";
import { AreaPageTemplate } from "@/components/blocks/AreaPageTemplate";
import { AREAS } from "@/content/areas";

const cfg = AREAS.find((a) => a.slug === "dubai-sports-city")!;

export default function MacBookRepairDubaiSportsCity() {
  return <AreaPageTemplate cfg={cfg} />;
}
