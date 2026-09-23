import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogIPhoneCrackedScreen";

export const metadata: Metadata = metaFromFields("/blog/iphone-cracked-screen-repair-dubai", {
  title: "iPhone Cracked Screen Repair Dubai 2026: Costs by Model",
  description: "iPhone cracked screen repair Dubai — OLED and LCD replacement for all iPhone models. Free diagnosis, same-day service. Message us on WhatsApp for your price.",
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/iphone-cracked-screen-repair-dubai" />
      <View />
    </>
  );
}
