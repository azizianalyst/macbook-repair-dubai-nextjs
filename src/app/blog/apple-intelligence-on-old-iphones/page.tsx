import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogAppleIntelligenceCompatibility";

export const metadata: Metadata = metaForPath("/blog/apple-intelligence-on-old-iphones");

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/apple-intelligence-on-old-iphones" />
      <View />
    </>
  );
}
