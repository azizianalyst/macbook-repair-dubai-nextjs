import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacStudioM5Max2026Repair";

export const metadata: Metadata = metaForPath("/mac-studio-m5-max-2026-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/mac-studio-m5-max-2026-repair-dubai" />
      <View />
    </>
  );
}
