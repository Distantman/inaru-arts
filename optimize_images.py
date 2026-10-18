#!/usr/bin/env python3
import os
import glob
from PIL import Image

IMAGES_DIR = "public/images"
MAX_DIM = 1600
QUALITY = 82

def optimize_images():
    total_orig = 0
    total_new = 0
    image_files = sorted(glob.glob(os.path.join(IMAGES_DIR, "*.jpg")))

    print(f"Found {len(image_files)} images to optimize...")

    for path in image_files:
        orig_size = os.path.getsize(path)
        total_orig += orig_size

        with Image.open(path) as img:
            img = img.convert("RGB")
            # Downscale proportionally if wider or taller than MAX_DIM
            img.thumbnail((MAX_DIM, MAX_DIM), Image.Resampling.LANCZOS)
            
            # Temporary file to save safely
            temp_path = path + ".tmp"
            img.save(temp_path, "JPEG", quality=QUALITY, optimize=True, progressive=True)

        new_size = os.path.getsize(temp_path)
        os.replace(temp_path, path)
        total_new += new_size

        print(f"Optimized {os.path.basename(path)}: {orig_size / (1024*1024):.2f}MB -> {new_size / 1024:.1f}KB")

    print("\n--- Summary ---")
    print(f"Original total: {total_orig / (1024*1024):.2f} MB")
    print(f"New total:      {total_new / (1024*1024):.2f} MB")
    print(f"Saved:          {(total_orig - total_new) / (1024*1024):.2f} MB ({(1 - total_new/total_orig)*100:.1f}% reduction)")

if __name__ == "__main__":
    optimize_images()
