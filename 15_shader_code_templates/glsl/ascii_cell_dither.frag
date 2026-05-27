#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform sampler2D u_tex0;

float luma(vec3 color) {
    return dot(color, vec3(0.299, 0.587, 0.114));
}

float glyphMask(vec2 local, float value) {
    // Fake ASCII-ish cell masks using geometric primitives.
    // Replace with an actual glyph atlas for real ASCII rendering.
    vec2 p = local * 2.0 - 1.0;
    float d = 1.0;

    if (value < 0.2) {
        d = step(length(p), 0.25);
    } else if (value < 0.4) {
        d = step(abs(p.x), 0.15) * step(abs(p.y), 0.8);
    } else if (value < 0.6) {
        d = step(abs(p.x + p.y), 0.18);
    } else if (value < 0.8) {
        d = max(step(abs(p.x), 0.16), step(abs(p.y), 0.16));
    } else {
        d = step(max(abs(p.x), abs(p.y)), 0.72);
    }

    return d;
}

void main() {
    vec2 fragCoord = gl_FragCoord.xy;
    vec2 uv = fragCoord / u_resolution.xy;

    float cellSize = 10.0;
    vec2 cell = floor(fragCoord / cellSize);
    vec2 local = fract(fragCoord / cellSize);
    vec2 sampleUV = (cell * cellSize + cellSize * 0.5) / u_resolution.xy;

    vec3 src = texture2D(u_tex0, sampleUV).rgb;
    float value = luma(src);
    float mask = glyphMask(local, value);

    vec3 ink = vec3(0.02, 0.02, 0.025);
    vec3 paper = vec3(0.92, 0.88, 0.74);
    gl_FragColor = vec4(mix(paper, ink, mask), 1.0);
}
