import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";

export const metadata: Metadata = metaForPath("/macbook-repair-near-me");
export { default } from "@/views/MacBookRepairNearMe";
