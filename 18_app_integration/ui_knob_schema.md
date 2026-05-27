# UI Knob Schema

A dither generator should expose simple artist-facing knobs while keeping technical parameters available under the hood.

## Recommended artist-facing controls

```text
Crunch        → pixel size / grid scale
Ink Weight    → threshold bias / dot gain
Palette       → selected color set
Pattern       → Bayer / hash / blue-noise / moire
Crawl         → temporal animation amount
Glow/Display  → CRT or media simulation amount
Weave         → textile warp amount
```

## Technical controls

```text
pixelSize
matrixSize
thresholdBias
contrastBoost
paletteIndex
temporalAmount
noiseSeed
edgePreserve
dotGain
scanlineInfluence
weaveWarp
channelOffset
```

## UX warning

Do not expose forty sliders by default.

Make a fun mode first. Put the lab-coat goblin sliders under an Advanced drawer.
