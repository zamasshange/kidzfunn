import json
import re
from pathlib import Path

html = Path(__file__).resolve().parents[1] / "kfh-home-fetched.html"
raw = html.read_text(encoding="utf-8", errors="ignore")
m = re.search(r"window\['bootstrap'\]\s*=\s*JSON\.parse\('(.+?)'\);", raw, re.S)
data = json.loads(m.group(1).encode().decode("unicode_escape"))
strings: list[str] = []


def walk(o: object) -> None:
    if isinstance(o, str):
        strings.append(o)
    elif isinstance(o, dict):
        for v in o.values():
            walk(v)
    elif isinstance(o, list):
        for item in o:
            walk(item)


walk(data)
media = re.compile(r"_assets/media/[a-f0-9]+\.(?:png|jpg|jpeg|webp)", re.I)
keywords = [
    "Welcome",
    "Party",
    "Loyalty",
    "Play Zone",
    "Toddler",
    "Jungle",
    "Arcade",
    "About",
    "School",
    "Creators",
    "Indoor",
    "Favourite",
    "Imagination",
    "Sandpit",
]
seen: set[str] = set()
for i, s in enumerate(strings):
    if not any(k.lower() in s.lower() for k in keywords) or len(s) > 120:
        continue
    imgs: list[str] = []
    for j in range(max(0, i - 15), min(len(strings), i + 15)):
        for im in media.findall(strings[j]):
            if im not in imgs:
                imgs.append(im)
    for im in imgs[:2]:
        if im in seen:
            continue
        seen.add(im)
        print(f"{s[:70]}\n  https://kidzfunhouseza.com/{im}\n")
