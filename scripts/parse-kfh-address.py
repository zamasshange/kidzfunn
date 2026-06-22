import json
import re
from pathlib import Path

html = Path(r"C:\Users\Lenovo\AppData\Local\Temp\kfh.html").read_text(encoding="utf-8", errors="ignore")
match = re.search(r"window\['bootstrap'\] = JSON\.parse\('(.+?)'\);", html)
data = json.loads(match.group(1).encode().decode("unicode_escape"))
blob = json.dumps(data)

# likely address / location strings
for m in re.finditer(r'"A": "([^"]{5,120})"', blob):
    t = m.group(1).encode().decode("unicode_escape").replace("\\n", " ")
    if re.search(r"\d", t) and re.search(r"[A-Za-z]{4,}", t):
        if any(k in t.lower() for k in ["shop", "street", "road", "avenue", "cnr", "corner", "johannesburg", "gauteng", "bryanston", "fourways", "randburg", "midrand", "sandton", "william", "nicol", "wanderers", "kent", "main", "unit", "mall", "centre", "center", "082"]):
            print(t)

print("\n--- near maps link ---")
idx = blob.find("maps.app.goo.gl")
print(blob[idx - 500 : idx + 500].replace("\\n", "\n")[:900])
