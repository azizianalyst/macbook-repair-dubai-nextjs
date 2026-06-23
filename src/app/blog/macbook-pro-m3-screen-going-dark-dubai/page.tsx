import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM3ScreenGoingDark";

export const metadata: Metadata = {
  title: "MacBook Pro M3 Screen Goes Dark Randomly Dubai 2026",
  description: "MacBook Pro M3 screen going dark randomly in Dubai? Display blacks out during use, auto-brightness dimming, or display power fault on mini-LED.",
  openGraph: {
    type: "article",
    publishedTime: "2026-06-22",
    images: [{ url: "https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif", width: 1600, height: 900 }],
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://macbook-repair-dubai.ae/blog/macbook-pro-m3-screen-going-dark-dubai" },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m3-screen-going-dark-dubai" />
      <View />
    </>
  );
}
