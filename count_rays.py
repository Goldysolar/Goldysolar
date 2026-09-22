from PIL import Image
import math

img = Image.open('/Users/karamlly/.gemini/antigravity/brain/0879c563-e4e3-4993-b7f1-348b3a8e30fd/.user_uploaded/media_1790119044074.png').convert('L')
pixels = img.load()
width, height = img.size

# Find the center
cx, cy = width // 2, height // 2

# Scan a circle near the outer edge
radius = min(width, height) * 0.45
peaks = 0
prev_val = 255
for angle in range(360):
    rad = math.radians(angle)
    x = int(cx + radius * math.cos(rad))
    y = int(cy + radius * math.sin(rad))
    val = pixels[x, y]
    # Assuming yellow is darker than white background in grayscale
    if val < 200 and prev_val >= 200:
        peaks += 1
    prev_val = val

print(f"Detected {peaks} peaks at radius {radius}")
