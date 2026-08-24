const fs = require('fs-extra');
const path = require('path');

function getPublishKey() {
  if (process.env['npm_config_mapboxgl'] === 'true') {
    console.log('npm_config_mapboxgl is true, using mapboxgl');
    return 'mapboxgl';
  }

  let argv = {};
  try {
    argv = JSON.parse(process.env['npm_config_argv'] || '{}');
  } catch (error) {
    console.log('Failed to parse npm_config_argv:', process.env['npm_config_argv'], process.argv.slice(2));
    argv = {};
  }

  let option = (argv.original || process.argv.slice(2)).find(arg => arg.startsWith('-'));
  const key = option ? option.replace(/^-+/, '') : 'mapboxgl';
  return key;
}

let key = getPublishKey();

fs.copy(path.resolve(__dirname, `../src/${key}/package-config.json`), path.resolve(__dirname, `../package.json`), err => {
  if (err) throw err;
});
fs.copy(path.resolve(__dirname, `../src/${key}/.npmignore`), path.resolve(__dirname, `../.npmignore`), err => {
  if (err) throw err;
});
fs.copy(path.resolve(__dirname, `../dist/${key}/`), path.resolve(__dirname, `../dist/`), err => {
  if (err) throw err;
});
fs.copy(path.resolve(__dirname, `../src/${key}/README.md`), path.resolve(__dirname, `../README.md`), err => {
  if (err) throw err;
});

