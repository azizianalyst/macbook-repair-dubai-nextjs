import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogIPhoneScreenRepairVoucher";

export const metadata: Metadata = metaForPath("/blog/iphone-screen-repair-voucher-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/iphone-screen-repair-voucher-dubai" />
      <View />
    </>
  );
}
