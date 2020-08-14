const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
//const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const PATHS = {
  dist: path.resolve(__dirname, 'dist'),
  src: path.resolve(__dirname, 'src'),
};

module.exports = (env, options) => {
  const isProduction = options.mode === 'production';
  return {
    mode: options.mode,
    devtool: isProduction ? false : 'source-map',
    entry: {
      script: './src/index.tsx',
      data: './src/data/data.ts',
    },
    output: {
      path: PATHS.dist,
      filename: 'js/[name].[contenthash:8].js',
    },
    resolve: {
      modules: [path.resolve(__dirname, './src/'), 'node_modules'],
      extensions: ['.js', '.jsx', '.tsx', '.ts'],
    },
    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'ts-loader',
            },
          ],
        },
        // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
        {
          enforce: 'pre',
          test: /\.js$/,
          loader: 'source-map-loader',
        },
        {
          test: /\.(js|jsx)$/,
          exclude: ['/node_modules/', '/postcss.config.js'],
          loader: 'babel-loader',
        },
        {
          test: /\.(sc|c)ss$/,
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
              options: {
                sourceMap: !isProduction,
              },
            },
            {
              loader: 'postcss-loader',
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: !isProduction,
                webpackImporter: true,
              },
            },
          ],
        },
        {
          test: /\.(svg|png|jpg)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'assets/images/[name].[ext]',
              },
            },
          ],
        },
        {
          test: /\.(ttf|eot|woff|woff2)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'assets/fonts/[name].[ext]',
              },
            },
          ],
        },
        {
          test: /\.html$/,
          loader: 'html-loader',
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Songs Of The Birds',
        template: 'src/html/index.html',
        /* favicon: 'src/html/favicon.ico', */
        meta: {
          charset: 'UTF-8',
          viewport: 'width=device-width, initial-scale=1.0',
        },
        inject: true,
        minify: {
          removeComments: true,
          collapseWhitespace: true,
        },
        environment: process.env,
      }),
      new CopyWebpackPlugin([
        {
          from: 'src/assets/images/',
          to: 'assets/images/',
        },
        {
          from: 'src/assets/audio/',
          to: 'assets/audio/',
        },
        {
          from: 'src/assets/fonts/',
          to: 'assets/fonts/',
        },
      ]),
      new CleanWebpackPlugin(),
      new webpack.optimize.AggressiveSplittingPlugin({
        minSize: 30000,
        maxSize: 50000,
      }),
      //new BundleAnalyzerPlugin(),
    ],
    optimization: {
      minimize: isProduction,
      removeAvailableModules: isProduction,
      splitChunks: {
        chunks: 'all',
        minSize: 20000,
        maxSize: 0,
        minChunks: 1,
        maxAsyncRequests: 30,
        maxInitialRequests: 30,
        automaticNameDelimiter: '~',
        enforceSizeThreshold: 50000,
        cacheGroups: {
          defaultVendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
        },
      },
    },
    devServer: {
      contentBase: PATHS.dist,
      watchContentBase: true,
      compress: true,
      port: 9000,
    },
    /*     externals: {
      react: 'React',
      'react-dom': 'ReactDOM',
    }, */
  };
};
