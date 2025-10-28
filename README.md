# Testcard generator
## Usage
Make sure you have inkscape and nodejs installed

Chose the testcard to generate and the required parameters in `testcard-generator.mjs`

Run `node testcard-generator.mjs`

## Available testcards
### pixeltest
A Card of incrementally bigger lines horizontally and vertically (1px, 2px, 3px, ...) to check the actual resolution of a screen
#### Parameters
- `w` The width of the testcard in px (also defines the width of the lines)
- `h` The height of the testcard in px (also defines the height of the lines) 
- `sections` The number of sections of lines. Also the thickness of the thickest lines (1...sections)