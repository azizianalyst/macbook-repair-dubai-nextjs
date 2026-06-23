import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM4HotLidClosed";

export const metadata: Metadata = {
  title: "MacBook Pro M4 Gets Hot with Lid Closed Dubai 2026",
  description: "MacBook Pro M4 overheating with lid closed in Dubai? Clamshell airflow restriction, Sequoia 15.0 fan delay bug fixed in 15.2, and Dubai heat headroom explained.",
  openGraph: {
    type: "article",
    publishedTime: "2026-06-22",
    images: [{ url: "https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif", width: 1600, height: 900 }],
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://macbook-repair-dubai.ae/blog/macbook-pro-m4-gets-hot-lid-closed-dubai" },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m4-gets-hot-lid-closed-dubai" />
      <View />
    </>
  );
}
