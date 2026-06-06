import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";

export const metadata: Metadata = metaForPath("/blog/macbook-wifi-not-working-fix");
export { default } from "@/views/BlogMacBookWifiNotWorking";
