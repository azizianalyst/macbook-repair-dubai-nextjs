import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";

export const metadata: Metadata = metaForPath("/blog/macbook-screen-flickering-fix");
export { default } from "@/views/BlogMacBookScreenFlickering";
