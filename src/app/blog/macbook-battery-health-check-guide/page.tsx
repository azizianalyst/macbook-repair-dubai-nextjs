import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";

export const metadata: Metadata = metaForPath("/blog/macbook-battery-health-check-guide");
export { default } from "@/views/BlogMacBookBatteryHealthCheck";
