import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacMiniDataRecovery";

export const metadata: Metadata = metaFromFields("/mac-mini-data-recovery-dubai", {
  title: "Mac mini Data Recovery Dubai - Soldered SSD Specialist - Free Diagnosis",
  description: "Mac mini data recovery in Dubai: M-series minis have a soldered SSD, so recovery is board-level work. No boot or lost files? Free assessment - call us.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/mac-mini-data-recovery-dubai" />
      <View />
    </>
  );
}
