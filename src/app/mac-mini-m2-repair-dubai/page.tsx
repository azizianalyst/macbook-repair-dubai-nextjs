import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacMiniM2RepairHub";

export const metadata: Metadata = metaFromFields("/mac-mini-m2-repair-dubai", {
  title: "Mac mini M2 & M2 Pro Repair Dubai (2023) — Free Diagnosis",
  description: "Mac mini M2 repair Dubai (2023, M2 / M2 Pro). Logic board, HDMI audio bug and Thunderbolt drops fixed. Free diagnosis. WhatsApp us for your exact price.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/mac-mini-m2-repair-dubai" />
      <View />
    </>
  );
}
