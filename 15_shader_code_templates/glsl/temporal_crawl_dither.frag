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

    float crawlSpeed = 6.0;
    float crawlAmount = 0.18;
    vec2 cell = floor(fragCoord / 2.0);

    float frame = floor(u_time * crawlSpeed);
    float n1 = hash12(cell + frame);
    float n2 = hash12(cell * 1.7 + vec2(frame * 0.37, -frame * 0.21));
    float animatedThreshold = mix(n1, n2, 0.5);

    value += sin((fragCoord.y * 0.15) + u_time * 8.0) * 0.03;
    float ink = step(animatedThreshold + (0.5 - value) * crawlAmount, value);

    vec3 dark = vec3(0.0, 0.0, 0.03);
    vec3 light = vec3(1.0, 0.93, 0.72);
    vec3 chroma = vec3(1.0, 0.2 + value * 0.8, 0.9);

    vec3 outColor = mix(dark, light * chroma, ink);
    gl_FragColor = vec4(outColor, 1.0);
}
