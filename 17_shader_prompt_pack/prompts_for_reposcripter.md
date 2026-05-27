# Prompts For RepoScripter

## Easy mode

```text
Use the attached GitHub repos as visual and technical context. Create a single self-contained p5.js or HTML shader sketch that makes a colorful dither-based generative artwork. Use visible pixel/mark structure, limited palette behavior, and threshold logic. Keep it readable, fun, and simple. Include mouse interaction for dither size or threshold strength.
```

## Bayer dither shader

```text
Use the attached dither repo as context. Create a single self-contained shader artwork using ordered Bayer dithering. The final image should clearly show a repeating threshold-matrix texture, chunky value ramps, and limited palette color. Use an acidic pop palette with hot pink, cyan, acid yellow, toxic green, and deep violet ink. Include controls or comments for pixel size, contrast, palette selection, and threshold bias.
```

## Error diffusion visual simulation

```text
Use the attached dither repo as context. Create a p5.js sketch that generates a colorful source image and converts it into a Floyd-Steinberg or Atkinson-style dithered image on the CPU. The output should show wormy error-diffusion texture, not an ordered checkerboard. Add click-to-regenerate and save-image controls.
```

## Textile dither

```text
Use the attached dither and fabric/pattern repos as context. Create a procedural textile pattern where dithering becomes woven structure. Use ordered dither cells as warp/weft units, limited palette thread colors, slight weave distortion, and repeating tile logic. The output should be pattern-ready and visually clear, not random noise.
```

## Moire dither

```text
Use the attached dither, moire, and op-art repos as context. Create a shader sketch where two interference fields produce a moire threshold map, then convert the result into a dithered acidic color field. It should feel like ordered dithering, optical interference, and psychedelic poster logic collided in a tiny fluorescent laundromat.
```

## Screenprint dither

```text
Use the attached dither repo as context. Create a screenprint-friendly dither preview: limited ink colors only, no gradients, no alpha haze, no tiny fragile details. Simulate solid ink decisions, dot gain, shirt/background color, and an optional halftone-adjacent but still pixel/dither-based texture. Output should be suitable as a visual proof direction, not a production separation.
```
