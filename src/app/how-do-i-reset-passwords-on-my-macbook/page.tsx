import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";

export const metadata: Metadata = metaForPath("/how-do-i-reset-passwords-on-my-macbook");
export { default } from "@/views/GuideResetMacBookPassword";
