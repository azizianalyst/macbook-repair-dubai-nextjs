import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";

export const metadata: Metadata = metaForPath("/blog/no-fix-no-charge-policy-explained");
export { default } from "@/views/BlogNoFixNoChargePolicy";
