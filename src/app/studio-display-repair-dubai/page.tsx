import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/StudioDisplayRepair";

// metaFromFields, not metaForPath: the slug-derived fallback produced
// "Studio Display Repair Dubai | Apple Specialists" - the authored title belongs in the static <head>.
export const metadata: Metadata = metaFromFields("/studio-display-repair-dubai", {
  title: "Studio Display Repair Dubai - Screen, Backlight & Power",
  description: "Apple Studio Display repair in Dubai: cracked panel, backlight failure, no power, Thunderbolt and speaker faults. Free diagnosis - call 055 741 3706.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/studio-display-repair-dubai" />
      <View />
    </>
  );
}
