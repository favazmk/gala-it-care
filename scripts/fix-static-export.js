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

        // Calculate depth to determine relative path
        const relativeToOut = path.relative(outDir, directory);
        const depth = relativeToOut === '' ? 0 : relativeToOut.split(path.sep).length;
        const relativePrefix = depth === 0 ? './' : '../'.repeat(depth);

        if (fullPath.endsWith('.html')) {
          // Replace Next.js absolute paths with relative paths
          content = content.replace(/(src|href)="\/_next\//g, `$1="${relativePrefix}_next/`);
          content = content.replace(/(src|href)="\/images\//g, `$1="${relativePrefix}images/`);
          
          // Replace internal page links to .html (excluding anchor links and external links)
          content = content.replace(/href="\/([^"\.#]+)"/g, `href="${relativePrefix}$1.html"`);
          content = content.replace(/href="\/"/g, `href="${relativePrefix}index.html"`);
          modified = true;
        }

        if (fullPath.endsWith('.js')) {
          // Fix Next.js static asset loading in JS chunks
          content = content.replace(/\"\/_next\//g, `"${relativePrefix}_next/`);
          content = content.replace(/\"\/images\//g, `"${relativePrefix}images/`);
          modified = true;
        }

        if (fullPath.endsWith('.css')) {
          // Fix CSS urls
          content = content.replace(/url\(\"\/_next\//g, `url("${relativePrefix}_next/`);
          content = content.replace(/url\(\'\/_next\//g, `url('${relativePrefix}_next/`);
          content = content.replace(/url\(\/_next\//g, `url(${relativePrefix}_next/`);
          
          content = content.replace(/url\(\"\/images\//g, `url("${relativePrefix}images/`);
          content = content.replace(/url\(\'\/images\//g, `url('${relativePrefix}images/`);
          content = content.replace(/url\(\/images\//g, `url(${relativePrefix}images/`);
          modified = true;
        }

        // Fix Next.js virtual routing intercepting file:// protocol
        if (fullPath.endsWith('.html')) {
           const routerFixScript = `<script>
              // Intercept pushState for file:// protocol
              const originalPushState = window.history.pushState;
              window.history.pushState = function(state, title, url) {
                if (window.location.protocol === 'file:') {
                  try {
                    originalPushState.apply(window.history, [state, title, url]);
                  } catch (e) {
                    // Fallback to hard navigation
                    let targetUrl = url;
                    if (targetUrl.startsWith('/')) {
                       targetUrl = targetUrl.substring(1);
                    }
                    if (targetUrl === '') targetUrl = 'index.html';
                    else if (!targetUrl.endsWith('.html') && !targetUrl.includes('#') && !targetUrl.includes('?')) {
                       targetUrl = targetUrl + '.html';
                    }
                    window.location.href = targetUrl;
                  }
                } else {
                  originalPushState.apply(window.history, [state, title, url]);
                }
              };
           </script>`;
           if (!content.includes('originalPushState.apply')) {
               content = content.replace('</head>', `${routerFixScript}</head>`);
               modified = true;
           }
        }

        if (modified) {
          fs.writeFileSync(fullPath, content, 'utf8');
        }
      }
    }
  }
}

processDirectory(outDir);
console.log('Successfully processed out/ directory for local file:/// execution.');
