var webpack = require('webpack');
var path = require('path');
var TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',

  resolve: {
    plugins: [
      new TsconfigPathsPlugin({
        configFile: './tsconfig.json'
      })
    ],
    extensions: ['.ts', '.js']
  },

  module: {
    rules: [{
        test: /\.ts$/,
        loaders: [{
          loader: 'awesome-typescript-loader'
        }, 'angular2-template-loader']
      },
      {
        test: /.+\.ts$/,
        exclude: /(index.ts|mocks.ts|\.spec\.ts$)/,
        loader: 'istanbul-instrumenter-loader',
        enforce: 'post',
        query: {
          esModules: true
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader?attrs=false'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'null-loader'
      }
    ]
  },

  plugins: [
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /(ionic-angular)|(angular(\\|\/)core(\\|\/)@angular)/,
      root('./src'), // location of your src
      {} // a map of your routes
    )
  ]
};

function root(localPath) {
  return path.resolve(__dirname, localPath);
}