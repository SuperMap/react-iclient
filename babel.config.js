module.exports = function (api) {
  api.cache(true);

  const presets = [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
          browsers: ['> 1%', 'last 2 versions', 'not ie <= 8']
        }
      }
    ],
    ['react-app']
  ];
  const plugins = [
    '@babel/plugin-transform-runtime',
    'transform-flow-strip-types',
    '@babel/plugin-transform-modules-commonjs',
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true
      }
    ],
    [
      'lodash',
      {
        id: ['lodash', 'recompose']
      }
    ]
  ];

  return {
    presets,
    plugins,
    ignore: ['./public/libs/mapboxgl']
  };
};
