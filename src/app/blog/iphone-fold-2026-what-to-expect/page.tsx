import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogIPhoneFold2026";

export const metadata: Metadata = metaForPath("/blog/iphone-fold-2026-what-to-expect");

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/iphone-fold-2026-what-to-expect" />
      <View />
    </>
  );
}
