const path = require('path');
const resolve = require('resolve');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
const ModuleNotFoundPlugin = require('react-dev-utils/ModuleNotFoundPlugin');
const ForkTsCheckerWebpackPlugin = require('react-dev-utils/ForkTsCheckerWebpackPlugin');
const merge = require('webpack-merge');
const paths = require('./paths');
const getClientEnvironment = require('./env');
const baseWebpackConfig = require('./webpack.base.config')();

const env = getClientEnvironment('');
const publicPath = '/';

console.log('appIndexJs: ',paths.appIndexJs);

module.exports = merge({}, baseWebpackConfig, {
  mode: 'development',
  entry: [require.resolve('react-dev-utils/webpackHotDevClient'), paths.appIndexJs].filter(Boolean),
  output: {
    filename: '[name].js',
    publicPath: publicPath
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
    new ModuleNotFoundPlugin(paths.appPath),
    new webpack.DefinePlugin(env.stringified),
    new WatchMissingNodeModulesPlugin(paths.appNodeModules),
    new ForkTsCheckerWebpackPlugin({
      typescript: resolve.sync('typescript', {
        basedir: paths.appNodeModules
      }),
      async: true,
      useTypescriptIncrementalApi: true,
      checkSyntacticErrors: true,
      resolveModuleNameModule: process.versions.pnp ? `${__dirname}/pnpTs.js` : undefined,
      resolveTypeReferenceDirectiveModule: process.versions.pnp ? `${__dirname}/pnpTs.js` : undefined,
      tsconfig: paths.appTsConfig,
      reportFiles: ['**', '!**/__tests__/**', '!**/?(*.)(spec|test).*', '!**/src/setupProxy.*', '!**/src/setupTests.*'],
      watch: paths.appSrc,
      silent: true
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../public'),
        to: path.resolve(__dirname, '../dist'),
        ignore: ['libs/Cesium/**/*']
      }
    ])
  ].filter(Boolean)
});
