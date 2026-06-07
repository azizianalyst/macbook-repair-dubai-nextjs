import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogIPhone15ProOverheating";

export const metadata: Metadata = metaForPath("/blog/iphone-15-pro-overheating-fix");

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/iphone-15-pro-overheating-fix" />
      <View />
    </>
  );
}
