"use client";
import { AreaPageTemplate } from "@/components/blocks/AreaPageTemplate";
import { AREAS } from "@/content/areas";

const cfg = AREAS.find((a) => a.slug === "meydan")!;

export default function MacBookRepairMeydan() {
  return <AreaPageTemplate cfg={cfg} />;
}
