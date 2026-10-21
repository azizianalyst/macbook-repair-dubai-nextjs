import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogIPadScreenRepair";

export const metadata: Metadata = metaFromFields("/blog/ipad-screen-repair-cost-dubai", {
  title: "iPad Screen Repair Cost Dubai 2026: Prices by Model",
  description: "iPad screen repair cost in Dubai for every model, from standard iPad to iPad Pro M4 OLED, most done same day at Concord Tower. WhatsApp us for your model.",
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/ipad-screen-repair-cost-dubai" />
      <View />
    </>
  );
}
