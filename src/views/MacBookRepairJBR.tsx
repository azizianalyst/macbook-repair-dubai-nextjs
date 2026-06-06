"use client";
import { AreaPageTemplate } from "@/components/blocks/AreaPageTemplate";
import { AREAS } from "@/content/areas";

const cfg = AREAS.find((a) => a.slug === "jbr")!;

export default function MacBookRepairJBR() {
  return <AreaPageTemplate cfg={cfg} />;
}
