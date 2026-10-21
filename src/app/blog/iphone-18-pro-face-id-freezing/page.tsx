import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogIPhone18ProFaceIdFreezing";

export const metadata: Metadata = metaFromFields("/blog/iphone-18-pro-face-id-freezing", {
  title: "iPhone 18 Pro Face ID Freezing or Restarting: Fix or Repair?",
  description: "iPhone 18 Pro freezing or restarting after Face ID? What was reported in September 2026, safe fixes to try first, and when it is a hardware repair.",
  publishedTime: "2026-09-26",
  modifiedTime: "2026-09-26",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/iphone-18-pro-face-id-freezing" />
      <View />
    </>
  );
}
