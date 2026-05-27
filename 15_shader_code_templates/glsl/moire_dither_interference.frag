#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

float lumaPattern(vec2 p) {
    float a = sin(p.x * 28.0 + u_time * 0.7);
    float b = sin((p.x * 0.78 + p.y * 0.62) * 31.0 - u_time * 0.9);
    float c = sin(length(p - 0.5) * 90.0 - u_time * 1.3);
    return 0.5 + 0.5 * sin(a + b + c);
}

float bayer4(vec2 p) {
    vec2 q = mod(floor(p), 4.0);
    float index = q.x + q.y * 4.0;
    // A compact fake matrix for interference use. Good enough for pattern play.
    return fract(sin(index * 12.9898 + 78.233) * 43758.5453);
}

void main() {
    vec2 fragCoord = gl_FragCoord.xy;
    vec2 uv = fragCoord / u_resolution.xy;

    float field = lumaPattern(uv);
    float threshold = bayer4(fragCoord / 2.0);
    float ink = step(threshold, field);

    vec3 dark = vec3(0.02, 0.00, 0.08);
    vec3 hot = vec3(1.0, 0.05, 0.55);
    vec3 cyan = vec3(0.0, 0.95, 1.0);
    vec3 acid = vec3(1.0, 0.95, 0.05);

    vec3 color = mix(dark, mix(hot, cyan, uv.x), ink);
    color += acid * pow(field, 8.0) * 0.45;

    gl_FragColor = vec4(color, 1.0);
}
