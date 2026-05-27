# DITHER EXPANSION PACK 01 — Shader Goblin Add-On

This expansion pack is meant to be unzipped into the root of the existing `dither` repository.

It adds a heavier practical layer: shader templates, p5.js examples, reusable GLSL snippets, RepoScripter prompts, UI knob schemas, textile/screenprint translation notes, and deeper conceptual notes about dithering as a style system.

The starter repo gave the dither goblin a skeleton. This pack gives it teeth, knobs, wires, flickering CRT eyelids, and several forms of legally questionable pixel sorcery.

---

## What this pack adds

- GLSL fragment shader templates.
- Reusable GLSL snippet files.
- p5.js standalone browser examples.
- JavaScript utility files for CPU-side dithering and palette reduction.
- Shader prompt packs for RepoScripter / Copilot / Gemini / Claude-style code agents.
- Machine-readable JSON for shader templates and UI knobs.
- Advanced notes on quantization, temporal crawl, textiles, screenprint, and style mixing.

---

## How to use it

Unzip this pack into the root of the `dither` repo.

It should add folders and files such as:

```text
15_shader_code_templates/
16_snippet_library/
17_shader_prompt_pack/
18_app_integration/
19_deep_dither_notes/
12_structured_data/shader_templates_index.json
```

Existing files should not be overwritten unless you intentionally merge by hand.

---

## Best first places to look

1. `15_shader_code_templates/README.md`
2. `15_shader_code_templates/glsl/dither_common.glsl`
3. `15_shader_code_templates/p5/p5_ordered_bayer_lab.html`
4. `17_shader_prompt_pack/prompts_for_reposcripter.md`
5. `18_app_integration/ui_knob_schema.md`

---

## Core design principle

A dither shader should not merely add noise.

A good dither shader should expose the moment where continuous smoothness gets translated into an available mark system:

- pixel grids
- palette scarcity
- threshold rituals
- density bargains
- quantization scars
- frame-to-frame shimmer
- patterned compromise

Dither is what happens when reality runs out of colors but refuses to shut up.
