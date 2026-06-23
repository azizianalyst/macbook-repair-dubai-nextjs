#!/usr/bin/env python3
"""Seed a Google Search Console ranking snapshot into the SEO store (data/seo.json or $SEO_DB),
parsed from Supermetrics GW result dumps saved as text files. Lets the Rankings dashboard show
real data without the user setting up a service account. Re-runnable (replaces snapshots).

Usage:
  python3 scripts/seed-rankings.py --queries /tmp/gsc-q.txt --pages /tmp/gsc-p.txt \
      --start 2026-03-20 --end 2026-06-17 [--out ./data/seo.json] [--append]

Each input file is the raw `data` text from get_async_query_results: lines like
  - [5,]: "https://…/",50,4524,0.0111,10.2325
The header row and any unparseable rows are skipped.
"""
import argparse, csv, datetime, io, json, os, sys
from pathlib import Path

REPO = Path(__file__).resolve().parents[1]
NOW = datetime.datetime.now(datetime.timezone.utc).isoformat()

def parse_rows(path):
    rows = []
    for raw in Path(path).read_text().splitlines():
        line = raw.strip()
        if not line:
            continue
        i = line.find("]: ")
        if i != -1:
            line = line[i + 3:]
        try:
            fields = next(csv.reader(io.StringIO(line)))
        except Exception:
            continue
        if len(fields) < 5:
            continue
        key = fields[0].strip()
        if key in ("Search query", "Landing page") or not key:
            continue
        try:
            clicks = int(float(fields[1])); impr = int(float(fields[2]))
            ctr = float(fields[3]); pos = float(fields[4])
        except ValueError:
            continue
        rows.append({"key": key, "clicks": clicks, "impressions": impr, "ctr": ctr, "position": pos})
    return rows

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--queries", required=True)
    ap.add_argument("--pages", required=True)
    ap.add_argument("--start", required=True)
    ap.add_argument("--end", required=True)
    ap.add_argument("--out", default=os.environ.get("SEO_DB") or str(REPO / "data" / "seo.json"))
    ap.add_argument("--append", action="store_true", help="keep existing snapshots (default replaces)")
    args = ap.parse_args()

    queries = parse_rows(args.queries)
    pages = parse_rows(args.pages)
    if not pages:
        sys.exit("no pages parsed — check the input file")

    out = Path(args.out)
    db = {"backlinks": [], "snapshots": []}
    if out.exists():
        try: db = json.loads(out.read_text()) or db
        except Exception: pass
    db.setdefault("backlinks", []); db.setdefault("snapshots", [])
    if not args.append:
        db["snapshots"] = []

    next_id = max([s.get("id", 0) for s in db["snapshots"]], default=0) + 1
    db["snapshots"].append({
        "id": next_id, "taken_at": NOW,
        "range_start": args.start, "range_end": args.end,
        "queries": queries, "pages": pages,
    })
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(json.dumps(db, indent=2))
    print(f"snapshot {args.end}: {len(queries)} queries, {len(pages)} pages -> {out}")

if __name__ == "__main__":
    main()
