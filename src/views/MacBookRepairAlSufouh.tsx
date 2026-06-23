"use client";
import { AreaPageTemplate } from "@/components/blocks/AreaPageTemplate";
import { AREAS } from "@/content/areas";

const cfg = AREAS.find((a) => a.slug === "al-sufouh")!;

export default function MacBookRepairAlSufouh() {
  return <AreaPageTemplate cfg={cfg} />;
}
