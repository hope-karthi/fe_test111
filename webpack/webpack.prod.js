const webpack = require('webpack')

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  devServer: {
    allowedHosts: [
      'dev.homenow.in',
      'homenow.in',
    ],
    historyApiFallback: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('karthik S in production'),
      'process.env.BACKEND_URL': JSON.stringify('http://23.22.128.185:8000/')
    }),
  ],
}