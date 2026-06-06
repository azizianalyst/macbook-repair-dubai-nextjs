"use client";
import { AreaPageTemplate } from "@/components/blocks/AreaPageTemplate";
import { AREAS } from "@/content/areas";

const cfg = AREAS.find((a) => a.slug === "downtown-dubai")!;

export default function MacBookRepairDowntownDubai() {
  return <AreaPageTemplate cfg={cfg} />;
}
