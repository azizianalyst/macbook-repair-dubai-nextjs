import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacMiniM6RepairHub";

export const metadata: Metadata = metaFromFields("/mac-mini-m6-repair-dubai", {
  title: "Mac mini M6 & M5 Pro Repair Dubai - 2026 Model",
  description: "Mac mini M6 and M5 Pro (2026) repair Dubai. Apple's first 2nm Mac, Wi-Fi 7, Thunderbolt 5 on the Pro. Brand-new model - we check warranty first. Free diagnosis. Call 055 741 3706.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/mac-mini-m6-repair-dubai" />
      <View />
    </>
  );
}
