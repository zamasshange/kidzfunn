"""Extract ordered background images from KFH Canva bootstrap JSON."""
from __future__ import annotations

import json
import re
from pathlib import Path

HTML = Path(__file__).resolve().parents[1] / "kfh-home-fetched.html"
BASE = "https://kidzfunhouseza.com/"


def extract_bootstrap() -> dict:
    html = HTML.read_text(encoding="utf-8", errors="ignore")
    m = re.search(r"window\['bootstrap'\]\s*=\s*JSON\.parse\('(.+?)'\);", html, re.S)
    return json.loads(m.group(1).encode().decode("unicode_escape"))


def walk(obj, images: list[str]) -> None:
    if isinstance(obj, dict):
        for k, v in obj.items():
            if k in ("U", "V", "url", "src") and isinstance(v, str):
                if "_assets/media/" in v and re.search(r"\.(png|jpg|jpeg|webp)$", v, re.I):
                    path = v if v.startswith("_assets") else v.split("_assets/", 1)[-1]
                    path = "_assets/media/" + path.split("_assets/media/", 1)[-1] if "_assets/media/" in v else v
                    if v.startswith("_assets"):
                        full = v
                    elif "_assets/media/" in v:
                        full = "_assets/media/" + v.split("_assets/media/", 1)[1]
                    else:
                        full = v
                    if full not in images:
                        images.append(full)
            walk(v, images)
    elif isinstance(obj, list):
        for item in obj:
            walk(item, images)


def main() -> None:
    data = extract_bootstrap()
    images: list[str] = []
    walk(data, images)
    # Prefer photos for heroes
    photos = [i for i in images if re.search(r"\.(jpg|jpeg|webp)$", i, re.I)]
    print(f"Total: {len(images)}, photos: {len(photos)}\n")
    for i, path in enumerate(photos[:25]):
        print(f"{i}: {BASE}{path}")


if __name__ == "__main__":
    main()
