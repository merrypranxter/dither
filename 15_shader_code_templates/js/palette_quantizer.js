// Small palette quantization helpers.
// Useful before dithering or inside CPU image preprocessing pipelines.

export function distanceSq(a, b) {
  const dr = a[0] - b[0];
  const dg = a[1] - b[1];
  const db = a[2] - b[2];
  return dr * dr + dg * dg + db * db;
}

export function nearestColor(rgb, palette) {
  let best = palette[0];
  let bestD = Infinity;
  for (const color of palette) {
    const d = distanceSq(rgb, color);
    if (d < bestD) {
      bestD = d;
      best = color;
    }
  }
  return best;
}

export function quantizeImageData(imageData, palette) {
  const out = new Uint8ClampedArray(imageData.length);
  for (let i = 0; i < imageData.length; i += 4) {
    const c = nearestColor([imageData[i], imageData[i + 1], imageData[i + 2]], palette);
    out[i] = c[0];
    out[i + 1] = c[1];
    out[i + 2] = c[2];
    out[i + 3] = imageData[i + 3] ?? 255;
  }
  return out;
}

export const PALETTES = {
  mono: [[0, 0, 0], [255, 255, 255]],
  gameboy: [[15, 56, 15], [48, 98, 48], [139, 172, 15], [155, 188, 15]],
  acidPop: [[6, 2, 24], [255, 28, 130], [0, 218, 255], [255, 241, 45], [72, 255, 112]],
  cgaCandy: [[0, 0, 0], [0, 255, 255], [255, 0, 255], [255, 255, 255]],
};
