"""Extract large background fills in vertical page order from KFH bootstrap."""
from __future__ import annotations

import json
import re
from pathlib import Path

HTML = Path(__file__).resolve().parents[1] / "kfh-home-fetched.html"
MEDIA = re.compile(r"_assets/media/([a-f0-9]+\.(?:jpg|jpeg|webp))", re.I)


def extract_fill_images(obj, out: list[tuple[float, str, str]]) -> None:
    if isinstance(obj, dict):
        y = None
        text_hint = ""
        img = None
        for k, v in obj.items():
            if k in ("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P"):
                pass
            if k in ("A", "B") and isinstance(v, (int, float)):
                y = float(v)
            if isinstance(v, str):
                if len(v) > 8 and len(v) < 100 and not v.startswith("_assets") and "rgb" not in v:
                    text_hint = v.replace("\n", " ")[:80]
                m = MEDIA.search(v)
                if m:
                    img = m.group(0)
        if img:
            out.append((y or len(out) * 1000.0, img, text_hint))
        for v in obj.values():
            extract_fill_images(v, out)
    elif isinstance(obj, list):
        for item in obj:
            extract_fill_images(item, out)


def main() -> None:
    html = HTML.read_text(encoding="utf-8", errors="ignore")
    m = re.search(r"window\['bootstrap'\]\s*=\s*JSON\.parse\('(.+?)'\);", html, re.S)
    data = json.loads(m.group(1).encode().decode("unicode_escape"))
    out: list[tuple[float, str, str]] = []
    extract_fill_images(data.get("page", data), out)
    seen: set[str] = set()
    for y, img, hint in sorted(out, key=lambda x: x[0]):
        if img in seen:
            continue
        if not img.lower().endswith((".jpg", ".jpeg", ".webp")):
            continue
        seen.add(img)
        print(f"{img}  y={y:.0f}  {hint!r}")


if __name__ == "__main__":
    main()
