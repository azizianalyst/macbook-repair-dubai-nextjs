import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM1ScreenFlickering";

export const metadata: Metadata = {
  title: "MacBook Pro M1 Screen Flickering Dubai 2026",
  description: "MacBook Pro M1 screen flickering in Dubai? Big Sur and Monterey display bugs, display cable fault, or GPU rendering issue. Trackpad also affected?",
  openGraph: {
    type: "article",
    publishedTime: "2026-06-22",
    images: [{ url: "https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif", width: 1600, height: 900 }],
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://macbook-repair-dubai.ae/blog/macbook-pro-m1-screen-flickering-dubai" },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m1-screen-flickering-dubai" />
      <View />
    </>
  );
}
