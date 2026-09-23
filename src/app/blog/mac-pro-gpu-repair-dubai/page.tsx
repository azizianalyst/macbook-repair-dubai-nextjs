import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacProGpuRepair";

export const metadata: Metadata = metaFromFields("/blog/mac-pro-gpu-repair-dubai", {
  title: "Mac Pro GPU Repair and Upgrade Dubai 2026: MPX Module Fixes",
  description: "Mac Pro GPU repair and upgrade in Dubai. MPX module faults, crashes and upgrades on the 2019 Mac Pro. Free diagnosis — message us on WhatsApp.",
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/mac-pro-gpu-repair-dubai" />
      <View />
    </>
  );
}
