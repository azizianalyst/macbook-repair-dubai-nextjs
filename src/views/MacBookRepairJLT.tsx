"use client";
import { AreaPageTemplate } from "@/components/blocks/AreaPageTemplate";
import { AREAS } from "@/content/areas";

const cfg = AREAS.find((a) => a.slug === "jlt")!;

export default function MacBookRepairJLT() {
  return <AreaPageTemplate cfg={cfg} />;
}
