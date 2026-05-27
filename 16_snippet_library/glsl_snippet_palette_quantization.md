# GLSL Palette Quantization Snippets

## Nearest of four colors

```glsl
vec3 nearestPalette4(vec3 color, vec3 a, vec3 b, vec3 c, vec3 d) {
    float da = distance(color, a);
    float db = distance(color, b);
    float dc = distance(color, c);
    float dd = distance(color, d);
    vec3 result = a;
    float best = da;
    if (db < best) { best = db; result = b; }
    if (dc < best) { best = dc; result = c; }
    if (dd < best) { result = d; }
    return result;
}
```

## Quantize one channel to levels

```glsl
float quantize(float v, float levels) {
    return floor(v * (levels - 1.0) + 0.5) / (levels - 1.0);
}
```

## Dithered quantization

```glsl
float ditheredQuantize(float v, float levels, float threshold) {
    return floor(v * (levels - 1.0) + threshold) / (levels - 1.0);
}
```

## Acid-pop ramp selection

```glsl
vec3 acidRamp(float v) {
    if (v < 0.2) return vec3(0.03, 0.01, 0.12);
    if (v < 0.4) return vec3(1.00, 0.05, 0.55);
    if (v < 0.6) return vec3(0.00, 0.90, 1.00);
    if (v < 0.8) return vec3(1.00, 0.95, 0.05);
    return vec3(0.25, 1.00, 0.45);
}
```
