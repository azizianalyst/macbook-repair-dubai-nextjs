import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacProNotTurningOn";

export const metadata: Metadata = {
  title: "Mac Pro Not Turning On in Dubai? 6 Fixes 2026",
  description: "Mac Pro not turning on in Dubai? 6 fixes for power supply, SMC and board faults on 2019 tower and Intel models. Free diagnosis.",
  openGraph: {
    title: "Mac Pro Not Turning On in Dubai? 6 Fixes 2026",
    description: "Mac Pro not turning on in Dubai? 6 fixes for power supply, SMC and board faults on 2019 tower and Intel models. Free diagnosis.",
    url: "https://macbook-repair-dubai.ae/blog/mac-pro-not-turning-on-dubai",
    type: "article",
    publishedTime: "2026-06-22",
    modifiedTime: "2026-06-22",
    images: [{ url: "https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif", width: 1600, height: 900, alt: "Mac Pro not turning on, Dubai repair workshop" }],
  },
  twitter: { card: "summary_large_image", title: "Mac Pro Not Turning On in Dubai? 6 Fixes 2026", description: "Mac Pro not turning on in Dubai? 6 fixes for power supply, SMC and board faults on 2019 tower and Intel models. Free diagnosis.", images: ["https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif"] },
  alternates: { canonical: "https://macbook-repair-dubai.ae/blog/mac-pro-not-turning-on-dubai" },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/mac-pro-not-turning-on-dubai" />
      <View />
    </>
  );
}
