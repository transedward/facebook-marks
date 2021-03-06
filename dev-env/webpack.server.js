var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

module.exports = function(webpackConfig) {
  var host = "0.0.0.0",
      port = 3001;

  return function(callback) {
    new WebpackDevServer(webpack(webpackConfig), {
      contentBase: 'https://localhost:3001',
      publicPath: webpackConfig.output.publicPath,
      https: true,
      // lazy: true,
      // watchDelay: 50,
      hot: true,
      // Unfortunately quiet swallows everything even error so it can't be used.
      quiet: false,
      // No info filters only initial compilation it seems.
      noInfo: true,
      // Remove console.log mess during watch.
      stats: {
        // assets: false,
        colors: true,
        // version: false,
        // hash: false,
        // timings: false,
        // chunks: false,
        // chunkModules: false
      }
    }).listen(port, host, function (err, result) {
      if (err) {
        console.log(err)
      } else {
        console.log('Listening at https://' + host + ':' + port);
      }

      callback()
    })
  }
}
