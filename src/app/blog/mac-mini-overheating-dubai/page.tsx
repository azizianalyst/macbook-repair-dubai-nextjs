import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacMiniOverheating";

export const metadata: Metadata = metaFromFields("/blog/mac-mini-overheating-dubai", {
  title: "Mac mini Overheating or Loud Fan in Dubai? Fixes 2026",
  description: "Mac mini overheating or fan loud in Dubai? How dust, dried thermal paste and 35°C room heat cause it, and what you can fix yourself. Book a clean with us.",
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/mac-mini-overheating-dubai" />
      <View />
    </>
  );
}
