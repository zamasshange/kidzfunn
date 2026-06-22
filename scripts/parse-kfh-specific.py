import json
import re
from pathlib import Path

html = Path(r"C:\Users\Lenovo\AppData\Local\Temp\kfh.html").read_text(encoding="utf-8", errors="ignore")
match = re.search(r"window\['bootstrap'\] = JSON\.parse\('(.+?)'\);", html)
data = json.loads(match.group(1).encode().decode("unicode_escape"))
blob = json.dumps(data)

idx = blob.find("Address:")
print("address context:", blob[idx : idx + 1200].replace("\\n", "\n")[:800])

for kw in [
    "under 1",
    "over 1",
    "FIRST HOUR",
    "PER CHILD PER HOUR",
    "no charge for adults",
    "R 50",
    "R 120",
    "R 150",
    "R 100",
    "Shop ",
    "Cnr ",
    "Corner ",
    "Bryanston",
    "Fourways",
    "Randburg",
    "Midrand",
    "Sandton",
]:
    i = blob.find(kw)
    if i >= 0:
        print(f"\n--- {kw} ---")
        print(blob[max(0, i - 80) : i + 220].replace("\\n", "\n")[:280])

for label, pat in {
    "address_block": r"Address:[^\"]{0,300}",
    "maps": r"https://maps\.app\.goo\.gl/[^\"]+",
    "admission": r"R ?\d{2,4}[^\"]{0,80}(?:hour|child|weekday|adult|under|over)[^\"]{0,80}",
    "loyalty": r"loyalty[^\"]{0,200}",
    "membership": r"Per Month[^\"]{0,200}|R99[^\"]{0,120}",
}.items():
    found = sorted(set(re.findall(pat, blob, re.I)))
    print(f"\n== {label} ==")
    for f in found[:15]:
        print(f.replace("\\n", " | ")[:250])
