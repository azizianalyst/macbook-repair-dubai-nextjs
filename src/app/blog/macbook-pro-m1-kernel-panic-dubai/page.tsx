import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM1KernelPanic";

export const metadata: Metadata = metaFromFields("/blog/macbook-pro-m1-kernel-panic-dubai", {
  title: "MacBook Pro M1 Kernel Panic Dubai 2026",
  description: "MacBook Pro M1 kernel panic or crash when closing lid in Dubai? Monterey sleep bug, Big Sur wake fault, and 5-year-old hardware panics. Diagnosis guide.",
  publishedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m1-kernel-panic-dubai" />
      <View />
    </>
  );
}
