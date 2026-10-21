import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacMiniM6RepairHub";

export const metadata: Metadata = metaFromFields("/mac-mini-m6-repair-dubai", {
  title: "Mac mini M6 & M5 Pro Repair Dubai — Free Diagnosis",
  description: "Mac mini M6 and M5 Pro (2026) repair in Dubai. It is brand new, so we check Apple warranty and AppleCare+ before paid work. Free diagnosis. Message us.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/mac-mini-m6-repair-dubai" />
      <View />
    </>
  );
}
