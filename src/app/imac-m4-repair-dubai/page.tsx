import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/IMacM4RepairHub";

export const metadata: Metadata = metaFromFields("/imac-m4-repair-dubai", {
  title: "iMac M4 Repair Dubai - 24-inch 2024 Retina 4.5K",
  description: "iMac M4 repair Dubai. 24-inch 4.5K Retina iMac with M4 chip (late 2024), nano-texture glass option. Free diagnosis. Almost certainly under Apple warranty - check first. Screen from AED 850. Call 055 741 3706.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/imac-m4-repair-dubai" />
      <View />
    </>
  );
}
