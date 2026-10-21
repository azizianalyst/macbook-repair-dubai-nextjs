import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM5Throttling";

export const metadata: Metadata = metaFromFields("/blog/macbook-pro-m5-throttling-fix-dubai", {
  title: "MacBook Pro M5 Throttling Fix Dubai 2026",
  description: "MacBook Pro M5 throttling in Dubai? M5 slows down under load, fans don't spin, CPU drops to 600 MHz. Step-by-step fix guide for thermal throttling.",
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m5-throttling-fix-dubai" />
      <View />
    </>
  );
}
