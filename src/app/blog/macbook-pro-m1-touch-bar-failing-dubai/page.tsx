import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM1TouchBarFailing";

export const metadata: Metadata = {
  title: "MacBook Pro M1 Touch Bar Failing Dubai 2026",
  description: "MacBook Pro M1 Touch Bar failing in Dubai? Dead, frozen, or showing wrong controls at 3-5 years old. Restart fix, T1 chip diagnosis, and Touch Bar replacement…",
  openGraph: {
    type: "article",
    publishedTime: "2026-06-22",
    images: [{ url: "https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif", width: 1600, height: 900 }],
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://macbook-repair-dubai.ae/blog/macbook-pro-m1-touch-bar-failing-dubai" },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m1-touch-bar-failing-dubai" />
      <View />
    </>
  );
}
