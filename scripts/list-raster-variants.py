"""List Canva RASTER assets and all resolution variants."""
from __future__ import annotations

import json
import re
from pathlib import Path

HTML = Path(__file__).resolve().parents[1] / "kfh-home-fetched.html"


def main() -> None:
    raw = HTML.read_text(encoding="utf-8", errors="ignore")
    m = re.search(r"window\['bootstrap'\]\s*=\s*JSON\.parse\('(.+?)'\);", raw, re.S)
    s = m.group(1).encode().decode("unicode_escape")

    # Each RASTER block lists resolution variants in "files"
    for block in re.finditer(
        r'\{"type":"RASTER","id":"([^"]+)".*?"files":\[(.*?)\]\}',
        s,
    ):
        rid = block.group(1)
        files_raw = block.group(2)
        files = re.findall(
            r'"url":"(_assets/media/[^"]+)"[^}]*"width":(\d+),"height":(\d+)',
            files_raw,
        )
        if not files:
            continue
        files.sort(key=lambda f: int(f[1]), reverse=True)
        best = files[0]
        if len(files) > 1 or int(best[1]) >= 1600:
            print(f"{rid}:")
            for url, w, h in files:
                print(f"  {w}x{h}  {url.split('/')[-1]}")
            print()


if __name__ == "__main__":
    main()
