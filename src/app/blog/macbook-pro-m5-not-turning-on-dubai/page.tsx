import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM5NotTurningOn";

export const metadata: Metadata = metaFromFields("/blog/macbook-pro-m5-not-turning-on-dubai", {
  title: "MacBook Pro M5 Not Turning On Dubai 2026",
  description: "MacBook Pro M5 not turning on in Dubai? Black screen, no response to power button, or fans spin but no display. Step-by-step fix guide. Message us on WhatsApp.",
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m5-not-turning-on-dubai" />
      <View />
    </>
  );
}
