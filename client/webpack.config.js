const path = require('path')

module.exports = {
  entry: ['./client/index.js', './client/styles/main.scss'],
  output: {
    path: path.join(__dirname, '..', 'server', 'public'),
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: {
          loader: 'url-loader',
        },
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    fallback: { 
      "assert": false, 
      "util": false 
    }
  },
  devtool: 'source-map',
}


