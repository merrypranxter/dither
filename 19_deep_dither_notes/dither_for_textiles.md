# Dither For Textiles

Dither logic maps beautifully onto textile systems because both are about discrete units forming apparent continuous surfaces.

## Shared logic

Dithering has pixels.
Textiles have threads, knots, stitches, tiles, beads, or loops.

Both rely on:

- repeated units
- limited color sets
- density changes
- figure-ground decisions
- optical blending at distance

## Textile translations

### Weaving

Each dither cell can become a warp/weft decision.

Dark cell = one thread color rises.
Light cell = another thread color rises.

### Knitting

Dither cells can become stitch color choices.

Great for Fair Isle, intarsia-like maps, and pixel chart generation.

### Crochet

Dither cells can become color blocks or stitch-type changes.

### Cross-stitch

Each cell becomes an X-shaped mark.

### Beadwork

Each dither pixel becomes a bead color.

## Best algorithms for textile translation

Ordered dithering is easiest because it is stable and repeatable.

Error diffusion is more organic but harder to chart cleanly.

Blue-noise is elegant for beadwork and speckled fabric patterns.

## Anti-drift

Do not smooth the pattern after dithering.
Do not add airbrush shading.
Do not use infinite colors.
Do not blur the discrete units.

The whole point is countable material logic.
