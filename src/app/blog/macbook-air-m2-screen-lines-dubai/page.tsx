import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookAirM2ScreenLines";

export const metadata: Metadata = metaFromFields("/blog/macbook-air-m2-screen-lines-dubai", {
  title: "MacBook Air M2 Screen Lines Dubai? Horizontal & Vertical Fix 2026",
  description: "Horizontal or vertical lines on MacBook Air M2 screen in Dubai? Display cable, panel fault, or GPU. Free diagnosis, same-day repair. WhatsApp us for a quote.",
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
