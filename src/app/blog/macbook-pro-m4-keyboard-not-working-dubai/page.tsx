import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM4KeyboardNotWorking";

export const metadata: Metadata = metaFromFields("/blog/macbook-pro-m4-keyboard-not-working-dubai", {
  title: "MacBook Pro M4 Keyboard Not Working Dubai 2026",
  description: "MacBook Pro M4 keyboard not working in Dubai? Single keys stuck, double-typing, or entire keyboard unresponsive.",
  publishedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m4-keyboard-not-working-dubai" />
      <View />
    </>
  );
}
