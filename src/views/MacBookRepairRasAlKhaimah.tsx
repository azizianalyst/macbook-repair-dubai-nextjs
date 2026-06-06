"use client";
import { CityPageTemplate } from "@/components/blocks/CityPageTemplate";
import { findCity } from "@/content/cities";

const cfg = findCity("ras-al-khaimah")!;

export default function MacBookRepairRasAlKhaimah() {
  return <CityPageTemplate cfg={cfg} />;
}
