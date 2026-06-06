import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";

export const metadata: Metadata = metaForPath("/blog/apple-intelligence-on-old-iphones");
export { default } from "@/views/BlogAppleIntelligenceCompatibility";
