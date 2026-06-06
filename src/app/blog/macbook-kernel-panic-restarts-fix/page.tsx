import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";

export const metadata: Metadata = metaForPath("/blog/macbook-kernel-panic-restarts-fix");
export { default } from "@/views/BlogMacBookKernelPanic";
