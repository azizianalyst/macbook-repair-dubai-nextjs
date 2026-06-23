import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM1KernelPanic";

export const metadata: Metadata = {
  title: "MacBook Pro M1 Kernel Panic Dubai 2026",
  description: "MacBook Pro M1 kernel panic or crash when closing lid in Dubai? Monterey sleep bug, Big Sur wake fault, and 5-year-old hardware panics. Diagnosis guide.",
  openGraph: {
    type: "article",
    publishedTime: "2026-06-22",
    images: [{ url: "https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif", width: 1600, height: 900 }],
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://macbook-repair-dubai.ae/blog/macbook-pro-m1-kernel-panic-dubai" },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m1-kernel-panic-dubai" />
      <View />
    </>
  );
}
