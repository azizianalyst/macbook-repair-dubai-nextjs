"use client";
import { AreaPageTemplate } from "@/components/blocks/AreaPageTemplate";
import { AREAS } from "@/content/areas";

const cfg = AREAS.find((a) => a.slug === "palm-jumeirah")!;

export default function MacBookRepairPalmJumeirah() {
  return <AreaPageTemplate cfg={cfg} />;
}
