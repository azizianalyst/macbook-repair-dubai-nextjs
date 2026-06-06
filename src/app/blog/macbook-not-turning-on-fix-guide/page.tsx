import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";

export const metadata: Metadata = metaForPath("/blog/macbook-not-turning-on-fix-guide");
export { default } from "@/views/BlogMacBookNotTurningOn";
