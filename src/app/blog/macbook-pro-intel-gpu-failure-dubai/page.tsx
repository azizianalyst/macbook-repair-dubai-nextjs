import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProIntelGpuFailure";

export const metadata: Metadata = metaFromFields("/blog/macbook-pro-intel-gpu-failure-dubai", {
  title: "MacBook Pro Intel GPU Failure Fix Dubai 2026",
  description: "MacBook Pro Intel AMD GPU failure in Dubai? 2017-2019 15-inch crashes, black screen, artifacts. Reball/board repair with free diagnosis — message us on WhatsApp.",
  publishedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-intel-gpu-failure-dubai" />
      <View />
    </>
  );
}
