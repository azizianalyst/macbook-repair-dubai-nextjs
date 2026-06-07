import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogICloudLockedIPhone";

export const metadata: Metadata = metaForPath("/blog/icloud-locked-iphone-what-to-do");

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/icloud-locked-iphone-what-to-do" />
      <View />
    </>
  );
}
