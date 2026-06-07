import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogIPhoneScreenReplacedIssues";

export const metadata: Metadata = metaForPath("/blog/iphone-screen-replaced-but-issues-after");

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/iphone-screen-replaced-but-issues-after" />
      <View />
    </>
  );
}
