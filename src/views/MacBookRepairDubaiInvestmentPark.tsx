"use client";
import { AreaPageTemplate } from "@/components/blocks/AreaPageTemplate";
import { AREAS } from "@/content/areas";

const cfg = AREAS.find((a) => a.slug === "dubai-investment-park")!;

export default function MacBookRepairDubaiInvestmentPark() {
  return <AreaPageTemplate cfg={cfg} />;
}
