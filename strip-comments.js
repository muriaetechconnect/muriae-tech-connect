const fs = require('fs');
const path = require('path');

function removeComments(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  content = content.replace(/\{\s*\/\*[\s\S]*?\*\/\s*\}/g, '');
  
  content = content.replace(/\/\*[\s\S]*?\*\//g, '');
  
  content = content.replace(/(?<!:)\/\/.*/g, '');

  content = content.replace(/\n\s*\n\s*\n/g, '\n\n');

  fs.writeFileSync(filePath, content, 'utf8');
}

function traverseDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      traverseDir(fullPath);
    } else if (/\.(ts|tsx|js|jsx)$/.test(fullPath)) {
      removeComments(fullPath);
    }
  }
}

const targetDir = path.resolve('c:/Users/Administrator/Desktop/muriae-tech-connect/src');
console.log('Stripping comments in: ' + targetDir);
traverseDir(targetDir);
console.log('Done');
