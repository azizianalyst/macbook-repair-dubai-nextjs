"use client";
import { CityPageTemplate } from "@/components/blocks/CityPageTemplate";
import { findCity } from "@/content/cities";

const cfg = findCity("sharjah")!;

export default function MacBookRepairSharjah() {
  return <CityPageTemplate cfg={cfg} />;
}
