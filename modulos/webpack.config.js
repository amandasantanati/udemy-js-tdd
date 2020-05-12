const path = require('path');

const config = {
  entry: './app.js',
  output: {
    path: path.resolve(__dirname, ''),
    filename: './build.js'
  },
  module: {
    rules : [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};

module.exports = config;
