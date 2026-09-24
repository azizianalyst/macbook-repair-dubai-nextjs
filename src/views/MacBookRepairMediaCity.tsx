"use client";
import { AreaPageTemplate } from "@/components/blocks/AreaPageTemplate";
import { AREAS } from "@/content/areas";

const cfg = AREAS.find((a) => a.slug === "media-city")!;

export default function MacBookRepairMediaCity() {
  return <AreaPageTemplate cfg={cfg} />;
}
