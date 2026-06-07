import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacMiniVsMacStudio";

export const metadata: Metadata = metaForPath("/blog/mac-mini-vs-mac-studio-2026");

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/mac-mini-vs-mac-studio-2026" />
      <View />
    </>
  );
}
