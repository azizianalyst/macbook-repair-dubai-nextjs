import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM1ScreenFlickering";

export const metadata: Metadata = metaFromFields("/blog/macbook-pro-m1-screen-flickering-dubai", {
  title: "MacBook Pro M1 Screen Flickering Dubai 2026",
  description: "MacBook Pro M1 screen flickering in Dubai? Big Sur and Monterey display bugs, display cable fault, or GPU rendering issue. Trackpad also affected?",
  publishedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m1-screen-flickering-dubai" />
      <View />
    </>
  );
}
