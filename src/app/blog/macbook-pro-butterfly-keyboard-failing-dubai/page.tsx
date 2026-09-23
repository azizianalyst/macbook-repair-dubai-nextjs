import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProIntelButterflyKeyboard";

export const metadata: Metadata = metaFromFields("/blog/macbook-pro-butterfly-keyboard-failing-dubai", {
  title: "MacBook Pro Butterfly Keyboard Failing Dubai 2026 — Fix",
  description: "MacBook Pro butterfly keyboard failing in Dubai? 2016-2019 butterfly mechanism jams from Dubai dust. Key stuck, repeating, or not responding.",
  publishedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-butterfly-keyboard-failing-dubai" />
      <View />
    </>
  );
}
