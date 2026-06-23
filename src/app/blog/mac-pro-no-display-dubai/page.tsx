import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacProNoDisplay";

export const metadata: Metadata = {
  title: "Mac Pro No Display in Dubai? 6 Fixes for Black Screen 2026",
  description: "Mac Pro no display or black screen in Dubai? 6 fixes for GPU module, cable and port faults on 2019 and Intel models. From AED 250.",
  openGraph: {
    title: "Mac Pro No Display in Dubai? 6 Fixes for Black Screen 2026",
    description: "Mac Pro no display or black screen in Dubai? 6 fixes for GPU module, cable and port faults on 2019 and Intel models. From AED 250.",
    url: "https://macbook-repair-dubai.ae/blog/mac-pro-no-display-dubai",
    type: "article",
    publishedTime: "2026-06-22",
    modifiedTime: "2026-06-22",
    images: [{ url: "https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif", width: 1600, height: 900, alt: "Mac Pro no display, Dubai repair workshop" }],
  },
  twitter: { card: "summary_large_image", title: "Mac Pro No Display in Dubai? 6 Fixes for Black Screen 2026", description: "Mac Pro no display or black screen in Dubai? 6 fixes for GPU module, cable and port faults on 2019 and Intel models. From AED 250.", images: ["https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif"] },
  alternates: { canonical: "https://macbook-repair-dubai.ae/blog/mac-pro-no-display-dubai" },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/mac-pro-no-display-dubai" />
      <View />
    </>
  );
}
