import json
import re
import sys
from pathlib import Path

sys.stdout.reconfigure(encoding="utf-8")

html = Path("sources/kfh-home.html").read_text(encoding="utf-8", errors="ignore")
m = re.search(r"window\['bootstrap'\]\s*=\s*JSON\.parse\('(.+?)'\);", html, re.S)
raw = m.group(1).encode("utf-8").decode("unicode_escape")
data = json.loads(raw)

texts: list[str] = []


def walk(obj):
    if isinstance(obj, str):
        s = obj.strip()
        if len(s) >= 12 and not s.startswith("http") and not re.fullmatch(r"[A-Za-z0-9+/=_-]{20,}", s):
            texts.append(s)
    elif isinstance(obj, dict):
        for v in obj.values():
            walk(v)
    elif isinstance(obj, list):
        for item in obj:
            walk(item)


walk(data)
unique = []
seen = set()
for t in texts:
    t = re.sub(r"\s+", " ", t).strip()
    if t in seen:
        continue
    seen.add(t)
    unique.append(t)

print(f"Total unique strings: {len(unique)}\n")
for t in sorted(unique, key=len, reverse=True):
    print(t)
    print("---")
