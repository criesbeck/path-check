const path = require('path');
const prefix = require('global-prefix');
const isWin = process.platform === 'win32';

if (!prefix) {
  console.log('NPM prefix not found');
  return -1;
}

const binPrefix = isWin ? prefix : `${prefix}${path.sep}bin`;
const paths = process.env.PATH.split(path.delimiter);

if (paths.includes(binPrefix)) {
  console.log(`${binPrefix} found in PATH`);
} else {
  console.log(`${binPrefix} not found in PATH`);
  paths.forEach(x => {
    console.log(`  ${x}`)
  });
}

return 0;
