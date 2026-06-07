import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogBestWaySellOldIPhone";

export const metadata: Metadata = metaForPath("/blog/best-way-to-sell-old-iphone-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/best-way-to-sell-old-iphone-dubai" />
      <View />
    </>
  );
}
