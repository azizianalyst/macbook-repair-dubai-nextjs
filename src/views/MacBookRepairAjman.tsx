"use client";
import { CityPageTemplate } from "@/components/blocks/CityPageTemplate";
import { findCity } from "@/content/cities";

const cfg = findCity("ajman")!;

export default function MacBookRepairAjman() {
  return <CityPageTemplate cfg={cfg} />;
}
