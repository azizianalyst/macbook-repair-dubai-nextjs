import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacMiniM6RepairHub";

export const metadata: Metadata = metaFromFields("/mac-mini-m6-repair-dubai", {
  title: "Mac mini M6 & M5 Pro Repair Dubai - 2026 Model",
  description: "Mac mini M6 and M5 Pro (2026) repair in Dubai - Apple's newest mini, Thunderbolt 5 on the Pro. Check AppleCare first. Free diagnosis - call us.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/mac-mini-m6-repair-dubai" />
      <View />
    </>
  );
}
