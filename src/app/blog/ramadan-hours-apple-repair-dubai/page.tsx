import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogRamadanHoursAppleRepair";

export const metadata: Metadata = metaForPath("/blog/ramadan-hours-apple-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/ramadan-hours-apple-repair-dubai" />
      <View />
    </>
  );
}
