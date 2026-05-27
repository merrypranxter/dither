# GLSL Hash Noise Snippets

Hash noise is useful for cheap stochastic dithering.

It is not true blue noise, but it is very portable.

## Basic 2D hash

```glsl
float hash12(vec2 p) {
    vec3 p3 = fract(vec3(p.xyx) * 0.1031);
    p3 += dot(p3, p3.yzx + 33.33);
    return fract((p3.x + p3.y) * p3.z);
}
```

## Screen-space random dither

```glsl
float n = hash12(floor(gl_FragCoord.xy));
float ink = step(n, value);
```

## Coarser cell-based random dither

```glsl
float cellSize = 3.0;
float n = hash12(floor(gl_FragCoord.xy / cellSize));
float ink = step(n, value);
```

## Animated random dither

```glsl
float frame = floor(u_time * 12.0);
float n = hash12(floor(gl_FragCoord.xy / 2.0) + frame);
float ink = step(n, value);
```

Use animation carefully. Too much frame noise becomes TV static soup.
