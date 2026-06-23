import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacStudioNotTurningOn";

export const metadata: Metadata = {
  title: "Mac Studio Not Turning On in Dubai? 6 Fixes 2026",
  description: "Mac Studio not turning on in Dubai? 6 fixes for power, SMC and board faults on M1/M2/M4 Max and Ultra. Diagnosis free.",
  openGraph: {
    title: "Mac Studio Not Turning On in Dubai? 6 Fixes 2026",
    description: "Mac Studio not turning on in Dubai? 6 fixes for power, SMC and board faults on M1/M2/M4 Max and Ultra. Diagnosis free.",
    url: "https://macbook-repair-dubai.ae/blog/mac-studio-not-turning-on-dubai",
    type: "article",
    publishedTime: "2026-06-22",
    modifiedTime: "2026-06-22",
    images: [{ url: "https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif", width: 1600, height: 900, alt: "Mac Studio not turning on, Dubai repair workshop" }],
  },
  twitter: { card: "summary_large_image", title: "Mac Studio Not Turning On in Dubai? 6 Fixes 2026", description: "Mac Studio not turning on in Dubai? 6 fixes for power, SMC and board faults on M1/M2/M4 Max and Ultra. Diagnosis free.", images: ["https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif"] },
  alternates: { canonical: "https://macbook-repair-dubai.ae/blog/mac-studio-not-turning-on-dubai" },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/mac-studio-not-turning-on-dubai" />
      <View />
    </>
  );
}
