import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogIPhoneOverheatingDubaiSummer";

export const metadata: Metadata = metaForPath("/blog/iphone-overheating-dubai-summer-fix");

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/iphone-overheating-dubai-summer-fix" />
      <View />
    </>
  );
}
