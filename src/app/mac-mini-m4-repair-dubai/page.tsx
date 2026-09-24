import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacMiniM4RepairHub";

export const metadata: Metadata = metaFromFields("/mac-mini-m4-repair-dubai", {
  title: "Mac mini M4 Repair Dubai - Redesigned 2024 Compact Mini",
  description: "Mac mini M4 and M4 Pro repair in Dubai - the redesigned 2024 mini with Thunderbolt 5 on Pro. Check AppleCare first; free diagnosis - call us.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/mac-mini-m4-repair-dubai" />
      <View />
    </>
  );
}
