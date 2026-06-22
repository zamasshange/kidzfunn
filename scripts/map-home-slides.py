"""Extract homepage slide background images in page order from KFH bootstrap."""
from __future__ import annotations

import json
import re
from pathlib import Path

HTML = Path(__file__).resolve().parents[1] / "kfh-home-fetched.html"


def main() -> None:
    html = HTML.read_text(encoding="utf-8", errors="ignore")
    m = re.search(r"window\['bootstrap'\]\s*=\s*JSON\.parse\('(.+?)'\);", html, re.S)
    data = json.loads(m.group(1).encode().decode("unicode_escape"))
    s = json.dumps(data)

    # Section headings from KFH site in scroll order
    headings = [
        "Welcome to your Favourite Indoor Playground",
        "Welcome to Kidz Fun House",
        "Come Play",
        "Party Bundles",
        "Play Zones",
        "Loyalty",
        "free playtime",
        "Toddler",
        "School",
        "About",
    ]
    media = re.compile(r"_assets/media/[a-f0-9]+\.(?:jpg|jpeg|webp|png)", re.I)

    for h in headings:
        for variant in [h, h.lower(), h.split()[0]]:
            idx = s.lower().find(variant.lower())
            if idx < 0:
                continue
            chunk = s[max(0, idx - 3000) : idx + 8000]
            imgs = list(dict.fromkeys(media.findall(chunk)))
            # prefer jpg backgrounds (large fills)
            jpgs = [i for i in imgs if i.lower().endswith((".jpg", ".jpeg", ".webp"))]
            pick = jpgs[0] if jpgs else (imgs[0] if imgs else None)
            if pick:
                print(f"{h}\n  /images/kfh/{pick.split('/')[-1]}\n  ({len(imgs)} nearby)\n")
            break
        else:
            print(f"MISSING: {h}\n")


if __name__ == "__main__":
    main()
