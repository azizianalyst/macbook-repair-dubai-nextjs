import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/GuideRefurbishedMacBookSources";

export const metadata: Metadata = metaForPath("/sources-to-purchase-a-refurbished-macbook");

export default function Page() {
  return (
    <>
      <PageSchema path="/sources-to-purchase-a-refurbished-macbook" />
      <View />
    </>
  );
}
