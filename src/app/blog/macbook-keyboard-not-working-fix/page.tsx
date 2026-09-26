import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookKeyboardNotWorking";

export const metadata: Metadata = metaFromFields("/blog/macbook-keyboard-not-working-fix", {
  title: "MacBook Keyboard Not Working or Some Keys Dead? Fixes 2026",
  description: "Some MacBook keys not working, no backlight, or keyboard and trackpad dead? Step-by-step fixes, spill first aid and when to repair. WhatsApp for a quote.",
  publishedTime: "2026-06-03",
  modifiedTime: "2026-09-26",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-keyboard-not-working-fix" />
      <View />
    </>
  );
}
