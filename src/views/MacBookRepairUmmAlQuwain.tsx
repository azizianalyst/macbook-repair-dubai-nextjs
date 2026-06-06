"use client";
import { CityPageTemplate } from "@/components/blocks/CityPageTemplate";
import { findCity } from "@/content/cities";

const cfg = findCity("umm-al-quwain")!;

export default function MacBookRepairUmmAlQuwain() {
  return <CityPageTemplate cfg={cfg} />;
}
