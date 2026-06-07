import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogBestRefurbishedIPhone";

export const metadata: Metadata = metaForPath("/blog/best-refurbished-iphone-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/best-refurbished-iphone-dubai" />
      <View />
    </>
  );
}
