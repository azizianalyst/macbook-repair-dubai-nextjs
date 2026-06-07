import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogIPhoneRepairVsReplace";

export const metadata: Metadata = metaForPath("/blog/iphone-repair-vs-replace-decision-guide");

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/iphone-repair-vs-replace-decision-guide" />
      <View />
    </>
  );
}
