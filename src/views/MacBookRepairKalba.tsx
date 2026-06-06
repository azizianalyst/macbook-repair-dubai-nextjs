"use client";
import { CityPageTemplate } from "@/components/blocks/CityPageTemplate";
import { findCity } from "@/content/cities";

const cfg = findCity("kalba")!;

export default function MacBookRepairKalba() {
  return <CityPageTemplate cfg={cfg} />;
}
