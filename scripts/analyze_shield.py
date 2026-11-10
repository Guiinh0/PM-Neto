from PIL import Image

img = Image.open('public/brand/logo-shield.png').convert('RGBA')
w, h = img.size

# Check vertical centerline at x=512
print(f"Image size: {w}x{h}")
for y in range(150, 850, 15):
    r, g, b, a = img.getpixel((512, y))
    # Categorize pixel
    cat = "BACKGROUND/DARK"
    if r > 200 and g > 200 and b > 200:
        cat = "WHITE"
    elif r > 180 and g > 150 and b < 80:
        cat = "YELLOW"
    elif r < 60 and g < 60 and b < 60:
        cat = "DARK"
    print(f"y={y:3d}: ({r:3d}, {g:3d}, {b:3d}) -> {cat}")
