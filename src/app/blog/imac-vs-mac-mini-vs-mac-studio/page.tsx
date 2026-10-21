import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogIMacVsMacMiniVsStudio";

export const metadata: Metadata = metaForPath("/blog/imac-vs-mac-mini-vs-mac-studio");

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/imac-vs-mac-mini-vs-mac-studio" />
      <View />
    </>
  );
}
