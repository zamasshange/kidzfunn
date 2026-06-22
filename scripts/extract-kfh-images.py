"""Extract image URLs from kidzfunhouseza.com Canva export HTML."""
from __future__ import annotations

import json
import re
from pathlib import Path

HTML = Path(__file__).resolve().parents[1] / "kfh-home-fetched.html"


def walk(obj, urls: set[str]) -> None:
    if isinstance(obj, dict):
        for k, v in obj.items():
            if k in ("url", "src", "href", "U", "V") and isinstance(v, str):
                if re.search(r"\.(webp|jpg|jpeg|png|svg|gif)(\?|$)", v, re.I):
                    urls.add(v)
            walk(v, urls)
    elif isinstance(obj, list):
        for item in obj:
            walk(item, urls)
    elif isinstance(obj, str):
        for m in re.findall(
            r"https?://[^\s\"'\\]+\.(?:webp|jpg|jpeg|png|svg|gif)(?:\?[^\s\"'\\]*)?",
            obj,
            re.I,
        ):
            urls.add(m)


def main() -> None:
    html = HTML.read_text(encoding="utf-8", errors="ignore")
    urls: set[str] = set()

    m = re.search(r"window\['bootstrap'\]\s*=\s*JSON\.parse\('(.+?)'\);", html, re.S)
    if m:
        raw = m.group(1).encode().decode("unicode_escape")
        data = json.loads(raw)
        walk(data, urls)

    for m in re.findall(
        r"https?://[^\s\"'\\]+\.(?:webp|jpg|jpeg|png|svg|gif)(?:\?[^\s\"'\\]*)?",
        html,
        re.I,
    ):
        urls.add(m)

    for u in sorted(urls):
        print(u)


if __name__ == "__main__":
    main()
