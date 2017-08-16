var path = require('path');

module.exports = {
  entry: {
    index: './index.pug',
    about: './about.pug',
  },
  output: {
    path: path.resolve('public'),
    filename: '[name].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.pug'],
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: ['file-loader?name=[path][name].html', 'pug-html-loader'],
      },
    ],
  },
};
