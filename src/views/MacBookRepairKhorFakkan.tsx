"use client";
import { CityPageTemplate } from "@/components/blocks/CityPageTemplate";
import { findCity } from "@/content/cities";

const cfg = findCity("khor-fakkan")!;

export default function MacBookRepairKhorFakkan() {
  return <CityPageTemplate cfg={cfg} />;
}
