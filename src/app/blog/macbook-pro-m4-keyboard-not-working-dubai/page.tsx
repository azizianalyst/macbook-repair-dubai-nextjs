import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM4KeyboardNotWorking";

export const metadata: Metadata = {
  title: "MacBook Pro M4 Keyboard Not Working Dubai 2026",
  description: "MacBook Pro M4 keyboard not working in Dubai? Single keys stuck, double-typing, or entire keyboard unresponsive.",
  openGraph: {
    type: "article",
    publishedTime: "2026-06-22",
    images: [{ url: "https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif", width: 1600, height: 900 }],
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://macbook-repair-dubai.ae/blog/macbook-pro-m4-keyboard-not-working-dubai" },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m4-keyboard-not-working-dubai" />
      <View />
    </>
  );
}
