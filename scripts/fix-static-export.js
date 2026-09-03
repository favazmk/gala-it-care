const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '../out');

if (!fs.existsSync(outDir)) {
  console.error('out/ directory not found. Please run next build first.');
  process.exit(1);
}

function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  
  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else {
      if (fullPath.endsWith('.html') || fullPath.endsWith('.js') || fullPath.endsWith('.css')) {
        let content = fs.readFileSync(fullPath, 'utf8');
        let modified = false;

        // Use absolute path from root domain since it's hosted on services.galaitcare.com
        const relativePrefix = '/';

        if (fullPath.endsWith('.html')) {
          // Replace Next.js absolute paths with assets path
          content = content.replace(/(src|href)="\/_next\//g, `$1="/assets/`);
          content = content.replace(/(src|href)="\/images\//g, `$1="/images/`);
          
          modified = true;
        }

        if (fullPath.endsWith('.js')) {
          // Fix Next.js static asset loading in JS chunks
          content = content.replace(/\"\/_next\//g, `"/assets/`);
          content = content.replace(/\"\/images\//g, `"/images/`);
          modified = true;
        }

        if (fullPath.endsWith('.css')) {
          // Fix CSS urls
          content = content.replace(/url\(\"\/_next\//g, `url("/assets/`);
          content = content.replace(/url\(\'\/_next\//g, `url('/assets/`);
          content = content.replace(/url\(\/_next\//g, `url(/assets/`);
          
          content = content.replace(/url\(\"\/images\//g, `url("/images/`);
          content = content.replace(/url\(\'\/images\//g, `url('/images/`);
          content = content.replace(/url\(\/images\//g, `url(/images/`);
          modified = true;
        }



        if (modified) {
          fs.writeFileSync(fullPath, content, 'utf8');
        }
      }
    }
  }
}

processDirectory(outDir);

// Rename _next to assets
const nextDir = path.join(outDir, '_next');
const assetsDir = path.join(outDir, 'assets');
if (fs.existsSync(nextDir)) {
  fs.renameSync(nextDir, assetsDir);
}

console.log('Successfully processed out/ directory for cPanel compatibility.');
