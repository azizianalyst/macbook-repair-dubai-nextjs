import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";

export const metadata: Metadata = metaForPath("/blog/macbook-touch-bar-not-working");
export { default } from "@/views/BlogMacBookTouchBarFix";
