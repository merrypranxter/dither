# ShaderKit Compatibility Notes

This repo uses GLSL snippets that are mostly portable, but shader environments differ in annoying little goblin ways.

## Common uniforms

Many examples assume uniforms like:

```glsl
uniform vec2 u_resolution;
uniform float u_time;
uniform sampler2D u_tex0;
```

ShaderToy usually expects:

```glsl
uniform vec3 iResolution;
uniform float iTime;
uniform sampler2D iChannel0;
```

When adapting templates, map the names first.

## Fragment coordinate differences

Some environments provide `gl_FragCoord.xy` directly.
Others provide varying UVs.

Safe pattern:

```glsl
vec2 fragCoord = gl_FragCoord.xy;
vec2 uv = fragCoord / u_resolution.xy;
```

## Texture coordinate flip

Some renderers flip textures vertically.

If output is upside down:

```glsl
uv.y = 1.0 - uv.y;
```

## Precision qualifiers

WebGL often needs:

```glsl
precision mediump float;
```

Desktop GLSL may not.

## Integer indexing problems

Older GLSL versions can be fussy about arrays and dynamic indexing.

When in doubt, avoid large constant arrays and use math-based Bayer functions instead of array lookups.

## Dither-specific portability tip

The safest ordered dither implementation is a tiny math function that returns a Bayer threshold from pixel coordinates.

The safest noise dither implementation is a deterministic hash function based on screen-space pixel coordinates.

Avoid relying on external blue-noise textures unless the host definitely supports texture inputs.
