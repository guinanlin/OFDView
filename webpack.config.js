const path = require('path');

module.exports = {
  entry: './js/cnofd-view.js', // ??????
  output: {
    filename: 'ofdview.bundle.js', // ??????
    path: path.resolve(__dirname, 'dist'), // ????
    library: 'OFDView', // ????????????
    libraryTarget: 'umd', // ?? CommonJS?AMD ????
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // ?? CSS ??
      },
      // ???????
    ],
  },
  resolve: {
    extensions: ['.js', '.css'],
  },
};
