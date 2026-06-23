import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM2LogicBoardFailure";

export const metadata: Metadata = {
  title: "MacBook Pro M2 Logic Board Failure Dubai 2026",
  description: "MacBook Pro M2 suddenly dead in Dubai? M2 Pro and M2 Max logic board charging IC failures at 2-4 years old. Symptoms, diagnosis, and component-level repair…",
  openGraph: {
    type: "article",
    publishedTime: "2026-06-22",
    images: [{ url: "https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif", width: 1600, height: 900 }],
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://macbook-repair-dubai.ae/blog/macbook-pro-m2-logic-board-failure-dubai" },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m2-logic-board-failure-dubai" />
      <View />
    </>
  );
}
