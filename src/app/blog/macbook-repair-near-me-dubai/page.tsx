import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookRepairNearMeDubai";

export const metadata: Metadata = metaForPath("/blog/macbook-repair-near-me-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-repair-near-me-dubai" />
      <View />
    </>
  );
}
