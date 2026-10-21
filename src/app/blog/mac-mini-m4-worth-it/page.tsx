import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacMiniM4WorthIt";

export const metadata: Metadata = metaForPath("/blog/mac-mini-m4-worth-it");

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/mac-mini-m4-worth-it" />
      <View />
    </>
  );
}
