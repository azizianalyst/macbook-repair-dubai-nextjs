import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM1NotTurningOn";

export const metadata: Metadata = {
  title: "MacBook Pro M1 Not Turning On Dubai 2026",
  description: "MacBook Pro M1 not turning on in Dubai? At 5 years old, M1 13-inch has no MagSafe: USB-C deep discharge is different to diagnose.",
  openGraph: {
    type: "article",
    publishedTime: "2026-06-22",
    images: [{ url: "https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif", width: 1600, height: 900 }],
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://macbook-repair-dubai.ae/blog/macbook-pro-m1-not-turning-on-dubai" },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m1-not-turning-on-dubai" />
      <View />
    </>
  );
}
