import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogIPhone17VsAir";

export const metadata: Metadata = metaForPath("/blog/iphone-17-vs-iphone-air-which-buy");

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/iphone-17-vs-iphone-air-which-buy" />
      <View />
    </>
  );
}
