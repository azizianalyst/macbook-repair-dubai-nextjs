import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogBestIMacForBusiness";

export const metadata: Metadata = metaForPath("/blog/best-imac-for-business-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/best-imac-for-business-dubai" />
      <View />
    </>
  );
}
