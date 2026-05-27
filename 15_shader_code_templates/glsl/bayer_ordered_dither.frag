#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;
uniform sampler2D u_tex0;

float luma(vec3 color) {
    return dot(color, vec3(0.299, 0.587, 0.114));
}

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

void main() {
    vec2 fragCoord = gl_FragCoord.xy;
    vec2 uv = fragCoord / u_resolution.xy;

    vec3 src = texture2D(u_tex0, uv).rgb;
    float value = luma(src);

    float pixelSize = 2.0;
    vec2 ditherCoord = floor(fragCoord / pixelSize);
    float threshold = bayer4(ditherCoord);

    float ink = step(threshold, value);
    vec3 darkColor = vec3(0.02, 0.02, 0.025);
    vec3 lightColor = vec3(0.95, 0.92, 0.82);

    gl_FragColor = vec4(mix(darkColor, lightColor, ink), 1.0);
}
