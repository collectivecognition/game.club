module.exports = {
  entry: './src/app.js',
  output: {
    path: __dirname + '/static/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { 
        test: /\.styl$/,
        loader: 'style-loader!css-loader!stylus-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'url-loader?limit=100000'
      },
      {
        test: /\.svg$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: { presets: [ 'es2015', 'react' ] }
      }
    ]
  }
};