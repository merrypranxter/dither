# Export Pipeline Notes

Dither output can be exported differently depending on use.

## For shader art

Export:

- PNG stills
- animated GIFs
- MP4 loops
- palette metadata
- seed values
- slider settings

## For textiles

Export:

- seamless PNG tile
- indexed palette file
- repeat dimensions
- optional SVG grid/stitch map
- JSON recipe describing dither matrix and palette

## For screenprint

Export:

- one file per ink color
- black-on-white separations
- minimum dot/pixel size notes
- dot gain/choke warnings
- no transparent fuzzy antialias haze

## For AI prompt systems

Export:

- final prompt text
- style modules used
- algorithm name
- palette name
- anti-drift reminders

## Important warning

A pretty dither preview is not automatically production-ready for print.

For screenprint, check:

- minimum detail size
- mesh count
- ink spread
- garment color
- whether the smallest pixels will hold
