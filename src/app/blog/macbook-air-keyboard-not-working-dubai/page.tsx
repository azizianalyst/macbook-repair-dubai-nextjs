import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookAirKeyboard";

export const metadata: Metadata = metaFromFields("/blog/macbook-air-keyboard-not-working-dubai", {
  title: "MacBook Air Keyboard Not Working Dubai 2026 — Fix Guide",
  description: "MacBook Air keyboard not working in Dubai? Butterfly (2018-2019) and scissor keys fail differently. See the fix for your model, or WhatsApp for a repair.",
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-air-keyboard-not-working-dubai" />
      <View />
    </>
  );
}
