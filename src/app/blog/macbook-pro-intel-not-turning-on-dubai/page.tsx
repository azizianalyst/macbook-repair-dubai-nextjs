import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProIntelNotTurningOn";

export const metadata: Metadata = {
  title: "MacBook Pro Intel Not Turning On Dubai 2026 — Fix Guide",
  description: "MacBook Pro Intel won't turn on in Dubai? Dead vs black screen, SMC reset, deep discharge and random-shutdown fixes. Board repair from AED 350.",
  openGraph: {
    type: "article",
    publishedTime: "2026-06-22",
    images: [{ url: "https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif", width: 1600, height: 900 }],
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://macbook-repair-dubai.ae/blog/macbook-pro-intel-not-turning-on-dubai" },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-intel-not-turning-on-dubai" />
      <View />
    </>
  );
}
