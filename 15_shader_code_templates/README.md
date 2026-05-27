# Shader Code Templates

This folder contains practical dither code templates.

They are not meant to be a single locked framework. They are ingredient spells.

Use them in:

- ShaderToy-style fragment shaders
- WebGL post-processing
- p5.js WEBGL sketches
- Three.js custom materials
- Hydra-ish live visuals
- RepoScripter shader generation prompts
- generative textile experiments

## Folder map

```text
glsl/  reusable and standalone fragment shader templates
p5/    browser-openable p5.js examples
js/    CPU-side JavaScript utilities
```

## Design note

True error diffusion is usually not a simple fragment shader because it depends on previous quantization decisions. In real-time shaders, approximate it with:

- screen-space ordered thresholds
- animated threshold maps
- hash noise
- blue-noise textures
- multipass buffers
- feedback passes

For exact Floyd-Steinberg, use CPU code, compute shaders, WebGPU, or a multipass pipeline.
