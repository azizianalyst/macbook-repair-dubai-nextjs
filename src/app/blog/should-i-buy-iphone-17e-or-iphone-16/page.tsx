import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogIPhone17eOrIPhone16";

export const metadata: Metadata = metaForPath("/blog/should-i-buy-iphone-17e-or-iphone-16");

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/should-i-buy-iphone-17e-or-iphone-16" />
      <View />
    </>
  );
}
