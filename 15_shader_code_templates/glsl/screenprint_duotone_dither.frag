#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform sampler2D u_tex0;

float luma(vec3 color) {
    return dot(color, vec3(0.299, 0.587, 0.114));
}

float bayer4(vec2 p) {
    vec2 q = mod(floor(p), 4.0);
    float x = q.x;
    float y = q.y;
    float index = 0.0;
    if (y < 1.0) { if (x < 1.0) index = 0.0; else if (x < 2.0) index = 8.0; else if (x < 3.0) index = 2.0; else index = 10.0; }
    else if (y < 2.0) { if (x < 1.0) index = 12.0; else if (x < 2.0) index = 4.0; else if (x < 3.0) index = 14.0; else index = 6.0; }
    else if (y < 3.0) { if (x < 1.0) index = 3.0; else if (x < 2.0) index = 11.0; else if (x < 3.0) index = 1.0; else index = 9.0; }
    else { if (x < 1.0) index = 15.0; else if (x < 2.0) index = 7.0; else if (x < 3.0) index = 13.0; else index = 5.0; }
    return (index + 0.5) / 16.0;
}

void main() {
    vec2 fragCoord = gl_FragCoord.xy;
    vec2 uv = fragCoord / u_resolution.xy;
    vec3 src = texture2D(u_tex0, uv).rgb;
    float value = luma(src);

    // Simulate ink gain by biasing midtones darker.
    float dotGain = 0.08;
    value = clamp(value - dotGain, 0.0, 1.0);

    float threshold = bayer4(fragCoord / 3.0);
    float ink = step(threshold, value);

    // Screenprint-style duotone: shirt color + ink color.
    vec3 shirt = vec3(0.10, 0.14, 0.20); // dark navy shirt
    vec3 inkColor = vec3(0.95, 0.82, 0.42); // Vegas-gold-ish ink

    gl_FragColor = vec4(mix(shirt, inkColor, ink), 1.0);
}
