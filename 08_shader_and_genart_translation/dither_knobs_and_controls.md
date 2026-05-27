# Dither Knobs And Controls

These are the core controls that make a dither shader useful as an interactive art tool.

## Essential knobs

### `pixelSize`

Controls the resolution of the dither grid.

Small values create fine texture.
Large values create chunky retro blocks.

### `thresholdBias`

Offsets the threshold decision.

Negative values darken the output.
Positive values brighten the output.

### `contrastBoost`

Pushes source values away from the middle before dithering.

This prevents flat mush.

### `patternStrength`

Blends between the raw image and the dithered decision.

Useful for hybrid looks.

### `paletteMode`

Switches between monochrome, duotone, indexed, acidic pop, Game Boy, CGA, or custom palette sets.

### `matrixMode`

Switches between Bayer 2x2, 4x4, 8x8, hash noise, blue-noise approximation, or moire threshold.

### `temporalCrawl`

Animates the threshold field over time.

Keep it subtle unless the goal is full haunted GIF seizure goblin.

## Advanced knobs

### `edgePreserve`

Boosts contrast near detected edges so important silhouettes remain readable.

### `dotGain`

Simulates ink spread or screenprint fill-in.

### `channelOffset`

Offsets thresholds per RGB channel for chromatic dither shimmer.

### `weaveWarp`

Distorts the dither grid along horizontal and vertical textile threads.

### `scanlineInfluence`

Adds CRT or broadcast-era horizontal structure.

### `noiseSeed`

Allows reproducible random patterns.

## Good default ranges

```text
pixelSize:        1.0 to 8.0
thresholdBias:   -0.25 to 0.25
contrastBoost:   0.75 to 2.0
patternStrength: 0.0 to 1.0
edgePreserve:    0.0 to 1.0
dotGain:         -0.15 to 0.25
temporalCrawl:   0.0 to 1.0
```

## Design warning

Too many knobs can make a tool feel like a spaceship toilet.

For artist-facing interfaces, expose the cute knobs:

- crunch
- palette
- crawl
- grid size
- ink spread
- sparkle/noise

For AI/code agents, document the technical knobs underneath.
