// Price display helper. The site now runs in request-a-quote mode: no visitor sees a figure —
// every price surfaces as a "Get price on WhatsApp" CTA (see PriceCTA / PriceCard / PricingTable).
// This helper is kept as a backstop so any consumer still calling it renders a CTA phrase, never
// a number — a missed render site can't leak "AED 600". Free-to-start services still read "Free".
// Reverse price display by restoring the `AED {n}` form here.
export const priceAed = (aed: number): string => (aed > 0 ? "Price on request" : "Free");
