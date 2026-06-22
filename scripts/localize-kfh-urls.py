"""Point kidzfunhouseza.com image URLs to local /images/kfh/ copies."""
from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1] / "app"
PATTERN = re.compile(
    r"https://kidzfunhouseza\.com/_assets/media/([a-f0-9]+\.(?:jpg|jpeg|png|webp))",
    re.I,
)


def main() -> None:
    for path in ROOT.rglob("*"):
        if path.suffix not in {".ts", ".tsx"} or "kfhImages.ts" in str(path):
            continue
        text = path.read_text(encoding="utf-8")
        if "kidzfunhouseza.com" not in text:
            continue
        new = PATTERN.sub(r"/images/kfh/\1", text)
        if new != text:
            path.write_text(new, encoding="utf-8")
            print(path.relative_to(ROOT.parent))


if __name__ == "__main__":
    main()
