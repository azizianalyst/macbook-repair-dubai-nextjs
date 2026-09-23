import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM2SsdDegrading";

export const metadata: Metadata = metaFromFields("/blog/macbook-pro-m2-ssd-degrading-fast-dubai", {
  title: "MacBook Pro M2 SSD Degrading Fast Dubai 2026",
  description: "MacBook Pro M2 SSD degrading fast in Dubai? M2 13-inch had a write amplification bug in Ventura that wrote 10-100x more data than expected.",
  publishedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m2-ssd-degrading-fast-dubai" />
      <View />
    </>
  );
}
