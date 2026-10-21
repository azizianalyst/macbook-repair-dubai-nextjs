"use client";
import { AreaPageTemplate } from "@/components/blocks/AreaPageTemplate";
import { AREAS } from "@/content/areas";

const cfg = AREAS.find((a) => a.slug === "production-city")!;

export default function MacBookRepairProductionCity() {
  return <AreaPageTemplate cfg={cfg} />;
}
