#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;
uniform sampler2D u_tex0;

float bayer2(vec2 p) {
    vec2 q = mod(floor(p), 2.0);
    if (q.x < 1.0 && q.y < 1.0) return 0.0 / 4.0;
    if (q.x >= 1.0 && q.y < 1.0) return 2.0 / 4.0;
    if (q.x < 1.0 && q.y >= 1.0) return 3.0 / 4.0;
    return 1.0 / 4.0;
}

void main() {
    vec2 fragCoord = gl_FragCoord.xy;
    vec2 uv = fragCoord / u_resolution.xy;
    vec3 src = texture2D(u_tex0, uv).rgb;

    float threshold = bayer2(fragCoord / 2.0);
    vec3 quant = floor(src * 5.0 + threshold) / 5.0;

    // RGB phosphor stripe mask.
    float stripe = mod(floor(fragCoord.x), 3.0);
    vec3 mask = vec3(0.72);
    if (stripe < 1.0) mask.r = 1.15;
    else if (stripe < 2.0) mask.g = 1.15;
    else mask.b = 1.15;

    // Scanline dimming.
    float scan = 0.85 + 0.15 * sin(fragCoord.y * 3.14159);

    // Slight curvature vignette.
    vec2 centered = uv * 2.0 - 1.0;
    float vignette = smoothstep(1.25, 0.25, dot(centered, centered));

    gl_FragColor = vec4(quant * mask * scan * vignette, 1.0);
}
