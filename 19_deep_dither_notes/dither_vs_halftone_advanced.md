# Dither Vs Halftone: Advanced Distinction

Dither and halftone both create apparent tone from marks, but the underlying logic is different.

## Halftone logic

Halftone usually varies dot size, dot angle, or dot frequency to reproduce tone in print.

It belongs strongly to printing, newspapers, comics, screenprint, and CMYK reproduction.

## Dither logic

Dither usually works with fixed-size digital units or a limited palette.

It belongs strongly to computer graphics, palette reduction, display systems, and quantization.

## Visual clues

Halftone often shows:

- round dots
- angled screens
- rosette patterns
- CMYK separations
- print registration issues

Dither often shows:

- pixels
- square cells
- ordered matrices
- wormy diffusion
- indexed color transitions
- digital threshold decisions

## Hybrid territory

Some styles intentionally combine both.

Examples:

- pixel halftone
- newspaper GIF crust
- risograph dither
- screenprint Bayer texture
- manga screentone plus palette quantization

## Prompt guardrail

If you want dither, say:

```text
fixed-size pixel/mark dithering, ordered or error-diffusion texture, limited palette quantization
```

If you want halftone, say:

```text
print halftone dots, screen angle, rosette, CMYK dot behavior
```

If you want both, explicitly say which part does what.
