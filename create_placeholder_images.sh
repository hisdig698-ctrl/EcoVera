#!/bin/bash

# Create placeholder images for handwash and sanitizer products
# Using ImageMagick to create simple product packaging-style images

# Handwash - Green and white with product details
convert -size 400x400 xc:white \
  -fill '#2d5016' -stroke '#2d5016' -strokewidth 2 \
  -draw "rectangle 50,50 350,350" \
  -fill white -pointsize 24 -gravity center \
  -annotate 0 "Titepati\nHand Wash" \
  -pointsize 14 -gravity south -annotate 0 "Natural Cleansing\n200ml" \
  /home/mac/EcoVera/public/images/products/titepati-handwash.jpg

# Sanitizer - Green and white with product details
convert -size 400x400 xc:white \
  -fill '#2d5016' -stroke '#2d5016' -strokewidth 2 \
  -draw "rectangle 50,50 350,350" \
  -fill white -pointsize 24 -gravity center \
  -annotate 0 "Titepati\nSanitizer" \
  -pointsize 14 -gravity south -annotate 0 "99.9% Germ Kill\n200ml" \
  /home/mac/EcoVera/public/images/products/titepati-sanitizer.jpg

echo "✅ Product images created"
