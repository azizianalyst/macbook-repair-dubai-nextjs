import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookScreenFlickering";

export const metadata: Metadata = metaForPath("/blog/macbook-screen-flickering-fix");

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-screen-flickering-fix" />
      <View />
    </>
  );
}
