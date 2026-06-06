import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";

export const metadata: Metadata = metaForPath("/blog/macbook-fan-loud-always-on");
export { default } from "@/views/BlogMacBookLoudFan";
