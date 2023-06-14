const fs = require('fs/promises');

const filePath = './docs/test.md';
fs.readFile(filePath, 'utf-8').then(data => {
  const pattern = /KEYWORD/g;
  const result = data.replace(pattern, "**replacement text**");
  console.log(`Writing ${filePath}`);
  return fs.writeFile(filePath, result, 'utf-8');
});
