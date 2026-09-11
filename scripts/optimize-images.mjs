/**
 * One-time conversion for oversized raster assets.
 * Re-run with: npx -y -p sharp node scripts/optimize-images.mjs
 */
import { readFile, unlink } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const assetsDir = fileURLToPath(new URL("../public/assets/", import.meta.url));

function file(name) {
  return path.join(assetsDir, name);
}

async function pipeline(name) {
  return sharp(await readFile(file(name)));
}

async function writePhoto(name, { width, avif = 48, webp = 72, jpeg = 78 }) {
  const image = (await pipeline(name)).resize({
    width,
    withoutEnlargement: true,
  });
  const base = name.replace(/\.[^.]+$/, "");
  await Promise.all([
    image.clone().avif({ quality: avif, effort: 6 }).toFile(file(`${base}.avif`)),
    image.clone().webp({ quality: webp }).toFile(file(`${base}.webp`)),
    image.clone().jpeg({ quality: jpeg, mozjpeg: true }).toFile(file(`${base}.jpg`)),
  ]);
}

async function writeLogo(name, { width, height }) {
  const image = (await pipeline(name)).resize({
    width,
    height,
    fit: "inside",
    withoutEnlargement: true,
  });
  const base = name.replace(/\.[^.]+$/, "");
  await Promise.all([
    image.clone().avif({ quality: 55, effort: 6 }).toFile(file(`${base}.avif`)),
    image.clone().webp({ quality: 88, alphaQuality: 90 }).toFile(file(`${base}.webp`)),
    image.clone().png({ compressionLevel: 9 }).toFile(file(`${base}.png`)),
  ]);
}

const circle = await pipeline("logo-circle.png");
await Promise.all([
  circle.clone().resize(32, 32).png({ compressionLevel: 9 }).toFile(file("favicon-32.png")),
  circle.clone().resize(48, 48).png({ compressionLevel: 9 }).toFile(file("favicon-48.png")),
  circle.clone().resize(180, 180).png({ compressionLevel: 9 }).toFile(file("apple-touch-icon.png")),
]);

await writePhoto("stepping-stones.png", { width: 1920 });
await writeLogo("logo-horizontal.png", { width: 660 });
await writeLogo("logo-mark.png", { width: 208 });
await writeLogo("logo-wordmark.png", { width: 428 });
await writeLogo("leaf-divider.png", { width: 84, height: 40 });
await writePhoto("office-entrance.jpg", { width: 800, avif: 45, webp: 70, jpeg: 76 });

await unlink(file("stepping-stones.png"));
await unlink(file("logo-circle.png"));

console.log("Optimized images written to public/assets");
