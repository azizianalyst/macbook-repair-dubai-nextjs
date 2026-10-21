import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookAirWontTurnOn";

export const metadata: Metadata = metaFromFields("/blog/macbook-air-wont-turn-on-fix-dubai", {
  title: "MacBook Air Won't Turn On Fix Dubai 2026 — No Power",
  description: "MacBook Air not turning on in Dubai? Dead, black screen or no power on all models M1-M5 and Intel. Step-by-step fix guide. Free diagnosis on WhatsApp.",
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-air-wont-turn-on-fix-dubai" />
      <View />
    </>
  );
}
