import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogAppleSiliconVsIntelRepair";

export const metadata: Metadata = metaForPath("/blog/apple-silicon-vs-intel-repair-difference");

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/apple-silicon-vs-intel-repair-difference" />
      <View />
    </>
  );
}
