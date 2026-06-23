import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookAirM4ScreenRepair";

export const metadata: Metadata = metaFromFields("/macbook-air-m4-screen-repair-dubai", {
  title: "MacBook Air M4 Screen Repair Dubai — From AED 720",
  description: "MacBook Air M4 screen repair Dubai from AED 720. Liquid Retina 13-inch and 15-inch, True Tone, P3. New 2025 redesign. Free diagnosis. 1–2 day turnaround. Call 055 741 3706.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-air-m4-screen-repair-dubai" />
      <View />
    </>
  );
}
