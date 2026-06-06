import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";

export const metadata: Metadata = metaForPath("/blog/imac-vs-mac-mini-vs-mac-studio");
export { default } from "@/views/BlogIMacVsMacMiniVsStudio";
