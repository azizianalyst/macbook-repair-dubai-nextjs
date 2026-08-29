import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacMiniM2RepairHub";

export const metadata: Metadata = metaFromFields("/mac-mini-m2-repair-dubai", {
  title: "Mac mini M2 Repair Dubai - M2 and M2 Pro 2023",
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
