"use client";
import { AreaPageTemplate } from "@/components/blocks/AreaPageTemplate";
import { AREAS } from "@/content/areas";

const cfg = AREAS.find((a) => a.slug === "jumeirah-golf-estates")!;

export default function MacBookRepairJumeirahGolfEstates() {
  return <AreaPageTemplate cfg={cfg} />;
}
