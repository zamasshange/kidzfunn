import json
import re
from pathlib import Path

html = Path(r"C:\Users\Lenovo\AppData\Local\Temp\kfh.html").read_text(encoding="utf-8", errors="ignore")
match = re.search(r"window\['bootstrap'\] = JSON\.parse\('(.+?)'\);", html)
data = json.loads(match.group(1).encode().decode("unicode_escape"))

texts = []
for m in re.finditer(r'"A": "([^"]{8,500})"', json.dumps(data)):
    t = m.group(1).encode().decode("unicode_escape")
    t = t.replace("\\n", "\n").replace("\u00e2\u0080\u0099", "'").replace("\u00e2\u0080\u009c", '"').replace("\u00e2\u0080\u009d", '"')
    if any(c.isalpha() for c in t):
        texts.append(t)

seen = set()
for t in texts:
    key = t.strip()
    if key in seen:
        continue
    seen.add(key)
    if any(k in key.lower() for k in [
        "kidz", "kfh", "party", "play", "hour", "open", "closed", "monday",
        "address", "whatsapp", "email", "gauteng", "johannesburg", "admission",
        "ticket", "r ", "birthday", "package", "holiday", "contact", "follow",
        "instagram", "facebook", "walkin", "booking", "membership", "free",
    ]):
        print("---")
        print(key)
