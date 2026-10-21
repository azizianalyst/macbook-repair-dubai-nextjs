import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogBestMacForDevelopers";

export const metadata: Metadata = metaForPath("/blog/best-mac-for-developers-dubai-2026");

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/best-mac-for-developers-dubai-2026" />
      <View />
    </>
  );
}
