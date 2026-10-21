"use client";
import { AreaPageTemplate } from "@/components/blocks/AreaPageTemplate";
import { AREAS } from "@/content/areas";

const cfg = AREAS.find((a) => a.slug === "zabeel")!;

export default function MacBookRepairZabeel() {
  return <AreaPageTemplate cfg={cfg} />;
}
