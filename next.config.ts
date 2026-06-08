import type { NextConfig } from "next";
import { REDIRECTS } from "./redirects.generated";

const nextConfig: NextConfig = {
  images: {
    // Ported components use plain <img>; skip the Image Optimization pipeline.
    unoptimized: true,
  },
  // Legacy WordPress URLs -> new pages (301). Ported from the live site's .htaccess
  // so old indexed/linked URLs keep resolving. Regenerate via scripts (see redirects.generated.ts).
  async redirects() {
    return REDIRECTS;
  },
  // Security headers for the Node deploy (the .htaccess does NOT apply to a Node app).
  // CSP allows the app's real externals: GA (script/connect) + Google Maps (frame).
  // script-src keeps 'unsafe-inline' because Next App Router emits inline hydration
  // scripts and the site is statically prerendered (a nonce CSP would force dynamic
  // rendering and break static caching/SEO).
  async headers() {
    // Dev (next dev / Turbopack) needs 'unsafe-eval' for HMR + React's dev-mode
    // debugging (callstack reconstruction). Production never uses eval(), so we
    // omit it there to keep the policy tight.
    const isDev = process.env.NODE_ENV !== "production";
    const scriptSrc = [
      "script-src 'self' 'unsafe-inline'",
      isDev ? "'unsafe-eval'" : "",
      "https://www.googletagmanager.com https://www.google-analytics.com",
    ]
      .filter(Boolean)
      .join(" ");
    const csp = [
      "default-src 'self'",
      "base-uri 'self'",
      "object-src 'none'",
      "frame-ancestors 'self'",
      "form-action 'self'",
      scriptSrc,
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "img-src 'self' data: https:",
      "font-src 'self' https://fonts.gstatic.com data:",
      "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https://region1.google-analytics.com",
      "frame-src https://www.google.com",
      "upgrade-insecure-requests",
    ].join("; ");
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Content-Security-Policy", value: csp },
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "geolocation=(), microphone=(), camera=(), payment=(), interest-cohort=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
