const fs = require('fs');
const path = require('path');

const files = [
  'src/app/page.tsx',
  'src/app/laptop-repair-dubai-ajman/page.tsx',
  'src/app/data-recovery-dubai-ajman/page.tsx'
];

for (const file of files) {
  const absolutePath = path.join(process.cwd(), file);
  let content = fs.readFileSync(absolutePath, 'utf8');

  // We are looking for the hero section background wrapper
  const heroRegex = /<div className="absolute inset-0 z-0">\s*<div className="absolute inset-0 bg-gradient-to-r from-primary via-primary\/50 to-transparent z-10" \/>\s*<Image\s*src="([^"]+)"\s*alt="([^"]+)"\s*fill\s*priority\s*className="object-cover object-center"\s*\/>\s*<\/div>\s*<div className="w-full lg:w-\[55%\] relative z-20 p-10 lg:p-20 flex flex-col justify-center">/g;

  content = content.replace(heroRegex, (match, src, alt) => {
    return `<div className="absolute inset-0 z-0 hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/50 to-transparent z-10" />
              <Image 
                src="${src}"
                alt="${alt}"
                fill
                priority
                className="object-cover object-center"
              />
            </div>

            <div className="w-full lg:w-[55%] relative z-20 p-10 lg:p-20 flex flex-col justify-center">
              <div className="absolute inset-0 z-0 lg:hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/60 to-primary z-10" />
                <Image 
                  src="${src}"
                  alt="${alt}"
                  fill
                  priority
                  className="object-cover object-center"
                />
              </div>`;
  });

  // To make sure the text sits above the mobile image, we must ensure all content inside the text div has relative z-10.
  // We can just add a wrapper or check if it already has relative z-10.
  // Currently, the first child is `<div className="inline-flex... ">` which doesn't have relative z-10.
  // Actually, we can just replace `<div className="w-full lg:w-[55%] relative z-20 p-10 lg:p-20 flex flex-col justify-center">`
  // and wrap its inner contents in `<div className="relative z-10 flex flex-col">`. But wait, the inner items are already sibling to the `absolute inset-0 z-0` we just injected!
  // Wait, if we inject `<div className="absolute inset-0 z-0 lg:hidden">` as the first child of the text container, the subsequent elements (h1, p, ul) are placed afterwards.
  // By default, static elements might be rendered behind absolute elements unless they have position: relative.
  // Let's add relative z-10 to the immediate children of the text container, or just wrap them.
  // Better yet, in the regex replacement:

  const wrapRegex = /<div className="w-full lg:w-\[55%\] relative z-20 p-10 lg:p-20 flex flex-col justify-center">([\s\S]*?)<\!-- Right Content - Form -->/g;
  
  content = content.replace(wrapRegex, (match, innerContent) => {
    // Check if we already injected the mobile background
    if (innerContent.includes('lg:hidden')) {
        // We need to wrap everything after the injected mobile background in a relative z-10 div
        const parts = innerContent.split('</div>\n\n              <div className="inline-flex');
        if (parts.length === 2) {
             return `<div className="w-full lg:w-[55%] relative z-20 p-10 lg:p-20 flex flex-col justify-center">${parts[0]}</div>
              <div className="relative z-10 flex flex-col">
              <div className="inline-flex${parts[1]}</div>
            <!-- Right Content - Form -->`;
        }
    }
    return match;
  });

  fs.writeFileSync(absolutePath, content, 'utf8');
  console.log(`Updated mobile hero for ${file}`);
}
