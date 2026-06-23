import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProIntelFlexgate";

export const metadata: Metadata = {
  title: "MacBook Pro Flexgate Display Cable Fix Dubai 2026",
  description: "MacBook Pro Flexgate in Dubai? Backlight stage-light effect at the screen bottom. Display cable fix from AED 250, no full screen needed. Free check.",
  openGraph: {
    type: "article",
    publishedTime: "2026-06-22",
    images: [{ url: "https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif", width: 1600, height: 900 }],
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://macbook-repair-dubai.ae/blog/macbook-pro-intel-flexgate-dubai" },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-intel-flexgate-dubai" />
      <View />
    </>
  );
}
