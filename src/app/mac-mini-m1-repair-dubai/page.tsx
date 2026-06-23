import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacMiniM1RepairHub";

export const metadata: Metadata = metaFromFields("/mac-mini-m1-repair-dubai", {
  title: "Mac mini M1 Repair Dubai - 2020 First Apple Silicon Mini",
  description: "Mac mini M1 repair Dubai (2020, A2348). First Apple Silicon Mac mini. SSD soldered, RAM soldered, 8-16GB. No display port: HDMI 2.0 + Thunderbolt 3. Logic board, port, thermal. From AED 200. Call 055 741 3706.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/mac-mini-m1-repair-dubai" />
      <View />
    </>
  );
}
