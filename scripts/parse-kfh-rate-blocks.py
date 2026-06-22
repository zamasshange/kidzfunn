import json
import re
import sys
from pathlib import Path

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

html = Path(r"C:\Users\Lenovo\AppData\Local\Temp\kfh.html").read_text(encoding="utf-8", errors="ignore")
match = re.search(r"window\['bootstrap'\] = JSON\.parse\('(.+?)'\);", html)
data = json.loads(match.group(1).encode().decode("unicode_escape"))
blob = json.dumps(data)

texts = []
for m in re.finditer(r'"A": "([^"]{1,300})"', blob):
    t = m.group(1).encode().decode("unicode_escape").replace("\\n", " | ")
    texts.append(t)

for i, t in enumerate(texts):
    if re.fullmatch(r"R\s?\d{2,4}(\.\d{2})?", t.strip(), re.I):
        ctx = " | ".join(texts[max(0, i - 6) : i + 4])
        if any(k in ctx.lower() for k in ["under", "over", "hour", "child", "adult", "playtime", "weekday", "weekend", "monthly", "loyalty", "first"]):
            print(ctx)
            print("---")
