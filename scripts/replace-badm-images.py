"""Replace BADM upload URLs in app/ with Kidz Fun House images."""
from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1] / "app"

PHOTOS = [
    "https://kidzfunhouseza.com/_assets/media/a282e2c8144643aecaed7e23f2d0971b.jpg",
    "https://kidzfunhouseza.com/_assets/media/7025c1085ac5067667407a84ce2088df.jpg",
    "https://kidzfunhouseza.com/_assets/media/c45c040cd3756b0e641ba9ac10a01e6d.jpg",
    "https://kidzfunhouseza.com/_assets/media/502d45c3d708a1ea8bab5a34721fc7eb.jpg",
    "https://kidzfunhouseza.com/_assets/media/9df1a2ce9b684a88a2fd3d4a7aac7926.jpg",
    "https://kidzfunhouseza.com/_assets/media/0a9765a643923c320a79413fd8f4de13.jpg",
    "https://kidzfunhouseza.com/_assets/media/7ba518ae4c94bb9d8025c391c61d2f3d.jpg",
    "https://kidzfunhouseza.com/_assets/media/ea03ea3e697af040367555ec93303e94.jpg",
    "https://kidzfunhouseza.com/_assets/media/bae413303e00ce05cf52848f63dd87a0.jpg",
    "https://kidzfunhouseza.com/_assets/media/5297ecd2ae654e096891eff7701e1bdc.jpg",
    "https://kidzfunhouseza.com/_assets/media/861292b85e5bfbaba2672b686ce4e4d4.jpg",
    "https://kidzfunhouseza.com/_assets/media/43169d950bb466d5a1b95e38e03d3f4b.jpg",
    "https://kidzfunhouseza.com/_assets/media/3899dc26a29d37eff501900a0b8105f5.jpg",
    "https://kidzfunhouseza.com/_assets/media/73a0a47fd1adbc5cf8fd1e4b4a3ee9db.jpg",
    "https://kidzfunhouseza.com/_assets/media/85ac9b565918e7ff48fe846b75a54d9f.jpg",
    "https://kidzfunhouseza.com/_assets/media/ce631791efc1e0a9952e53a47dfdb29d.jpg",
    "https://kidzfunhouseza.com/_assets/media/514891ba0a87729e9e5f9bea581d96a5.jpg",
    "https://kidzfunhouseza.com/_assets/media/d5233f9234807b6f311e7eb35b1f2826.jpg",
    "https://kidzfunhouseza.com/_assets/media/93a86a8df2dcceefa00b03018c5b8829.jpg",
    "https://kidzfunhouseza.com/_assets/media/b13e9497dde730e8023f0c93334b3190.jpg",
    "https://kidzfunhouseza.com/_assets/media/add4156a36d731f1f7c39a317067692b.jpg",
    "https://kidzfunhouseza.com/_assets/media/6b0eebee30f5558e23419733721740e5.jpg",
    "https://kidzfunhouseza.com/_assets/media/28efb6be041093bac30083b81ad935dd.jpg",
    "https://kidzfunhouseza.com/_assets/media/8b0fefd2d41a0c963a1bd6c3bfb14c33.jpg",
    "https://kidzfunhouseza.com/_assets/media/742af04d98cb02dc587e280f2303acde.jpg",
    "https://kidzfunhouseza.com/_assets/media/2b0ee44c25fc2a813cc2d18fb2a8a6c2.jpg",
    "https://kidzfunhouseza.com/_assets/media/2fb39179bebd4c7ac7458d1df6bc7e9c.jpg",
    "https://kidzfunhouseza.com/_assets/media/2e4b8db65323ee2e779815da6dae1353.jpg",
    "https://kidzfunhouseza.com/_assets/media/35311db4f0d75430cbe67a39dc49e076.jpg",
    "https://kidzfunhouseza.com/_assets/media/375588e1b355b77e92987e535e60ec80.jpg",
]

PATTERN = re.compile(
    r"https://bayareadiscoverymuseum\.org/wp-content/uploads/[^\"'\s)]+",
    re.I,
)


def main() -> None:
    counter = 0
    for path in ROOT.rglob("*"):
        if path.suffix not in {".ts", ".tsx", ".css"}:
            continue
        if "kfhImages.ts" in str(path):
            continue
        text = path.read_text(encoding="utf-8")
        if "bayareadiscoverymuseum.org/wp-content/uploads" not in text:
            continue

        def repl(_: re.Match[str]) -> str:
            nonlocal counter
            url = PHOTOS[counter % len(PHOTOS)]
            counter += 1
            return url

        new = PATTERN.sub(repl, text)
        if new != text:
            path.write_text(new, encoding="utf-8")
            print(path.relative_to(ROOT.parent))


if __name__ == "__main__":
    main()
