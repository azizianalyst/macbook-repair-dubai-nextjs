"use client";
import { CityPageTemplate } from "@/components/blocks/CityPageTemplate";
import { findCity } from "@/content/cities";

const cfg = findCity("abu-dhabi")!;

export default function MacBookRepairAbuDhabi() {
  return <CityPageTemplate cfg={cfg} />;
}
