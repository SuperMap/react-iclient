const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExternalsOrderPlugin = require('./plugins/ExternalsOrderPlugin');
const { merge } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config')(true);
const paths = require('./paths');
const pkg = require('../package.json');

const outputFileName = 'iclient-mapboxgl-react';


function getProdConfig(isMinify) {
  const WebpackConfig = merge({}, baseWebpackConfig, {
    mode: 'production',
    bail: true,
    entry: [path.resolve(__dirname, '../src/mapboxgl/index.tsx')],
    output: {
      path: paths.appBuild,
      filename: isMinify ? `${outputFileName}.min.js` : `${outputFileName}.js`,
      publicPath: paths.publicUrlOrPath,
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
        canvg: 'canvg',
        mapv: 'mapv',
        'three/build/three': {
          root: 'THREE',
          commonjs: 'three/build/three',
          commonjs2: 'three/build/three',
          amd: 'three/build/three'
        }
      },
      function({ request }, callback) {
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
        if (/\/public\/libs\/iclient-mapboxgl\/iclient-mapboxgl/.test(request)) {
          return callback(null, {
            root: 'SuperMap',
            commonjs: '../public/libs/iclient-mapboxgl/iclient-mapboxgl.min.js',
            commonjs2: '../public/libs/iclient-mapboxgl/iclient-mapboxgl.min.js',
            amd: '../public/libs/iclient-mapboxgl/iclient-mapboxgl.min.js'
          });
        }
        callback();
      }
    ],
    optimization: {
      minimizer: []
    },
    plugins: [
      new webpack.BannerPlugin(`
      ${pkg.name}.(${pkg.homepage})
      Copyright© 2000 - 2024 SuperMap Software Co.Ltd
      license: ${pkg.license}
      version: v${pkg.version}
     `),
      new MiniCssExtractPlugin({
        filename: isMinify ? `${outputFileName}.min.css` : `${outputFileName}.css`
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, '../public/mbgl-index.js'),
            to: path.resolve(__dirname, '../dist/mapboxgl/index.js')
          }
        ]
      }),
      new ExternalsOrderPlugin()
    ]
  });

  if (isMinify) {
    WebpackConfig.optimization.minimize = true;
    WebpackConfig.optimization.minimizer.push(
      new TerserPlugin({
        terserOptions: {
          parse: {
            ecma: 8
          },
          compress: {
            ecma: 5,
            warnings: false,
            comparisons: false,
            inline: 2,
          },
          mangle: {
            safari10: true,
          },
          output: {
            ecma: 5,
            comments: true,
            ascii_only: true
          }
        }
      }),
      new CssMinimizerPlugin()
    );
  }

  // const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
  // WebpackConfig.plugins.push(new BundleAnalyzerPlugin());

  return WebpackConfig;
}

const prodConfig = getProdConfig();
const minProdConfig = getProdConfig(true);

module.exports = [prodConfig, minProdConfig];
