import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookWontCharge";

export const metadata: Metadata = metaForPath("/blog/macbook-wont-charge-fixes");

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-wont-charge-fixes" />
      <View />
    </>
  );
}
