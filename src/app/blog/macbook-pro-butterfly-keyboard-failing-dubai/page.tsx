import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProIntelButterflyKeyboard";

export const metadata: Metadata = {
  title: "MacBook Pro Butterfly Keyboard Failing Dubai 2026 — Fix",
  description: "MacBook Pro butterfly keyboard failing in Dubai? 2016-2019 butterfly mechanism jams from Dubai dust. Key stuck, repeating, or not responding.",
  openGraph: {
    type: "article",
    publishedTime: "2026-06-22",
    images: [{ url: "https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif", width: 1600, height: 900 }],
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://macbook-repair-dubai.ae/blog/macbook-pro-butterfly-keyboard-failing-dubai" },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-butterfly-keyboard-failing-dubai" />
      <View />
    </>
  );
}
