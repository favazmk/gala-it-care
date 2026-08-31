const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const { globSync } = require('glob');

const imagesDir = path.join(process.cwd(), 'public', 'images');

async function optimizeImages() {
  console.log('Starting image optimization...');
  
  // Find all jpg, jpeg, png in the images directory
  const files = globSync('**/*.{jpg,jpeg,png}', { cwd: imagesDir, absolute: true });
  
  if (files.length === 0) {
    console.log('No images found to optimize.');
    return;
  }

  console.log(`Found ${files.length} images to optimize.`);

  let totalSavedBytes = 0;

  for (const file of files) {
    const ext = path.extname(file);
    const basename = path.basename(file, ext);
    const dir = path.dirname(file);
    const webpPath = path.join(dir, `${basename}.webp`);

    try {
      const originalSize = fs.statSync(file).size;

      // Convert to webp
      await sharp(file)
        .webp({ quality: 80, effort: 6 }) // High compression effort
        .toFile(webpPath);

      const newSize = fs.statSync(webpPath).size;
      const saved = originalSize - newSize;
      
      if (saved > 0) {
        totalSavedBytes += saved;
        console.log(`✅ Converted ${basename}${ext} -> ${basename}.webp (Saved ${(saved / 1024).toFixed(2)} KB)`);
        // Delete original file to save space and ensure we only use webp
        fs.unlinkSync(file);
      } else {
        // If webp is somehow larger, we still use webp for consistency, or we could keep the original.
        // Let's just use webp anyway since the user requested to convert *every* image to webp.
        console.log(`✅ Converted ${basename}${ext} -> ${basename}.webp (No size savings)`);
        fs.unlinkSync(file);
      }

    } catch (err) {
      console.error(`❌ Error converting ${file}:`, err.message);
    }
  }

  console.log(`\n🎉 Optimization complete! Total saved: ${(totalSavedBytes / 1024 / 1024).toFixed(2)} MB`);
}

optimizeImages();
