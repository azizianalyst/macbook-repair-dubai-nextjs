import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";

// Demo/template page — explicitly noindex so it can't compete in search or waste crawl budget.
export const metadata: Metadata = {
  ...metaForPath("/landing-template-demo"),
  robots: { index: false, follow: false },
};
export { default } from "@/views/LandingTemplateDemo";
