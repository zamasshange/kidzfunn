import json
import re
import sys
from pathlib import Path

sys.stdout.reconfigure(encoding="utf-8")

html = Path("sources/kfh-home.html").read_text(encoding="utf-8", errors="ignore")
m = re.search(r"window\['bootstrap'\]\s*=\s*JSON\.parse\('(.+?)'\);", html, re.S)
if not m:
    raise SystemExit("bootstrap not found")

raw = m.group(1).encode("utf-8").decode("unicode_escape")
data = json.loads(raw)

texts: list[str] = []


def walk(obj):
    if isinstance(obj, dict):
        for k, v in obj.items():
            if k in ("D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"):
                if isinstance(v, str) and len(v.strip()) > 2:
                    texts.append(v.strip())
            walk(v)
    elif isinstance(obj, list):
        for item in obj:
            walk(item)


walk(data)
unique = []
seen = set()
for t in texts:
    t = re.sub(r"\s+", " ", t).strip()
    if len(t) < 8 or t in seen:
        continue
    seen.add(t)
    unique.append(t)

print(f"Total unique strings: {len(unique)}\n")
keywords = (
    "about",
    "kidz",
    "fun house",
    "play",
    "party",
    "gauteng",
    "edenvale",
    "mission",
    "we ",
    "our ",
    "contact",
    "hour",
    "price",
    "member",
    "zone",
    "policy",
    "safety",
    "food",
    "parking",
    "birthday",
)
for t in unique:
    low = t.lower()
    if any(k in low for k in keywords):
        print(t)
        print("---")
