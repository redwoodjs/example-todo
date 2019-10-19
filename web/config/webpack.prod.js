/* eslint-disable import/no-extraneous-dependencies */
const merge = require('webpack-merge')

const webpackConfig = require('./webpack.common.js')
const WEBPACK_MODE = 'production'

module.exports = merge(webpackConfig(WEBPACK_MODE), {
  mode: WEBPACK_MODE,
})
