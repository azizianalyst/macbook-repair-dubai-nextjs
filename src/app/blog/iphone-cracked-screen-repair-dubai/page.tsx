import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogIPhoneCrackedScreen";

export const metadata: Metadata = {
  title: "iPhone Cracked Screen Repair Dubai 2026: Costs by Model",
  description: "iPhone cracked screen repair Dubai from AED 149. OLED and LCD replacement for all iPhone models. Free diagnosis, same-day service.",
  openGraph: {
    title: "iPhone Cracked Screen Repair Dubai 2026: Costs by Model",
    description: "iPhone cracked screen repair Dubai from AED 149. OLED and LCD replacement for all iPhone models. Free diagnosis, same-day service.",
    url: "https://macbook-repair-dubai.ae/blog/iphone-cracked-screen-repair-dubai",
    type: "article",
    publishedTime: "2026-06-22",
    modifiedTime: "2026-06-22",
    images: [{
      url: "https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif",
      width: 1600,
      height: 900,
      alt: "iPhone cracked screen repair Dubai, technician diagnosing device at Dubai repair workshop",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "iPhone Cracked Screen Repair Dubai 2026: Costs by Model",
    description: "iPhone cracked screen repair Dubai from AED 149. OLED and LCD replacement for all iPhone models. Free diagnosis, same-day service.",
    images: ["https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif"],
  },
  alternates: {
    canonical: "https://macbook-repair-dubai.ae/blog/iphone-cracked-screen-repair-dubai",
  },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/iphone-cracked-screen-repair-dubai" />
      <View />
    </>
  );
}
