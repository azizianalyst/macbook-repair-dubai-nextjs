// Google Business Profile API client.
// Uses OAuth 2.0 refresh tokens (stored in data/gbp.json via gbp-store.ts).
// The same GOOGLE_OAUTH_CLIENT_ID/SECRET used for admin login are reused here
// but with offline access + business.manage scope.

import { getGbpConfig } from "@/lib/gbp-store";

const TOKEN_URL = "https://oauth2.googleapis.com/token";
const ACCOUNTS_URL = "https://mybusinessaccountmanagement.googleapis.com/v1/accounts";
const MYB_URL = "https://mybusiness.googleapis.com/v4";
const MBI_URL = "https://mybusinessbusinessinformation.googleapis.com/v1";
const PERF_URL = "https://businessprofileperformance.googleapis.com/v1";

export const GBP_SCOPE = "https://www.googleapis.com/auth/business.manage";

// In-process token cache
let _cached: { token: string; exp: number } | null = null;

export async function getGbpAccessToken(): Promise<string> {
  if (_cached && _cached.exp - 60_000 > Date.now()) return _cached.token;
  const cfg = await getGbpConfig();
  if (!cfg?.refreshToken) throw new Error("GBP not connected");

  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: cfg.refreshToken,
      client_id: process.env.GOOGLE_OAUTH_CLIENT_ID || "",
      client_secret: process.env.GOOGLE_OAUTH_CLIENT_SECRET || "",
    }),
  });
  if (!res.ok) {
    _cached = null;
    throw new Error(`GBP token refresh failed: ${res.status} ${await res.text().catch(() => "")}`);
  }
  const d = await res.json();
  _cached = { token: d.access_token, exp: Date.now() + (d.expires_in ?? 3600) * 1000 };
  return _cached.token;
}

export function invalidateGbpTokenCache() {
  _cached = null;
}

async function gbpFetch(url: string, opts: RequestInit = {}): Promise<Response> {
  const token = await getGbpAccessToken();
  return fetch(url, {
    ...opts,
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
      ...(opts.headers || {}),
    },
  });
}

// ── Accounts ─────────────────────────────────────────────────────────────────
export type GbpAccount = { name: string; accountName: string; type: string; verificationState: string };
export type GbpLocation = { name: string; title: string; storefrontAddress?: { addressLines?: string[] } };

export async function listAccounts(): Promise<GbpAccount[]> {
  const res = await gbpFetch(ACCOUNTS_URL);
  if (!res.ok) throw new Error(`listAccounts: ${res.status}`);
  const d = await res.json();
  return d.accounts || [];
}

export async function listLocations(accountName: string): Promise<GbpLocation[]> {
  const url = `${MBI_URL}/${accountName}/locations?readMask=name,title,storefrontAddress&pageSize=100`;
  const res = await gbpFetch(url);
  if (!res.ok) throw new Error(`listLocations: ${res.status}`);
  const d = await res.json();
  return d.locations || [];
}

// ── Reviews ───────────────────────────────────────────────────────────────────
export type GbpReview = {
  name: string;
  reviewId: string;
  reviewer: { profilePhotoUrl?: string; displayName: string; isAnonymous?: boolean };
  starRating: "ONE" | "TWO" | "THREE" | "FOUR" | "FIVE";
  comment?: string;
  createTime: string;
  updateTime: string;
  reviewReply?: { comment: string; updateTime: string };
};

export async function listReviews(locationId: string): Promise<{ reviews: GbpReview[]; averageRating: number; totalReviewCount: number }> {
  const res = await gbpFetch(`${MYB_URL}/${locationId}/reviews?pageSize=50&orderBy=updateTime%20desc`);
  if (!res.ok) throw new Error(`listReviews: ${res.status}`);
  const d = await res.json();
  return {
    reviews: d.reviews || [],
    averageRating: d.averageRating || 0,
    totalReviewCount: d.totalReviewCount || 0,
  };
}

export async function replyToReview(reviewName: string, comment: string): Promise<void> {
  const res = await gbpFetch(`${MYB_URL}/${reviewName}/reply`, {
    method: "PUT",
    body: JSON.stringify({ comment }),
  });
  if (!res.ok) throw new Error(`replyToReview: ${res.status} ${await res.text().catch(() => "")}`);
}

export async function deleteReviewReply(reviewName: string): Promise<void> {
  const res = await gbpFetch(`${MYB_URL}/${reviewName}/reply`, { method: "DELETE" });
  if (!res.ok && res.status !== 404) throw new Error(`deleteReply: ${res.status}`);
}

// ── Posts (Local Posts) ───────────────────────────────────────────────────────
export type GbpPostTopicType = "STANDARD" | "EVENT" | "OFFER";
export type GbpPost = {
  name: string;
  state: string;
  topicType: GbpPostTopicType;
  summary?: string;
  callToAction?: { actionType: string; url?: string };
  createTime: string;
  updateTime: string;
  searchUrl?: string;
  media?: { mediaFormat: string; sourceUrl?: string }[];
  event?: { title: string; schedule?: { startDate?: object; endDate?: object } };
};

