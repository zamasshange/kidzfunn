"""Map KFH bootstrap JSON images to section labels."""
from __future__ import annotations

import json
import re
from pathlib import Path

HTML = Path(__file__).resolve().parents[1] / "kfh-home-fetched.html"
BASE = "https://kidzfunhouseza.com/"


def extract() -> dict:
    html = HTML.read_text(encoding="utf-8", errors="ignore")
    m = re.search(r"window\['bootstrap'\]\s*=\s*JSON\.parse\('(.+?)'\);", html, re.S)
    return json.loads(m.group(1).encode().decode("unicode_escape"))


def walk(obj, path: str = "", results: list[tuple[str, str]] | None = None) -> list[tuple[str, str]]:
    if results is None:
        results = []
    if isinstance(obj, dict):
        text_bits: list[str] = []
        img: str | None = None
        for k, v in obj.items():
            if isinstance(v, str):
                if "_assets/media/" in v and re.search(r"\.(jpg|jpeg|png|webp)$", v, re.I):
                    img = v if v.startswith("_assets") else "_assets/media/" + v.split("_assets/media/")[-1]
                elif 4 < len(v) < 120 and not v.startswith("http") and not v.startswith("{"):
                    text_bits.append(v)
            walk(v, path, results)
        if img and text_bits:
            label = " | ".join(text_bits[:4])
            results.append((label, img))
    elif isinstance(obj, list):
        for item in obj:
            walk(item, path, results)
    return results


def main() -> None:
    data = extract()
    pairs = walk(data)
    keys = [
        "welcome",
        "favourite indoor",
        "come play",
        "party bundle",
        "play zone",
        "loyalty",
        "imagination",
        "art corner",
        "toddler",
        "reading",
        "sandpit",
        "arcade",
        "jungle gym",
        "pirate",
        "school",
        "about",
        "little creators",
        "party in a box",
    ]
    seen: set[str] = set()
    mapping: dict[str, str] = {}
    for label, img in pairs:
        low = label.lower()
        for key in keys:
            if key in low and key not in mapping and img not in seen:
                mapping[key] = img
                seen.add(img)
                print(f"{key}: {BASE}{img}")
                break

    # dump all unique large jpgs for manual review
    all_imgs = sorted({img for _, img in pairs})
    print(f"\n# total mapped: {len(mapping)}, unique imgs: {len(all_imgs)}")


if __name__ == "__main__":
    main()
