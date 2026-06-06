import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";

export const metadata: Metadata = metaForPath("/do-macbooks-last-over-a-decade");
export { default } from "@/views/GuideMacBookLifespan";
