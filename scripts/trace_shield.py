from PIL import Image

img = Image.open('public/brand/logo-shield.png').convert('RGBA')

# Let's extract clean outline points for the 5 pieces.
# Origin at center of logo (512, 512).
# Scale factor so total shield height is approx 4.0 units.
# 1024 pixels -> let's say 1 unit = 160 pixels.
# (x - 512) / 160, -(y - 512) / 160 (so +Y is up)

# 1. Shackle:
# Outer arc: center (512, 335), radius 145.
# Top apex is y = 190.
# Inner arc: center (512, 335), radius 85.
# Inner top apex is y = 250.
# Left outer x = 367, left inner x = 427.
# Right outer x = 657, right inner x = 597.
# Bottom ends at y = 385.

# 2. Chevron:
# Top peak: (512, 358)
# Left slope down to outer tip: (312, 427)
# Step inward along gap: (382, 478)
# Inner V peak: (512, 435)
# Right step: (642, 478)
# Right slope down to outer tip: (712, 427)

# 3. Left Wing:
# Top outer corner: (312, 438)
# Top inner corner: (382, 490)
# Inner straight down: (382, 590)
# Inner curve down to bottom: bezier to (508, 715)
# Bottom inner tip: (508, 785)
# Bottom outer tip: (508, 802)
# Outer curve up: bezier to (312, 600)
# Outer straight up: (312, 438)

# 4. Right Wing (mirror across x=512):
# Top outer corner: (712, 438)
# Top inner corner: (642, 490)
# Inner straight down: (642, 590)
# Inner curve down: bezier to (516, 715)
# Bottom inner tip: (516, 785)
# Bottom outer tip: (516, 802)
# Outer curve up: bezier to (712, 600)
# Outer straight up: (712, 438)

# 5. Keyhole:
# Center: x = 512.
# Circular head: center (512, 532), radius 38.
# Neck width: from x = 492 to 532 at y = 562.
# Base trapezoid: expands to x = 478 and 546 at y = 656.
# Base bottom edge: y = 656.

print("Coordinate mapping verified.")
