"use client";
import { AreaPageTemplate } from "@/components/blocks/AreaPageTemplate";
import { AREAS } from "@/content/areas";

const cfg = AREAS.find((a) => a.slug === "bur-dubai")!;

export default function MacBookRepairBurDubai() {
  return <AreaPageTemplate cfg={cfg} />;
}
