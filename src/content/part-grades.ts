// MacBook screen grades and their warranty (owner, 2026-10-21). One source for every page that
// names a screen grade, so the grade names and warranties can never contradict each other.
// The names are the ones written on our invoices. "Original pull-out" is the standard screen:
// invoices that don't name a grade are this one, so the typical prices on the site are for it.
export type ScreenGrade = {
  id: "pullout" | "apple-new" | "oem-new" | "aftermarket-new";
  name: string;
  what: string;
  warranty: string;
  standard?: boolean;
};

export const SCREEN_GRADES: ScreenGrade[] = [
  {
    id: "pullout",
    name: "Original pull-out (used genuine)",
    what: "A genuine Apple panel taken from another MacBook and tested on our bench before it is fitted.",
    warranty: "3 months",
    standard: true,
  },
  {
    id: "apple-new",
    name: "Apple original (new)",
    what: "A new genuine Apple panel. It costs more than a pull-out, and stock depends on the model.",
    warranty: "2 years",
  },
  {
    id: "oem-new",
    name: "New OEM",
    what: "A new panel built to Apple's specification by a supplier other than Apple.",
    warranty: "15 days",
  },
  {
    id: "aftermarket-new",
    name: "Brand new (aftermarket)",
    what: "A new third-party panel and the least expensive grade we fit. True Tone does not work with it.",
    warranty: "15 days",
  },
];

export const STANDARD_SCREEN = SCREEN_GRADES.find((g) => g.standard)!;

// Keep in step with SCREEN_GRADES above.
export const SCREEN_WARRANTY_LINE =
  "2 years on Apple original (new) panels, 3 months on original pull-out panels, 15 days on new OEM and brand new (aftermarket) panels";
