"use client";
import { AreaPageTemplate } from "@/components/blocks/AreaPageTemplate";
import { AREAS } from "@/content/areas";

const cfg = AREAS.find((a) => a.slug === "jvc")!;

export default function MacBookRepairJVC() {
  return <AreaPageTemplate cfg={cfg} />;
}
