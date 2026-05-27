# Shader Output Gallery Notes

Use this file to document real outputs from shader experiments.

For each output, record:

- file name
- shader template used
- algorithm family
- palette
- knobs/settings
- what worked
- what failed
- whether it drifted into noise, glitch, halftone, or generic pixel art

## Example entry format

```text
Title: Acid Bayer Bloom 01
Template: palette_quantized_bayer.frag
Algorithm: 4x4 Bayer ordered dithering
Palette: acid pop
Settings: pixelSize 2, contrast 1.35, temporal 0
Worked: crisp grid texture, strong palette jumps, readable radial value
Failed: cyan and yellow too close in midtones
Repair: increase deep violet use in shadows
```

## Good output signs

- visible dither logic
- clear palette scarcity
- crunchy value ramps
- not too smooth
- not random dust
- not generic glitch
- still compositionally readable
