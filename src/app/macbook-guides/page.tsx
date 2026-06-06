import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";

export const metadata: Metadata = metaForPath("/macbook-guides");
export { default } from "@/views/MacBookGuides";
