import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/GuideCapsLockNotResponding";

export const metadata: Metadata = metaForPath("/the-caps-lock-key-is-not-responding-after-restarting-my-macbook");

export default function Page() {
  return (
    <>
      <PageSchema path="/the-caps-lock-key-is-not-responding-after-restarting-my-macbook" />
      <View />
    </>
  );
}
