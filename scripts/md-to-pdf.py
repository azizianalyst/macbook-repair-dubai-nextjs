#!/usr/bin/env python3
"""Turn one of our plain markdown docs into a print-ready PDF with headless Chrome.
Handles what our docs use: headings, paragraphs, lists (incl. - [ ] checkboxes), tables, bold, code, links, hr.
Usage: python3 scripts/md-to-pdf.py docs/x.md docs/pdf/x.pdf "Header label"
"""
import html, re, subprocess, sys, base64, pathlib

src, out, label = sys.argv[1], sys.argv[2], (sys.argv[3] if len(sys.argv) > 3 else "")
root = pathlib.Path(__file__).resolve().parent.parent
logo = base64.b64encode((root / "public/logo-mrd.png").read_bytes()).decode()

def inline(t):
    t = html.escape(t, quote=False)
    t = re.sub(r"`([^`]+)`", r"<code>\1</code>", t)
    t = re.sub(r"\*\*([^*]+)\*\*", r"<strong>\1</strong>", t)
    t = re.sub(r"(?<![\w*])\*([^*\s][^*]*)\*(?![\w*])", r"<em>\1</em>", t)
    t = re.sub(r"\[([^\]]+)\]\(([^)]+)\)", lambda m: f"<span class='lnk'>{m.group(1)}</span>", t)
    return t

lines = pathlib.Path(src).read_text().splitlines()
o, i, in_list = [], 0, False
def close_list():
    global in_list
    if in_list: o.append("</ul>"); in_list = False
while i < len(lines):
    l = lines[i]
    if l.startswith("|") and i + 1 < len(lines) and re.match(r"^\|[\s:|-]+\|$", lines[i + 1]):
        close_list()
        cells = lambda s: [c.strip() for c in s.strip().strip("|").split("|")]
        o.append("<table><thead><tr>" + "".join(f"<th>{inline(c)}</th>" for c in cells(l)) + "</tr></thead><tbody>")
        i += 2
        while i < len(lines) and lines[i].startswith("|"):
            o.append("<tr>" + "".join(f"<td>{inline(c)}</td>" for c in cells(lines[i])) + "</tr>"); i += 1
        o.append("</tbody></table>"); continue
    m = re.match(r"^(#{1,4})\s+(.*)", l)
    if m:
        close_list(); n = len(m.group(1)); o.append(f"<h{n}>{inline(m.group(2))}</h{n}>")
    elif re.match(r"^\s*-\s+\[ \]\s+", l):
        if not in_list: o.append("<ul class='check'>"); in_list = True
        item = inline(re.sub(r"^\s*-\s+\[ \]\s+", "", l))
        o.append("<li><span class='box'></span>" + item + "</li>")
    elif re.match(r"^\s*([-*]|\d+\.)\s+", l):
        if not in_list: o.append("<ul>"); in_list = True
        num = re.match(r"^\s*(\d+)\.\s+", l)
        txt = re.sub(r"^\s*([-*]|\d+\.)\s+", "", l)
        sub = " style='margin-left:20px'" if len(l) - len(l.lstrip()) >= 2 else ""
        o.append(f"<li{' class=num data-n=' + num.group(1) if num else ''}{sub}>{inline(txt)}</li>")
    elif l.strip() == "---":
        close_list(); o.append("<hr>")
    elif l.strip() == "":
        close_list()
    else:
        close_list(); o.append(f"<p>{inline(l)}</p>")
    i += 1
close_list()

page = f"""<!doctype html><html><head><meta charset="utf-8"><style>
@page {{ size: A4; margin: 16mm 14mm 18mm; }}
body {{ font-family: -apple-system, "Helvetica Neue", Arial, sans-serif; color: #1b1f24; font-size: 10.5pt; line-height: 1.5; }}
.head {{ display:flex; align-items:center; gap:10px; border-bottom: 2px solid #0a7d52; padding-bottom: 8px; margin-bottom: 14px; }}
.head img {{ width: 34px; height: 34px; }} .head b {{ font-size: 12pt; }} .head span {{ margin-left:auto; color:#5b6470; font-size:9pt; }}
h1 {{ font-size: 20pt; margin: 4px 0 6px; line-height:1.2; }}
h2 {{ font-size: 14pt; margin: 22px 0 6px; color: #0a7d52; break-after: avoid; }}
h3 {{ font-size: 11.5pt; margin: 16px 0 4px; break-after: avoid; }}
h4 {{ font-size: 10.5pt; margin: 14px 0 4px; color:#0a7d52; break-after: avoid; }}
p {{ margin: 4px 0 8px; }} ul {{ margin: 4px 0 10px; padding-left: 20px; }} li {{ margin: 2px 0; }}
li.num {{ list-style: none; position: relative; }} li.num::before {{ content: attr(data-n) "."; position:absolute; left:-18px; font-weight:600; }}
ul.check {{ list-style:none; padding-left: 4px; }} .box {{ display:inline-block; width:11px; height:11px; border:1.5px solid #1b1f24; border-radius:2px; margin-right:8px; vertical-align:-1px; }}
table {{ width:100%; border-collapse: collapse; margin: 6px 0 14px; font-size: 9.3pt; }}
th, td {{ border: 1px solid #d6dbe1; padding: 5px 7px; text-align:left; vertical-align: top; }}
th {{ background: #eef5f1; }} tr {{ break-inside: avoid; }}
code {{ background:#f2f4f7; padding: 0 3px; border-radius:3px; font-size: 9pt; }}
hr {{ border:0; border-top: 1px solid #d6dbe1; margin: 16px 0; }}
.lnk {{ color:#0a5ea8; }}
</style></head><body><div class="head"><img src="data:image/png;base64,{logo}"><b>MacBook Repair Dubai</b><span>{html.escape(label)}</span></div>
{''.join(o)}</body></html>"""
tmp = pathlib.Path(out).with_suffix(".html"); tmp.write_text(page)
chrome = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
subprocess.run([chrome, "--headless=new", "--disable-gpu", "--no-pdf-header-footer", f"--print-to-pdf={pathlib.Path(out).resolve()}", tmp.resolve().as_uri()], check=True, capture_output=True)
tmp.unlink(); print("wrote", out)
