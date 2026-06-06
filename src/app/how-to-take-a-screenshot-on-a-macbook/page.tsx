import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";

export const metadata: Metadata = metaForPath("/how-to-take-a-screenshot-on-a-macbook");
export { default } from "@/views/GuideMacBookScreenshot";
