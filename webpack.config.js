var webpack = require('webpack')

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    './index'
  ],
  output: { path: __dirname, filename: 'bundle.js' },
  devServer: {
    inline: true,
    port: 8080,
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/,
      query: {
        cacheDirectory: true,
        presets: ['es2015', 'react'],
      },
    }],
  },
};
