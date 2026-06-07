import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookKeyboardNotWorking";

export const metadata: Metadata = metaForPath("/blog/macbook-keyboard-not-working-fix");

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-keyboard-not-working-fix" />
      <View />
    </>
  );
}
