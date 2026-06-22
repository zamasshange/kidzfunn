import json
import re
from pathlib import Path

patterns = [
    ("title", r"<title[^>]*>([^<]+)"),
    ("tel", r"tel:[^\s\"'<]+"),
    ("mailto", r"mailto:[^\s\"'<]+"),
    ("social", r"https?://(?:www\.)?(?:instagram|facebook)\.com/[^\s\"'<]+"),
    ("phone", r"\+27[\d\s]{8,15}"),
    ("email", r"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}"),
    ("name", r"Kidz Fun House[^<]{0,120}"),
]

def scan(label: str, text: str) -> None:
    print(f"\n=== {label} ===")
    for name, pat in patterns:
        found = sorted(set(re.findall(pat, text, re.I)))
        if found:
            print(f"{name}: {found[:8]}")


transcript = Path(
    r"C:\Users\Lenovo\.cursor\projects\c-Users-Lenovo-Downloads-museumapp\agent-transcripts"
    r"\32dab583-2f7e-4813-9df4-05de216e036d\32dab583-2f7e-4813-9df4-05de216e036d.jsonl"
)
with transcript.open(encoding="utf-8") as f:
    for i, line in enumerate(f, 1):
        if i == 726:
            obj = json.loads(line)
            text = obj["message"]["content"][0]["text"]
            scan("user html", text)
            break

live = Path(r"C:\Users\Lenovo\AppData\Local\Temp\kfh.html")
if live.exists():
    scan("live site", live.read_text(encoding="utf-8", errors="ignore"))
