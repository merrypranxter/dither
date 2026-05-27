# GLSL Threshold Snippets

## Basic monochrome threshold

```glsl
float value = dot(color.rgb, vec3(0.299, 0.587, 0.114));
float ink = step(threshold, value);
vec3 outColor = mix(darkColor, lightColor, ink);
```

## Bias threshold

```glsl
float ink = step(threshold + thresholdBias, value);
```

## Contrast before dithering

```glsl
value = clamp((value - 0.5) * contrastBoost + 0.5, 0.0, 1.0);
```

## Dot gain / ink spread

```glsl
value = clamp(value - dotGain, 0.0, 1.0);
```

Positive `dotGain` makes the image darker and more ink-heavy.

## Animated threshold crawl

```glsl
float animated = fract(threshold + sin(u_time + gl_FragCoord.y * 0.2) * 0.1);
float ink = step(animated, value);
```

This creates old-GIF shimmer if used gently and full cursed-ant-farm mode if abused.
