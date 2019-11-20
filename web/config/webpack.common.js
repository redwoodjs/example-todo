/* eslint-disable import/no-extraneous-dependencies */
const path = require('path')

const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const WebpackAssetsManifest = require('webpack-assets-manifest')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const { getHammerConfig } = require('@hammerframework/hammer-core')

const hammerConfig = getHammerConfig()

module.exports = (webpackEnv) => {
  const isEnvProduction = webpackEnv === 'production'

  const getStyleLoaders = () => {
    return [
      {
        test: /\.scss$/,
        use: [
          isEnvProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          isEnvProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
        ],
      },
    ]
  }

  return {
    entry: {
      app: path.resolve(__dirname, '../src/index.js'),
    },
    resolve: {
      plugins: [
        new DirectoryNamedWebpackPlugin({
          honorIndex: true,
          exclude: /node_modules/,
        }),
      ],
      alias: {
        // https://www.styled-components.com/docs/faqs#duplicated-module-in-node_modules
        'styled-components': path.resolve(
          hammerConfig.baseDir,
          'node_modules',
          'styled-components'
        ),
        react: path.resolve(hammerConfig.baseDir, 'node_modules', 'react'),
      },
    },
    plugins: [
      new WebpackAssetsManifest({
        entrypoints: true,
        writeToDisk: true,
        publicPath: true,
      }),
      isEnvProduction &&
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash:8].css',
        chunkFilename: '[name].[contenthash:8].css',
      }),
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
      new webpack.ProvidePlugin({
        React: 'react',
        PropTypes: 'prop-types',
        gql: ['@hammerframework/web', 'gql'],
      }),
      new webpack.DefinePlugin({
        '__HAMMER__.apiProxyPath': JSON.stringify(
          hammerConfig.web.apiProxyPath
        ),
      }),
      new FaviconsWebpackPlugin(
        path.join(hammerConfig.baseDir, 'web/src/favicon.png')
      ),
      new Dotenv({
        path: `${hammerConfig.baseDir}/.env`,
      }),
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    ].filter(Boolean),
    module: {
      rules: [
        {
          oneOf: [
            {
              loader: 'null-loader',
              test: /\.(md|test\.js|stories\.js)$/,
            },
            {
              test: /\.js$/,
              exclude: /(node_modules)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env'],
                  cacheDirectory: true,
                },
              },
            },
            {
              test: /\.(png|jpg|gif)$/,
              use: [
                {
                  loader: 'url-loader',
                  options: {
                    limit: 8192,
                    name: '[name].[hash:8].[ext]',
                  },
                },
              ],
            },
            {
              test: /\.svg$/,
              loader: 'svg-inline-loader'
            },
            ...getStyleLoaders(),
            {
              loader: 'file-loader',
              exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
              options: {
                name: '[name].[hash:8].[ext]',
              },
            },
          ],
        },
      ],
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
      runtimeChunk: true,
    },
    output: {
      pathinfo: true,
      filename: '[name].[hash:8].bundle.js',
      chunkFilename: '[name].[hash:8].bundle.js',
      path: path.resolve(__dirname, '../dist'),
      publicPath: '/',
    },
  }
}
