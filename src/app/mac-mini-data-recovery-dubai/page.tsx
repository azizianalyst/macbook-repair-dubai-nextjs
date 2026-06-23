import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacMiniDataRecovery";

export const metadata: Metadata = metaFromFields("/mac-mini-data-recovery-dubai", {
  title: "Mac mini Data Recovery Dubai - Soldered SSD Specialist - From AED 500",
  description: "Mac mini data recovery Dubai. M-chip Mac minis have soldered SSD - standard USB adapters don't work. Specialist recovery for won't boot, deleted files, corrupted SSD. From AED 500. Call 055 741 3706.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/mac-mini-data-recovery-dubai" />
      <View />
    </>
  );
}
