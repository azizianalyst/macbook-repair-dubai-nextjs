"use client";
import { CityPageTemplate } from "@/components/blocks/CityPageTemplate";
import { findCity } from "@/content/cities";

const cfg = findCity("fujairah")!;

export default function MacBookRepairFujairah() {
  return <CityPageTemplate cfg={cfg} />;
}
