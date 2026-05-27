// CPU-side dither utility functions for browser sketches and preprocessing.
// These functions expect flat RGBA pixel arrays or simple grayscale arrays.

export function luminance(r, g, b) {
  return 0.299 * r + 0.587 * g + 0.114 * b;
}

export const BAYER_2 = [
  [0, 2],
  [3, 1]
];

export const BAYER_4 = [
  [0, 8, 2, 10],
  [12, 4, 14, 6],
  [3, 11, 1, 9],
  [15, 7, 13, 5]
];

export function orderedDitherMono(imageData, width, height, matrix = BAYER_4) {
  const size = matrix.length;
  const denom = size * size;
  const out = new Uint8ClampedArray(imageData.length);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = 4 * (y * width + x);
      const v = luminance(imageData[i], imageData[i + 1], imageData[i + 2]) / 255;
      const threshold = (matrix[y % size][x % size] + 0.5) / denom;
      const q = v > threshold ? 255 : 0;
      out[i] = out[i + 1] = out[i + 2] = q;
      out[i + 3] = imageData[i + 3] ?? 255;
    }
  }
  return out;
}

export function floydSteinbergMono(imageData, width, height) {
  const gray = new Float32Array(width * height);
  const out = new Uint8ClampedArray(imageData.length);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = 4 * (y * width + x);
      gray[y * width + x] = luminance(imageData[i], imageData[i + 1], imageData[i + 2]);
    }
  }

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = y * width + x;
      const oldPixel = gray[i];
      const newPixel = oldPixel < 128 ? 0 : 255;
      const err = oldPixel - newPixel;
      gray[i] = newPixel;

      if (x + 1 < width) gray[i + 1] += err * 7 / 16;
      if (x - 1 >= 0 && y + 1 < height) gray[i + width - 1] += err * 3 / 16;
      if (y + 1 < height) gray[i + width] += err * 5 / 16;
      if (x + 1 < width && y + 1 < height) gray[i + width + 1] += err * 1 / 16;

      const pi = 4 * i;
      out[pi] = out[pi + 1] = out[pi + 2] = newPixel;
      out[pi + 3] = imageData[pi + 3] ?? 255;
    }
  }
  return out;
}
