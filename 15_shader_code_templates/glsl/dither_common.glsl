#ifndef DITHER_COMMON_GLSL
#define DITHER_COMMON_GLSL

// Common GLSL helpers for dither shaders.
// Designed for easy copy/paste into ShaderToy, WebGL, p5.js WEBGL, or custom fragment pipelines.

float luma(vec3 color) {
    return dot(color, vec3(0.299, 0.587, 0.114));
}

float hash12(vec2 p) {
    vec3 p3 = fract(vec3(p.xyx) * 0.1031);
    p3 += dot(p3, p3.yzx + 33.33);
    return fract((p3.x + p3.y) * p3.z);
}

vec2 pixelateUV(vec2 uv, vec2 resolution, float pixelSize) {
    vec2 grid = resolution / max(pixelSize, 1.0);
    return (floor(uv * grid) + 0.5) / grid;
}

float bayer2(vec2 p) {
    vec2 q = mod(floor(p), 2.0);
    if (q.x < 1.0 && q.y < 1.0) return 0.0 / 4.0;
    if (q.x >= 1.0 && q.y < 1.0) return 2.0 / 4.0;
    if (q.x < 1.0 && q.y >= 1.0) return 3.0 / 4.0;
    return 1.0 / 4.0;
}

float bayer4(vec2 p) {
    vec2 q = mod(floor(p), 4.0);
    float x = q.x;
    float y = q.y;

    float index = 0.0;
    if (y < 1.0) {
        if (x < 1.0) index = 0.0; else if (x < 2.0) index = 8.0; else if (x < 3.0) index = 2.0; else index = 10.0;
    } else if (y < 2.0) {
        if (x < 1.0) index = 12.0; else if (x < 2.0) index = 4.0; else if (x < 3.0) index = 14.0; else index = 6.0;
    } else if (y < 3.0) {
        if (x < 1.0) index = 3.0; else if (x < 2.0) index = 11.0; else if (x < 3.0) index = 1.0; else index = 9.0;
    } else {
        if (x < 1.0) index = 15.0; else if (x < 2.0) index = 7.0; else if (x < 3.0) index = 13.0; else index = 5.0;
    }
    return (index + 0.5) / 16.0;
}

float bayer8(vec2 p) {
    // Compact recursive approximation: combine three Bayer2 layers.
    vec2 q = floor(p);
    float v = 0.0;
    float scale = 1.0;
    for (int i = 0; i < 3; i++) {
        v += bayer2(q) * scale;
        q = floor(q / 2.0);
        scale *= 4.0;
    }
    return fract(v / 64.0);
}

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

vec3 duotone(float value, vec3 darkColor, vec3 lightColor, float threshold) {
    return mix(darkColor, lightColor, step(threshold, value));
}

#endif
