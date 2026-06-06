import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";

export const metadata: Metadata = metaForPath("/blog/macbook-wont-charge-fixes");
export { default } from "@/views/BlogMacBookWontCharge";
