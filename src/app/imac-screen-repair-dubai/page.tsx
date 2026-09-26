import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/IMacScreenRepair";

export const metadata: Metadata = metaFromFields("/imac-screen-repair-dubai", {
  title: "iMac Screen Replacement Dubai: 24-inch & 27-inch 5K Repair",
  description: "iMac screen replacement in Dubai for 24-inch M1, M3, M4 and 27-inch 5K iMacs: cracked glass, lines, flickering, no backlight. Free diagnosis. WhatsApp us.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/imac-screen-repair-dubai" />
      <View />
    </>
  );
}
