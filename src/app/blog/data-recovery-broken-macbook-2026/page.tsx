import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogDataRecoveryBrokenMacBook";

export const metadata: Metadata = metaForPath("/blog/data-recovery-broken-macbook-2026");

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/data-recovery-broken-macbook-2026" />
      <View />
    </>
  );
}
