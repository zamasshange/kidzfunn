"""Process Kidz Fun House logo and favicon — remove white backgrounds."""
from __future__ import annotations

from collections import deque
from pathlib import Path

from PIL import Image

ASSETS = Path(
    r"C:\Users\Lenovo\.cursor\projects\c-Users-Lenovo-Downloads-museumapp\assets"
)
OUT = Path(r"C:\Users\Lenovo\Downloads\museumapp\public\images")
APP = Path(r"C:\Users\Lenovo\Downloads\museumapp\app")

SRC_LOGO = ASSETS / (
    "c__Users_Lenovo_AppData_Roaming_Cursor_User_workspaceStorage_"
    "406d52c3ffe435d3e8f639125eae3c69_images_image-01a189d1-"
    "6e74-41c1-a573-2fb1f96792aa.png"
)
SRC_FAV = ASSETS / (
    "c__Users_Lenovo_AppData_Roaming_Cursor_User_workspaceStorage_"
    "406d52c3ffe435d3e8f639125eae3c69_images_image-b1818b96-"
    "d32a-4568-9a7b-5a8f3a30ab23.png"
)


def is_bg_white(r: int, g: int, b: int, a: int = 255, threshold: int = 245) -> bool:
    if a < 10:
        return True
    return r >= threshold and g >= threshold and b >= threshold


def flood_remove_white(img: Image.Image, threshold: int = 245) -> Image.Image:
    img = img.convert("RGBA")
    w, h = img.size
    px = img.load()
    visited = [[False] * w for _ in range(h)]
    q: deque[tuple[int, int]] = deque()

    for x in range(w):
        q.append((x, 0))
        q.append((x, h - 1))
    for y in range(h):
        q.append((0, y))
        q.append((w - 1, y))

    while q:
        x, y = q.popleft()
        if x < 0 or y < 0 or x >= w or y >= h or visited[y][x]:
            continue
        visited[y][x] = True
        r, g, b, a = px[x, y]
        if not is_bg_white(r, g, b, a, threshold):
            continue
        px[x, y] = (r, g, b, 0)
        q.extend([(x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)])

    return img


def trim_transparent(img: Image.Image) -> Image.Image:
    bbox = img.getbbox()
    return img.crop(bbox) if bbox else img


def process_logo() -> tuple[int, int]:
    img = flood_remove_white(Image.open(SRC_LOGO), threshold=248)
    img = trim_transparent(img)
    OUT.mkdir(parents=True, exist_ok=True)
    out = OUT / "kidz-fun-house-logo.png"
    img.save(out, "PNG")
    print(f"logo: {img.size} -> {out}")
    return img.size


def process_favicon() -> None:
    img = flood_remove_white(Image.open(SRC_FAV), threshold=248)
    img = trim_transparent(img)
    fav_png = OUT / "kidz-fun-house-favicon.png"
    img.save(fav_png, "PNG")

    for size, name in [(32, "kidz-fun-house-icon-32.png"), (180, "kidz-fun-house-icon-180.png"), (512, "kidz-fun-house-icon-512.png")]:
        resized = img.resize((size, size), Image.Resampling.LANCZOS)
        resized.save(OUT / name, "PNG")

    icon32 = img.resize((32, 32), Image.Resampling.LANCZOS)
    icon180 = img.resize((180, 180), Image.Resampling.LANCZOS)
    icon32.save(APP / "icon.png", "PNG")
    icon180.save(APP / "apple-icon.png", "PNG")

    ico_sizes = []
    for size in (16, 32, 48):
        ico_sizes.append(img.resize((size, size), Image.Resampling.LANCZOS))
    ico_sizes[0].save(APP / "favicon.ico", format="ICO", sizes=[(s.width, s.height) for s in ico_sizes])

    print(f"favicon: {img.size} -> {fav_png}, app/favicon.ico, app/icon.png")


if __name__ == "__main__":
    logo_size = process_logo()
    process_favicon()
    print(f"LOGO_DIMS={logo_size[0]},{logo_size[1]}")
