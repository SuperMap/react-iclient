
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { merge } = require('webpack-merge');
const paths = require('./paths');
const baseWebpackConfig = require('./webpack.base.config')(false);

const devMerge = merge({}, baseWebpackConfig, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: paths.appIndexJs,
  output: {
    path: paths.appBuild,
    pathinfo: true,
    filename: 'static/js/[name].js',
    chunkFilename: 'static/js/[name].chunk.js',
    publicPath: paths.publicUrlOrPath
  },
  plugins: [
    new HtmlWebpackPlugin(
      Object.assign(
        {},
        {
          inject: true,
          template: paths.appHtml
        }
      )
    ),
    new CaseSensitivePathsPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../public'),
          to: path.resolve(__dirname, '../dist'),
          globOptions: { ignore: ['libs/Cesium/**/*'] }
        }
      ]
    })
  ].filter(Boolean)
});
module.exports = devMerge;
