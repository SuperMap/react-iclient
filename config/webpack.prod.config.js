const path = require('path');
const webpack = require('webpack');
const resolve = require('resolve');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ModuleNotFoundPlugin = require('react-dev-utils/ModuleNotFoundPlugin');
const ForkTsCheckerWebpackPlugin = require('react-dev-utils/ForkTsCheckerWebpackPlugin');
const typescriptFormatter = require('react-dev-utils/typescriptFormatter');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config')(true);
const paths = require('./paths');
const getClientEnvironment = require('./env');
const pkg = require('../package.json');

const publicUrl = paths.servedPath.slice(0, -1);
const env = getClientEnvironment(publicUrl);

const outputFileName = 'iclient-mapboxgl-react';

function getProdConfig(isMinify) {
  const WebpackConfig = merge({}, baseWebpackConfig, {
    mode: 'production',
    bail: true,
    entry: [path.resolve(__dirname, '../src/mapboxgl/index.tsx')].filter(Boolean),
    output: {
      path: path.resolve(__dirname, '../dist/mapboxgl'),
      filename: isMinify ? `${outputFileName}.min.js` : `${outputFileName}.js`,
      libraryTarget: 'umd',
      libraryExport: 'default',
      library: ['SuperMap', 'Components']
    },
    externals: [
      {
        react: {
          root: 'React',
          commonjs: 'react',
          commonjs2: 'react',
          amd: 'react'
        },
        'react-dom': {
          root: 'ReactDOM',
          commonjs2: 'react-dom',
          commonjs: 'react-dom',
          amd: 'react-dom'
        },
        antd: 'antd',
        echarts: 'echarts',
        mapv: 'mapv',
        three: {
          root: 'THREE',
          commonjs: 'three',
          commonjs2: 'three',
          amd: 'three'
        }
      },
      function(context, request, callback) {
        if (/\/public\/libs\/mapboxgl\/mapbox-gl-enhance/.test(request)) {
          return callback(null, {
            root: 'mapboxgl',
            commonjs: '../public/libs/mapboxgl/mapbox-gl-enhance.js',
            commonjs2: '../public/libs/mapboxgl/mapbox-gl-enhance.js',
            amd: '../public/libs/mapboxgl/mapbox-gl-enhance.js'
          });
        }
        if (/\/public\/libs\/deckgl\/deck.gl/.test(request)) {
          return callback(null, {
            root: 'DeckGL',
            commonjs: '../public/libs/deckgl/deck.gl.min.js',
            commonjs2: '../public/libs/deckgl/deck.gl.min.js',
            amd: '../public/libs/deckgl/deck.gl.min.js'
          });
        }
        if (/\/public\/libs\/echarts-layer\/EchartsLayer/.test(request)) {
          return callback(null, {
            root: 'EchartsLayer',
            commonjs: '../public/libs/echarts-layer/EchartsLayer.js',
            commonjs2: '../public/libs/echarts-layer/EchartsLayer.js',
            amd: '../public/libs/echarts-layer/EchartsLayer.js'
          });
        }
        if (/\/public\/libs\/iclient-mapboxgl\/iclient9-mapboxgl/.test(request)) {
          return callback(null, {
            root: 'SuperMap',
            commonjs: '../public/libs/iclient-mapboxgl/iclient9-mapboxgl.min.js',
            commonjs2: '../public/libs/iclient-mapboxgl/iclient9-mapboxgl.min.js',
            amd: '../public/libs/iclient-mapboxgl/iclient9-mapboxgl.min.js'
          });
        }
        callback();
      }
    ],
    optimization: {
      minimizer: []
    },
    plugins: [
      new ModuleNotFoundPlugin(paths.appPath),
      new webpack.DefinePlugin(env.stringified),
      new webpack.BannerPlugin(`
      ${pkg.name}.(${pkg.homepage})
      Copyright© 2000 - 2020 SuperMap Software Co.Ltd
      license: ${pkg.license}
      version: v${pkg.version}
     `),
      new MiniCssExtractPlugin({
        filename: isMinify ? `${outputFileName}.min.css` : `${outputFileName}.css`
      }),
      new ForkTsCheckerWebpackPlugin({
        typescript: resolve.sync('typescript', {
          basedir: paths.appNodeModules
        }),
        async: false,
        useTypescriptIncrementalApi: true,
        checkSyntacticErrors: true,
        resolveModuleNameModule: process.versions.pnp ? `${__dirname}/pnpTs.js` : undefined,
        resolveTypeReferenceDirectiveModule: process.versions.pnp ? `${__dirname}/pnpTs.js` : undefined,
        tsconfig: paths.appTsConfig,
        reportFiles: [
          '**',
          '!**/__tests__/**',
          '!**/?(*.)(spec|test).*',
          '!**/src/setupProxy.*',
          '!**/src/setupTests.*'
        ],
        watch: paths.appSrc,
        silent: true,
        formatter: typescriptFormatter
      }),
      new CopyWebpackPlugin([
        {
          from: path.resolve(__dirname, '../public/mbgl-index.js'),
          to: path.resolve(__dirname, '../dist/mapboxgl/index.js')
        }
      ])
    ]
  });

  if (isMinify) {
    WebpackConfig.optimization.minimize = true;
    WebpackConfig.optimization.minimizer.push(
      new TerserPlugin({
        terserOptions: {
          compress: {
            warnings: false
          },
          output: {
            comments: false
          }
        },
        extractComments: {
          banner: () => {
            return `
* 
*       @supermap/react-iclient.(http://iclient.supermap.io)
*       Copyright© 2000 - 2020 SuperMap Software Co.Ltd
*       license: Apache-2.0
*       version: v10.1.0-alpha
* 
`;
          },
        },
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
      new OptimizeCSSAssetsPlugin({})
    );
  }

  // const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
  // WebpackConfig.plugins.push(new BundleAnalyzerPlugin());

  return WebpackConfig;
}

const prodConfig = getProdConfig();
const minProdConfig = getProdConfig(true);

module.exports = [prodConfig, minProdConfig];
