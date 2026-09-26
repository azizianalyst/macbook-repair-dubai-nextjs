import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookAirVsPro2026";

export const metadata: Metadata = metaFromFields("/blog/macbook-air-vs-macbook-pro-2026", {
  title: "MacBook Air vs MacBook Pro 2026: M5 Sizes, Neo & Repairs",
  description: "MacBook Air vs MacBook Pro in 2026: M5 sizes, displays, battery access and repair costs, plus where MacBook Neo fits. Ask us on WhatsApp before you buy.",
  publishedTime: "2026-04-25",
  modifiedTime: "2026-09-26",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-air-vs-macbook-pro-2026" />
      <View />
    </>
  );
}
