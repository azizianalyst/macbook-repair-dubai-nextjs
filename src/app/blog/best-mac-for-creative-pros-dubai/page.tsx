import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogBestMacForCreativePros";

export const metadata: Metadata = metaForPath("/blog/best-mac-for-creative-pros-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/best-mac-for-creative-pros-dubai" />
      <View />
    </>
  );
}
