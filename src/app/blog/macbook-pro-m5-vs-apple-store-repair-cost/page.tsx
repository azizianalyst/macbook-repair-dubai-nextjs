import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM5VsAppleStore";

export const metadata: Metadata = metaForPath("/blog/macbook-pro-m5-vs-apple-store-repair-cost");

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m5-vs-apple-store-repair-cost" />
      <View />
    </>
  );
}
