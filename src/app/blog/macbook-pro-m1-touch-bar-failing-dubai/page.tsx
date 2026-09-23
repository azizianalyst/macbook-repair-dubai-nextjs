import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM1TouchBarFailing";

export const metadata: Metadata = metaFromFields("/blog/macbook-pro-m1-touch-bar-failing-dubai", {
  title: "MacBook Pro M1 Touch Bar Failing Dubai 2026",
  description: "MacBook Pro M1 Touch Bar failing in Dubai? Dead, frozen, or showing wrong controls at 3-5 years old. Restart fix, T1 chip diagnosis, and Touch Bar replacement…",
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
