import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacMiniDataRecovery";

export const metadata: Metadata = metaFromFields("/mac-mini-data-recovery-dubai", {
  title: "Mac mini Data Recovery Dubai - Soldered SSD Specialist - Free Diagnosis",
  description: "Mac mini data recovery Dubai. M-chip Mac minis have a soldered SSD - specialist recovery for won't boot, deleted files, corrupted SSD. Free diagnosis - WhatsApp us. Call 055 741 3706.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/mac-mini-data-recovery-dubai" />
      <View />
    </>
  );
}
