import { publicOrigin } from "@/lib/google-oauth";

export { publicOrigin };

export function GBP_OAUTH_REDIRECT(req: Request): string {
  return process.env.GBP_OAUTH_REDIRECT || `${publicOrigin(req)}/api/admin/gbp/callback`;
}
