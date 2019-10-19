/* eslint-disable import/no-extraneous-dependencies */
const path = require('path')

const merge = require('webpack-merge')
const { getHammerConfig } = require('@hammerframework/hammer-core')
const escapeRegExp = require('lodash.escaperegexp')

const webpackConfig = require('./webpack.common.js')
const WEBPACK_MODE = 'development'

const hammerConfig = getHammerConfig()

module.exports = merge(webpackConfig(), {
  mode: WEBPACK_MODE,
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    writeToDisk: false,
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, '../dist'),
    port: hammerConfig.web.port,
    proxy: {
      [hammerConfig.web.apiProxyPath]: {
        target: `http://localhost:${hammerConfig.api.port}`,
        pathRewrite: {
          [`^${escapeRegExp(hammerConfig.web.apiProxyPath)}`]: '',
        },
      },
    },
    inline: true,
    overlay: true,
  },
  optimization: {
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
  },
})
