import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";

export const metadata: Metadata = metaForPath("/blog/mac-mini-running-slow-fix");
export { default } from "@/views/BlogMacMiniRunningSlow";
