import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/AppleWatchRepair";

export const metadata: Metadata = metaForPath("/apple-watch-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/apple-watch-repair-dubai" />
      <View />
    </>
  );
}
