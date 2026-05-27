#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;
uniform sampler2D u_tex0;

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

vec3 paletteColor(float i) {
    // Acid pop palette. Swap this palette with repo palette presets.
    if (i < 0.5) return vec3(0.05, 0.02, 0.12); // deep ink violet
    if (i < 1.5) return vec3(1.00, 0.08, 0.55); // hot pink
    if (i < 2.5) return vec3(0.00, 0.85, 1.00); // electric cyan
    if (i < 3.5) return vec3(1.00, 0.95, 0.15); // acid yellow
    return vec3(0.20, 1.00, 0.45);              // toxic green
}

vec3 quantizedPalette(vec3 color, float threshold) {
    float v = dot(color, vec3(0.299, 0.587, 0.114));
    float levels = 5.0;
    float scaled = clamp(v * (levels - 1.0) + threshold - 0.5, 0.0, levels - 1.0);
    float index = floor(scaled + 0.5);
    return paletteColor(index);
}

void main() {
    vec2 fragCoord = gl_FragCoord.xy;
    vec2 uv = fragCoord / u_resolution.xy;
    vec3 src = texture2D(u_tex0, uv).rgb;

    float pixelSize = 2.0;
    float threshold = bayer4(floor(fragCoord / pixelSize));

    // Push color before quantization so the palette bites harder.
    src = pow(src, vec3(0.85));
    vec3 outColor = quantizedPalette(src, threshold);

    gl_FragColor = vec4(outColor, 1.0);
}
