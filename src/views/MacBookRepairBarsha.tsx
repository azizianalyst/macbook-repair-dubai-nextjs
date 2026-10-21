"use client";
import { AreaPageTemplate } from "@/components/blocks/AreaPageTemplate";
import { AREAS } from "@/content/areas";

const cfg = AREAS.find((a) => a.slug === "barsha")!;

export default function MacBookRepairBarsha() {
  return <AreaPageTemplate cfg={cfg} />;
}
