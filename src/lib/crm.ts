/**
 * Azizi CRM (https://azizgc.com) — the back office behind every brand site.
 * Server-side mirror of every lead the site records, so the front desk sees it
 * in Inbox › Enquiries with page + UTM attribution. Fire-and-forget: the site's
 * own store/email stays the source of truth and the visitor never waits on it.
 */
import type { Lead } from "@/lib/lead-schema";

export const CRM_BASE = (process.env.CRM_BASE ?? "https://azizgc.com").replace(/\/$/, "");
export const CRM_BRAND = "mrd";
export const SITE_ORIGIN = "https://macbook-repair-dubai.ae";

export const crmLinks = {
  repairStatus: `${CRM_BASE}/repair-status`,
  bookDropoff: `${CRM_BASE}/book?brand=${CRM_BRAND}`,
  warrantyCheck: `${CRM_BASE}/w/check`,
};

export async function mirrorLeadToCrm(lead: Lead): Promise<boolean> {
  const intent = lead.route === "buyback" ? "sell" : lead.route === "business" ? "it_support" : "repair";
  const body = {
    brand: CRM_BRAND,
    website: "", // honeypot stays empty
    form: lead.presetId ? `site:${lead.presetId}` : "site:lead-form",
    name: lead.name,
    mobile: lead.phone,
    email: lead.email || undefined,
    device: [lead.deviceType, lead.model].filter(Boolean).join(" "),
    message: [lead.issue, lead.details, lead.area && `Area: ${lead.area}`, `Prefers: ${lead.preferredContact}`].filter(Boolean).join("\n"),
    intent,
    page: lead.sourcePath ? `${SITE_ORIGIN}${lead.sourcePath}` : SITE_ORIGIN,
  };
  try {
    const controller = new AbortController();
    const t = setTimeout(() => controller.abort(), 5000);
    const res = await fetch(`${CRM_BASE}/api/leads/submit`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Origin: SITE_ORIGIN, Referer: body.page },
      body: JSON.stringify(body),
      signal: controller.signal,
    });
    clearTimeout(t);
    return res.ok;
  } catch (err) {
    console.error("[lead] CRM mirror failed:", err);
    return false;
  }
}
