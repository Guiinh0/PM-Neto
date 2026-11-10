from PIL import Image

img = Image.open('public/brand/logo-shield.png').convert('RGBA')
w, h = img.size

# Find bounds of:
# 1. Shackle (white arch at top)
# 2. Chevron (yellow roof)
# 3. Left wing (yellow flank)
# 4. Right wing (white flank)
# 5. Keyhole (white central shape)

# Let's sample key areas
def find_bounds(condition):
    min_x, max_x, min_y, max_y = w, 0, h, 0
    count = 0
    for y in range(h):
        for x in range(w):
            r, g, b, a = img.getpixel((x, y))
            if condition(r, g, b, a, x, y):
                count += 1
                if x < min_x: min_x = x
                if x > max_x: max_x = x
                if y < min_y: min_y = y
                if y > max_y: max_y = y
    return min_x, min_y, max_x, max_y, count

# 1. Shackle: White, y < 400
shackle = find_bounds(lambda r, g, b, a, x, y: y < 390 and r > 200 and g > 200 and b > 200)
print(f"Shackle (white arch): {shackle}")

# 2. Chevron: Yellow, y between 340 and 480
chevron = find_bounds(lambda r, g, b, a, x, y: 340 <= y <= 480 and r > 180 and g > 150 and b < 120)
print(f"Chevron (yellow roof): {chevron}")

# 3. Left wing: Yellow, x < 512, y > 420
left_wing = find_bounds(lambda r, g, b, a, x, y: y > 420 and x < 512 and r > 180 and g > 150 and b < 120)
print(f"Left wing (yellow): {left_wing}")

# 4. Right wing: White, x > 512, y > 420, not center
right_wing = find_bounds(lambda r, g, b, a, x, y: y > 420 and x > 550 and r > 200 and g > 200 and b > 200)
print(f"Right wing (white): {right_wing}")

# 5. Keyhole: White, center (x ~ 450..580, y ~ 470..660)
keyhole = find_bounds(lambda r, g, b, a, x, y: 450 <= x <= 580 and 470 <= y <= 660 and r > 200 and g > 200 and b > 200)
print(f"Keyhole (white center): {keyhole}")
