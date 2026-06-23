import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM2ScreenLines";

export const metadata: Metadata = {
  title: "MacBook Pro M2 Screen Lines or Black Screen Dubai 2026",
  description: "MacBook Pro M2 screen showing lines or black screen in Dubai? Display cable fault on M2 13-inch, GPU rendering lines, or panel fault. Step-by-step diagnosis.",
  openGraph: {
    type: "article",
    publishedTime: "2026-06-22",
    images: [{ url: "https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif", width: 1600, height: 900 }],
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://macbook-repair-dubai.ae/blog/macbook-pro-m2-screen-lines-dubai" },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m2-screen-lines-dubai" />
      <View />
    </>
  );
}
