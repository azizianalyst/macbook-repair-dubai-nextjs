import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookFlexgateExplained";

export const metadata: Metadata = metaForPath("/blog/macbook-flexgate-explained");

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-flexgate-explained" />
      <View />
    </>
  );
}
