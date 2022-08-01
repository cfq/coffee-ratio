const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  mode: 'none',
  entry: { main: './src/js/index.js' },
  output: {
    path: path.resolve(__dirname, 'static/js'),
    filename: 'main.js'
  },
  devServer: {
    static: path.join(__dirname, '/'),
    compress: true,
    port: 8080,
    devMiddleware: {
      writeToDisk: true
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /(.scss|.css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader', // translates CSS into CommonJS
            options: {
              url: false
            },
          },
          {
            loader: 'sass-loader', // compiles Sass to CSS
            options: {
              sassOptions: {
                outputStyle: 'compressed'
              }
            },
          },
        ],
	  }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '../css/styles.css'
    }),
  ]
};
