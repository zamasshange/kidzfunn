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
        if 4 <= len(s) <= 120 and not s.startswith("http") and not s.startswith("_assets"):
            if not re.fullmatch(r"[A-Za-z0-9+/=_-]{20,}", s):
                if not s.startswith("M") or len(s) < 30:
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

# Likely nav / section headings (short title-case strings)
headings = [
    t
    for t in unique
    if len(t) < 60
    and not t.startswith("R ")
    and not t.startswith("Package")
    and "@" not in t
    and "â" not in t
    and re.search(r"[A-Za-z]", t)
]
print("=== SHORT HEADINGS / LABELS ===")
for t in sorted(headings, key=str.lower):
    print(t)

print("\n=== ABOUT-RELEVANT PARAGRAPHS ===")
about_kw = (
    "kidz fun house",
    "kfh",
    "we ",
    "our ",
    "committed",
    "focus",
    "safety",
    "inclus",
    "judgement",
    "childminder",
    "nanny",
    "back to basics",
    "free play",
    "johannesburg",
    "gauteng",
    "1500",
    "differently abled",
)
for t in unique:
    low = t.lower()
    if len(t) > 80 and any(k in low for k in about_kw):
        print(t)
        print("---")
