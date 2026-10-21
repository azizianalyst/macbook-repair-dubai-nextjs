import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookAirM2ScreenLines";

export const metadata: Metadata = metaFromFields("/blog/macbook-air-m2-screen-lines-dubai", {
  title: "MacBook Air M2 Screen Lines Dubai: Fix Guide 2026",
  description: "MacBook Air M2 screen lines in Dubai? How to tell a display cable fault from a panel fault, horizontal vs vertical lines, and repair options. WhatsApp us.",
  publishedTime: "2026-06-23",
  modifiedTime: "2026-06-23",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-air-m2-screen-lines-dubai" />
      <View />
    </>
  );
}
