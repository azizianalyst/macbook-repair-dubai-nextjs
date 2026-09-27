import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookAirOverheating";

export const metadata: Metadata = metaFromFields("/blog/macbook-air-overheating-dubai", {
  title: "MacBook Air Overheating in Dubai? Causes and Fixes 2026",
  description: "MacBook Air overheating in Dubai? Fanless M-series and Intel fan models both throttle in 35°C+ heat. Causes, fixes to try and when to WhatsApp us for help.",
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-air-overheating-dubai" />
      <View />
    </>
  );
}
