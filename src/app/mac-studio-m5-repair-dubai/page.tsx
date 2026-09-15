import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacStudioM5RepairHub";

export const metadata: Metadata = metaFromFields("/mac-studio-m5-repair-dubai", {
  title: "Mac Studio M5 Max & M5 Ultra Repair Dubai - 2026 Model",
  description: "Mac Studio M5 Max and M5 Ultra (2026) repair Dubai. Apple's most powerful Mac now the Mac Pro is gone. Thunderbolt 5, Wi-Fi 7, up to 512GB RAM. Warranty checked first. Free diagnosis. Call 055 741 3706.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/mac-studio-m5-repair-dubai" />
      <View />
    </>
  );
}
