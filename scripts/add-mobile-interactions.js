const fs = require('fs');
const path = require('path');
const glob = require('glob');

const files = glob.sync('src/**/*.tsx');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  // Add active state to hover background colors
  content = content.replace(/hover:bg-([a-zA-Z0-9/\[\]\-]+)/g, (match, p1) => {
    return `${match} active:bg-${p1}`;
  });

  // Add active state to hover text colors
  content = content.replace(/hover:text-([a-zA-Z0-9/\[\]\-]+)/g, (match, p1) => {
    return `${match} active:text-${p1}`;
  });

  // Add active state to hover border colors
  content = content.replace(/hover:border-([a-zA-Z0-9/\[\]\-]+)/g, (match, p1) => {
    return `${match} active:border-${p1}`;
  });

  // Add active state to group-hover scale
  content = content.replace(/group-hover:scale-([a-zA-Z0-9/\[\]\-]+)/g, (match, p1) => {
    return `${match} group-active:scale-${p1}`;
  });

  // Add active state to group-hover bg
  content = content.replace(/group-hover:bg-([a-zA-Z0-9/\[\]\-]+)/g, (match, p1) => {
    return `${match} group-active:bg-${p1}`;
  });

  // Add active state to group-hover backdrop blur
  content = content.replace(/group-hover:backdrop-blur-none/g, (match) => {
    return `${match} group-active:backdrop-blur-none`;
  });

  // Add active state to group-hover opacity
  content = content.replace(/group-hover:opacity-([a-zA-Z0-9/\[\]\-]+)/g, (match, p1) => {
    return `${match} group-active:opacity-${p1}`;
  });

  // Add a nice physical scale-down effect to all clickable buttons/links that have hover:-translate-y-0.5 or similar,
  // or generally, if it has a shadow-premium-hover or hover:-translate-y-X, add active:scale-95 active:translate-y-0
  content = content.replace(/hover:-translate-y-([a-zA-Z0-9.]+)/g, (match) => {
    return `${match} active:translate-y-0 active:scale-[0.98]`;
  });

  // Deduplicate classes if we accidentally added them twice
  const classRegex = /className="([^"]+)"/g;
  content = content.replace(classRegex, (match, p1) => {
    const classes = p1.split(/\s+/);
    const uniqueClasses = [...new Set(classes)];
    return `className="${uniqueClasses.join(' ')}"`;
  });

  // Also handle template literals className={`...`}
  const templateClassRegex = /className=\{`([^`]+)`\}/g;
  content = content.replace(templateClassRegex, (match, p1) => {
    // This is a bit trickier because of variables, but we can deduplicate static parts if they are space separated
    const classes = p1.split(/\s+/);
    const uniqueClasses = [...new Set(classes)];
    return `className={\`${uniqueClasses.join(' ')}\`}`;
  });

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
