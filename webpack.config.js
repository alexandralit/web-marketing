const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.js',
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },

  mode: 'development',
  devServer: {
      static: path.resolve(__dirname, './dist'),
      port: 8080,
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './src/assets/img',
          to: './img',
        }
      ]
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/template.hbs',
      templateParameters: require('./src/assets/dataset.json'),
    }),
    new CleanWebpackPlugin(),
  ],

  module: {
    rules: [
      {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
      },
      {
        test: /\.(png|jpg)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'webfonts',
            publicPath: '../webfonts',
          },
        }],
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.hbs$/,
        use: ['handlebars-template-loader'],
      },
    ],
  },
}