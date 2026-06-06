import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";

export const metadata: Metadata = metaForPath("/blog/m5-chip-explained-vs-m4");
export { default } from "@/views/BlogM5ChipExplained";
