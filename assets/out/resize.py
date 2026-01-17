from pathlib import Path
from PIL import Image
import re

# Settings
TARGET_H = 1350
TARGET_W = 1300

# Input/output
in_dir = Path(".")
out_dir = in_dir / "out"
out_dir.mkdir(exist_ok=True)

# Match img_001.webp ... img_350.webp
pat = re.compile(r"^img_(\d{3})\.webp$", re.IGNORECASE)

files = []
for p in in_dir.iterdir():
    m = pat.match(p.name)
    if m:
        files.append((int(m.group(1)), p))
files.sort(key=lambda t: t[0])

if not files:
    raise SystemExit("No files found matching img_###.webp in this folder.")

def process_one(src: Path, dst: Path):
    with Image.open(src) as im:
        # Preserve alpha
        im = im.convert("RGBA")

        w, h = im.size

        # Resize to TARGET_H (keep aspect)
        scale = TARGET_H / h
        new_w = max(1, int(round(w * scale)))
        im = im.resize((new_w, TARGET_H), Image.LANCZOS)

        # Center crop to TARGET_W (remove sides)
        if new_w >= TARGET_W:
            left = (new_w - TARGET_W) // 2
            im = im.crop((left, 0, left + TARGET_W, TARGET_H))
        else:
            # If resized width is smaller than 1300, pad with transparent sides
            canvas = Image.new("RGBA", (TARGET_W, TARGET_H), (0, 0, 0, 0))
            x = (TARGET_W - new_w) // 2
            canvas.paste(im, (x, 0))
            im = canvas

        # Save as WEBP with alpha
        im.save(dst, "WEBP", lossless=True, method=6)

for idx, src in files:
    dst = out_dir / src.name
    process_one(src, dst)
    print(f"OK {src.name} -> out/{src.name}")

print(f"\nDone. Processed {len(files)} files into: {out_dir.resolve()}")
