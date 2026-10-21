import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogIMacOverheating";

export const metadata: Metadata = metaFromFields("/blog/imac-overheating-fan-noise-dubai", {
  title: "iMac Overheating & Loud Fan Dubai: Causes and Fixes 2026",
  description: "iMac overheating or fan running loud in Dubai? Dust, dried thermal paste and 35°C ambient explained. Message us on WhatsApp for a thermal-service quote.",
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/imac-overheating-fan-noise-dubai" />
      <View />
    </>
  );
}
