import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacMiniM2RepairHub";

export const metadata: Metadata = metaFromFields("/mac-mini-m2-repair-dubai", {
  title: "Mac mini M2 Repair Dubai - M2 and M2 Pro 2023",
  description: "Mac mini M2 repair Dubai (2023, A2686 M2 / A2687 M2 Pro). Thunderbolt 4 on both; HDMI 2.1 on the M2 Pro. Logic board repair from AED 1,040. Known HDMI audio bug (M2 Pro) and Thunderbolt drops documented. From AED 200. Call 055 741 3706.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/mac-mini-m2-repair-dubai" />
      <View />
    </>
  );
}
