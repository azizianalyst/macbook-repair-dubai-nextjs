import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogShouldBuyRefurbishedMacBook";

export const metadata: Metadata = metaForPath("/blog/should-i-buy-refurbished-macbook-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/should-i-buy-refurbished-macbook-dubai" />
      <View />
    </>
  );
}
