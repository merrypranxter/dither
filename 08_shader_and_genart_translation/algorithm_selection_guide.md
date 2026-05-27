# Algorithm Selection Guide

Different dither families create very different visual personalities.

## Bayer / ordered dithering

Use when you want:

- obvious pixel grid structure
- retro computer graphics
- mechanical texture
- stable animation
- tileable pattern logic
- shader speed

Avoid when you want organic dust or print-like irregularity.

## Floyd-Steinberg style error diffusion

Use when you want:

- organic pixel worms
- image-like tonal behavior
- crunchy portrait rendering
- natural-looking monochrome conversions
- old scanner / printer feeling

Avoid in pure real-time fragment shaders unless approximated, because true error diffusion depends on neighboring output state.

## Atkinson

Use when you want:

- classic old Mac feeling
- softer sparse diffusion
- charming 1-bit illustration texture
- more white-space preservation

## Random dithering

Use when you want:

- chaos
- dusty grain
- cheap machine texture
- lo-fi surveillance / fax grit

Avoid when you need stable structure or clean visual hierarchy.

## Blue-noise dithering

Use when you want:

- even speckle
- modern procedural polish
- less visible tiling
- nice gradients without obvious grid
- shader-friendly texture sampling

## Temporal dithering

Use when you want:

- shimmer
- crawling old-display energy
- animated palette fake-outs
- flicker-based extra tone illusion

Avoid when the output needs to be calm, readable, or not headache-inducing.

## Quick choice table

```text
retro computer      → Bayer / Atkinson
portrait conversion → Floyd-Steinberg / Atkinson
fast shader effect  → Bayer / hash noise
modern speckle      → blue noise
old web GIF         → palette quantization + temporal crawl
screenprint mockup  → threshold + dot gain + limited palette
textile pattern     → ordered grid + weave warp
acid math art       → palette quantization + animated threshold maps
```
