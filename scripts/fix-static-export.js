const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '../out');

if (!fs.existsSync(outDir)) {
  console.error('out/ directory not found. Please run next build first.');
  process.exit(1);
}

const gtmHeadScript = `<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-P7XD7GKJ');</script>
<!-- End Google Tag Manager -->`;

const gtmBodyNoscript = `<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P7XD7GKJ"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->`;

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
          
          // Ensure GTM tags in head and body
          if (!content.includes('<!-- Google Tag Manager -->')) {
            content = content.replace(/<script>\s*\(function\(w,d,s,l,i\)\{w\[l\]=w\[l\]\|\|\[\];[\s\S]*?GTM-P7XD7GKJ[\s\S]*?<\/script>/, '');
            content = content.replace('<head>', '<head>' + gtmHeadScript);
          }
          content = content.replace(/<!-- Google Tag Manager \(noscript\) -->[\s\S]*?<!-- End Google Tag Manager \(noscript\) -->/g, '');
          content = content.replace(/<noscript><iframe src="https:\/\/www\.googletagmanager\.com\/ns\.html\?id=GTM-P7XD7GKJ"[^>]*><\/iframe><\/noscript>/g, '');
          content = content.replace(/(<body[^>]*>)/, '$1' + gtmBodyNoscript);

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
