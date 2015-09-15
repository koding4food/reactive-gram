module.exports = {
  entry: './build/app/app.js',
  output: {
    filename: './build/public/js/app.bundle.js'
  },
  module: {
    preLoaders: [],
    loaders: [
      // {test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel'}
    ]
  }
};
