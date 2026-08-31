const fs = require('fs');
const path = require('path');
const { globSync } = require('glob');

const srcDir = path.join(process.cwd(), 'src');

const files = globSync('**/*.tsx', { cwd: srcDir, absolute: true });

let updatedCount = 0;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  // Replace image paths in strings. Assuming paths like "/images/something.jpg" or "/images/something.png"
  content = content.replace(/\/images\/([^"'\s]+)\.(jpg|jpeg|png)/gi, '/images/$1.webp');

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    updatedCount++;
    console.log(`Updated ${path.basename(file)}`);
  }
}

console.log(`Finished updating ${updatedCount} files.`);
