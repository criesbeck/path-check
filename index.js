const prefix = require('global-prefix');

if (!prefix) {
  console.log('NPM prefix not found');
  return -1;
}

const binPrefix = `${prefix}/bin`;
const paths = process.env.PATH.split(':');

if (paths.includes(binPrefix)) {
  console.log(`${binPrefix} found in PATH`);
} else {
  console.log(`${binPrefix} not found in PATH`);
  paths.forEach(path => {
    console.log(`  ${path}`)
  });
}

return 0;
