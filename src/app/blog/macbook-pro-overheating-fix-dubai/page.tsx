import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProOverheating";

export const metadata: Metadata = metaFromFields("/blog/macbook-pro-overheating-fix-dubai", {
  title: "MacBook Pro Overheating Fix Dubai: M1 to M5 Guide 2026",
  description: "MacBook Pro overheating fix, M1 to M5: six causes from CPU throttling and clogged fans to old thermal paste, with fixes to try first. WhatsApp for a quote.",
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-overheating-fix-dubai" />
      <View />
    </>
  );
}
