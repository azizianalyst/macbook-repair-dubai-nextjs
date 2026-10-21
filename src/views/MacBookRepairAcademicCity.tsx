"use client";
import { AreaPageTemplate } from "@/components/blocks/AreaPageTemplate";
import { AREAS } from "@/content/areas";

const cfg = AREAS.find((a) => a.slug === "academic-city")!;

export default function MacBookRepairAcademicCity() {
  return <AreaPageTemplate cfg={cfg} />;
}
