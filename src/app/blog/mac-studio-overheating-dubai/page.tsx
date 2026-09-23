import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacStudioOverheating";

export const metadata: Metadata = metaFromFields("/blog/mac-studio-overheating-dubai", {
  title: "Mac Studio Overheating or Loud Fan in Dubai? Fixes 2026",
  description: "Mac Studio overheating or fan loud in Dubai? Dust, airflow and 35°C heat explained. Message us on WhatsApp for thermal service pricing.",
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/mac-studio-overheating-dubai" />
      <View />
    </>
  );
}
