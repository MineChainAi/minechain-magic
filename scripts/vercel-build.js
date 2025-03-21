
// This script is used for Vercel builds to ensure proper cache invalidation

console.log('Starting Vercel build process...');

const fs = require('fs');
const path = require('path');

// Create a build info file to force cache invalidation
const buildInfo = {
  buildTime: new Date().toISOString(),
  buildId: Math.random().toString(36).substring(2, 15),
};

// Create the build info directory if it doesn't exist
const buildInfoDir = path.join(process.cwd(), 'public', 'build-info');
if (!fs.existsSync(buildInfoDir)) {
  fs.mkdirSync(buildInfoDir, { recursive: true });
}

// Write the build info to a file
fs.writeFileSync(
  path.join(buildInfoDir, 'build-info.json'),
  JSON.stringify(buildInfo, null, 2)
);

console.log(`Build info created: ${JSON.stringify(buildInfo)}`);
console.log('Vercel build preparation complete!');
