import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProIntelGpuFailure";

export const metadata: Metadata = {
  title: "MacBook Pro Intel GPU Failure Fix Dubai 2026",
  description: "MacBook Pro Intel AMD GPU failure in Dubai? 2017-2019 15-inch crashes, black screen, artifacts. Reball/board repair from AED 500. Free diagnosis.",
  openGraph: {
    type: "article",
    publishedTime: "2026-06-22",
    images: [{ url: "https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif", width: 1600, height: 900 }],
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://macbook-repair-dubai.ae/blog/macbook-pro-intel-gpu-failure-dubai" },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-intel-gpu-failure-dubai" />
      <View />
    </>
  );
}
