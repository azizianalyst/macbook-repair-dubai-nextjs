import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacMiniM4RepairHub";

export const metadata: Metadata = metaFromFields("/mac-mini-m4-repair-dubai", {
  title: "Mac mini M4 Repair Dubai - Redesigned 2024 Compact Mini",
  description: "Mac mini M4 repair Dubai (2024). Completely redesigned - smallest Mac mini ever. M4 and M4 Pro. Thunderbolt 5 (Pro only). 1-2 years old, likely under warranty. Free diagnosis. Call 055 741 3706.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/mac-mini-m4-repair-dubai" />
      <View />
    </>
  );
}
