"""Find KFH section title -> nearest background image."""
from __future__ import annotations

import json
import re
from pathlib import Path

HTML = Path(__file__).resolve().parents[1] / "kfh-home-fetched.html"

TERMS = [
    "Welcome to your Favourite Indoor Playground",
    "Come Play",
    "Party Bundles",
    "Play Zones",
    "join our new loyalty program",
    "Over 8 different play zones",
    "Giant Jungle Gym",
    "balloon",
]

media = re.compile(r"_assets/media/[a-f0-9]+\.(?:jpg|jpeg|webp)", re.I)


def main() -> None:
    html = HTML.read_text(encoding="utf-8", errors="ignore")
    m = re.search(r"window\['bootstrap'\]\s*=\s*JSON\.parse\('(.+?)'\);", html, re.S)
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

    for term in TERMS:
        for i, s in enumerate(strings):
            if term.lower() not in s.lower() or len(s) > 200:
                continue
            imgs: list[str] = []
            for j in range(max(0, i - 40), min(len(strings), i + 40)):
                for im in media.findall(strings[j]):
                    if im not in imgs:
                        imgs.append(im)
            print(f"=== {term} ===")
            print(f"  text: {s[:100]!r}")
            for im in imgs[:6]:
                print(f"  {im}")
            print()
            break
        else:
            print(f"=== MISSING: {term} ===\n")


if __name__ == "__main__":
    main()
