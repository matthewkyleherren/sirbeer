#!/usr/bin/env python3
"""
Replace embedded base64 image assets in a Lottie JSON with external WebP files
named img_001.webp ... img_350.webp (or however many image assets exist).

USAGE:
  1) Put this script next to your Lottie JSON (e.g. input.json)
  2) Put your WebPs either:
       - in the same folder (set IMAGE_FOLDER = "" below), or
       - in a subfolder like "images/" (set IMAGE_FOLDER = "images/")
  3) Run:
       python3 relink_lottie_images.py input.json output.json

NOTES:
  - This keeps the existing asset w/h and only swaps u/p.
  - WebP support depends on your Lottie player/runtime. If WebP doesn’t render,
    switch the files to PNG/JPG or set EMBED_AS_DATA_URI=True and test again.
"""

import base64
import json
import os
import re
import sys
from typing import Any, Dict, List

# ====== CONFIG ======
IMAGE_FOLDER = ""          # e.g. "" (same folder) or "images/" (must end with / or be "")
EMBED_AS_DATA_URI = True  # True = embed data:image/webp;base64,... into "p"
FILE_PATTERN = "img_{:03d}.webp"
# ====================


def is_image_asset(a: Dict[str, Any]) -> bool:
    # Typical image assets have id like "image_0" and include w/h.
    if not isinstance(a, dict):
        return False
    _id = str(a.get("id", ""))
    if not _id.startswith("image_"):
        return False
    return "w" in a and "h" in a and "p" in a


def extract_image_index(asset_id: str) -> int:
    # "image_0" -> 0
    m = re.match(r"^image_(\d+)$", asset_id)
    return int(m.group(1)) if m else 10**9


def to_data_uri_webp(filepath: str) -> str:
    with open(filepath, "rb") as f:
        b64 = base64.b64encode(f.read()).decode("ascii")
    return "data:image/webp;base64," + b64


def main() -> None:
    if len(sys.argv) != 3:
        print("Usage: python3 relink_lottie_images.py input.json output.json")
        sys.exit(1)

    in_path, out_path = sys.argv[1], sys.argv[2]

    with open(in_path, "r", encoding="utf-8") as f:
        data = json.load(f)

    assets: List[Dict[str, Any]] = data.get("assets", [])
    if not isinstance(assets, list):
        raise ValueError("Invalid Lottie: 'assets' is not a list")

    image_assets = [a for a in assets if is_image_asset(a)]
    image_assets.sort(key=lambda a: extract_image_index(str(a.get("id", ""))))

    if not image_assets:
        print("No image assets found (id like 'image_0', with w/h/p). Nothing to do.")
        with open(out_path, "w", encoding="utf-8") as f:
            json.dump(data, f, ensure_ascii=False, separators=(",", ":"))
        return

    # Ensure folder formatting
    folder = IMAGE_FOLDER
    if folder and not folder.endswith("/"):
        folder += "/"

    missing = []
    for i, a in enumerate(image_assets, start=1):
        filename = FILE_PATTERN.format(i)
        disk_path = os.path.join(os.path.dirname(in_path), folder, filename)

        if EMBED_AS_DATA_URI:
            if not os.path.isfile(disk_path):
                missing.append(disk_path)
                continue
            a["u"] = ""  # unused when embedding
            a["p"] = to_data_uri_webp(disk_path)
        else:
            # External reference
            a["u"] = folder
            a["p"] = filename

        # Keep "e": 1 if present (many exports include it)
        if "e" in a:
            a["e"] = 1

    if missing:
        print("Missing files (cannot embed):")
        for m in missing:
            print("  -", m)
        print("\nFix missing files or set EMBED_AS_DATA_URI=False to just relink filenames.")
        sys.exit(2)

    with open(out_path, "w", encoding="utf-8") as f:
        # keep it compact like typical Lottie exports
        json.dump(data, f, ensure_ascii=False, separators=(",", ":"))

    print(f"Updated {len(image_assets)} image assets -> wrote {out_path}")
    if not EMBED_AS_DATA_URI:
        print(f"Images expected at: {os.path.join(os.path.dirname(in_path), folder)}{FILE_PATTERN.format(1)} ...")


if __name__ == "__main__":
    main()
