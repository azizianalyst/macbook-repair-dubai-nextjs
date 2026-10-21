import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/AziziTemplateDemo";

// Demo/template page — explicitly noindex so it can't compete in search or waste
// crawl budget. Pairs with /landing-template-demo (the older 8-section template)
// on the same subject, so the two can be compared like for like.
export const metadata: Metadata = {
  ...metaForPath("/azizi-template-demo"),
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/azizi-template-demo" />
      <View />
    </>
  );
}
