"use client";
import { AreaPageTemplate } from "@/components/blocks/AreaPageTemplate";
import { AREAS } from "@/content/areas";

const cfg = AREAS.find((a) => a.slug === "al-nahda")!;

export default function MacBookRepairAlNahda() {
  return <AreaPageTemplate cfg={cfg} />;
}
