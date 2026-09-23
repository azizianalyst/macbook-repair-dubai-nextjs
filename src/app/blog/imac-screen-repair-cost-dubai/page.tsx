import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogIMacScreenRepair";

export const metadata: Metadata = metaFromFields("/blog/imac-screen-repair-cost-dubai", {
  title: "iMac Screen Repair Cost Dubai 2026: 21.5\" and 27\" Guide",
  description: "iMac screen repair Dubai: 21.5-inch and 27-inch Retina panel replacement, iMac M1 and Intel. Same-day service. WhatsApp us for your exact quote.",
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/imac-screen-repair-cost-dubai" />
      <View />
    </>
  );
}
