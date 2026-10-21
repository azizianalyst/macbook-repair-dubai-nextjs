"use client";
import { AreaPageTemplate } from "@/components/blocks/AreaPageTemplate";
import { AREAS } from "@/content/areas";

const cfg = AREAS.find((a) => a.slug === "festival-city")!;

export default function MacBookRepairFestivalCity() {
  return <AreaPageTemplate cfg={cfg} />;
}
