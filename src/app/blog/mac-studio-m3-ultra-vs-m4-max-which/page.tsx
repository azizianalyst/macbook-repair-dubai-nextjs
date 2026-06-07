import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacStudioM3UltraVsM4Max";

export const metadata: Metadata = metaForPath("/blog/mac-studio-m3-ultra-vs-m4-max-which");

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/mac-studio-m3-ultra-vs-m4-max-which" />
      <View />
    </>
  );
}
