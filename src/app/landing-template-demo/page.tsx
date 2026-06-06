import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";

export const metadata: Metadata = metaForPath("/landing-template-demo");
export { default } from "@/views/LandingTemplateDemo";
