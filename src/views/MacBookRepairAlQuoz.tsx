"use client";
import { AreaPageTemplate } from "@/components/blocks/AreaPageTemplate";
import { AREAS } from "@/content/areas";

const cfg = AREAS.find((a) => a.slug === "al-quoz")!;

export default function MacBookRepairAlQuoz() {
  return <AreaPageTemplate cfg={cfg} />;
}
