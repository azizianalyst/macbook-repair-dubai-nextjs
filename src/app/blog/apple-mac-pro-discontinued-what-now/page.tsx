import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";

export const metadata: Metadata = metaForPath("/blog/apple-mac-pro-discontinued-what-now");
export { default } from "@/views/BlogMacProDiscontinued";
