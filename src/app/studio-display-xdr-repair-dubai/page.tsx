import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/StudioDisplayXdrRepair";

// metaFromFields, not metaForPath: the slug-derived fallback produced
// "Studio Display Xdr Repair Dubai" - the authored title belongs in the static <head>.
export const metadata: Metadata = metaFromFields("/studio-display-xdr-repair-dubai", {
  title: "Studio Display XDR Repair Dubai - Panel & Power Faults",
  description: "Apple Studio Display XDR repair in Dubai: cracked panel, backlight failure, no power, Thunderbolt and speaker faults. Free diagnosis - call us.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/studio-display-xdr-repair-dubai" />
      <View />
    </>
  );
}
