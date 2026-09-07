const fs = require('fs');
const path = require('path');
const { ZipArchive } = require('archiver');

const outDir = path.join(__dirname, '../out');
const zipFilePath = path.join(__dirname, '../galaitcare-cpanel-deploy.zip');

if (!fs.existsSync(outDir)) {
  console.error('Error: out/ directory does not exist. Run "npm run build" first.');
  process.exit(1);
}

// 1. Ensure .htaccess exists with correct permissions & MIME types
const htaccessContent = `# Apache configuration for Gala IT Care static export
DirectoryIndex index.html

# MIME Types for modern web assets
<IfModule mod_mime.c>
  AddType text/css .css
  AddType application/javascript .js
  AddType image/webp .webp
  AddType image/svg+xml .svg
  AddType font/woff2 .woff2
  AddType application/json .json
</IfModule>

# Browser Caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresDefault "access plus 2 days"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType font/woff2 "access plus 1 year"
</IfModule>

# Clean URLs & Directory Slashing
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  # If requested path is an existing directory without trailing slash, redirect with slash
  RewriteCond %{REQUEST_FILENAME} -d
  RewriteRule ^(.*[^/])$ /$1/ [L,R=301]

  # Don't rewrite existing files or directories
  RewriteCond %{REQUEST_FILENAME} -f [OR]
  RewriteCond %{REQUEST_FILENAME} -d
  RewriteRule ^ - [L]

  # 404 Fallback
  RewriteRule ^ 404.html [L]
</IfModule>

ErrorDocument 404 /404.html
`;

fs.writeFileSync(path.join(outDir, '.htaccess'), htaccessContent, 'utf8');
console.log('Created out/.htaccess');

// 2. Ensure both _next and assets folders exist so NO asset request ever fails
const nextDir = path.join(outDir, '_next');
const assetsDir = path.join(outDir, 'assets');

function copyDirSync(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

if (fs.existsSync(nextDir)) {
  copyDirSync(nextDir, assetsDir);
  console.log('Successfully mirrored _next to assets directory.');
} else if (fs.existsSync(assetsDir)) {
  copyDirSync(assetsDir, nextDir);
  console.log('Successfully mirrored assets to _next directory.');
}

// 3. Verify GTM tags in all HTML files
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

function checkAndInjectGTM(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      checkAndInjectGTM(fullPath);
    } else if (file.endsWith('.html')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;
      if (!content.includes('GTM-P7XD7GKJ')) {
        content = content.replace('<head>', '<head>' + gtmHeadScript);
        content = content.replace(/(<body[^>]*>)/, '$1' + gtmBodyNoscript);
        changed = true;
      }
      if (changed) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Injected GTM into: ${path.relative(outDir, fullPath)}`);
      }
    }
  }
}

checkAndInjectGTM(outDir);

// 4. Create standard Unix-compliant ZIP archive
console.log(`Packaging ${outDir} into ${zipFilePath}...`);

if (fs.existsSync(zipFilePath)) {
  fs.unlinkSync(zipFilePath);
}

const output = fs.createWriteStream(zipFilePath);
const archive = new ZipArchive({
  zlib: { level: 9 },
  forceLocalTime: true,
});

output.on('close', () => {
  console.log(`\nSUCCESS: Archive created successfully!`);
  console.log(`File: ${zipFilePath}`);
  console.log(`Total Size: ${(archive.pointer() / 1024 / 1024).toFixed(2)} MB`);
});

archive.on('error', (err) => {
  throw err;
});

archive.pipe(output);

// Recursively add all files with Unix permissions
function addDirectoryToArchive(dir, zipPrefix = '') {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    const zipPath = zipPrefix ? `${zipPrefix}/${file}` : file;

    if (stat.isDirectory()) {
      // Add directory entry with 0755 permissions
      archive.append(null, {
        name: zipPath + '/',
        mode: 0o755,
      });
      addDirectoryToArchive(fullPath, zipPath);
    } else {
      // Add file entry with 0644 permissions
      archive.file(fullPath, {
        name: zipPath,
        mode: 0o644,
      });
    }
  }
}

addDirectoryToArchive(outDir);
archive.finalize();
