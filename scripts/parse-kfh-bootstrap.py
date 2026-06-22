import json
import re
from pathlib import Path

html = Path(r"C:\Users\Lenovo\AppData\Local\Temp\kfh.html").read_text(encoding="utf-8", errors="ignore")
match = re.search(r"window\['bootstrap'\] = JSON\.parse\('(.+?)'\);", html)
raw = match.group(1).encode().decode("unicode_escape")
data = json.loads(raw)

page = data.get("page", {}).get("A", {})
print("TITLE:", page.get("D"))
print("DESC:", page.get("E"))

blob = json.dumps(data)
for pat in [
    r"\+27[\d\s]{8,15}",
    r"0\d{2}[\s-]?\d{3}[\s-]?\d{4}",
    r"hello@[^\s\"']+",
    r"Party@[^\s\"']+",
    r"info@[^\s\"']+",
    r"https?://wa\.me/[^\s\"']+",
    r"Monday[^\"]{0,120}",
    r"Tuesday[^\"]{0,120}",
    r"Open[^\"]{0,80}",
    r"Gauteng[^\"]{0,120}",
    r"Johannesburg[^\"]{0,120}",
    r"Pretoria[^\"]{0,120}",
    r"Randburg[^\"]{0,120}",
    r"Sandton[^\"]{0,120}",
    r"R\s?\d{2,4}",
]:
    found = sorted(set(re.findall(pat, blob, re.I)))
    if found:
        print(f"\n{pat}:")
        for item in found[:12]:
            print(" ", item[:200])
