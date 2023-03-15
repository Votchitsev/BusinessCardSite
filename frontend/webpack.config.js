const path = require('path')

module.exports = {
  resolve: {
    extensions: ['.jsx', '.js'],
  },
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'static/frontend/'),
    filename: 'main.js',
  },
  watch: true,
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  }
}
