import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";

export const metadata: Metadata = metaForPath("/macos-reinstall-dubai");
export { default } from "@/views/MacOsReinstall";
