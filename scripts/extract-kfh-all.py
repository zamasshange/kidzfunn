#!/usr/bin/env python3
"""Extract readable text from KFH homepage HTML."""
import re
import sys

sys.stdout.reconfigure(encoding="utf-8")

with open("sources/kfh-home.html", "r", encoding="utf-8", errors="ignore") as f:
    html = f.read()

texts = re.findall(r'"text"\s*:\s*"((?:\\.|[^"\\])*)"', html)
seen = set()
clean = []
skip_fragments = ("_assets", "rgb(", "wixstatic", "font-family", "stroke", "fill")

for raw in texts:
    try:
        t = bytes(raw, "utf-8").decode("unicode_escape")
    except Exception:
        t = raw
    t = re.sub(r"<[^>]+>", " ", t)
    t = re.sub(r"\s+", " ", t).strip()
    if len(t) < 12 or t in seen:
        continue
    if any(x in t for x in skip_fragments):
        continue
    seen.add(t)
    clean.append(t)

for t in clean:
    print(t)
print(f"\n--- TOTAL: {len(clean)} ---", file=sys.stderr)
