import json
import re
from pathlib import Path

html = Path(r"C:\Users\Lenovo\AppData\Local\Temp\kfh.html").read_text(encoding="utf-8", errors="ignore")
match = re.search(r"window\['bootstrap'\] = JSON\.parse\('(.+?)'\);", html)
data = json.loads(match.group(1).encode().decode("unicode_escape"))
blob = json.dumps(data)

keywords = [
    "whatsapp", "phone", "call", "email", "address", "location", "map",
    "membership", "admission", "ticket", "birthday", "party", "play",
    "holiday", "closed", "open", "monday", "gauteng", "johannesburg",
    "pretoria", "randburg", "midrand", "centurion", "fourways", "bryanston",
    "082", "083", "060", "2782", "kidzfunhouse", "instagram", "facebook",
]

for kw in keywords:
    for m in re.finditer(kw, blob, re.I):
        start = max(0, m.start() - 80)
        end = min(len(blob), m.end() + 120)
        snippet = blob[start:end].replace("\\n", " | ")
        if any(c.isalpha() for c in snippet):
            print(f"\n--- {kw} ---\n{snippet[:220]}")
