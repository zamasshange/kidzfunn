"""Download KFH media files for local HD serving."""
from __future__ import annotations

import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "images" / "kfh"
OUT.mkdir(parents=True, exist_ok=True)

FILES = [
    "a282e2c8144643aecaed7e23f2d0971b.jpg",
    "7025c1085ac5067667407a84ce2088df.jpg",
    "c45c040cd3756b0e641ba9ac10a01e6d.jpg",
    "502d45c3d708a1ea8bab5a34721fc7eb.jpg",
    "9df1a2ce9b684a88a2fd3d4a7aac7926.jpg",
    "0a9765a643923c320a79413fd8f4de13.jpg",
    "7ba518ae4c94bb9d8025c391c61d2f3d.jpg",
    "ea03ea3e697af040367555ec93303e94.jpg",
    "bae413303e00ce05cf52848f63dd87a0.jpg",
    "5297ecd2ae654e096891eff7701e1bdc.jpg",
    "861292b85e5bfbaba2672b686ce4e4d4.jpg",
    "43169d950bb466d5a1b95e38e03d3f4b.jpg",
    "3899dc26a29d37eff501900a0b8105f5.jpg",
    "73a0a47fd1adbc5cf8fd1e4b4a3ee9db.jpg",
    "85ac9b565918e7ff48fe846b75a54d9f.jpg",
    "ce631791efc1e0a9952e53a47dfdb29d.jpg",
    "514891ba0a87729e9e5f9bea581d96a5.jpg",
    "d5233f9234807b6f311e7eb35b1f2826.jpg",
    "93a86a8df2dcceefa00b03018c5b8829.jpg",
    "b13e9497dde730e8023f0c93334b3190.jpg",
    "add4156a36d731f1f7c39a317067692b.jpg",
    "6b0eebee30f5558e23419733721740e5.jpg",
    "28efb6be041093bac30083b81ad935dd.jpg",
    "8b0fefd2d41a0c963a1bd6c3bfb14c33.jpg",
    "742af04d98cb02dc587e280f2303acde.jpg",
    "2b0ee44c25fc2a813cc2d18fb2a8a6c2.jpg",
    "2fb39179bebd4c7ac7458d1df6bc7e9c.jpg",
    "2e4b8db65323ee2e779815da6dae1353.jpg",
    "35311db4f0d75430cbe67a39dc49e076.jpg",
    "375588e1b355b77e92987e535e60ec80.jpg",
]

BASE = "https://kidzfunhouseza.com/_assets/media/"
HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
    "Referer": "https://kidzfunhouseza.com/",
}


def main() -> None:
    for name in FILES:
        dest = OUT / name
        if dest.exists() and dest.stat().st_size > 10000:
            print(f"skip {name}")
            continue
        url = BASE + name
        try:
            req = urllib.request.Request(url, headers=HEADERS)
            with urllib.request.urlopen(req, timeout=60) as resp:
                dest.write_bytes(resp.read())
            print(f"ok {name} ({dest.stat().st_size // 1024}kb)")
        except Exception as e:
            print(f"fail {name}: {e}")


if __name__ == "__main__":
    main()
