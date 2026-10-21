import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookNeoBatteryCostUae";

export const metadata: Metadata = metaFromFields("/blog/macbook-neo-battery-replacement-cost-uae", {
  title: "MacBook Neo Battery Replacement Cost in the UAE (2026)",
  description: "What Apple charges in the UAE for a MacBook Neo battery, why the Neo is the easiest MacBook battery job in years, and the signs you need a new one.",
  publishedTime: "2026-09-26",
  modifiedTime: "2026-09-26",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-neo-battery-replacement-cost-uae" />
      <View />
    </>
  );
}
