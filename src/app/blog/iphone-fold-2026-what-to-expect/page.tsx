import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogIPhoneFold2026";

// Inline fields (not metaForPath): the admin store and route-meta still carry the pre-launch
// "iPhone Fold ... expected" meta, and metaFromFields keeps these authoritative.
export const metadata: Metadata = metaFromFields("/blog/iphone-fold-2026-what-to-expect", {
  title: "iPhone Duo (iPhone Fold) in the UAE: Launch, Specs, Repair",
  description: "Apple's foldable is the iPhone Duo. UAE pre-orders open 16 October and sales start 23 October 2026. Verified specs, AppleCare+ and the repair outlook.",
  publishedTime: "2026-04-26",
  modifiedTime: "2026-09-26",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/iphone-fold-2026-what-to-expect" />
      <View />
    </>
  );
}
