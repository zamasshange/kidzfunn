import json
import re
from pathlib import Path

html = Path(r"C:\Users\Lenovo\AppData\Local\Temp\kfh.html").read_text(encoding="utf-8", errors="ignore")
match = re.search(r"window\['bootstrap'\] = JSON\.parse\('(.+?)'\);", html)
data = json.loads(match.group(1).encode().decode("unicode_escape"))
blob = json.dumps(data)

for kw in ["under 1s", "over 1s", "FIRST HOUR", "PER CHILD PER HOUR", "R 75", "R 50", "R 120", "R 150", "R 200", "R 290", "R 300", "R 375"]:
    i = blob.find(kw)
    while i >= 0:
        chunk = blob[i : i + 500]
        prices = re.findall(r'"A": "R ?\d+[^"]{0,40}"', chunk)
        labels = re.findall(r'"A": "(under 1s|over 1s|FIRST HOUR|PER CHILD PER HOUR|unlimited playtime|no charge for adults)[^"]*"', chunk)
        if prices or labels:
            print(f"\n== {kw} @ {i} ==")
            for p in prices[:5]:
                print(" ", p)
            for l in labels[:5]:
                print(" ", l)
        i = blob.find(kw, i + 1)
