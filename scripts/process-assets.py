"""Convert portfolio assets to web-ready WebP (sRGB, no EXIF/ICC), so photos never leak GPS or other metadata.

Usage (from the repo root): python scripts/process-assets.py ../portfolio-assets .
Requires Pillow (pip install pillow). Add a block below for each new asset; re-running is safe and reproduces the same files.
"""
import sys
from pathlib import Path
from PIL import Image, ImageChops

src, repo = Path(sys.argv[1]), Path(sys.argv[2])
images, assets = repo / 'public/images', repo / 'public/assets'


def clean(im):
    # Fresh RGB copy: drops EXIF, XMP and ICC.
    return Image.frombytes('RGB', im.size, im.convert('RGB').tobytes())


def save(im, path, q=82):
    im.save(path, 'WEBP', quality=q, method=6)
    print(path.name, im.size, path.stat().st_size // 1024, 'KB')


def content_bbox(im, bg=(255, 255, 255), tol=30):
    diff = ImageChops.difference(im, Image.new('RGB', im.size, bg)).convert('L').point(lambda p: 255 if p > tol else 0)
    return diff.getbbox()


def tile(im, height, pad, bg=(255, 255, 255), square=False):
    """Trim white margins, then centre the logo on a padded white tile."""
    im = im.crop(content_bbox(im))
    inner_h = height - 2 * pad
    w = round(im.width * inner_h / im.height)
    im = im.resize((w, inner_h), Image.LANCZOS)
    tw = height if square else w + 2 * pad
    if square and w > tw - 2 * pad:  # wide logo in a square tile: fit by width instead
        im = im.resize((tw - 2 * pad, round(im.height * (tw - 2 * pad) / im.width)), Image.LANCZOS)
    out = Image.new('RGB', (tw, height), bg)
    out.paste(im, ((tw - im.width) // 2, (height - im.height) // 2))
    return out


# Film poster (portrait 731x915): native + 480w.
poster = clean(Image.open(src / 'IIM shortfilm Poster award.jpeg'))
# Source is a screenshot: cover the Instagram avatar icon (bottom left) with background from beside it,
# then trim the 2px side borders and the strip of the next post at the bottom.
poster.paste(poster.crop((52, 864, 92, 900)), (8, 864))
poster = poster.crop((2, 0, 729, 908))
save(poster, images / 'film-poster-727.webp')
save(poster.resize((480, round(poster.height * 480 / poster.width)), Image.LANCZOS), images / 'film-poster-480.webp')

# IBM logo: square white tile like the AWS badge (128px, shown at 64px).
save(tile(clean(Image.open(src / 'ibm_logo_for_certs.jpg')), 128, 22, square=True), assets / 'ibm-logo.webp', q=90)

# IELTS: already a red square; 96px (shown at 48px).
save(clean(Image.open(src / 'IELTS Logo.jpeg')).resize((96, 96), Image.LANCZOS), assets / 'ielts-logo.webp', q=90)

# MIFI: keep the full ministry signature on a white tile, 96px tall (shown at 48px).
mifi = Image.open(src / 'mifi_logo.png').convert('RGBA')
flat = Image.new('RGB', mifi.size, (255, 255, 255))
flat.paste(mifi, mask=mifi.split()[3])
save(tile(flat, 96, 10), assets / 'mifi-logo.webp', q=90)
