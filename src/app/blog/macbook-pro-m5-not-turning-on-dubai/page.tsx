import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM5NotTurningOn";

export const metadata: Metadata = metaFromFields("/blog/macbook-pro-m5-not-turning-on-dubai", {
  title: "MacBook Pro M5 Not Turning On Dubai 2026",
  description: "MacBook Pro M5 not turning on? Step-by-step fixes for deep battery discharge, a frozen boot and startup disk boot loops. Free diagnosis, WhatsApp us today.",
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m5-not-turning-on-dubai" />
      <View />
    </>
  );
}
