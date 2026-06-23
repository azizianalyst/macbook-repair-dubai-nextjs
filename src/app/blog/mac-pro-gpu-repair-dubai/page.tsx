import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacProGpuRepair";

export const metadata: Metadata = {
  title: "Mac Pro GPU Repair and Upgrade Dubai 2026: MPX Module Cost",
  description: "Mac Pro GPU repair and upgrade in Dubai. MPX module faults, crashes and upgrades on the 2019 Mac Pro. Diagnosis from AED 0.",
  openGraph: {
    title: "Mac Pro GPU Repair and Upgrade Dubai 2026: MPX Module Cost",
    description: "Mac Pro GPU repair and upgrade in Dubai. MPX module faults, crashes and upgrades on the 2019 Mac Pro. Diagnosis from AED 0.",
    url: "https://macbook-repair-dubai.ae/blog/mac-pro-gpu-repair-dubai",
    type: "article",
    publishedTime: "2026-06-22",
    modifiedTime: "2026-06-22",
    images: [{ url: "https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif", width: 1600, height: 900, alt: "Mac Pro GPU repair Dubai, Dubai repair workshop" }],
  },
  twitter: { card: "summary_large_image", title: "Mac Pro GPU Repair and Upgrade Dubai 2026: MPX Module Cost", description: "Mac Pro GPU repair and upgrade in Dubai. MPX module faults, crashes and upgrades on the 2019 Mac Pro. Diagnosis from AED 0.", images: ["https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif"] },
  alternates: { canonical: "https://macbook-repair-dubai.ae/blog/mac-pro-gpu-repair-dubai" },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/mac-pro-gpu-repair-dubai" />
      <View />
    </>
  );
}
