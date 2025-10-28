
/**
 * A Card of incrementally bigger lines horizontally and vertically (1px, 2px, 3px, ...) to check the actual resolution of a screen
 * @param {number} w The width of the testcard in px (also defines the width of the lines)
 * @param {number} h The height of the testcard in px (also defines the height of the lines) 
 * @param {number} sections The number of sections of lines. Also the thickness of the thickest lines (1...sections)
 * @returns The generated svg code
 */
export function pixeltest(w, h, sections) {

    let out = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg version="1.1" height="${h}px" width="${w}px" viewBox="0 0 ${w} ${h}" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="${w}" height="${h}" fill="white"></rect>`;

    const pixPerSecX = w / sections;
    const overlapMin = Math.floor(h / 3);
    const overlapMax = Math.floor(h / 2);

    for (let s = 1; s <= sections; s++) {
        const minX = Math.floor(pixPerSecX * (s - 1));
        const maxX = Math.floor(pixPerSecX * s);
        for (let x = minX; x < maxX; x += s * 2) {
            out += `\n<rect x="${x}" y="0" width="${s}" height="${overlapMax}" fill="black"></rect>`
        }
    }

    for (let s = 1; s <= sections; s++) {
        const minX = Math.floor(pixPerSecX * (s - 1));
        const maxX = Math.floor(pixPerSecX * s);
        for (let y = overlapMin; y < overlapMax; y += s * 2) {
            out += `\n<rect x="${minX}" y="${y}" width="${maxX - minX}" height="${s}" fill="black"></rect>`
        }
    }

    const pixPerSecY = (h - overlapMax) / sections;
    for (let s = 1; s <= sections; s++) {
        const minY = Math.floor(pixPerSecY * (s - 1)) + overlapMax;
        const maxY = Math.floor(pixPerSecY * s) + overlapMax;
        for (let y = minY; y < maxY; y += s * 2) {
            out += `\n<rect x="0" y="${y}" width="${w}" height="${s}" fill="black"></rect>`
        }
    }

    out += `</svg>`;

    return out;
}