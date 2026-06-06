"use client";
import { CityPageTemplate } from "@/components/blocks/CityPageTemplate";
import { findCity } from "@/content/cities";

const cfg = findCity("al-ain")!;

export default function MacBookRepairAlAin() {
  return <CityPageTemplate cfg={cfg} />;
}
