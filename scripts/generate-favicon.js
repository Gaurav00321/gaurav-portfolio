const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const sizes = [
  { name: "favicon-16x16.png", size: 16 },
  { name: "apple-touch-icon.png", size: 180 },
];

async function generateFavicons() {
  const sourceImage = path.join(__dirname, "../public/Gaurav.png");
  const outputDir = path.join(__dirname, "../public");

  // Generate PNG favicons
  for (const { name, size } of sizes) {
    await sharp(sourceImage)
      .resize(size, size, {
        fit: "cover",
        position: "center",
      })
      .toFile(path.join(outputDir, name));
  }

  // Generate ICO file (16x16 and 32x32)
  await sharp(sourceImage)
    .resize(32, 32, {
      fit: "cover",
      position: "center",
    })
    .toFile(path.join(outputDir, "favicon-32x32.png"));

  await sharp(sourceImage)
    .resize(16, 16, {
      fit: "cover",
      position: "center",
    })
    .toFile(path.join(outputDir, "favicon-16x16.png"));

  console.log("Favicon files generated successfully!");
}

generateFavicons().catch(console.error);
