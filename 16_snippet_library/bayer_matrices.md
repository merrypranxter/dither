# Bayer Matrices

Bayer matrices are ordered threshold maps.

They create mechanical, tiled, stable dither patterns.

## 2x2

```text
0 2
3 1
```

Normalized threshold formula:

```text
(matrix_value + 0.5) / 4
```

## 4x4

```text
 0  8  2 10
12  4 14  6
 3 11  1  9
15  7 13  5
```

Normalized threshold formula:

```text
(matrix_value + 0.5) / 16
```

## 8x8

```text
 0 32  8 40  2 34 10 42
48 16 56 24 50 18 58 26
12 44  4 36 14 46  6 38
60 28 52 20 62 30 54 22
 3 35 11 43  1 33  9 41
51 19 59 27 49 17 57 25
15 47  7 39 13 45  5 37
63 31 55 23 61 29 53 21
```

Normalized threshold formula:

```text
(matrix_value + 0.5) / 64
```

## Visual character

2x2 is bold and chunky.
4x4 is classic.
8x8 is smoother but still visibly ordered.

Use larger Bayer matrices when you need more tone levels without losing the explicit dither-grid personality.
