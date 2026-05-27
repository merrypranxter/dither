# Pattern Generator Blueprint

This is a blueprint for a small dither-pattern web app.

## Core modules

### Source generator

Generates a continuous field:

- gradient
- noise
- radial waves
- moire field
- image upload
- webcam feed
- SDF shapes

### Dither engine

Converts the source field into marks:

- Bayer 2x2 / 4x4 / 8x8
- hash noise
- fake blue-noise
- threshold map
- CPU error diffusion

### Palette engine

Maps values to limited colors:

- monochrome
- duotone
- Game Boy
- CGA candy
- acid pop
- user palette

### Media simulator

Optional overlay:

- CRT scanlines
- textile weave
- screenprint dot gain
- GIF crawl
- photocopy grain

### Export engine

Exports:

- PNG
- SVG grid approximation
- JSON settings
- prompt recipe

## Minimum viable app

1. Canvas output.
2. Source field selector.
3. Dither type selector.
4. Palette selector.
5. Crunch slider.
6. Export PNG button.

That alone is enough to be useful without becoming a cockpit made of spaghetti.
