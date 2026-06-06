"use client";
import { AreaPageTemplate } from "@/components/blocks/AreaPageTemplate";
import { AREAS } from "@/content/areas";

const cfg = AREAS.find((a) => a.slug === "silicon-oasis")!;

export default function MacBookRepairSiliconOasis() {
  return <AreaPageTemplate cfg={cfg} />;
}
