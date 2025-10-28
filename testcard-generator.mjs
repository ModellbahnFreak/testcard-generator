import { pixeltest } from "./pixeltest.mjs"
import * as fs from "fs";
import * as cp from "child_process";
let svg = "";

// Chose pattern to generate and set parameters here:
svg = pixeltest(1920, 1200, 10)

fs.writeFile("./testcard.svg", svg, () => { });
let path = "inkscape";
if (process.platform == "win32") {
    path = `C:\\Program Files\\Inkscape\\bin\\inkscape.exe`;
}
cp.execFile(path, [`--export-type=png`, `--export-area-page`, "testcard.svg"], (err, stdout, stderr) => {
    console.log(err, stdout, stderr);
})
