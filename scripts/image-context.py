"""Show JSON context around each downloaded KFH image hash."""
from __future__ import annotations

import json
import re
from pathlib import Path

HTML = Path(__file__).resolve().parents[1] / "kfh-home-fetched.html"
IMG_DIR = Path(__file__).resolve().parents[1] / "public" / "images" / "kfh"


def main() -> None:
    html = HTML.read_text(encoding="utf-8", errors="ignore")
    m = re.search(r"window\['bootstrap'\]\s*=\s*JSON\.parse\('(.+?)'\);", html, re.S)
    raw = m.group(1).encode().decode("unicode_escape")
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

    walk(json.loads(raw))

    for f in sorted(IMG_DIR.glob("*.jpg")):
        h = f.stem
        needle = f"_assets/media/{h}"
        for i, s in enumerate(strings):
            if needle not in s:
                continue
            ctx = []
            for j in range(max(0, i - 12), min(len(strings), i + 12)):
                t = strings[j].strip().replace("\n", " ")
                if 3 < len(t) < 120 and needle not in t and not t.startswith("{"):
                    ctx.append(t)
            print(f"{f.name} ({f.stat().st_size//1024}kb)")
            print("  ", " | ".join(ctx[:8]) or "(no text)")
            print()
            break


if __name__ == "__main__":
    main()
