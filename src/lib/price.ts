// Price display helper. Free-to-start services (diagnostics, assessments, iCloud
// consultations) carry a startingPrice of 0 — render "Free" instead of a jarring
// "AED 0". Identical to "AED {n}" for every real price, so it's safe everywhere.
export const priceAed = (aed: number): string => (aed > 0 ? `AED ${aed}` : "Free");
