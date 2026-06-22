"""Find image hashes near KFH keywords in bootstrap strings."""
from __future__ import annotations

import json
import re
from pathlib import Path

HTML = Path(__file__).resolve().parents[1] / "kfh-home-fetched.html"
KEYS = [
    "balloon",
    "Welcome to your Favourite",
    "walk-in basis",
    "Party Bundles",
    "play zones",
    "loyalty",
    "jungle gym",
    "indoor playground",
    "Come Play",
    "Open Tuesday",
]


def main() -> None:
    html = HTML.read_text(encoding="utf-8", errors="ignore")
    m = re.search(r"window\['bootstrap'\]\s*=\s*JSON\.parse\('(.+?)'\);", html, re.S)
    blob = m.group(1).encode().decode("unicode_escape")
    media = re.compile(r"_assets/media/([a-f0-9]+\.(?:jpg|jpeg|webp))", re.I)
    for key in KEYS:
        for match in re.finditer(re.escape(key), blob, re.I):
            chunk = blob[max(0, match.start() - 4000) : match.end() + 4000]
            imgs = list(dict.fromkeys(media.findall(chunk)))
            if imgs:
                print(f"{key}:")
                for im in imgs[:8]:
                    print(f"  {im}")
                print()


if __name__ == "__main__":
    main()
