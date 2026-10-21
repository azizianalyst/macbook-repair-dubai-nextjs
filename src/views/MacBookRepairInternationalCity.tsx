"use client";
import { AreaPageTemplate } from "@/components/blocks/AreaPageTemplate";
import { AREAS } from "@/content/areas";

const cfg = AREAS.find((a) => a.slug === "international-city")!;

export default function MacBookRepairInternationalCity() {
  return <AreaPageTemplate cfg={cfg} />;
}
