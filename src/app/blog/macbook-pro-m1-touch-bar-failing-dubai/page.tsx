import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM1TouchBarFailing";

export const metadata: Metadata = metaFromFields("/blog/macbook-pro-m1-touch-bar-failing-dubai", {
  title: "MacBook Pro M1 Touch Bar Failing Dubai 2026",
  description: "MacBook Pro M1 Touch Bar failing in Dubai? Why it goes blank, freezes or shows wrong controls at 4-5 years old, and how it is repaired. WhatsApp us.",
  publishedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m1-touch-bar-failing-dubai" />
      <View />
    </>
  );
}
