module.exports = {
  entry: './src/app.js',
  output: {
    path: __dirname,
    filename: 'static/bundle.js'
  },
  module: {
    loaders: [
      { 
        test: /\.styl$/,
        loader: 'style-loader!css-loader!stylus-loader'
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