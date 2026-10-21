"use client";
import { AreaPageTemplate } from "@/components/blocks/AreaPageTemplate";
import { AREAS } from "@/content/areas";

const cfg = AREAS.find((a) => a.slug === "muhaisnah")!;

export default function MacBookRepairMuhaisnah() {
  return <AreaPageTemplate cfg={cfg} />;
}
