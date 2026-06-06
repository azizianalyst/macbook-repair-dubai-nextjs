"use client";
import { AreaPageTemplate } from "@/components/blocks/AreaPageTemplate";
import { AREAS } from "@/content/areas";

const cfg = AREAS.find((a) => a.slug === "dubai-marina")!;

export default function MacBookRepairDubaiMarina() {
  return <AreaPageTemplate cfg={cfg} />;
}
