"use client";
import { AreaPageTemplate } from "@/components/blocks/AreaPageTemplate";
import { AREAS } from "@/content/areas";

const cfg = AREAS.find((a) => a.slug === "garhoud")!;

export default function MacBookRepairGarhoud() {
  return <AreaPageTemplate cfg={cfg} />;
}
