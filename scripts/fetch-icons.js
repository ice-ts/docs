#!/usr/bin/env node

/**
 * Script to fetch popular icon libraries and place them in public/icons/
 * 
 * Libraries fetched:
 * - Lucide Icons (https://lucide.dev)
 * - Heroicons (https://heroicons.com)
 * - Simple Icons (https://simpleicons.org) - for brand logos
 * - Tabler Icons (https://tabler.io/icons)
 */

import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const docsDir = path.resolve(__dirname, '..');
const iconsDir = path.join(docsDir, 'public', 'icons');

// Ensure icons directory exists
fs.mkdirSync(iconsDir, { recursive: true });

console.log('📦 Installing icon packages...');

// Install icon packages temporarily
execSync('npm install --no-save lucide-static @heroicons/react simple-icons @tabler/icons', {
  cwd: docsDir,
  stdio: 'inherit'
});

// Copy Lucide icons
const lucideSource = path.join(docsDir, 'node_modules', 'lucide-static', 'icons');
const lucideDest = path.join(iconsDir, 'lucide');
if (fs.existsSync(lucideSource)) {
  console.log('📁 Copying Lucide icons...');
  fs.mkdirSync(lucideDest, { recursive: true });
  const lucideFiles = fs.readdirSync(lucideSource).filter(f => f.endsWith('.svg'));
  for (const file of lucideFiles) {
    fs.copyFileSync(path.join(lucideSource, file), path.join(lucideDest, file));
  }
  console.log(`   ✓ Copied ${lucideFiles.length} Lucide icons`);
}

// Copy Simple Icons
const simpleIconsSource = path.join(docsDir, 'node_modules', 'simple-icons', 'icons');
const simpleIconsDest = path.join(iconsDir, 'simple-icons');
if (fs.existsSync(simpleIconsSource)) {
  console.log('📁 Copying Simple Icons...');
  fs.mkdirSync(simpleIconsDest, { recursive: true });
  const simpleFiles = fs.readdirSync(simpleIconsSource).filter(f => f.endsWith('.svg'));
  for (const file of simpleFiles) {
    fs.copyFileSync(path.join(simpleIconsSource, file), path.join(simpleIconsDest, file));
  }
  console.log(`   ✓ Copied ${simpleFiles.length} Simple Icons`);
}

// Copy Tabler icons
const tablerSource = path.join(docsDir, 'node_modules', '@tabler', 'icons', 'icons');
const tablerDest = path.join(iconsDir, 'tabler');
if (fs.existsSync(tablerSource)) {
  console.log('📁 Copying Tabler icons...');
  fs.mkdirSync(tablerDest, { recursive: true });
  
  // Tabler has outline and filled subdirectories
  const outlineDir = path.join(tablerSource, 'outline');
  const filledDir = path.join(tablerSource, 'filled');
  
  if (fs.existsSync(outlineDir)) {
    const outlineFiles = fs.readdirSync(outlineDir).filter(f => f.endsWith('.svg'));
    for (const file of outlineFiles) {
      fs.copyFileSync(path.join(outlineDir, file), path.join(tablerDest, file));
    }
    console.log(`   ✓ Copied ${outlineFiles.length} Tabler outline icons`);
  }
}

// For Heroicons, we need to extract from the React package or use a different approach
// Let's try to get them from unpkg CDN instead
console.log('📁 Fetching Heroicons from CDN...');
const heroiconsDest = path.join(iconsDir, 'heroicons');
fs.mkdirSync(heroiconsDest, { recursive: true });

// Common heroicons we might need
const heroiconsToFetch = [
  'code-bracket',
  'cube',
  'cube-transparent',
  'command-line',
  'cog-6-tooth',
  'puzzle-piece',
  'rocket-launch',
  'bolt',
  'beaker',
  'wrench-screwdriver',
  'server-stack',
  'cloud',
  'document-text',
  'folder',
  'archive-box'
];

for (const icon of heroiconsToFetch) {
  try {
    const url = `https://raw.githubusercontent.com/tailwindlabs/heroicons/master/src/24/outline/${icon}.svg`;
    const response = execSync(`curl -s "${url}"`, { encoding: 'utf-8' });
    if (response && response.includes('<svg')) {
      fs.writeFileSync(path.join(heroiconsDest, `${icon}.svg`), response);
    }
  } catch (e) {
    console.log(`   ⚠ Could not fetch heroicon: ${icon}`);
  }
}
console.log(`   ✓ Fetched Heroicons`);

console.log('\n✅ Icon libraries installed to public/icons/');
console.log('   - lucide/');
console.log('   - simple-icons/');
console.log('   - tabler/');
console.log('   - heroicons/');

