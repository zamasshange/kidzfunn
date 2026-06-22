import json
import re
from pathlib import Path

html = Path(r"c:\Users\Lenovo\Downloads\museumapp\kfh-home-fetched.html").read_text(
    encoding="utf-8", errors="ignore"
)
m = re.search(r"window\['bootstrap'\]\s*=\s*JSON\.parse\('(.+?)'\);", html, re.S)
data = json.loads(m.group(1).encode().decode("unicode_escape"))
s = json.dumps(data)

terms = [
    "Giant Jungle Gym",
    "Toddler Corner",
    "Arcade",
    "Welcome to your Favourite Indoor Playground",
    "Party Bundles",
    "join our new loyalty program",
    "free playtime fridays",
    "KFH Toddler",
    "Kidz Party",
    "ballet classes",
    "Little Creators",
    "Over 8 different play zones",
    "Indoor Playground",
    "Soft Play",
    "Quicksand",
    "Playfair Display",
    "Kids Zone",
    "School Packages",
    "About",
    "Imagination",
    "Art ",
    "Reading",
    "Sandpit",
    "Walk-In",
    "Lego",
    "Pirate",
]

media_re = re.compile(r"_assets/media/[a-f0-9]+\.(?:png|jpg|jpeg|webp)", re.I)

for t in terms:
    idx = s.find(t)
    if idx < 0:
        print(f"MISSING: {t}")
        continue
    chunk = s[max(0, idx - 2000) : idx + 2000]
    imgs = list(dict.fromkeys(media_re.findall(chunk)))
    print(f"\n=== {t} ({len(imgs)} imgs) ===")
    for img in imgs[:8]:
        print(f"  https://kidzfunhouseza.com/{img}")
