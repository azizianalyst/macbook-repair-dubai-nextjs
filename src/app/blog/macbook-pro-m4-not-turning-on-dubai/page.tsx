import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM4NotTurningOn";

export const metadata: Metadata = {
  title: "MacBook Pro M4 Not Turning On Dubai 2026",
  description: "MacBook Pro M4 not turning on in Dubai? Dead, black screen, or stuck on Apple logo? Force restart, deep discharge fix, and black screen vs dead diagnosis.",
  openGraph: {
    type: "article",
    publishedTime: "2026-06-22",
    images: [{ url: "https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif", width: 1600, height: 900 }],
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://macbook-repair-dubai.ae/blog/macbook-pro-m4-not-turning-on-dubai" },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m4-not-turning-on-dubai" />
      <View />
    </>
  );
}