export type CreatePostPayload = {
  topicType: GbpPostTopicType;
  summary: string;
  callToAction?: { actionType: string; url?: string };
  event?: { title: string };
};

export async function listPosts(locationId: string): Promise<GbpPost[]> {
  const res = await gbpFetch(`${MYB_URL}/${locationId}/localPosts?pageSize=20`);
  if (!res.ok) throw new Error(`listPosts: ${res.status}`);
  const d = await res.json();
  return d.localPosts || [];
}

export async function createPost(locationId: string, payload: CreatePostPayload): Promise<GbpPost> {
  const res = await gbpFetch(`${MYB_URL}/${locationId}/localPosts`, {
    method: "POST",
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`createPost: ${res.status} ${await res.text().catch(() => "")}`);
  return res.json();
}

export async function deletePost(postName: string): Promise<void> {
  const res = await gbpFetch(`${MYB_URL}/${postName}`, { method: "DELETE" });
  if (!res.ok && res.status !== 404) throw new Error(`deletePost: ${res.status}`);
}

// ── Business Info ─────────────────────────────────────────────────────────────
export type BusinessInfo = {
  name: string;
  title?: string;
  phoneNumbers?: { primaryPhone?: string; additionalPhones?: string[] };
  websiteUri?: string;
  regularHours?: { periods: { openDay: string; openTime: string; closeDay: string; closeTime: string }[] };
  description?: string;
  categories?: { primaryCategory?: { displayName: string }; additionalCategories?: { displayName: string }[] };
};

const INFO_READ_MASK = "name,title,phoneNumbers,websiteUri,regularHours,description,categories";

export async function getBusinessInfo(locationId: string): Promise<BusinessInfo> {
  // locationId here is the v1 resource name e.g. "locations/123..."
  // The MBI API uses locations/{locationId} not accounts/x/locations/y
  const locNum = locationId.split("/").pop();
  const res = await gbpFetch(`${MBI_URL}/locations/${locNum}?readMask=${encodeURIComponent(INFO_READ_MASK)}`);
  if (!res.ok) throw new Error(`getBusinessInfo: ${res.status} ${await res.text().catch(() => "")}`);
  return res.json();
}

export async function updateBusinessInfo(locationId: string, patch: Partial<BusinessInfo>, updateMask: string): Promise<BusinessInfo> {
  const locNum = locationId.split("/").pop();
  const res = await gbpFetch(`${MBI_URL}/locations/${locNum}?updateMask=${encodeURIComponent(updateMask)}`, {
    method: "PATCH",
    body: JSON.stringify(patch),
  });
  if (!res.ok) throw new Error(`updateBusinessInfo: ${res.status} ${await res.text().catch(() => "")}`);
  return res.json();
}

// ── Performance / Insights ────────────────────────────────────────────────────
export type DailyMetric =
  | "BUSINESS_IMPRESSIONS_DESKTOP_MAPS"
  | "BUSINESS_IMPRESSIONS_DESKTOP_SEARCH"
  | "BUSINESS_IMPRESSIONS_MOBILE_MAPS"
  | "BUSINESS_IMPRESSIONS_MOBILE_SEARCH"
  | "BUSINESS_DIRECTION_REQUESTS"
  | "CALL_CLICKS"
  | "WEBSITE_CLICKS"
  | "BUSINESS_BOOKINGS"
  | "BUSINESS_FOOD_ORDERS";

const INSIGHT_METRICS: DailyMetric[] = [
  "BUSINESS_IMPRESSIONS_DESKTOP_SEARCH",
  "BUSINESS_IMPRESSIONS_MOBILE_SEARCH",
  "BUSINESS_IMPRESSIONS_DESKTOP_MAPS",
  "BUSINESS_IMPRESSIONS_MOBILE_MAPS",
  "BUSINESS_DIRECTION_REQUESTS",
  "CALL_CLICKS",
  "WEBSITE_CLICKS",
];

export type InsightPoint = { date: { year: number; month: number; day: number }; value: string };
export type MetricTimeSeries = { dailyMetric: DailyMetric; dailySubEntityData?: unknown; timeSeries: { datedValues: InsightPoint[] } };

function buildInsightParams(locNum: string, startD: Date, endD: Date): string {
  const start = { year: startD.getFullYear(), month: startD.getMonth() + 1, day: startD.getDate() };
  const end = { year: endD.getFullYear(), month: endD.getMonth() + 1, day: endD.getDate() };
  const params = new URLSearchParams();
  params.set("dailyRange.start_date.year", String(start.year));
  params.set("dailyRange.start_date.month", String(start.month));
  params.set("dailyRange.start_date.day", String(start.day));
  params.set("dailyRange.end_date.year", String(end.year));
  params.set("dailyRange.end_date.month", String(end.month));
  params.set("dailyRange.end_date.day", String(end.day));
  for (const m of INSIGHT_METRICS) params.append("dailyMetrics", m);
  return `${PERF_URL}/locations/${locNum}:fetchMultiDailyMetricsTimeSeries?${params.toString()}`;
}

export async function fetchInsights(locationId: string, days = 28): Promise<MetricTimeSeries[]> {
  const locNum = locationId.split("/").pop()!;
  const now = new Date();
  const startD = new Date(now); startD.setDate(startD.getDate() - days);
  const res = await gbpFetch(buildInsightParams(locNum, startD, now));
  if (!res.ok) throw new Error(`fetchInsights: ${res.status} ${await res.text().catch(() => "")}`);
  const d = await res.json();
  return d.multiDailyMetricTimeSeries?.flatMap((x: { dailyMetricTimeSeries?: MetricTimeSeries[] }) => x.dailyMetricTimeSeries || []) || [];
}

// Fetch current + previous period for trend comparison
export async function fetchInsightsWithComparison(locationId: string, days = 28): Promise<{ current: MetricTimeSeries[]; previous: MetricTimeSeries[] }> {
  const locNum = locationId.split("/").pop()!;
  const now = new Date();
  const curStart = new Date(now); curStart.setDate(curStart.getDate() - days);
  const prevEnd = new Date(curStart); prevEnd.setDate(prevEnd.getDate() - 1);
  const prevStart = new Date(prevEnd); prevStart.setDate(prevStart.getDate() - days);

  const [curRes, prevRes] = await Promise.all([
    gbpFetch(buildInsightParams(locNum, curStart, now)),
    gbpFetch(buildInsightParams(locNum, prevStart, prevEnd)),
  ]);

  const parse = async (r: Response): Promise<MetricTimeSeries[]> => {
    if (!r.ok) return [];
    const d = await r.json();
    return d.multiDailyMetricTimeSeries?.flatMap((x: { dailyMetricTimeSeries?: MetricTimeSeries[] }) => x.dailyMetricTimeSeries || []) || [];
  };

  const [current, previous] = await Promise.all([parse(curRes), parse(prevRes)]);
  return { current, previous };
}

// ── Photos ────────────────────────────────────────────────────────────────────
export type GbpMediaItem = {
  name: string;
  mediaFormat: string;
  locationAssociation?: { category: string };
  googleUrl?: string;
  thumbnailUrl?: string;
  createTime?: string;
  sourceUrl?: string;
};

export async function listPhotos(locationId: string): Promise<GbpMediaItem[]> {
  const res = await gbpFetch(`${MYB_URL}/${locationId}/media?pageSize=20`);
  if (!res.ok) throw new Error(`listPhotos: ${res.status}`);
  const d = await res.json();
  return d.mediaItems || [];
}

export async function uploadPhotoByUrl(locationId: string, sourceUrl: string, category = "ADDITIONAL"): Promise<GbpMediaItem> {
  const res = await gbpFetch(`${MYB_URL}/${locationId}/media`, {
    method: "POST",
    body: JSON.stringify({
      mediaFormat: "PHOTO",
      locationAssociation: { category },
      sourceUrl,
    }),
  });
  if (!res.ok) throw new Error(`uploadPhoto: ${res.status} ${await res.text().catch(() => "")}`);
  return res.json();
}

export async function deletePhoto(mediaName: string): Promise<void> {
  const res = await gbpFetch(`${MYB_URL}/${mediaName}`, { method: "DELETE" });
  if (!res.ok && res.status !== 404) throw new Error(`deletePhoto: ${res.status}`);
}

// ── Q&A ───────────────────────────────────────────────────────────────────────
export type GbpQuestion = {
  name: string;
  author: { displayName: string; profilePhotoUrl?: string; type: string };
  upvoteCount: number;
  text: string;
  createTime: string;
  updateTime: string;
  topAnswers?: GbpAnswer[];
  totalAnswerCount?: number;
};
export type GbpAnswer = {
  name: string;
  author: { displayName: string; type: string };
  upvoteCount: number;
  text: string;
  createTime: string;
  updateTime: string;
};

export async function listQA(locationId: string): Promise<{ questions: GbpQuestion[]; totalSize: number }> {
  const res = await gbpFetch(`${MYB_URL}/${locationId}/questions?pageSize=20&answersPerQuestion=5&orderBy=update_time%20desc`);
  if (!res.ok) throw new Error(`listQA: ${res.status}`);
  const d = await res.json();
  return { questions: d.questions || [], totalSize: d.totalSize || 0 };
}

export async function postAnswer(questionName: string, text: string): Promise<GbpAnswer> {
  const res = await gbpFetch(`${MYB_URL}/${questionName}/answers`, {
    method: "POST",
    body: JSON.stringify({ text }),
  });
  if (!res.ok) throw new Error(`postAnswer: ${res.status} ${await res.text().catch(() => "")}`);
  return res.json();
}

export async function deleteAnswer(questionName: string): Promise<void> {
  const res = await gbpFetch(`${MYB_URL}/${questionName}/answers:deleteAnswer`, { method: "DELETE" });
  if (!res.ok && res.status !== 404) throw new Error(`deleteAnswer: ${res.status}`);
}
