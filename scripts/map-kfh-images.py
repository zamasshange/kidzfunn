"""Map KFH Canva images to nearby text labels from bootstrap JSON."""
from __future__ import annotations

import json
import re
from pathlib import Path

HTML = Path(__file__).resolve().parents[1] / "kfh-home-fetched.html"


def extract_bootstrap() -> dict:
    html = HTML.read_text(encoding="utf-8", errors="ignore")
    m = re.search(r"window\['bootstrap'\]\s*=\s*JSON\.parse\('(.+?)'\);", html, re.S)
    raw = m.group(1).encode().decode("unicode_escape")
    return json.loads(raw)


def walk_strings(obj, out: list[str]) -> None:
    if isinstance(obj, str):
        out.append(obj)
    elif isinstance(obj, dict):
        for v in obj.values():
            walk_strings(v, out)
    elif isinstance(obj, list):
        for item in obj:
            walk_strings(item, out)


def main() -> None:
    data = extract_bootstrap()
    strings: list[str] = []
    walk_strings(data, strings)

    media_re = re.compile(r"_assets/media/[a-f0-9]+\.(?:png|jpg|jpeg|webp|svg)", re.I)
    label_re = re.compile(
        r"^(?:Imagination Playhouses|Art Corner|Baby|Toddler|Reading|Puzzle|Walk-In Sandpit|Arcade|Giant Pirate|Jungle Gym|Welcome|Come Play|Party|Play Zones|Loyalty|Free Play|Toddler Mornings|Two for One|Kidz Party|Kidz Eat|Pensioners|Ballet|Working from Home|Little Creators|About|Our Services|School)",
        re.I,
    )

    pairs: list[tuple[str, str]] = []
    for i, s in enumerate(strings):
        for m in media_re.finditer(s):
            path = m.group(0)
            context = []
            for j in range(max(0, i - 8), min(len(strings), i + 8)):
                t = strings[j].strip()
                if 3 < len(t) < 100 and not media_re.search(t) and not t.startswith("http"):
                    context.append(t)
            pairs.append((path, " | ".join(context[:6])))

    seen: set[str] = set()
    for path, ctx in pairs:
        if path in seen:
            continue
        seen.add(path)
        if label_re.search(ctx) or any(
            k in ctx.lower()
            for k in (
                "playhouse",
                "sandpit",
                "arcade",
                "jungle",
                "party",
                "loyalty",
                "welcome",
                "toddler",
                "ballet",
                "creators",
            )
        ):
            print(f"{path}\n  {ctx}\n")


if __name__ == "__main__":
    main()
