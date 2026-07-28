const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const sourceImage = path.join(root, "public/Gaurav.png");

const outputs = [
  { file: "public/favicon-16x16.png", size: 16 },
  { file: "public/favicon-32x32.png", size: 32 },
  { file: "public/apple-touch-icon.png", size: 180 },
  { file: "app/icon.png", size: 32 },
  { file: "app/apple-icon.png", size: 180 },
];

async function generateFavicons() {
  if (!fs.existsSync(sourceImage)) {
    throw new Error(`Source image not found: ${sourceImage}`);
  }

  for (const { file, size } of outputs) {
    const outPath = path.join(root, file);
    fs.mkdirSync(path.dirname(outPath), { recursive: true });

    const pipeline = sharp(sourceImage).resize(size, size, {
      fit: "cover",
      position: "centre",
    });

    await pipeline.png().toFile(outPath);
  }

  console.log("Favicon files generated from public/Gaurav.png");
}

generateFavicons().catch((error) => {
  console.error(error);
  process.exit(1);
});
