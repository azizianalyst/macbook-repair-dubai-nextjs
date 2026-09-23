import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogIMacRunningSlow";

export const metadata: Metadata = metaFromFields("/blog/imac-running-slow-dubai", {
  title: "iMac Running Slow Dubai? 8 Fixes, M and Intel, 2026",
  description: "iMac running slow in Dubai? 8 fixes for M1, M3, M4 and Intel models. SSD and RAM upgrades at our workshop — message us on WhatsApp for a quote.",
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/imac-running-slow-dubai" />
      <View />
    </>
  );
}
