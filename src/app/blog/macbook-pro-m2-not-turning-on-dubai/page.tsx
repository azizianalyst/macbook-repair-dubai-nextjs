import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM2NotTurningOn";

export const metadata: Metadata = {
  title: "MacBook Pro M2 Not Turning On Dubai 2026",
  description: "MacBook Pro M2 not turning on in Dubai? Step-by-step fix: force restart, deep discharge recovery, DFU restore, and when to get logic board repair.",
  openGraph: {
    type: "article",
    publishedTime: "2026-06-22",
    images: [{ url: "https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif", width: 1600, height: 900 }],
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://macbook-repair-dubai.ae/blog/macbook-pro-m2-not-turning-on-dubai" },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m2-not-turning-on-dubai" />
      <View />
    </>
  );
}
