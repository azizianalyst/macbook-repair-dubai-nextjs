import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";

export const metadata: Metadata = metaForPath("/blog/macbook-keyboard-not-working-fix");
export { default } from "@/views/BlogMacBookKeyboardNotWorking";
