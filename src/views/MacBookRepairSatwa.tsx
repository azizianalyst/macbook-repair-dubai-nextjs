"use client";
import { AreaPageTemplate } from "@/components/blocks/AreaPageTemplate";
import { AREAS } from "@/content/areas";

const cfg = AREAS.find((a) => a.slug === "satwa")!;

export default function MacBookRepairSatwa() {
  return <AreaPageTemplate cfg={cfg} />;
}
