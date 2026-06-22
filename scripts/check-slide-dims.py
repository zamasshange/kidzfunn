"""Check dimensions of KFH images."""
from __future__ import annotations

import struct
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1] / "public" / "images" / "kfh"


def jpeg_size(data: bytes) -> tuple[int, int] | None:
    i = 0
    while i < len(data) - 8:
        if data[i] != 0xFF:
            i += 1
            continue
        marker = data[i + 1]
        if marker in (0xC0, 0xC1, 0xC2):
            h = struct.unpack(">H", data[i + 5 : i + 7])[0]
            w = struct.unpack(">H", data[i + 7 : i + 9])[0]
            return w, h
        i += 1
    return None


def main() -> None:
    rows = []
    for path in sorted(ROOT.glob("*.jpg")):
        size = jpeg_size(path.read_bytes())
        if size:
            w, h = size
            rows.append((w, path.stat().st_size // 1024, path.name))
    rows.sort(reverse=True)
    for w, kb, name in rows:
        print(f"{w:4d}px  {kb:4d}kb  {name}")


if __name__ == "__main__":
    main()
