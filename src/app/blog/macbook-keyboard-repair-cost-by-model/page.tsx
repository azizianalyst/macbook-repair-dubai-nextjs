import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";

export const metadata: Metadata = metaForPath("/blog/macbook-keyboard-repair-cost-by-model");
export { default } from "@/views/BlogMacBookKeyboardRepairCost";
