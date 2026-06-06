import { z } from "zod";

// Shared lead schema - used by both the client form (per-step validation) and the
// /api/lead route handler (server-side validation before email + save). Never trust
// the client; the server re-validates with this same schema.

export const DEVICE_TYPES = [
  "MacBook",
  "iMac",
  "Mac mini / Studio / Pro",
  "iPhone",
  "iPad",
  "Other Apple device",
] as const;

export const CONTACT_METHODS = ["WhatsApp", "Phone call", "Email"] as const;

export const LeadSchema = z.object({
  // Step 1 - device
  deviceType: z.enum(DEVICE_TYPES),
  model: z.string().trim().max(80).optional().or(z.literal("")),
  issue: z.string().trim().min(2, "Tell us what's wrong").max(120),
  details: z.string().trim().max(1000).optional().or(z.literal("")),
  // Step 2 - contact
  name: z.string().trim().min(2, "Enter your name").max(80),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid number")
    .max(20)
    .regex(/^[0-9+\-()\s]+$/, "Use digits, spaces, +, -, ()"),
  email: z.string().trim().email("Enter a valid email").max(120).optional().or(z.literal("")),
  preferredContact: z.enum(CONTACT_METHODS),
  area: z.string().trim().max(80).optional().or(z.literal("")),
  // meta (set by client; informational only)
  sourcePath: z.string().trim().max(200).optional().or(z.literal("")),
  // honeypot - humans never fill it. Validated loosely so the route can silently
  // drop bot submissions (return ok without saving) instead of revealing a 400.
  company: z.string().max(100).optional().or(z.literal("")),
});

export type Lead = z.infer<typeof LeadSchema>;

// Best-effort device type from a page path, to prefill the embedded form.
export function deviceTypeFromPath(path: string): (typeof DEVICE_TYPES)[number] {
  if (/^\/iphone/.test(path)) return "iPhone";
  if (/^\/ipad/.test(path)) return "iPad";
  if (/^\/imac/.test(path)) return "iMac";
  if (/^\/mac-(mini|studio|pro)/.test(path)) return "Mac mini / Studio / Pro";
  return "MacBook";
}
