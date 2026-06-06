import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";

export const metadata: Metadata = metaForPath("/macbook-repair-jbr");
export { default } from "@/views/MacBookRepairJBR";
