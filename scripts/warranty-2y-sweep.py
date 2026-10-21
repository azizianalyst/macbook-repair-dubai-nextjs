"""One-off sweep (owner, 2026-10-21): warranty is now 15 days to 2 years, depending on the repair
and part; hardware (and new Apple parts) is 2 years. Rewrites the old "up to 12 months" wording.
Apple's own "1-year warranty" / AppleCare mentions are left alone.
Usage: python3 -I scripts/warranty-2y-sweep.py <file>...   (prints a count per file)"""
import re, sys

HW = r"(?:hardware|most hardware|other parts|other hardware|every port|the install|the part\b|parts,? (?:ports|hinge))"
RULES = [
    # hardware-specific statements -> 2 years
    (re.compile(r"\b([Uu])p to 12 months on (" + HW + ")"), lambda m: f"{m.group(1)}p to 2 years on {m.group(2)}"),
    (re.compile(r"\b12 months on (most hardware|hardware)"), lambda m: f"2 years on {m.group(1)}"),
    # garbled existing copy
    (re.compile(r"Up to written warranty up to 12 months on the repair"), lambda m: "Written warranty of 15 days to 2 years, depending on the repair"),
    # generic statements -> the full range
    (re.compile(r"\bwarranty(,)? up to 12 months"), lambda m: f"warranty{m.group(1) or ''} of 15 days to 2 years"),
    (re.compile(r"\b([Ww]arranty) of up to 12 months"), lambda m: f"{m.group(1)} of 15 days to 2 years"),
    (re.compile(r"\b[Uu]p to 12 months"), lambda m: "15 days to 2 years"),
    (re.compile(r"\bUp to 12-Month Warranty"), lambda m: "15-Day to 2-Year Warranty"),
    (re.compile(r"\bUp to 12 Months\b"), lambda m: "15 Days to 2 Years"),
    (re.compile(r"\b[Uu]p to 12-month warranty"), lambda m: "15-day to 2-year warranty"),
    (re.compile(r"\bthe 12-month written warranty"), lambda m: "its written warranty"),
]

def sweep(text):
    n = 0
    for rx, fn in RULES:
        text, k = rx.subn(fn, text)
        n += k
    return text, n

if __name__ == "__main__":
    total = 0
    for p in sys.argv[1:]:
        s = open(p, encoding="utf8").read()
        t, n = sweep(s)
        if n:
            open(p, "w", encoding="utf8").write(t)
            total += n
    print("replacements:", total)
