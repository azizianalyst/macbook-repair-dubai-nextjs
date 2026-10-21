import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM2ScreenLines";

export const metadata: Metadata = metaFromFields("/blog/macbook-pro-m2-screen-lines-dubai", {
  title: "MacBook Pro M2 Screen Lines or Black Screen Dubai 2026",
  description: "MacBook Pro M2 screen lines or black screen? How to tell a display cable fault, GPU rendering lines or a panel fault, step by step. WhatsApp for repair.",
  publishedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m2-screen-lines-dubai" />
      <View />
    </>
  );
}
