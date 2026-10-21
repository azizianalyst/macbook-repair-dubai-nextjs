import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogIPhoneRepairVsAppleCare";

export const metadata: Metadata = metaForPath("/blog/iphone-repair-vs-applecare-which-better");

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/iphone-repair-vs-applecare-which-better" />
      <View />
    </>
  );
}
