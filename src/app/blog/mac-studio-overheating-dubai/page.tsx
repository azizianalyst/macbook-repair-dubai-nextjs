import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacStudioOverheating";

export const metadata: Metadata = {
  title: "Mac Studio Overheating or Loud Fan in Dubai? Fixes 2026",
  description: "Mac Studio overheating or fan loud in Dubai? Dust, airflow and 35°C heat explained. Thermal service from AED 350.",
  openGraph: {
    title: "Mac Studio Overheating or Loud Fan in Dubai? Fixes 2026",
    description: "Mac Studio overheating or fan loud in Dubai? Dust, airflow and 35°C heat explained. Thermal service from AED 350.",
    url: "https://macbook-repair-dubai.ae/blog/mac-studio-overheating-dubai",
    type: "article",
    publishedTime: "2026-06-22",
    modifiedTime: "2026-06-22",
    images: [{ url: "https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif", width: 1600, height: 900, alt: "Mac Studio overheating, Dubai repair workshop" }],
  },
  twitter: { card: "summary_large_image", title: "Mac Studio Overheating or Loud Fan in Dubai? Fixes 2026", description: "Mac Studio overheating or fan loud in Dubai? Dust, airflow and 35°C heat explained. Thermal service from AED 350.", images: ["https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif"] },
  alternates: { canonical: "https://macbook-repair-dubai.ae/blog/mac-studio-overheating-dubai" },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/mac-studio-overheating-dubai" />
      <View />
    </>
  );
}
