import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookKernelPanic";

export const metadata: Metadata = metaForPath("/blog/macbook-kernel-panic-restarts-fix");

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-kernel-panic-restarts-fix" />
      <View />
    </>
  );
}
