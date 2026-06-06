"use client";
import { AreaPageTemplate } from "@/components/blocks/AreaPageTemplate";
import { AREAS } from "@/content/areas";

const cfg = AREAS.find((a) => a.slug === "jumeirah")!;

export default function MacBookRepairJumeirah() {
  return <AreaPageTemplate cfg={cfg} />;
}
