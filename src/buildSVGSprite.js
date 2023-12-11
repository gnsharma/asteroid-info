import { promises as fsPromises, readdirSync, statSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Get the directory of the current ESM module
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Directory paths
const sourceDir = path.join(__dirname, "assets/icons");
const outputDir = path.join(__dirname, ".");

async function createSvgSprite() {
  try {
    let svgSprite = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg">
  <defs>\n`;

    async function processDirectory(directory) {
      const files = readdirSync(directory);

      for (const filename of files) {
        const filepath = path.join(directory, filename);
        const fileStat = statSync(filepath);

        if (fileStat.isDirectory()) {
          // If it's a directory, recursively process it
          await processDirectory(filepath);
        } else if (path.extname(filename) === ".svg") {
          // If it's an SVG file, include its content in the sprite
          const svgContent = await fsPromises.readFile(filepath, "utf8");

          // Extract the content of the <svg> tag within the SVG file
          const svgMatch = svgContent.match(/<svg[^>]*>([\s\S]*)<\/svg>/i);
          if (svgMatch) {
            const innerSvgContent = svgMatch[1].trim();

            // Extract the attributes from the outer <svg> tag
            const svgAttributes = svgContent.match(/<svg ([^>]*)>/i);
            const attributesStr = svgAttributes ? svgAttributes[1] : "";

            // Include the inner content within the <symbol> tag with outer attributes
            svgSprite += `    <symbol id="${filename.replace(
              ".svg",
              ""
            )}" ${attributesStr}>
      ${innerSvgContent}
    </symbol>\n\n`;
          }
        }
      }
    }

    // Start processing from the source directory
    await processDirectory(sourceDir);

    svgSprite += "\n  </defs>\n</svg>";

    // Write the sprite file to the output directory
    const spriteFilePath = path.join(outputDir, "sprite.svg");
    await fsPromises.writeFile(spriteFilePath, svgSprite);

    console.log("SVG sprite created successfully.");
  } catch (error) {
    console.error(error);
  }
}

createSvgSprite();
