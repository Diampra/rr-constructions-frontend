import { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync, statSync } from "fs";
import { join, extname, basename, dirname } from "path";
import sharp from "sharp";

const PROJECT_ROOT = process.cwd();
const PUBLIC_IMAGES_DIR = join(PROJECT_ROOT, "rr-constructions-client", "public", "images");
const OUTPUT_DIR = join(PROJECT_ROOT, "rr-constructions-client", "public", "images", "optimized");

// Responsive breakpoints
const SIZES = [400, 800, 1200, 1600];
const QUALITY = 85;
const WEBP_QUALITY = 80;

const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp"];

function getImageFiles(dir: string): string[] {
  const files: string[] = [];
  const items = readdirSync(dir);

  for (const item of items) {
    const fullPath = join(dir, item);
    const stat = statSync(fullPath);

    if (stat.isDirectory()) {
      // Skip optimized folder
      if (item !== "optimized") {
        files.push(...getImageFiles(fullPath));
      }
    } else if (IMAGE_EXTENSIONS.includes(extname(item).toLowerCase())) {
      files.push(fullPath);
    }
  }

  return files;
}

function getRelativePath(filePath: string): string {
  return filePath.replace(PUBLIC_IMAGES_DIR + "/", "").replace(/\\/g, "/");
}

function ensureDir(dir: string) {
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }
}

async function optimizeImage(inputPath: string) {
  const relativePath = getRelativePath(inputPath);
  const name = basename(inputPath, extname(inputPath));
  const outputBaseDir = join(OUTPUT_DIR, dirname(relativePath));
  ensureDir(outputBaseDir);

  console.log(`\nOptimizing: ${relativePath}`);

  try {
    const originalBuffer = readFileSync(inputPath);
    const metadata = await sharp(inputPath).metadata();

    // Generate WebP versions at different sizes
    for (const width of SIZES) {
      if (width > (metadata.width || width)) continue;

      const webpPath = join(outputBaseDir, `${name}-${width}w.webp`);
      await sharp(inputPath)
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: WEBP_QUALITY })
        .toFile(webpPath);
      console.log(`  ✓ ${width}w WebP: ${(await sharp(webpPath).stats()).size / 1024} KB`);
    }

    // Generate optimized original format
    const ext = extname(inputPath).toLowerCase();
    let optimizedBuffer: Buffer;

    if (ext === ".png") {
      optimizedBuffer = await sharp(inputPath)
        .png({ quality: QUALITY, compressionLevel: 9 })
        .toBuffer();
    } else {
      optimizedBuffer = await sharp(inputPath)
        .jpeg({ quality: QUALITY, mozjpeg: true })
        .toBuffer();
    }

    const optimizedPath = join(outputBaseDir, `${name}-optimized${ext}`);
    writeFileSync(optimizedPath, optimizedBuffer);
    console.log(`  ✓ Optimized ${ext}: ${optimizedBuffer.length / 1024} KB`);

    // Generate LQIP (Low Quality Image Placeholder) - tiny blurred version
    const lqipPath = join(outputBaseDir, `${name}-lqip.webp`);
    await sharp(inputPath)
      .resize({ width: 20 })
      .blur(10)
      .webp({ quality: 20 })
      .toFile(lqipPath);
    const lqipBase64 = readFileSync(lqipPath).toString("base64");
    console.log(`  ✓ LQIP generated (base64 length: ${lqipBase64.length})`);

    return {
      original: relativePath,
      width: metadata.width,
      height: metadata.height,
      sizes: SIZES.filter(w => w <= (metadata.width || w)),
      lqip: `data:image/webp;base64,${lqipBase64}`,
    };
  } catch (error) {
    console.error(`  ✗ Failed: ${error}`);
    return null;
  }
}

async function generateManifest(results: Array<{ original: string; width: number; height: number; sizes: number[]; lqip: string } | null>) {
  const manifest = results
    .filter(Boolean)
    .reduce((acc, r) => {
      acc[r!.original] = {
        width: r!.width,
        height: r!.height,
        sizes: r!.sizes,
        lqip: r!.lqip,
        webp: r!.sizes.map(w => `/images/optimized/${r!.original.replace(/\.[^.]+$/, `-${w}w.webp`)}`),
        optimized: `/images/optimized/${r!.original.replace(/\.[^.]+$/, `-optimized${extname(r!.original)}`)}`,
      };
      return acc;
    }, {} as Record<string, any>);

  const manifestPath = join(OUTPUT_DIR, "manifest.json");
  writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  console.log(`\n✓ Manifest written to: ${manifestPath}`);
}

async function main() {
  console.log("=== Image Optimization Pipeline ===");
  console.log(`Input: ${PUBLIC_IMAGES_DIR}`);
  console.log(`Output: ${OUTPUT_DIR}`);

  const files = getImageFiles(PUBLIC_IMAGES_DIR);
  console.log(`\nFound ${files.length} images to optimize`);

  if (files.length === 0) {
    console.log("No images found. Make sure images exist in public/images/");
    return;
  }

  const results = await Promise.all(files.map(optimizeImage));
  await generateManifest(results);

  console.log("\n=== Done ===");
  console.log(`Optimized ${results.filter(Boolean).length} / ${files.length} images`);
}

main().catch(console.error);