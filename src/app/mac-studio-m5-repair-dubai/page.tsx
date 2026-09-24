import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacStudioM5RepairHub";

export const metadata: Metadata = metaFromFields("/mac-studio-m5-repair-dubai", {
  title: "Mac Studio M5 Max & M5 Ultra Repair Dubai - 2026 Model",
  description: "Mac Studio M5 Max and M5 Ultra (2026) repair in Dubai - Apple's most powerful Mac. Board, thermal and port work. Free diagnosis - call 055 741 3706.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/mac-studio-m5-repair-dubai" />
      <View />
    </>
  );
}
