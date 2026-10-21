import { readSecret } from "@/lib/seo-store";

// Facebook Page publishing via the Graph API. Credentials come from env (FB_PAGE_ID /
// FB_PAGE_ACCESS_TOKEN) or, if unset, from the dashboard-saved secrets (fbPageId / fbPageToken)
// so the owner can connect from /admin/social without editing server files. A Page access token
// (not a user token) with pages_manage_posts is required — created in the Meta app / Graph Explorer.
const GRAPH = "https://graph.facebook.com/v21.0";

export async function facebookCreds(): Promise<{ pageId: string; token: string } | null> {
  const pageId = (process.env.FB_PAGE_ID || (await readSecret("fbPageId")) || "").trim();
  const token = (process.env.FB_PAGE_ACCESS_TOKEN || (await readSecret("fbPageToken")) || "").trim();
  if (!pageId || !token) return null;
  return { pageId, token };
}
export async function facebookConfigured(): Promise<boolean> {
  return (await facebookCreds()) !== null;
}

// Publish to the Page feed. With an imageUrl it posts a photo (caption = message); otherwise a
// text/link post. Returns the created post id. Throws with the Graph error message on failure.
export async function postToFacebook(opts: { message: string; link?: string; imageUrl?: string }): Promise<{ id: string }> {
  const creds = await facebookCreds();
  if (!creds) throw new Error("Facebook not connected");
  const { pageId, token } = creds;

  let url: string;
  const body = new URLSearchParams({ access_token: token });
  if (opts.imageUrl) {
    url = `${GRAPH}/${pageId}/photos`;
    body.set("url", opts.imageUrl);
    if (opts.message) body.set("caption", opts.message);
  } else {
    url = `${GRAPH}/${pageId}/feed`;
    body.set("message", opts.message || "");
    if (opts.link) body.set("link", opts.link);
  }

  const res = await fetch(url, { method: "POST", body });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const msg = (data as { error?: { message?: string } })?.error?.message || `HTTP ${res.status}`;
    throw new Error(msg);
  }
  // /photos returns { id, post_id }; /feed returns { id }
  return { id: String((data as { post_id?: string; id?: string }).post_id || (data as { id?: string }).id || "") };
}
