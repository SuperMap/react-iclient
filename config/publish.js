const fs = require('fs');
const path = require('path');

let argv = JSON.parse(process.env['npm_config_argv']);
let origin = argv.original;
let key = origin[1] ? origin[1].replace('-', '') : 'mapboxgl';

fs.copyFile(path.resolve(__dirname, `../src/${key}/package-config.json`), path.resolve(__dirname, `../package.json`), err => {
  if (err) throw err;
});
fs.copyFile(path.resolve(__dirname, `../src/${key}/.npmignore`), path.resolve(__dirname, `../.npmignore`), err => {
  if (err) throw err;
});

