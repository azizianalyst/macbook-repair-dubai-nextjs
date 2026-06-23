import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacMiniOverheatingFix";

export const metadata: Metadata = metaFromFields("/mac-mini-overheating-fix-dubai", {
  title: "Mac mini Overheating Dubai? Fan Noise & Thermal Fix - From AED 250",
  description: "Mac mini overheating or loud fan in Dubai? Dust-clogged vents, dried thermal paste, M-chip sustained load throttling. Thermal service from AED 250. All models. Call 055 741 3706.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/mac-mini-overheating-fix-dubai" />
      <View />
    </>
  );
}
