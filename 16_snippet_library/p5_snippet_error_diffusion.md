# p5.js Error Diffusion Snippet

True Floyd-Steinberg dithering is easiest on CPU.

```js
function floydSteinbergGray(gray, width, height) {
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let i = y * width + x;
      let oldPixel = gray[i];
      let newPixel = oldPixel < 128 ? 0 : 255;
      let error = oldPixel - newPixel;
      gray[i] = newPixel;

      if (x + 1 < width) gray[i + 1] += error * 7 / 16;
      if (x - 1 >= 0 && y + 1 < height) gray[i + width - 1] += error * 3 / 16;
      if (y + 1 < height) gray[i + width] += error * 5 / 16;
      if (x + 1 < width && y + 1 < height) gray[i + width + 1] += error * 1 / 16;
    }
  }
  return gray;
}
```

## Variations

### Serpentine scan

Alternate left-to-right and right-to-left rows to reduce directional artifacts.

### Atkinson diffusion

Spread less error to fewer neighbors for an old-Mac illustration feel.

### Palette diffusion

Instead of black and white, find the nearest palette color and diffuse the RGB error.
