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
        if 30 <= len(s) <= 1200:
            if s.startswith(("http", "M", "#", "LB", "rgb", "_assets", "MA", "YA", "PB")):
                return
            if re.fullmatch(r"[A-Za-z0-9+/=_-]{20,}", s):
                return
            texts.append(s)
    elif isinstance(obj, dict):
        for v in obj.values():
            walk(v)
    elif isinstance(obj, list):
        for item in obj:
            walk(item)


walk(data)
seen: set[str] = set()
uniq: list[str] = []
for t in texts:
    t = re.sub(r"\s+", " ", t).strip()
    if t in seen:
        continue
    seen.add(t)
    uniq.append(t)

keys = [
    "about",
    "service",
    "safety",
    "child mind",
    "nanny",
    "first aid",
    "cpr",
    "back to basics",
    "free play",
    "judgement",
    "inclus",
    "differently abled",
    "1500",
    "est 2015",
    "johannesburg",
    "gauteng",
    "cappuccino",
    "imagination",
    "health, happiness",
    "training",
    "ballet",
    "toddler morning",
    "school outing",
    "walkin",
    "socks",
    "adult",
    "operating hours",
    "we work",
    "play is how",
    "charging",
    "wifi",
    "little creators",
    "calling all working",
    "essential infant",
    "nutrition",
    "milestone",
]

for t in sorted(uniq, key=len, reverse=True):
    low = t.lower()
    if any(k in low for k in keys):
        print(t)
        print("---")
