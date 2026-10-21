import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookKernelPanic";

export const metadata: Metadata = metaFromFields("/macbook-kernel-panic-dubai", {
  title: "MacBook Kernel Panic Dubai — Random Restart Fix Same Day",
  description: "MacBook kernel panic in Dubai? Random restarts, grey/black screen crash, kernel panic logs. Logic board, RAM, SSD or software. Free diagnosis. Message us for pricing. Call 055 741 3706.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-kernel-panic-dubai" />
      <View />
    </>
  );
}
