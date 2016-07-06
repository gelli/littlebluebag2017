import ExtractTextPlugin from 'extract-text-webpack-plugin';
import path from 'path';

export default {
  entry: {
    main: ['./src/js/main.js', './src/css/main.scss'],
  },
  output: {
    path: path.resolve('assets'),
    publicPath: '/',
    filename: 'main.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
        },
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap!sass?sourceMap'),
      },
    ],
  },
  resolve: {
    modulesDirectories: ['./bower_components', 'node_modules'],
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
  ],
};
