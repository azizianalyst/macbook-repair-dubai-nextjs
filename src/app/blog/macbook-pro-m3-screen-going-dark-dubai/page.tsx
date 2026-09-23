import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM3ScreenGoingDark";

export const metadata: Metadata = metaFromFields("/blog/macbook-pro-m3-screen-going-dark-dubai", {
  title: "MacBook Pro M3 Screen Goes Dark Randomly Dubai 2026",
  description: "MacBook Pro M3 screen going dark randomly in Dubai? Display blacks out during use, auto-brightness dimming, or display power fault on mini-LED.",
  publishedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m3-screen-going-dark-dubai" />
      <View />
    </>
  );
}
