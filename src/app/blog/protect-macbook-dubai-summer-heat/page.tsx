import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogProtectMacBookSummerHeat";

export const metadata: Metadata = metaForPath("/blog/protect-macbook-dubai-summer-heat");

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/protect-macbook-dubai-summer-heat" />
      <View />
    </>
  );
}
