import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";

export const metadata: Metadata = metaForPath("/blog/macbook-stuck-on-apple-logo");
export { default } from "@/views/BlogMacBookStuckAppleLogo";
