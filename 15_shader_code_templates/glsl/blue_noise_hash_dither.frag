#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;
uniform sampler2D u_tex0;

float hash12(vec2 p) {
    vec3 p3 = fract(vec3(p.xyx) * 0.1031);
    p3 += dot(p3, p3.yzx + 33.33);
    return fract((p3.x + p3.y) * p3.z);
}

float luma(vec3 color) {
    return dot(color, vec3(0.299, 0.587, 0.114));
}

void main() {
    vec2 fragCoord = gl_FragCoord.xy;
    vec2 uv = fragCoord / u_resolution.xy;

    vec3 src = texture2D(u_tex0, uv).rgb;
    float value = luma(src);

    // This is not true blue noise, but a cheap hash-noise approximation.
    // For true blue-noise dithering, sample a blue-noise texture instead.
    float n = hash12(floor(fragCoord));
    float dithered = step(n, value);

    vec3 dark = vec3(0.02, 0.015, 0.03);
    vec3 light = vec3(0.92, 0.96, 1.0);

    gl_FragColor = vec4(mix(dark, light, dithered), 1.0);
}
