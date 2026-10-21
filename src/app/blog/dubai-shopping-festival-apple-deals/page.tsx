import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogDubaiShoppingFestivalApple";

export const metadata: Metadata = metaForPath("/blog/dubai-shopping-festival-apple-deals");

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/dubai-shopping-festival-apple-deals" />
      <View />
    </>
  );
}
