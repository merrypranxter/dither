# Advanced Shader Pipeline

A robust dither shader pipeline can be thought of as a sequence of translation steps.

```text
source image / procedural color
→ luminance or palette-space analysis
→ threshold decision
→ mark-pattern selection
→ palette quantization
→ optional temporal modulation
→ optional display/media simulation
→ final color output
```

## 1. Source field

The source field can be:

- a rendered 3D scene
- a procedural gradient
- a webcam feed
- a texture
- a noise field
- a raymarched distance field
- a particle simulation
- a textile pattern map

Dither is not the subject. It is the conversion logic applied to the subject.

## 2. Luminance extraction

For monochrome dithering, reduce RGB to luminance.

A common perceptual approximation:

```glsl
float luma = dot(color.rgb, vec3(0.299, 0.587, 0.114));
```

For psychedelic or non-natural palettes, luma can be replaced with:

- hue distance
- saturation
- value
- noise-modulated brightness
- distance from a palette anchor
- signed distance field value
- audio amplitude

## 3. Threshold logic

Threshold logic decides whether a pixel becomes mark A or mark B.

```text
if luma > threshold: bright mark
else: dark mark
```

The character of the dither depends on where the threshold comes from:

- Bayer matrix: regular ordered texture
- hash noise: random grit
- blue-noise texture: even speckle
- animated noise: temporal shimmer
- radial field: lens-like dither bloom
- moire field: interference crawl

## 4. Palette quantization

For color dithering, choose the closest available palette color.

Then use threshold or noise to decide between the two nearest colors instead of only snapping to one.

This creates richer transitions and avoids dead posterized slabs.

## 5. Display simulation

Dither can be pushed through another media layer:

- CRT phosphor mask
- LCD subpixel grid
- printer dot gain
- scanline jitter
- GIF palette crawl
- screenprint ink choke/spread
- textile weave distortion

This is how dither stops looking like a filter and starts looking like an entire image system.

## 6. Output rules

A strong dither shader should usually preserve:

- visible pixel or mark structure
- controlled palette logic
- readable value hierarchy
- deliberate algorithmic texture
- edges that remain crunchy but legible

If the output becomes smooth, muddy, or randomly dusty, the shader has lost the plot.
